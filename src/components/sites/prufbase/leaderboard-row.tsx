import { formatRub, type DemoProject } from "./data";
import { Sparkline } from "./sparkline";
import { VerifiedBadge } from "./verified-badge";

const cell = "p-1.5 align-middle whitespace-nowrap md:p-2";

export function CatalogRow({ project, rank }: { project: DemoProject; rank: number }) {
  const sale = project.price !== undefined;
  const growth = project.growth;
  return (
    <tr className="border-b transition-colors hover:bg-muted/50">
      <td className={`${cell} w-8 text-center font-mono md:w-[48px] text-muted-foreground tabular`}>{rank}</td>
      <td className={`${cell} w-[34%]`}>
        <div className="flex items-center gap-3">
          <div className="hidden size-8 shrink-0 items-center justify-center rounded-lg border bg-secondary text-sm font-bold sm:flex">
            {project.name.charAt(0)}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="max-w-[104px] truncate font-medium sm:max-w-[200px] md:max-w-[220px]">{project.name}</span>
              {sale ? (
                <span className="shrink-0 rounded-full bg-primary px-1.5 py-0.5 text-[9px] font-bold text-primary-foreground">
                  ПРОДАЁТСЯ
                </span>
              ) : null}
            </div>
            <div className="max-w-[104px] truncate text-xs text-muted-foreground sm:max-w-[200px] md:max-w-[220px]">{project.description}</div>
          </div>
        </div>
      </td>
      <td className={`${cell} hidden w-[20%] md:table-cell`}>
        <div className="flex min-w-0 items-center gap-2">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full border bg-secondary text-[10px] font-bold">
            {project.founder.charAt(0)}
          </span>
          <span className="truncate text-sm">{project.founder}</span>
        </div>
      </td>
      <td className={`${cell} hidden w-[16%] lg:table-cell`}>
        <VerifiedBadge provider={project.provider} />
      </td>
      <td className={`${cell} text-right font-mono font-semibold tabular`}>{formatRub(project.mrr)}</td>
      <td className={`${cell} hidden w-[110px] md:table-cell`}>
        <Sparkline values={project.series} width={88} height={24} className="ml-auto" label="MRR за 12 месяцев" />
      </td>
      <td className={`${cell} w-[64px] text-right font-mono tabular md:w-[84px]`}>
        {growth === null ? (
          <span className="text-muted-foreground">—</span>
        ) : (
          <span className={growth < 0 ? "text-muted-foreground" : "text-foreground"}>
            {growth > 0 ? "▲" : growth < 0 ? "▼" : ""} {Math.abs(growth)}%
          </span>
        )}
      </td>
    </tr>
  );
}
