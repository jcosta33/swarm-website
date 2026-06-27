import { PilotLamp, type PilotLampProps } from "./PilotLamp";

export function SignalPulse({
  className = "",
  color = "core",
}: {
  className?: string;
  color?: PilotLampProps["color"];
}) {
  return (
    <span className={`inline-flex ${className}`} aria-hidden="true">
      <PilotLamp color={color} pulse />
    </span>
  );
}
