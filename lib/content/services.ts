export type ServiceGroup = {
  title: string;
  items: string[];
};

export type ServicePillar = {
  slug: string;
  href: string;
  name: string;
  shortName: string;
  eyebrow: string;
  intro: string;
  teaser: string;
  groups: ServiceGroup[];
  ctaHeading: string;
  ctaSupporting: string;
  heroVariant: "finance" | "taxation" | "advisory" | "growth";
};

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    slug: "finance-services",
    href: "/finance-services",
    name: "Finance",
    shortName: "Finance",
    eyebrow: "01 — Finance",
    intro:
      "Practical financial planning and CFO-level support that turns your numbers into decisions you can act on.",
    teaser:
      "Budgeting, forecasting, dashboards, and Virtual CFO support for businesses that want to see further ahead.",
    groups: [
      {
        title: "Corporate Finance & FP&A",
        items: [
          "Budgeting & Forecasting",
          "Financial Planning & Analysis",
          "Cost Reduction Strategies",
          "Profitability Improvement",
          "MIS & Business Dashboards",
          "Cash Flow Management",
          "Strategic Decision Support",
        ],
      },
      {
        title: "Virtual CFO Services",
        items: [
          "Monthly Management Reporting",
          "Business Performance Review",
          "Finance Function Transformation",
          "Internal Financial Controls",
          "Working Capital Optimization",
          "Investor & Banker Support",
        ],
      },
      {
        title: "Accounting & Book Keeping",
        items: ["Maintaining Books of Accounts", "Financial Statements"],
      },
    ],
    ctaHeading: "Ready for financial clarity?",
    ctaSupporting:
      "Let's review your numbers and build a finance function that supports real decisions.",
    heroVariant: "finance",
  },
  {
    slug: "taxation-services",
    href: "/taxation-services",
    name: "Taxation Services",
    shortName: "Tax",
    eyebrow: "02 — Tax",
    intro:
      "Reliable, timely tax and GST compliance so filing deadlines never become a source of last-minute stress.",
    teaser:
      "Income tax, GST, and TDS handled with the same discipline as your core finances — timely and accurate.",
    groups: [
      {
        title: "Taxation Services",
        items: [
          "Income Tax Return Filing (Individuals, HUF, Business, Professionals)",
          "Tax Planning & Advisory",
          "Form 16 & Form 26AS Reconciliation",
          "Tax Notice Support",
          "Capital Gain Computation",
          "Salaried Employee Tax Consultation",
        ],
      },
      {
        title: "GST Services",
        items: [
          "GST Registration",
          "GST Return Filing",
          "GST Reconciliation",
          "GST Compliance Review",
          "GST Advisory Support",
        ],
      },
      {
        title: "TDS & Compliance",
        items: ["TDS Returns", "Responding to Tax Notices"],
      },
    ],
    ctaHeading: "Timely filing, peace of mind.",
    ctaSupporting: "Let us take care of your taxes, so you can focus on your growth.",
    heroVariant: "taxation",
  },
  {
    slug: "business-advisory-services",
    href: "/business-advisory-services",
    name: "Business Advisory",
    shortName: "Business Advisory",
    eyebrow: "03 — Business Advisory",
    intro:
      "A practical, outside perspective on how your business is really performing — and where it can improve.",
    teaser:
      "Business health checks and process improvement for owners who want an honest, practical read on performance.",
    groups: [
      {
        title: "Business Consulting",
        items: [
          "Business Health Check",
          "Process Improvement",
          "Profit Improvement Projects",
          "Startup Financial Advisory",
          "Cost Optimization Initiatives",
        ],
      },
    ],
    ctaHeading: "Not sure where the gaps are?",
    ctaSupporting: "A structured business health check is a practical place to start.",
    heroVariant: "advisory",
  },
  {
    slug: "business-growth-services",
    href: "/business-growth-services",
    name: "Business Growth",
    shortName: "Business Growth",
    eyebrow: "04 — Business Growth",
    intro:
      "Growth strategy and financial capability-building that align your team's decisions with long-term objectives.",
    teaser:
      "Growth strategy support paired with practical financial training for founders and finance teams.",
    groups: [
      {
        title: "Growth Strategy",
        items: ["Growth Strategy Support"],
      },
      {
        title: "Training & Capability Building",
        items: [
          "Advanced Excel for Finance",
          "Financial Intelligence with AI",
          "Power Query & Power BI",
          "Finance for Non-Finance Managers",
          "Budgeting & Cost Control Programs",
        ],
      },
    ],
    ctaHeading: "Ready to turn clarity into growth?",
    ctaSupporting: "Let's align your financial decisions with where the business is headed.",
    heroVariant: "growth",
  },
];

export function getPillarBySlug(slug: string): ServicePillar | undefined {
  return SERVICE_PILLARS.find((p) => p.slug === slug);
}
