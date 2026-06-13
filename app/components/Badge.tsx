import type { ReactNode } from "react";

export interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "hazard" | "success";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles = {
    default: "border-factory-700 text-concrete-400",
    hazard: "border-hazard-orange text-hazard-orange",
    success: "border-drone-green text-drone-green",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
