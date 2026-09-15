export type ServiceGroup = {
  title: string;
  tagline?: string;
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
      "Practical financial planning that turns your numbers into decisions you can act on.",
    teaser:
      "Budgeting, forecasting, cost reduction, and dashboards for businesses that want to see further ahead.",
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
          "Income Tax Return Filing — Individuals, HUF, Business & Professionals",
          "Form 16 & Form 26AS Reconciliation",
          "AIS & TIS Reconciliation",
          "Capital Gains Computation",
          "Advance Tax Computation & Advisory",
          "Tax Planning & Tax Optimization",
          "Tax Notice Response & Representation Support",
          "Salaried Employee Tax Consultation",
          "Business & Professional Tax Advisory",
        ],
      },
      {
        title: "GST Services",
        items: [
          "GST Registration",
          "GST Returns Filing",
          "GST Reconciliation",
          "GST Compliance Review",
          "GST Advisory Support",
          "GST Audit / Reconciliation Support",
          "GST Notice & Query Response Support",
        ],
      },
      {
        title: "TDS & Compliance",
        items: [
          "TDS Returns",
          "TDS Reconciliation",
          "TDS Calculation & Compliance",
          "Form 16 / 16A Support",
          "TDS Notice & Default Resolution",
          "TDS Refund / Correction Support",
          "TDS Applicability Advisory",
          "Payroll Tax Compliance",
          "Statutory Compliance Review",
        ],
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
      "Virtual CFO advisory, business registration and compliance, and accounting support — practical financial leadership for growing businesses.",
    teaser:
      "Virtual CFO advisory, business registration, and accounting support for businesses that want financial leadership without the overhead.",
    groups: [
      {
        title: "Virtual CFO & Finance Advisory",
        tagline:
          "Enterprise-level financial expertise for growing businesses — without the cost of a full-time CFO.",
        items: [
          "Virtual CFO Services",
          "Financial Planning & Analysis — FP&A",
          "Budgeting & Forecasting",
          "Cash Flow Planning",
          "Financial MIS & Dashboard",
          "Cost & Profitability Analysis",
          "Variance Analysis",
          "Working Capital Management",
          "Management Decision Support",
          "Business Performance Review",
          "Financial KPI Development",
          "CXO-Level Finance Advisory",
          "Board / Management Reporting Support",
        ],
      },
      {
        title: "Business Registration & Compliance",
        items: [
          "MSME / Udyam Registration",
          "GST Registration",
          "Professional Tax Registration",
          "Business Setup Advisory",
          "PAN / TAN Support",
          "FSSAI Registration Support",
          "Startup & Business Registration Support",
          "Annual Compliance Support",
          "ROC / MCA Compliance Coordination",
          "Business Compliance Health Check",
        ],
      },
      {
        title: "Accounting & Bookkeeping Services",
        tagline: "Accurate Books. Better Decisions. Stronger Businesses.",
        items: [
          "Bookkeeping & Accounting Services",
          "Monthly / Quarterly Financial Statements",
          "Accounts Payable & Receivable Management",
          "Bank Reconciliation",
          "Ledger Scrutiny & Review",
          "Month-End Closing Support",
          "MIS Reporting",
          "Cash Flow Monitoring",
          "Expense & Cost Tracking",
          "Management Reporting",
          "Accounting Process Review",
        ],
      },
    ],
    ctaHeading: "Ready for financial leadership on your terms?",
    ctaSupporting:
      "Let's talk about the CFO-level support, compliance, and bookkeeping your business needs.",
    heroVariant: "advisory",
  },
  {
    slug: "business-growth-services",
    href: "/business-growth-services",
    name: "Business Growth",
    shortName: "Business Growth",
    eyebrow: "04 — Business Growth",
    intro:
      "Financial and management consulting, capability-building, and insurance advisory that align your team's decisions with long-term objectives.",
    teaser:
      "Financial consulting and practical financial training for founders and finance teams.",
    groups: [
      {
        title: "Financial & Management Consulting",
        items: [
          "Financial Feasibility Analysis",
          "Business Financial Planning",
          "Cost Reduction & Cost Optimization",
          "Profitability Improvement",
          "Working Capital Optimization",
          "Budgeting & Forecasting",
          "Business Performance Analysis",
          "Management Decision Support",
          "Financial Risk Assessment",
          "Internal Control Review",
          "Process Improvement",
          "Business MIS Design",
        ],
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
      {
        title: "Insurance Advisory",
        tagline: "In partnership with Mayopi Advisories.",
        items: ["Full service details coming soon."],
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
