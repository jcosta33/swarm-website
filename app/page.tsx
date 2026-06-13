import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  FileText,
  GitBranch,
  Layers,
  MessageSquareWarning,
  Shield,
  Terminal,
  Users,
} from "lucide-react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Section } from "./components/Section";

import { HazardStripe } from "./components/HazardStripe";
import { HeroHexGrid } from "./components/HeroHexGrid";
import { LoopDiagram } from "./components/LoopDiagram";
import { TerminalCursor } from "./components/TerminalCursor";
import { TerminalWindow } from "./components/TerminalWindow";
import { DroneIcon } from "./components/DroneIcon";
import { HexBadge } from "./components/HexBadge";
import { SignalPulse } from "./components/SignalPulse";

export const metadata: Metadata = {
  title: "Swarm — specs for humans, tasks for agents",
  description:
    "A lightweight spec and review workflow that keeps you in the driver seat while coding agents do the typing. Plain markdown, any agent, no runtime.",
  openGraph: {
    title: "Swarm — specs for humans, tasks for agents",
    description:
      "A lightweight spec and review workflow that keeps you in the driver seat while coding agents do the typing. Plain markdown, any agent, no runtime.",
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
    code: "INTAKE-001",
    description:
      "The ticket says improve session handling; the agent picks one reading and builds it convincingly.",
  },
  {
    icon: Layers,
    title: "Re-pasted context",
    code: "CONTEXT-002",
    description:
      "The same constraints get retyped into every prompt — and forgotten in the one session that mattered.",
  },
  {
    icon: GitBranch,
    title: "Agent drift",
    code: "DRIFT-003",
    description:
      "Mid-task, the agent solves a nearby problem instead, touching files nobody mentioned.",
  },
  {
    icon: FileText,
    title: "Giant PRs",
    code: "PR-004",
    description:
      "Forty files of plausible code arrive at once; nobody can say which requirement any hunk satisfies.",
  },
  {
    icon: MessageSquareWarning,
    title: "Lost findings",
    code: "FINDING-005",
    description:
      "Hard-won lessons evaporate with the session; the next one re-learns them the expensive way.",
  },
];

const features = [
  {
    title: "Spec-first",
    command: "swarm new",
    description:
      "Write the contract once. The task packet bounds scope and tells the agent what not to change.",
  },
  {
    title: "Review by exception",
    command: "swarm validate",
    description:
      "Every requirement carries a verification method. Evidence shows the reviewer exactly where to look.",
  },
  {
    title: "Humans in the loop",
    command: "swarm pr",
    description:
      "Agents draft, run, and paste evidence. Humans decide when the evidence is good enough. No autopilot.",
  },
  {
    title: "Honesty framework",
    command: "swarm doctor",
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

        {/* Floating drone decorations */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <DroneIcon className="absolute left-[8%] top-[20%] h-16 w-16 -rotate-12 text-swarm-yellow/20 animate-float" />
          <DroneIcon className="absolute right-[10%] top-[30%] h-12 w-12 rotate-12 text-swarm-yellow/15 animate-float" style={{ animationDelay: "1.5s" }} />
          <DroneIcon className="absolute bottom-[20%] left-[15%] h-10 w-10 text-swarm-yellow/10 animate-float" style={{ animationDelay: "3s" }} />
        </div>

        <Section className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-swarm-yellow/30 bg-swarm-yellow/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-swarm-yellow">
              <SignalPulse className="h-4 w-4" />
              <span>v0.1.0 — hive online</span>
            </div>

            <h1 className="font-heading text-4xl font-bold uppercase tracking-tight text-concrete-100 sm:text-6xl lg:text-7xl">
              A hive for your
              <br />
              <span className="text-swarm-yellow text-glow">coding agents</span>
              <TerminalCursor className="ml-2 align-middle" />
            </h1>

            <TerminalWindow className="mx-auto mt-10 max-w-2xl text-left">
              <p className="text-concrete-400">
                <span className="text-swarm-yellow">$</span> swarm init
              </p>
              <p className="mt-1 text-drone-green">✓ scaffolded .agents/ workspace</p>
              <p className="mt-2 text-concrete-400">
                <span className="text-swarm-yellow">$</span> swarm new spec --title &quot;keep humans in the loop&quot;
              </p>
              <p className="mt-1 text-concrete-100">
                Turn tickets into clear specs, specs into agent-ready tasks, and agent output into
                evidence you can review.
              </p>
              <p className="mt-2 text-concrete-400">
                <span className="text-swarm-yellow">$</span> _
              </p>
            </TerminalWindow>

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
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-hazard-orange">
              <Terminal className="h-4 w-4" />
              <span>sys.log — 5 warnings detected</span>
            </div>
            <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-concrete-100 sm:text-4xl">
              Five walls. One workflow.
            </h2>
            <p className="mt-4 text-concrete-400">
              Coding agents are great at typing, terrible at knowing when to stop. Swarm answers
              each wall with a small markdown artifact and the habit of keeping a human in the loop.
            </p>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {walls.map((wall) => {
              const Icon = wall.icon;
              return (
                <li key={wall.title}>
                  <Card className="group h-full animate-glow">
                    <div className="flex items-start gap-4">
                      <HexBadge color="orange">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </HexBadge>
                      <div>
                        <p className="font-mono text-xs text-hazard-orange">{wall.code}</p>
                        <h3 className="mt-1 font-heading text-lg font-bold uppercase tracking-tight text-concrete-100">
                          {wall.title}
                        </h3>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-concrete-400">
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
      <section className="relative border-y border-factory-800 bg-factory-900 py-24">
        <HazardStripe height="sm" />
        <Section className="mt-12 flex flex-col gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-swarm-yellow">
              <DroneIcon className="h-4 w-4" />
              <span>flight.plan — 6 waypoints</span>
            </div>
            <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-concrete-100 sm:text-4xl">
              The loop
            </h2>
            <p className="mt-4 text-concrete-400">
              Pull → Spec → Task → Run → Review → Close. Each step produces a file the next step can
              read. No handwaving, no lost context, no autonomous joyrides.
            </p>
          </div>
          <LoopDiagram />
        </Section>
      </section>

      {/* Example */}
      <section className="py-24">
        <Section className="flex flex-col gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-drone-green">
              <CheckCircle className="h-4 w-4" />
              <span>verify.log — evidence required</span>
            </div>
            <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-concrete-100 sm:text-4xl">
              What a spec looks like
            </h2>
            <p className="mt-4 text-concrete-400">
              A requirement is only as good as its verification method. The review packet shows
              evidence per line item.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <TerminalWindow title="specs/shell/spec.md">
              <p className="text-concrete-400">
                <span className="text-swarm-yellow">##</span> AC-003 — Global shell includes nav and footer
              </p>
              <p className="mt-2 text-concrete-100">
                A <span className="text-swarm-yellow">Shell</span> component renders on every route via{" "}
                <span className="text-swarm-yellow">app/layout.tsx</span>.
              </p>
              <ul className="mt-2 list-disc pl-4 text-concrete-100">
                <li>Nav: logo, links, mobile hamburger below lg.</li>
                <li>Footer: copyright, links, colophon line.</li>
              </ul>
              <p className="mt-3 text-concrete-400">
                <span className="text-swarm-yellow">Verify with:</span> npm run build passes; every
                generated page contains exactly one &lt;nav&gt; and one &lt;footer&gt;; nav links are valid.
              </p>
            </TerminalWindow>

            <TerminalWindow title="reviews/REVIEW-spec-shell.md">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[320px] text-left text-sm">
                  <thead className="border-b border-factory-800 text-concrete-400">
                    <tr>
                      <th className="py-2 pr-4 font-heading font-bold uppercase tracking-wide">AC</th>
                      <th className="py-2 pr-4 font-heading font-bold uppercase tracking-wide">Result</th>
                      <th className="py-2 font-heading font-bold uppercase tracking-wide">Evidence</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-factory-800">
                    <tr>
                      <td className="py-3 pr-4 font-mono text-concrete-100">AC-003</td>
                      <td className="py-3 pr-4">
                        <span className="inline-flex items-center gap-1.5 text-drone-green">
                          <CheckCircle className="h-4 w-4" aria-hidden="true" /> Pass
                        </span>
                      </td>
                      <td className="py-3 text-concrete-400">grep found 1 nav and 1 footer</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 font-mono text-concrete-100">AC-009</td>
                      <td className="py-3 pr-4 text-concrete-400">Unverified</td>
                      <td className="py-3 text-concrete-400">manual resize pending</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TerminalWindow>
          </div>
        </Section>
      </section>

      {/* Features */}
      <section className="border-y border-factory-800 bg-factory-900 py-24">
        <Section className="flex flex-col gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-swarm-yellow">
              <Shield className="h-4 w-4" />
              <span>capabilities — 4 modules loaded</span>
            </div>
            <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-concrete-100 sm:text-4xl">
              Built for validation, not generation.
            </h2>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <li key={feature.title}>
                <Card className="group h-full border-swarm-yellow/10 transition-all duration-300 hover:border-swarm-yellow/40 hover:bg-factory-800">
                  <p className="font-mono text-xs text-swarm-yellow">{feature.command}</p>
                  <h3 className="mt-2 font-heading text-lg font-bold uppercase tracking-tight text-concrete-100">
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
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-drone-green/30 bg-drone-green/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wide text-drone-green">
            <Users className="h-4 w-4" />
            <span>human approval required</span>
          </div>
          <h2 className="mt-6 font-heading text-3xl font-bold uppercase tracking-tight text-concrete-100 sm:text-4xl">
            Stop vibe-coding into the void.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-concrete-400">
            Copy the starter kit, write your first spec, and give your agents a contract they can
            read. You still make the calls; they just finally know what you meant.
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
