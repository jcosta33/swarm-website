import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "../components/Section";
import { Card } from "../components/Card";

export const metadata: Metadata = {
  title: "What is Swarm — Swarm",
  description:
    "Swarm is a lightweight spec and review workflow for teams using coding agents. Works today with plain markdown; no runtime required.",
  openGraph: {
    title: "What is Swarm — Swarm",
    description:
      "Swarm is a lightweight spec and review workflow for teams using coding agents. Works today with plain markdown; no runtime required.",
    type: "website",
    images: ["/og-what-is-swarm.png"],
  },
  alternates: {
    canonical: "/what-is-swarm/",
  },
};

const isList = [
  "a spec format agents can work from",
  "a task-packet format that bounds agent work",
  "a review-packet format that shows where human attention goes",
  "a findings convention so lessons survive the session",
  "a starter kit of markdown templates",
  "a workspace convention",
];

const isNotList = [
  "an agent or agent runtime",
  "a compiler",
  "a programming language",
  "a Jira/Linear replacement",
  "a code generator",
  "a replacement for PRs and CI",
  "a docs portal",
  "a complete SDLC platform",
  "a formal verification system",
  "a guarantee that agent output is correct",
];

const adjacent = [
  {
    product: "Coding agents (Claude Code, Cursor, Copilot, …)",
    does: "write the code",
    relation:
      "Swarm ships no agent. It shapes the inputs any agent works from and the output you review. Bring whichever agent you have.",
  },
  {
    product: "Spec-driven workflows",
    does: "turn a written spec into an implementation",
    relation:
      "The same family. Swarm's bet is the review side — every requirement carries a verification method, and the review packet shows the evidence per requirement.",
  },
  {
    product: "Issue trackers (Jira, Linear, GitHub Issues)",
    does: "hold the backlog and the conversation",
    relation:
      "The ticket stays where it is. Swarm snapshots it into an intake file and interprets it into a spec an agent can act on.",
  },
  {
    product: "Docs portals (wikis, Notion, docs sites)",
    does: "describe the system after the fact",
    relation:
      "A Swarm spec is a working document — acceptance criteria, verification methods, open questions. It drives the change rather than documenting it later.",
  },
  {
    product: "Review tooling (PRs, CI, review bots)",
    does: "gate the merge",
    relation:
      "Swarm does not replace the PR. The review packet rides alongside it and tells the reviewer where to look; CI output is the evidence the packet cites.",
  },
  {
    product: "Refactoring tooling (codemods, OpenRewrite, …)",
    does: "execute mechanical change",
    relation:
      "Swarm's change plan states what must survive the change and how to check it; a codemod is one way a task executes a step of that plan.",
  },
];

const failureModes = [
  {
    mode: "Drift",
    looksLike: "the agent solves a problem, not the problem",
    answer: "the task packet: an explicit scope and a &apos;Do not change&apos; list",
  },
  {
    mode: "Ambiguous input",
    looksLike: "ambiguity degrades generated code; models do not reliably flag it",
    answer: "requirements written one per ID, each with its own verification method",
  },
  {
    mode: "Lost handoff",
    looksLike: "the handoff from plan to implementation is the dominant failure surface",
    answer: "the handoff is a written, bounded task packet — not a chat message",
  },
  {
    mode: "Hallucinated completion",
    looksLike: "\"done,\" but nothing was checked",
    answer: "a Pass needs pasted output, a CI link, or a named human's recorded observation",
  },
  {
    mode: "No resumable trail",
    looksLike: "the session ends mid-stride; the next one starts from zero",
    answer: "work externalized to files — intake, spec, task, review",
  },
  {
    mode: "Repeated mistakes",
    looksLike: "the same class of bug returns every few sessions",
    answer: "findings saved at Close, kept where the next task will look",
  },
];

export default function WhatIsSwarmPage() {
  return (
    <div className="flex flex-col gap-24 py-24">
      <Section>
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-tight text-concrete-100 sm:text-5xl">
            What is Swarm?
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-concrete-100">
            Swarm is a lightweight spec and review workflow for teams using coding agents. Turn
            tickets into clear specs, specs into agent-ready tasks, and agent output into evidence
            you can review — plain markdown, any agent, no runtime.
          </p>
          <p className="mt-4 text-concrete-400">
            Works today — plain markdown plus your agent; no Swarm tooling required.
          </p>
        </div>
      </Section>

      <Section className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-concrete-100">
            What Swarm is
          </h2>
          <ul className="mt-6 space-y-3">
            {isList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-concrete-100">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-swarm-yellow" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-concrete-100">
            What Swarm is not
          </h2>
          <ul className="mt-6 space-y-3">
            {isNotList.map((item) => (
              <li key={item} className="flex items-start gap-3 text-concrete-400">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-factory-700" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="flex flex-col gap-12">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-concrete-100">
          Where Swarm sits
        </h2>
        <div className="overflow-x-auto rounded-2xl border border-factory-800">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="border-b border-factory-800 bg-factory-900">
              <tr>
                <th className="px-4 py-3 font-heading font-bold uppercase tracking-wide text-concrete-100">
                  Adjacent product
                </th>
                <th className="px-4 py-3 font-heading font-bold uppercase tracking-wide text-concrete-100">
                  What it does
                </th>
                <th className="px-4 py-3 font-heading font-bold uppercase tracking-wide text-concrete-100">
                  Swarm&apos;s relationship
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-factory-800">
              {adjacent.map((row) => (
                <tr key={row.product}>
                  <td className="px-4 py-3 font-semibold text-concrete-100">{row.product}</td>
                  <td className="px-4 py-3 text-concrete-400">{row.does}</td>
                  <td className="px-4 py-3 text-concrete-400">{row.relation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section className="flex flex-col gap-12">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-concrete-100">
          Failure modes Swarm positions against
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {failureModes.map((fm) => (
            <Card key={fm.mode} className="h-full">
              <h3 className="font-heading text-lg font-bold uppercase tracking-tight text-concrete-100">
                {fm.mode}
              </h3>
              <p className="mt-2 text-sm text-concrete-400">{fm.looksLike}</p>
              <p className="mt-4 text-sm text-concrete-100">{fm.answer}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <p className="text-concrete-400">
          Source:{" "}
          <Link
            href="https://github.com/jcosta33/swarm/blob/main/docs/01-what-is-swarm.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-swarm-yellow hover:underline focus-ring rounded"
          >
            docs/01-what-is-swarm.md
          </Link>
        </p>
      </Section>
    </div>
  );
}
