import { ContactForm } from "@/components/contact/ContactForm";
import type { SERVICE_INTEREST_OPTIONS } from "@/lib/validation/contact";

export function HeroEnquiryCard({
  defaultService,
}: {
  defaultService?: (typeof SERVICE_INTEREST_OPTIONS)[number];
}) {
  return (
    <div className="border border-ink/10 bg-paper p-5 text-ink shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]">
      <h2 className="font-display text-lg font-medium tracking-tight">Talk to an Expert</h2>
      <p className="mt-1 text-xs text-ink/55">We usually respond within one business day.</p>
      <div className="mt-4">
        <ContactForm compact defaultService={defaultService} />
      </div>
    </div>
  );
}
