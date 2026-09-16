import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { COMPANY, SITE_URL, FOUNDER } from "@/lib/constants";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY.name} | Finance, Tax & Business Advisory`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "ARGG Associates is a business advisory firm helping individuals and businesses with finance, tax, GST compliance, and growth-focused strategy.",
  openGraph: {
    type: "website",
    siteName: COMPANY.name,
    locale: "en_IN",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: COMPANY.name,
  description:
    "Business advisory firm offering finance, tax, GST, and business growth consulting services.",
  url: SITE_URL,
  email: COMPANY.email,
  telephone: COMPANY.phones.map((p) => `+91 ${p.number}`),
  address: {
    "@type": "PostalAddress",
    streetAddress: `${COMPANY.address.line1}, ${COMPANY.address.line2}`,
    addressLocality: COMPANY.address.city,
    postalCode: COMPANY.address.postalCode,
    addressCountry: COMPANY.address.country,
  },
  founder: {
    "@type": "Person",
    name: FOUNDER.name,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-paper font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <div data-scroll-sentinel className="absolute top-0 left-0 h-px w-px" aria-hidden="true" />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-100 focus:rounded focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
