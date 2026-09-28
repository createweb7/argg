import { IconLinkedIn, IconFacebook, IconInstagram, IconYoutube } from "@/components/icons";

export type SocialLinksData = {
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
};

const ICONS = {
  linkedin: { Icon: IconLinkedIn, label: "LinkedIn" },
  facebook: { Icon: IconFacebook, label: "Facebook" },
  instagram: { Icon: IconInstagram, label: "Instagram" },
  youtube: { Icon: IconYoutube, label: "YouTube" },
} as const;

export function SocialLinks({
  links,
  tone = "light",
  label,
}: {
  links: SocialLinksData;
  tone?: "light" | "dark";
  label?: string;
}) {
  const borderColor = tone === "dark" ? "border-cream/20 text-cream/70" : "border-ink/15 text-ink/60";
  const hoverColor = tone === "dark" ? "hover:border-gold hover:text-gold" : "hover:border-gold-deep hover:text-gold-deep";

  return (
    <div className="flex items-center gap-3" aria-label={label}>
      {(Object.keys(ICONS) as Array<keyof typeof ICONS>).map((key) => {
        const href = links[key];
        if (!href) return null;
        const { Icon, label: iconLabel } = ICONS[key];
        return (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={iconLabel}
            className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors ${borderColor} ${hoverColor}`}
          >
            <Icon className="h-4 w-4" />
          </a>
        );
      })}
    </div>
  );
}
