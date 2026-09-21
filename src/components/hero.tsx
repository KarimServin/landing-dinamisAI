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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-warm-grid">
      {/* Ambient background glows with Dinamis brand colors */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] md:w-[900px] md:h-[500px] glow-orange pointer-events-none -z-10 blur-3xl opacity-40"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] glow-terracotta pointer-events-none -z-10 blur-2xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdfc5]/60 border border-[#ff8b1e]/30 text-[#61100d] text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#ff8b1e] animate-pulse"></span>
            <span className="font-medium">Inteligencia Artificial aplicada al Capital Humano</span>
            <span className="text-[#da551d]/40">|</span>
            <span className="text-[#171412] font-semibold">Grupo Dinamis</span>
          </div>

          {/* H1 SEO Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#171412] tracking-tight leading-[1.15] mb-6">
            Entrena a tus Líderes y{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8b1e] via-[#da551d] to-[#c22722]">
              Perfecciona Entrevistas
            </span>{" "}
            con Inteligencia Artificial
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#4a423d] mb-10 leading-relaxed font-normal max-w-3xl mx-auto">
            Digitaliza más de 15 años de metodología experta en Recursos Humanos.{" "}
            <span className="text-[#171412] font-semibold">Dinamis AI</span> simula entrevistas por competencias bajo metodología STAR y ofrece un{" "}
            <span className="text-[#da551d] font-semibold">coach ejecutivo 24/7</span> para entrenar a mandos medios en conversaciones difíciles.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://app.grupodinamis.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCtaClick("start_free_trial")}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#ff8b1e] via-[#f15808] to-[#da551d] text-white font-semibold text-base shadow-xl shadow-[#ff8b1e]/25 hover:shadow-2xl hover:shadow-[#da551d]/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-5 h-5 text-[#ffdfc5] group-hover:rotate-12 transition-transform" />
              <span>Comenzar Prueba Gratuita</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="https://wa.me/5493425200959?text=Hola%20Grupo%20Dinamis%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20Dinamis%20AI%20para%20mi%20empresa"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCtaClick("book_corporate_demo")}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white hover:bg-[#fff8f3] text-[#171412] border border-[#f1dfd3] hover:border-[#ff8b1e]/50 font-semibold text-base shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4 text-[#ff8b1e] fill-[#ff8b1e]" />
              <span>Solicitar Demo Corporativa</span>
            </a>
          </div>

          {/* Micro trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#6b625b] mb-16">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ff8b1e]" />
              <span>Sin tarjeta de crédito requerida</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#da551d]" />
              <span>Metodología STAR validada</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#ff8b1e]" />
              <span>+200 empresas respaldadas</span>
            </div>
          </div>
        </div>

        {/* Interactive Live Product Preview Mockup */}
        <div className="relative max-w-5xl mx-auto">
          {/* Outer glow ring */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#ff8b1e]/30 via-[#ffdfc5]/40 to-[#da551d]/30 blur-xl opacity-60"></div>

          {/* Application Mockup Frame */}
          <div className="relative rounded-2xl bg-white border border-[#f1dfd3] shadow-2xl shadow-[#61100d]/10 overflow-hidden">
            {/* Top Bar of SaaS App */}
            <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-[#fff8f3] border-b border-[#f1dfd3] gap-3">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <span className="text-xs font-mono text-[#6b625b] ml-2 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ff8b1e] animate-ping"></span>
                  app.grupodinamis.com/ai/session
                </span>
              </div>

              {/* Simulation Mode Selector */}
              <div className="flex items-center p-1 bg-white rounded-xl border border-[#f1dfd3] shadow-sm">
                <button
                  onClick={() => setActiveTab("entrevistas")}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                    activeTab === "entrevistas"
                      ? "bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white shadow-sm"
                      : "text-[#6b625b] hover:text-[#171412]"
                  }`}
                >
                  Simulador de Entrevista (STAR)
                </button>
                <button
                  onClick={() => setActiveTab("coaching")}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                    activeTab === "coaching"
                      ? "bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white shadow-sm"
                      : "text-[#6b625b] hover:text-[#171412]"
                  }`}
                >
                  AI Leadership Coach
                </button>
              </div>
            </div>

            {/* Inner Dashboard View */}
            <div className="p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start bg-[#fffbf9]">
              {/* Left Column: Interactive Simulation Dialogue */}
              <div className="lg:col-span-7 space-y-4">
                {activeTab === "entrevistas" ? (
                  <>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#f1dfd3] shadow-sm">
                      <div className="w-9 h-9 rounded-lg bg-[#ffdfc5] border border-[#ff8b1e]/40 flex items-center justify-center shrink-0">
                        <Brain className="w-5 h-5 text-[#da551d]" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#da551d] uppercase tracking-wider">
                            Dinamis AI Interviewer
                          </span>
                          <span className="text-[11px] text-[#6b625b] flex items-center gap-1">
                            <Volume2 className="w-3.5 h-3.5 text-[#ff8b1e]" /> Pregunta por Competencias
                          </span>
                        </div>
                        <p className="text-sm text-[#171412] leading-relaxed font-medium">
                          &ldquo;Cuéntame sobre una ocasión en la que tuviste que liderar un proyecto con plazos muy ajustados y desacuerdos en el equipo. ¿Qué hiciste y cuál fue el resultado?&rdquo;
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[#fff8f3] border border-[#ffdfc5] shadow-sm">
                      <div className="w-9 h-9 rounded-lg bg-[#ffdfc5]/60 border border-[#ff8b1e]/30 flex items-center justify-center shrink-0">
                        <MessageSquare className="w-5 h-5 text-[#ff8b1e]" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-[#ff8b1e] uppercase tracking-wider">
                          Respuesta del Candidato / Líder
                        </span>
                        <p className="text-sm text-[#331606] leading-relaxed">
                          &ldquo;En mi anterior posición en Logística, teníamos que migrar el ERP en 30 días. Realicé una reunión de alineación aplicando escucha activa, redistribuí las tareas según fortalezas individuales y establecimos sprints semanales. Logramos migrar a tiempo con un 98% de adopción.&rdquo;
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#f1dfd3] shadow-sm">
                      <div className="w-9 h-9 rounded-lg bg-[#ffdfc5] border border-[#ff8b1e]/40 flex items-center justify-center shrink-0">
                        <Users className="w-5 h-5 text-[#da551d]" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-[#da551d] uppercase tracking-wider">
                          Colaborador Simulado (Roleplay de Liderazgo)
                        </span>
                        <p className="text-sm text-[#171412] leading-relaxed">
                          &ldquo;Siento que la carga de trabajo es excesiva y que no se reconoce el esfuerzo extra que estoy poniendo. Necesitamos una solución ya o tendré que evaluar otras opciones.&rdquo;
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[#fff8f3] border border-[#ffdfc5] shadow-sm">
                      <div className="w-9 h-9 rounded-lg bg-[#ffdfc5]/60 border border-[#ff8b1e]/30 flex items-center justify-center shrink-0">
                        <Brain className="w-5 h-5 text-[#ff8b1e]" />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-[#ff8b1e] uppercase tracking-wider">
                          Guía del AI Leadership Coach
                        </span>
                        <p className="text-sm text-[#331606] leading-relaxed">
                          &ldquo;Buen momento para aplicar validación empática antes de justificar la operativa. Evita decir &apos;todos estamos estresados&apos;; prueba con: &apos;Entiendo lo demandante de este sprint y valoro tu compromiso. Revisemos juntos las prioridades inmediatas&apos;.&rdquo;
                        </p>
                      </div>
                    </div>
                  </>
                )}

                <div className="flex items-center justify-between text-xs text-[#6b625b] pt-2 px-1">
                  <span className="flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-[#ff8b1e]" /> Análisis semántico y conductual activo
                  </span>
                  <span className="font-mono text-[#da551d] font-medium">Latencia: 180ms</span>
                </div>
              </div>

              {/* Right Column: Real-time AI Evaluation Panel */}
              <div className="lg:col-span-5 bg-white rounded-xl p-5 border border-[#f1dfd3] shadow-md space-y-4">
                <div className="flex items-center justify-between border-b border-[#f1dfd3] pb-3">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-[#ff8b1e]" />
                    <span className="text-sm font-bold text-[#171412]">Diagnóstico Ejecutivo</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Aprobado (Match 92%)
                  </span>
                </div>

                {/* Score Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-[#4a423d]">Claridad de Comunicación</span>
                    <span className="text-[#da551d] font-bold">94%</span>
                  </div>
                  <div className="h-2 w-full bg-[#fff8f3] rounded-full overflow-hidden border border-[#f1dfd3]">
                    <div className="h-full bg-gradient-to-r from-[#ff8b1e] to-[#da551d] w-[94%] rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-[#4a423d]">Estructura STAR (Situación-Tarea-Acción-Resultado)</span>
                    <span className="text-[#ff8b1e] font-bold">90%</span>
                  </div>
                  <div className="h-2 w-full bg-[#fff8f3] rounded-full overflow-hidden border border-[#f1dfd3]">
                    <div className="h-full bg-gradient-to-r from-[#ff8b1e] to-[#f15808] w-[90%] rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-[#4a423d]">Liderazgo & Gestión Emocional</span>
                    <span className="text-emerald-600 font-bold">88%</span>
                  </div>
                  <div className="h-2 w-full bg-[#fff8f3] rounded-full overflow-hidden border border-[#f1dfd3]">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 w-[88%] rounded-full"></div>
                  </div>
                </div>

                {/* AI Key Insights Box */}
                <div className="mt-4 p-3.5 bg-[#fff8f3] rounded-xl border border-[#ffdfc5] text-xs space-y-1.5">
                  <span className="font-semibold text-[#61100d] block">
                    {activeTab === "entrevistas"
                      ? "💡 Feedback Clave Dinamis AI:"
                      : "💡 Recomendación de Coaching:"}
                  </span>
                  <p className="text-[#4a423d] text-[11px] leading-relaxed">
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
