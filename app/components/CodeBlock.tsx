import type { ReactNode } from "react";

export interface CodeBlockProps {
  children: ReactNode;
  className?: string;
}

export function CodeBlock({ children, className = "" }: CodeBlockProps) {
  return (
    <pre
      tabIndex={0}
      aria-label="Code sample"
      className={`overflow-x-auto rounded-xl border border-factory-800 bg-factory-950 p-5 font-mono text-sm leading-relaxed text-concrete-100 focus-ring ${className}`}
    >
      <code>{children}</code>
    </pre>
  );
}
