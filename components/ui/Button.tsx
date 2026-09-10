import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost-light" | "ghost-dark";
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonAsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

const VARIANT_CLASSES: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary:
    "bg-gold text-ink hover:bg-gold-deep focus-visible:outline-gold",
  secondary:
    "bg-transparent text-ink border border-ink/25 hover:border-gold hover:text-ink focus-visible:outline-gold",
  "ghost-light":
    "bg-transparent text-cream border border-cream/40 hover:border-gold hover:text-gold focus-visible:outline-gold",
  "ghost-dark":
    "bg-transparent text-ink border border-ink/30 hover:border-gold-deep hover:text-gold-deep focus-visible:outline-gold-deep",
};

const BASE =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide uppercase transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "primary", className = "" } = props;
  const classes = `${BASE} ${VARIANT_CLASSES[variant]} ${className}`;

  if ("href" in props) {
    const { href, target, rel } = props;
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { variant: _v, className: _c, children: _ch, ...buttonProps } = props;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
