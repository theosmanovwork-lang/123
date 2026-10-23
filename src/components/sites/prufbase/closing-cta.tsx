import { WaitlistForm } from "./waitlist-form";

export function ClosingCta() {
  return (
    <section className="mt-16 text-center md:mt-24">
      <h2 className="mb-3 text-2xl font-bold tracking-tight text-balance md:text-4xl">Пруф вместо скриншота</h2>
      <p className="mx-auto mb-6 max-w-xl text-sm text-muted-foreground md:text-base">
        Первым 50 проектам — бесплатно и без очереди. Встань в вейтлист, пока список открыт.
      </p>
      <WaitlistForm source="closing" />
    </section>
  );
}
