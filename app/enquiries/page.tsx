import { ServicePageHero } from "@/components/services/ServicePageHero";
import { Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { CredentialItem } from "@/components/ui/CredentialItem";
import { CTASection } from "@/components/cta/CTASection";
import { IconClock, IconUsers, IconShieldCheck, IconTarget } from "@/components/icons";
import { COMPANY } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Enquiries",
  description:
    "Send ARGG Associates a quick enquiry about finance, tax, business advisory, or growth support — we usually respond within one business day.",
  path: "/enquiries",
});

const REASONS = [
  {
    icon: <IconClock />,
    title: "Fast response",
    description: "We usually respond within one business day.",
  },
  {
    icon: <IconUsers />,
    title: "Direct expert access",
    description: "Your enquiry reaches CMA Mathan Ramasamy directly — not a call centre.",
  },
  {
    icon: <IconShieldCheck />,
    title: "Confidential, no obligation",
    description: "Every enquiry is handled discreetly, with no pressure to commit.",
  },
  {
    icon: <IconTarget />,
    title: "Guidance, not a sales pitch",
    description: "You'll get a considered answer grounded in your actual situation.",
  },
];

export default function EnquiriesPage() {
  return (
    <>
      <ServicePageHero
        variant="enquiries"
        showBreadcrumb={false}
        eyebrow="Enquiries"
        title="Tell us what you're trying to solve."
        supporting="Share a few details about your business and we'll point you to the right service — no forms buried in fine print, no waiting on hold."
      />

      <Section tone="light">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="flex flex-col gap-10 md:col-span-5">
            <div className="flex flex-col gap-8">
              {REASONS.map((reason) => (
                <CredentialItem key={reason.title} {...reason} />
              ))}
            </div>

            <div className="border-t border-ink/10 pt-8 text-sm text-ink/60">
              <p>Prefer to reach us directly, or need our address and location?</p>
              <a href="/contact" className="mt-2 inline-block font-medium text-gold-deep">
                Visit our Contact page →
              </a>
              <p className="mt-6">
                Or call us at{" "}
                <a href={COMPANY.phones[0].href} className="font-medium text-ink">
                  {COMPANY.phones[0].number}
                </a>
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="border border-ink/10 bg-cream p-6 md:p-10">
              <h2 className="font-display text-2xl font-medium tracking-tight">Send an enquiry</h2>
              <p className="mt-2 text-sm text-ink/60">
                Fill in your details below and let us know what you&apos;re looking for.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CTASection
        heading="Not sure which service you need?"
        supporting="Explore what ARGG Associates offers across finance, tax, business advisory, and growth."
        primaryCta={{ label: "Explore Our Services", href: "/services" }}
      />
    </>
  );
}
