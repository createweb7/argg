import { type ReactNode } from "react";

export function CredentialItem({
  icon,
  title,
  description,
  tone = "light",
}: {
  icon: ReactNode;
  title: string;
  description?: string;
  tone?: "light" | "dark";
}) {
  const iconColor = tone === "dark" ? "text-gold" : "text-gold-deep";
  const descColor = tone === "dark" ? "text-cream/60" : "text-ink/55";

  return (
    <div className="flex items-start gap-4">
      <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-current/20 ${iconColor}`}>
        <span className="h-8 w-8">{icon}</span>
      </span>
      <div>
        <h3 className="font-display text-base font-medium tracking-tight">{title}</h3>
        {description ? <p className={`mt-1 text-sm leading-relaxed ${descColor}`}>{description}</p> : null}
      </div>
    </div>
  );
}
