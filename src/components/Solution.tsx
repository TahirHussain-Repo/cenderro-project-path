import { Eye, GitMerge, TrendingUp, ArrowRight } from "lucide-react";
import { ConcentricCircles, CrossGrid, DotField, ArchitecturalBracket } from "./Decorations";

const steps = ["Planning", "Approval", "Materials", "Scheduling", "Execution", "Completion"];

const pillars = [
  { icon: Eye, title: "Visibility", desc: "Know what's happening instantly across every project." },
  { icon: GitMerge, title: "Coordination", desc: "Fewer handoffs, less friction, smoother operations." },
  { icon: TrendingUp, title: "Momentum", desc: "Projects move forward by design, not by accident." },
];

const Solution = () => (
  <section className="relative border-t border-border overflow-hidden">
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <ConcentricCircles className="absolute -bottom-32 -left-32 w-[500px] h-[500px] text-primary opacity-[0.04]" rings={3} />
      <CrossGrid className="absolute top-8 right-8 w-[140px] h-[140px] text-primary opacity-[0.04]" />
      <ArchitecturalBracket className="absolute bottom-12 right-[8%] w-[30px] h-[120px] text-primary opacity-[0.05]" />
      <DotField dots={[
        { top: "10%", left: "50%", size: "4px", opacity: "0.08" },
        { top: "85%", left: "15%", size: "6px", opacity: "0.06" },
        { top: "30%", left: "95%", size: "5px", opacity: "0.07" },
      ]} />
      <div className="absolute top-[45%] left-0 w-[100px] h-px bg-primary opacity-[0.06]" />
    </div>
    <div className="container relative py-20 md:py-28">
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
