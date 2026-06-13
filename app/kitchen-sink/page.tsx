import type { Metadata } from "next";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Badge } from "../components/Badge";
import { Section } from "../components/Section";
import { CodeBlock } from "../components/CodeBlock";
import { HazardStripe } from "../components/HazardStripe";
import { AlertTriangle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Kitchen sink — Swarm",
  robots: "noindex",
};

export default function KitchenSinkPage() {
  return (
    <div className="flex flex-col gap-16 py-16">
      <Section>
        <h1 className="font-heading text-4xl font-bold uppercase tracking-tight text-concrete-100">
          Kitchen sink
        </h1>
        <p className="mt-4 text-concrete-400">
          Internal component preview. Not linked from production navigation.
        </p>
      </Section>

      <Section className="flex flex-col gap-6">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button>Primary action</Button>
          <Button variant="secondary">Secondary action</Button>
          <Button disabled>Disabled</Button>
        </div>
      </Section>

      <Section className="flex flex-col gap-6">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight">Cards</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="font-heading text-lg font-bold">Default card</h3>
            <p className="mt-2 text-concrete-400">A bordered surface with a subtle hover lift.</p>
          </Card>
          <Card>
            <h3 className="font-heading text-lg font-bold">Another card</h3>
            <p className="mt-2 text-concrete-400">Used for features, examples, and callouts.</p>
          </Card>
        </div>
      </Section>

      <Section className="flex flex-col gap-6">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight">Badges</h2>
        <div className="flex flex-wrap gap-3">
          <Badge>default</Badge>
          <Badge variant="hazard">hazard</Badge>
          <Badge variant="success">success</Badge>
        </div>
      </Section>

      <Section className="flex flex-col gap-6">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight">Code block</h2>
        <CodeBlock>{`loop:
  spec -> task -> run -> review -> close`}</CodeBlock>
      </Section>

      <Section className="flex flex-col gap-6">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight">Hazard stripe</h2>
        <HazardStripe height="md" />
      </Section>

      <Section className="flex flex-col gap-6">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight">Icons</h2>
        <div className="flex gap-4 text-swarm-yellow">
          <AlertTriangle aria-label="Warning" />
          <CheckCircle aria-label="Success" />
        </div>
      </Section>

      <Section className="flex flex-col gap-6">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight">Typography</h2>
        <div className="space-y-4">
          <p className="text-concrete-100">Primary text on factory background.</p>
          <p className="text-concrete-400">Secondary text for captions and metadata.</p>
          <p className="text-swarm-yellow">Accent text for links and highlights.</p>
          <p className="text-hazard-orange">Hazard text for warnings and notices.</p>
          <p className="text-drone-green">Drone green for success states.</p>
        </div>
      </Section>
    </div>
  );
}
