import Link from "next/link";

export function StatPillarCard({
  index,
  title,
  description,
  href,
  tone = "light",
}: {
  index: number;
  title: string;
  description: string;
  href?: string;
  tone?: "light" | "dark";
}) {
  const borderColor = tone === "dark" ? "border-cream/15" : "border-ink/10";
  const numberColor = tone === "dark" ? "text-gold" : "text-gold-deep";
  const descColor = tone === "dark" ? "text-cream/65" : "text-ink/60";

  const content = (
    <>
      <span className={`font-display text-2xl ${numberColor}`}>{String(index).padStart(2, "0")}</span>
      <h3 className="mt-4 font-display text-xl font-medium tracking-tight">{title}</h3>
      <p className={`mt-2 text-sm leading-relaxed ${descColor}`}>{description}</p>
      {href ? (
        <span className={`mt-4 inline-block text-xs font-semibold uppercase tracking-widest ${numberColor}`}>
          Explore Service →
        </span>
      ) : null}
    </>
  );

  const classes = `flex flex-col border-t pt-6 ${borderColor} ${href ? "transition-colors hover:border-gold" : ""}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return <div className={classes}>{content}</div>;
}
