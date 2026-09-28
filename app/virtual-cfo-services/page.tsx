import Image from "next/image";
import { ServicePageHero } from "@/components/services/ServicePageHero";
import { ServicePillarBlock } from "@/components/services/ServicePillarBlock";
import { TestimonialsSection } from "@/components/services/TestimonialsSection";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CredentialItem } from "@/components/ui/CredentialItem";
import { FounderProfile } from "@/components/about/FounderProfile";
import { ProcessTimeline } from "@/components/process/ProcessTimeline";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/cta/CTASection";
import {
  IconChartUp,
  IconBadge,
  IconShieldCheck,
  IconBuilding,
  IconUsers,
} from "@/components/icons";
import { getPillarBySlug } from "@/lib/content/services";
import { VIRTUAL_CFO_TESTIMONIALS } from "@/lib/content/testimonials";
import type { SERVICE_INTEREST_OPTIONS } from "@/lib/validation/contact";
import { buildMetadata } from "@/lib/metadata";

const pillar = getPillarBySlug("virtual-cfo-services")!;

export const metadata = buildMetadata({
  title: "Virtual CFO Services",
  description:
    "Enterprise-level financial leadership for growing businesses — Virtual CFO advisory, FP&A, dashboards, and board-level reporting from ARGG Associates.",
  path: "/virtual-cfo-services",
});

const TRUST_SIGNALS = [
  { icon: <IconChartUp />, title: "18+ Years", description: "Corporate finance experience" },
  { icon: <IconBadge />, title: "FCMA", description: "Cost & Management Accountant" },
  { icon: <IconShieldCheck />, title: "FCS", description: "Company Secretary" },
  { icon: <IconBuilding />, title: "Multi-Industry Exposure", description: "Logistics, EPC, Manufacturing, Oil & Gas, IT" },
];

const WHY_VIRTUAL_CFO = [
  {
    icon: <IconUsers />,
    title: "CFO-Level Expertise, Fraction of the Cost",
    description: "Enterprise-grade financial leadership without the overhead of a full-time hire.",
  },
  {
    icon: <IconBuilding />,
    title: "Cross-Industry Perspective",
    description: "18+ years of experience across Logistics, EPC, Construction, Manufacturing, Oil & Gas, and IT.",
  },
  {
    icon: <IconChartUp />,
    title: "Board-Ready Reporting",
    description: "Dashboards and MIS built for management and board-level decision-making.",
  },
  {
    icon: <IconShieldCheck />,
    title: "Independent, Objective Advice",
    description: "Backed by CMA and Company Secretary qualifications — not generalist opinions.",
  },
  {
    icon: <IconBadge />,
    title: "Flexible Engagement",
    description: "Scoped to what your business needs today, and able to scale as you grow.",
  },
];

const VIRTUAL_CFO_APPROACH = [
  { title: "Understand", description: "Your business model, numbers, and current financial process." },
  { title: "Diagnose", description: "Where the gaps are — in reporting, cash flow, controls, or decisions." },
  { title: "Structure", description: "A Virtual CFO engagement scoped to your business and its stage." },
  { title: "Support", description: "Ongoing financial leadership — reporting, forecasting, and strategic input." },
  { title: "Review", description: "Regular check-ins to keep the engagement aligned with your goals." },
];

const FAQ_ITEMS = [
  {
    question: "How is a Virtual CFO different from an accountant?",
    answer:
      "An accountant records and reports what already happened. A Virtual CFO uses that information to guide what happens next — cash flow planning, cost control, forecasting, and strategic decisions.",
  },
  {
    question: "How much time will this take from my team?",
    answer:
      "Engagements are structured around your existing team and systems — we work with what you have, tightening reporting and process rather than replacing your people.",
  },
  {
    question: "Can this scale as my business grows?",
    answer:
      "Yes. Virtual CFO engagements are scoped to your current stage and can expand in depth and frequency as your business and reporting needs grow.",
  },
  {
    question: "How is this different from Business & Management Consultancy Services?",
    answer:
      "Virtual CFO Services focus on ongoing financial leadership — planning, forecasting, and board-level reporting. Business & Management Consultancy covers broader needs like registration, compliance, accounting, and growth consulting.",
  },
];

export default function VirtualCFOServicesPage() {
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

      <Section tone="cream" padding="tight">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {TRUST_SIGNALS.map((item, i) => (
            <RevealOnScroll key={item.title} delayMs={i * 80}>
              <CredentialItem icon={item.icon} title={item.title} description={item.description} />
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <section className="relative flex min-h-[40vh] items-center overflow-hidden text-cream md:min-h-[46vh]">
        <Image
          src="/images/hero-office.webp"
          alt="ARGG Associates — strategic finance advisory office"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--color-ink) 0%, color-mix(in srgb, var(--color-ink) 78%, transparent) 55%, color-mix(in srgb, var(--color-ink) 40%, transparent) 100%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-[1280px] px-6 py-16 md:px-10">
          <RevealOnScroll className="max-w-xl">
            <span className="text-xs font-semibold tracking-[0.25em] text-gold uppercase">Trusted Financial Leadership</span>
            <h2 className="mt-4 font-display text-3xl leading-tight font-medium tracking-tight text-balance md:text-4xl">
              Financial oversight your board and stakeholders can rely on.
            </h2>
            <p className="mt-4 leading-relaxed text-cream/75">
              From day-to-day cash flow decisions to board-level reporting, your Virtual CFO brings
              the discipline and independence of enterprise finance to a growing business.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <Section tone="light">
        <RevealOnScroll>
          <SectionHeading eyebrow="Your Virtual CFO" title="Led by CMA Mathan Ramasamy" />
        </RevealOnScroll>
        <div className="mt-14">
          <FounderProfile />
        </div>
      </Section>

      <Section tone="cream">
        <RevealOnScroll>
          <SectionHeading eyebrow="What's Included" title="Detailed Virtual CFO services" />
        </RevealOnScroll>
        <div className="mt-4">
          <ServicePillarBlock pillar={pillar} />
        </div>
      </Section>

      <Section tone="dark">
        <RevealOnScroll>
          <SectionHeading
            tone="dark"
            eyebrow="Why ARGG"
            title="Why businesses choose our Virtual CFO Services"
          />
        </RevealOnScroll>
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_VIRTUAL_CFO.map((item, i) => (
            <RevealOnScroll key={item.title} delayMs={(i % 3) * 80}>
              <CredentialItem icon={item.icon} title={item.title} description={item.description} tone="dark" />
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <RevealOnScroll>
          <SectionHeading eyebrow="The Engagement" title="Understand. Diagnose. Structure. Support. Review." />
        </RevealOnScroll>
        <RevealOnScroll delayMs={100} className="mt-16">
          <ProcessTimeline steps={VIRTUAL_CFO_APPROACH} tone="light" horizontal />
        </RevealOnScroll>
      </Section>

      <TestimonialsSection items={VIRTUAL_CFO_TESTIMONIALS} />

      <Section tone="cream">
        <RevealOnScroll>
          <SectionHeading eyebrow="FAQ" title="Common questions about Virtual CFO Services" />
        </RevealOnScroll>
        <RevealOnScroll delayMs={100} className="mt-10 max-w-3xl">
          <FAQAccordion items={FAQ_ITEMS} />
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
