import { WaitlistForm } from "./waitlist-form";

export function ClosingCta() {
  return (
    <section className="reveal mt-16 text-center md:mt-24">
      <h2 className="mb-3 text-3xl font-semibold tracking-[-0.022em] text-balance md:text-5xl md:leading-[1.1]">Пруф вместо скриншота</h2>
      <p className="mx-auto mb-6 max-w-xl text-[15px] leading-relaxed text-ink-2 md:text-base">
        Первым 50 проектам — бесплатно и без очереди. Встань в вейтлист, пока список открыт.
      </p>
      <div id="waitlist-bottom" className="scroll-mt-24">
        <WaitlistForm source="closing" />
      </div>
    </section>
  );
}
