"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Bot, Zap, ArrowRight } from "lucide-react";
import { useSegment } from "@/components/segment-context";

export function SiteIntroExperience() {
  const { notifyIntroFinished } = useSegment();
  const [mounted, setMounted] = useState(false);
  const [phase, setPhase] = useState<"enter" | "active" | "exit" | "done">("enter");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Only run on client
    setMounted(true);

    // Show the intro experience smoothly
    const t0 = setTimeout(() => setPhase("active"), 80);

    // Progress bar loader
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 4;
      });
    }, 45);

    // Auto-dismiss after 2.4s
    const t1 = setTimeout(() => {
      handleComplete();
    }, 2400);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearInterval(interval);
    };
  }, []);

  const handleComplete = () => {
    if (phase === "done" || phase === "exit") return;
    setPhase("exit");
    sessionStorage.setItem("dinamis_wow_intro_seen", "true");
    // Trigger the Hero entrance animations right as the WOW intro overlay dissolves
    setTimeout(() => {
      notifyIntroFinished();
    }, 350);
    setTimeout(() => {
      setPhase("done");
    }, 700);
  };

  if (!mounted || phase === "done") return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cargando Dinamis AI"
      className={`fixed inset-0 z-[120] flex items-center justify-center overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none ${
        phase === "exit"
          ? "opacity-0 scale-105 pointer-events-none filter blur-md"
          : "opacity-100 scale-100"
      }`}
      style={{
        background: "radial-gradient(circle at center, #1b130e 0%, #0d0a08 60%, #050403 100%)",
      }}
    >
      {/* 1. Dynamic Background Light Beams / Shimmer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glowing Orange/Cyan Nebulas */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] sm:w-[750px] sm:h-[750px] bg-gradient-to-tr from-[#da551d]/25 via-[#ff8b1e]/20 to-[#00f0ff]/15 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-[#ff8b1e]/30 animate-ping opacity-20 pointer-events-none" />

        {/* Cyber Holographic Orbit Rings */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-dashed border-[#ff8b1e]/35 pointer-events-none animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full border border-dashed border-[#ffdfc5]/15 pointer-events-none animate-spin"
          style={{ animationDuration: "35s", animationDirection: "reverse" }}
        />
      </div>

      {/* 2. Central WOW Hero Stage */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 max-w-md w-full text-center">
        {/* Hologram Floating Robot with Original Eyes Animation */}
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-6 flex items-center justify-center">
          {/* Energy Ground Halo */}
          <div className="absolute bottom-2 w-32 h-6 rounded-full bg-[#da551d] filter blur-xl opacity-70 animate-pulse" />

          {/* Floating Robot Body & Eyes */}
          <div className="relative w-full h-full animate-float-bot flex items-center justify-center">
            {/* Clean Visor Body */}
            <Image
              src="/images/robot-body.png"
              alt="Dinamis AI Core"
              width={180}
              height={180}
              priority
              className="object-contain filter drop-shadow-[0_20px_35px_rgba(255,139,30,0.45)]"
            />

            {/* Glowing Eyes that look straight and blink with power */}
            <div className="absolute inset-0 pointer-events-none">
              <Image
                src="/images/robot-eyes.png"
                alt="Ojos Dinamis Bot"
                width={180}
                height={180}
                priority
                className="w-full h-full object-contain filter drop-shadow-[0_0_16px_#00f0ff] animate-pulse"
              />
            </div>
          </div>
        </div>

        {/* Wordmark Logo Reveal */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-[#ffdfc5] text-xs font-semibold tracking-wider uppercase mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#ff8b1e] animate-spin" style={{ animationDuration: "4s" }} />
            <span>Iniciando Entorno Metodológico</span>
          </div>

          <div className="flex items-baseline justify-center select-none">
            <span
              className="text-4xl sm:text-5xl font-extrabold tracking-[-0.04em] text-white"
              style={{ fontFamily: "var(--font-logo)" }}
            >
              Dinamis
            </span>
            <span
              className="text-4xl sm:text-5xl font-black tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-r from-[#ff8b1e] via-[#da551d] to-[#ff8b1e] drop-shadow-[0_4px_20px_rgba(255,139,30,0.6)]"
              style={{ fontFamily: "var(--font-logo)" }}
            >
              AI
            </span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff8b1e] ml-1.5 mb-2 shadow-[0_0_12px_#ff8b1e] animate-ping" />
          </div>

          <p className="text-xs sm:text-sm text-[#ffdfc5]/75 font-medium mt-2 max-w-xs mx-auto">
            15+ Años de Metodología de Grupo Dinamis • Inteligencia Artificial
          </p>
        </div>

        {/* Futuristic Cyber Progress Bar */}
        <div className="w-full max-w-[280px] mt-2 mb-6">
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden p-[1px] border border-white/10">
            <div
              className="h-full bg-gradient-to-r from-[#ff8b1e] via-[#da551d] to-[#00f0ff] rounded-full transition-all duration-75 shadow-[0_0_12px_#ff8b1e]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[10px] text-white/50 font-mono mt-1.5 px-0.5">
            <span>SISTEMA 2.0</span>
            <span>{Math.min(100, progress)}%</span>
          </div>
        </div>

        {/* Skip / Enter Action Button */}
        <button
          onClick={handleComplete}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 text-white text-xs font-bold tracking-wide border border-white/20 backdrop-blur-md transition-all cursor-pointer group shadow-lg"
        >
          <span>Ingresar a la Plataforma</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#ff8b1e] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
