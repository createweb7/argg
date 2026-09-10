import { type ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  supporting,
  align = "left",
  tone = "light",
  as: As = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  supporting?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2" | "h3";
}) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const supportingColor = tone === "dark" ? "text-cream/70" : "text-ink/60";
  const eyebrowColor = tone === "dark" ? "text-gold" : "text-gold-deep";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignClass}`}>
      {eyebrow ? (
        <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${eyebrowColor}`}>{eyebrow}</span>
      ) : null}
      <As className="font-display text-4xl leading-[1.1] font-medium tracking-tight text-balance md:text-5xl">
        {title}
      </As>
      {supporting ? <p className={`text-lg leading-relaxed ${supportingColor}`}>{supporting}</p> : null}
    </div>
  );
}
