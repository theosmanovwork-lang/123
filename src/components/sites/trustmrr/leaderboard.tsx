import Image from "next/image";
import { ChevronDown, ShieldCheck } from "lucide-react";

import { leaderboard } from "./data";
import { LeaderboardTableRow } from "./leaderboard-row";
import { SiteLink } from "./site-link";

const ANALYTICS_EMBED = "https://datafa.st/share/69037eb07d02baa317aa1ec3?realtime=1";
const HALF = Math.ceil(leaderboard.length / 2);

function TableHead() {
  return (
    <thead className="[&_tr]:border-b">
      <tr className="border-b transition-colors hover:bg-muted/50">
        <th className="h-10 w-[60px] px-2 pr-4 text-center align-middle font-medium whitespace-nowrap md:pr-6">#</th>
        <th className="h-10 w-[30%] px-2 text-left align-middle font-medium whitespace-nowrap">Startup</th>
        <th className="h-10 w-[25%] px-2 text-left align-middle font-medium whitespace-nowrap">Founder</th>
        <th className="h-10 w-[22.5%] px-2 text-right align-middle font-medium whitespace-nowrap">MRR</th>
        <th className="h-10 w-[22.5%] px-2 text-right align-middle font-medium whitespace-nowrap">MoM Growth</th>
      </tr>
    </thead>
  );
}

function Table({ rows, className, header = true }: { rows: typeof leaderboard; className: string; header?: boolean }) {
  return (
    <div className="relative w-full overflow-x-auto">
      <table className={`animate-opacity w-full caption-bottom text-sm ${className}`}>
        {header ? <TableHead /> : null}
        <tbody className="[&_tr:last-child]:border-0">
          {rows.map((row) => (
            <LeaderboardTableRow key={`${row.rank}-${row.href}`} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SortSelect({ label, options, disabled, width }: { label: string; options: string[]; disabled?: boolean; width: string }) {
  return (
    <div className={`relative ${width}`}>
      <select
        aria-label={label}
        disabled={disabled}
        defaultValue={options[0]}
        className="h-9 w-full cursor-pointer appearance-none rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 opacity-50" />
    </div>
  );
}

export function Leaderboard() {
  return (
    <section>
      <div className="animate-opacity flex flex-col gap-6 rounded-xl border bg-card py-6 pt-4 text-card-foreground">
        <div className="overflow-x-auto px-0 md:px-6 md:pt-2">
          <div className="mb-2 flex flex-col items-center justify-between gap-2 md:mb-4 md:flex-row md:gap-4">
            <h2 className="text-base font-bold md:text-lg">Leaderboard</h2>
            <div className="flex gap-2">
              <SortSelect label="Sort by" options={["MRR"]} width="w-[130px]" />
              <SortSelect label="Time range" options={["All time"]} width="w-[150px]" disabled />
            </div>
          </div>
          <Table rows={leaderboard} className="md:hidden" />
          <Table rows={leaderboard.slice(0, HALF)} className="hidden md:table" />
          <div className="relative -mx-6 my-2 hidden overflow-hidden border-y border-border md:block">
            <iframe
              src={ANALYTICS_EMBED}
              title="TrustMRR Analytics"
              loading="lazy"
              className="h-[800px] w-full border-0"
            />
            <a
              href="https://datafa.st/?ref=trustmrr_demo"
              target="_blank"
              rel="noopener noreferrer"
              className="animate-opacity absolute right-4 bottom-4 z-10 hidden md:inline-flex"
            >
              <div className="group inline-flex items-center gap-2 rounded-full bg-zinc-900/60 px-3 py-1.5 text-gray-200 shadow-xl ring-1 ring-gray-400 backdrop-blur-sm duration-100 hover:bg-zinc-900/90 hover:ring-orange-600">
                <Image src="/sites/trustmrr/img/datafast_icon.png" alt="DataFast logo" width={28} height={28} className="size-5" />
                <span className="text-xs font-medium">Powered by DataFast</span>
              </div>
            </a>
          </div>
          <Table rows={leaderboard.slice(HALF)} className="hidden md:table" header={false} />
          <div className="mt-6 text-center">
            <SiteLink
              href="/startups"
              className="inline-block cursor-pointer rounded-md border border-input bg-background px-6 py-2 text-sm font-medium text-primary transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Show more (50 more startups)
            </SiteLink>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
        <ShieldCheck className="hidden size-3.5 shrink-0 md:block" />
        <p>
          All revenue is verified through supported payment providers like Stripe, RevenueCat, Superwall, App Store, and
          Creem. We check for new data hourly.
        </p>
      </div>
    </section>
  );
}
