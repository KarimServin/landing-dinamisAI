"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Sparkles, Zap, Radio } from "lucide-react";
import { useSegment } from "@/components/segment-context";

interface SectionDef {
  id: string;
  side: "left";
  topVh: number;
  badge: string;
  empresaMsg: string;
  personaMsg: string;
}

// Sections where the companion accompanies the user on the left
const ACTIVE_SECTIONS: SectionDef[] = [
  {
    id: "simulador",
    side: "left",
    topVh: 28,
    badge: "Simulador STAR",
    empresaMsg: "Mirá cómo evalúa respuestas por turno en vivo",
    personaMsg: "Practicá tu entrevista por voz o texto",
  },
  {
    id: "coaching",
    side: "left",
    topVh: 28,
    badge: "Coach Ejecutivo",
    empresaMsg: "Entrenamiento seguro en conversaciones críticas",
    personaMsg: "Feedback cualitativo y cuantitativo 1 al 10",
  },
  {
    id: "metodologia",
    side: "left",
    topVh: 28,
    badge: "Metodología Dinamis",
    empresaMsg: "Ciencia del comportamiento aplicada a IA",
    personaMsg: "Rigor profesional probado en LATAM",
  },
  {
    id: "comparativa",
    side: "left",
    topVh: 28,
    badge: "Dinamis vs GenAI",
    empresaMsg: "No rompe personaje ni da halagos vacíos",
    personaMsg: "Criterios reales de evaluación de talento",
  },
  {
    id: "precios",
    side: "left",
    topVh: 28,
    badge: "Planes Claros",
    empresaMsg: "Escalable desde 1 puesto hasta toda tu empresa",
    personaMsg: "Diagnóstico inicial 100% gratuito",
  },
  {
    id: "faq",
    side: "left",
    topVh: 28,
    badge: "Dudas Clave",
    empresaMsg: "Seguridad y privacidad para tu organización",
    personaMsg: "Todo listo para tu próxima postulación",
  },
  {
    id: "cta",
    side: "left",
    topVh: 30,
    badge: "Diagnóstico Gratis",
    empresaMsg: "Comenzá tu prueba con tu equipo",
    personaMsg: "¡Conquistá el puesto que merecés!",
  },
];

export function SingleRobotCompanion() {
  const { segment, isIntroFinished } = useSegment();
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [isDashing, setIsDashing] = useState(false);
  const prevSectionRef = useRef<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(1280);
  const [windowHeight, setWindowHeight] = useState(800);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateDimensions = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Track mouse parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Trigger kinetic jet propulsion flare whenever active section changes
  useEffect(() => {
    if (activeSectionId && prevSectionRef.current && prevSectionRef.current !== activeSectionId) {
      setIsDashing(true);
      const timer = setTimeout(() => setIsDashing(false), 520);
      return () => clearTimeout(timer);
    }
    prevSectionRef.current = activeSectionId;
  }, [activeSectionId]);

  // Discrete Section Detection (Saltos entre secciones al scrollear)
  useEffect(() => {
    if (!isIntroFinished) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // El robot aparece recién a partir de la 3ra sección (#simulador)
      const firstSectionEl = document.getElementById(ACTIVE_SECTIONS[0].id);
      if (firstSectionEl) {
        const firstRect = firstSectionEl.getBoundingClientRect();
        if (firstRect.top > window.innerHeight * 0.75) {
          setActiveSectionId(null);
          return;
        }
      } else if (scrollY < 650) {
        setActiveSectionId(null);
        return;
      }

      // Check which section spans across the reading line (38% from top of viewport)
      const readingLine = window.innerHeight * 0.38;
      let detectedId: string | null = null;

      for (const sec of ACTIVE_SECTIONS) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= readingLine && rect.bottom >= readingLine * 0.3) {
            detectedId = sec.id;
            break;
          }
        }
      }

      if (!detectedId) {
        for (const sec of ACTIVE_SECTIONS) {
          const el = document.getElementById(sec.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
              detectedId = sec.id;
              break;
            }
          }
        }
      }

      setActiveSectionId((prev) => {
        if (prev !== detectedId) {
          return detectedId;
        }
        return prev;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isIntroFinished]);

  if (!isClient || !isIntroFinished) {
    return null;
  }

  const isVisible = Boolean(activeSectionId);
  const currentDef = ACTIVE_SECTIONS.find((s) => s.id === activeSectionId) || ACTIVE_SECTIONS[0];

  // Mirada y orientación hacia el contenido arriba a la derecha desde la esquina inferior izquierda
  const eyeOffsetX = 5;
  const eyeOffsetY = -1.5;
  const bodyRotateY = 14;
  const bodyRotateX = -4;

  const finalEyeX = eyeOffsetX + mousePos.x * 1.5;
  const finalEyeY = eyeOffsetY + mousePos.y * 1.2;
  const finalBodyRotateX = isDashing ? bodyRotateX - 4 : bodyRotateX - mousePos.y * 4;
  const finalBankingZ = isDashing ? -3 : -1;

  const currentMsg =
    segment === "empresa" ? currentDef.empresaMsg : currentDef.personaMsg;

  return (
    <div
      id="scroll-robot-companion-actor"
      aria-label="Dinamis AI Companion de Recorrido"
      className="fixed bottom-5 sm:bottom-6 left-5 sm:left-6 z-40 select-none hidden lg:block"
      style={{
        transform: isVisible
          ? isDashing
            ? "translate3d(0, -6px, 0) scale(1.03)"
            : "translate3d(0, 0, 0) scale(1)"
          : "translate3d(-140%, 0, 0) scale(0.9)",
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
        transition: isDashing
          ? "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)"
          : "transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="relative flex flex-col items-start pointer-events-auto">
        {/* Context Speech Bubble más compacto con entrada suave */}
        <div
          className={`mb-1.5 w-56 sm:w-64 transition-all duration-500 ease-out ${
            !isVisible
              ? "opacity-0 -translate-x-5 scale-90 pointer-events-none"
              : isDashing
              ? "scale-95 opacity-80 translate-x-0"
              : "scale-100 opacity-100 translate-x-0"
          }`}
          style={{
            transitionDelay: isVisible ? "140ms" : "0ms",
          }}
        >
          <div className="p-3 rounded-2xl bg-white/95 border border-[#ffdfc5] shadow-[0_8px_24px_rgba(97,16,13,0.10)] backdrop-blur-md relative overflow-hidden">
            {/* Ambient glass rim reflection */}
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#ff8b1e]/40 to-transparent" />

            <div className="flex items-center justify-between gap-1.5 mb-1">
              <span className="inline-flex items-center gap-1 text-[9px] font-extrabold uppercase tracking-wider text-[#da551d]">
                <Sparkles className="w-2.5 h-2.5 text-[#ff8b1e] animate-spin" style={{ animationDuration: "5s" }} />
                <span>{currentDef.badge}</span>
              </span>

              {/* Live Status Pill with Pulsing Signal */}
              <span className="inline-flex items-center gap-1 text-[8.5px] px-1.5 py-0.5 rounded-full bg-[#fff8f3] text-[#61100d] font-bold border border-[#ffdfc5]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10b981]" />
                </span>
                <span>{segment === "empresa" ? "Auditor B2B" : "Coach STAR"}</span>
              </span>
            </div>

            <p className="text-[11px] font-medium text-[#111111] leading-snug">
              {currentMsg}
            </p>

            {/* Speech arrow pointing down towards the robot */}
            <div className="absolute -bottom-1 left-9 w-2.5 h-2.5 bg-white border-b border-r border-[#ffdfc5] transform rotate-45" />
          </div>
        </div>

        {/* 3D Robot Rig más compacto */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center ml-2 preserve-3d">
          {/* Holographic Drone Hover Ring under Robot's Thrusters */}
          <div className="absolute -bottom-1 w-20 h-20 flex items-center justify-center pointer-events-none preserve-3d">
            {/* Spinning dashed cyber ring */}
            <div
              className={`absolute w-16 h-16 rounded-full border border-dashed border-[#ff8b1e]/50 animate-holo-spin transition-opacity duration-300 ${
                isDashing ? "opacity-90 scale-110" : "opacity-40 scale-100"
              }`}
            />
            {/* Radial thruster glow pool */}
            <div
              className={`absolute w-14 h-14 rounded-full bg-gradient-to-r from-[#ff8b1e]/25 to-[#da551d]/25 blur-md animate-pulse-glow ${
                isDashing ? "scale-125 opacity-90" : "scale-100 opacity-50"
              }`}
            />
          </div>

          {/* Jet Thruster Propulsion Flare */}
          {isDashing && (
            <div className="absolute -bottom-1.5 w-12 h-6 rounded-full bg-gradient-to-t from-[#ff8b1e] via-[#da551d] to-[#00f0ff] filter blur-[3px] animate-thruster-fire pointer-events-none z-10" />
          )}

          {/* 3D Tilting Body Rig with Interactive Parallax and Banking */}
          <div
            className={`w-full h-full preserve-3d transition-transform duration-300 ease-out ${
              isDashing ? "scale-105" : "scale-100"
            }`}
            style={{
              transform: `perspective(900px) rotateY(${bodyRotateY}deg) rotateX(${finalBodyRotateX}deg) rotateZ(${finalBankingZ}deg)`,
            }}
          >
            {/* Gentle Hover Flight */}
            <div className="w-full h-full animate-float-bot flex items-center justify-center relative preserve-3d">
              {/* Visor Robot Body */}
              <Image
                src="/images/robot-body.png"
                alt="Robot 3D Dinamis AI"
                width={112}
                height={112}
                priority
                className={`w-full h-full object-contain transition-all duration-300 ${
                  isDashing
                    ? "filter drop-shadow-[0_10px_20px_rgba(255,139,30,0.55)] scale-105"
                    : "filter drop-shadow-[0_6px_14px_rgba(218,85,29,0.30)] hover:scale-105"
                }`}
              />

              {/* Eyes Layer */}
              <div
                className="absolute inset-0 pointer-events-none transition-transform duration-100 ease-out"
                style={{
                  transform: `translate(${finalEyeX}px, ${finalEyeY}px)`,
                }}
              >
                <Image
                  src="/images/robot-eyes.png"
                  alt="Ojos Dinamis apuntando al contenido"
                  width={112}
                  height={112}
                  priority
                  className={`w-full h-full object-contain transition-all duration-200 ${
                    isDashing
                      ? "filter drop-shadow-[0_0_10px_rgba(0,240,255,0.95)]"
                      : "filter drop-shadow-[0_0_6px_rgba(0,240,255,0.55)]"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
