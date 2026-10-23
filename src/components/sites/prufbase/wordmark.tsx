export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-semibold tracking-tight ${className}`}>
      Prufbase<span className="text-brand">/</span>
    </span>
  );
}
