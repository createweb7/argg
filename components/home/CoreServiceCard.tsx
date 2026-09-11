import Link from "next/link";
import {
  IconChartUp,
  IconUsers,
  IconReceipt,
  IconPercent,
  IconCap,
  IconTarget,
  IconBadge,
} from "@/components/icons";
import type { CoreService } from "@/lib/content/subservices";

const ICONS = {
  chart: IconChartUp,
  users: IconUsers,
  receipt: IconReceipt,
  percent: IconPercent,
  team: IconTarget,
  cap: IconCap,
  badge: IconBadge,
} as const;

export function CoreServiceCard({
  service,
  index,
  featured = false,
}: {
  service: CoreService;
  index: number;
  featured?: boolean;
}) {
  const Icon = ICONS[service.icon];

  return (
    <Link
      href={service.href}
      className={`group relative flex h-full flex-col justify-between overflow-hidden border border-cream/10 bg-ink text-cream transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_48px_-20px_rgba(0,0,0,0.65)] ${
        featured ? "gap-10 p-8 md:p-10" : "gap-8 p-6"
      }`}
    >
      {/* Faint gold grid texture, consistent with the hero — breaks up the
          flat black card without adding a photo we don't have. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05] transition-opacity duration-300 group-hover:opacity-[0.09]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-gold) 1px, transparent 1px), linear-gradient(to bottom, var(--color-gold) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <span className="pointer-events-none absolute top-0 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <span
            className={`flex items-center justify-center rounded-full border border-gold/30 text-gold transition-colors duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink ${
              featured ? "h-14 w-14" : "h-10 w-10"
            }`}
          >
            <Icon className={featured ? "h-7 w-7" : "h-5 w-5"} />
          </span>
          <span className={`font-display text-cream/25 ${featured ? "text-base" : "text-sm"}`}>
            {String(index).padStart(2, "0")}
          </span>
        </div>
        <h3
          className={`mt-6 font-display font-medium tracking-tight ${
            featured ? "text-2xl md:text-3xl" : "text-lg"
          }`}
        >
          {service.title}
        </h3>
        <p className={`mt-3 leading-relaxed text-cream/60 ${featured ? "max-w-sm text-base" : "text-sm"}`}>
          {service.description}
        </p>
      </div>

      <span className="relative text-xs font-semibold tracking-widest text-gold uppercase transition-transform duration-300 group-hover:translate-x-1">
        Learn More →
      </span>
    </Link>
  );
}
