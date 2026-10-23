import type { ElementType } from "react";

type SplitTextProps = { children: string; as?: ElementType; className?: string; start?: number };

/**
 * Word-by-word entrance used on linear.app's hero: every word fades in from a 10px blur while sliding up,
 * staggered ~33ms. Pure CSS (see `reveal-word`), so it works in server components and respects reduced motion.
 */
export function SplitText({ children, as: Tag = "span", className, start = 0 }: SplitTextProps) {
  const words = children.split(" ");
  return (
    <Tag className={className} aria-label={children}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} aria-hidden>
          <span className="reveal-word" style={{ "--i": start + i } as React.CSSProperties}>
            {word}
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
