import Image from "next/image";
import { COMPANY } from "@/lib/constants";

export function LogoMark({
  heightClass = "h-10",
  chip = false,
}: {
  /** Tailwind height class(es) controlling the rendered size, e.g. "h-10 md:h-15". Width follows automatically from the image's real aspect ratio. */
  heightClass?: string;
  chip?: boolean;
}) {
  const img = (
    <Image
      src="/images/logo.webp"
      alt={`${COMPANY.name} logo`}
      width={1000}
      height={269}
      priority
      className={`w-auto object-contain ${heightClass}`}
    />
  );

  if (chip) {
    return (
      <span className="inline-flex shrink-0 items-center rounded-md bg-cream px-3 py-2">{img}</span>
    );
  }

  return img;
}
