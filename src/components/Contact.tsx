import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { GridBackground, ConcentricCircles, DotField } from "./Decorations";

const Contact = () => {
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
    <section id="contact" className="relative border-t border-border overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <GridBackground opacity={0.02} />
        <ConcentricCircles className="absolute -top-20 -left-20 w-[300px] h-[300px] text-primary opacity-[0.04]" rings={2} />
        <DotField dots={[
          { top: "20%", left: "90%", size: "5px", opacity: "0.07" },
          { top: "80%", left: "8%", size: "4px", opacity: "0.08" },
        ]} />
        <div className="absolute bottom-[20%] right-0 w-[80px] h-px bg-primary opacity-[0.06]" />
      </div>
      <div className="container relative py-20 md:py-28">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Join the Journey
          </h2>
          <p className="mt-4 text-muted-foreground">
            Ready to bring structure to your construction operations? Let's talk.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-10 flex max-w-md flex-col gap-4"
        >
          <Input placeholder="Name" required aria-label="Name" />
          <Input type="email" placeholder="Email" required aria-label="Email" />
          <Textarea placeholder="Message" rows={4} required aria-label="Message" />
          <p className="text-xs text-muted-foreground">
            We respect your privacy. Your information will never be shared.
          </p>
          <Button type="submit" disabled={sending} className="w-full">
            {sending ? "Sending..." : "Send Message"}
          </Button>
          <Button asChild variant="outline" className="w-full">
            <a href="mailto:hello@cenderro.com">Request a Demo</a>
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
