import { ServicePageHero } from "@/components/services/ServicePageHero";
import { ServicePillarBlock } from "@/components/services/ServicePillarBlock";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CredentialItem } from "@/components/ui/CredentialItem";
import { ProcessTimeline } from "@/components/process/ProcessTimeline";
import { CTASection } from "@/components/cta/CTASection";
import {
  IconChartUp,
  IconReceipt,
  IconBuilding,
  IconTarget,
  IconSpark,
  IconShieldCheck,
} from "@/components/icons";
import { getPillarBySlug } from "@/lib/content/services";
import { MAYOPI } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

const pillar = getPillarBySlug("mayopi-advisories")!;

export const metadata = buildMetadata({
  title: "Mayopi Advisories — Tax, GST & Insurance",
  description:
    "Income Tax, GST, ITAT & GSTAT, and Life, Term, Savings & Health Insurance advisory from mayopi ADVISORIES, in partnership with ARGG Associates.",
  path: "/mayopi-advisories",
});

const WHY_MAYOPI = [
  {
    icon: <IconChartUp />,
    title: "Finance Expertise",
    description: "Strong understanding of finance, accounting and financial decision-making.",
  },
  {
    icon: <IconReceipt />,
    title: "Tax Expertise",
    description: "Practical understanding of Income Tax and GST compliance and planning.",
  },
  {
    icon: <IconBuilding />,
    title: "Industry Exposure",
    description: "Rich professional exposure across finance and business environments.",
  },
  {
    icon: <IconTarget />,
    title: "Analytical Approach",
    description: "We look beyond individual products and consider your overall financial situation.",
  },
  {
    icon: <IconSpark />,
    title: "Need-Based Advisory",
    description: "Recommendations aligned with your requirements, objectives and financial circumstances.",
  },
  {
    icon: <IconShieldCheck />,
    title: "Long-Term Perspective",
    description: "Built on informed financial decisions, not simply completing a transaction.",
  },
];

const MAYOPI_APPROACH = [
  { title: "Assess", description: "Your income, financial commitments, tax position, existing protection and goals." },
  { title: "Advise", description: "Identify opportunities, gaps and suitable solutions." },
  { title: "Protect", description: "Address critical financial risks through appropriate insurance protection." },
  { title: "Plan", description: "Bring tax, savings, protection and financial goals into a structured plan." },
  { title: "Review", description: "Your financial circumstances change. Your plan should evolve with them." },
];

const WHO_WE_SERVE_AUDIENCE = [
  "Individuals",
  "Salaried Professionals",
  "Self-Employed Professionals",
  "Entrepreneurs",
  "Families",
  "Small & Medium Businesses",
];

const WHO_WE_SERVE_SCENARIOS = [
  "Filing your first ITR",
  "Running a growing business",
  "Managing GST compliance",
  "Looking to reduce avoidable tax",
  "Protecting your family's income",
  "Reviewing your term insurance",
  "Planning your children's future",
  "Looking for health-insurance protection",
  "Building disciplined long-term savings",
];

export default function MayopiAdvisoriesPage() {
  return (
    <>
      <ServicePageHero
        variant="mayopi"
        eyebrow={pillar.eyebrow}
        title="mayopi ADVISORIES"
        supporting={`${MAYOPI.tagline} Income Tax, GST, ITAT & GSTAT, and Life, Term, Savings & Health Insurance advisory — in partnership with ARGG Associates.`}
        showEnquiryForm
        defaultService="Mayopi Advisories"
      />

      <Section tone="light">
        <ServicePillarBlock pillar={pillar} />
      </Section>

      <Section tone="dark">
        <RevealOnScroll>
          <SectionHeading
            tone="dark"
            eyebrow="Why mayopi ADVISORIES"
            title="Because financial decisions deserve more than a sales pitch."
          />
        </RevealOnScroll>
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_MAYOPI.map((item, i) => (
            <RevealOnScroll key={item.title} delayMs={(i % 3) * 80}>
              <CredentialItem icon={item.icon} title={item.title} description={item.description} tone="dark" />
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <Section tone="cream">
        <RevealOnScroll>
          <SectionHeading eyebrow="The Mayopi Approach" title="Assess. Advise. Protect. Plan. Review." />
        </RevealOnScroll>
        <RevealOnScroll delayMs={100} className="mt-16">
          <ProcessTimeline steps={MAYOPI_APPROACH} tone="light" horizontal />
        </RevealOnScroll>
      </Section>

      <Section tone="light">
        <RevealOnScroll>
          <SectionHeading
            eyebrow="Who We Serve"
            title="Individuals, professionals, families and businesses."
            supporting="mayopi ADVISORIES can help you approach these decisions with greater clarity."
          />
        </RevealOnScroll>
        <RevealOnScroll delayMs={100} className="mt-8 flex flex-wrap gap-2">
          {WHO_WE_SERVE_AUDIENCE.map((audience) => (
            <span
              key={audience}
              className="border border-ink/15 px-3 py-1.5 text-xs font-medium tracking-wide text-ink/70"
            >
              {audience}
            </span>
          ))}
        </RevealOnScroll>
        <RevealOnScroll delayMs={150} className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-3">
          {WHO_WE_SERVE_SCENARIOS.map((scenario) => (
            <div key={scenario} className="flex items-start gap-3 text-ink/75">
              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
              <span>{scenario}</span>
            </div>
          ))}
        </RevealOnScroll>
      </Section>

      <Section tone="cream">
        <RevealOnScroll className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold tracking-[0.2em] text-gold-deep uppercase">
            Contact mayopi ADVISORIES
          </span>
          <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6">
            {MAYOPI.phones.map((phone) => (
              <a
                key={phone.number}
                href={phone.href}
                className="font-display text-lg font-medium tracking-tight text-ink hover:text-gold-deep"
              >
                {phone.label}: {phone.number}
              </a>
            ))}
          </div>
        </RevealOnScroll>
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
