import { type ElementType, type ReactNode } from "react";

export function Container({
  children,
  as: As = "div",
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}) {
  return <As className={`mx-auto w-full max-w-[1280px] px-6 md:px-10 ${className}`}>{children}</As>;
}
