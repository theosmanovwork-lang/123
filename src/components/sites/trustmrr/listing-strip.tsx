import { ChevronRight } from "lucide-react";

import type { Listing } from "./data";
import { ListingCard } from "./listing-card";
import { SiteLink } from "./site-link";

type ListingStripProps = { title: string; listings: Listing[]; className?: string };

export function ListingStrip({ title, listings, className }: ListingStripProps) {
  return (
    <section className={className}>
      <div className="mb-3 flex items-center justify-between px-1">
        <h2 className="text-sm font-semibold text-muted-foreground">{title}</h2>
        <SiteLink
          href="/acquire"
          className="flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          View all
          <ChevronRight className="size-3" />
        </SiteLink>
      </div>
      <div className="scrollbar-hide -mx-4 flex gap-3 overflow-x-auto overscroll-x-contain px-4 pb-4 md:mx-0 md:snap-x md:px-0">
        {listings.map((listing, i) => (
          <div key={`${listing.href}-${i}`} className="shrink-0 snap-start">
            <ListingCard listing={listing} />
          </div>
        ))}
      </div>
    </section>
  );
}
