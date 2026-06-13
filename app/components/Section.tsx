import type { ReactNode } from "react";

export interface SectionProps {
  children: ReactNode;
  className?: string;
  as?: "section" | "header" | "footer" | "div" | "nav";
}

export function Section({ children, className = "", as: Tag = "section" }: SectionProps) {
  return (
    <Tag className={`mx-auto w-full max-w-7xl px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  );
}
