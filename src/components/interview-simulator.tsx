"use client";

import { useState } from "react";
import {
  FileText,
  Target,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { trackEvent } from "@/components/analytics";

export function InterviewSimulator() {
  const [activeAudience, setActiveAudience] = useState<"empresas" | "candidatos">("empresas");

  const companyFeatures = [
    {
      icon: Target,
      title: "Estandarización por competencias",
      description:
        "Preguntas estructuradas bajo el modelo STAR (Situación, Tarea, Acción y Resultado) para evaluar comportamientos reales y demostrables.",
    },
    {
      icon: Clock,
      title: "Optimización del tiempo de selección",
      description:
        "Permite ordenar los filtros iniciales de postulantes para que el equipo de RRHH dedique tiempo presencial a los perfiles más adecuados.",
    },
    {
      icon: ShieldCheck,
      title: "Criterios claros y consistentes",
      description:
        "Evaluaciones objetivas orientadas a reducir sesgos y asegurar que cada candidato sea medido bajo los mismos parámetros del perfil.",
    },
    {
      icon: FileText,
      title: "Informes de síntesis por candidato",
      description:
        "Resúmenes ejecutivos con las fortalezas comunicacionales observadas, consistencia en los ejemplos y aspectos a profundizar.",
    },
  ];

  const candidateFeatures = [
    {
      icon: Target,
      title: "Preparación para roles reales",
      description:
        "Ensayá preguntas y situaciones adaptadas al nivel de responsabilidad y al área funcional de tu interés profesional.",
    },
    {
      icon: CheckCircle2,
      title: "Estructuración de logros (STAR)",
      description:
        "Aprendé a relatar tus experiencias con precisión, destacando tus acciones individuales y los resultados concretos alcanzados.",
    },
    {
      icon: ShieldCheck,
      title: "Espacio confidencial de práctica",
      description:
        "Un entorno privado donde podés ensayar, corregir tu oratoria y ganar serenidad antes de una entrevista real.",
    },
    {
      icon: FileText,
      title: "Observaciones de mejora",
      description:
        "Indicaciones constructivas sobre claridad argumental, precisión del mensaje y cómo comunicar tu valor con naturalidad.",
    },
  ];

  return (
    <section id="simulador" className="py-20 bg-[#fffbf9] border-b border-[#f1dfd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold text-[#da551d] uppercase tracking-wider block mb-2">
            Metodología de Selección
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171412] tracking-tight mb-4">
            Simulación de entrevistas basada en competencias
          </h2>
          <p className="text-base text-[#4a423d] leading-relaxed">
            Una herramienta pensada para brindar rigurosidad a los procesos de búsqueda y permitir a los profesionales preparar sus entrevistas con criterio y seguridad.
          </p>

          {/* Toggle Button */}
          <div className="mt-7 inline-flex p-1 bg-white rounded-lg border border-[#f1dfd3]">
            <button
              onClick={() => setActiveAudience("empresas")}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors ${
                activeAudience === "empresas"
                  ? "bg-[#171412] text-white"
                  : "text-[#6b625b] hover:text-[#171412]"
              }`}
            >
              Para equipos de Recursos Humanos
            </button>
            <button
              onClick={() => setActiveAudience("candidatos")}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors ${
                activeAudience === "candidatos"
                  ? "bg-[#171412] text-white"
                  : "text-[#6b625b] hover:text-[#171412]"
              }`}
            >
              Para postulantes y profesionales
            </button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(activeAudience === "empresas" ? companyFeatures : candidateFeatures).map(
            (feat, index) => {
              const Icon = feat.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white border border-[#f1dfd3] flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#fff8f3] border border-[#f1dfd3] flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-[#da551d]" />
                    </div>
                    <h3 className="text-base font-bold text-[#171412] mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6b625b] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            }
          )}
        </div>

        {/* Bottom invitation */}
        <div className="mt-12 rounded-xl bg-[#fff8f3] border border-[#f1dfd3] p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-semibold text-[#171412]">
              ¿Querés conocer la dinámica de evaluación?
            </h4>
            <p className="text-xs sm:text-sm text-[#6b625b]">
              Podés realizar una práctica inicial en la plataforma para evaluar su pertinencia en tu organización.
            </p>
          </div>
          <a
            href="https://app.grupodinamis.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("simulator_callout_click")}
            className="shrink-0 px-5 py-2.5 rounded-lg bg-[#da551d] hover:bg-[#c24614] text-white font-medium text-xs sm:text-sm transition-colors flex items-center gap-2"
          >
            <span>Ingresar a la plataforma</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
