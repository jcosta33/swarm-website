import type { Metadata } from "next";
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  FileText,
  FolderPlus,
  FolderTree,
  LayoutTemplate,
  Rocket,
  ScrollText,
  Terminal,
  Wrench,
} from "lucide-react";
import { Section } from "../components/Section";
import { Card } from "../components/Card";
import { ActionLink } from "../components/ActionLink";
import { Panel } from "../components/Panel";
import { TerminalWindow } from "../components/TerminalWindow";
import { Heading } from "../components/Heading";
import { PaperArtifact } from "../components/PaperArtifact";
import { TextLink } from "../components/TextLink";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Get started — Corpus",
  description:
    "Set up Corpus in a new repo or an existing project.",
  openGraph: {
    title: "Get started — Corpus",
    description:
      "Set up Corpus in a new repo or an existing project.",
    type: "website",
    url: "/get-started/",
    siteName: "Corpus",
    locale: "en_US",
    images: [
      {
        url: "/og-get-started.png",
        width: 1200,
        height: 630,
        alt: "Get started with Corpus — a new repo or an existing project",
      },
    ],
  },
  alternates: {
    canonical: "/get-started/",
  },
};

function KitIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-panel border border-panel-border bg-panel-raised text-corpus-yellow shadow-[inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.45)]">
      <div
        className="brushed-metal absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      />
      <span className="relative z-10">{children}</span>
    </div>
  );
}

const kitContents = [
  {
    name: "AGENTS.md",
    role: "local contract",
    text: "The file your agent reads before work starts.",
    icon: ScrollText,
  },
  {
    name: "Core guides",
    role: "working method",
    text: "Write specs, run tasks, review output, save findings.",
    icon: BookOpen,
  },
  {
    name: "Eight templates",
    role: "record shapes",
    text: "Intake, spec, task, review, finding, status, inventory, change plan.",
    icon: LayoutTemplate,
  },
  {
    name: "Flow folders",
    role: "workspace map",
    text: "Specs, tasks, reviews, findings, and related folders.",
    icon: FolderTree,
  },
  {
    name: "status.md",
    role: "active board",
    text: "A small workboard for active items.",
    icon: ClipboardList,
  },
  {
    name: "decisions/",
    role: "local ADRs",
    text: "Decision records for choices that should survive chat.",
    icon: FileText,
  },
];

export default function GetStartedPage() {
  return (
    <div className="flex flex-col gap-12 py-14 sm:gap-16 sm:py-16">
      <Section className="ambient-header">
        <PageHero eyebrow="setup / first workspace" title="Get started">
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-concrete-400 sm:text-xl">
            Start with the starter kit. Use the CLI when you want scaffolding
            and checks.
          </p>
        </PageHero>
      </Section>

      <Section className="reveal grid gap-6 md:grid-cols-2">
        <Card screws className="h-full" contentClassName="flex h-full flex-col gap-5">
          <KitIcon>
            <Rocket className="h-6 w-6" aria-hidden="true" />
          </KitIcon>
          <div>
            <Heading>New repo</Heading>
            <p className="mt-2 text-concrete-400">
              Use the GitHub template for a fresh workspace with folders,
              templates, and guides in place.
            </p>
          </div>
          <ActionLink
            href="https://github.com/jcosta33/corpus-starter-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 w-fit justify-start"
          >
            Use the starter kit{" "}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ActionLink>
        </Card>

        <Card screws className="h-full" contentClassName="flex h-full flex-col gap-5">
          <KitIcon>
            <FolderPlus className="h-6 w-6" aria-hidden="true" />
          </KitIcon>
          <div>
            <Heading>Existing project</Heading>
            <p className="mt-2 text-concrete-400">
              Copy the kit into your repo. Add specs and tasks beside the code.
            </p>
          </div>
          <ActionLink
            href="/docs/ADOPTING/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 w-fit justify-start"
          >
            Read the adopting guide{" "}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ActionLink>
        </Card>
      </Section>

      <Section className="flex flex-col gap-6">
        <div className="section-kicker section-kicker-gold">
          <Terminal className="h-4 w-4" aria-hidden="true" />
          <span>or scaffold it with the cli</span>
        </div>
        <Heading>Prefer the command line?</Heading>
        <p className="max-w-2xl text-concrete-400">
          <code className="text-corpus-yellow">corpus init</code> scaffolds the
          same workspace into a new or existing repo. It refuses to overwrite
          existing files. Install it from source for now.
        </p>
        <Panel brushed className="p-2">
          <TerminalWindow title="terminal">
            <p className="text-concrete-500">
              # install the CLI from source
            </p>
            <p className="text-concrete-100">
              <span className="text-corpus-yellow">$</span>{" "}HOST=github.com/jcosta33
            </p>
            <p className="text-concrete-100">
              <span className="text-corpus-yellow">$</span>{" "}PKG=corpus-cli
            </p>
            <p className="text-concrete-100">
              <span className="text-corpus-yellow">$</span>{" "}SRC=$HOST/$PKG.git
            </p>
            <p className="text-concrete-100">
              <span className="text-corpus-yellow">$</span>{" "}git clone https://$SRC
            </p>
            <p className="text-concrete-100">
              <span className="text-corpus-yellow">$</span>{" "}cd &quot;$PKG&quot;
            </p>
            <p className="text-concrete-100">
              <span className="text-corpus-yellow">$</span>{" "}npm install
            </p>
            <p className="text-concrete-100">
              <span className="text-corpus-yellow">$</span>{" "}npm run build
            </p>
            <p className="text-concrete-100">
              <span className="text-corpus-yellow">$</span>{" "}npm link
            </p>
            <p className="mt-2 text-concrete-500">
              # then, in a new or existing repo
            </p>
            <p className="text-concrete-100">
              <span className="text-corpus-yellow">$</span>{" "}corpus init{" "}
              <span className="text-concrete-500">
                # scaffold the workspace, conflict-safe
              </span>
            </p>
            <p className="text-concrete-100">
              <span className="text-corpus-yellow">$</span>{" "}corpus check{" "}
              <span className="text-concrete-500">
                # confirm it is well-formed; exit 0/1/2
              </span>
            </p>
          </TerminalWindow>
        </Panel>
        <p className="text-concrete-400">
          CLI details:{" "}
          <TextLink href="/cli/">the CLI page</TextLink>.
        </p>
      </Section>

      <Section className="grid gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
        <div className="flex flex-col gap-5">
          <Heading>Starter kit contents</Heading>
          <PaperArtifact
            label="note"
            title="starter kit contents"
            meta="workspace / committed artifacts"
          >
            <p>
              Copy the kit once. It gives the repo a shared map: local rules,
              record templates, flow folders, and a small board.
            </p>
          </PaperArtifact>
          <p className="text-concrete-400">
            More setup notes:{" "}
            <TextLink
              href="/docs/ADOPTING/"
              target="_blank"
              rel="noopener noreferrer"
            >
              docs/ADOPTING.md
            </TextLink>
          </p>
        </div>

        <Card screws className="h-full" contentClassName="space-y-5">
          <div className="section-kicker section-kicker-brass">
            <FolderTree className="h-4 w-4" aria-hidden="true" />
            <span>manifest — copied files</span>
          </div>
          <ul className="kit-ledger">
            {kitContents.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={item.name} className="kit-ledger-item">
                  <div className="kit-ledger-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <Icon className="kit-ledger-icon h-4 w-4" aria-hidden="true" />
                  <div className="min-w-0">
                    <h3 className="kit-ledger-title">{item.name}</h3>
                    <p className="kit-ledger-role">{item.role}</p>
                    <p className="kit-ledger-copy">{item.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </Card>
      </Section>

      <Section className="grid gap-6 md:grid-cols-2">
        <Card
          screws
          className="h-full"
          contentClassName="flex h-full flex-col gap-6"
        >
          <div className="flex items-start gap-4">
            <KitIcon>
              <Wrench className="h-6 w-6" aria-hidden="true" />
            </KitIcon>
            <div>
              <Heading>Need more depth?</Heading>
              <p className="mt-2 text-concrete-400">
                Install optional skills for review, fixes, features, and docs.
              </p>
            </div>
          </div>
          <ActionLink href="/skills/" className="mt-auto w-fit">
            Browse skills <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ActionLink>
        </Card>

        <Card
          screws
          className="h-full"
          contentClassName="flex h-full flex-col gap-6"
        >
          <div className="flex items-start gap-4">
            <KitIcon>
              <Terminal className="h-6 w-6" aria-hidden="true" />
            </KitIcon>
            <div>
              <Heading>Using Claude Code?</Heading>
              <p className="mt-2 text-concrete-400">
                Copy a worker definition for review, exploration, or authoring.
              </p>
            </div>
          </div>
          <ActionLink href="/agents/" className="mt-auto w-fit">
            Browse agents <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ActionLink>
        </Card>
      </Section>
    </div>
  );
}
