"use client";

import { useState } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

const modes = ["system", "light", "dark"] as const;
type Mode = (typeof modes)[number];
const labels: Record<Mode, string> = { system: "System", light: "Light", dark: "Dark" };
const icons = { system: Monitor, light: Sun, dark: Moon } as const;

function apply(mode: Mode) {
  const dark = mode === "dark" || (mode === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
}

export function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("system");
  const Icon = icons[mode];
  const cycle = () => {
    const next = modes[(modes.indexOf(mode) + 1) % modes.length];
    setMode(next);
    apply(next);
  };
  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`Toggle theme (current: ${labels[mode]})`}
      title={`Current: ${labels[mode]} (click to cycle)`}
      className="inline-flex h-8 shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-md px-3 text-sm font-medium whitespace-nowrap transition-all outline-none hover:bg-accent hover:text-accent-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-[>svg]:px-2.5"
    >
      <Icon className="h-4 w-4" />
      <span>{labels[mode]}</span>
    </button>
  );
}
