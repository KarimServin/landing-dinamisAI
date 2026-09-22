"use client";

import { Check, X, Sparkles, Mic, Brain, ShieldAlert, Award, FileSpreadsheet, Bot, UserCheck } from "lucide-react";

export function ComparisonTable() {
  const comparisonItems = [
    {
      feature: "Punto de partida",
      generic: "Hoja en blanco; exige que el usuario sepa redactar un prompt técnico extenso.",
      dinamis: "Entorno guiado llave en mano con perfiles, áreas y empresas autocalibradas.",
      icon: Sparkles,
    },
    {
      feature: "Conducta del entrevistador",
      generic: "Tiende a salirse del rol, responder con listas excesivas o hacer varias preguntas al mismo tiempo.",
      dinamis: "Orquestación de turnos cerrada: 1 pregunta por turno, gestión de fases (apertura, desarrollo, cierre) y roleplay estricto.",
      icon: Bot,
    },
    {
      feature: "Tratamiento del Primer Empleo",
      generic: "Exige años de experiencia previa por defecto a cualquier perfil.",
      dinamis: "Reglas pedagógicas estrictas: prohíbe exigir experiencia a juniors y evalúa potencial, motivación y adaptabilidad.",
      icon: UserCheck,
    },
    {
      feature: "Cierre y Evaluación",
      generic: "Termina cuando el usuario se cansa; rara vez brinda un scorecard cuantitativo consistente.",
      dinamis: "Cierre automático controlado con reporte formal estructurado (calificación 1–10, fortalezas y puntos de mejora).",
      icon: FileSpreadsheet,
    },
    {
      feature: "Tono de voz y autenticidad",
      generic: "Español neutro genérico (\"Tú tienes\", \"Cuéntame\").",
      dinamis: "Español rioplatense corporativo natural y cálido (\"Contame\", \"Arranquemos\"), con identidad y avatar de reclutador.",
      icon: Brain,
    },
    {
      feature: "Persistencia e Historial",
      generic: "Chats dispersos sin métricas ni trazabilidad.",
      dinamis: "Historial aislado por usuario en base de datos segura, con seguimiento de progreso, métricas de XP y roles.",
      icon: Award,
    },
    {
      feature: "Entrenamiento de Oratoria",
      generic: "Principalmente diseñado para lectura y tipeo de texto.",
      dinamis: "Interacción bidireccional por voz (micrófono + audio) optimizada para simular una videollamada o entrevista telefónica real.",
      icon: Mic,
    },
  ];

  return (
    <section id="comparativa" className="py-24 bg-gradient-to-b from-white via-[#fffbf9] to-white border-b border-[#f1dfd3] relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#ffdfc5]/30 to-[#ff8b1e]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffdfc5] border border-[#ff8b1e]/30 text-[#61100d] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#ff8b1e]" />
            <span>Diferenciación de Producto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight mb-4">
            ¿Por qué Dinamis AI no es{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8b1e] via-[#da551d] to-[#61100d]">
              otra IA conversacional genérica?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#4a423d] leading-relaxed">
            Dinamis AI no es un chatbot para responder preguntas en una pantalla en blanco:{" "}
            <strong className="text-[#111111] font-semibold">
              es un simulador de vuelo para conversaciones de alta presión.
            </strong>
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-3xl bg-white border border-[#f1dfd3] shadow-[0_16px_50px_rgba(97,16,13,0.06)] overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#fff8f3] border-b border-[#f1dfd3] p-4 sm:p-6 text-xs sm:text-sm font-bold">
            <div className="col-span-4 sm:col-span-3 text-[#61100d] uppercase tracking-wider flex items-center gap-2">
              <span>Característica</span>
            </div>
            <div className="col-span-4 sm:col-span-4 text-[#808285] uppercase tracking-wider flex items-center gap-2 border-l border-[#f1dfd3] pl-3 sm:pl-6">
              <span className="w-2 h-2 rounded-full bg-neutral-300 hidden sm:inline-block" />
              <span>IAs Generales (ChatGPT / Claude)</span>
            </div>
            <div className="col-span-4 sm:col-span-5 text-[#da551d] uppercase tracking-wider flex items-center gap-2 border-l-2 border-[#ff8b1e] pl-3 sm:pl-6 bg-[#ffdfc5]/25 -my-4 sm:-my-6 py-4 sm:py-6">
              <span className="w-2 h-2 rounded-full bg-[#ff8b1e] animate-pulse" />
              <span>Dinamis AI — Simulador Avanzado</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#f1dfd3]">
            {comparisonItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="grid grid-cols-12 p-4 sm:p-6 hover:bg-[#fffbf9] transition-colors items-start text-xs sm:text-sm"
                >
                  {/* Feature Label */}
                  <div className="col-span-4 sm:col-span-3 pr-2 sm:pr-4">
                    <span className="font-bold text-[#111111] flex items-center gap-2">
                      <Icon className="w-4 h-4 text-[#ff8b1e] shrink-0 hidden sm:inline-block" />
                      <span>{item.feature}</span>
                    </span>
                  </div>

                  {/* Generic AI Column */}
                  <div className="col-span-4 sm:col-span-4 border-l border-[#f1dfd3] pl-3 sm:pl-6 pr-2 sm:pr-4 text-[#6b625b]">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item.generic}</span>
                    </div>
                  </div>

                  {/* Dinamis AI Column */}
                  <div className="col-span-4 sm:col-span-5 border-l-2 border-[#ff8b1e] pl-3 sm:pl-6 bg-[#fff8f3]/40 -my-4 sm:-my-6 py-4 sm:py-6">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#da551d] font-bold shrink-0 mt-0.5" />
                      <span className="text-[#111111] font-semibold leading-relaxed">
                        {item.dinamis}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Synthesis Highlight Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#fff8f3] via-[#ffdfc5]/40 to-[#fff8f3] border border-[#ffdfc5] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white border border-[#ffdfc5] flex items-center justify-center shrink-0 shadow-xs">
              <Brain className="w-6 h-6 text-[#da551d]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#111111] mb-1">
                La regla del Simulador: Roleplay estricto sin ruptura de personaje
              </h4>
              <p className="text-xs sm:text-sm text-[#4a423d] leading-relaxed max-w-3xl">
                A diferencia de un asistente conversacional común, el selector virtual de Dinamis actúa 100% como un reclutador real: no da explicaciones teóricas a mitad de la entrevista ni consiente respuestas vagas; repregunta, profundiza y evalúa al final con un Scorecard formal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
