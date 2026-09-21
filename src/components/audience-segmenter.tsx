"use client";

import { useSegment, AudienceSegment } from "@/components/segment-context";
import { Building2, Rocket, ArrowRight, Sparkles, CheckCircle2, Award, Users } from "lucide-react";
import { trackEvent } from "@/components/analytics";

export function AudienceSegmenter() {
  const { segment, setSegment } = useSegment();

  const handleSelect = (selected: AudienceSegment) => {
    setSegment(selected);
    trackEvent("audience_segmented", { audience: selected });
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-10 transition-all duration-500 animate-in fade-in slide-in-from-top-3">
      {/* Animated question prompt banner */}
      <div className="text-center mb-4">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-extrabold text-[#61100d] bg-gradient-to-r from-[#ffdfc5] via-[#ffdfc5]/90 to-[#ffdfc5] border border-[#ff8b1e]/30 px-4 py-1.5 rounded-full shadow-sm hover:border-[#ff8b1e] transition-all">
          <Sparkles className="w-3.5 h-3.5 text-[#ff8b1e] animate-spin" style={{ animationDuration: "6s" }} />
          <span>Elegí tu perfil para personalizar la propuesta:</span>
        </span>
      </div>

      {/* Dual Audience Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5" role="tablist" aria-label="Selección de audiencia">
        {/* Option 1: Soy Empresa */}
        <button
          type="button"
          role="tab"
          aria-selected={segment === "empresa"}
          onClick={() => handleSelect("empresa")}
          className={`text-left p-5 sm:p-6 rounded-2xl border-2 transition-all duration-300 relative group overflow-hidden cursor-pointer ${
            segment === "empresa"
              ? "bg-white border-[#ff8b1e] shadow-[0_12px_32px_rgba(255,139,30,0.18)] ring-4 ring-[#ff8b1e]/15 scale-[1.01]"
              : "bg-white/80 border-[#f1dfd3] hover:border-[#ff8b1e]/60 hover:bg-white shadow-sm opacity-90 hover:opacity-100 hover:shadow-md"
          }`}
        >
          {segment === "empresa" && (
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#ff8b1e] via-[#da551d] to-[#61100d] text-white text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-bl-xl shadow-sm flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>Activo</span>
            </div>
          )}

          <div className="flex items-start gap-4">
            <div
              className={`w-13 h-13 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                segment === "empresa"
                  ? "bg-gradient-to-tr from-[#ff8b1e] to-[#da551d] text-white shadow-md shadow-[#ff8b1e]/30 scale-105"
                  : "bg-[#fff8f3] text-[#da551d] border border-[#f1dfd3] group-hover:border-[#ff8b1e]/40"
              }`}
            >
              <Building2 className="w-6 h-6" />
            </div>

            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-extrabold text-[#da551d] uppercase tracking-wider">
                  Organizaciones & RRHH
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#da551d] transition-colors flex items-center gap-2">
                <span>Soy Empresa</span>
                <span className="text-xs font-semibold text-[#808285] group-hover:text-[#ff8b1e] transition-colors">
                  (Coaching & Filtros)
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-[#4a423d] leading-relaxed">
                Coaching de liderazgo para mandos medios y filtros masivos de entrevistas STAR para escalar tus procesos de selección.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#61100d] font-semibold">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff8b1e]" /> Entrenar líderes
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff8b1e]" /> Optimizar selección
                </span>
              </div>
            </div>
          </div>
        </button>

        {/* Option 2: Soy Persona */}
        <button
          type="button"
          role="tab"
          aria-selected={segment === "persona"}
          onClick={() => handleSelect("persona")}
          className={`text-left p-5 sm:p-6 rounded-2xl border-2 transition-all duration-300 relative group overflow-hidden cursor-pointer ${
            segment === "persona"
              ? "bg-white border-[#ff8b1e] shadow-[0_12px_32px_rgba(255,139,30,0.18)] ring-4 ring-[#ff8b1e]/15 scale-[1.01]"
              : "bg-white/80 border-[#f1dfd3] hover:border-[#ff8b1e]/60 hover:bg-white shadow-sm opacity-90 hover:opacity-100 hover:shadow-md"
          }`}
        >
          {segment === "persona" && (
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#ff8b1e] via-[#da551d] to-[#61100d] text-white text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-bl-xl shadow-sm flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>Activo</span>
            </div>
          )}

          <div className="flex items-start gap-4">
            <div
              className={`w-13 h-13 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                segment === "persona"
                  ? "bg-gradient-to-tr from-[#ff8b1e] to-[#da551d] text-white shadow-md shadow-[#ff8b1e]/30 scale-105"
                  : "bg-[#fff8f3] text-[#da551d] border border-[#f1dfd3] group-hover:border-[#ff8b1e]/40"
              }`}
            >
              <Rocket className="w-6 h-6" />
            </div>

            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-extrabold text-[#da551d] uppercase tracking-wider">
                  Profesionales & Postulantes
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#da551d] transition-colors flex items-center gap-2">
                <span>Soy Persona</span>
                <span className="text-xs font-semibold text-[#808285] group-hover:text-[#ff8b1e] transition-colors">
                  (Triunfo laboral)
                </span>
              </h3>
              <p className="text-xs sm:text-sm text-[#4a423d] leading-relaxed">
                Superá entrevistas difíciles, aprendé a responder bajo método STAR, vencé los nervios y da el salto al trabajo que merecés.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#61100d] font-semibold">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff8b1e]" /> Práctica sin nervios
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#ff8b1e]" /> Saltar a algo mejor
                </span>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

