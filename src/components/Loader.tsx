import { useState, useEffect } from "react";
import CenderroLogo from "./CenderroLogo";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"loading" | "fading">("loading");

  useEffect(() => {
    const loadTimer = setTimeout(() => setPhase("fading"), 1800);
    const doneTimer = setTimeout(onComplete, 2400);
    return () => {
      clearTimeout(loadTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        phase === "fading" ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="animate-logo-spin text-foreground">
        <CenderroLogo size={72} />
      </div>
      <p className="mt-6 animate-fade-in font-display text-lg font-semibold tracking-tight text-foreground">
        Cenderro
      </p>
    </div>
  );
};

export default Loader;
