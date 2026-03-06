import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import CenderroLogo from "@/components/CenderroLogo";
import {
  GridBackground,
  ConcentricCircles,
  BlueprintCorner,
  DotField,
  ArchitecturalBracket,
} from "@/components/Decorations";

const PrivacyPage = () => (
  <div className="relative min-h-screen overflow-hidden bg-background">
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <GridBackground opacity={0.02} />
      <ConcentricCircles className="absolute -bottom-28 -left-28 w-[450px] h-[450px] text-primary opacity-[0.04]" rings={3} />
      <BlueprintCorner className="absolute bottom-8 right-8 w-[60px] h-[60px] text-primary opacity-[0.06] rotate-180" />
      <ArchitecturalBracket className="absolute top-[30%] right-[5%] w-[30px] h-[120px] text-primary opacity-[0.04]" />
      <DotField dots={[
        { top: "20%", left: "5%", size: "5px", opacity: "0.07" },
        { top: "50%", left: "92%", size: "4px", opacity: "0.06" },
        { top: "80%", left: "20%", size: "3px", opacity: "0.08" },
      ]} />
    </div>

    <header className="relative z-10 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-foreground">
          <CenderroLogo size={28} />
          Cenderro
        </Link>
        <Button asChild variant="ghost" size="sm" className="gap-2">
          <Link to="/"><ArrowLeft size={16} /> Back to Home</Link>
        </Button>
      </div>
    </header>

    <main className="relative z-10 container py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: March 6, 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">1. Information We Collect</h2>
            <p className="mt-2">
              We collect information you provide directly, such as your name, email address, company name, and messages submitted through our contact form. We also collect usage data including browser type, device information, and pages visited.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">2. How We Use Your Information</h2>
            <p className="mt-2">
              We use collected information to: provide and improve our services, respond to inquiries, send relevant communications, analyze usage patterns, and maintain the security of our platform.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">3. Information Sharing</h2>
            <p className="mt-2">
              We do not sell your personal information. We may share information with trusted service providers who assist in operating our platform, subject to confidentiality agreements. We may also disclose information when required by law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">4. Data Security</h2>
            <p className="mt-2">
              We implement industry-standard security measures to protect your information, including encryption in transit and at rest. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">5. Cookies & Tracking</h2>
            <p className="mt-2">
              We use cookies and similar technologies to enhance your experience, analyze trends, and administer the site. You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">6. Your Rights</h2>
            <p className="mt-2">
              You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time. To exercise these rights, contact us at the email below.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">7. Data Retention</h2>
            <p className="mt-2">
              We retain personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">8. Changes to This Policy</h2>
            <p className="mt-2">
              We may update this Privacy Policy periodically. We will notify you of significant changes by posting a notice on our website or sending you an email.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">9. Contact</h2>
            <p className="mt-2">
              For privacy-related inquiries, contact us at{" "}
              <a href="mailto:hello@cenderro.com" className="text-primary underline hover:text-foreground">hello@cenderro.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  </div>
);

export default PrivacyPage;
