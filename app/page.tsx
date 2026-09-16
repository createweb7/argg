import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CredentialItem } from "@/components/ui/CredentialItem";
import { CoreServiceCard } from "@/components/home/CoreServiceCard";
import { ProcessTimeline } from "@/components/process/ProcessTimeline";
import { CTASection } from "@/components/cta/CTASection";
import {
  IconChartUp,
  IconBadge,
  IconShieldCheck,
  IconBuilding,
  IconSpark,
  IconClock,
  IconTarget,
} from "@/components/icons";
import { CORE_SERVICES } from "@/lib/content/subservices";
import { WHY_CHOOSE_US } from "@/lib/content/pillars";
import { FOUNDER } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Finance, Tax & Business Advisory in Chennai",
  description:
    "ARGG Associates helps individuals and businesses with finance, tax, GST compliance, and growth-focused business advisory — led by CMA Mathan Ramasamy.",
  path: "/",
});

const CREDENTIALS = [
  { icon: <IconChartUp />, title: "18+ Years", description: "Corporate finance experience" },
  { icon: <IconBadge />, title: "FCMA", description: "Cost & Management Accountant" },
  { icon: <IconShieldCheck />, title: "FCS", description: "Company Secretary" },
  { icon: <IconBuilding />, title: "Multi-Industry Exposure", description: "Logistics, EPC, Manufacturing, Oil & Gas, IT" },
];

// Bento layout for the 6 core-service cards: item 0 is the featured, wider
// card; the rest fill in at two different widths for visual rhythm instead
// of six identical boxes.
const CORE_SERVICE_SPANS = [
  "h-full sm:col-span-2 lg:col-span-6",
  "h-full lg:col-span-3",
  "h-full lg:col-span-3",
  "h-full lg:col-span-4",
  "h-full lg:col-span-4",
  "h-full lg:col-span-4",
];

const WHY_CHOOSE_ICONS = [
  <IconBadge key="badge" />,
  <IconSpark key="spark" />,
  <IconClock key="clock" />,
  <IconShieldCheck key="shield" />,
  <IconTarget key="target" />,
];

const APPROACH_STEPS = [
  { title: "Understand", description: "Your business, its challenges, and its objectives." },
  { title: "Analyse", description: "A structured review of financial and business information." },
  { title: "Strategise", description: "Practical finance, tax, and growth recommendations." },
  { title: "Execute", description: "Ongoing, hands-on support as the plan is implemented." },
  { title: "Grow", description: "Stronger, more sustainable business performance." },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section tone="cream" padding="tight">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {CREDENTIALS.map((item, i) => (
            <RevealOnScroll key={item.title} delayMs={i * 80}>
              <CredentialItem icon={item.icon} title={item.title} description={item.description} />
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <Section tone="light">
        <RevealOnScroll className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="What We Do"
            title="Our core services"
            supporting="Practical financial and business solutions designed to help you operate with greater clarity, efficiency, and confidence."
          />
          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-gold-deep"
          >
            View All Services →
          </Link>
        </RevealOnScroll>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
          {CORE_SERVICES.map((service, i) => (
            <RevealOnScroll
              key={service.title}
              delayMs={(i % 3) * 80}
              className={CORE_SERVICE_SPANS[i]}
            >
              <CoreServiceCard service={service} index={i + 1} featured={i === 0} />
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <Section tone="cream">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-10">
          <RevealOnScroll className="md:col-span-7">
            <SectionHeading
              eyebrow="About ARGG Associates"
              title="More than financial advice. A partner in your growth."
              supporting="ARGG Associates combines financial expertise, tax knowledge, and business insight into one strategic partnership — built around your business, not a generic checklist."
            />
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep"
            >
              Discover ARGG Associates →
            </Link>
          </RevealOnScroll>
          <RevealOnScroll delayMs={100} className="md:col-span-5">
            <blockquote className="border-l-2 border-gold pl-6">
              <p className="font-display text-2xl leading-snug font-medium text-ink/85 italic">
                “{FOUNDER.quote}”
              </p>
              <cite className="mt-4 block text-sm font-medium text-ink/50 not-italic">
                {FOUNDER.name}, Founder
              </cite>
            </blockquote>
          </RevealOnScroll>
        </div>
      </Section>

      <Section tone="dark">
        <RevealOnScroll>
          <SectionHeading
            tone="dark"
            align="center"
            eyebrow="Our Approach"
            title="A clear path to your growth."
            supporting="Finance and tax aren't isolated services — they support better business decisions and sustainable growth."
          />
        </RevealOnScroll>
        <RevealOnScroll delayMs={100} className="mt-16">
          <ProcessTimeline steps={APPROACH_STEPS} tone="dark" horizontal />
        </RevealOnScroll>
      </Section>

      <Section tone="light">
        <RevealOnScroll>
          <SectionHeading eyebrow="Why Choose Us" title="Why clients work with ARGG" />
        </RevealOnScroll>
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          {WHY_CHOOSE_US.map((item, i) => (
            <RevealOnScroll key={item.title} delayMs={i * 80}>
              <CredentialItem icon={WHY_CHOOSE_ICONS[i]} title={item.title} description={item.description} />
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <CTASection
        heading="Ready to move your business forward?"
        supporting="Let's turn financial clarity into your next opportunity for growth."
        primaryCta={{ label: "Talk to an Expert", href: "/enquiries" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
