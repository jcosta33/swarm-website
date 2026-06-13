import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { CodeBlock } from "../components/CodeBlock";

export const metadata: Metadata = {
  title: "Skills — Swarm",
  description:
    "An optional catalog of agent guides for Swarm workflows: conditioning stances and code-authoring depth, installable into any agent CLI.",
  openGraph: {
    title: "Skills — Swarm",
    description:
      "An optional catalog of agent guides for Swarm workflows: conditioning stances and code-authoring depth, installable into any agent CLI.",
    type: "website",
    images: ["/og-skills.png"],
  },
  alternates: {
    canonical: "/skills/",
  },
};

const stances = [
  { skill: "persona-skeptic", use: "judging another agent's work — refute by default, re-run the checks" },
  { skill: "persona-architect", use: "shaping a spec free of smuggled implementation" },
  { skill: "persona-auditor", use: "recording present state with file:line findings" },
  { skill: "persona-documentarian", use: "writing human-facing docs that actually get read" },
  { skill: "persona-researcher", use: "depth inquiry against primary sources" },
  { skill: "persona-surveyor", use: "breadth research across patterns or products" },
  { skill: "empirical-proof", use: "any completion claim — bind it to pasted output or it reads unverified" },
];

const authoring = [
  { skill: "write-feature", use: "net-new behavior behind a defined surface" },
  { skill: "write-fix", use: "a reproduced defect with a root cause" },
  { skill: "write-refactor", use: "restructuring with behavior pinned by tests" },
  { skill: "write-rewrite", use: "re-implementing code whose behavior changes on purpose" },
  { skill: "write-migration", use: "moving from API A to API B, green after every wave" },
  { skill: "write-performance", use: "a measured bottleneck with a target and baseline" },
  { skill: "write-testing", use: "adding the tests an area should already have" },
  { skill: "write-documentation", use: "human-facing docs for a reader who hasn't read the code" },
  { skill: "fix-flaky-test", use: "a test that fails intermittently — diagnose, don't retry-loop" },
];

export default function SkillsPage() {
  return (
    <div className="flex flex-col gap-24 py-24">
      <Section>
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-tight text-concrete-100 sm:text-5xl">
            Swarm skills
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-concrete-100">
            An optional catalog of agent guides — conditioning stances and code-authoring depth — in
            the open Agent Skills format. Install only what your work calls for. No runtime, no
            scripts, no secret sauce.
          </p>
          <p className="mt-4 text-concrete-400">
            The starter kit ships the core loop; this catalog is the extra seasoning.
          </p>
        </div>
      </Section>

      <Section className="flex flex-col gap-8">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-concrete-100">
          Install one skill
        </h2>
        <CodeBlock>{`# list what's available
npx skills add jcosta33/swarm-skills --list

# install a single skill into the current repo
npx skills add jcosta33/swarm-skills --skill persona-skeptic

# or copy the folder if you don't use the Vercel skills CLI
cp -R skills/persona-skeptic <your-repo>/.agents/skills/`}</CodeBlock>
        <p className="text-concrete-400">
          Skills name abstract command slots like <code>cmdTest</code> and <code>cmdLint</code>;
          your repo&apos;s <code>AGENTS.md</code> supplies the real commands. That is what makes them
          portable across stacks.
        </p>
      </Section>

      <Section className="flex flex-col gap-12">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-concrete-100">
          Conditioning stances
        </h2>
        <p className="text-concrete-400">
          Cognitive postures that tilt what the agent looks for and refuses. Load one alongside a
          task guide when the work needs a particular lens.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stances.map((s) => (
            <li key={s.skill}>
              <Card className="h-full">
                <h3 className="font-mono text-sm font-semibold text-swarm-yellow">{s.skill}</h3>
                <p className="mt-2 text-sm leading-relaxed text-concrete-400">{s.use}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="flex flex-col gap-12">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-concrete-100">
          Code-authoring depth
        </h2>
        <p className="text-concrete-400">
          Guides for specific change shapes. Pick the one that matches the task so the agent does
          not treat every problem like a feature.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {authoring.map((s) => (
            <li key={s.skill}>
              <Card className="h-full">
                <h3 className="font-mono text-sm font-semibold text-swarm-yellow">{s.skill}</h3>
                <p className="mt-2 text-sm leading-relaxed text-concrete-400">{s.use}</p>
              </Card>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <Card className="max-w-2xl">
          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-concrete-100">
            Why there is no runtime
          </h2>
          <p className="mt-4 text-concrete-400">
            A skill is a markdown guide your agent reads when the work matches. That means you can
            read it first, pin to a commit, and audit what your agent was told to do. If you are
            looking for command-line scaffolding or automated checks, that is{" "}
            <Link
              href="/cli/"
              className="text-swarm-yellow hover:underline focus-ring rounded"
            >
              swarm-cli
            </Link>
            . It is real, but the command surface is still settling.
          </p>
          <p className="mt-6">
            <Link
              href="https://github.com/jcosta33/swarm-skills"
              target="_blank"
              rel="noopener noreferrer"
              className="text-swarm-yellow hover:underline focus-ring rounded"
            >
              Browse the full catalog on GitHub →
            </Link>
          </p>
        </Card>
      </Section>
    </div>
  );
}
