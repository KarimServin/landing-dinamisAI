"use client";

import { useState } from "react";
import { Calculator, Clock, DollarSign, TrendingDown, ArrowRight, Sparkles } from "lucide-react";
import { trackEvent } from "@/components/analytics";

export function RoiCalculator() {
  const [candidatesPerMonth, setCandidatesPerMonth] = useState<number>(30);
  const [leadersCount, setLeadersCount] = useState<number>(10);

  // Approximate metrics based on HR industry benchmarks:
  // Avg initial interview screening: 45 min = 0.75 hours per candidate.
  // With Dinamis AI, initial screening is automated -> 70% time saved = ~0.52 hours saved per candidate.
  const hoursSavedPerYear = Math.round(candidatesPerMonth * 12 * 0.52);

  // Recruiter hourly rate benchmark: ~$25 USD/hr
  const recruitmentSavingsUSD = Math.round(hoursSavedPerYear * 25);

  // Coaching benchmark: 1 leader coaching traditional cost is ~$800 USD/year minimum.
  // Dinamis AI enables continuous training at 1/5 the cost.
  const coachingSavingsUSD = Math.round(leadersCount * 550);

  const totalEstimatedSavingsUSD = recruitmentSavingsUSD + coachingSavingsUSD;

  return (
    <section id="calculadora" className="py-24 bg-[#07090E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-700/50 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Calculadora de Impacto & Retorno de Inversión</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            ¿Cuánto Ahorra tu Empresa con{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">
              Dinamis AI
            </span>
            ?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Calcula las horas de trabajo operativas que tu equipo de selección recupera y el ahorro directo en consultoría y coaching tradicional.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="max-w-4xl mx-auto bg-[#0E1320] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Sliders Area */}
            <div className="space-y-8">
              {/* Slider 1 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-200">
                    Candidatos evaluados al mes:
                  </label>
                  <span className="text-base font-bold text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-md border border-cyan-800/40">
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
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>5 candidatos</span>
                  <span>100</span>
                  <span>200+ candidatos</span>
                </div>
              </div>

              {/* Slider 2 */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-200">
                    Líderes y mandos medios a entrenar:
                  </label>
                  <span className="text-base font-bold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-md border border-emerald-800/40">
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
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>2 líderes</span>
                  <span>40</span>
                  <span>80+ líderes</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 space-y-1">
                <p>
                  * Estimación basada en benchmarks promedio de selección de RRHH y valor de mercado de horas de coaching ejecutivo en LATAM.
                </p>
              </div>
            </div>

            {/* Output Metric Cards */}
            <div className="bg-gradient-to-br from-[#121829] to-[#0A0D17] p-6 rounded-xl border border-slate-700/80 space-y-5">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400 block">
                    Ahorro Anual Estimado
                  </span>
                  <span className="text-3xl font-extrabold text-white">
                    ~${totalEstimatedSavingsUSD.toLocaleString()}{" "}
                    <span className="text-xs font-normal text-slate-400">USD / año</span>
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-slate-900/70 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Tiempo recuperado</span>
                  </div>
                  <span className="text-xl font-bold text-cyan-300">
                    +{hoursSavedPerYear} hrs
                  </span>
                  <span className="text-[10px] text-slate-400 block">anuales en entrevistas</span>
                </div>

                <div className="p-3 bg-slate-900/70 rounded-lg border border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Time-to-Hire</span>
                  </div>
                  <span className="text-xl font-bold text-emerald-300">-50%</span>
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
                className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-4 h-4" />
                <span>Comenzar a optimizar mi equipo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
