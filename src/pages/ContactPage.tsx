import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import CenderroLogo from "@/components/CenderroLogo";
import {
  GridBackground,
  ConcentricCircles,
  ZigzagMotif,
  BlueprintCorner,
  DiagonalLines,
  DotField,
  ArchitecturalBracket,
} from "@/components/Decorations";

const ContactPage = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! We'll be in touch.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Full-page decorative layer */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <GridBackground opacity={0.025} />
        <ConcentricCircles className="absolute -top-40 -right-40 w-[700px] h-[700px] text-primary opacity-[0.06]" rings={4} />
        <ConcentricCircles className="absolute -bottom-32 -left-32 w-[500px] h-[500px] text-primary opacity-[0.04]" rings={3} />
        <DiagonalLines className="absolute top-0 left-0 w-full h-full text-primary opacity-[0.03]" />
        <ZigzagMotif className="absolute bottom-20 right-12 w-[280px] h-[100px] text-primary opacity-[0.05]" />
        <ZigzagMotif className="absolute top-32 left-8 w-[180px] h-[60px] text-primary opacity-[0.04] rotate-3" />
        <BlueprintCorner className="absolute top-8 left-8 w-[80px] h-[80px] text-primary opacity-[0.07]" />
        <BlueprintCorner className="absolute bottom-8 right-8 w-[80px] h-[80px] text-primary opacity-[0.07] rotate-180" />
        <ArchitecturalBracket className="absolute top-[20%] right-[8%] w-[35px] h-[140px] text-primary opacity-[0.05]" />
        <ArchitecturalBracket className="absolute bottom-[25%] left-[6%] w-[30px] h-[120px] text-primary opacity-[0.04] rotate-180" />
        <DotField dots={[
          { top: "10%", left: "20%", size: "6px", opacity: "0.10" },
          { top: "30%", left: "85%", size: "5px", opacity: "0.08" },
          { top: "55%", left: "8%", size: "7px", opacity: "0.07" },
          { top: "75%", left: "70%", size: "4px", opacity: "0.09" },
          { top: "20%", left: "60%", size: "3px", opacity: "0.12" },
          { top: "85%", left: "35%", size: "5px", opacity: "0.06" },
          { top: "45%", left: "92%", size: "4px", opacity: "0.08" },
        ]} />
        {/* Horizontal accents */}
        <div className="absolute top-[25%] left-0 w-[120px] h-px bg-primary opacity-[0.07]" />
        <div className="absolute top-[25%] right-0 w-[120px] h-px bg-primary opacity-[0.07]" />
        <div className="absolute bottom-[30%] left-[8%] w-[80px] h-px bg-primary opacity-[0.05]" />
        <div className="absolute bottom-[30%] right-[8%] w-[80px] h-px bg-primary opacity-[0.05]" />
      </div>

      {/* Top bar */}
      <header className="relative z-10 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-foreground">
            <CenderroLogo size={28} />
            Cenderro
          </Link>
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link to="/">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-16 md:py-24">
        <div className="w-full max-w-lg">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Join the Journey
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Ready to bring structure to your construction operations? Let's talk.
            </p>
          </div>

          <div className="mt-10 rounded-xl border border-border bg-card/80 p-8 shadow-lg backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Input placeholder="First name" required aria-label="First name" className="bg-background" />
                <Input placeholder="Last name" required aria-label="Last name" className="bg-background" />
              </div>
              <Input type="email" placeholder="Email" required aria-label="Email" className="bg-background" />
              <Input placeholder="Company (optional)" aria-label="Company" className="bg-background" />
              <Textarea placeholder="Tell us about your project or what you're looking for..." rows={4} required aria-label="Message" className="bg-background" />
              <p className="text-xs text-muted-foreground">
                We respect your privacy. Your information will never be shared.
              </p>
              <Button type="submit" disabled={sending} size="lg" className="w-full">
                {sending ? "Sending..." : "Send Message"}
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full">
                <a href="mailto:hello@cenderro.com">Or email us directly</a>
              </Button>
            </form>
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            By submitting, you agree to our{" "}
            <Link to="/terms" className="underline hover:text-foreground">Terms of Service</Link>{" "}
            and{" "}
            <Link to="/privacy" className="underline hover:text-foreground">Privacy Policy</Link>.
          </p>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
