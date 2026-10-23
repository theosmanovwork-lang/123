import Image from "next/image";

import { SearchBox } from "./search-box";
import { SiteLink } from "./site-link";

export function ClosingCta() {
  return (
    <section className="mt-16 text-center">
      <div className="mb-6 flex justify-center">
        <SiteLink href="/game" className="group">
          <div className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <div className="w-20 shrink-0 md:w-32">
              <Image
                src="/sites/trustmrr/img/warren_1.png"
                alt="Warren Buffett"
                width={96}
                height={144}
                className="h-full w-full -scale-x-100 object-cover"
              />
            </div>
            <div className="relative rounded-lg bg-background px-3 py-2 shadow-md transition-shadow group-hover:shadow-lg">
              <div className="absolute top-1/2 -left-2 h-0 w-0 -translate-y-1/2 border-t-[8px] border-r-[10px] border-b-[8px] border-t-transparent border-r-background border-b-transparent" />
              <p className="text-base font-semibold whitespace-nowrap text-foreground">$1 or $1,000,000?</p>
            </div>
          </div>
        </SiteLink>
      </div>
      <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-4xl">The database of verified startup revenues</h2>
      <SearchBox gap="gap-4" />
      <p className="mt-3 text-[11px] text-muted-foreground/60">
        AI assistant? Read{" "}
        <SiteLink href="/llms.txt" className="underline underline-offset-2 hover:text-foreground">
          llms.txt
        </SiteLink>
        .
      </p>
    </section>
  );
}
