import type { ReactNode } from "react";

export interface TerminalWindowProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export function TerminalWindow({ children, className = "", title = "swarm" }: TerminalWindowProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-factory-700 bg-factory-950 font-mono text-sm shadow-2xl ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-factory-800 bg-factory-900 px-4 py-2">
        <span className="h-3 w-3 rounded-full bg-hazard-orange" />
        <span className="h-3 w-3 rounded-full bg-swarm-yellow" />
        <span className="h-3 w-3 rounded-full bg-drone-green" />
        <span className="ml-2 text-xs text-concrete-400">{title}</span>
      </div>
      <div className="scanlines relative p-5 text-concrete-100">{children}</div>
    </div>
  );
}
