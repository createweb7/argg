export const SITE_URL = "https://www.argg.in";

export const COMPANY = {
  name: "ARGG Associates",
  tagline: "Finance | Compliance | Growth",
  email: "support@argg.in",
  phones: [
    { label: "Office", number: "98411 53620", href: "tel:+919841153620" },
    { label: "WhatsApp", number: "93423 53620", href: "tel:+919342353620" },
  ],
  whatsappHref: "https://wa.me/919342353620",
  website: "www.argg.in",
  address: {
    line1: "190-192, 3rd Floor, Hamid Complex",
    line2: "Thousand Lights, Anna Salai",
    city: "Chennai",
    postalCode: "600006",
    country: "IN",
    full: "190-192, 3rd Floor, Hamid Complex, Thousand Lights, Anna Salai, Chennai – 600006",
  },
} as const;

export const FOUNDER = {
  name: "CMA Mathan Ramasamy",
  credentials: "B.Com., M.F.M., FCMA, FCS",
  titles: [
    "Cost & Management Accountant (ICMAI)",
    "Company Secretary (ICSI)",
    "Certified Independent Director (IICA)",
  ],
  experience:
    "17+ years of corporate experience across Logistics, EPC, Construction, Manufacturing, Oil & Gas, and IT.",
  specializations: [
    "FP&A",
    "Cost Management",
    "Business Performance Improvement",
    "Financial Controls",
    "Strategic Planning",
  ],
  quote:
    "Empowering Businesses Through Financial Clarity, Compliance Excellence & Sustainable Growth.",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const PRIMARY_CTA = { label: "Talk to an Expert", href: "/contact" };
export const SECONDARY_CTA = { label: "Explore Our Services", href: "/services" };
