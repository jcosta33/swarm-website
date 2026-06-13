import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, FileText, GitBranch, Layers, MessageSquareWarning } from "lucide-react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Section } from "./components/Section";
import { CodeBlock } from "./components/CodeBlock";
import { HazardStripe } from "./components/HazardStripe";
import { HeroHexGrid } from "./components/HeroHexGrid";
import { LoopDiagram } from "./components/LoopDiagram";

export const metadata: Metadata = {
  title: "Swarm — a hive for your coding agents",
  description:
    "A lightweight spec and review workflow for teams using coding agents. Plain markdown, any agent, no runtime.",
  openGraph: {
    title: "Swarm — a hive for your coding agents",
    description:
      "A lightweight spec and review workflow for teams using coding agents. Plain markdown, any agent, no runtime.",
    type: "website",
    images: ["/og-home.png"],
  },
  alternates: {
    canonical: "/",
  },
};

const walls = [
  {
    icon: MessageSquareWarning,
    title: "Vague tickets",
    description:
      "The ticket says improve session handling; the agent picks one reading and builds it convincingly.",
  },
  {
    icon: Layers,
    title: "Re-pasted context",
    description:
      "The same constraints get retyped into every prompt — and forgotten in the one session that mattered.",
  },
  {
    icon: GitBranch,
    title: "Agent drift",
    description:
      "Mid-task, the agent solves a nearby problem instead, touching files nobody mentioned.",
  },
  {
    icon: FileText,
    title: "Giant PRs",
    description:
      "Forty files of plausible code arrive at once; nobody can say which requirement any hunk satisfies.",
  },
  {
    icon: MessageSquareWarning,
    title: "Lost findings",
    description:
      "Hard-won lessons evaporate with the session; the next one re-learns them the expensive way.",
  },
];

const features = [
  {
    title: "Spec-first, not prompt-first",
    description:
      "Write the contract once. The task packet bounds scope and tells the agent what not to change.",
  },
  {
    title: "Review by exception",
    description:
      "Every requirement carries a verification method. Evidence shows the reviewer exactly where to look.",
  },
  {
    title: "Honesty framework",
    description:
      "Rules say whether they are convention, checklist, toolable, or enforced — no enforcement theater.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-factory-800 py-24 sm:py-32">
        <HeroHexGrid />
        <Section className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heading text-4xl font-bold uppercase tracking-tight text-concrete-100 sm:text-6xl">
              A hive for your coding agents.
            </h1>
            <p className="mt-6 text-lg leading-8 text-concrete-400 sm:text-xl">
              Turn tickets into clear specs, specs into agent-ready tasks, and agent output into
              evidence you can review — plain markdown, any agent, no runtime.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild>
                <Link
                  href="https://github.com/jcosta33/swarm-starter-kit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Copy the starter kit <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link
                  href="https://github.com/jcosta33/swarm/tree/main/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the docs
                </Link>
              </Button>
            </div>
          </div>
        </Section>
      </section>

      {/* Problem */}
      <section className="py-24">
        <Section className="flex flex-col gap-12">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-concrete-100 sm:text-4xl">
              Five walls. One workflow.
            </h2>
            <p className="mt-4 text-concrete-400">
              Teams using coding agents hit the same walls. Swarm answers each one with a small
              markdown artifact and the habit of working from it.
            </p>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {walls.map((wall) => {
              const Icon = wall.icon;
              return (
                <li key={wall.title}>
                  <Card className="h-full">
                    <Icon className="h-6 w-6 text-swarm-yellow" aria-hidden="true" />
                    <h3 className="mt-4 font-heading text-lg font-bold uppercase tracking-tight text-concrete-100">
                      {wall.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-concrete-400">
                      {wall.description}
                    </p>
                  </Card>
                </li>
              );
            })}
          </ul>
        </Section>
      </section>

      {/* Loop */}
      <section className="border-y border-factory-800 bg-factory-900 py-24">
        <HazardStripe height="sm" />
        <Section className="mt-12 flex flex-col gap-12">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-concrete-100 sm:text-4xl">
              The loop
            </h2>
            <p className="mt-4 text-concrete-400">
              Pull → Spec → Task → Run → Review → Close. Each step produces a file the next step can
              read.
            </p>
          </div>
          <LoopDiagram />
        </Section>
      </section>

      {/* Example */}
      <section className="py-24">
        <Section className="flex flex-col gap-12">
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-concrete-100 sm:text-4xl">
              What a spec looks like
            </h2>
            <p className="mt-4 text-concrete-400">
              A requirement is only as good as its verification method. The review packet shows
              evidence per line item.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <CodeBlock>{`## AC-003 — Global shell includes nav and footer

A \`Shell\` component renders on every route via \`app/layout.tsx\`.

- Nav: logo, links, mobile hamburger below \`lg\`.
- Footer: copyright, links, colophon line.

Verify with: \`npm run build\` passes; every generated page contains
exactly one \`<nav>\` and one \`<footer>\`; nav links are valid.
`}</CodeBlock>

            <div className="overflow-x-auto rounded-2xl border border-factory-800 bg-factory-900">
              <table className="w-full min-w-[320px] text-left text-sm">
                <thead className="border-b border-factory-800 bg-factory-950">
                  <tr>
                    <th className="px-4 py-3 font-heading font-bold uppercase tracking-wide text-concrete-100">
                      AC
                    </th>
                    <th className="px-4 py-3 font-heading font-bold uppercase tracking-wide text-concrete-100">
                      Result
                    </th>
                    <th className="px-4 py-3 font-heading font-bold uppercase tracking-wide text-concrete-100">
                      Evidence
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-factory-800">
                  <tr>
                    <td className="px-4 py-3 font-mono text-concrete-100">AC-003</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center gap-1.5 text-drone-green">
                        <CheckCircle className="h-4 w-4" aria-hidden="true" /> Pass
                      </span>
                    </td>
                    <td className="px-4 py-3 text-concrete-400">grep found 1 nav and 1 footer</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-concrete-100">AC-009</td>
                    <td className="px-4 py-3 text-concrete-400">Unverified</td>
                    <td className="px-4 py-3 text-concrete-400">manual resize pending</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Section>
      </section>

      {/* Features */}
      <section className="border-y border-factory-800 bg-factory-900 py-24">
        <Section className="flex flex-col gap-12">
          <h2 className="max-w-2xl font-heading text-3xl font-bold uppercase tracking-tight text-concrete-100 sm:text-4xl">
            Built for validation, not generation.
          </h2>
          <ul className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <li key={feature.title}>
                <Card className="h-full">
                  <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-concrete-100">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-concrete-400">
                    {feature.description}
                  </p>
                </Card>
              </li>
            ))}
          </ul>
        </Section>
      </section>

      {/* Final CTA */}
      <section className="relative py-24">
        <HazardStripe height="sm" />
        <Section className="py-16 text-center">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-concrete-100 sm:text-4xl">
            Stop herding agents with chat history.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-concrete-400">
            Copy the starter kit, write your first spec, and give your agents a contract they can
            read.
          </p>
          <div className="mt-10 flex justify-center">
            <Button asChild>
              <Link
                href="https://github.com/jcosta33/swarm-starter-kit"
                target="_blank"
                rel="noopener noreferrer"
              >
                Copy the starter kit <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Section>
        <HazardStripe height="sm" />
      </section>
    </>
  );
}
