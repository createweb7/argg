export type CredibilityPillar = {
  title: string;
  description: string;
};

// Verbatim from ARGG Associates' own "Why Choose Us?" list in the flyers —
// do not add items beyond what's verified there.
export const WHY_CHOOSE_US: CredibilityPillar[] = [
  {
    title: "Professional Expertise",
    description: "Backed by CMA and Company Secretary qualifications, not generalist advice.",
  },
  {
    title: "Practical & Customized Solutions",
    description: "Recommendations shaped around your numbers and goals, not a template.",
  },
  {
    title: "Timely & Accurate Deliverables",
    description: "Filings, reports, and reviews delivered when you need them, done right.",
  },
  {
    title: "Trust, Transparency & Confidentiality",
    description: "Your financial information is handled with discretion and care.",
  },
  {
    title: "Focus on Business Growth",
    description: "Every engagement is judged by whether it moves your business forward.",
  },
];
