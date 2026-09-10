import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COMPANY } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

// Placeholder-but-honest legal copy scoped to what this site actually does.
// This has not been reviewed by legal counsel — have it reviewed before
// relying on it commercially.

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "Terms of use for the ARGG Associates website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Section tone="light" padding="legal">
      <SectionHeading eyebrow="Legal" title="Terms & Conditions" />
      <div className="mt-10 flex max-w-2xl flex-col gap-6 leading-relaxed text-ink/75">
        <p>These terms govern your use of the {COMPANY.name} website (www.argg.in).</p>

        <div>
          <h2 className="font-display text-lg font-medium text-ink">Website Content</h2>
          <p className="mt-2">
            Content on this website is provided for general informational purposes about our
            services and does not constitute financial, tax, or legal advice. Advice specific to your
            situation is provided only through a direct engagement with our team.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-medium text-ink">Enquiries</h2>
          <p className="mt-2">
            Submitting the contact form does not create a client relationship. A formal engagement
            begins only once agreed between you and {COMPANY.name}.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-medium text-ink">Contact</h2>
          <p className="mt-2">
            Questions about these terms can be sent to{" "}
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
