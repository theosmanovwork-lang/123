import { sponsorSlots } from "./data";

function Slot() {
  return (
    <a
      href="#waitlist"
      className="group flex h-full cursor-pointer flex-col items-center justify-center rounded-[10px] border border-dashed border-border bg-card/40 p-3 text-center transition-colors hover:border-primary/60"
    >
      <span className="mb-1 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">Sponsor spot</span>
      <span className="mb-0.5 text-sm font-semibold">Место для спонсора</span>
      <span className="line-clamp-3 text-xs text-muted-foreground">
        Твой проект перед фаундерами и покупателями. Подписка в ₽ в месяц.
      </span>
      <span className="mt-2 text-xs font-medium text-brand opacity-0 transition-opacity group-hover:opacity-100">
        Узнать условия →
      </span>
    </a>
  );
}

function Rail({ side, count }: { side: "left" | "right"; count: number }) {
  return (
    <aside
      aria-label="Спонсорские места"
      className={`pointer-events-none fixed inset-y-0 z-0 hidden w-[16.666%] lg:block ${side === "left" ? "left-0" : "right-0"}`}
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
