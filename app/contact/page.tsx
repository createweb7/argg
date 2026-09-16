import { ServicePageHero } from "@/components/services/ServicePageHero";
import { Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/contact/ContactForm";
import { COMPANY } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with ARGG Associates for finance, tax, and business advisory support in Chennai.",
  path: "/contact",
});

const mapQuery = encodeURIComponent(`${COMPANY.name}, ${COMPANY.address.full}`);

export default function ContactPage() {
  return (
    <>
      <ServicePageHero
        variant="contact"
        showBreadcrumb={false}
        eyebrow="Contact Us"
        title="Let's talk about your business."
        supporting="Whether you're looking for greater financial clarity, smarter tax planning, or a strategy for growth, ARGG Associates is here to help."
      />

      <Section tone="light">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="mb-6 text-sm text-ink/60">
              Have a specific service in mind?{" "}
              <a href="/enquiries" className="font-medium text-gold-deep">
                Send a quick enquiry →
              </a>
            </p>
            <ContactForm />
          </div>

          <div className="flex flex-col gap-10 md:col-span-5">
            <div>
              <h2 className="font-display text-xl font-medium tracking-tight">Reach us directly</h2>
              <dl className="mt-5 flex flex-col gap-4 text-sm">
                <div>
                  <dt className="text-ink/50">Email</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${COMPANY.email}`} className="font-medium text-gold-deep">
                      {COMPANY.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-ink/50">Phone</dt>
                  <dd className="mt-1 flex flex-col gap-1">
                    {COMPANY.phones.map((phone) => (
                      <a key={phone.number} href={phone.href} className="font-medium text-ink">
                        {phone.label}: {phone.number}
                      </a>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="text-ink/50">Address</dt>
                  <dd className="mt-1 leading-relaxed text-ink/80">{COMPANY.address.full}</dd>
                </div>
              </dl>
            </div>

            <div className="overflow-hidden border border-ink/10">
              <iframe
                title="ARGG Associates location"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[15%]"
              />
              <a
                href={`https://www.google.com/maps?q=${mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-cream px-4 py-3 text-sm font-medium text-gold-deep"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
