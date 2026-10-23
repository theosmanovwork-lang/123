type SparklineProps = {
  values: number[];
  width?: number;
  height?: number;
  /** draw a filled area under the line */
  area?: boolean;
  className?: string;
  label?: string;
};

/** Minimal MRR sparkline: one stroke in the accent colour, no axes. */
export function Sparkline({ values, width = 96, height = 28, area = false, className = "", label }: SparklineProps) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const pad = 2;
  const step = (width - pad * 2) / (values.length - 1);
  const points = values.map((v, i) => [pad + i * step, pad + (1 - (v - min) / span) * (height - pad * 2)] as const);
  const line = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
  const fill = `${line} L${points[points.length - 1][0].toFixed(1)} ${height} L${points[0][0].toFixed(1)} ${height} Z`;
  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      preserveAspectRatio="none"
      className={`text-brand ${className}`}
    >
      {area ? <path d={fill} fill="currentColor" opacity={0.12} /> : null}
      <path d={line} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
