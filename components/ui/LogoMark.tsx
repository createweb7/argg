import Image from "next/image";
import { COMPANY } from "@/lib/constants";

export function LogoMark({ size = 56, chip = false }: { size?: number; chip?: boolean }) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center ${chip ? "rounded-full bg-cream p-1.5" : ""}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/images/logo.webp"
        alt={`${COMPANY.name} logo`}
        width={size}
        height={size}
        priority
        className="h-full w-full object-contain"
      />
    </span>
  );
}
