import Link from "next/link";
import { LogoMark } from "@/components/ui/LogoMark";
import { COMPANY } from "@/lib/constants";
import { SERVICE_PILLARS } from "@/lib/content/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center" aria-label={`${COMPANY.name} — Home`}>
              <LogoMark heightClass="h-10" chip />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
              {COMPANY.name} is a business advisory firm helping individuals and businesses with
              finance, tax, and growth-focused strategy — {COMPANY.tagline}.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Navigate</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-cream/70">
              <li><Link href="/" className="hover:text-cream">Home</Link></li>
              <li><Link href="/about" className="hover:text-cream">About Us</Link></li>
              <li><Link href="/services" className="hover:text-cream">Services</Link></li>
              <li><Link href="/contact" className="hover:text-cream">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">Services</h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-cream/70">
              {SERVICE_PILLARS.map((pillar) => (
                <li key={pillar.slug}>
                  <Link href={pillar.href} className="hover:text-cream">
                    {pillar.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 border-t border-cream/10 pt-10 md:grid-cols-2">
          <div className="text-sm text-cream/70">
            <p>{COMPANY.address.full}</p>
            <p className="mt-2">
              <a href={`mailto:${COMPANY.email}`} className="hover:text-gold">
                {COMPANY.email}
              </a>
            </p>
            <p className="mt-1 flex flex-wrap gap-x-4">
              {COMPANY.phones.map((phone) => (
                <a key={phone.number} href={phone.href} className="hover:text-gold">
                  {phone.label}: {phone.number}
                </a>
              ))}
            </p>
          </div>
          <div className="flex flex-col justify-between gap-4 text-sm text-cream/60 md:items-end md:text-right">
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-cream">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-cream">Terms & Conditions</Link>
            </div>
            <p>© {year} {COMPANY.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
