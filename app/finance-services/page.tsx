import { ServicePillarPage } from "@/components/services/ServicePillarPage";
import { getPillarBySlug } from "@/lib/content/services";
import { buildMetadata } from "@/lib/metadata";

const pillar = getPillarBySlug("finance-services")!;

export const metadata = buildMetadata({
  title: "Finance Services",
  description:
    "Corporate finance and FP&A from ARGG Associates — budgeting, forecasting, cost reduction, dashboards, and financial control.",
  path: "/finance-services",
});

export default function FinanceServicesPage() {
  return <ServicePillarPage pillar={pillar} />;
}
