"use client";

import { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  Play,
  CheckCircle2,
  Brain,
  Award,
  Users,
  MessageSquare,
  BarChart3,
  Flame,
  Volume2,
} from "lucide-react";
import { trackEvent } from "@/components/analytics";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"entrevistas" | "coaching">("entrevistas");

  const handleCtaClick = (action: string) => {
    trackEvent("hero_cta_click", { action });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] md:w-[900px] md:h-[500px] glow-blue pointer-events-none -z-10 blur-3xl opacity-60"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] glow-cyan pointer-events-none -z-10 blur-2xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/60 text-blue-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Inteligencia Artificial aplicada al Capital Humano</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300 font-semibold">Grupo Dinamis</span>
          </div>

          {/* H1 SEO Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Entrena a tus Líderes y{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
              Perfecciona Entrevistas
            </span>{" "}
            con Inteligencia Artificial
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed font-normal max-w-3xl mx-auto">
            Digitaliza más de 15 años de metodología experta en Recursos Humanos.{" "}
            <span className="text-white font-medium">Dinamis AI</span> simula entrevistas por competencias bajo metodología STAR y ofrece un{" "}
            <span className="text-cyan-300 font-medium">coach ejecutivo 24/7</span> para entrenar a mandos medios en conversaciones difíciles.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://app.grupodinamis.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCtaClick("start_free_trial")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-semibold text-base shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-5 h-5 text-cyan-200 group-hover:rotate-12 transition-transform" />
              <span>Comenzar Prueba Gratuita</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="https://wa.me/5493425200959?text=Hola%20Grupo%20Dinamis%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20Dinamis%20AI%20para%20mi%20empresa"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCtaClick("book_corporate_demo")}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 text-slate-200 border border-slate-700/80 font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2 hover:border-slate-600"
            >
              <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" />
              <span>Solicitar Demo Corporativa</span>
            </a>
          </div>

          {/* Micro trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400 mb-16">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Sin tarjeta de crédito requerida</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Metodología STAR validada</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>+200 empresas respaldadas</span>
            </div>
          </div>
        </div>

        {/* Interactive Live Product Preview Mockup */}
        <div className="relative max-w-5xl mx-auto">
          {/* Outer glow ring */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/40 via-cyan-500/40 to-indigo-600/40 blur-xl opacity-70"></div>

          {/* Application Mockup Frame */}
          <div className="relative rounded-2xl bg-[#0F1422] border border-slate-700/80 shadow-2xl overflow-hidden">
            {/* Top Bar of SaaS App */}
            <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-[#0B0F19] border-b border-slate-800 gap-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-xs font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
                  app.grupodinamis.com/ai/session
                </span>
              </div>

              {/* Simulation Mode Selector */}
              <div className="flex items-center p-1 bg-slate-900 rounded-lg border border-slate-800">
                <button
                  onClick={() => setActiveTab("entrevistas")}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                    activeTab === "entrevistas"
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  Simulador de Entrevista (STAR)
                </button>
                <button
                  onClick={() => setActiveTab("coaching")}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${
                    activeTab === "coaching"
                      ? "bg-cyan-600 text-white shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  AI Leadership Coach
                </button>
              </div>
            </div>

            {/* Inner Dashboard View */}
            <div className="p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Column: Interactive Simulation Dialogue */}
              <div className="lg:col-span-7 space-y-4">
                {activeTab === "entrevistas" ? (
                  <>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                      <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/40 flex items-center justify-center shrink-0">
                        <Brain className="w-5 h-5 text-blue-400" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                            Dinamis AI Interviewer
                          </span>
                          <span className="text-[11px] text-slate-500 flex items-center gap-1">
                            <Volume2 className="w-3.5 h-3.5 text-cyan-400" /> Pregunta por Competencias
                          </span>
                        </div>
                        <p className="text-sm text-slate-200 leading-relaxed font-medium">
                          &ldquo;Cuéntame sobre una ocasión en la que tuviste que liderar un proyecto con plazos muy ajustados y desacuerdos en el equipo. ¿Qué hiciste y cuál fue el resultado?&rdquo;
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-950/30 border border-blue-800/40">
                      <div className="w-9 h-9 rounded-lg bg-cyan-600/20 border border-cyan-500/40 flex items-center justify-center shrink-0">
                        <MessageSquare className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                          Respuesta del Candidato / Líder
                        </span>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          &ldquo;En mi anterior posición en Logística, teníamos que migrar el ERP en 30 días. Realicé una reunión de alineación aplicando escucha activa, redistribuí las tareas según fortalezas individuales y establecimos sprints semanales. Logramos migrar a tiempo con un 98% de adopción.&rdquo;
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                      <div className="w-9 h-9 rounded-lg bg-cyan-600/20 border border-cyan-500/40 flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                          Colaborador Simulado (Roleplay de Liderazgo)
                        </span>
                        <p className="text-sm text-slate-200 leading-relaxed">
                          &ldquo;Siento que la carga de trabajo es excesiva y que no se reconoce el esfuerzo extra que estoy poniendo. Necesitamos una solución ya o tendré que evaluar otras opciones.&rdquo;
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-indigo-950/30 border border-indigo-800/40">
                      <div className="w-9 h-9 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center shrink-0">
                        <Brain className="w-5 h-5 text-indigo-400" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                          Guía del AI Leadership Coach
                        </span>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          &ldquo;Buen momento para aplicar validación empática antes de justificar la operativa. Evita decir &apos;todos estamos estresados&apos;; prueba con: &apos;Entiendo lo demandante de este sprint y valoro tu compromiso. Revisemos juntos las prioridades inmediatas&apos;.&rdquo;
                        </p>
                      </div>
                    </div>
                  </>
                )}

                <div className="flex items-center justify-between text-xs text-slate-400 pt-2 px-1">
                  <span className="flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-orange-400" /> Análisis semántico y conductual activo
                  </span>
                  <span className="font-mono text-cyan-400">Latencia: 180ms</span>
                </div>
              </div>

              {/* Right Column: Real-time AI Evaluation Panel */}
              <div className="lg:col-span-5 bg-gradient-to-b from-[#0B0F19] to-slate-900/90 rounded-xl p-5 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-bold text-white">Diagnóstico Ejecutivo</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Aprobado (Match 92%)
                  </span>
                </div>

                {/* Score Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-300">Claridad de Comunicación</span>
                    <span className="text-cyan-400 font-bold">94%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 w-[94%] rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-300">Estructura STAR (Situación-Tarea-Acción-Resultado)</span>
                    <span className="text-blue-400 font-bold">90%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-400 w-[90%] rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-300">Liderazgo & Gestión Emocional</span>
                    <span className="text-emerald-400 font-bold">88%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 w-[88%] rounded-full"></div>
                  </div>
                </div>

                {/* AI Key Insights Box */}
                <div className="mt-4 p-3 bg-slate-950/70 rounded-lg border border-slate-800/80 text-xs space-y-1.5">
                  <span className="font-semibold text-cyan-300 block">
                    {activeTab === "entrevistas"
                      ? "💡 Feedback Clave Dinamis AI:"
                      : "💡 Recomendación de Coaching:"}
                  </span>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {activeTab === "entrevistas"
                      ? "Excelente demostración de resolución de conflictos. Para elevar aún más el impacto, cuantifica el ahorro de tiempo o coste derivado del 98% de adopción del ERP."
                      : "Has mantenido la calma y asertividad. Prioriza escuchar activamente el 70% del tiempo de la sesión antes de ofrecer soluciones definitivas."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
