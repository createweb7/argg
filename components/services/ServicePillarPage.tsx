import { ServicePageHero } from "@/components/services/ServicePageHero";
import { ServicePillarBlock } from "@/components/services/ServicePillarBlock";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/cta/CTASection";
import type { ServicePillar } from "@/lib/content/services";

export function ServicePillarPage({ pillar }: { pillar: ServicePillar }) {
  return (
    <>
      <ServicePageHero
        variant={pillar.heroVariant}
        eyebrow={pillar.eyebrow}
        title={pillar.name}
        supporting={pillar.intro}
      />

      <Section tone="light">
        <ServicePillarBlock pillar={pillar} />
      </Section>

      <CTASection
        heading={pillar.ctaHeading}
        supporting={pillar.ctaSupporting}
        primaryCta={{ label: "Talk to an Expert", href: "/contact" }}
        secondaryCta={{ label: "View All Services", href: "/services" }}
      />
    </>
  );
}
