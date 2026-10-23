import { KeyRound } from "lucide-react";

import { securityPoints } from "./data";
import { SectionHeading } from "./section-heading";

export function Security() {
  return (
    <section id="security" className="mt-16 scroll-mt-20 md:mt-24">
      <SectionHeading eyebrow="Безопасность" title="Ключ только читает. Точка.">
        Код физически не может списать или перевести деньги. Отзыв доступа — в один клик.
      </SectionHeading>
      <div className="reveal grid gap-3 md:grid-cols-[1fr_1.4fr] md:gap-4">
        <div className="flex flex-col justify-center rounded-xl border border-primary/40 bg-card p-6">
          <KeyRound className="mb-4 size-6 text-brand" aria-hidden />
          <p className="font-mono text-sm leading-relaxed text-muted-foreground">
            <span className="text-brand">GET</span> /payments
            <br />
            <span className="text-brand">GET</span> /refunds
            <br />
            <span className="text-muted-foreground line-through decoration-muted-foreground/70">POST /payments</span>
            <br />
            <span className="text-muted-foreground line-through decoration-muted-foreground/70">POST /payouts</span>
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            Иллюстрация: коннектор обращается только к методам чтения. Названия эндпоинтов условные.
          </p>
        </div>
        <ul className="divide-y rounded-xl border bg-card">
          {securityPoints.map((point) => (
            <li key={point.title} className="p-4 text-left md:p-5">
              <h3 className="mb-1 text-sm font-bold">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
