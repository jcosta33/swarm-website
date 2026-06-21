// Ensure the swarm/docs canon is available to the build (prebuild step).
// - local dev: use the sibling checkout ../swarm/docs (no-op).
// - CI / Vercel (no sibling): shallow-clone the canon into .swarm-canon/ (gitignored, ephemeral —
//   never committed, so single-sourcing holds). Pin a ref via SWARM_REF for reproducible builds.
// Chosen over a git submodule: lower contributor friction (no submodule init/update), works the same
// locally and on Vercel, and SWARM_REF gives the same pinning a submodule would.
import { existsSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";

const cwd = process.cwd();
const sibling = path.join(cwd, "..", "swarm", "docs");
const vendor = path.join(cwd, ".swarm-canon");
const vendorDocs = path.join(vendor, "docs");
const ref = process.env.SWARM_REF || "main";
const repo = process.env.SWARM_REPO || "https://github.com/jcosta33/swarm";

if (existsSync(sibling)) {
  console.log("[ensure-canon] using the local sibling ../swarm/docs");
} else if (existsSync(vendorDocs)) {
  console.log("[ensure-canon] using the vendored .swarm-canon/docs");
} else {
  // Full clone (NOT --depth 1): the docs site reads per-file git dates from this history for
  // sitemap lastModified + each doc's TechArticle datePublished/dateModified. A shallow clone would
  // collapse every file's date to the single HEAD commit. The canon is markdown-only, so cheap.
  console.log(`[ensure-canon] cloning ${repo}@${ref} -> .swarm-canon (full history for doc dates)`);
  execSync(`git clone --branch ${ref} ${repo} ${vendor}`, { stdio: "inherit" });
}
