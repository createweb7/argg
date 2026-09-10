import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { ServiceGroup } from "@/lib/content/services";

export function ServiceRow({ group, index }: { group: ServiceGroup; index: number }) {
  const reversed = index % 2 === 1;

  return (
    <RevealOnScroll className="grid grid-cols-1 gap-6 border-t border-ink/10 py-10 md:grid-cols-12 md:gap-8">
      <div className={`md:col-span-4 ${reversed ? "md:order-2" : ""}`}>
        <span className="font-display text-3xl text-gold-deep">{String(index + 1).padStart(2, "0")}</span>
        <h3 className="mt-3 font-display text-2xl font-medium tracking-tight">{group.title}</h3>
      </div>
      <ul className={`grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 md:col-span-8 ${reversed ? "md:order-1" : ""}`}>
        {group.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-ink/75">
            <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gold-deep" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </RevealOnScroll>
  );
}
