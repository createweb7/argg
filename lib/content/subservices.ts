export type CoreService = {
  title: string;
  description: string;
  href: string;
  icon: "chart" | "users" | "receipt" | "percent" | "team" | "cap" | "badge";
};

// A curated, more granular view of the 4 pillars for the Home page's
// services filmstrip — each links back to its parent pillar page.
// Descriptions are grounded in the real sub-service bullets in
// lib/content/services.ts, not invented.
export const CORE_SERVICES: CoreService[] = [
  {
    title: "Corporate Finance & FP&A",
    description: "Turn financial data into clear business decisions.",
    href: "/finance-services",
    icon: "chart",
  },
  {
    title: "Virtual CFO & Finance Advisory",
    description: "Executive-level financial oversight without a full-time CFO.",
    href: "/business-advisory-services",
    icon: "users",
  },
  {
    title: "Taxation Services",
    description: "Practical tax filing and planning, handled on time.",
    href: "/taxation-services",
    icon: "receipt",
  },
  {
    title: "GST Services",
    description: "Reliable GST registration, filing, and compliance review.",
    href: "/taxation-services",
    icon: "percent",
  },
  {
    title: "Business Registration & Compliance",
    description: "MSME, GST, and startup registration, plus annual compliance support.",
    href: "/business-advisory-services",
    icon: "badge",
  },
  {
    title: "Training & Capability Building",
    description: "Practical financial skills for founders and finance teams.",
    href: "/business-growth-services",
    icon: "cap",
  },
];
