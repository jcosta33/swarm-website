import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";

export const metadata: Metadata = {
  title: "Skills — Swarm",
  description:
    "A curated catalog of reusable agent skills for Swarm workflows. Coming soon.",
  openGraph: {
    title: "Skills — Swarm",
    description:
      "A curated catalog of reusable agent skills for Swarm workflows. Coming soon.",
    type: "website",
    images: ["/og-skills.png"],
  },
  alternates: {
    canonical: "/skills/",
  },
};

export default function SkillsPage() {
  return (
    <Section className="py-24">
      <Card className="mx-auto max-w-2xl text-center">
        <Badge variant="hazard">Coming soon</Badge>
        <h1 className="mt-6 font-heading text-3xl font-bold uppercase tracking-tight text-concrete-100 sm:text-4xl">
          Swarm skills
        </h1>
        <p className="mt-4 text-concrete-400">
          A curated catalog of reusable skills — review stances, depth settings, and specialized
          workflows for agent teams. Not part of the launch wave.
        </p>
        <p className="mt-6">
          <Link
            href="https://github.com/jcosta33/swarm-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="text-swarm-yellow hover:underline focus-ring rounded"
          >
            Follow swarm-skills on GitHub →
          </Link>
        </p>
      </Card>
    </Section>
  );
}
