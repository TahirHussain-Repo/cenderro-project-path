import { useState, useEffect } from "react";
import cenderroIcon from "@/assets/cenderro-icon.png";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"loading" | "fading">("loading");

  useEffect(() => {
    const loadTimer = setTimeout(() => setPhase("fading"), 2000);
    const doneTimer = setTimeout(onComplete, 2600);
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
      <div className="loader-icon">
        <img
          src={cenderroIcon}
          alt="Cenderro"
          className="h-20 w-20"
        />
      </div>
      <p className="mt-6 loader-text font-display text-lg font-semibold tracking-tight text-foreground">
        Cenderro
      </p>
    </div>
  );
};

export default Loader;
