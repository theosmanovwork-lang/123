import type { DemoProject } from "./data";
import { DemoNote } from "./demo-note";
import { ProjectCard } from "./project-card";

type CardStripProps = { title: string; projects: DemoProject[] };

export function CardStrip({ title, projects }: CardStripProps) {
  return (
    <section>
      <div className="mb-3 flex items-center justify-between px-1">
        <h2 className="text-sm font-semibold text-muted-foreground">{title}</h2>
        <DemoNote />
      </div>
      <div className="scrollbar-hide -mx-4 flex gap-3 overflow-x-auto overscroll-x-contain px-4 pb-4 md:mx-0 md:snap-x md:px-0">
        {projects.map((project) => (
          <div key={project.slug} className="shrink-0 snap-start">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
