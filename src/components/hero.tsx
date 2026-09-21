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
  Building2,
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
    <section className="relative pt-32 pb-20 md:pt-38 md:pb-28 overflow-hidden bg-gradient-to-b from-[#fff8f3] via-[#fffbf9] to-[#fffbf9] border-b border-[#f1dfd3]">
      {/* Subtle warm ambient glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] md:w-[850px] md:h-[450px] bg-gradient-to-b from-[#ffdfc5]/40 via-[#ff8b1e]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Audience Switcher at top of Hero */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-white rounded-2xl border border-[#f1dfd3] shadow-sm">
            <button
              type="button"
              onClick={() => setSegment("empresa")}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                segment === "empresa"
                  ? "bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white shadow-sm scale-102"
                  : "text-[#6b625b] hover:text-[#111111]"
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>🏢 Soy Empresa (Liderazgo & Selección)</span>
            </button>
            <button
              type="button"
              onClick={() => setSegment("persona")}
              className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                segment === "persona"
                  ? "bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white shadow-sm scale-102"
                  : "text-[#6b625b] hover:text-[#111111]"
              }`}
            >
              <Rocket className="w-4 h-4" />
              <span>🚀 Soy Persona (Búsqueda de Empleo & STAR)</span>
            </button>
          </div>
        </div>

        {/* 2-Column Split: Value Prop + 3D Robot Companion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          {/* Left Column (7 cols): Copy, CTAs, Social Proof */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffdfc5] border border-[#ff8b1e]/30 text-[#61100d] text-xs sm:text-sm font-semibold shadow-xs transition-all duration-300">
              <span className="w-2 h-2 rounded-full bg-[#ff8b1e] animate-pulse"></span>
              <span>
                {segment === "persona"
                  ? "Simulador de Entrevistas & Salto de Carrera"
                  : "Inteligencia Artificial para Capital Humano"}
              </span>
              <span className="text-[#da551d]/40">|</span>
              <span className="text-[#111111] font-bold">Grupo Dinamis</span>
            </div>

            {/* Punchy SaaS Marketing H1 */}
            <div>
              {segment === "persona" ? (
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-[1.14] animate-in fade-in duration-300">
                  Superá tus entrevistas laborales y da el{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8b1e] via-[#da551d] to-[#61100d]">
                    salto al trabajo que merecés
                  </span>{" "}
                  con Dinamis AI.
                </h1>
              ) : (
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight leading-[1.14] animate-in fade-in duration-300">
                  Multiplica el talento de tu empresa con{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8b1e] via-[#da551d] to-[#61100d]">
                    simulación de entrevistas
                  </span>{" "}
                  y coaching de líderes.
                </h1>
              )}
            </div>

            {/* Subtitle */}
            <div>
              {segment === "persona" ? (
                <p className="text-base sm:text-lg text-[#4a423d] leading-relaxed font-normal animate-in fade-in duration-300">
                  Vencé los nervios, aprendé a estructurar tus logros bajo el{" "}
                  <strong className="text-[#111111] font-semibold">método STAR</strong> y recibí feedback diagnóstico al instante antes de estar frente al reclutador real. Diseñado con los más de 15 años de experiencia selectiva de{" "}
                  <span className="text-[#da551d] font-semibold">Grupo Dinamis</span>.
                </p>
              ) : (
                <p className="text-base sm:text-lg text-[#4a423d] leading-relaxed font-normal animate-in fade-in duration-300">
                  Digitaliza más de 15 años de metodología experta en Recursos Humanos.{" "}
                  <strong className="text-[#111111] font-semibold">Dinamis AI</strong> evalúa competencias bajo modelo STAR con diagnósticos inmediatos y brinda a tus mandos medios un{" "}
                  <span className="text-[#da551d] font-semibold">coach ejecutivo 24/7</span> para entrenar conversaciones difíciles con total confianza.
                </p>
              )}
            </div>

            {/* Dynamic Dual Conversion CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              {segment === "persona" ? (
                <>
                  <a
                    href="https://app.grupodinamis.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleCtaClick("start_candidate_practice")}
                    className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#ff8b1e] to-[#da551d] hover:from-[#ff8b1e] hover:to-[#c24614] text-white font-bold text-sm sm:text-base shadow-[0_6px_24px_rgba(255,139,30,0.3)] hover:shadow-[0_8px_30px_rgba(218,85,29,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <Rocket className="w-5 h-5 text-[#ffdfc5] group-hover:-translate-y-0.5 transition-transform" />
                    <span>Entrenar Mi Entrevista Gratis</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>

                  <a
                    href="#simulador"
                    onClick={() => handleCtaClick("view_simulator_details")}
                    className="px-6 py-3.5 rounded-xl bg-white hover:bg-[#fff8f3] text-[#111111] border border-[#f1dfd3] hover:border-[#ff8b1e]/50 font-bold text-sm sm:text-base shadow-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Play className="w-4 h-4 text-[#ff8b1e] fill-[#ff8b1e]" />
                    <span>Ver Cómo Funciona</span>
                  </a>
                </>
              ) : (
                <>
                  <a
                    href="https://app.grupodinamis.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleCtaClick("start_free_trial")}
                    className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#ff8b1e] to-[#da551d] hover:from-[#ff8b1e] hover:to-[#c24614] text-white font-bold text-sm sm:text-base shadow-[0_6px_24px_rgba(255,139,30,0.3)] hover:shadow-[0_8px_30px_rgba(218,85,29,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
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
                    className="px-6 py-3.5 rounded-xl bg-white hover:bg-[#fff8f3] text-[#111111] border border-[#f1dfd3] hover:border-[#ff8b1e]/50 font-bold text-sm sm:text-base shadow-xs transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Play className="w-4 h-4 text-[#ff8b1e] fill-[#ff8b1e]" />
                    <span>Solicitar Demo Corporativa</span>
                  </a>
                </>
              )}
            </div>

            {/* Trust Highlights */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#6b625b] pt-1">
              {segment === "persona" ? (
                <>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#ff8b1e]" />
                    <span className="font-medium">100% Confidencial y seguro</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#da551d]" />
                    <span className="font-medium">Metodología STAR validada</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#ff8b1e]" />
                    <span className="font-medium">Feedback instantáneo con IA</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#ff8b1e]" />
                    <span className="font-medium">Sin tarjeta requerida</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#da551d]" />
                    <span className="font-medium">Metodología STAR (+200 empresas)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#ff8b1e]" />
                    <span className="font-medium">Confidencialidad garantizada</span>
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
          {/* Subtle warm backdrop glow */}
          <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-[#ff8b1e]/20 via-[#ffdfc5]/40 to-[#da551d]/20 blur-xl opacity-70"></div>

          {/* Bento Card Frame */}
          <div className="relative rounded-2xl bg-white border border-[#f1dfd3] shadow-[0_12px_40px_rgba(97,16,13,0.08)] overflow-hidden">
            {/* Top Workspace Bar */}
            <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-[#fff8f3] border-b border-[#f1dfd3] gap-3">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#da551d]/30"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ff8b1e]/40"></div>
                  <div className="w-3 h-3 rounded-full bg-[#10b981]/60"></div>
                </div>
                <span className="text-xs font-mono text-[#6b625b] ml-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping"></span>
                  app.grupodinamis.com/ai/session
                </span>
              </div>

              {/* Mode Selector */}
              <div className="flex items-center p-1 bg-white rounded-xl border border-[#f1dfd3] shadow-sm">
                <button
                  onClick={() => setActiveTab("entrevistas")}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
                    activeTab === "entrevistas"
                      ? "bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white shadow-sm"
                      : "text-[#6b625b] hover:text-[#111111]"
                  }`}
                >
                  Simulador de Entrevista (STAR)
                </button>
                <button
                  onClick={() => setActiveTab("coaching")}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
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
              {/* Left Column: Interactive Simulation Dialogue */}
              <div className="lg:col-span-7 space-y-4">
                {activeTab === "entrevistas" ? (
                  <>
                    <div className="bento-card p-5 rounded-2xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-[#da551d] uppercase tracking-wider flex items-center gap-1.5">
                          <Brain className="w-4 h-4 text-[#da551d]" /> Pregunta por Competencias (STAR)
                        </span>
                        <span className="text-[11px] font-semibold text-[#0d9488] bg-[#0d9488]/10 px-2 py-0.5 rounded-md">
                          IA Evaluadora
                        </span>
                      </div>
                      <p className="text-sm font-medium text-[#111111] leading-relaxed">
                        &ldquo;Describí una situación reciente en la que hayas tenido que coordinar un proyecto con plazos muy ajustados y desacuerdos en el equipo. ¿Cuál fue tu rol y cómo lo resolviste?&rdquo;
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#fff8f3] border border-[#ffdfc5] shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="w-4 h-4 text-[#ff8b1e]" />
                        <span className="text-xs font-bold text-[#61100d] uppercase tracking-wider">
                          Respuesta del Candidato / Profesional
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
                          <Users className="w-4 h-4 text-[#da551d]" /> Colaborador Simulado (Roleplay de Liderazgo)
                        </span>
                        <span className="text-[11px] font-semibold text-[#0d9488] bg-[#0d9488]/10 px-2 py-0.5 rounded-md">
                          Escenario Activo
                        </span>
                      </div>
                      <p className="text-sm font-medium text-[#111111] leading-relaxed">
                        &ldquo;Siento que la carga de trabajo del último sprint fue desmedida y que el esfuerzo no se está reconociendo. Necesito saber cómo vamos a reorganizar esto porque así no podemos seguir.&rdquo;
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#fff8f3] border border-[#ffdfc5] shadow-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <Brain className="w-4 h-4 text-[#ff8b1e]" />
                        <span className="text-xs font-bold text-[#61100d] uppercase tracking-wider">
                          Guía del AI Leadership Coach
                        </span>
                      </div>
                      <p className="text-sm text-[#4a423d] leading-relaxed">
                        &ldquo;Excelente oportunidad para aplicar validación empática antes de justificar la operativa. Probá con: &apos;Entiendo lo demandante que fue este período y valoro el compromiso de todo el equipo. Revisemos juntos las prioridades inmediatas para equilibrar la carga&apos;.&rdquo;
                      </p>
                    </div>
                  </>
                )}

                <div className="flex items-center justify-between text-xs text-[#6b625b] pt-2 px-1">
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#ff8b1e]"></span> Análisis metodológico en tiempo real
                  </span>
                  <span className="font-mono text-[#0d9488] font-bold">Feedback Inteligente</span>
                </div>
              </div>

              {/* Right Column: Real-time Evaluation Dashboard */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-[#f1dfd3] shadow-[0_4px_20px_rgba(97,16,13,0.04)] space-y-5">
                <div className="flex items-center justify-between border-b border-[#f1dfd3] pb-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-[#ff8b1e]" />
                    <span className="text-sm font-bold text-[#111111]">Diagnóstico de Desempeño</span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-[#10b981]/15 text-[#10b981] border border-[#10b981]/30">
                    Match 92% • Excelente
                  </span>
                </div>

                {/* Progress Indicators */}
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-[#4a423d]">Estructura de Respuesta (STAR)</span>
                      <span className="text-[#da551d] font-bold">94%</span>
                    </div>
                    <div className="h-2 w-full bg-[#fff8f3] rounded-full overflow-hidden border border-[#f1dfd3]">
                      <div className="h-full bg-gradient-to-r from-[#ff8b1e] to-[#da551d] w-[94%] rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-[#4a423d]">Claridad y Asertividad</span>
                      <span className="text-[#ff8b1e] font-bold">90%</span>
                    </div>
                    <div className="h-2 w-full bg-[#fff8f3] rounded-full overflow-hidden border border-[#f1dfd3]">
                      <div className="h-full bg-gradient-to-r from-[#ff8b1e] to-[#da551d] w-[90%] rounded-full"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-1">
                      <span className="text-[#4a423d]">Liderazgo & Gestión de Conflictos</span>
                      <span className="text-[#10b981] font-bold">88%</span>
                    </div>
                    <div className="h-2 w-full bg-[#fff8f3] rounded-full overflow-hidden border border-[#f1dfd3]">
                      <div className="h-full bg-gradient-to-r from-[#10b981] to-[#0d9488] w-[88%] rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* AI Key Insights Box */}
                <div className="p-4 bg-[#fff8f3] rounded-xl border border-[#ffdfc5] text-xs space-y-1.5">
                  <span className="font-bold text-[#61100d] block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#ff8b1e]" />
                    {activeTab === "entrevistas"
                      ? "Observación de Grupo Dinamis:"
                      : "Sugerencia del Coach:"}
                  </span>
                  <p className="text-[#4a423d] text-[11px] leading-relaxed">
                    {activeTab === "entrevistas"
                      ? "Demuestra una gran solidez en la articulación de acciones individuales. Te recomendamos cuantificar el impacto o ahorro obtenido para elevar el valor ante el selector."
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
