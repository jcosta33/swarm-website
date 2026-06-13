---
type: finding
id: FINDING-website-adversarial-review-2026-06
status: accepted
source: REVIEW-website-adversarial
---

# FINDING-website-adversarial-review-2026-06 — Adversarial review of swarm-website launch wave

## Reviewer stance

Review performed as the Skeptic: validation commands re-run in a clean worktree, diff read with
fresh eyes, and every claim checked against generated output. No worker output was trusted without
re-running.

## Validation run (reviewer worktree)

```
cd /Users/josecosta/dev/swarm-website
npm install        # up to date, 2 moderate audit warnings
npx tsc --noEmit   # pass
npm run lint       # pass
npm run build      # pass
npx linkinator     # 19 links, passed
npx axe            # 0 violations
npx lighthouse     # performance:100 accessibility:100 bestPractices:100 seo:100
```

## Findings

### 1. CI Lighthouse threshold check can be silently skipped — MAJOR

- **File:line**: `.github/workflows/ci.yml:47`
- **Issue**: The Lighthouse step uses `continue-on-error: true`. The threshold-check step exits 0 if
  `lighthouse.json` is missing. If Lighthouse crashes or fails to write the report, CI passes
  without enforcing the 90/95/90/90 thresholds.
- **Fix sketch**: Remove `continue-on-error: true` from the Lighthouse step, or change the
  threshold check to fail when the report is absent.

### 2. 404 page is indexable — MINOR

- **File:line**: `app/not-found.tsx:5`
- **Issue**: The not-found page exports only `title` metadata. Search engines may index 404 URLs.
- **Fix sketch**: Add `robots: "noindex"` and a `description` to the metadata object.

### 3. Code blocks are not keyboard-scrollable — MINOR

- **File:line**: `app/components/CodeBlock.tsx:10`
- **Issue**: `<pre>` has `overflow-x-auto` but no `tabIndex`. Keyboard-only users cannot focus and
  scroll long code examples on small viewports.
- **Fix sketch**: Add `tabIndex={0}` to the `<pre>` element (and an `aria-label` such as
  "Code sample").

### 4. External nav links give no new-tab warning — MINOR

- **File:line**: `app/components/Shell.tsx:10-14`
- **Issue**: "Docs" and "GitHub" open in a new tab (`target="_blank"`) but have no visual
  indicator or accessible hint that context will switch.
- **Fix sketch**: Append an external-link icon with `aria-hidden="true"` and an `aria-label` like
  "GitHub (opens in new tab)", or add screen-reader-only text.

### 5. Mobile menu lacks Escape and focus-trap behavior — MINOR

- **File:line**: `app/components/Shell.tsx:48-77`
- **Issue**: The hamburger menu toggles visibility but does not close on `Escape`, trap focus, or
  return focus to the trigger on close. Keyboard and screen-reader users can tab out of the open
  menu.
- **Fix sketch**: Add a `useEffect` listener for `Escape`, use a focus-trap helper or manual
  focus-wrapping, and return focus to the toggle button on close.

### 6. Footer wrapper uses generic `<section>` — MINOR

- **File:line**: `app/components/Shell.tsx:85`
- **Issue**: The footer content is wrapped in `<Section>` (renders `<section>`) instead of
  `<footer>`. Landmark navigation is slightly degraded.
- **Fix sketch**: Change `<Section className="...">` to `<Section as="footer" className="...">`.

### 7. Footer nav lacks an accessible name — MINOR

- **File:line**: `app/components/Shell.tsx:93`
- **Issue**: The footer `<nav>` has no `aria-label`. Screen-reader users cannot distinguish it from
  the primary nav.
- **Fix sketch**: Add `aria-label="Footer"` to the `<nav>` element.

### 8. Placeholder `/cli` is advertised in sitemap — MINOR

- **File:line**: `app/sitemap.ts:14`
- **Issue**: `/cli/` is a "Coming soon" placeholder. Including it in the sitemap asks search
  engines to crawl and index placeholder content.
- **Fix sketch**: Remove `/cli/` from the sitemap until it has real content, or add
  `robots: "noindex"` to `app/cli/page.tsx`.

### 9. Colophon copy contradicts Swarm review discipline — MINOR

- **File:line**: `app/components/Shell.tsx:89`
- **Issue**: Footer says "Built with Swarm by agents who review their own diffs." Swarm's own
  `persona-skeptic` guide and ADR-0056 state that self-review produces fixes and critique, never a
  review result — the wording here can be read as agents issuing their own Pass.
- **Fix sketch**: Reword to something like "Built with Swarm by agents who attack their own work
  before asking a human to judge it."

### 10. npm audit reports moderate vulnerabilities — MINOR

- **File:line**: `package-lock.json` (dependency tree)
- **Issue**: `npm install` reports 2 moderate severity vulnerabilities. They are not introduced by
  application code but remain unaddressed.
- **Fix sketch**: Run `npm audit` to identify the packages; upgrade or override once the fixes are
  confirmed compatible.

## What was verified and passed

- Type check, lint, and production build pass.
- All internal links resolve (`linkinator` 19/19).
- Automated accessibility audit passes (`axe` 0 violations).
- Lighthouse desktop scores are 100/100/100/100.
- Copy accurately reflects Swarm's human-in-the-loop positioning and sources the starter-kit and
  skills repos correctly.

## Verdict

**Conditionally acceptable.** The site is functional, fast, accessible, and SEO-clean. The MAJOR
CI finding should be fixed before the next release; the MINOR findings are polish and
accessibility improvements that should be triaged.
