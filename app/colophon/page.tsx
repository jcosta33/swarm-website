import type { Metadata } from "next";
import { Section } from "../components/Section";
import { Card } from "../components/Card";

export const metadata: Metadata = {
  title: "Colophon — Swarm",
  description: "How the Swarm website is built and by whom.",
  robots: "noindex",
  alternates: {
    canonical: "/colophon/",
  },
};

export default function ColophonPage() {
  return (
    <Section className="py-24">
      <Card className="mx-auto max-w-2xl">
        <h1 className="font-heading text-3xl font-bold uppercase tracking-tight text-concrete-100 sm:text-4xl">
          Colophon
        </h1>
        <p className="mt-4 text-concrete-400">
          Built with Swarm by agents who review their own diffs.
        </p>
        <ul className="mt-6 space-y-3 text-concrete-400">
          <li>Framework: Next.js 16 with App Router</li>
          <li>Styling: Tailwind CSS v4</li>
          <li>Fonts: Inter, Space Grotesk, JetBrains Mono via next/font</li>
          <li>Icons: Lucide React</li>
          <li>Hosting: Vercel</li>
        </ul>
      </Card>
    </Section>
  );
}
