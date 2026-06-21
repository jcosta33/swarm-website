// Single-sourcing: the docs site DERIVES from the canon at build time — no copy is committed here.
// Locally the canon is the sibling `swarm` repo; on Vercel it must be made available to the build
// (W3: a git submodule or a pre-build sync of swarm/docs — tracked as a deploy concern).
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

// The canon: the local sibling checkout in dev, else the vendored clone the prebuild step fetches
// on CI/Vercel (see scripts/ensure-canon.mjs). Single source either way; the vendor copy is ephemeral.
const SIBLING = path.join(process.cwd(), "..", "swarm", "docs");
const VENDOR = path.join(process.cwd(), ".swarm-canon", "docs");
export const CANON = fs.existsSync(SIBLING) ? SIBLING : VENDOR;
const REPO_ROOT = path.join(CANON, ".."); // the git repo that contains docs/

export function canonAvailable(): boolean {
  return fs.existsSync(CANON);
}

// Real created/modified dates for a doc, from the canon's git history (author dates, oldest→newest).
// Needs full history — ensure-canon.mjs does a full clone (not --depth 1) so this works on Vercel.
// Degrades to null (caller falls back to build time) if git/history is unavailable. Cached per build.
const datesCache = new Map<string, { created: string; modified: string } | null>();
export function docDates(slug: string): { created: string; modified: string } | null {
  if (datesCache.has(slug)) return datesCache.get(slug) ?? null;
  let result: { created: string; modified: string } | null = null;
  try {
    const rel = path.posix.join("docs", `${slug}.md`);
    const out = execFileSync(
      "git",
      ["-C", REPO_ROOT, "log", "--follow", "--format=%aI", "--", rel],
      { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }
    ).trim();
    const lines = out.split(/\r?\n/).filter(Boolean);
    if (lines.length) result = { modified: lines[0], created: lines[lines.length - 1] };
  } catch {
    result = null;
  }
  datesCache.set(slug, result);
  return result;
}

// Every .md under the canon, as a slug ('01-what-is-swarm', 'reference/checks', 'adrs/0091-...').
// Guard: if the canon is absent (e.g. a CI/Vercel build without the sibling swarm repo), return []
// rather than throwing — the build degrades to an empty docs tree instead of a hard crash. W3 must
// make the canon available to the build (submodule or pre-build sync). [skeptic REVISE]
export function listDocs(): string[] {
  if (!canonAvailable()) return [];
  const out: string[] = [];
  const walk = (dir: string) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) walk(full);
      else if (e.name.endsWith(".md")) out.push(path.relative(CANON, full).replace(/\.md$/, ""));
    }
  };
  walk(CANON);
  return out.sort();
}

export function readDoc(slug: string): string | null {
  const file = path.join(CANON, slug + ".md");
  if (!fs.existsSync(file) || !path.resolve(file).startsWith(path.resolve(CANON))) return null;
  return fs.readFileSync(file, "utf8");
}

// Nav model derived from the canon structure.
export type NavSection = { title: string; items: { slug: string; label: string }[]; collapsed?: boolean };

// Humanize a single slug segment for a label ('04-writing-specs' -> 'Writing Specs'). Shared so the
// nav and the docs breadcrumb (docs/[...slug]/page.tsx) derive identical names from one rule.
export const humanizeSegment = (seg: string): string =>
  seg.replace(/^\d+[-_]?/, "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

const labelFor = (slug: string): string => {
  const base = slug.split("/").pop() ?? slug;
  // A section's README is its index page — show it as "Overview", not the bare filename.
  return base === "README" ? "Overview" : humanizeSegment(base);
};

export function buildNav(): NavSection[] {
  const docs = listDocs();
  const top = docs.filter((s) => /^\d\d-/.test(s));
  const tutorial = docs.filter((s) => s.startsWith("tutorial/"));
  const examples = docs.filter((s) => s.startsWith("examples/"));
  const reference = docs.filter((s) => s.startsWith("reference/"));
  const adrs = docs.filter((s) => s.startsWith("adrs/"));
  // A section's own README (its index page) sorts after the numbered entries alphabetically; hoist it
  // to the front so it reads first in both the sidebar and the prev/next pager.
  const hoistReadme = (slugs: string[]): string[] => [
    ...slugs.filter((s) => s.endsWith("/README")),
    ...slugs.filter((s) => !s.endsWith("/README")),
  ];
  const sec = (title: string, slugs: string[], collapsed = false): NavSection => ({
    title,
    collapsed,
    items: hoistReadme(slugs).map((slug) => ({ slug, label: labelFor(slug) })),
  });
  return [
    sec("Start here", top),
    sec("Tutorial", tutorial),
    sec("Examples", examples),
    sec("Reference", reference),
    sec("ADRs", adrs, true),
  ].filter((s) => s.items.length > 0);
}

// The docs flattened into reading order (the nav sequence) — backs the per-page prev/next pager.
export function docSequence(): { slug: string; label: string }[] {
  return buildNav().flatMap((sec) => sec.items);
}
