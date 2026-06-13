import type { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-factory-800 bg-factory-900 p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-factory-700 ${className}`}
    >
      {children}
    </div>
  );
}
