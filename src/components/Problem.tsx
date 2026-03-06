import { Unplug, Clock, EyeOff, MessageCircleWarning } from "lucide-react";
import { DiagonalLines, ZigzagMotif, DotField } from "./Decorations";

const problems = [
  { icon: Unplug, title: "Disconnected tools slow progress" },
  { icon: Clock, title: "Manual coordination creates delays" },
  { icon: EyeOff, title: "Low visibility causes uncertainty" },
  { icon: MessageCircleWarning, title: "Teams lose time chasing updates" },
];

const Problem = () => (
  <section className="relative bg-secondary overflow-hidden">
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <DiagonalLines className="absolute top-0 left-0 w-full h-full text-primary opacity-[0.03]" />
      <ZigzagMotif className="absolute bottom-8 left-8 w-[180px] h-[60px] text-primary opacity-[0.05]" />
      <DotField dots={[
        { top: "15%", left: "8%", size: "5px", opacity: "0.07" },
        { top: "75%", left: "88%", size: "6px", opacity: "0.09" },
        { top: "45%", left: "92%", size: "4px", opacity: "0.06" },
      ]} />
      <div className="absolute top-[20%] right-0 w-[80px] h-px bg-primary opacity-[0.07]" />
      <div className="absolute bottom-[30%] left-0 w-[60px] h-px bg-primary opacity-[0.05]" />
    </div>
    <div className="container relative py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          The Industry Moves Without Direction
        </h2>
      </div>
      <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
        {problems.map(({ icon: Icon, title }, i) => (
          <div
            key={i}
            className="flex items-start gap-4 rounded-lg border border-border bg-card p-6"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Icon size={20} />
            </div>
            <p className="text-sm font-medium leading-snug text-foreground">{title}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Problem;
