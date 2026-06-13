---
type: task
id: TASK-seo
source:
  - SPEC-seo
  - CHANGE-website-launch
scope: [AC-001, AC-002, AC-003, AC-004, AC-005]
status: ready
---

# Task: Implement SEO and social sharing

## Source

- Spec: `specs/seo/spec.md` (SPEC-seo)
- Change plan: `change-plans/website-launch.md` (CHANGE-website-launch, wave 4)

## Scope

Add per-page metadata, OG images, sitemap, robots.txt, and canonical URLs.

## Do not change

- Do not add analytics scripts.

## Affected areas

- `app/*/page.tsx`
- `app/sitemap.ts`
- `public/robots.txt`
- `public/og-*.png`

## Verify

- [ ] `npm run build` exits 0
- [ ] `<head>` contains correct title/description on each route
- [ ] `sitemap.xml` is valid and lists expected routes
- [ ] `robots.txt` is served correctly

## Findings

## Run summary

- Changed files:
- Verify results:
- Out-of-scope edits:
- Blocked questions:
