"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Building2,
  Rocket,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  X,
  ShieldCheck,
  Brain,
} from "lucide-react";
import { useSegment, AudienceSegment } from "@/components/segment-context";
import { trackEvent } from "@/components/analytics";

export function FullscreenRobotGate() {
  const { isGateOpen, closeGate, setSegment } = useSegment();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isExiting, setIsExiting] = useState(false);
  const [selectedAudience, setSelectedAudience] = useState<AudienceSegment | null>(null);
  const [speechText, setSpeechText] = useState(
    "¡Hola! Soy tu asistente de Dinamis AI. ¿Qué te gustaría entrenar hoy?"
  );
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse 3D parallax tracking
  useEffect(() => {
    if (!isGateOpen) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isGateOpen]);

  // Lock body scroll while fullscreen gate is open
  useEffect(() => {
    if (isGateOpen && !isExiting) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isGateOpen, isExiting]);

  if (!isGateOpen) return null;

  const handleSelect = (audience: AudienceSegment) => {
    setSelectedAudience(audience);
    trackEvent("fullscreen_gate_select", { audience });

    if (audience === "empresa") {
      setSpeechText("¡Excelente! Personalizando la plataforma para Empresas y Líderes...");
    } else {
      setSpeechText("¡Fantástico! Personalizando tu entrenamiento para triunfar en entrevistas...");
    }

    // Trigger smooth exit transition
    setIsExiting(true);
    setTimeout(() => {
      setSegment(audience);
      closeGate();
      setIsExiting(false);
    }, 600);
  };

  const handleSkip = () => {
    trackEvent("fullscreen_gate_skip");
    setIsExiting(true);
    setTimeout(() => {
      closeGate();
      setIsExiting(false);
    }, 400);
  };

  // 3D rotation styles based on cursor
  const botRotateX = -mousePos.y * 12;
  const botRotateY = mousePos.x * 16;
  const speechRotateX = -mousePos.y * 8;
  const speechRotateY = mousePos.x * 10;

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-[100] flex flex-col justify-between overflow-y-auto bg-gradient-to-b from-[#fff8f3] via-[#ffdfc5]/60 to-[#fff8f3] transition-all duration-700 ease-out select-none ${
        isExiting
          ? "opacity-0 scale-105 pointer-events-none filter blur-sm"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Background Animated Ambient Lights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-b from-[#ff8b1e]/25 via-[#da551d]/15 to-transparent rounded-full blur-3xl animate-pulse-glow"></div>
        {/* Subtle Tech Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffdfc5_1px,transparent_1px),linear-gradient(to_bottom,#ffdfc5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-40"></div>
      </div>

      {/* Top Header Bar */}
      <header className="relative z-20 w-full max-w-6xl mx-auto px-6 pt-6 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#ff8b1e] via-[#da551d] to-[#61100d] p-[2px] shadow-md">
            <div className="w-full h-full bg-[#fffbf9] rounded-[9px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#ff8b1e]" />
            </div>
          </div>
          <div>
            <span className="text-lg font-extrabold text-[#111111] tracking-tight">
              Dinamis <span className="text-[#ff8b1e]">AI</span>
            </span>
            <span className="block text-[9px] font-bold text-[#61100d] uppercase tracking-wider">
              By Grupo Dinamis
            </span>
          </div>
        </div>

        {/* Skip / Close Button */}
        <button
          onClick={handleSkip}
          type="button"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#61100d] hover:text-[#ff8b1e] bg-white/80 hover:bg-white border border-[#f1dfd3] px-3.5 py-1.5 rounded-full shadow-sm transition-all cursor-pointer"
        >
          <span>Omitir e ingresar</span>
          <X className="w-3.5 h-3.5" />
        </button>
      </header>

      {/* Main 3D Robot & Choice Arena */}
      <main className="relative z-10 w-full max-w-5xl mx-auto px-4 py-6 sm:py-8 flex flex-col items-center justify-center flex-grow">
        {/* Floating 3D Robot Stage */}
        <div className="relative flex flex-col items-center justify-center mb-8 perspective-1000">
          {/* Interactive Speech Bubble */}
          <div
            className="mb-4 max-w-md text-center preserve-3d transition-transform duration-200"
            style={{
              transform: `rotateX(${speechRotateX}deg) rotateY(${speechRotateY}deg) translateZ(25px)`,
            }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-[#ff8b1e]/30 shadow-sm text-[11px] font-extrabold text-[#da551d] uppercase tracking-wider mb-2">
              <Brain className="w-3.5 h-3.5 text-[#ff8b1e]" />
              <span>Dinamis Bot • Coach Virtual 3D</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/95 border-2 border-[#ffdfc5] shadow-[0_12px_30px_rgba(255,139,30,0.15)] backdrop-blur-md relative">
              <p className="text-sm sm:text-base font-bold text-[#111111] leading-snug">
                {speechText}
              </p>
              {/* Little speech arrow pointing down */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-2 border-r-2 border-[#ffdfc5] transform rotate-45"></div>
            </div>
          </div>

          {/* 3D Holographic Pedestal / Ring beneath the robot */}
          <div className="relative w-48 h-48 flex items-center justify-center">
            {/* Outer Hologram Energy Ring */}
            <div className="absolute w-44 h-44 rounded-full border-2 border-dashed border-[#ff8b1e]/50 animate-holo-spin pointer-events-none"></div>
            {/* Inner Glow Disc */}
            <div className="absolute w-36 h-36 rounded-full bg-gradient-to-r from-[#ff8b1e]/30 to-[#da551d]/30 blur-md animate-pulse-glow pointer-events-none"></div>

            {/* The 3D Floating Robot Canvas Rig */}
            <div
              className="relative w-44 h-44 sm:w-52 sm:h-52 preserve-3d transition-transform duration-150 ease-out"
              style={{
                transform: `rotateX(${botRotateX}deg) rotateY(${botRotateY}deg) translateZ(40px)`,
              }}
            >
              <div className="w-full h-full animate-float-bot flex items-center justify-center">
                <Image
                  src="/images/dinamis-bot.png"
                  alt="Robot 3D Dinamis AI"
                  width={208}
                  height={208}
                  priority
                  className="object-contain filter drop-shadow-[0_16px_24px_rgba(218,85,29,0.35)] transition-transform hover:scale-105 duration-300"
                />
              </div>
            </div>

            {/* Interactive Dynamic Floor Shadow */}
            <div className="absolute -bottom-4 w-28 h-6 rounded-full bg-[#61100d] filter blur-md animate-shadow-scale pointer-events-none"></div>
          </div>
        </div>

        {/* Dual Interactive 3D Choice Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl">
          {/* Card 1: Soy Empresa */}
          <button
            type="button"
            onClick={() => handleSelect("empresa")}
            className={`text-left p-6 sm:p-7 rounded-3xl border-2 transition-all duration-300 relative group overflow-hidden cursor-pointer bg-white/95 backdrop-blur-md shadow-[0_12px_36px_rgba(97,16,13,0.06)] hover:shadow-[0_16px_45px_rgba(255,139,30,0.22)] hover:scale-[1.02] hover:-translate-y-1 ${
              selectedAudience === "empresa"
                ? "border-[#ff8b1e] ring-4 ring-[#ff8b1e]/20"
                : "border-[#f1dfd3] hover:border-[#ff8b1e]"
            }`}
          >
            {/* Top Gradient Banner */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#ff8b1e] to-[#da551d]"></div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#ff8b1e] to-[#da551d] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#ff8b1e]/30 group-hover:scale-110 transition-transform">
                <Building2 className="w-7 h-7" />
              </div>

              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-[#da551d] uppercase tracking-wider">
                    Organizaciones & RRHH
                  </span>
                  <span className="text-xs text-[#ff8b1e] group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#111111] group-hover:text-[#da551d] transition-colors">
                  Soy Empresa
                </h3>
                <p className="text-xs sm:text-sm text-[#4a423d] leading-relaxed">
                  Coaching de liderazgo para mandos medios y filtros de selección STAR para escalar tus búsquedas.
                </p>

                <div className="pt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-[#fff8f3] border border-[#ffdfc5] text-[#61100d] px-2.5 py-0.5 rounded-md">
                    <CheckCircle2 className="w-3 h-3 text-[#ff8b1e]" /> Mandos Medios
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-[#fff8f3] border border-[#ffdfc5] text-[#61100d] px-2.5 py-0.5 rounded-md">
                    <CheckCircle2 className="w-3 h-3 text-[#ff8b1e]" /> Filtros STAR
                  </span>
                </div>
              </div>
            </div>
          </button>

          {/* Card 2: Soy Persona */}
          <button
            type="button"
            onClick={() => handleSelect("persona")}
            className={`text-left p-6 sm:p-7 rounded-3xl border-2 transition-all duration-300 relative group overflow-hidden cursor-pointer bg-white/95 backdrop-blur-md shadow-[0_12px_36px_rgba(97,16,13,0.06)] hover:shadow-[0_16px_45px_rgba(255,139,30,0.22)] hover:scale-[1.02] hover:-translate-y-1 ${
              selectedAudience === "persona"
                ? "border-[#ff8b1e] ring-4 ring-[#ff8b1e]/20"
                : "border-[#f1dfd3] hover:border-[#ff8b1e]"
            }`}
          >
            {/* Top Gradient Banner */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#da551d] to-[#61100d]"></div>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#da551d] to-[#61100d] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#da551d]/30 group-hover:scale-110 transition-transform">
                <Rocket className="w-7 h-7" />
              </div>

              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-[#da551d] uppercase tracking-wider">
                    Profesionales & Candidatos
                  </span>
                  <span className="text-xs text-[#ff8b1e] group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#111111] group-hover:text-[#da551d] transition-colors">
                  Soy Persona
                </h3>
                <p className="text-xs sm:text-sm text-[#4a423d] leading-relaxed">
                  Superá entrevistas difíciles, dominá el método STAR, vencé nervios y conquistá el trabajo que merecés.
                </p>

                <div className="pt-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-[#fff8f3] border border-[#ffdfc5] text-[#61100d] px-2.5 py-0.5 rounded-md">
                    <CheckCircle2 className="w-3 h-3 text-[#ff8b1e]" /> Triunfo Laboral
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-[#fff8f3] border border-[#ffdfc5] text-[#61100d] px-2.5 py-0.5 rounded-md">
                    <CheckCircle2 className="w-3 h-3 text-[#ff8b1e]" /> Práctica Sin Nervios
                  </span>
                </div>
              </div>
            </div>
          </button>
        </div>
      </main>

      {/* Bottom Footer Note */}
      <footer className="relative z-20 w-full max-w-5xl mx-auto px-6 pb-6 text-center">
        <p className="text-xs text-[#6b625b] font-medium flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#ff8b1e]" />
          <span>
            Basado en 15+ años de metodología corporativa de Grupo Dinamis • Podrás cambiar de perfil en cualquier momento desde el menú
          </span>
        </p>
      </footer>
    </div>
  );
}
