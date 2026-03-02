import { Hammer, LayoutList, BrainCircuit } from "lucide-react";

const futureItems = [
  { icon: Hammer, text: "Roofing & restoration workflows" },
  { icon: LayoutList, text: "Full construction lifecycle coordination" },
  { icon: BrainCircuit, text: "Operational intelligence & automation" },
];

const Vision = () => (
  <section id="vision" className="border-t border-border">
    <div className="container py-20 md:py-28">
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
