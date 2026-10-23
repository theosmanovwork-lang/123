import { SplitText } from "./split-text";
import { WaitlistForm } from "./waitlist-form";
import { Wordmark } from "./wordmark";

const quickLinks = [
  ["Как работает", "#how"],
  ["Безопасность", "#security"],
  ["FAQ", "#faq"],
] as const;

const trust = ["Первым 50 проектам — бесплатно", "Ключ только читает", "Серверы в России"] as const;

export function Hero() {
  return (
    <header className="mb-8 text-center md:mb-12">
      {/* Brand rule: wordmark only, no shield/check icon next to the logo. */}
      <Wordmark className="mb-1 block text-xl text-foreground md:text-2xl" />
      <p className="mb-5 text-sm text-muted-foreground md:mb-8">Витрина верифицированной выручки для российских инди-фаундеров</p>
      <SplitText
        as="h1"
        className="mb-4 text-4xl leading-[1.08] font-semibold tracking-[-0.022em] text-balance md:text-[64px] md:leading-[1.05]"
      >
        Пруф вместо скриншота
      </SplitText>
      <SplitText
        as="p"
        start={4}
        className="mx-auto mb-7 max-w-xl text-base leading-relaxed text-pretty text-ink-2 md:mb-9 md:text-lg"
      >
        Подключи read-only ключ от ЮKassa или CloudPayments — получи бейдж, который нельзя подделать.
      </SplitText>
      <div id="waitlist" className="scroll-mt-24">
        <WaitlistForm source="hero" />
      </div>
      <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-sm text-muted-foreground">
        {trust.map((item) => (
          <li key={item} className="flex items-center gap-2 before:size-1 before:rounded-full before:bg-muted-foreground/60 before:content-['']">
            {item}
          </li>
        ))}
      </ul>
      <nav aria-label="Разделы страницы" className="mt-3 flex flex-wrap items-center justify-center gap-x-1 text-sm text-muted-foreground">
        {quickLinks.map(([label, href]) => (
          <a key={href} href={href} className="inline-flex min-h-9 items-center px-3 transition-colors hover:text-foreground">
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
