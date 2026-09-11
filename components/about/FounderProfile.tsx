import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FOUNDER } from "@/lib/constants";

export function FounderProfile() {
  return (
    <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-10">
      <RevealOnScroll className="md:col-span-5">
        <div className="relative mx-auto w-full max-w-sm pb-10 pr-10 md:mx-0">
          <div className="relative aspect-3/4 w-full overflow-hidden">
            <Image
              src="/images/about-founder.webp"
              alt={`${FOUNDER.name}, founder of ARGG Associates`}
              fill
              sizes="(min-width: 768px) 400px, 90vw"
              className="photo-fade object-cover"
              priority={false}
            />
          </div>
          <div className="absolute right-0 bottom-0 aspect-3/4 w-2/5 overflow-hidden border-4 border-paper shadow-xl">
            <Image
              src="/images/founder-avatar.webp"
              alt={`${FOUNDER.name} in the ARGG Associates office`}
              fill
              sizes="160px"
              className="object-cover"
            />
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delayMs={100} className="md:col-span-7">
        <span className="text-xs font-semibold tracking-[0.2em] text-gold-deep uppercase">Founder</span>
        <h3 className="mt-3 font-display text-3xl font-medium tracking-tight">{FOUNDER.name}</h3>
        <p className="mt-1 text-sm font-medium text-ink/50">{FOUNDER.credentials}</p>

        <ul className="mt-5 flex flex-col gap-1.5 text-sm text-ink/65">
          {FOUNDER.titles.map((title) => (
            <li key={title}>{title}</li>
          ))}
        </ul>

        <p className="mt-6 max-w-xl leading-relaxed text-ink/70">{FOUNDER.experience}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {FOUNDER.specializations.map((spec) => (
            <span
              key={spec}
              className="border border-ink/15 px-3 py-1 text-xs font-medium tracking-wide text-ink/70"
            >
              {spec}
            </span>
          ))}
        </div>

        <blockquote className="mt-8 border-l-2 border-gold pl-5 font-display text-xl leading-snug font-medium text-ink/85 italic">
          “{FOUNDER.quote}”
        </blockquote>
      </RevealOnScroll>
    </div>
  );
}
