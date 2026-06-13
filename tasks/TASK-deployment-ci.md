---
type: task
id: TASK-deployment-ci
source:
  - SPEC-deployment
  - SPEC-testing
  - CHANGE-website-launch
scope: [SPEC-deployment AC-001–AC-006, SPEC-testing AC-001–AC-006]
status: ready
---

# Task: Configure deployment and CI

## Source

- Specs: `specs/deployment/spec.md`, `specs/testing/spec.md`
- Change plan: `change-plans/website-launch.md` (CHANGE-website-launch, wave 5)

## Scope

Configure static export, Vercel deployment, GitHub Actions CI, and quality
gates.

## Do not change

- Do not change page content.

## Affected areas

- `next.config.ts`
- `.github/workflows/ci.yml`
- `package.json`
- `vercel.json` (if needed)
- `.env.example`
- `README.md`

## Verify

- [ ] `npm run build` exits 0
- [ ] `npm run lint` exits 0
- [ ] `npx tsc --noEmit` exits 0
- [ ] Link checker passes on `dist/`
- [ ] Accessibility checker passes on `dist/`
- [ ] Vercel production deployment succeeds

## Findings

## Run summary

- Changed files:
- Verify results:
- Out-of-scope edits:
- Blocked questions:
