import type { ReactNode } from "react";
import { signalRoles, type SignalRole } from "./signalStyles";

export interface SignalStatProps {
  label: string;
  value: ReactNode;
  signal?: SignalRole;
  valueClassName?: string;
}

export function SignalStat({
  label,
  value,
  signal = "reference",
  valueClassName = "font-heading text-3xl font-bold text-concrete-100",
}: SignalStatProps) {
  return (
    <div className={`signal-stat signal-stat-${signal} min-w-0`}>
      <p
        className={`font-mono text-xs font-semibold uppercase tracking-[0.12em] ${signalRoles[signal].text}`}
      >
        {label}
      </p>
      <p className={`mt-2 break-words ${valueClassName}`}>{value}</p>
    </div>
  );
}
