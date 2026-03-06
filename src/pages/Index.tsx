import { useState, useCallback } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Vision from "@/components/Vision";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const handleComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <Loader onComplete={handleComplete} />}
      <Header />
      <main>
        <Hero />
        <About />
        <Problem />
        <Solution />
        <HowItWorks />
        <Vision />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default Index;
