export interface HazardStripeProps {
  className?: string;
  height?: "sm" | "md" | "lg";
}

export function HazardStripe({ className = "", height = "md" }: HazardStripeProps) {
  const heights = {
    sm: "h-2",
    md: "h-4",
    lg: "h-8",
  };

  return (
    <div
      role="presentation"
      className={`w-full hazard-stripe ${heights[height]} ${className}`}
    />
  );
}
