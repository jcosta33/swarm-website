---
type: task
id: TASK-marketing-pages
source:
  - SPEC-marketing-pages
  - CHANGE-website-launch
scope: [AC-001, AC-002, AC-003, AC-004, AC-005, AC-006, AC-007]
status: ready
---

# Task: Implement marketing pages

## Source

- Spec: `specs/marketing-pages/spec.md` (SPEC-marketing-pages)
- Change plan: `change-plans/website-launch.md` (CHANGE-website-launch, wave 3)

## Scope

Implement `/what-is-swarm`, `/the-loop`, `/get-started`, placeholder `/skills`
and `/cli`, and the custom 404 page.

## Do not change

- Do not implement the full examples page; defer to post-launch.

## Affected areas

- `app/what-is-swarm/page.tsx`
- `app/the-loop/page.tsx`
- `app/get-started/page.tsx`
- `app/skills/page.tsx`
- `app/cli/page.tsx`
- `app/not-found.tsx`

## Verify

- [ ] `npm run build` exits 0
- [ ] All routes render without errors
- [ ] Internal links are valid (linkinator)
- [ ] Content matches source docs in `swarm` repo

## Findings

## Run summary

- Changed files:
- Verify results:
- Out-of-scope edits:
- Blocked questions:
