import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import CenderroLogo from "@/components/CenderroLogo";
import {
  GridBackground,
  ConcentricCircles,
  BlueprintCorner,
  DotField,
  ZigzagMotif,
} from "@/components/Decorations";

const TermsPage = () => (
  <div className="relative min-h-screen overflow-hidden bg-background">
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <GridBackground opacity={0.02} />
      <ConcentricCircles className="absolute -top-32 -right-32 w-[500px] h-[500px] text-primary opacity-[0.04]" rings={3} />
      <BlueprintCorner className="absolute top-8 left-8 w-[60px] h-[60px] text-primary opacity-[0.06]" />
      <ZigzagMotif className="absolute bottom-16 right-12 w-[200px] h-[70px] text-primary opacity-[0.04]" />
      <DotField dots={[
        { top: "15%", left: "90%", size: "5px", opacity: "0.07" },
        { top: "60%", left: "5%", size: "4px", opacity: "0.06" },
        { top: "85%", left: "50%", size: "3px", opacity: "0.08" },
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
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: March 6, 2026</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p className="mt-2">
              By accessing or using Cenderro's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">2. Description of Service</h2>
            <p className="mt-2">
              Cenderro provides construction project management and coordination tools designed to bring structure, visibility, and momentum to construction operations. Our services may include web-based applications, APIs, and related support.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">3. User Accounts</h2>
            <p className="mt-2">
              When you create an account, you are responsible for maintaining the confidentiality of your credentials and for all activities under your account. You agree to provide accurate and complete information and to update it as needed.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">4. Acceptable Use</h2>
            <p className="mt-2">
              You agree not to misuse Cenderro's services, including but not limited to: attempting unauthorized access, interfering with service operations, transmitting malicious code, or using the service for unlawful purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">5. Intellectual Property</h2>
            <p className="mt-2">
              All content, trademarks, and intellectual property on the Cenderro platform are owned by or licensed to Cenderro. You may not copy, modify, distribute, or create derivative works without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">6. Limitation of Liability</h2>
            <p className="mt-2">
              Cenderro shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service. Our total liability shall not exceed the amount paid by you in the twelve months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">7. Termination</h2>
            <p className="mt-2">
              We reserve the right to suspend or terminate your access to our services at any time for violation of these terms or for any other reason at our discretion, with or without notice.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">8. Changes to Terms</h2>
            <p className="mt-2">
              We may update these terms from time to time. Continued use of the service after changes constitutes acceptance of the revised terms. We will notify users of material changes via email or through the platform.
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg font-semibold text-foreground">9. Contact</h2>
            <p className="mt-2">
              For questions about these terms, contact us at{" "}
              <a href="mailto:hello@cenderro.com" className="text-primary underline hover:text-foreground">hello@cenderro.com</a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  </div>
);

export default TermsPage;
