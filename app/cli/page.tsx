import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";

export const metadata: Metadata = {
  title: "CLI — Swarm",
  description:
    "The future command-line companion for Swarm specs, tasks, and checks. Coming soon.",
  robots: "noindex",
  openGraph: {
    title: "CLI — Swarm",
    description:
      "The future command-line companion for Swarm specs, tasks, and checks. Coming soon.",
    type: "website",
    images: ["/og-cli.png"],
  },
  alternates: {
    canonical: "/cli/",
  },
};

export default function CliPage() {
  return (
    <Section className="py-24">
      <Card className="mx-auto max-w-2xl text-center">
        <Badge variant="hazard">Coming soon</Badge>
        <h1 className="mt-6 font-heading text-3xl font-bold uppercase tracking-tight text-concrete-100 sm:text-4xl">
          swarm-cli
        </h1>
        <p className="mt-4 text-concrete-400">
          A future command-line companion for running checks, scaffolding artifacts, and keeping your
          Swarm workspace in sync. Not part of the launch wave.
        </p>
        <p className="mt-6">
          <Link
            href="https://github.com/jcosta33/swarm-cli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-swarm-yellow hover:underline focus-ring rounded"
          >
            Follow swarm-cli on GitHub →
          </Link>
        </p>
      </Card>
    </Section>
  );
}
