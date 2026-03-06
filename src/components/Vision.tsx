import { Hammer, LayoutList, BrainCircuit } from "lucide-react";
import { ZigzagMotif, ConcentricCircles, DotField, BlueprintCorner } from "./Decorations";

const futureItems = [
  { icon: Hammer, text: "Roofing & restoration workflows" },
  { icon: LayoutList, text: "Full construction lifecycle coordination" },
  { icon: BrainCircuit, text: "Operational intelligence & automation" },
];

const Vision = () => (
  <section id="vision" className="relative border-t border-border overflow-hidden">
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <ZigzagMotif className="absolute top-12 right-12 w-[220px] h-[80px] text-primary opacity-[0.05] -rotate-3" />
      <ConcentricCircles className="absolute -bottom-28 -right-28 w-[350px] h-[350px] text-primary opacity-[0.04]" rings={2} />
      <BlueprintCorner className="absolute top-6 left-6 w-[50px] h-[50px] text-primary opacity-[0.06]" />
      <DotField dots={[
        { top: "30%", left: "88%", size: "5px", opacity: "0.07" },
        { top: "65%", left: "4%", size: "4px", opacity: "0.09" },
      ]} />
      <div className="absolute top-[60%] right-0 w-[90px] h-px bg-primary opacity-[0.06]" />
    </div>
    <div className="container relative py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          More Than a Contractor
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Cenderro started in roofing, but it's built for all of construction. Our mission is to standardize the way projects move — making construction predictable instead of reactive, visible instead of uncertain, and structured instead of fragmented.
        </p>
        <div className="mt-10 space-y-4">
          {futureItems.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center gap-4 rounded-lg border border-border bg-card p-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <Icon size={18} />
              </div>
              <span className="text-sm font-medium text-foreground">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Vision;
