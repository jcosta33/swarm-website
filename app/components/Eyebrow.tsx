import type { ReactNode } from "react";
import { SignalPulse } from "./SignalPulse";

export interface EyebrowProps {
  children: ReactNode;
  pulse?: boolean;
  /** Custom leading icon. Defaults to the pulsing SignalPulse (when `pulse`); pass e.g. a lucide
   *  icon for an eyebrow that leads with something else (the homepage CTA leads with <Users/>). */
  icon?: ReactNode;
  className?: string;
}

export function Eyebrow({ children, pulse = true, icon, className = "" }: EyebrowProps) {
  const lead = icon ?? (pulse ? <SignalPulse className="h-4 w-4" /> : null);
  return (
    <div
      className={`inline-flex items-center gap-3 panel-raised brushed-metal px-4 py-1.5 ${className}`}
    >
      {lead}
      <span className="text-xs font-mono font-medium uppercase tracking-widest engraved">
        {children}
      </span>
    </div>
  );
}
