import { ServicePillarPage } from "@/components/services/ServicePillarPage";
import { getPillarBySlug } from "@/lib/content/services";
import { buildMetadata } from "@/lib/metadata";

const pillar = getPillarBySlug("taxation-services")!;

export const metadata = buildMetadata({
  title: "Taxation Services",
  description:
    "Income tax return filing, tax planning, GST registration and returns, and TDS compliance support from ARGG Associates.",
  path: "/taxation-services",
});

export default function TaxationServicesPage() {
  return <ServicePillarPage pillar={pillar} />;
}
