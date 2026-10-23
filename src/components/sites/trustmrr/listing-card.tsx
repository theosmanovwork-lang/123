import Image from "next/image";

import type { Listing } from "./data";
import { SiteLink } from "./site-link";

export function ListingCard({ listing }: { listing: Listing }) {
  const stats = [
    ["Revenue", listing.revenue],
    ["Price", listing.price],
    ["Multiple", listing.multiple],
  ] as const;
  return (
    <SiteLink
      href={listing.href}
      className="group relative flex w-[220px] shrink-0 cursor-pointer flex-col overflow-hidden rounded-lg border bg-background/60 p-3 transition-all hover:border-primary/30 hover:bg-background"
    >
      <div className="absolute top-0 right-0 rounded-bl-lg bg-amber-100 px-2 py-0.5 text-[9px] font-bold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
        FOR SALE
      </div>
      <div className="mt-1 mb-3 flex items-center gap-3">
        <div className="relative">
          {listing.logo ? (
            <Image
              src={listing.logo}
              alt={listing.name}
              width={32}
              height={32}
              className="size-8 shrink-0 rounded-lg border object-cover shadow-xs"
            />
          ) : null}
        </div>
        <div className="min-w-0 flex-1 text-left">
          <h3 className="truncate text-sm leading-tight font-bold transition-colors group-hover:text-primary">
            {listing.name}
          </h3>
          <p className="truncate text-[10px] text-muted-foreground">{listing.category}</p>
        </div>
      </div>
      <div className="mt-auto grid grid-cols-3 gap-2">
        {stats.map(([label, value]) => (
          <div key={label}>
            <p className="mb-0.5 text-[9px] font-semibold tracking-wider text-muted-foreground uppercase">{label}</p>
            <p className="font-mono text-xs font-bold">{value}</p>
          </div>
        ))}
      </div>
    </SiteLink>
  );
}
