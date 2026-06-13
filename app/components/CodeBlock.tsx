import type { ReactNode } from "react";

export interface CodeBlockProps {
  children: ReactNode;
  className?: string;
}

export function CodeBlock({ children, className = "" }: CodeBlockProps) {
  return (
    <pre
      className={`overflow-x-auto rounded-xl border border-factory-800 bg-factory-950 p-5 font-mono text-sm leading-relaxed text-concrete-100 ${className}`}
    >
      <code>{children}</code>
    </pre>
  );
}
