import { PilotLamp } from "./PilotLamp";
import {
  normalizeSignalRole,
  signalRoleMeta,
  type SignalInput,
} from "./signalStyles";

export interface SignalKeyItem {
  label: string;
  role: SignalInput;
  detail: string;
}

export interface SignalKeyProps {
  items: readonly SignalKeyItem[];
  ariaLabel: string;
  className?: string;
}

export function SignalKey({
  items,
  ariaLabel,
  className = "",
}: SignalKeyProps) {
  return (
    <ul className={`signal-key ${className}`} aria-label={ariaLabel}>
      {items.map((item) => {
        const role = normalizeSignalRole(item.role);
        const meta = signalRoleMeta[role];

        return (
          <li
            key={`${item.label}-${role}`}
            className={`signal-key-item signal-key-item-${role}`}
            data-color-role={role}
          >
            <PilotLamp color={role} className="signal-key-lamp" />
            <span className="signal-key-copy">
              <span className="signal-key-label">{item.label}</span>
              <span className="signal-key-detail">
                {item.detail}
                <span className="sr-only">. Color role: {meta.label}.</span>
              </span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}
