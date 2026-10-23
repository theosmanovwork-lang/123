import Image from "next/image";

import { leftSponsors, rightSponsors, type Sponsor } from "./data";

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <a
      href={sponsor.href}
      target="_blank"
      rel="noopener sponsored"
      className="group flex h-full cursor-pointer flex-col items-center justify-center rounded-lg border border-primary/10 p-3 text-center transition-all hover:border-primary/50"
      style={{ backgroundColor: sponsor.bg }}
    >
      <Image
        src={sponsor.icon}
        alt={sponsor.title}
        width={24}
        height={24}
        className="mb-1 size-5 shrink-0 rounded object-cover transition-all group-hover:saturate-[1.25] 2xl:mb-2 2xl:size-6"
      />
      <h3 className="mb-0.5 text-sm font-semibold 2xl:mb-1">{sponsor.title}</h3>
      <p className="line-clamp-2 text-xs text-muted-foreground">{sponsor.description}</p>
    </a>
  );
}

function Rail({ sponsors, side }: { sponsors: Sponsor[]; side: "left" | "right" }) {
  return (
    <aside
      aria-label="Sponsors"
      className={`pointer-events-none fixed inset-y-0 z-0 hidden w-[16.666%] lg:block ${side === "left" ? "left-0" : "right-0"}`}
    >
      <div className="pointer-events-auto grid h-full grid-rows-5 gap-4 p-4">
        {sponsors.map((sponsor, i) => (
          <SponsorCard key={`${sponsor.title}-${i}`} sponsor={sponsor} />
        ))}
      </div>
    </aside>
  );
}

export function SponsorRails() {
  return (
    <>
      <Rail sponsors={leftSponsors} side="left" />
      <Rail sponsors={rightSponsors} side="right" />
    </>
  );
}
