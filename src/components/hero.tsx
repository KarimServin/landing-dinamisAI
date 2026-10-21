"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Play,
  Brain,
  MessageSquare,
  BarChart3,
  Users,
  Target,
  Award,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Mic,
  Volume2,
} from "lucide-react";
import { trackEvent } from "@/components/analytics";
import { useSegment } from "@/components/segment-context";
import { RobotCompanion } from "@/components/robot-companion";

export function Hero() {
  const { segment, setSegment } = useSegment();
  const [activeTab, setActiveTab] = useState<"entrevistas" | "coaching">("entrevistas");

  // Keep mockup tab aligned when segment changes
  useEffect(() => {
    if (segment === "persona") {
      setActiveTab("entrevistas");
    }
  }, [segment]);

  const handleCtaClick = (action: string) => {
    trackEvent("hero_cta_click", { action, segment });
  };

  return (
    <section id="hero" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-b from-[#fff8f3] via-[#fffbf9] to-[#fffbf9] border-b border-[#f1dfd3]">
      {/* Dot grid texture — subtle premium SaaS background */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #da551d 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Warm ambient glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] md:w-[900px] md:h-[500px] bg-gradient-to-b from-[#ffdfc5]/50 via-[#ff8b1e]/12 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2-Column Split: Value Prop + 3D Robot Companion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          {/* Left Column (7 cols): Copy, CTAs, Social Proof */}
          <div className="lg:col-span-7 text-left space-y-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffdfc5] border border-[#ff8b1e]/30 text-[#61100d] text-xs sm:text-sm font-semibold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#ff8b1e] animate-pulse" />
              <span>
                {segment === "persona"
                  ? "Práctica de Entrevistas Laborales con Inteligencia Artificial"
                  : "Entrenamiento de Liderazgo y Coaching para Equipos · Grupo Dinamis"}
              </span>
            </div>

            {/* H1 — Claro, directo, sin exageraciones ni metáforas infladas */}
            <div>
              {segment === "persona" ? (
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] tracking-tighter leading-[1.08]">
                  Prepará tu próxima entrevista y{" "}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8b1e] via-[#da551d] to-[#a03417]">
                      recibí feedback real
                    </span>
                  </span>{" "}
                  antes de sentarte frente al entrevistador.
                </h1>
              ) : (
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] tracking-tighter leading-[1.08]">
                  Entrená a tus líderes y{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8b1e] via-[#da551d] to-[#a03417]">
                    desarrollá a tus equipos con IA.
                  </span>
                </h1>
              )}
            </div>

            {/* Subtitle — Sobrio, concreto y orientado a utilidad real */}
            <div>
              {segment === "persona" ? (
                <p className="text-base sm:text-lg text-[#4a423d] leading-relaxed max-w-xl">
                  Practicá entrevistas por voz y texto para el puesto y la empresa que elijas —incluyendo un{" "}
                  <strong className="text-[#111111] font-semibold">módulo para primer empleo sin experiencia previa</strong>. Recibí una devolución estructurada (1 al 10) con metodología de{" "}
                  <span className="text-[#da551d] font-semibold">Grupo Dinamis</span> para saber qué responder y qué corregir.
                </p>
              ) : (
                <p className="text-base sm:text-lg text-[#4a423d] leading-relaxed max-w-xl">
                  <strong className="text-[#111111] font-semibold">Dinamis AI</strong> ayuda a tus supervisores, líderes y mandos medios a practicar conversaciones difíciles de feedback, alineación de expectativas, resolución de conflictos y coaching de equipos en un entorno seguro y con feedback metodológico objetivo.
                </p>
              )}
            </div>

            {/* Multimodal Feature Micro-Pills */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold text-[#61100d]">
              {segment === "persona" ? (
                <>
                  <span className="px-3 py-1 rounded-lg bg-white border border-[#f1dfd3] shadow-2xs flex items-center gap-1.5">
                    <Mic className="w-3.5 h-3.5 text-[#ff8b1e]" />
                    Práctica por voz en tiempo real
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white border border-[#f1dfd3] shadow-2xs flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5 text-[#da551d]" />
                    Audio natural rioplatense
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white border border-[#f1dfd3] shadow-2xs flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-[#10b981]" />
                    1 pregunta por turno, como en la vida real
                  </span>
                </>
              ) : (
                <>
                  <span className="px-3 py-1 rounded-lg bg-white border border-[#f1dfd3] shadow-2xs flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#da551d]" />
                    Metodología STAR (+200 Empresas)
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white border border-[#f1dfd3] shadow-2xs flex items-center gap-1.5">
                    <BarChart3 className="w-3.5 h-3.5 text-[#ff8b1e]" />
                    Reportes estructurados para RRHH
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white border border-[#f1dfd3] shadow-2xs flex items-center gap-1.5">
                    <Brain className="w-3.5 h-3.5 text-[#10b981]" />
                    Práctica 24/7 en entorno seguro
                  </span>
                </>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              {segment === "persona" ? (
                <>
                  <a
                    href="https://app.grupodinamis.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleCtaClick("start_candidate_practice")}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#ff8b1e] to-[#da551d] hover:from-[#ff9a35] hover:to-[#c24614] text-white font-extrabold text-sm sm:text-base shadow-[0_8px_30px_rgba(255,139,30,0.38)] hover:shadow-[0_10px_38px_rgba(218,85,29,0.48)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <Rocket className="w-5 h-5 text-[#ffdfc5] group-hover:-translate-y-0.5 transition-transform" />
                    <span>Empezar mi diagnóstico gratis</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href="#simulador"
                    onClick={() => handleCtaClick("view_simulator_details")}
                    className="px-6 py-4 rounded-xl bg-white hover:bg-[#fff8f3] text-[#111111] border border-[#f1dfd3] hover:border-[#ff8b1e]/50 font-bold text-sm sm:text-base shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Play className="w-4 h-4 text-[#ff8b1e] fill-[#ff8b1e]" />
                    <span>Ver cómo funciona</span>
                  </a>
                </>
              ) : (
                <>
                  <a
                    href="https://app.grupodinamis.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleCtaClick("start_free_trial")}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#ff8b1e] to-[#da551d] hover:from-[#ff9a35] hover:to-[#c24614] text-white font-extrabold text-sm sm:text-base shadow-[0_8px_30px_rgba(255,139,30,0.38)] hover:shadow-[0_10px_38px_rgba(218,85,29,0.48)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <Sparkles className="w-5 h-5 text-[#ffdfc5] group-hover:rotate-12 transition-transform" />
                    <span>Solicitar piloto para mi empresa</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href="https://wa.me/5493425200959?text=Hola%20Grupo%20Dinamis%2C%20quiero%20agendar%20una%20demostraci%C3%B3n%20ejecutiva%20de%20Dinamis%20AI%20para%20mi%20empresa"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleCtaClick("book_corporate_demo")}
                    className="px-6 py-4 rounded-xl bg-white hover:bg-[#fff8f3] text-[#111111] border border-[#f1dfd3] hover:border-[#ff8b1e]/50 font-bold text-sm sm:text-base shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Play className="w-4 h-4 text-[#ff8b1e] fill-[#ff8b1e]" />
                    <span>Agendar demo ejecutiva (15 min)</span>
                  </a>
                </>
              )}
            </div>

            {/* Trust micro-badges */}
            <div className="flex flex-wrap items-center gap-5 text-xs text-[#6b625b] pt-0">
              {segment === "persona" ? (
                <>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                    <span className="font-medium">Sin tarjeta de crédito</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#da551d] shrink-0" />
                    <span className="font-medium">Metodología STAR · 15+ años de experiencia</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#ff8b1e] shrink-0" />
                    <span className="font-medium">Scorecard 1 al 10 garantizado</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                    <span className="font-medium">Piloto de 14 días sin costo de setup</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#da551d] shrink-0" />
                    <span>
                      <strong className="text-[#111111] font-bold">+200 empresas</strong>{" "}
                      acompañadas en LATAM
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-[#ff8b1e] shrink-0" />
                    <span className="font-medium">Reportes objetivos listos para Dirección</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Right Column (5 cols): 3D Robot Companion */}
          <div className="lg:col-span-5 flex justify-center">
            <RobotCompanion
              mode={segment}
              onSwitchMode={(mode) => setSegment(mode)}
            />
          </div>
        </div>

        {/* Bento Product Mockup Frame */}
        <div className="relative max-w-5xl mx-auto">
          {/* Warm backdrop glow */}
          <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#ff8b1e]/20 via-[#ffdfc5]/40 to-[#da551d]/20 blur-xl opacity-70" />

          {/* Bento Card Frame */}
          <div className="relative rounded-2xl bg-white border border-[#f1dfd3] shadow-[0_16px_48px_rgba(97,16,13,0.10)] overflow-hidden">
            {/* Top Workspace Bar */}
            <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-[#fff8f3] border-b border-[#f1dfd3] gap-3">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#da551d]/30" />
                  <div className="w-3 h-3 rounded-full bg-[#ff8b1e]/40" />
                  <div className="w-3 h-3 rounded-full bg-[#10b981]/60" />
                </div>
                <span className="text-xs font-mono text-[#6b625b] ml-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                  app.grupodinamis.com/ai/session-roleplay
                </span>
              </div>

              {/* Mode Selector */}
              <div className="flex items-center p-1 bg-white rounded-xl border border-[#f1dfd3] shadow-sm">
                <button
                  onClick={() => setActiveTab("entrevistas")}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeTab === "entrevistas"
                      ? "bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white shadow-sm"
                      : "text-[#6b625b] hover:text-[#111111]"
                  }`}
                >
                  Simulador de Entrevista (STAR)
                </button>
                <button
                  onClick={() => setActiveTab("coaching")}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeTab === "coaching"
                      ? "bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white shadow-sm"
                      : "text-[#6b625b] hover:text-[#111111]"
                  }`}
                >
                  AI Leadership Coach
                </button>
              </div>
            </div>

            {/* Inner Dashboard View */}
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start bg-[#fffbf9]">
              {/* Left Column: Interactive Simulation Dialogue with Cultural Authenticity */}
              <div className="lg:col-span-7 space-y-4">
                {activeTab === "entrevistas" ? (
                  <>
                    <div className="bento-card p-5 rounded-2xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-[#da551d] uppercase tracking-wider flex items-center gap-1.5">
                          <Brain className="w-4 h-4 text-[#da551d]" /> Lic. Martina Gómez · Reclutadora Virtual Dinamis
                        </span>
                        <span className="text-[11px] font-semibold text-[#0d9488] bg-[#0d9488]/10 px-2 py-0.5 rounded-md flex items-center gap-1">
                          <Volume2 className="w-3 h-3" /> Turno 2 de 8
                        </span>
                      </div>
                      <p className="text-sm font-medium text-[#111111] leading-relaxed">
                        &ldquo;¡Hola! Arranquemos. Contame sobre una situación reciente en la que hayas tenido que coordinar un proyecto con plazos muy ajustados y desacuerdos en el equipo. ¿Cuál fue tu rol concreto y cómo lo resolviste?&rdquo;
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#fff8f3] border border-[#ffdfc5] shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-[#ff8b1e]" />
                          <span className="text-xs font-bold text-[#61100d] uppercase tracking-wider">
                            Respuesta del Postulante
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-[#0d9488] bg-[#0d9488]/10 px-2 py-0.5 rounded flex items-center gap-1">
                          <Mic className="w-3 h-3 text-[#0d9488]" /> Entrada de Voz
                        </span>
                      </div>
                      <p className="text-sm text-[#4a423d] leading-relaxed">
                        &ldquo;En mi última experiencia en operaciones, debíamos integrar una nueva herramienta en cuatro semanas. Realicé reuniones breves de alineación, redistribuí las tareas según fortalezas individuales y definí checkpoints diarios. Logramos migrar a tiempo con un 98% de adopción del equipo.&rdquo;
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bento-card p-5 rounded-2xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-[#da551d] uppercase tracking-wider flex items-center gap-1.5">
                          <Users className="w-4 h-4 text-[#da551d]" /> Santiago (Colaborador Simulado · Roleplay)
                        </span>
                        <span className="text-[11px] font-semibold text-[#0d9488] bg-[#0d9488]/10 px-2 py-0.5 rounded-md">
                          Escenario: Feedback
                        </span>
                      </div>
                      <p className="text-sm font-medium text-[#111111] leading-relaxed">
                        &ldquo;Siento que la carga de trabajo del último sprint fue desmedida y que el esfuerzo no se está reconociendo. Necesito saber cómo vamos a reorganizar esto porque así no podemos seguir.&rdquo;
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#fff8f3] border border-[#ffdfc5] shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Brain className="w-4 h-4 text-[#ff8b1e]" />
                          <span className="text-xs font-bold text-[#61100d] uppercase tracking-wider">
                            Coach Ejecutivo Dinamis (Guía en Vivo)
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-[#4a423d] leading-relaxed">
                        &ldquo;Excelente oportunidad para separar hechos de juicios de valor. Probá con: &apos;Entiendo tu frustración con el sprint. Revisemos juntos los entregables específicos para redefinir prioridades y balancear la carga&apos;.&rdquo;
                      </p>
                    </div>
                  </>
                )}

                <div className="flex items-center justify-between text-xs text-[#6b625b] pt-2 px-1">
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#ff8b1e]" /> 1 pregunta por turno · Sin ruptura de personaje
                  </span>
                  <span className="font-mono text-[#0d9488] font-bold">Voz & Audio Activo</span>
                </div>
              </div>

              {/* Right Column: Real-time Evaluation Dashboard with Scorecard (1 to 10) */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-[#f1dfd3] shadow-[0_4px_20px_rgba(97,16,13,0.04)] space-y-5">
                <div className="flex items-center justify-between border-b border-[#f1dfd3] pb-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-[#ff8b1e]" />
                    <span className="text-sm font-bold text-[#111111]">Scorecard Predictivo</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30">
                    9.2 / 10 · Destacado
                  </span>
                </div>

                {/* Progress Indicators */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-[#4a423d]">Estructura de Respuesta (STAR)</span>
                      <span className="text-[#da551d] font-bold">9.4 / 10</span>
                    </div>
                    <div className="h-2 w-full bg-[#fff8f3] rounded-full overflow-hidden border border-[#f1dfd3]">
                      <div className="h-full bg-gradient-to-r from-[#ff8b1e] to-[#da551d] w-[94%] rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-[#4a423d]">Claridad, Asertividad y Cero Muletillas</span>
                      <span className="text-[#ff8b1e] font-bold">9.0 / 10</span>
                    </div>
                    <div className="h-2 w-full bg-[#fff8f3] rounded-full overflow-hidden border border-[#f1dfd3]">
                      <div className="h-full bg-gradient-to-r from-[#ff8b1e] to-[#da551d] w-[90%] rounded-full" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-[#4a423d]">Resolución y Manejo de Conflictos</span>
                      <span className="text-[#10b981] font-bold">8.8 / 10</span>
                    </div>
                    <div className="h-2 w-full bg-[#fff8f3] rounded-full overflow-hidden border border-[#f1dfd3]">
                      <div className="h-full bg-gradient-to-r from-[#10b981] to-[#0d9488] w-[88%] rounded-full" />
                    </div>
                  </div>
                </div>

                {/* AI Key Insights Box */}
                <div className="p-4 bg-[#fff8f3] rounded-xl border border-[#ffdfc5] text-xs space-y-1.5">
                  <span className="font-bold text-[#61100d] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#ff8b1e]" />
                    {activeTab === "entrevistas"
                      ? "Recomendación para la Vida Real:"
                      : "Sugerencia del Coach:"}
                  </span>
                  <p className="text-[#4a423d] text-[11px] leading-relaxed">
                    {activeTab === "entrevistas"
                      ? "Gran articulación de acciones individuales. Para la entrevista presencial, cuantificá el impacto o ahorro obtenido en horas para cerrar con broche de oro ante el selector."
                      : "Excelente mediación. Mantené la separación entre hechos objetivos y juicios de valor antes de consensuar acuerdos de equipo."}
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
