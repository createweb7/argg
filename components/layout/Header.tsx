"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LogoMark } from "@/components/ui/LogoMark";
import { Button } from "@/components/ui/Button";
import { COMPANY, PRIMARY_CTA } from "@/lib/constants";
import { SERVICE_PILLARS } from "@/lib/content/services";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  // Close menus on navigation. Adjusted directly during render (React's
  // recommended pattern for resetting state in response to a changed prop)
  // rather than in an effect, to avoid an extra render pass.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setServicesOpen(false);
  }

  // The header is always solid/light (see below) so the logo's black
  // wordmark stays legible — `scrolled` now only adds a shadow once the
  // page has moved, a subtle depth cue rather than a background swap.
  useEffect(() => {
    const sentinel = document.querySelector("[data-scroll-sentinel]");
    if (!sentinel) return;

    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), {
      rootMargin: "88px 0px 0px 0px",
      threshold: 0,
    });
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setServicesOpen(false);
      setMobileOpen(false);
    }
    function onClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const textColor = "text-ink";
  const mutedColor = "text-ink/70 hover:text-ink";

  const isHomeActive = pathname === "/";
  const isAboutActive = pathname === "/about";
  const isEnquiriesActive = pathname === "/enquiries";
  const isContactActive = pathname === "/contact";
  const isServicesActive =
    pathname === "/services" || SERVICE_PILLARS.some((pillar) => pathname === pillar.href);

  function navLinkClass(active: boolean) {
    return `border-b-2 pb-1 text-sm font-medium transition-colors ${
      active ? "border-gold-deep text-ink" : `border-transparent ${mutedColor}`
    }`;
  }

  function mobileNavLinkClass(active: boolean) {
    return `py-3 text-lg font-medium ${active ? "text-gold-deep" : "text-ink"}`;
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-[0_1px_0_0_rgba(0,0,0,0.05)]" : ""
        }`}
      >
        <div className="mx-auto flex h-24 max-w-[1280px] items-center justify-between px-6 md:px-10">
          <Link href="/" className="flex items-center" aria-label={`${COMPANY.name} — Home`}>
            <LogoMark heightClass="h-12 md:h-[72px]" />
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            <Link href="/" aria-current={isHomeActive ? "page" : undefined} className={navLinkClass(isHomeActive)}>
              Home
            </Link>
            <Link
              href="/about"
              aria-current={isAboutActive ? "page" : undefined}
              className={navLinkClass(isAboutActive)}
            >
              About Us
            </Link>

            <div ref={servicesRef} className="relative">
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                aria-current={isServicesActive ? "page" : undefined}
                onMouseEnter={() => setServicesOpen(true)}
                onClick={() => setServicesOpen((v) => !v)}
                className={`flex items-center gap-1.5 ${navLinkClass(isServicesActive)}`}
              >
                Services
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  aria-hidden="true"
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                >
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </button>

              {servicesOpen ? (
                <div
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute top-full left-1/2 mt-3 w-72 -translate-x-1/2 border border-ink/10 bg-paper py-2 shadow-lg"
                >
                  {SERVICE_PILLARS.map((pillar) => {
                    const active = pathname === pillar.href;
                    return (
                      <Link
                        key={pillar.slug}
                        href={pillar.href}
                        aria-current={active ? "page" : undefined}
                        className={`block px-5 py-3 text-sm transition-colors hover:bg-cream hover:text-ink ${
                          active ? "font-semibold text-gold-deep" : "text-ink/80"
                        }`}
                      >
                        {pillar.name}
                      </Link>
                    );
                  })}
                  <div className="mx-5 my-1 h-px bg-ink/10" />
                  <Link
                    href="/services"
                    className="block px-5 py-3 text-sm font-semibold text-gold-deep transition-colors hover:bg-cream"
                  >
                    View All Services
                  </Link>
                </div>
              ) : null}
            </div>

            <Link
              href="/enquiries"
              aria-current={isEnquiriesActive ? "page" : undefined}
              className={navLinkClass(isEnquiriesActive)}
            >
              Enquiries
            </Link>

            <Link
              href="/contact"
              aria-current={isContactActive ? "page" : undefined}
              className={navLinkClass(isContactActive)}
            >
              Contact Us
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button href={PRIMARY_CTA.href} variant="primary" className="px-6 py-3 text-xs">
              {PRIMARY_CTA.label}
            </Button>
          </div>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden ${textColor}`}
          >
            <span
              className={`h-px w-6 bg-current transition-transform ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span className={`h-px w-6 bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span
              className={`h-px w-6 bg-current transition-transform ${mobileOpen ? "translate-y-[-3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Rendered as a header sibling, not a child: backdrop-blur on <header>
          establishes a containing block for fixed descendants, which would
          otherwise collapse this drawer's fixed positioning to the header's
          own box instead of the viewport. */}
      {mobileOpen ? (
        <div className="fixed inset-x-0 top-24 bottom-0 z-40 overflow-y-auto bg-cream px-6 py-8 md:hidden">
          <nav className="flex flex-col gap-1">
            <Link href="/" aria-current={isHomeActive ? "page" : undefined} className={mobileNavLinkClass(isHomeActive)}>
              Home
            </Link>
            <Link
              href="/about"
              aria-current={isAboutActive ? "page" : undefined}
              className={mobileNavLinkClass(isAboutActive)}
            >
              About Us
            </Link>

            <button
              type="button"
              aria-expanded={mobileServicesOpen}
              aria-current={isServicesActive ? "page" : undefined}
              onClick={() => setMobileServicesOpen((v) => !v)}
              className={`flex items-center justify-between text-left ${mobileNavLinkClass(isServicesActive)}`}
            >
              Services
              <span className={`text-gold-deep transition-transform ${mobileServicesOpen ? "rotate-45" : ""}`}>
                +
              </span>
            </button>
            {mobileServicesOpen ? (
              <div className="flex flex-col gap-1 border-l border-ink/10 pl-4">
                {SERVICE_PILLARS.map((pillar) => {
                  const active = pathname === pillar.href;
                  return (
                    <Link
                      key={pillar.slug}
                      href={pillar.href}
                      aria-current={active ? "page" : undefined}
                      className={`py-2.5 text-base ${active ? "font-semibold text-gold-deep" : "text-ink/75"}`}
                    >
                      {pillar.name}
                    </Link>
                  );
                })}
                <Link href="/services" className="py-2.5 text-base font-semibold text-gold-deep">
                  View All Services
                </Link>
              </div>
            ) : null}

            <Link
              href="/enquiries"
              aria-current={isEnquiriesActive ? "page" : undefined}
              className={mobileNavLinkClass(isEnquiriesActive)}
            >
              Enquiries
            </Link>

            <Link
              href="/contact"
              aria-current={isContactActive ? "page" : undefined}
              className={mobileNavLinkClass(isContactActive)}
            >
              Contact Us
            </Link>
          </nav>

          <div className="mt-8">
            <Button href={PRIMARY_CTA.href} variant="primary" className="w-full">
              {PRIMARY_CTA.label}
            </Button>
          </div>

          <div className="mt-10 border-t border-ink/10 pt-6 text-sm text-ink/60">
            <p>{COMPANY.address.full}</p>
            <p className="mt-2">
              <a href={`mailto:${COMPANY.email}`} className="hover:text-gold-deep">
                {COMPANY.email}
              </a>
            </p>
            <p className="mt-1">
              <a href={COMPANY.phones[0].href} className="hover:text-gold-deep">
                {COMPANY.phones[0].number}
              </a>
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
