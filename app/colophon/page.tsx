import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "../components/Section";
import { Panel } from "../components/Panel";
import { TerminalWindow } from "../components/TerminalWindow";
import { PaperArtifact } from "../components/PaperArtifact";

export const metadata: Metadata = {
  title: "Colophon — Corpus",
  description: "How the Corpus website is built.",
  robots: "noindex",
  alternates: {
    canonical: "/colophon/",
  },
};

const facts = [
  { label: "Framework", value: "Next.js 16 with App Router" },
  { label: "Styling", value: "Tailwind CSS v4" },
  { label: "Fonts", value: "Inter, Space Grotesk, JetBrains Mono" },
  { label: "Icons", value: "Lucide React" },
  { label: "Hosting", value: "Vercel" },
];

export default function ColophonPage() {
  return (
    <Section className="grid gap-6 py-20 md:min-h-[calc(100svh-16rem)] lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <Panel brushed className="p-2">
        <TerminalWindow
          title="build.manifest"
          contentClassName="max-h-none overflow-visible"
        >
          <div className="space-y-6">
            <div>
              <h1 className="font-heading text-3xl font-bold tracking-[0] text-concrete-100 sm:text-4xl">
                Colophon
              </h1>
              <p className="mt-2 text-concrete-400">
                Built with Corpus. Drafted, reviewed, and merged through the
                same workflow.
              </p>
            </div>
            <dl className="grid gap-3 sm:grid-cols-[auto_1fr]">
              {facts.map((fact) => (
                <div key={fact.label} className="contents">
                  <dt className="font-mono text-xs uppercase tracking-wide text-brass">
                    {fact.label}
                  </dt>
                  <dd className="text-concrete-100">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </TerminalWindow>
      </Panel>
      <PaperArtifact
        label="source"
        title="site record"
        meta="built with the same corpus workflow"
      >
        <p>
          The website is a Next.js export. Specs, tasks, review notes, and
          findings live with the source.
        </p>
        <p className="mt-4">
          <Link
            href="https://github.com/jcosta33/corpus-website"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex min-h-11 items-center rounded-sm px-1 font-semibold text-ink underline decoration-ink/40 underline-offset-4 hover:decoration-ink"
          >
            Open the website repo
          </Link>
        </p>
      </PaperArtifact>
    </Section>
  );
}
