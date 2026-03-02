import { Eye, GitMerge, TrendingUp, ArrowRight } from "lucide-react";

const steps = ["Planning", "Approval", "Materials", "Scheduling", "Execution", "Completion"];

const pillars = [
  { icon: Eye, title: "Real-Time Awareness", desc: "Every stakeholder sees the same live picture — no more asking 'where are we?'" },
  { icon: GitMerge, title: "Seamless Handoffs", desc: "Approvals, materials, and crews flow into each other without manual relay." },
  { icon: TrendingUp, title: "Built-In Momentum", desc: "Automated checkpoints keep projects on pace so nothing stalls silently." },
];

const Solution = () => (
  <section className="border-t border-border">
    <div className="container py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Flow for Every Project
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A structured construction workflow that guides every project from start to finish.
        </p>
      </div>

      {/* Journey diagram */}
      <div className="mx-auto mt-12 max-w-3xl">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center">
              <div className="rounded-full border border-primary bg-primary/5 px-4 py-2 text-xs font-semibold text-primary sm:text-sm">
                {step}
              </div>
              {i < steps.length - 1 && (
                <ArrowRight size={14} className="mx-1 hidden text-muted-foreground md:block" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Pillars */}
      <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-3">
        {pillars.map(({ icon: Icon, title, desc }, i) => (
          <div key={i} className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Icon size={24} />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Solution;
