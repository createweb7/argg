import { ServicePageHero } from "@/components/services/ServicePageHero";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { StatPillarCard } from "@/components/ui/StatPillarCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/cta/CTASection";
import { SERVICE_PILLARS } from "@/lib/content/services";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Finance, taxation, business advisory, and business growth services from ARGG Associates — explore each service in detail.",
  path: "/services",
});

const FAQ_ITEMS = [
  {
    question: "I'm not sure which service I need — where do I start?",
    answer:
      "Most engagements start with a conversation about your business and what's prompting the search — a tax deadline, a growth decision, or just wanting a clearer financial picture. From there we point you to the right service, whether that's Finance, Taxation, Business Advisory, or Business Growth.",
  },
  {
    question: "Do you work with individuals or only businesses?",
    answer:
      "Both. Our taxation services cover individuals, HUFs, and salaried employees, alongside business and professional clients across Finance, Business Advisory, and Business Growth.",
  },
  {
    question: "Can you support an existing finance team rather than replace it?",
    answer:
      "Yes — Virtual CFO and Business Advisory engagements are often structured to support an existing team with reviews, dashboards, and process improvement rather than to replace in-house finance functions.",
  },
  {
    question: "How do I get started?",
    answer:
      "Reach out through the contact page or call us directly. We'll set up a conversation to understand your business before recommending next steps.",
  },
];

export default function ServicesHubPage() {
  return (
    <>
      <ServicePageHero
        variant="services"
        showBreadcrumb={false}
        eyebrow="Services"
        title="Financial expertise. Strategic direction. Business growth."
        supporting="Practical solutions designed to help businesses make better decisions, operate efficiently, and grow with confidence."
        showEnquiryForm
      />

      <Section tone="light">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {SERVICE_PILLARS.map((pillar, i) => (
            <RevealOnScroll key={pillar.slug} delayMs={i * 80}>
              <StatPillarCard
                index={i + 1}
                title={pillar.name}
                description={pillar.teaser}
                href={pillar.href}
              />
            </RevealOnScroll>
          ))}
        </div>
      </Section>

      <Section tone="cream">
        <RevealOnScroll>
          <SectionHeading eyebrow="FAQ" title="Not sure where to start?" />
        </RevealOnScroll>
        <RevealOnScroll delayMs={100} className="mt-10 max-w-3xl">
          <FAQAccordion items={FAQ_ITEMS} />
        </RevealOnScroll>
      </Section>

      <CTASection
        heading="Let's discuss your business."
        supporting="Tell us where you need clarity, and we'll help identify where we can help."
        primaryCta={{ label: "Talk to an Expert", href: "/contact" }}
      />
    </>
  );
}
