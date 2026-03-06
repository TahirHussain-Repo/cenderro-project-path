import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  GridBackground,
  ConcentricCircles,
  DiagonalLines,
  ZigzagMotif,
  DotField,
  BlueprintCorner,
  ArchitecturalBracket,
} from "./Decorations";

const trustItems = ["Built for clarity", "Designed for speed", "Made to scale"];

const heroDots = [
  { top: "12%", left: "15%", size: "8px", opacity: "0.12" },
  { top: "25%", left: "82%", size: "6px", opacity: "0.10" },
  { top: "70%", left: "40%", size: "4px", opacity: "0.15" },
  { top: "60%", left: "10%", size: "6px", opacity: "0.08" },
  { top: "35%", left: "90%", size: "5px", opacity: "0.09" },
  { top: "80%", left: "75%", size: "7px", opacity: "0.07" },
  { top: "15%", left: "55%", size: "3px", opacity: "0.14" },
  { top: "50%", left: "5%", size: "5px", opacity: "0.11" },
];

const Hero = () => (
  <section id="path" className="relative overflow-hidden">
    <GridBackground opacity={0.03} />

    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Large arc — top right */}
      <ConcentricCircles className="absolute -top-32 -right-32 w-[600px] h-[600px] text-primary opacity-[0.07]" rings={4} />

      {/* Small arc — bottom left */}
      <ConcentricCircles className="absolute -bottom-20 -left-20 w-[400px] h-[400px] text-primary opacity-[0.05]" rings={2} />

      {/* Mid arc — center left */}
      <ConcentricCircles className="absolute top-1/2 -left-40 w-[300px] h-[300px] text-primary opacity-[0.04]" rings={3} />

      <DiagonalLines className="absolute top-0 left-0 w-full h-full text-primary opacity-[0.04]" />

      <ZigzagMotif className="absolute bottom-16 right-8 md:right-24 w-[320px] h-[120px] text-primary opacity-[0.06]" />

      {/* Second zigzag — top left */}
      <ZigzagMotif className="absolute top-12 left-4 md:left-16 w-[200px] h-[80px] text-primary opacity-[0.04] rotate-6" />

      {/* Blueprint corners */}
      <BlueprintCorner className="absolute top-6 left-6 w-[80px] h-[80px] text-primary opacity-[0.08]" />
      <BlueprintCorner className="absolute bottom-6 right-6 w-[80px] h-[80px] text-primary opacity-[0.08] rotate-180" />

      {/* Architectural bracket accent */}
      <ArchitecturalBracket className="absolute top-20 right-[12%] w-[40px] h-[160px] text-primary opacity-[0.06]" />

      {/* Horizontal rule accents */}
      <div className="absolute top-[30%] left-0 w-[120px] h-px bg-primary opacity-[0.08]" />
      <div className="absolute top-[30%] right-0 w-[120px] h-px bg-primary opacity-[0.08]" />
      <div className="absolute bottom-[25%] left-[10%] w-[80px] h-px bg-primary opacity-[0.06]" />

      <DotField dots={heroDots} />
    </div>

    <div className="container relative py-20 md:py-32 lg:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          Construction Needs a Path.{" "}
          <span className="text-primary">We're Building It.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Cenderro is revolutionizing construction by turning complex projects into clear, trackable journeys — from planning to completion — across roofing, restoration, and beyond.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="gap-2 px-8">
            <a href="#how">
              Explore the Path
              <ArrowRight size={16} />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8">
            <Link to="/contact">Talk to Us</Link>
          </Button>
        </div>
      </div>

      {/* Trust bar */}
      <div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-12">
        {trustItems.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            {item}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
