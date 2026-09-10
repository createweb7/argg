import { ServiceRow } from "./ServiceRow";
import type { ServicePillar } from "@/lib/content/services";

export function ServicePillarBlock({ pillar }: { pillar: ServicePillar }) {
  return (
    <div>
      {pillar.groups.map((group, index) => (
        <ServiceRow key={group.title} group={group} index={index} />
      ))}
    </div>
  );
}
