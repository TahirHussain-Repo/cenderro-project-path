import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const trustItems = ["Built for clarity", "Designed for speed", "Made to scale"];

const Hero = () => (
  <section id="path" className="relative overflow-hidden">
    {/* Subtle grid background */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
      backgroundSize: "60px 60px"
    }} aria-hidden="true" />

    {/* Decorative architectural lines */}
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Large arc — top right */}
      <svg className="absolute -top-32 -right-32 w-[600px] h-[600px] text-primary opacity-[0.07]" viewBox="0 0 600 600" fill="none">
        <circle cx="300" cy="300" r="280" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="300" cy="300" r="220" stroke="currentColor" strokeWidth="1" />
        <circle cx="300" cy="300" r="160" stroke="currentColor" strokeWidth="0.75" />
      </svg>

      {/* Small arc — bottom left */}
      <svg className="absolute -bottom-20 -left-20 w-[400px] h-[400px] text-primary opacity-[0.05]" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Diagonal line */}
      <svg className="absolute top-0 left-0 w-full h-full text-primary opacity-[0.04]" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="none">
        <line x1="0" y1="800" x2="1200" y2="200" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="700" x2="1200" y2="100" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      {/* Zigzag motif echoing the logo */}
      <svg className="absolute bottom-16 right-8 md:right-24 w-[320px] h-[120px] text-primary opacity-[0.06]" viewBox="0 0 320 120" fill="none">
        <path d="M 0 90 L 50 30 L 100 70 L 150 20 L 200 70 L 250 30 L 320 90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      {/* Floating dots */}
      <div className="absolute top-20 left-[15%] h-2 w-2 rounded-full bg-primary opacity-[0.12]" />
      <div className="absolute top-40 right-[20%] h-1.5 w-1.5 rounded-full bg-primary opacity-[0.10]" />
      <div className="absolute bottom-32 left-[40%] h-1 w-1 rounded-full bg-primary opacity-[0.15]" />
      <div className="absolute top-[60%] left-[10%] h-1.5 w-1.5 rounded-full bg-primary opacity-[0.08]" />
    </div>

    <div className="container relative py-20 md:py-32 lg:py-40">
      <div className="mx-auto max-w-3xl text-center">
        {/* Small badge */}
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Now in early access
        </div>

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
