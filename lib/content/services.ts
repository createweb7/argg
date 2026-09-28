export type ServiceGroupIcon =
  | "chart"
  | "receipt"
  | "percent"
  | "badge"
  | "shield"
  | "users"
  | "cap"
  | "clock"
  | "target"
  | "checkcircle";

export type ServiceGroup = {
  title: string;
  tagline?: string;
  description?: string;
  icon: ServiceGroupIcon;
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
  heroVariant: "virtual-cfo" | "taxation" | "consultancy" | "mayopi";
};

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    slug: "virtual-cfo-services",
    href: "/virtual-cfo-services",
    name: "Virtual CFO Services",
    shortName: "Virtual CFO",
    eyebrow: "Virtual CFO Services",
    intro:
      "Enterprise-level financial leadership for growing businesses — without the cost of a full-time CFO.",
    teaser:
      "Virtual CFO advisory, financial planning, and board-level reporting for businesses that want financial leadership on their terms.",
    groups: [
      {
        title: "Planning, Forecasting & Reporting",
        icon: "chart",
        tagline: "Enterprise-level financial expertise for growing businesses.",
        items: [
          "Financial Planning & Analysis — FP&A",
          "Budgeting & Forecasting",
          "Cash Flow Planning",
          "Financial MIS & Dashboard",
          "Cost & Profitability Analysis",
          "Variance Analysis",
          "Working Capital Management",
          "Financial KPI Development",
        ],
      },
      {
        title: "Strategic & Board-Level Advisory",
        icon: "users",
        items: [
          "Virtual CFO Services",
          "Management Decision Support",
          "Business Performance Review",
          "CXO-Level Finance Advisory",
          "Board / Management Reporting Support",
        ],
      },
    ],
    ctaHeading: "Ready for financial leadership on your terms?",
    ctaSupporting:
      "Let's talk about the CFO-level support your business needs to make faster, better-informed decisions.",
    heroVariant: "virtual-cfo",
  },
  {
    slug: "business-management-consultancy-services",
    href: "/business-management-consultancy-services",
    name: "Business & Management Consultancy Services",
    shortName: "Business & Management Consultancy",
    eyebrow: "Business & Management Consultancy Services",
    intro:
      "Corporate finance, independent director advisory, business registration, accounting, and growth consulting — practical financial and management support for every stage of your business.",
    teaser:
      "Corporate finance, business registration, accounting, and growth consulting brought together under one practical advisory relationship.",
    groups: [
      {
        title: "Corporate Finance & FP&A",
        icon: "chart",
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
        title: "Independent Director Advisory",
        icon: "shield",
        tagline: "Board-Ready Expertise. Independent Perspective. Responsible Governance.",
        description:
          "Our expert professionals are equipped to take up Independent Director roles, bringing strong expertise in Finance, Taxation, Risk Management, Corporate Governance and Strategic Decision-Making. ARGG Associates connects businesses with experienced professionals capable of contributing independent judgement, financial intelligence and strategic insight at the board level.",
        items: [
          "Board & Committee Participation",
          "Financial & Tax Oversight",
          "Risk & Internal Control Review",
          "Corporate Governance Advisory",
          "Strategic Business Perspective",
          "Compliance & Regulatory Oversight",
          "Independent & Objective Decision-Making",
          "Audit Committee & Finance Expertise",
          "Stakeholder & Management Advisory",
          "Board-Level Financial Analysis",
        ],
      },
      {
        title: "Business Registration & Compliance",
        icon: "badge",
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
        icon: "receipt",
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
      {
        title: "Financial & Management Consulting",
        icon: "target",
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
        icon: "cap",
        items: [
          "Advanced Excel for Finance",
          "Financial Intelligence with AI",
          "Power Query & Power BI",
          "Finance for Non-Finance Managers",
          "Budgeting & Cost Control Programs",
        ],
      },
    ],
    ctaHeading: "Ready to build a stronger business?",
    ctaSupporting:
      "Let's talk about the finance, compliance, and growth consulting your business needs, brought together in one relationship.",
    heroVariant: "consultancy",
  },
  {
    slug: "taxation-services",
    href: "/taxation-services",
    name: "Taxation Services",
    shortName: "Tax",
    eyebrow: "Taxation Services",
    intro:
      "Reliable, timely tax and GST compliance so filing deadlines never become a source of last-minute stress.",
    teaser:
      "Income tax, GST, and TDS handled with the same discipline as your core finances — timely and accurate.",
    groups: [
      {
        title: "Taxation Services",
        icon: "receipt",
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
        icon: "percent",
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
        icon: "checkcircle",
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
    slug: "mayopi-advisories",
    href: "/mayopi-advisories",
    name: "Mayopi Advisories",
    shortName: "Mayopi Advisories",
    eyebrow: "Mayopi Advisories",
    intro:
      "Income Tax, GST, ITAT & GSTAT, and Life, Term, Savings & Health Insurance advisory — in partnership with mayopi ADVISORIES.",
    teaser:
      "Tax Smart. Protected Better. Financially Prepared. — tax and insurance advisory from our partner, mayopi ADVISORIES.",
    groups: [
      {
        title: "Income Tax Advisory",
        icon: "receipt",
        tagline: "Accuracy + Compliance + Tax Efficiency",
        description:
          "Don't just file your return. Understand your tax. We help individuals and businesses navigate their income-tax responsibilities with greater clarity and accuracy. We provide complete guidelines to our clients.",
        items: [
          "Income Tax Return (ITR) preparation & filing",
          "ITR-1, ITR-2, ITR-3 & ITR-4 assistance",
          "Salary, House Property & Other Sources",
          "Capital Gains computation & reporting",
          "Business & Professional Income",
          "Tax-saving opportunities and deduction planning",
          "Notice & compliance assistance",
          "Advance Tax & tax-planning guidance",
          "Support for correcting discrepancies and reporting mismatches",
        ],
      },
      {
        title: "GST Advisory & Compliance",
        icon: "percent",
        tagline: "Right Reporting + Better Compliance + Reduced Risk",
        description:
          "GST compliance should not become a business burden. mayopi ADVISORIES supports businesses in managing their GST responsibilities with a structured and practical approach.",
        items: [
          "GST Registration assistance",
          "GSTR-1 & GSTR-3B filing support",
          "GST reconciliation & Input Tax Credit review",
          "GST compliance review",
          "E-invoice & e-way bill guidance",
          "GST notices & response assistance",
          "Registration amendments & cancellation support",
          "Annual GST compliance assistance",
          "Basic GST advisory for business transactions",
        ],
      },
      {
        title: "ITAT & GSTAT Advisory",
        icon: "shield",
        tagline: "Expert tax advisory for complex matters.",
        description:
          "Tax dispute? We help you navigate the next step. mayopi ADVISORIES provides expert advisory and litigation support for ITAT & GSTAT matters, including tax disputes, demand analysis, appeals, documentation and strategic coordination with authorised professionals.",
        items: [
          "Income Tax Appeals & ITAT Matters",
          "GST Appeals & GSTAT Matters",
          "Tax Demand & Dispute Resolution",
          "Appeal Strategy & Documentation",
          "Assessment & Order Review",
          "Tax Litigation Support & Professional Coordination",
          "Representation Support through Authorised Professionals",
        ],
      },
      {
        title: "Life Insurance Advisory",
        icon: "users",
        tagline: "Adequate Protection + Suitable Coverage + Long-Term Security",
        description:
          "Your income supports your family. Your protection should too. Life insurance is not merely a financial product — it is a mechanism to protect the financial future of the people who depend on you. We assist with understanding and evaluating suitable Life Insurance solutions rather than simply choosing a policy based on premium.",
        items: [
          "Income-based protection assessment",
          "Existing liabilities review",
          "Family responsibilities planning",
          "Children's education planning",
          "Lifestyle commitments",
          "Future financial goals",
          "Existing insurance coverage review",
        ],
      },
      {
        title: "Term Insurance",
        icon: "clock",
        tagline: "If your income stops, your family's financial plan shouldn't.",
        description:
          "Protect your income. Protect your family's future. A family's biggest financial asset is often the earning capacity of its primary income earner.",
        items: [
          "Appropriate life cover assessment",
          "Policy tenure considerations",
          "Premium affordability",
          "Existing coverage gaps",
          "Nominee considerations",
          "Major exclusions & policy conditions",
          "Liabilities & future goals impact on protection",
        ],
      },
      {
        title: "Savings & Regular Income Plans",
        icon: "chart",
        tagline: "Goal-Based Saving + Financial Discipline + Informed Choice",
        description:
          "Save with purpose. Plan with discipline. For clients looking beyond pure protection, we help evaluate suitable long-term savings-oriented insurance solutions.",
        items: [
          "Regular savings discipline",
          "Guaranteed or defined benefits, where applicable",
          "Maturity benefits",
          "Money-back / periodic benefit structures",
          "Long-term financial planning",
          "Goal-based savings",
          "Family-oriented financial planning",
        ],
      },
      {
        title: "Health & Medical Insurance",
        icon: "checkcircle",
        tagline: "Health Protection + Financial Protection + Family Security",
        description:
          "One medical emergency shouldn't become a financial emergency. Healthcare costs can significantly impact family finances. The right health-insurance coverage can provide an important layer of financial protection.",
        items: [
          "Individual health-insurance requirements",
          "Family / floater coverage",
          "Coverage adequacy & sum insured requirements",
          "Existing policy gaps & renewal considerations",
          "Waiting periods",
          "Major exclusions and conditions",
          "Cashless hospitalisation features",
          "Critical illness & additional protection options",
        ],
      },
    ],
    ctaHeading: "Your money deserves a strategy.",
    ctaSupporting:
      "Tax should not be an afterthought, and protection should not begin only after a crisis. Make informed decisions today for a more secure tomorrow.",
    heroVariant: "mayopi",
  },
];

export function getPillarBySlug(slug: string): ServicePillar | undefined {
  return SERVICE_PILLARS.find((p) => p.slug === slug);
}
