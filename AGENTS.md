# AGENTS.md — suspec-website

<!-- Keep this file short — aim for ~100 lines. Agents read it on every task,
     so every line spends always-loaded budget. -->

## Suspec startup

1. Read the linked spec first. If you were given a task packet, follow that bounded slice.
2. Read the change plan, if any, before touching code.
3. Do not implement behavior outside the spec or task scope — if a requirement can't be
   met as written, stop and say why instead of improvising.
4. Run every `Verify with:` or task `## Verify` item and paste the real output. A
   claim without output counts as unverified.
5. Before finishing, re-read your own diff as a skeptic, fill the spec's
   `## Execution` or the task's `## Run summary`, and flip the board row in
   `status.md` to review-ready.

## Workspace

- The loop: Pull → Spec → Run → Review → Close (+ Task when split, + Inventory /
  Change Plan for structural work).
- Specs: `specs/<feature>/spec.md` · tasks: `tasks/` · reviews: `reviews/` ·
  findings: `findings/` · intake: `intake/` · inventories: `inventory/` ·
  change plans: `change-plans/` · decisions: `decisions/` · board: `status.md`
- Templates: `templates/`
- Agent guides: `.agents/skills/` — Claude Code reads them via `.claude/skills`

## Project facts

- Next.js 15+ App Router, TypeScript, Tailwind CSS.
- Deployed to Vercel; `main` branch auto-deploys.
- App code lives in `app/`; global styles in `app/globals.css`.
- Components live in `app/components/`.
- Static assets in `public/`.
- Design system: yellow primary (`#FACC15` / Tailwind `yellow-400`), concrete
  greys (`gray-700`–`gray-950`), hazard-orange accents (`orange-500`).
- Tone: tongue-in-cheek, laid back, open-source. Avoid corporate buzzwords.

## Commands

| Slot         | Command            | Purpose                   |
| ------------ | ------------------ | ------------------------- |
| cmdInstall   | `npm install`      | install dependencies      |
| cmdDev       | `npm run dev`      | local dev server          |
| cmdBuild     | `npm run build`    | production build          |
| cmdLint      | `npm run lint`     | ESLint                    |
| cmdTypecheck | `npx tsc --noEmit` | TypeScript check          |
| cmdStart     | `npm run start`    | production server locally |

An empty or missing slot means **ask** — never invent a command. A Verify item
whose command cannot be resolved reads Unverified, not Pass.

## Agent role

You are an implementation or review worker for the Suspec website. Suspec
organizes the work; you perform the assigned task — and you never review your
own implementation.
