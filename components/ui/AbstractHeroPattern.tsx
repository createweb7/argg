const VARIANTS = {
  home: { rotate: 0, x1: 60, y1: 10, x2: 100, y2: 90 },
  about: { rotate: 180, x1: 0, y1: 20, x2: 55, y2: 100 },
  services: { rotate: 90, x1: 20, y1: 0, x2: 90, y2: 70 },
  finance: { rotate: 45, x1: 10, y1: 10, x2: 95, y2: 60 },
  taxation: { rotate: -30, x1: 30, y1: 0, x2: 100, y2: 80 },
  advisory: { rotate: 20, x1: 0, y1: 40, x2: 80, y2: 100 },
  growth: { rotate: -15, x1: 5, y1: 60, x2: 90, y2: 5 },
  mayopi: { rotate: 35, x1: 15, y1: 5, x2: 85, y2: 90 },
  contact: { rotate: 60, x1: 40, y1: 0, x2: 100, y2: 100 },
  enquiries: { rotate: -45, x1: 0, y1: 0, x2: 100, y2: 65 },
} as const;

export type HeroPatternVariant = keyof typeof VARIANTS;

/**
 * Shared no-photography hero background: navy base, a faint fine grid, and a
 * few thin gold strokes suggesting architectural/financial-curve abstraction.
 * Every page hero uses this with a different `variant` so the visual system
 * reads as one language rather than a repeated template.
 */
export function AbstractHeroPattern({ variant = "home" }: { variant?: HeroPatternVariant }) {
  const v = VARIANTS[variant];

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-navy">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-gold) 1px, transparent 1px), linear-gradient(to bottom, var(--color-gold) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g style={{ transformOrigin: "50% 50%", transform: `rotate(${v.rotate}deg)` }}>
          <line
            x1={v.x1}
            y1={v.y1}
            x2={v.x2}
            y2={v.y2}
            stroke="var(--color-gold)"
            strokeWidth="0.15"
            opacity="0.5"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1={v.x1 + 8}
            y1={v.y1 + 6}
            x2={v.x2 - 4}
            y2={v.y2 - 10}
            stroke="var(--color-gold)"
            strokeWidth="0.1"
            opacity="0.3"
            vectorEffect="non-scaling-stroke"
          />
          <circle
            cx={(v.x1 + v.x2) / 2}
            cy={(v.y1 + v.y2) / 2}
            r="28"
            fill="none"
            stroke="var(--color-gold)"
            strokeWidth="0.08"
            opacity="0.25"
            vectorEffect="non-scaling-stroke"
          />
        </g>
      </svg>
      <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-transparent" />
      <div className="absolute inset-0 bg-linear-to-b from-ink/40 via-transparent to-transparent" />
    </div>
  );
}
