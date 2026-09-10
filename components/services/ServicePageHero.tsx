import Link from "next/link";
import { AbstractHeroPattern, type HeroPatternVariant } from "@/components/ui/AbstractHeroPattern";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HeroEnquiryCard } from "@/components/services/HeroEnquiryCard";
import type { SERVICE_INTEREST_OPTIONS } from "@/lib/validation/contact";

export function ServicePageHero({
  eyebrow,
  title,
  supporting,
  variant = "services",
  showBreadcrumb = true,
  showEnquiryForm = false,
  defaultService,
}: {
  eyebrow?: string;
  title: string;
  supporting: string;
  variant?: HeroPatternVariant;
  showBreadcrumb?: boolean;
  showEnquiryForm?: boolean;
  defaultService?: (typeof SERVICE_INTEREST_OPTIONS)[number];
}) {
  const textColumn = (
    <div className={showEnquiryForm ? "md:col-span-8" : "relative mx-auto w-full max-w-[1280px] px-6 md:px-10"}>
      {showBreadcrumb ? (
        <Link href="/services" className="mb-6 inline-flex items-center gap-2 text-sm text-cream/60 hover:text-gold">
          ← Back to all services
        </Link>
      ) : null}
      <SectionHeading eyebrow={eyebrow} title={title} supporting={supporting} tone="dark" />
    </div>
  );

  if (showEnquiryForm) {
    return (
      <section className="relative overflow-hidden pt-32 pb-16 text-cream md:pt-40 md:pb-24">
        <AbstractHeroPattern variant={variant} />
        <div className="relative mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-12 px-6 md:grid-cols-12 md:items-start md:gap-8 md:px-10">
          {textColumn}
          <div className="md:col-span-4 md:col-start-9">
            <HeroEnquiryCard defaultService={defaultService} />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden pt-32 pb-16 text-cream md:min-h-[58vh] md:pb-20">
      <AbstractHeroPattern variant={variant} />

      {/* Large brand-echo hexagon, right side only — fills the otherwise
          empty right half of these text-only heroes without resorting to
          photography or literally reusing the logo file. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="pointer-events-none absolute top-1/2 -right-24 hidden h-[140%] w-auto -translate-y-1/2 opacity-[0.08] md:block lg:-right-16"
      >
        <polygon
          points="50,3 93,26 93,74 50,97 7,74 7,26"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="0.6"
        />
        <polygon
          points="50,20 78,35 78,65 50,80 22,65 22,35"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="0.4"
        />
      </svg>

      {textColumn}
    </section>
  );
}
