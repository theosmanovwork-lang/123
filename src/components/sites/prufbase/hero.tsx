import { ShieldCheck } from "lucide-react";

import { SplitText } from "./split-text";
import { Wordmark } from "./wordmark";
import { WaitlistForm } from "./waitlist-form";

const quickLinks = [
  ["Как работает", "#how"],
  ["Безопасность", "#security"],
  ["FAQ", "#faq"],
] as const;

export function Hero() {
  return (
    <header className="mb-8 text-center md:mb-12">
      <div className="mb-2 flex items-center justify-center gap-2 md:mb-6">
        <ShieldCheck className="size-5 text-brand md:size-6" aria-hidden />
        <Wordmark className="text-base text-muted-foreground md:text-2xl" />
      </div>
      <SplitText
        as="h1"
        className="mb-3 text-4xl leading-[1.05] font-semibold tracking-[-0.022em] text-balance md:text-[64px] md:leading-none"
      >
        Пруф вместо скриншота
      </SplitText>
      <SplitText
        as="p"
        start={4}
        className="mx-auto mb-6 max-w-2xl text-sm text-pretty text-muted-foreground md:mb-10 md:text-[15px] md:leading-relaxed"
      >
        Подключи read-only ключ от ЮKassa или CloudPayments — получи бейдж, который нельзя подделать. Первым 50 проектам — бесплатно и без очереди.
      </SplitText>
      <div id="waitlist" className="scroll-mt-24">
        <WaitlistForm source="hero" />
      </div>
      <p className="mt-1 text-xs text-muted-foreground md:text-sm">
        Витрина верифицированной выручки для российских инди-фаундеров
      </p>
      <nav className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-muted-foreground md:text-sm">
        {quickLinks.map(([label, href], i) => (
          <span key={href} className="contents">
            {i > 0 ? <span className="text-muted-foreground/50">·</span> : null}
            <a href={href} className="transition-colors hover:text-foreground">
              {label}
            </a>
          </span>
        ))}
      </nav>
    </header>
  );
}
