const steps = [
  { num: "01", title: "Capture the project intent", desc: "Lead, request, or scope — every project starts with clarity." },
  { num: "02", title: "Turn it into a structured journey", desc: "Transform intent into a trackable project with defined milestones." },
  { num: "03", title: "Guide execution with milestones", desc: "Keep teams aligned with clear checkpoints across the construction lifecycle." },
  { num: "04", title: "Close out with confidence", desc: "Complete projects with full documentation and operational insights." },
];

const HowItWorks = () => (
  <section id="how" className="bg-secondary">
    <div className="container py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          The Cenderro Path
        </h2>
      </div>
      <div className="mx-auto mt-12 grid max-w-2xl gap-0">
        {steps.map(({ num, title, desc }, i) => (
          <div key={i} className="relative flex gap-6 pb-10 last:pb-0">
            {/* Vertical line */}
            {i < steps.length - 1 && (
              <div className="absolute left-5 top-10 h-full w-px bg-border" aria-hidden="true" />
            )}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary bg-primary/10 font-display text-sm font-bold text-primary">
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
  </section>
);

export default HowItWorks;
