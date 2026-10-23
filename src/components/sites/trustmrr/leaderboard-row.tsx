import Image from "next/image";
import { ArrowDown, ArrowUp, TriangleAlert } from "lucide-react";

import type { LeaderboardRow } from "./data";
import { SiteLink } from "./site-link";

const medals: Record<string, string> = { "1": "🥇", "2": "🥈", "3": "🥉" };
const cellClass = "p-2 align-middle whitespace-nowrap";

function StartupAvatar({ row }: { row: LeaderboardRow }) {
  if (row.logo && !row.blurName) {
    return (
      <div className="relative">
        <Image src={row.logo} alt={row.name} width={32} height={32} className="size-8 shrink-0 rounded-lg object-cover" />
      </div>
    );
  }
  return (
    <div
      className={`relative flex size-8 shrink-0 items-center justify-center rounded-lg bg-linear-to-br text-sm font-bold text-white ${
        row.blurName ? "from-gray-500 to-gray-400" : "from-blue-500 to-violet-500"
      }`}
    >
      {row.letter ?? row.name.charAt(0)}
    </div>
  );
}

function Growth({ row }: { row: LeaderboardRow }) {
  if (row.growth === "_") return <span className="text-muted-foreground">_</span>;
  if (row.trend === "flat") return <span className="text-muted-foreground">{row.growth}</span>;
  const up = row.trend === "up";
  const Arrow = up ? ArrowUp : ArrowDown;
  return (
    <div
      className={`flex items-center justify-end gap-1 font-medium ${up ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
    >
      <Arrow className="size-3.5" strokeWidth={2.5} />
      <span>{row.growth}</span>
    </div>
  );
}

export function LeaderboardTableRow({ row }: { row: LeaderboardRow }) {
  const medal = medals[row.rank];
  return (
    <tr className="group relative border-b transition-colors hover:bg-muted/50">
      <td className={`${cellClass} w-[60px] pr-4 text-center md:pr-6`}>
        {/* The whole row is a link on the source; the stretched anchor below reproduces that. */}
        <SiteLink href={row.href} aria-label={row.name} className="absolute inset-0 z-0" />
        <span className={medal ? "text-xl" : ""}>{medal ?? row.rank}</span>
      </td>
      <td className={`${cellClass} w-[30%]`}>
        <div className="flex items-center gap-3">
          <StartupAvatar row={row} />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <div className={`max-w-[130px] truncate font-medium md:max-w-[250px] ${row.blurName ? "blur-[3px]" : ""}`}>
                {row.name}
              </div>
              {row.badge ? (
                <span className="shrink-0 rounded-full bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
                  FOR SALE
                </span>
              ) : null}
            </div>
            {row.description ? (
              <div
                className={`max-w-[130px] truncate text-xs text-muted-foreground md:max-w-[250px] ${row.blurDesc ? "blur-[3px]" : ""}`}
              >
                {row.description}
              </div>
            ) : null}
          </div>
        </div>
      </td>
      <td className={`${cellClass} relative z-10 w-[25%]`}>
        {row.founderHref ? (
          <SiteLink
            href={row.founderHref}
            className="group/founder flex min-w-0 items-center gap-2 transition-colors hover:text-foreground"
          >
            <FounderAvatar row={row} />
            <span className="truncate text-sm group-hover/founder:underline" title={row.founder}>
              {row.founder}
            </span>
          </SiteLink>
        ) : (
          <div className="flex min-w-0 items-center gap-2">
            <FounderAvatar row={row} />
            <span className="truncate text-sm" title={row.founder}>
              {row.founder}
            </span>
          </div>
        )}
      </td>
      <td className={`${cellClass} relative w-[22.5%] text-right font-mono font-semibold`}>
        {row.mrr}
        {row.stale ? (
          <span className="absolute top-1/2 left-full -ml-1 flex -translate-y-1/2 items-center gap-1">
            <TriangleAlert
              className="size-3 shrink-0 cursor-help text-muted-foreground opacity-60 transition-opacity duration-150 ease-out hover:opacity-100"
              role="img"
              aria-label="MRR data is no longer updating"
            />
          </span>
        ) : null}
      </td>
      <td className={`${cellClass} w-[22.5%] text-right font-mono`}>
        <Growth row={row} />
      </td>
    </tr>
  );
}

function FounderAvatar({ row }: { row: LeaderboardRow }) {
  if (row.founderAvatar) {
    return (
      <Image
        src={row.founderAvatar}
        alt={row.founder}
        width={24}
        height={24}
        className="size-6 shrink-0 rounded-full border border-border object-cover"
      />
    );
  }
  return (
    <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-[10px] font-bold">
      {row.founderLetter ?? row.founder.charAt(0)}
    </span>
  );
}
