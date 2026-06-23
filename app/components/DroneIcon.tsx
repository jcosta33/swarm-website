import type { CSSProperties } from "react";

// The hermetic seal — a hexagon enclosing a hexagram with a centred quintessence. Echoes the
// wordmark Logo; used inline as a section glyph. Strokes inherit currentColor.
export function DroneIcon({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* the cell — a hexagon */}
      <path
        d="M16 6L26 11V21L16 26L6 21V11L16 6Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      {/* hexagram — fire △ and water ▽ joined */}
      <path
        d="M16 9 L22.5 20.5 L9.5 20.5 Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M16 23 L9.5 11.5 L22.5 11.5 Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      {/* the quintessence */}
      <circle cx="16" cy="16" r="1.7" fill="currentColor" />
    </svg>
  );
}
