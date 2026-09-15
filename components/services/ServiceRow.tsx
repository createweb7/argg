import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import {
  IconChartUp,
  IconReceipt,
  IconPercent,
  IconBadge,
  IconShieldCheck,
  IconUsers,
  IconCap,
  IconClock,
  IconTarget,
  IconCheckCircle,
} from "@/components/icons";
import type { ServiceGroup } from "@/lib/content/services";

const ICONS = {
  chart: IconChartUp,
  receipt: IconReceipt,
  percent: IconPercent,
  badge: IconBadge,
  shield: IconShieldCheck,
  users: IconUsers,
  cap: IconCap,
  clock: IconClock,
  target: IconTarget,
  checkcircle: IconCheckCircle,
} as const;

export function ServiceRow({ group, index }: { group: ServiceGroup; index: number }) {
  const reversed = index % 2 === 1;
  const featured = index === 0;
  const Icon = ICONS[group.icon];

  return (
    <RevealOnScroll
      className={`grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8 ${
        featured
          ? "mb-10 border border-ink/10 bg-cream px-6 py-8 md:px-10 md:py-10"
          : "border-t border-ink/10 py-10"
      }`}
    >
      <div className={`md:col-span-4 ${reversed ? "md:order-2" : ""}`}>
        <div className="flex items-center justify-between">
          <span
            className={`flex shrink-0 items-center justify-center rounded-full border border-gold-deep/30 text-gold-deep ${
              featured ? "h-14 w-14" : "h-10 w-10"
            }`}
          >
            <Icon className={featured ? "h-7 w-7" : "h-5 w-5"} />
          </span>
          <span className={`font-display text-gold-deep ${featured ? "text-base" : "text-sm"}`}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3
          className={`mt-5 font-display font-medium tracking-tight ${featured ? "text-3xl" : "text-2xl"}`}
        >
          {group.title}
        </h3>
        {group.tagline ? (
          <p className="mt-3 max-w-xs font-display text-base leading-snug text-ink/60 italic">
            “{group.tagline}”
          </p>
        ) : null}
        {group.description ? (
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/65">{group.description}</p>
        ) : null}
      </div>
      <ul className={`grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 md:col-span-8 ${reversed ? "md:order-1" : ""}`}>
        {group.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-ink/75">
            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </RevealOnScroll>
  );
}
