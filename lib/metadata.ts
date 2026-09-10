import type { Metadata } from "next";
import { COMPANY, SITE_URL } from "@/lib/constants";

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${COMPANY.name}`,
      description,
      url,
      siteName: COMPANY.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${title} | ${COMPANY.name}`,
      description,
    },
  };
}
