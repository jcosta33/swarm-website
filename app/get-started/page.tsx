import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FolderPlus, Rocket } from "lucide-react";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { Button } from "../components/Button";

export const metadata: Metadata = {
  title: "Get started — Swarm",
  description:
    "Adopt Swarm in a new repo with the starter kit, or copy the kit into an existing project.",
  openGraph: {
    title: "Get started — Swarm",
    description:
      "Adopt Swarm in a new repo with the starter kit, or copy the kit into an existing project.",
    type: "website",
    images: ["/og-get-started.png"],
  },
  alternates: {
    canonical: "/get-started/",
  },
};

export default function GetStartedPage() {
  return (
    <div className="flex flex-col gap-24 py-24">
      <Section>
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl font-bold uppercase tracking-tight text-concrete-100 sm:text-5xl">
            Get started
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-concrete-400">
            Pick a path. Either way, you are writing specs and tasks in plain markdown five minutes
            from now.
          </p>
        </div>
      </Section>

      <Section className="grid gap-8 md:grid-cols-2">
        <Card className="flex flex-col gap-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-factory-800 text-swarm-yellow">
            <Rocket className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-concrete-100">
              New repo
            </h2>
            <p className="mt-2 text-concrete-400">
              Use the GitHub template to create a fresh Swarm workspace with the folder structure,
              templates, and agent guides already in place.
            </p>
          </div>
          <Button asChild>
            <Link
              href="https://github.com/jcosta33/swarm-starter-kit"
              target="_blank"
              rel="noopener noreferrer"
            >
              Use the starter kit template <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </Card>

        <Card className="flex flex-col gap-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-factory-800 text-swarm-yellow">
            <FolderPlus className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-concrete-100">
              Existing project
            </h2>
            <p className="mt-2 text-concrete-400">
              Copy the starter kit into a workspace folder inside your existing repo. Add specs and
              tasks alongside your code without changing the project structure.
            </p>
          </div>
          <Button variant="secondary" asChild>
            <Link
              href="https://github.com/jcosta33/swarm/blob/main/docs/ADOPTING.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read ADOPTING.md <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </Card>
      </Section>

      <Section>
        <p className="text-concrete-400">
          Not sure which path fits? Read{" "}
          <Link
            href="https://github.com/jcosta33/swarm/blob/main/docs/ADOPTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-swarm-yellow hover:underline focus-ring rounded"
          >
            docs/ADOPTING.md
          </Link>{" "}
          for a decision checklist.
        </p>
      </Section>
    </div>
  );
}
