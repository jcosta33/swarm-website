import type { ReactNode } from "react";

export interface HexBadgeProps {
  children: ReactNode;
  className?: string;
  color?: "yellow" | "orange" | "green";
}

export function HexBadge({ children, className = "", color = "yellow" }: HexBadgeProps) {
  const colors = {
    yellow: "text-swarm-yellow border-swarm-yellow/40 bg-swarm-yellow/10",
    orange: "text-hazard-orange border-hazard-orange/40 bg-hazard-orange/10",
    green: "text-drone-green border-drone-green/40 bg-drone-green/10",
  };

  return (
    <div
      className={`relative flex h-14 w-14 shrink-0 items-center justify-center clip-hex border ${colors[color]} ${className}`}
    >
      {children}
    </div>
  );
}
