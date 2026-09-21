"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Sparkles, Brain, CheckCircle2, Building2, Rocket } from "lucide-react";
import { AudienceSegment } from "@/components/segment-context";

interface RobotCompanionProps {
  mode: AudienceSegment;
  onSwitchMode?: (mode: AudienceSegment) => void;
  className?: string;
}

export function RobotCompanion({ mode, onSwitchMode, className = "" }: RobotCompanionProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax tracking relative to container
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Limit range to -1 to 1
      const x = Math.max(-1, Math.min(1, (e.clientX - centerX) / (window.innerWidth / 2)));
      const y = Math.max(-1, Math.min(1, (e.clientY - centerY) / (window.innerHeight / 2)));
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const rotateX = -mousePos.y * 14;
  const rotateY = mousePos.x * 18;
  const speechRotateX = -mousePos.y * 6;
  const speechRotateY = mousePos.x * 8;

  const isEmpresa = mode === "empresa";

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col items-center justify-center select-none ${className}`}
    >
      {/* 3D Interactive Stage */}
      <div className="relative w-full max-w-sm flex flex-col items-center perspective-1000">
        {/* Floating Speech Bubble */}
        <div
          className="mb-3 w-full max-w-[340px] preserve-3d transition-transform duration-200"
          style={{
            transform: `rotateX(${speechRotateX}deg) rotateY(${speechRotateY}deg) translateZ(20px)`,
          }}
        >
          <div className="flex items-center justify-between gap-2 px-3 py-1 rounded-full bg-white/95 border border-[#ffdfc5] shadow-xs text-[10px] font-extrabold text-[#da551d] uppercase tracking-wider mb-2">
            <span className="flex items-center gap-1.5">
              <Brain className="w-3 h-3 text-[#ff8b1e]" />
              <span>Dinamis Bot 3D</span>
            </span>
            <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#ffdfc5]/60 text-[#61100d] font-bold">
              {isEmpresa ? "Auditor B2B" : "Coach Personal"}
            </span>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/95 border border-[#f1dfd3] shadow-[0_8px_24px_rgba(97,16,13,0.06)] backdrop-blur-md relative">
            <p className="text-xs sm:text-sm font-medium text-[#111111] leading-relaxed">
              {isEmpresa ? (
                <>
                  &ldquo;¡Hola! Como auditor de talento de{" "}
                  <strong className="text-[#da551d] font-bold">Dinamis AI</strong>, entreno a tus mandos medios en conversaciones difíciles y filtro candidatos con metodología STAR.&rdquo;
                </>
              ) : (
                <>
                  &ldquo;¡Hola! Soy tu coach personal. Practiquemos juntos tus respuestas{" "}
                  <strong className="text-[#da551d] font-bold">STAR</strong> para que vayas con total seguridad y conquistes el puesto que merecés.&rdquo;
                </>
              )}
            </p>
            {/* Arrow pointer */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white border-b border-r border-[#f1dfd3] transform rotate-45"></div>
          </div>
        </div>

        {/* 3D Holographic Pedestal & Robot Rig */}
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center my-2">
          {/* Outer Hologram Energy Ring */}
          <div className="absolute w-40 h-40 sm:w-48 sm:h-48 rounded-full border-2 border-dashed border-[#ff8b1e]/40 animate-holo-spin pointer-events-none"></div>

          {/* Inner Glowing Radial Pool */}
          <div className="absolute w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-r from-[#ff8b1e]/25 to-[#da551d]/25 blur-lg animate-pulse-glow pointer-events-none"></div>

          {/* 3D Tilting Robot Container */}
          <div
            className="relative w-40 h-40 sm:w-48 sm:h-48 preserve-3d transition-transform duration-150 ease-out"
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(35px)`,
            }}
          >
            <div className="w-full h-full animate-float-bot flex items-center justify-center">
              <Image
                src="/images/dinamis-bot.png"
                alt="Robot 3D Dinamis AI"
                width={192}
                height={192}
                priority
                className="object-contain filter drop-shadow-[0_16px_24px_rgba(218,85,29,0.3)] transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Dynamic Floor Shadow */}
          <div className="absolute -bottom-3 w-28 h-5 sm:w-32 sm:h-6 rounded-full bg-[#61100d] filter blur-md animate-shadow-scale pointer-events-none"></div>
        </div>

        {/* Quick Mode Toggle Pills below the robot */}
        {onSwitchMode && (
          <div className="mt-3 inline-flex items-center p-1 bg-white rounded-xl border border-[#f1dfd3] shadow-xs">
            <button
              type="button"
              onClick={() => onSwitchMode("empresa")}
              className={`px-3 py-1 text-[11px] font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                isEmpresa
                  ? "bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white shadow-xs"
                  : "text-[#6b625b] hover:text-[#111111]"
              }`}
            >
              <Building2 className="w-3 h-3" />
              <span>Para Empresas</span>
            </button>
            <button
              type="button"
              onClick={() => onSwitchMode("persona")}
              className={`px-3 py-1 text-[11px] font-bold rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                !isEmpresa
                  ? "bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white shadow-xs"
                  : "text-[#6b625b] hover:text-[#111111]"
              }`}
            >
              <Rocket className="w-3 h-3" />
              <span>Para Personas</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
