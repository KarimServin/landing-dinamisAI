"use client";

import { useState } from "react";
import { Calculator, Clock, DollarSign, TrendingDown, ArrowRight, Sparkles } from "lucide-react";
import { trackEvent } from "@/components/analytics";

export function RoiCalculator() {
  const [candidatesPerMonth, setCandidatesPerMonth] = useState<number>(30);
  const [leadersCount, setLeadersCount] = useState<number>(10);

  // Approximate realistic metrics based on HR benchmarks in LATAM:
  // Initial interview screening: 45 min = 0.75 hrs. 70% time automated = ~0.52 hrs saved per candidate.
  const hoursSavedPerYear = Math.round(candidatesPerMonth * 12 * 0.52);

  // Recruiter rate benchmark: ~$25 USD/hr
  const recruitmentSavingsUSD = Math.round(hoursSavedPerYear * 25);

  // Traditional executive coaching benchmark: ~$800 USD/leader/year
  const coachingSavingsUSD = Math.round(leadersCount * 550);

  const totalEstimatedSavingsUSD = recruitmentSavingsUSD + coachingSavingsUSD;

  return (
    <section id="calculadora" className="py-24 bg-[#fffbf9] border-b border-[#f1dfd3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffdfc5] border border-[#ff8b1e]/30 text-[#61100d] text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5 text-[#da551d]" />
            <span>Calculadora de Retorno de Inversión</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight mb-4">
            ¿Cuánto Ahorra tu Empresa con{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8b1e] via-[#da551d] to-[#61100d]">
              Dinamis AI
            </span>
            ?
          </h2>
          <p className="text-[#4a423d] text-base sm:text-lg leading-relaxed">
            Calcula las horas de trabajo operativas que tu equipo de selección recupera y el ahorro directo en consultoría y coaching tradicional.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="max-w-4xl mx-auto bg-white border border-[#f1dfd3] rounded-3xl p-6 sm:p-10 shadow-[0_8px_30px_rgba(97,16,13,0.06)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Sliders Area */}
            <div className="space-y-8">
              {/* Slider 1 */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-sm font-bold text-[#111111]">
                    Candidatos evaluados por mes:
                  </label>
                  <span className="text-base font-extrabold text-[#61100d] bg-[#ffdfc5] px-3 py-1 rounded-xl border border-[#ff8b1e]/30 shadow-sm">
                    {candidatesPerMonth}
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="200"
                  step="5"
                  value={candidatesPerMonth}
                  onChange={(e) => setCandidatesPerMonth(Number(e.target.value))}
                  className="w-full h-2 bg-[#f1dfd3] rounded-lg appearance-none cursor-pointer accent-[#ff8b1e]"
                />
                <div className="flex justify-between text-[11px] text-[#808285] font-medium mt-1">
                  <span>5 postulantes</span>
                  <span>100</span>
                  <span>200+ postulantes</span>
                </div>
              </div>

              {/* Slider 2 */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-sm font-bold text-[#111111]">
                    Líderes y mandos medios a entrenar:
                  </label>
                  <span className="text-base font-extrabold text-[#61100d] bg-[#ffdfc5] px-3 py-1 rounded-xl border border-[#ff8b1e]/30 shadow-sm">
                    {leadersCount}
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="80"
                  step="2"
                  value={leadersCount}
                  onChange={(e) => setLeadersCount(Number(e.target.value))}
                  className="w-full h-2 bg-[#f1dfd3] rounded-lg appearance-none cursor-pointer accent-[#da551d]"
                />
                <div className="flex justify-between text-[11px] text-[#808285] font-medium mt-1">
                  <span>2 líderes</span>
                  <span>40</span>
                  <span>80+ líderes</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#fff8f3] border border-[#f1dfd3] text-xs text-[#6b625b] space-y-1">
                <p>
                  * Estimación calculada según promedios habituales de selección de RRHH y valor de mercado de horas de coaching ejecutivo en LATAM.
                </p>
              </div>
            </div>

            {/* Output Metric Cards - Dark Executive Card from App Modo Oscuro spec */}
            <div className="bg-gradient-to-b from-[#090807] to-[#171412] p-7 rounded-2xl border border-[#da551d]/40 text-white space-y-5 shadow-2xl">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-11 h-11 rounded-xl bg-[#ff8b1e]/20 border border-[#ff8b1e]/40 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-[#ff8b1e]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold block">
                    Ahorro Anual Estimado
                  </span>
                  <span className="text-3xl sm:text-4xl font-extrabold text-white">
                    ~${totalEstimatedSavingsUSD.toLocaleString()}{" "}
                    <span className="text-xs font-normal text-slate-400">USD / año</span>
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-3.5 bg-white/5 rounded-xl border border-white/10">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#ff8b1e]" />
                    <span>Tiempo recuperado</span>
                  </div>
                  <span className="text-xl font-bold text-white">
                    +{hoursSavedPerYear} hrs
                  </span>
                  <span className="text-[10px] text-slate-400 block">anuales en entrevistas</span>
                </div>

                <div className="p-3.5 bg-white/5 rounded-xl border border-white/10">
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 mb-1">
                    <TrendingDown className="w-3.5 h-3.5 text-[#10b981]" />
                    <span>Time-to-Hire</span>
                  </div>
                  <span className="text-xl font-bold text-[#10b981]">-50%</span>
                  <span className="text-[10px] text-slate-400 block">en cierre de vacantes</span>
                </div>
              </div>

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
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#ff8b1e] to-[#da551d] hover:from-[#ff8b1e] hover:to-[#c24614] text-white font-bold text-sm shadow-[0_4px_16px_rgba(255,139,30,0.3)] transition-all flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 text-[#ffdfc5]" />
                <span>Optimizar el tiempo de mi equipo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
