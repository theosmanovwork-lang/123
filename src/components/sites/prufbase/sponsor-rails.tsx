import { sponsorSlots } from "./data";

/** Placeholder until real sponsors exist: deliberately quiet so it never competes with the hero. */
function Slot() {
  return (
    <a
      href="#waitlist"
      className="group flex h-full cursor-pointer flex-col items-center justify-center rounded-[10px] border border-dashed border-border p-3 text-center opacity-60 transition-[opacity,border-color] hover:border-ring hover:opacity-100 focus-visible:opacity-100"
    >
      <span className="text-label font-mono tracking-wider text-muted-foreground uppercase">Спонсорское место</span>
      <span className="mt-2 text-xs text-muted-foreground group-hover:text-foreground">Узнать условия</span>
    </a>
  );
}

function Rail({ side, count }: { side: "left" | "right"; count: number }) {
  return (
    <aside
      aria-label="Спонсорские места"
      className={`pointer-events-none fixed inset-y-0 z-0 hidden w-[16.666%] xl:block ${side === "left" ? "left-0" : "right-0"}`}
    >
      <div className="pointer-events-auto grid h-full grid-rows-5 gap-4 p-4">
        {Array.from({ length: count }, (_, i) => (
          <Slot key={i} />
        ))}
      </div>
    </aside>
  );
}

export function SponsorRails() {
  return (
    <>
      <Rail side="left" count={sponsorSlots.left.length} />
      <Rail side="right" count={sponsorSlots.right.length} />
    </>
  );
}
