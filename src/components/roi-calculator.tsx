"use client";

import { useState } from "react";
import { Clock, Users, ArrowRight, Check } from "lucide-react";
import { trackEvent } from "@/components/analytics";

export function RoiCalculator() {
  const [candidatesPerMonth, setCandidatesPerMonth] = useState<number>(30);
  const [leadersCount, setLeadersCount] = useState<number>(10);

  // Approximate realistic estimation:
  // ~40 min saved per first-round candidate screening
  const hoursScreeningSaved = Math.round((candidatesPerMonth * 12 * 40) / 60);

  return (
    <section id="calculadora" className="py-20 bg-[#fffbf9] border-b border-[#f1dfd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold text-[#da551d] uppercase tracking-wider block mb-2">
            Eficiencia en la Gestión
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171412] tracking-tight mb-4">
            Estimación de alcance y dedicación horaria
          </h2>
          <p className="text-base text-[#4a423d] leading-relaxed">
            Calculá el tiempo operativo que tu equipo de selección puede reorientar hacia entrevistas profundas y el alcance del entrenamiento continuo en tus líderes.
          </p>
        </div>

        {/* Form & Results */}
        <div className="max-w-4xl mx-auto bg-white border border-[#f1dfd3] rounded-2xl p-6 sm:p-9 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Sliders Area */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-[#171412]">
                    Postulantes evaluados por mes:
                  </label>
                  <span className="text-sm font-bold text-[#171412] bg-[#fff8f3] border border-[#f1dfd3] px-2.5 py-0.5 rounded">
                    {candidatesPerMonth}
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="5"
                  value={candidatesPerMonth}
                  onChange={(e) => setCandidatesPerMonth(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#f1dfd3] rounded-lg appearance-none cursor-pointer accent-[#da551d]"
                />
                <div className="flex justify-between text-[11px] text-[#808285] mt-1">
                  <span>5</span>
                  <span>75</span>
                  <span>150+</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-[#171412]">
                    Líderes y coordinadores en la organización:
                  </label>
                  <span className="text-sm font-bold text-[#171412] bg-[#fff8f3] border border-[#f1dfd3] px-2.5 py-0.5 rounded">
                    {leadersCount}
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="60"
                  step="2"
                  value={leadersCount}
                  onChange={(e) => setLeadersCount(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#f1dfd3] rounded-lg appearance-none cursor-pointer accent-[#da551d]"
                />
                <div className="flex justify-between text-[11px] text-[#808285] mt-1">
                  <span>2</span>
                  <span>30</span>
                  <span>60+</span>
                </div>
              </div>

              <p className="text-xs text-[#808285] leading-relaxed pt-2 border-t border-[#f1dfd3]">
                * Estimación basada en la dedicación habitual de cribado inicial y preparación individual de conversaciones en áreas de Recursos Humanos.
              </p>
            </div>

            {/* Results Output */}
            <div className="bg-[#fff8f3] p-6 rounded-xl border border-[#f1dfd3] space-y-4">
              <span className="text-xs uppercase font-semibold text-[#da551d] tracking-wider block">
                Impacto operativo anual
              </span>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#f1dfd3]">
                  <Clock className="w-5 h-5 text-[#da551d] shrink-0" />
                  <div>
                    <span className="text-lg font-bold text-[#171412] block leading-tight">
                      ~{hoursScreeningSaved} horas al año
                    </span>
                    <span className="text-xs text-[#6b625b]">
                      recuperadas en filtros preliminares de selección
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-[#f1dfd3]">
                  <Users className="w-5 h-5 text-[#da551d] shrink-0" />
                  <div>
                    <span className="text-lg font-bold text-[#171412] block leading-tight">
                      {leadersCount} mandos medios
                    </span>
                    <span className="text-xs text-[#6b625b]">
                      con acceso autónomo y continuo a práctica de liderazgo
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://app.grupodinamis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent("roi_calculator_cta", {
                      candidates: candidatesPerMonth,
                      leaders: leadersCount,
                    })
                  }
                  className="w-full py-2.5 px-4 rounded-lg bg-[#da551d] hover:bg-[#c24614] text-white font-medium text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span>Probar con tu equipo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
