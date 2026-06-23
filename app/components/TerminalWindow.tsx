import type { ReactNode } from "react";
import { PilotLamp } from "./PilotLamp";

export interface TerminalWindowProps {
  children: ReactNode;
  className?: string;
  title?: string;
  ariaLabel?: string;
}

export function TerminalWindow({
  children,
  className = "",
  title = "corpus",
  ariaLabel,
}: TerminalWindowProps) {
  return (
    <div
      role="region"
      aria-label={ariaLabel ?? title}
      style={{ contentVisibility: "auto", containIntrinsicSize: "auto 18rem" }}
      className={`relative min-w-0 overflow-hidden rounded-panel border border-panel-border bg-panel-raised shadow-[inset_0_1px_0_rgba(240,226,204,0.08),inset_0_-2px_0_rgba(0,0,0,0.5)] ${className}`}
    >
      <div className="absolute inset-0 brushed-metal pointer-events-none" />
      <div className="relative flex min-w-0 flex-wrap items-center justify-between gap-3 border-b border-panel-border bg-panel-raised px-4 py-2">
        <div className="flex min-w-0 flex-wrap items-center gap-3">
          <PilotLamp color="red" label="pwr" />
          <PilotLamp color="amber" pulse label="check" />
          <PilotLamp color="green" label="evidence" />
        </div>
        <span className="min-w-0 break-words text-xs font-mono font-medium uppercase tracking-widest engraved">
          {title}
        </span>
      </div>
      <div className="crt-screen relative max-h-[24rem] overflow-auto break-words p-5 font-mono text-sm leading-relaxed text-concrete-100">
        <div className="pointer-events-none absolute inset-0 z-[3] animate-scanline bg-gradient-to-b from-transparent via-aurum/5 to-transparent opacity-20" />
        {children}
      </div>
    </div>
  );
}
