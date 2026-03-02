import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

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
    <section id="contact" className="border-t border-border">
      <div className="container py-20 md:py-28">
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
