/** Marks blocks that show illustrative data rather than real, connected projects. */
export function DemoNote({ children = "Демо-данные" }: { children?: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border px-2 py-0.5 font-mono text-label tracking-wide text-muted-foreground uppercase">
      {children}
    </span>
  );
}
