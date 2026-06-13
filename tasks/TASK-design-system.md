---
type: task
id: TASK-design-system
source:
  - SPEC-design-system
  - CHANGE-website-launch
scope: [AC-001, AC-002, AC-003, AC-004, AC-005, AC-006, AC-007, AC-008, AC-009]
status: ready
---

# Task: Implement design system and global shell

## Source

- Spec: `specs/design-system/spec.md` (SPEC-design-system)
- Change plan: `change-plans/website-launch.md` (CHANGE-website-launch, wave 1)

## Scope

Implement:

- AC-001 — Color palette in `app/globals.css` using Tailwind v4 `@theme`.
- AC-002 — Fonts via `next/font/google`.
- AC-003 — Global shell with nav and footer.
- AC-004 — Shared components and `/kitchen-sink` route.
- AC-005 — Hazard-stripe motif component.
- AC-006 — Lucide React icon strategy.
- AC-007 — WCAG AA contrast.
- AC-008 — Reduced-motion support.
- AC-009 — Mobile nav breakpoint at `lg`.

## Do not change

- Do not implement homepage content yet.
- Do not add analytics or external scripts.

## Affected areas

- `app/layout.tsx`
- `app/globals.css`
- `app/components/`
- `app/kitchen-sink/page.tsx`
- `package.json`

## Verify

- [ ] `npm run build` exits 0
- [ ] `npm run lint` exits 0
- [ ] `npx tsc --noEmit` exits 0
- [ ] `/kitchen-sink` route renders all components
- [ ] Contrast check: no AA failures on default palette
- [ ] Reduced motion: toggling preference stops hero-like animations

## Agent instructions

1. Read SPEC-design-system and CHANGE-website-launch first.
2. Stay inside scope.
3. Run every Verify item and paste real output.
4. Self-review your diff before handoff.
5. Fill the Run summary and update `status.md`.

## Findings

## Run summary

- Changed files:
- Verify results:
- Out-of-scope edits:
- Blocked questions:
