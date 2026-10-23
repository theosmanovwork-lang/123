import { features, steps } from "./data";
import { SectionHeading } from "./section-heading";

const stageStyle: Record<string, string> = {
  "Первый релиз": "border-primary/50 text-brand",
  Следом: "border-border text-muted-foreground",
  Позже: "border-border text-muted-foreground",
};

export function HowItWorks() {
  return (
    <section id="how" className="mt-16 scroll-mt-20 md:mt-24">
      <SectionHeading eyebrow="Как работает" title="Три шага до пруфа" />
      <ol className="reveal grid gap-3 md:grid-cols-3 md:gap-4">
        {steps.map((step) => (
          <li key={step.n} className="rounded-xl border bg-card p-5 text-left">
            <p className="mb-3 font-mono text-sm text-brand">{step.n}</p>
            <h3 className="mb-1.5 text-lg font-bold">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.text}</p>
          </li>
        ))}
      </ol>
      <div className="mt-10 md:mt-14">
        <h3 className="mb-3 px-1 text-sm font-semibold text-muted-foreground">Что ещё будет внутри</h3>
        <div className="reveal grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col rounded-[10px] border bg-card p-4 text-left">
              <div className="mb-2 flex items-start justify-between gap-3">
                <h4 className="text-sm font-bold">{feature.title}</h4>
                <span
                  className={`shrink-0 rounded-full border px-2 py-0.5 font-mono text-label tracking-wide uppercase ${stageStyle[feature.stage]}`}
                >
                  {feature.stage}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
