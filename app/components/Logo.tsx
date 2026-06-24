const points = [
  [16, 4.5],
  [25.96, 10.25],
  [25.96, 21.75],
  [16, 27.5],
  [6.04, 21.75],
  [6.04, 10.25],
];

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 align-middle font-heading text-[1.08rem] font-bold leading-none tracking-[0] ${className}`}
    >
      <svg
        viewBox="0 0 32 32"
        className="h-[1.35em] w-[1.35em] shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="corpus-gilt"
            x1="16"
            y1="2"
            x2="16"
            y2="30"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#f0b85c" />
            <stop offset="0.55" stopColor="#d88a24" />
            <stop offset="1" stopColor="#a96a24" />
          </linearGradient>
        </defs>
        <circle
          cx="16"
          cy="16"
          r="13.6"
          stroke="url(#corpus-gilt)"
          strokeWidth="1"
          opacity="0.95"
        />
        <polygon
          points={points.map(([x, y]) => `${x},${y}`).join(" ")}
          stroke="url(#corpus-gilt)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        {points.map(([x, y]) => (
          <line
            key={`spoke-${x}-${y}`}
            x1="16"
            y1="16"
            x2={x}
            y2={y}
            stroke="url(#corpus-gilt)"
            strokeWidth="0.65"
            opacity="0.75"
          />
        ))}
        {points.map(([x, y]) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r="1.35"
            fill="#080604"
            stroke="url(#corpus-gilt)"
            strokeWidth="0.9"
          />
        ))}
        <circle cx="16" cy="16" r="1.55" fill="#d88a24" />
      </svg>
      <span className="leading-none">Corpus</span>
    </span>
  );
}
