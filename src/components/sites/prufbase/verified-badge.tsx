import { Check } from "lucide-react";

import type { Provider } from "./data";

/** The "seal": accent check + source of truth. */
export function VerifiedBadge({ provider, className = "" }: { provider?: Provider; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 text-brand ${className}`}>
      <span className="flex size-3.5 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <Check className="size-2.5" strokeWidth={3.5} />
      </span>
      <span className="text-label font-semibold">Подтверждено{provider ? ` · ${provider}` : ""}</span>
    </span>
  );
}
