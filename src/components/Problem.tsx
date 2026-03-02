import { Unplug, Clock, EyeOff, MessageCircleWarning } from "lucide-react";

const problems = [
  { icon: Unplug, title: "Disconnected tools slow progress" },
  { icon: Clock, title: "Manual coordination creates delays" },
  { icon: EyeOff, title: "Low visibility causes uncertainty" },
  { icon: MessageCircleWarning, title: "Teams lose time chasing updates" },
];

const Problem = () => (
  <section className="bg-secondary">
    <div className="container py-20 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          The Industry Moves Without Direction
        </h2>
      </div>
      <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
        {problems.map(({ icon: Icon, title }, i) => (
          <div
            key={i}
            className="flex items-start gap-4 rounded-lg border border-border bg-card p-6"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Icon size={20} />
            </div>
            <p className="text-sm font-medium leading-snug text-foreground">{title}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Problem;
