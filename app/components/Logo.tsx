export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 align-middle font-display text-base font-semibold leading-none lowercase ${className}`}
    >
      <svg
        viewBox="0 0 32 32"
        className="h-[1.45em] w-[1.45em] shrink-0 translate-y-[0.01em]"
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
        <path
          d="M16 4.5 L25.96 21.75 L6.04 21.75 Z"
          stroke="url(#corpus-gilt)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        <path
          d="M16 27.5 L6.04 10.25 L25.96 10.25 Z"
          stroke="url(#corpus-gilt)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        {[4.5, 10.25, 21.75, 27.5].map((y, i) => {
          const points =
            i === 0
              ? [[16, y]]
              : i === 3
                ? [[16, y]]
                : i === 1
                  ? [
                      [6.04, y],
                      [25.96, y],
                    ]
                  : [
                      [6.04, y],
                      [25.96, y],
                    ];
          return points.map(([x, py]) => (
            <circle
              key={`${x}-${py}`}
              cx={x}
              cy={py}
              r="1.35"
              fill="#080604"
              stroke="url(#corpus-gilt)"
              strokeWidth="0.9"
            />
          ));
        })}
        <circle cx="16" cy="16" r="1.55" fill="#d88a24" />
      </svg>
      <span className="leading-none tracking-[0.02em]">corpus</span>
    </span>
  );
}
