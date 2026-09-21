"use client";

import { useState } from "react";
import { ArrowRight, Check, MessageSquare, Briefcase, FileCheck, Users } from "lucide-react";
import { trackEvent } from "@/components/analytics";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"entrevistas" | "coaching">("entrevistas");

  const handleCtaClick = (action: string) => {
    trackEvent("hero_cta_click", { action });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 bg-warm-texture border-b border-[#f1dfd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fff8f3] border border-[#f1dfd3] text-[#6b625b] text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-[#da551d]"></span>
            <span>Grupo Dinamis • Consultoría en RRHH y Desarrollo Organizacional</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171412] tracking-tight leading-tight mb-6">
            Desarrollo de líderes y práctica de entrevistas para organizaciones que{" "}
            <span className="text-[#da551d]">cuidan su talento</span>.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#4a423d] mb-9 leading-relaxed font-normal">
            Una plataforma desarrollada por consultores de Recursos Humanos para ejercitar conversaciones clave de gestión, evaluar competencias con objetividad y acompañar la evolución de mandos medios y directores.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            <a
              href="https://app.grupodinamis.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCtaClick("start_free_trial")}
              className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#da551d] hover:bg-[#c24614] text-white font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Acceder a la plataforma</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/5493425200959?text=Hola%20Grupo%20Dinamis%2C%20quisiera%20conversar%20sobre%20Dinamis%20AI%20para%20mi%20empresa"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCtaClick("book_corporate_demo")}
              className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-white hover:bg-[#fff8f3] text-[#171412] border border-[#f1dfd3] font-medium text-sm transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#da551d]" />
              <span>Consultar con el equipo</span>
            </a>
          </div>

          {/* Credibility highlights */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#6b625b] mb-14">
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#da551d]" />
              <span>Metodología STAR estructurada</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#da551d]" />
              <span>Más de 15 años de trayectoria en personas</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-[#da551d]" />
              <span>Entorno de práctica confidencial y seguro</span>
            </div>
          </div>
        </div>

        {/* Clean, Non-Gimmicky Workplace Preview */}
        <div className="max-w-4xl mx-auto rounded-xl bg-white border border-[#f1dfd3] shadow-lg shadow-black/[0.03] overflow-hidden">
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between px-5 py-3.5 bg-[#fff8f3] border-b border-[#f1dfd3] gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#da551d]"></div>
              <span className="text-xs font-medium text-[#4a423d]">
                Espacio de Práctica Profesional • Dinamis
              </span>
            </div>

            {/* Mode Selector */}
            <div className="flex items-center p-1 bg-white rounded-lg border border-[#f1dfd3]">
              <button
                onClick={() => setActiveTab("entrevistas")}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeTab === "entrevistas"
                    ? "bg-[#171412] text-white"
                    : "text-[#6b625b] hover:text-[#171412]"
                }`}
              >
                Práctica de Entrevistas (STAR)
              </button>
              <button
                onClick={() => setActiveTab("coaching")}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  activeTab === "coaching"
                    ? "bg-[#171412] text-white"
                    : "text-[#6b625b] hover:text-[#171412]"
                }`}
              >
                Conversaciones de Liderazgo
              </button>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#fffbf9]">
            {/* Left: Simulation flow */}
            <div className="md:col-span-7 space-y-4">
              {activeTab === "entrevistas" ? (
                <>
                  <div className="p-4 rounded-lg bg-white border border-[#f1dfd3]">
                    <span className="text-[11px] font-semibold text-[#da551d] uppercase tracking-wide block mb-1.5">
                      Pregunta por competencias planteada
                    </span>
                    <p className="text-sm text-[#171412] leading-relaxed">
                      &ldquo;Describí una situación reciente en la que tuviste que coordinar un proyecto con plazos muy exigentes y desacuerdos en el equipo. ¿Cuál fue tu rol y cómo lo resolviste?&rdquo;
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[#fff8f3] border border-[#f1dfd3]">
                    <span className="text-[11px] font-semibold text-[#6b625b] uppercase tracking-wide block mb-1.5">
                      Respuesta del profesional
                    </span>
                    <p className="text-sm text-[#4a423d] leading-relaxed">
                      &ldquo;En mi última experiencia en operaciones, debíamos integrar una nueva herramienta en cuatro semanas. Reuní al equipo para relevar inquietudes, reasignamos tareas según prioridades críticas y definimos revisiones breves cada dos días. Logramos completar la transición a tiempo y con buena adopción del equipo.&rdquo;
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-4 rounded-lg bg-white border border-[#f1dfd3]">
                    <span className="text-[11px] font-semibold text-[#da551d] uppercase tracking-wide block mb-1.5">
                      Contexto de la conversación
                    </span>
                    <p className="text-sm text-[#171412] leading-relaxed">
                      &ldquo;Un colaborador con buen historial técnico muestra desmotivación y fallas recurrentes en las entregas del último mes. Es necesario conversar para entender la causa de fondo y acordar un plan de acción sin generar una respuesta defensiva.&rdquo;
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-[#fff8f3] border border-[#f1dfd3]">
                    <span className="text-[11px] font-semibold text-[#6b625b] uppercase tracking-wide block mb-1.5">
                      Práctica de respuesta del líder
                    </span>
                    <p className="text-sm text-[#4a423d] leading-relaxed">
                      &ldquo;Noto que las últimas entregas tuvieron demoras que antes no ocurrían. Me interesa entender cómo estás viviendo el proyecto actualmente y qué dificultades estás encontrando para que busquemos juntos una solución viable.&rdquo;
                    </p>
                  </div>
                </>
              )}

              <p className="text-xs text-[#808285]">
                {activeTab === "entrevistas"
                  ? "La herramienta analiza la articulación de la respuesta y la presencia del método STAR."
                  : "Se evalúa el equilibrio entre claridad en la expectativa y empatía en la comunicación."}
              </p>
            </div>

            {/* Right: Methodological feedback panel */}
            <div className="md:col-span-5 bg-white rounded-lg p-5 border border-[#f1dfd3] space-y-4">
              <div className="border-b border-[#f1dfd3] pb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6b625b] block">
                  Devolución metodológica
                </span>
                <span className="text-sm font-bold text-[#171412]">
                  {activeTab === "entrevistas"
                    ? "Evaluación de competencias"
                    : "Criterios de liderazgo"}
                </span>
              </div>

              {/* Competency bars */}
              <div className="space-y-3 text-xs">
                <div>
                  <div className="flex justify-between font-medium text-[#4a423d] mb-1">
                    <span>Estructura (Situación - Acción - Resultado)</span>
                    <span className="font-semibold text-[#da551d]">Adecuada</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#f1dfd3] rounded-full overflow-hidden">
                    <div className="h-full bg-[#da551d] w-[90%] rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-medium text-[#4a423d] mb-1">
                    <span>Claridad y asertividad</span>
                    <span className="font-semibold text-[#da551d]">Muy buena</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#f1dfd3] rounded-full overflow-hidden">
                    <div className="h-full bg-[#da551d] w-[88%] rounded-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between font-medium text-[#4a423d] mb-1">
                    <span>Orientación a resultados y acuerdos</span>
                    <span className="font-semibold text-[#da551d]">Consistente</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#f1dfd3] rounded-full overflow-hidden">
                    <div className="h-full bg-[#da551d] w-[85%] rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Constructive recommendation */}
              <div className="p-3 bg-[#fff8f3] rounded-lg border border-[#f1dfd3] text-xs space-y-1">
                <span className="font-semibold text-[#171412] block">
                  Sugerencia de mejora:
                </span>
                <p className="text-[#6b625b] leading-relaxed">
                  {activeTab === "entrevistas"
                    ? "La respuesta es sólida y clara. Para enriquecerla aún más, cuantificá el impacto positivo o aprendizaje obtenido al cierre del proyecto."
                    : "El planteo inicial es acertado. Mantené el espacio de silencio tras la pregunta para permitir que el colaborador se exprese con naturalidad."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
