"use client";

import { useState } from "react";
import { ArrowRight, ShieldCheck, CheckCircle2, MessageSquare } from "lucide-react";
import { trackEvent } from "@/components/analytics";

export function LeadershipCoach() {
  const [activeScenario, setActiveScenario] = useState(0);

  const scenarios = [
    {
      title: "Retroalimentación sobre desempeño",
      tag: "Gestión de Equipo",
      description:
        "Cómo abordar desvíos en el rendimiento o incumplimiento de plazos de un colaborador de manera oportuna, fundamentando con hechos concretos y fijando compromisos viables.",
      methodologicalNote:
        "La metodología de Grupo Dinamis propone separar las conductas observables de las suposiciones personales, promoviendo preguntas que inviten al colaborador a reflexionar.",
    },
    {
      title: "Gestión de diferencias internas",
      tag: "Alineación y Clima",
      description:
        "Práctica de mediación entre miembros del equipo frente a fricciones operativas o desacuerdos de prioridades, cuidando el vínculo y orientando el foco al objetivo común.",
      methodologicalNote:
        "Se enfatiza la escucha neutral y la búsqueda de acuerdos basados en las responsabilidades del rol, evitando tomar partido prematuramente.",
    },
    {
      title: "Delegación responsable y seguimiento",
      tag: "Desarrollo de Personas",
      description:
        "Cómo transferir tareas críticas brindando el nivel adecuado de autonomía, sin desentenderse de los resultados ni incurrir en control excesivo.",
      methodologicalNote:
        "Se evalúa la claridad al definir el alcance de la tarea, los criterios de éxito esperados y los momentos formales de revisión.",
    },
    {
      title: "Comunicación de cambios y prioridades",
      tag: "Liderazgo y Cultura",
      description:
        "Preparación de mensajes ante modificaciones en procesos, objetivos o reestructuraciones de equipo, respondiendo inquietudes con serenidad.",
      methodologicalNote:
        "Se prioriza la coherencia del mensaje, la transparencia en lo que está definido y la contención de las dudas lógicas del equipo.",
    },
  ];

  return (
    <section id="coaching" className="py-20 bg-white border-b border-[#f1dfd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold text-[#da551d] uppercase tracking-wider block mb-2">
            Desarrollo de Mandos Medios y Directivos
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171412] tracking-tight mb-4">
            Entrenamiento en conversaciones de liderazgo
          </h2>
          <p className="text-base text-[#4a423d] leading-relaxed">
            La efectividad de un líder se construye en el día a día. Esta herramienta ofrece un espacio seguro para ejercitar y madurar conversaciones complejas antes de llevarlas a cabo en la organización.
          </p>
        </div>

        {/* Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Scenarios List */}
          <div className="lg:col-span-5 space-y-2.5">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#6b625b] px-1 block mb-1">
              Situaciones frecuentes de gestión:
            </span>
            {scenarios.map((sc, index) => (
              <button
                key={index}
                onClick={() => setActiveScenario(index)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  activeScenario === index
                    ? "bg-[#fffbf9] border-[#da551d] shadow-sm"
                    : "bg-white border-[#f1dfd3] hover:border-[#da551d]/40"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-medium text-[#da551d]">
                    {sc.tag}
                  </span>
                  <span className="text-[11px] text-[#808285]">
                    Caso #{index + 1}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-[#171412]">
                  {sc.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Right Column: Scenario Detail */}
          <div className="lg:col-span-7 rounded-xl bg-[#fffbf9] border border-[#f1dfd3] p-6 sm:p-8">
            <div className="border-b border-[#f1dfd3] pb-4 mb-5">
              <span className="text-xs font-medium text-[#da551d] uppercase tracking-wider block mb-1">
                Situación seleccionada
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-[#171412]">
                {scenarios[activeScenario].title}
              </h4>
            </div>

            <p className="text-sm text-[#4a423d] leading-relaxed mb-6">
              {scenarios[activeScenario].description}
            </p>

            <div className="p-4 rounded-lg bg-white border border-[#f1dfd3] space-y-1.5 mb-6">
              <span className="text-xs font-semibold text-[#171412] block">
                Criterio metodológico de Grupo Dinamis:
              </span>
              <p className="text-xs sm:text-sm text-[#6b625b] leading-relaxed">
                {scenarios[activeScenario].methodologicalNote}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#4a423d] mb-7">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#da551d] shrink-0" />
                <span>Espacio privado de aprendizaje</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#da551d] shrink-0" />
                <span>Foco en conductas observables</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#da551d] shrink-0" />
                <span>Práctica flexible a ritmo propio</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#da551d] shrink-0" />
                <span>Complementable con consultoría humana</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://app.grupodinamis.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("leadership_start_sim")}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#da551d] hover:bg-[#c24614] text-white font-medium text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
              >
                <span>Probar este caso en la plataforma</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/5493425200959?text=Hola%20Grupo%20Dinamis%2C%20quisiera%20consultar%20por%20programas%20de%20desarrollo%20de%20lideres"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#6b625b] hover:text-[#171412] underline"
              >
                Consultar por programas con consultores sénior
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
