export function ProcessStep({
  index,
  title,
  description,
  isLast = false,
  tone = "light",
  horizontal = false,
}: {
  index: number;
  title: string;
  description: string;
  isLast?: boolean;
  tone?: "light" | "dark";
  horizontal?: boolean;
}) {
  const numberColor = tone === "dark" ? "text-gold border-gold/40" : "text-gold-deep border-gold-deep/40";
  const descColor = tone === "dark" ? "text-cream/65" : "text-ink/60";
  const lineClass = horizontal ? (isLast ? "" : "process-line process-line-h") : isLast ? "" : "process-line";

  return (
    <div className={`relative flex gap-5 ${horizontal ? "flex-1 flex-col md:gap-4" : "flex-row"} ${lineClass}`}>
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border font-display text-sm ${numberColor}`}
      >
        {String(index).padStart(2, "0")}
      </span>
      <div className={horizontal ? "pt-1" : "pb-10"}>
        <h3 className="font-display text-lg font-medium tracking-tight">{title}</h3>
        <p className={`mt-1.5 max-w-xs text-sm leading-relaxed ${descColor}`}>{description}</p>
      </div>
    </div>
  );
}
