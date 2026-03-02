import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is Cenderro?",
    a: "Cenderro is a construction innovation company building tools to bring structure, visibility, and momentum to construction operations — starting with roofing and restoration.",
  },
  {
    q: "Is Cenderro a construction company or a platform?",
    a: "Cenderro is both. We operate in construction and build the operational infrastructure to make projects move with clarity and coordination.",
  },
  {
    q: "Who is it for?",
    a: "Cenderro is built for construction companies, project managers, and operations teams who want better visibility and coordination across the project lifecycle.",
  },
  {
    q: "What types of projects does it support?",
    a: "Currently focused on roofing and restoration workflows, Cenderro is designed to scale across all construction verticals and the full project lifecycle.",
  },
  {
    q: "How do we get started?",
    a: "Reach out through our contact form or request a demo. We'll walk you through the Cenderro path and how it fits your operations.",
  },
];

const FAQ = () => (
  <section id="faq" className="bg-secondary">
    <div className="container py-20 md:py-28">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map(({ q, a }, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-sm font-medium">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQ;
