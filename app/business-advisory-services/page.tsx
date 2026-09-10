import { ServicePillarPage } from "@/components/services/ServicePillarPage";
import { getPillarBySlug } from "@/lib/content/services";
import { buildMetadata } from "@/lib/metadata";

const pillar = getPillarBySlug("business-advisory-services")!;

export const metadata = buildMetadata({
  title: "Business Advisory Services",
  description:
    "Business health checks, process improvement, and startup financial advisory from ARGG Associates.",
  path: "/business-advisory-services",
});

export default function BusinessAdvisoryServicesPage() {
  return <ServicePillarPage pillar={pillar} />;
}
