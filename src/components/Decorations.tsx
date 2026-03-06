/** Reusable decorative SVG elements for section backgrounds */

export const GridBackground = ({ opacity = 0.03 }: { opacity?: number }) => (
  <div
    className="absolute inset-0"
    style={{
      opacity,
      backgroundImage:
        "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }}
    aria-hidden="true"
  />
);

export const ConcentricCircles = ({
  className,
  rings = 3,
}: {
  className?: string;
  rings?: number;
}) => (
  <svg className={className} viewBox="0 0 400 400" fill="none" aria-hidden="true">
    {Array.from({ length: rings }, (_, i) => (
      <circle
        key={i}
        cx="200"
        cy="200"
        r={180 - i * 50}
        stroke="currentColor"
        strokeWidth={1.5 - i * 0.3}
      />
    ))}
  </svg>
);

export const DiagonalLines = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 1200 800"
    fill="none"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <line x1="0" y1="800" x2="1200" y2="200" stroke="currentColor" strokeWidth="1" />
    <line x1="0" y1="700" x2="1200" y2="100" stroke="currentColor" strokeWidth="0.5" />
  </svg>
);

export const ZigzagMotif = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 320 120" fill="none" aria-hidden="true">
    <path
      d="M 0 90 L 50 30 L 100 70 L 150 20 L 200 70 L 250 30 L 320 90"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CrossGrid = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" aria-hidden="true">
    {[0, 50, 100, 150, 200].map((v) => (
      <g key={v}>
        <line x1={v} y1="0" x2={v} y2="200" stroke="currentColor" strokeWidth="0.5" />
        <line x1="0" y1={v} x2="200" y2={v} stroke="currentColor" strokeWidth="0.5" />
      </g>
    ))}
  </svg>
);

export const DotField = ({
  dots,
}: {
  dots: { top: string; left: string; size: string; opacity: string }[];
}) => (
  <>
    {dots.map((d, i) => (
      <div
        key={i}
        className={`absolute rounded-full bg-primary`}
        style={{ top: d.top, left: d.left, width: d.size, height: d.size, opacity: d.opacity }}
        aria-hidden="true"
      />
    ))}
  </>
);

export const AngledStripe = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 600 200" fill="none" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0 200 L600 0 L600 40 L0 200Z" fill="currentColor" />
  </svg>
);

export const BlueprintCorner = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <path d="M0 0 L120 0" stroke="currentColor" strokeWidth="1.5" />
    <path d="M0 0 L0 120" stroke="currentColor" strokeWidth="1.5" />
    <path d="M0 20 L20 20 L20 0" stroke="currentColor" strokeWidth="1" />
    <circle cx="0" cy="0" r="4" fill="currentColor" />
  </svg>
);

export const ArchitecturalBracket = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 200" fill="none" aria-hidden="true">
    <path d="M30 0 L30 70 L50 100 L30 130 L30 200" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="30" cy="0" r="3" fill="currentColor" />
    <circle cx="30" cy="200" r="3" fill="currentColor" />
  </svg>
);
