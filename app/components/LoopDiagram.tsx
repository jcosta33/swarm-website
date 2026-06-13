import { ArrowRight } from "lucide-react";

const steps = [
  { number: "01", label: "Pull", description: "Capture the ticket and intent in an intake file." },
  { number: "02", label: "Spec", description: "Write requirements, each with a verification method." },
  { number: "03", label: "Task", description: "Hand the agent a bounded packet: scope, do-not-change, verify." },
  { number: "04", label: "Run", description: "The agent implements and pastes real evidence." },
  { number: "05", label: "Review", description: "Check evidence per requirement; human attention where needed." },
  { number: "06", label: "Close", description: "Merge, save findings, update the board." },
];

export function LoopDiagram() {
  return (
    <ol className="grid gap-6 md:grid-cols-6">
      {steps.map((step, index) => (
        <li key={step.label} className="relative flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-medium text-swarm-yellow">{step.number}</span>
            <span className="font-heading text-lg font-bold uppercase tracking-tight text-concrete-100">
              {step.label}
            </span>
          </div>
          <p className="text-sm leading-relaxed text-concrete-400">{step.description}</p>
          {index < steps.length - 1 && (
            <ArrowRight
              className="absolute -right-3 top-1 hidden h-4 w-4 text-factory-700 md:block"
              aria-hidden="true"
            />
          )}
        </li>
      ))}
    </ol>
  );
}
