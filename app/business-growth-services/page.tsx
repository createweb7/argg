import { ServicePillarPage } from "@/components/services/ServicePillarPage";
import { getPillarBySlug } from "@/lib/content/services";
import { buildMetadata } from "@/lib/metadata";

const pillar = getPillarBySlug("business-growth-services")!;

export const metadata = buildMetadata({
  title: "Business Growth Services",
  description:
    "Growth strategy support and financial capability training — Advanced Excel, Power BI, and finance for non-finance managers — from ARGG Associates.",
  path: "/business-growth-services",
});

export default function BusinessGrowthServicesPage() {
  return <ServicePillarPage pillar={pillar} />;
}
