import Link from "next/link";
import { ServicePageHero } from "@/components/services/ServicePageHero";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FounderProfile } from "@/components/about/FounderProfile";
import { ProcessTimeline } from "@/components/process/ProcessTimeline";
import { CTASection } from "@/components/cta/CTASection";
import { SERVICE_PILLARS } from "@/lib/content/services";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "ARGG Associates is a business advisory firm built around finance, tax, and growth-focused strategy — led by CMA Mathan Ramasamy.",
  path: "/about",
});

const APPROACH_STEPS = [
  { title: "Understand", description: "Your business, its challenges, and its objectives." },
  { title: "Analyse", description: "A structured review of financial and business information." },
  { title: "Strategise", description: "Practical finance, tax, and growth recommendations." },
  { title: "Support", description: "Ongoing guidance as the plan is implemented." },
  { title: "Grow", description: "Stronger, more sustainable business performance." },
];

const VALUES = [
  {
    title: "Clarity over complexity",
    description:
      "Financial information is only useful if it's understood. We turn numbers into practical, plain-language insight your team can act on.",
  },
  {
    title: "Perspective across industries",
    description:
      "Experience across Logistics, EPC, Construction, Manufacturing, Oil & Gas, and IT means recommendations aren't built on a single industry's playbook.",
  },
  {
    title: "Honest, ethical advice",
    description:
      "We say what a business needs to hear, delivered with transparency and confidentiality throughout.",
  },
  {
    title: "Growth as the measure",
    description:
      "Every engagement — a filing, a review, a strategy session — is judged by whether it moves the business forward.",
  },
];

export default function AboutPage() {
  return (
    <>
      <ServicePageHero
        variant="about"
        showBreadcrumb={false}
        eyebrow="About ARGG Associates"
        title="Built around your business. Focused on your growth."
        supporting="A business advisory firm bringing financial expertise, tax knowledge, and strategic thinking together — around trust, clarity, and partnership."
      />

      <Section tone="light">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <RevealOnScroll className="md:col-span-7">
            <SectionHeading
              eyebrow="Our Story"
              title="Your trusted partner in finance, compliance & business growth."
              supporting="ARGG Associates was built on a simple premise: individuals and businesses deserve smart, practical finance solutions — not just compliance for its own sake. From tax filings to CFO-level financial planning, every engagement is approached with the same goal: empowering financial decisions and enabling business success."
            />
          </RevealOnScroll>
          <RevealOnScroll delayMs={100} className="md:col-span-5">
            <span className="text-xs font-semibold tracking-[0.2em] text-gold-deep uppercase">
              What We Do
            </span>
            <div className="mt-5 flex flex-col">
              {SERVICE_PILLARS.map((pillar) => (
                <Link
                  key={pillar.slug}
                  href={pillar.href}
                  className="group flex items-center justify-between border-t border-ink/10 py-4 last:border-b"
                >
                  <span className="font-display text-lg font-medium tracking-tight">{pillar.name}</span>
                  <span className="text-gold-deep opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </Section>

      <Section tone="cream">
        <RevealOnScroll>
          <SectionHeading eyebrow="Founder" title="Led by experience across finance and strategy" />
        </RevealOnScroll>
        <div className="mt-14">
          <FounderProfile />
        </div>
      </Section>

      <Section tone="light">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <RevealOnScroll className="md:col-span-5">
            <SectionHeading
              eyebrow="Our Approach"
              title="Understand. Analyse. Strategise. Support. Grow."
              supporting="Every engagement starts with understanding your business and objectives, followed by a structured review of your financial position. From there, we build practical strategies across finance, tax, and growth — and stay involved as they're put into practice."
            />
          </RevealOnScroll>
          <RevealOnScroll delayMs={100} className="md:col-span-6 md:col-start-8">
            <ProcessTimeline steps={APPROACH_STEPS} tone="light" />
          </RevealOnScroll>
        </div>
      </Section>

      <Section tone="cream">
        <RevealOnScroll>
          <SectionHeading eyebrow="What We Value" title="How we approach every engagement" />
        </RevealOnScroll>
        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
          {VALUES.map((value, i) => (
            <RevealOnScroll key={value.title} delayMs={i * 80} className="border-t border-ink/10 pt-6">
              <h3 className="font-display text-xl font-medium tracking-tight">{value.title}</h3>
              <p className="mt-2 leading-relaxed text-ink/65">{value.description}</p>
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <CTASection
        heading="Let's talk about your business."
        supporting="Whether it's financial clarity, tax planning, or a strategy for growth — start with a conversation."
        primaryCta={{ label: "Talk to an Expert", href: "/contact" }}
      />
    </>
  );
}
