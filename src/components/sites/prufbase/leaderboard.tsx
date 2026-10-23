import { ShieldCheck } from "lucide-react";

import { demoProjects } from "./data";
import { DemoNote } from "./demo-note";
import { CatalogRow } from "./leaderboard-row";
import { ProfilePreview } from "./profile-preview";

const head = "h-10 px-2 align-middle font-medium whitespace-nowrap";

export function Leaderboard() {
  const ranked = [...demoProjects].sort((a, b) => b.mrr - a.mrr);
  return (
    <section id="catalog" className="reveal scroll-mt-20">
      <div className="flex flex-col gap-6 rounded-xl border bg-card py-6 pt-4 text-card-foreground">
        <div className="overflow-x-auto px-0 md:px-6 md:pt-2">
          <div className="mb-2 flex flex-col items-center justify-between gap-2 px-4 md:mb-4 md:flex-row md:gap-4 md:px-0">
            <div className="flex items-center gap-3">
              <h2 className="text-base font-bold md:text-lg">Каталог верифицированных проектов</h2>
              <DemoNote />
            </div>
            <p className="text-xs text-muted-foreground md:text-sm">Сортировка: MRR · За всё время</p>
          </div>
          <div className="relative w-full overflow-x-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_tr]:border-b">
                <tr className="border-b">
                  <th className={`${head} w-8 text-center md:w-[48px]`}>#</th>
                  <th className={`${head} text-left`}>Проект</th>
                  <th className={`${head} hidden text-left md:table-cell`}>Фаундер</th>
                  <th className={`${head} hidden text-left lg:table-cell`}>Источник</th>
                  <th className={`${head} text-right`}>MRR</th>
                  <th className={`${head} hidden text-right md:table-cell`}>12 мес.</th>
                  <th className={`${head} text-right`}>Рост</th>
                </tr>
              </thead>
              <tbody className="[&_tr:last-child]:border-0">
                {ranked.map((project, i) => (
                  <CatalogRow key={project.slug} project={project} rank={i + 1} />
                ))}
              </tbody>
            </table>
          </div>
          <ProfilePreview project={ranked[0]} />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
        <ShieldCheck className="hidden size-3.5 shrink-0 md:block" />
        <p className="max-w-xl text-pretty">
          Так будет выглядеть каталог. Все проекты и цифры здесь — демо; настоящие карточки появятся, когда первые фаундеры
          подключат платёжных провайдеров.
        </p>
      </div>
    </section>
  );
}
