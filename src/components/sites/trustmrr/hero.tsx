import Image from "next/image";

import { bestDeals, recentlyListed } from "./data";
import { ListingStrip } from "./listing-strip";
import { SearchBox } from "./search-box";
import { SiteLink } from "./site-link";

const quickLinks = [
  ["Buy/sell", "/acquire"],
  ["Stats", "/stats"],
  ["Dashboard", "/dashboard"],
] as const;

export function Hero() {
  return (
    <header className="mb-8 text-center md:mb-12">
      <div className="mb-2 flex items-center justify-center gap-2 md:mb-6">
        <Image
          src="/sites/trustmrr/img/icon_trans.png"
          alt="TrustMRR"
          width={100}
          height={100}
          priority
          className="size-5 shrink-0 object-cover md:size-6"
        />
        <p className="text-base font-bold text-muted-foreground md:text-2xl">TrustMRR</p>
      </div>
      <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-5xl">The database of verified startup revenues</h1>
      <p className="mx-auto mb-6 max-w-2xl text-sm text-muted-foreground md:mb-10 md:text-base">
        200K monthly visitors browse SaaS, mobile apps, and digital businesses for acquisition on TrustMRR.{" "}
        <SiteLink href="/acquire" className="underline underline-offset-4 hover:text-foreground">
          Explore the marketplace
        </SiteLink>
      </p>
      <SearchBox />
      <nav className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-muted-foreground md:text-sm">
        {quickLinks.map(([label, href], i) => (
          <span key={href} className="contents">
            {i > 0 ? <span className="text-muted-foreground/50">·</span> : null}
            <SiteLink href={href} className="transition-colors hover:text-foreground">
              {label}
            </SiteLink>
          </span>
        ))}
      </nav>
      <div className="mt-8 space-y-2 text-left md:mt-12">
        <ListingStrip title="Recently listed" listings={recentlyListed} />
        <ListingStrip title="Best deals this week" listings={bestDeals} />
      </div>
    </header>
  );
}
