import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Vision from "@/components/Vision";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      <Problem />
      <Solution />
      <HowItWorks />
      <Vision />
      <FAQ />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Index;
