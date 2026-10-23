import { formatRub, formatRubShort, multiple, type DemoProject } from "./data";
import { Sparkline } from "./sparkline";
import { VerifiedBadge } from "./verified-badge";

function Growth({ value }: { value: number | null }) {
  if (value === null) return <span className="text-muted-foreground">—</span>;
  return (
    <span className="tabular font-mono">
      {value > 0 ? "▲" : value < 0 ? "▼" : ""} {Math.abs(value)}%
    </span>
  );
}

export function ProjectCard({ project }: { project: DemoProject }) {
  const sale = project.price !== undefined;
  const stats = sale
    ? ([
        ["MRR", formatRubShort(project.mrr)],
        ["Цена", formatRubShort(project.price ?? 0)],
        ["Мультипл.", multiple(project)],
      ] as const)
    : ([
        ["MRR", formatRubShort(project.mrr)],
        ["Рост", null],
        ["ARR", formatRubShort(project.mrr * 12)],
      ] as const);

  return (
    <article className="group relative flex w-[252px] shrink-0 flex-col overflow-hidden rounded-[10px] border bg-card p-3 transition-colors hover:border-primary/50">
      {sale ? (
        <div className="absolute top-0 right-0 rounded-bl-lg bg-primary px-2 py-0.5 text-label font-bold tracking-wide text-primary-foreground">
          ПРОДАЁТСЯ
        </div>
      ) : null}
      <div className="mt-1 mb-3 flex items-center gap-3">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border bg-secondary text-sm font-bold">
          {project.name.charAt(0)}
        </div>
        <div className="min-w-0 flex-1 text-left">
          <h3 className="truncate text-sm leading-tight font-bold">{project.name}</h3>
          <p className="truncate text-label text-muted-foreground">
            {project.category} · {project.provider}
          </p>
        </div>
      </div>
      <div className="mb-3 flex items-end justify-between gap-2">
        <VerifiedBadge />
        <Sparkline values={project.series} width={72} height={24} label={`MRR за 12 месяцев: ${formatRub(project.series[0])} → ${formatRub(project.mrr)}`} />
      </div>
      <div className="mt-auto grid grid-cols-3 gap-2">
        {stats.map(([label, value]) => (
          <div key={label}>
            <p className="mb-0.5 text-label font-semibold tracking-wider text-muted-foreground uppercase">{label}</p>
            <p className="font-mono text-[11px] font-bold whitespace-nowrap tabular">{label === "Рост" ? <Growth value={project.growth} /> : value}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
