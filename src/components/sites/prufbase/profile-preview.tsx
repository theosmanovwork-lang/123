import { formatRub, type DemoProject } from "./data";
import { DemoNote } from "./demo-note";
import { Sparkline } from "./sparkline";
import { VerifiedBadge } from "./verified-badge";

const months = ["окт", "ноя", "дек", "янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен"];

/** Mock of the project profile screen: big MRR/ARR, 12-month chart, embeddable badge snippet. */
export function ProfilePreview({ project }: { project: DemoProject }) {
  const snippet = `<a href="https://prufbase.ru/p/${project.slug}">\n  <img src="https://prufbase.ru/badge/${project.slug}.svg" alt="Verified by Prufbase" />\n</a>`;
  return (
    <div className="mt-6 overflow-hidden border-y border-border md:-mx-6 md:mt-8">
      <div className="grid gap-6 p-4 md:grid-cols-[1.4fr_1fr] md:p-6">
        <div className="min-w-0">
          <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 className="text-lg font-bold">{project.name}</h3>
            <VerifiedBadge provider={project.provider} />
            <DemoNote>Профиль проекта · демо</DemoNote>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <p className="mb-1 text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">MRR</p>
              <p className="font-mono text-xl font-bold whitespace-nowrap tabular md:text-2xl">{formatRub(project.mrr)}</p>
            </div>
            <div>
              <p className="mb-1 text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">ARR</p>
              <p className="font-mono text-xl font-bold whitespace-nowrap tabular md:text-2xl">{formatRub(project.mrr * 12)}</p>
            </div>
          </div>
          <Sparkline values={project.series} width={480} height={120} area className="h-28 w-full" label="MRR за последние 12 месяцев" />
          <div className="mt-1 flex justify-between font-mono text-[10px] text-muted-foreground">
            {months.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>
        </div>
        <div className="flex min-w-0 flex-col">
          <p className="mb-2 text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">Код для встраивания</p>
          <pre className="overflow-x-auto rounded-[10px] border bg-background p-3 font-mono text-xs leading-relaxed text-muted-foreground">
            <code>{snippet}</code>
          </pre>
          <p className="mt-2 text-xs text-muted-foreground">Пример: итоговый формат бейджа ещё уточняется.</p>
        </div>
      </div>
    </div>
  );
}
