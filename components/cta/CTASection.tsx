import { Button } from "@/components/ui/Button";
import { Section } from "@/components/layout/Section";

export function CTASection({
  heading,
  supporting,
  primaryCta,
  secondaryCta,
}: {
  heading: string;
  supporting?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <Section tone="dark" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-gold) 1px, transparent 1px), linear-gradient(to bottom, var(--color-gold) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>
      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <span className="h-px w-16 bg-gold" />
        <h2 className="font-display text-3xl leading-tight font-medium tracking-tight text-balance md:text-4xl">
          {heading}
        </h2>
        {supporting ? <p className="text-lg leading-relaxed text-cream/70">{supporting}</p> : null}
        <div className="mt-2 flex flex-col gap-4 sm:flex-row">
          <Button href={primaryCta.href} variant="primary">
            {primaryCta.label}
          </Button>
          {secondaryCta ? (
            <Button href={secondaryCta.href} variant="ghost-light">
              {secondaryCta.label}
            </Button>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
