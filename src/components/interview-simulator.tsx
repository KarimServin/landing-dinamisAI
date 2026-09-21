"use client";

import { useState, useEffect } from "react";
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
import { useSegment } from "@/components/segment-context";

export function InterviewSimulator() {
  const { segment } = useSegment();
  const [activeAudience, setActiveAudience] = useState<"empresas" | "candidatos">("empresas");

  useEffect(() => {
    setActiveAudience(segment === "persona" ? "candidatos" : "empresas");
  }, [segment]);

  const companyFeatures = [
    {
      icon: Target,
      title: "Evaluación por Competencias (STAR)",
      description:
        "Estandariza los filtros de selección. La plataforma formula preguntas situacionales y valida si el postulante responde con Situación, Tarea, Acción y Resultado.",
    },
    {
      icon: Clock,
      title: "-70% de tiempo en filtros iniciales",
      description:
        "Los candidatos completan la primera entrevista con la IA según el perfil de búsqueda. Tu equipo de RRHH dedica sus entrevistas presenciales a los perfiles más calificados.",
    },
    {
      icon: ShieldCheck,
      title: "Criterios objetivos y sin sesgos",
      description:
        "Evaluaciones consistentes basadas en hechos demostrables y competencias observables, asegurando igualdad de oportunidades y mejor fit cultural.",
    },
    {
      icon: FileText,
      title: "Informes ejecutivos comparativos",
      description:
        "Generación automática de un reporte con puntajes de oratoria, asertividad, resolución de problemas y fortalezas detectadas en cada postulante.",
    },
  ];

  const candidateFeatures = [
    {
      icon: Sparkles,
      title: "Simula el puesto que buscas",
      description:
        "Desde mandos medios y analistas hasta directores y posiciones técnicas. Personaliza el nivel de exigencia y las preguntas de la entrevista.",
    },
    {
      icon: Target,
      title: "Feedback estructurado al instante",
      description:
        "Descubre en segundos si tus respuestas transmiten solvencia, si tus ejemplos son claros y cómo estructurar mejor tus logros pasados bajo modelo STAR.",
    },
    {
      icon: ShieldCheck,
      title: "Espacio seguro y confidencial",
      description:
        "Equivócate, repite y perfecciona tu discurso tantas veces como necesites antes de estar frente al reclutador real.",
    },
    {
      icon: FileText,
      title: "Claridad y comunicación asertiva",
      description:
        "Detección de muletillas, coherencia del mensaje y recomendaciones pedagógicas para proyectar máxima seguridad profesional.",
    },
  ];

  return (
    <section id="simulador" className="py-24 bg-[#fffbf9] border-b border-[#f1dfd3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffdfc5] border border-[#ff8b1e]/30 text-[#61100d] text-xs font-bold uppercase tracking-wider mb-4">
            Pilar 01 • Selección & Talento
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight mb-4">
            Simulador de Entrevistas con{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8b1e] to-[#da551d]">
              Metodología STAR
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#4a423d] leading-relaxed">
            Diseñado para que las empresas identifiquen al mejor talento en una fracción de tiempo, y para que los profesionales ganen la solidez necesaria para superar cualquier proceso.
          </p>

          {/* Toggle Button */}
          <div className="mt-8 inline-flex p-1.5 bg-white rounded-2xl border border-[#f1dfd3] shadow-sm">
            <button
              onClick={() => setActiveAudience("empresas")}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                activeAudience === "empresas"
                  ? "bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white shadow-sm"
                  : "text-[#6b625b] hover:text-[#111111]"
              }`}
            >
              Para Equipos de Selección & RRHH
            </button>
            <button
              onClick={() => setActiveAudience("candidatos")}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                activeAudience === "candidatos"
                  ? "bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white shadow-sm"
                  : "text-[#6b625b] hover:text-[#111111]"
              }`}
            >
              Para Candidatos & Profesionales
            </button>
          </div>
        </div>

        {/* Feature Grid with Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(activeAudience === "empresas" ? companyFeatures : candidateFeatures).map(
            (feat, index) => {
              const Icon = feat.icon;
              return (
                <div
                  key={index}
                  className="bento-card p-7 rounded-2xl flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#fff8f3] border border-[#ffdfc5] flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-[#da551d]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#111111] mb-2.5">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4a423d] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#f1dfd3] flex items-center text-xs text-[#61100d] gap-1.5 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff8b1e]" />
                    <span>Metodología Grupo Dinamis</span>
                  </div>
                </div>
              );
            }
          )}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#fff8f3] via-[#ffdfc5]/40 to-[#fff8f3] border border-[#ffdfc5] p-7 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_4px_20px_rgba(97,16,13,0.03)]">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold text-[#61100d] uppercase tracking-wider">
              Experiencia Práctica
            </span>
            <h4 className="text-xl font-bold text-[#111111]">
              ¿Querés ver cómo evalúa una entrevista Dinamis AI?
            </h4>
            <p className="text-sm text-[#4a423d]">
              Iniciá una simulación de 3 minutos ahora mismo sin costo de alta.
            </p>
          </div>
          <a
            href="https://app.grupodinamis.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("simulator_callout_click")}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ff8b1e] to-[#da551d] hover:from-[#ff8b1e] hover:to-[#c24614] text-white font-bold text-sm shadow-[0_4px_16px_rgba(255,139,30,0.25)] transition-all flex items-center gap-2 group"
          >
            <span>Iniciar Simulación Gratis</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
