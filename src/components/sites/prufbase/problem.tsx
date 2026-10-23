import { Check, X } from "lucide-react";

import { SectionHeading } from "./section-heading";
import { VerifiedBadge } from "./verified-badge";

export function Problem() {
  return (
    <section id="problem" className="mt-16 scroll-mt-20 md:mt-24">
      <SectionHeading eyebrow="Проблема" title="Все постят рост. Никто не может это доказать.">
        Скриншот редактируется за 30 секунд в Figma. Посты на vc.ru — это слова. Prufbase показывает цифры, которые
        подтвердил платёжный провайдер.
      </SectionHeading>
      <div className="grid gap-3 md:grid-cols-2 md:gap-4">
        <div className="rounded-xl border bg-card p-5">
          <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
            <X className="size-4" /> Скриншот
          </p>
          <div className="rounded-[10px] border border-dashed bg-background p-4">
            <p className="font-mono text-xs text-muted-foreground">MRR (скриншот из «админки»)</p>
            <p className="font-mono text-3xl font-bold tabular line-through decoration-muted-foreground/60">1 200 000 ₽</p>
            <p className="mt-2 text-xs text-muted-foreground">Подпись «редактировано в Figma» вы тут не увидите.</p>
          </div>
          <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
            <li>— правится за полминуты</li>
            <li>— не обновляется</li>
            <li>— остаётся верить на слово</li>
          </ul>
        </div>
        <div className="rounded-xl border border-primary/40 bg-card p-5">
          <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-brand">
            <Check className="size-4" /> Prufbase
          </p>
          <div className="rounded-[10px] border bg-background p-4">
            <VerifiedBadge provider="ЮKassa" className="mb-1" />
            <p className="font-mono text-xs text-muted-foreground">MRR по данным платёжного провайдера</p>
            <p className="font-mono text-3xl font-bold tabular">184 200 ₽</p>
            <p className="mt-2 text-xs text-muted-foreground">Пример оформления. Цифры — демо.</p>
          </div>
          <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
            <li>— считается из API провайдера</li>
            <li>— обновляется автоматически</li>
            <li>— по бейджу можно перейти на проверку</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
