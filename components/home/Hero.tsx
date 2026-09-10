import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden text-cream md:min-h-[88vh] md:items-center">
      <Image
        src="/images/hero-office.webp"
        alt="ARGG Associates — strategic finance advisory office"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Mobile: text sits at the bottom, so the scrim runs bottom-to-top. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage:
            "linear-gradient(to top, var(--color-ink) 0%, color-mix(in srgb, var(--color-ink) 88%, transparent) 38%, transparent 75%)",
        }}
      />

      {/* Desktop: text sits on the left, so the scrim runs left-to-right,
          fading out by ~80% to reveal the photo (and its real ARGG
          branding on the mug/folder) clearly on the right. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-ink) 0%, color-mix(in srgb, var(--color-ink) 90%, transparent) 42%, transparent 80%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">
            Finance · Compliance · Growth
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] font-medium tracking-tight text-balance md:text-6xl lg:text-7xl">
            Clarity for Today.
            <br />
            Growth for Tomorrow.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80 md:text-xl">
            Strategic Finance, Tax &amp; Business Advisory for Ambitious Businesses.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/65">
            We help businesses make smarter financial decisions, approach tax strategically, and
            build stronger foundations for sustainable growth.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={PRIMARY_CTA.href} variant="primary">
              {PRIMARY_CTA.label}
            </Button>
            <Button href={SECONDARY_CTA.href} variant="ghost-light">
              {SECONDARY_CTA.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
