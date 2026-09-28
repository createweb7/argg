import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { Testimonial } from "@/lib/content/testimonials";

export function TestimonialsSection({ items }: { items: Testimonial[] }) {
  if (items.length === 0) return null;

  return (
    <Section tone="cream">
      <RevealOnScroll>
        <SectionHeading eyebrow="Client Voices" title="What clients say" />
      </RevealOnScroll>
      <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
        {items.map((item, i) => (
          <RevealOnScroll key={item.name} delayMs={i * 80} className="border-t border-ink/10 pt-6">
            <p className="leading-relaxed text-ink/75 italic">“{item.quote}”</p>
            <p className="mt-4 text-sm font-semibold text-ink">{item.name}</p>
            <p className="text-xs text-ink/50">{item.designation}</p>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
