import { providerGroups, providers } from "./data";
import { SectionHeading } from "./section-heading";

export function Providers() {
  return (
    <section id="providers" className="mt-16 scroll-mt-20 border-t pt-8 md:mt-24 md:pt-12">
      <SectionHeading title="Платёжные провайдеры" className="!mb-6">
        Подключаем российские системы по очереди. Несколько источников свожу в одну цифру — мультипровайдерная сверка.
      </SectionHeading>
      <div className="grid gap-6 md:grid-cols-3">
        {(Object.keys(providerGroups) as (keyof typeof providerGroups)[]).map((group) => (
          <div key={group}>
            <p className="mb-2 text-center font-mono text-xs tracking-wider text-muted-foreground uppercase">
              {providerGroups[group]}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {providers
                .filter((p) => p.group === group)
                .map((p) => (
                  <span
                    key={p.name}
                    className={`inline-flex flex-col items-center rounded-lg border px-4 py-2 text-center text-sm ${
                      group === "now" ? "border-primary/50 font-medium" : "border-border text-muted-foreground"
                    }`}
                  >
                    {p.name}
                    {p.note ? <span className="text-xs text-muted-foreground">{p.note}</span> : null}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
