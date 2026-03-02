import { Button } from "@/components/ui/button";
import { Eye, Zap, ArrowRight } from "lucide-react";

const trustItems = ["Built for clarity", "Designed for speed", "Made to scale"];

const Hero = () => (
  <section id="path" className="relative overflow-hidden">
    {/* Subtle grid background */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
      backgroundSize: "60px 60px"
    }} aria-hidden="true" />

    <div className="container relative py-20 md:py-32 lg:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          Construction Needs a Path.{" "}
          <span className="text-primary">We're Building It.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          From the first lead to the final sign-off, Cenderro gives construction teams a single, structured workflow — replacing scattered tools with one clear operational path.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="gap-2 px-8">
            <a href="#how">
              Explore the Path
              <ArrowRight size={16} />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8">
            <a href="#contact">Talk to Us</a>
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
