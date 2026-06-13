import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { CodeBlock } from "../components/CodeBlock";
import { Badge } from "../components/Badge";

export const metadata: Metadata = {
  title: "CLI — Swarm",
  description:
    "swarm-cli is the reference command-line companion for the Swarm framework: sandboxed worktrees, task-driven sessions, and quality-of-life automation.",
  openGraph: {
    title: "CLI — Swarm",
    description:
      "swarm-cli is the reference command-line companion for the Swarm framework: sandboxed worktrees, task-driven sessions, and quality-of-life automation.",
    type: "website",
    images: ["/og-cli.png"],
  },
  alternates: {
    canonical: "/cli/",
  },
};

const commands = [
  { cmd: "init", what: "Scaffold .agents/, swarm.config.json, enable git rerere" },
  { cmd: "new <slug>", what: "Create a sandbox worktree and seeded task file" },
  { cmd: "open <slug>", what: "Reopen an existing sandbox terminal" },
  { cmd: "list", what: "List active sandboxes with status and PID" },
  { cmd: "validate", what: "Run configured lint/typecheck with LLM-truncated output" },
  { cmd: "test", what: "Run Vitest with smart log truncation" },
  { cmd: "pr <slug>", what: "Auto-commit and open a GitHub PR from the task file" },
  { cmd: "doctor", what: "Deep diagnostics of Node, git, worktrees, telemetry DB" },
];

export default function CliPage() {
  return (
    <div className="flex flex-col gap-24 py-24">
      <Section>
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <h1 className="font-heading text-4xl font-bold uppercase tracking-tight text-concrete-100 sm:text-5xl">
              swarm-cli
            </h1>
            <Badge variant="hazard">In flux</Badge>
          </div>
          <p className="mt-6 text-xl leading-relaxed text-concrete-100">
            The reference CLI for the Swarm framework. It is quality-of-life automation around the
            spec-and-review workflow: one sandboxed git worktree per task, Markdown task files as
            the source of truth, and commands that compress context, run checks, and keep your main
            checkout clean.
          </p>
          <p className="mt-4 text-concrete-400">
            Fair warning: the command surface is transitional. The small set that dispatches today is
            what you can rely on; the rest is the planned shape.
          </p>
        </div>
      </Section>

      <Section className="flex flex-col gap-8">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-concrete-100">
          Install
        </h2>
        <CodeBlock>{`# Node.js >= 22.6.0 and git >= 2.5 required
npm install -g swarm-cli

# or link from a local clone
npm link`}</CodeBlock>
      </Section>

      <Section className="flex flex-col gap-8">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-concrete-100">
          First run
        </h2>
        <CodeBlock>{`swarm init    # scaffold the workspace
swarm doctor  # verify the environment
swarm         # launch the interactive dashboard`}</CodeBlock>
      </Section>

      <Section className="flex flex-col gap-12">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-concrete-100">
          Commands that already dispatch
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {commands.map((c) => (
            <li key={c.cmd}>
              <Card className="h-full">
                <h3 className="font-mono text-sm font-semibold text-swarm-yellow">swarm {c.cmd}</h3>
                <p className="mt-2 text-sm leading-relaxed text-concrete-400">{c.what}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <Card className="max-w-2xl">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-concrete-100">
            Why a CLI if Swarm is markdown-only?
          </h2>
          <p className="mt-4 text-concrete-400">
            The framework itself is just conventions and files. The CLI is optional automation:
            spinning up worktrees so agents do not trample your main branch, running checks and
            truncating output for LLM context windows, and turning a finished task file into a pull
            request. You can use Swarm without it; you just type more.
          </p>
          <p className="mt-6">
            <Link
              href="https://github.com/jcosta33/swarm-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-swarm-yellow hover:underline focus-ring rounded"
            >
              Read the full reference on GitHub →
            </Link>
          </p>
        </Card>
      </Section>
    </div>
  );
}
