import type { ReactNode } from "react";

type SectionHeadingProps = { eyebrow?: string; title: string; children?: ReactNode; className?: string };

export function SectionHeading({ eyebrow, title, children, className = "" }: SectionHeadingProps) {
  return (
    <div className={`reveal mx-auto mb-8 max-w-2xl text-center md:mb-10 ${className}`}>
      {eyebrow ? <p className="mb-2 font-mono text-xs tracking-wider text-brand uppercase">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-[-0.022em] text-balance md:text-5xl md:leading-[1.1]">{title}</h2>
      {children ? <p className="mt-3 text-[15px] leading-relaxed text-pretty text-ink-2 md:text-base">{children}</p> : null}
    </div>
  );
}
