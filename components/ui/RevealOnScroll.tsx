"use client";

import { type ElementType, type ReactNode } from "react";
import { useInViewOnce } from "@/lib/useInViewOnce";

export function RevealOnScroll({
  children,
  as: As = "div",
  delayMs = 0,
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  delayMs?: number;
  className?: string;
}) {
  const { ref, visible } = useInViewOnce<HTMLDivElement>();

  return (
    <As
      ref={ref}
      data-visible={visible}
      className={`reveal ${className}`}
      style={{ transitionDelay: visible ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </As>
  );
}
