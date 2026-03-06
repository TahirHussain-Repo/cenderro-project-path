import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CrossGrid, DotField, ZigzagMotif } from "./Decorations";

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
  <section id="faq" className="relative bg-secondary overflow-hidden">
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <CrossGrid className="absolute top-6 left-6 w-[100px] h-[100px] text-primary opacity-[0.04]" />
      <ZigzagMotif className="absolute bottom-10 right-10 w-[160px] h-[60px] text-primary opacity-[0.04] rotate-2" />
      <DotField dots={[
        { top: "25%", left: "92%", size: "4px", opacity: "0.07" },
        { top: "60%", left: "3%", size: "5px", opacity: "0.06" },
        { top: "85%", left: "50%", size: "3px", opacity: "0.08" },
      ]} />
      <div className="absolute top-[40%] left-0 w-[70px] h-px bg-primary opacity-[0.05]" />
    </div>
    <div className="container relative py-20 md:py-28">
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
