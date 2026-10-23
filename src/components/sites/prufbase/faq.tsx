import { ChevronDown } from "lucide-react";

import { faq } from "./data";
import { SectionHeading } from "./section-heading";

export function Faq() {
  return (
    <section id="faq" className="mt-16 scroll-mt-20 md:mt-24">
      <SectionHeading eyebrow="FAQ" title="Частые вопросы" />
      <div className="reveal mx-auto max-w-2xl divide-y rounded-xl border bg-card">
        {faq.map((item) => (
          <details key={item.q} className="group px-4 md:px-5">
            <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 text-left text-sm font-semibold outline-none focus-visible:text-brand md:text-base">
              {item.q}
              <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
            </summary>
            <p className="pb-4 text-left text-sm text-muted-foreground">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
