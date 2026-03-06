import { ConcentricCircles, DotField, BlueprintCorner } from "./Decorations";

const About = () => (
  <section id="why" className="relative border-t border-border overflow-hidden">
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <ConcentricCircles className="absolute -top-24 -right-24 w-[350px] h-[350px] text-primary opacity-[0.04]" rings={3} />
      <BlueprintCorner className="absolute bottom-8 left-8 w-[60px] h-[60px] text-primary opacity-[0.06]" />
      <DotField dots={[
        { top: "20%", left: "85%", size: "5px", opacity: "0.08" },
        { top: "70%", left: "90%", size: "4px", opacity: "0.10" },
        { top: "50%", left: "5%", size: "6px", opacity: "0.06" },
      ]} />
      <div className="absolute top-1/2 right-0 w-[100px] h-px bg-primary opacity-[0.06]" />
    </div>
    <div className="container relative py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          A New Direction for Construction
        </h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
          <p>
            Inspired by the Spanish word <em>Sendero</em> — meaning path, journey, or roadmap — Cenderro exists to bring direction to an industry that often moves without visibility.
          </p>
          <p>
            Construction has been stuck with fragmented tools, manual coordination, and reactive decision-making. Cenderro introduces structure: a defined path where projects move forward with clarity, alignment, and momentum.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
