import { ServicePillarPage } from "@/components/services/ServicePillarPage";
import { getPillarBySlug } from "@/lib/content/services";
import { buildMetadata } from "@/lib/metadata";

const pillar = getPillarBySlug("business-management-consultancy-services")!;

export const metadata = buildMetadata({
  title: "Business & Management Consultancy Services",
  description:
    "Corporate finance, independent director advisory, business registration, accounting, and growth consulting from ARGG Associates.",
  path: "/business-management-consultancy-services",
});

export default function BusinessManagementConsultancyServicesPage() {
  return <ServicePillarPage pillar={pillar} />;
}
