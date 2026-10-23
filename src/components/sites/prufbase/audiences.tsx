import { audiences } from "./data";
import { SectionHeading } from "./section-heading";

export function Audiences() {
  return (
    <section id="for-whom" className="mt-16 scroll-mt-20 md:mt-24">
      <SectionHeading eyebrow="Для кого" title="Данные вместо слов — всем сторонам" />
      <div className="reveal grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((a) => (
          <div key={a.title} className="rounded-[10px] border bg-card p-4 text-left">
            <h3 className="mb-1.5 text-sm font-bold">{a.title}</h3>
            <p className="text-sm text-muted-foreground">{a.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
