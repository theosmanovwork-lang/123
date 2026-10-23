import type { ReactNode } from "react";

type SectionHeadingProps = { eyebrow?: string; title: string; children?: ReactNode; className?: string };

export function SectionHeading({ eyebrow, title, children, className = "" }: SectionHeadingProps) {
  return (
    <div className={`mx-auto mb-8 max-w-2xl text-center md:mb-10 ${className}`}>
      {eyebrow ? <p className="mb-2 font-mono text-xs tracking-wider text-brand uppercase">{eyebrow}</p> : null}
      <h2 className="text-2xl font-bold tracking-tight text-balance md:text-4xl">{title}</h2>
      {children ? <p className="mt-3 text-sm text-pretty text-muted-foreground md:text-base">{children}</p> : null}
    </div>
  );
}
