# swarm-website

> The marketing website for [Swarm](https://github.com/jcosta33/swarm) — a lightweight spec and review workflow for teams using coding agents.

This repo is two things at once:

1. **A Next.js website** deployed to Vercel, marketing Swarm with a tongue-in-cheek, open-source vibe.
2. **A Swarm workspace** — we use Swarm to build the website about Swarm.

## Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Design vibe:** drone swarm meets bee hive meets industrial factory — yellow primary, concrete greys, hazard stripes, laid-back copy.

## Get started

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Swarm workspace

This repo uses the [Swarm starter kit](https://github.com/jcosta33/swarm-starter-kit). Work is planned in:

- `specs/` — website features and pages
- `tasks/` — implementation tasks
- `reviews/` — review packets
- `findings/` — durable lessons
- `change-plans/` — multi-step changes
- `decisions/` — ADRs for the website
- `status.md` — the workboard

Guides live in `.agents/skills/` and are surfaced to Claude Code via `.claude/skills`.

## Design direction

- **Primary color:** yellow (bees, swarm, attention).
- **Secondary:** concrete greys, steel blues, hazard orange accents.
- **Aesthetic:** drone swarm + factory floor + construction site — functional, modular, slightly mechanical.
- **Tone:** laid back, self-aware, open-source. No corporate buzzword soup.
