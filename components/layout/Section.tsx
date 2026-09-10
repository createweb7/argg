import { type ReactNode } from "react";
import { Container } from "./Container";

const TONE_CLASSES = {
  light: "bg-paper text-ink",
  cream: "bg-cream text-ink",
  dark: "bg-ink text-cream",
} as const;

const PADDING_CLASSES = {
  default: "pt-14 pb-12 md:pt-28 md:pb-28",
  tight: "py-8 md:py-14",
  // Only for a page's first section when it sits directly under the fixed
  // header with no hero above it (privacy policy, terms) — needs enough
  // top clearance to not be hidden behind the header on mobile.
  legal: "pt-24 pb-12 md:pt-28 md:pb-28",
} as const;

export function Section({
  children,
  tone = "light",
  padding = "default",
  id,
  className = "",
  containerClassName = "",
}: {
  children: ReactNode;
  tone?: keyof typeof TONE_CLASSES;
  padding?: keyof typeof PADDING_CLASSES;
  id?: string;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={`${PADDING_CLASSES[padding]} ${TONE_CLASSES[tone]} ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
