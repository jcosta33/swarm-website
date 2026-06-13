export function SignalPulse({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`} aria-hidden="true">
      <span className="absolute h-full w-full rounded-full bg-swarm-yellow/30 animate-signal" />
      <span
        className="absolute h-full w-full rounded-full bg-swarm-yellow/20 animate-signal"
        style={{ animationDelay: "0.6s" }}
      />
      <span className="relative h-3 w-3 rounded-full bg-swarm-yellow" />
    </div>
  );
}
