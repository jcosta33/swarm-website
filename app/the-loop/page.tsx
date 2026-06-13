import type { Metadata } from "next";
import { Section } from "../components/Section";
import { CodeBlock } from "../components/CodeBlock";
import { HazardStripe } from "../components/HazardStripe";

export const metadata: Metadata = {
  title: "The loop — Swarm",
  description:
    "Pull → Spec → Task → Run → Review → Close. The six steps that turn a ticket into a shipped, reviewed change.",
  openGraph: {
    title: "The loop — Swarm",
    description:
      "Pull → Spec → Task → Run → Review → Close. The six steps that turn a ticket into a shipped, reviewed change.",
    type: "website",
    images: ["/og-the-loop.png"],
  },
  alternates: {
    canonical: "/the-loop/",
  },
};

const steps = [
  {
    number: "01",
    name: "Pull",
    body:
      "Capture the ticket and any context that matters — links, constraints, prior attempts — in an intake file. This becomes the source of truth for the spec, not the chat history.",
    example: {
      label: "Intake note",
      code: `## INTAKE-42 — Add dark mode to marketing site

- Requested by: design
- Scope: homepage and global shell only
- Deadline: launch week
- Links: SPEC-design-system, CHANGE-website-launch`,
    },
  },
  {
    number: "02",
    name: "Spec",
    body:
      "Write requirements one per ID, each with a verification method. A requirement is only as good as the evidence that proves it.",
    example: {
      label: "Spec acceptance criterion",
      code: `### AC-003 — Global shell includes nav and footer

A Shell component renders on every route via app/layout.tsx.

- Nav: logo, links, mobile hamburger below lg.
- Footer: copyright, links, colophon line.

Verify with: npm run build passes; every generated page contains
exactly one <nav> and one <footer>.`,
    },
  },
  {
    number: "03",
    name: "Task",
    body:
      "Hand the agent a bounded packet: what to change, what not to change, and how to verify. The packet is the contract.",
    example: {
      label: "Task packet",
      code: `## TASK-shell

Scope: implement Shell component per AC-003.
Do not change: homepage content, analytics.
Verify:
- npm run build passes
- grep finds 1 <nav> and 1 <footer> per page`,
    },
  },
  {
    number: "04",
    name: "Run",
    body:
      "The agent implements and pastes real evidence — command output, screenshots, links — next to each requirement.",
    example: {
      label: "Evidence pasted into the task",
      code: `$ npm run build
✓ Compiled successfully
Route (app): /, /kitchen-sink

$ grep -o '<nav>' out/index.html | wc -l
1`,
    },
  },
  {
    number: "05",
    name: "Review",
    body:
      "Check evidence per requirement. Human attention goes only where the evidence is missing or ambiguous.",
    example: {
      label: "Review row",
      code: `| AC    | Result      | Evidence                  |
|-------|-------------|---------------------------|
| AC-003| Pass        | 1 nav, 1 footer found     |
| AC-009| Unverified  | manual resize pending     |`,
    },
  },
  {
    number: "06",
    name: "Close",
    body:
      "Merge the change, save findings so the next session starts from them, and update the board. The loop ends where the next one begins.",
    example: {
      label: "Finding file",
      code: `## FINDING-tailwind-v4-syntax

When adding custom keyframes in Tailwind v4, use plain CSS
classes rather than escaped utility prefixes to avoid PostCSS
parse errors.`,
    },
  },
];

export default function TheLoopPage() {
  return (
    <div className="flex flex-col gap-24 py-24">
      <Section>
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-tight text-concrete-100 sm:text-5xl">
            The loop
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-concrete-400">
            Pull → Spec → Task → Run → Review → Close. Each step produces a file the next step can
            read. No handwaving, no lost context.
          </p>
        </div>
      </Section>

      <HazardStripe height="sm" />

      <Section className="flex flex-col gap-16">
        {steps.map((step) => (
          <article key={step.name} className="grid gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm font-medium text-swarm-yellow">{step.number}</span>
                <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-concrete-100">
                  {step.name}
                </h2>
              </div>
              <p className="mt-4 text-concrete-400">{step.body}</p>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-concrete-400">
                {step.example.label}
              </p>
              <CodeBlock>{step.example.code}</CodeBlock>
            </div>
          </article>
        ))}
      </Section>

      <HazardStripe height="sm" />
    </div>
  );
}
