import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COMPANY } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

// Placeholder-but-honest legal copy scoped to what this site actually does.
// This has not been reviewed by legal counsel — have it reviewed before
// relying on it commercially.

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How ARGG Associates collects and uses information submitted through this website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <Section tone="light" padding="legal">
      <SectionHeading eyebrow="Legal" title="Privacy Policy" />
      <div className="mt-10 flex max-w-2xl flex-col gap-6 leading-relaxed text-ink/75">
        <p>
          This policy explains how {COMPANY.name} handles information submitted through this
          website (www.argg.in).
        </p>

        <div>
          <h2 className="font-display text-lg font-medium text-ink">Information We Collect</h2>
          <p className="mt-2">
            When you submit the contact form on this site, we collect your name, business/company
            name (if provided), email address, phone number (if provided), service of interest, and
            your message.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-medium text-ink">How We Use It</h2>
          <p className="mt-2">
            This information is used only to respond to your enquiry and to provide the services you
            request. We do not sell or share your information with third parties for marketing
            purposes.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-medium text-ink">Third-Party Services</h2>
          <p className="mt-2">
            Contact form submissions are delivered via Resend, a transactional email service, solely
            for the purpose of routing your enquiry to our team.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-medium text-ink">Contact</h2>
          <p className="mt-2">
            For any questions or concerns about this policy, contact us at{" "}
            <a href={`mailto:${COMPANY.email}`} className="font-medium text-gold-deep">
              {COMPANY.email}
            </a>
            .
          </p>
        </div>
      </div>
    </Section>
  );
}
