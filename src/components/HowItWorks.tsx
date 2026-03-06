import { GridBackground, ArchitecturalBracket, DotField, BlueprintCorner } from "./Decorations";

const steps = [
  { num: "01", title: "Capture the project intent", desc: "Lead, request, or scope — every project starts with clarity." },
  { num: "02", title: "Turn it into a structured journey", desc: "Transform intent into a trackable project with defined milestones." },
  { num: "03", title: "Guide execution with milestones", desc: "Keep teams aligned with clear checkpoints across the construction lifecycle." },
  { num: "04", title: "Close out with confidence", desc: "Complete projects with full documentation and operational insights." },
];

const HowItWorks = () => (
  <section id="how" className="relative bg-secondary overflow-hidden">
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <GridBackground opacity={0.02} />
      <ArchitecturalBracket className="absolute top-16 left-[5%] w-[30px] h-[120px] text-primary opacity-[0.05]" />
      <BlueprintCorner className="absolute bottom-8 right-8 w-[60px] h-[60px] text-primary opacity-[0.06] rotate-180" />
      <DotField dots={[
        { top: "18%", left: "88%", size: "5px", opacity: "0.07" },
        { top: "55%", left: "3%", size: "4px", opacity: "0.08" },
        { top: "80%", left: "70%", size: "6px", opacity: "0.06" },
      ]} />
      <div className="absolute top-[35%] right-0 w-[90px] h-px bg-primary opacity-[0.06]" />
    </div>
    <div className="container relative py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          The Cenderro Path
        </h2>
      </div>

      <div className="relative mx-auto mt-16 max-w-4xl">
        {/* Winding SVG path */}
        <svg
          className="absolute inset-0 h-full w-full pointer-events-none"
          viewBox="0 0 800 600"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M 100 60 C 300 60, 700 60, 700 150 C 700 240, 100 240, 100 330 C 100 420, 700 420, 700 510 C 700 560, 500 570, 400 570"
            stroke="hsl(var(--primary) / 0.15)"
            strokeWidth="3"
            strokeDasharray="12 8"
            fill="none"
          />
          <path
            d="M 100 60 C 300 60, 700 60, 700 150 C 700 240, 100 240, 100 330 C 100 420, 700 420, 700 510 C 700 560, 500 570, 400 570"
            stroke="hsl(var(--primary) / 0.06)"
            strokeWidth="40"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Step cards alternating left/right */}
        <div className="relative grid grid-cols-1 gap-12 md:gap-16">
          {steps.map(({ num, title, desc }, i) => (
            <div
              key={i}
              className={`relative flex items-start gap-5 md:w-[55%] ${
                i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
              }`}
            >
              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background font-display text-sm font-bold text-primary shadow-md">
                {num}
              </div>
              <div className="pt-1">
                <h3 className="font-display text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
