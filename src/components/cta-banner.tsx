"use client";

import { ArrowRight, Sparkles, Play, ShieldCheck, Clock } from "lucide-react";
import { trackEvent } from "@/components/analytics";
import { useSegment } from "@/components/segment-context";

export function CtaBanner() {
  const { segment } = useSegment();

  return (
    <section id="cta" className="py-20 bg-[#fffbf9] border-b border-[#f1dfd3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#61100d] via-[#a03417] to-[#ff8b1e] p-8 sm:p-16 text-center overflow-hidden shadow-[0_20px_60px_rgba(97,16,13,0.30)] text-white">
          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />

          {/* Dot grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/30 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#ffdfc5]" />
              <span>
                {segment === "persona" ? "Preparación Profesional" : "Desarrollo de Liderazgo"}
              </span>
            </div>

            {/* H2 — Claro, sobrio y enfocado en beneficio real */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tighter leading-[1.1]">
              {segment === "persona"
                ? "Llegá a tu próxima entrevista con mayor seguridad y preparación."
                : "Desarrollá a tus líderes y fortalecé la gestión de tus equipos."}
            </h2>

            <p className="text-base sm:text-lg text-white/88 max-w-2xl mx-auto leading-relaxed">
              {segment === "persona"
                ? "Practicá en un espacio seguro, conocé qué aspectos podés mejorar antes del encuentro real y transmití tu experiencia con claridad y estructura."
                : "Permití que tus supervisores y mandos medios practiquen conversaciones de liderazgo, feedback y gestión de conflictos de forma continua y confidencial. Comenzá con un piloto acompañado por nuestro equipo."}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.grupodinamis.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("footer_banner_start_free", { segment })}
                className="w-full sm:w-auto px-9 py-4 rounded-xl bg-white text-[#61100d] hover:bg-[#fff8f3] font-extrabold text-base shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>
                  {segment === "persona"
                    ? "Empezar mi diagnóstico"
                    : "Solicitar piloto para mi empresa"}
                </span>
                <ArrowRight className="w-4 h-4 text-[#da551d] transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={
                  segment === "persona"
                    ? "https://wa.me/5493425200959?text=Hola%20Grupo%20Dinamis%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20c%C3%B3mo%20prepararme%20con%20Dinamis%20AI"
                    : "https://wa.me/5493425200959?text=Hola%20Grupo%20Dinamis%2C%20quiero%20agendar%20una%20demostraci%C3%B3n%20ejecutiva%20de%20Dinamis%20AI%20para%20mi%20empresa"
                }
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("footer_banner_demo_whatsapp", { segment })}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-black/25 hover:bg-black/35 text-white border border-white/30 font-bold text-base transition-all flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
              >
                <Play className="w-4 h-4 text-[#ffdfc5] fill-[#ffdfc5]" />
                <span>
                  {segment === "persona" ? "Consultar por WhatsApp" : "Agendar demo ejecutiva (15 min)"}
                </span>
              </a>
            </div>

            <div className="pt-1 flex flex-wrap items-center justify-center gap-6 text-xs text-white/75 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#ffdfc5]" />
                {segment === "persona" ? "Alta instantánea · sesiones confidenciales" : "Piloto 100% asistido · onboarding en 24h"}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#ffdfc5]" />
                {segment === "persona" ? "Primera sesión en menos de 2 minutos" : "Scorecards objetivos para RRHH y Dirección"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
