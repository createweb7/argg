import { ServicePageHero } from "@/components/services/ServicePageHero";
import { ServicePillarBlock } from "@/components/services/ServicePillarBlock";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/cta/CTASection";
import type { ServicePillar } from "@/lib/content/services";
import type { SERVICE_INTEREST_OPTIONS } from "@/lib/validation/contact";

export function ServicePillarPage({ pillar }: { pillar: ServicePillar }) {
  return (
    <>
      <ServicePageHero
        variant={pillar.heroVariant}
        eyebrow={pillar.eyebrow}
        title={pillar.name}
        supporting={pillar.intro}
        showEnquiryForm
        defaultService={pillar.name as (typeof SERVICE_INTEREST_OPTIONS)[number]}
      />

      <Section tone="light">
        <ServicePillarBlock pillar={pillar} />
      </Section>

      <CTASection
        heading={pillar.ctaHeading}
        supporting={pillar.ctaSupporting}
        primaryCta={{ label: "Talk to an Expert", href: "/enquiries" }}
        secondaryCta={{ label: "View All Services", href: "/services" }}
      />
    </>
  );
}
