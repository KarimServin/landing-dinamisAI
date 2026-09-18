"use client";

import { useState } from "react";
import {
  FileText,
  Target,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Clock,
  ArrowRight,
} from "lucide-react";
import { trackEvent } from "@/components/analytics";

export function InterviewSimulator() {
  const [activeAudience, setActiveAudience] = useState<"empresas" | "candidatos">("empresas");

  const companyFeatures = [
    {
      icon: Target,
      title: "Evaluación por Competencias (STAR)",
      description:
        "Estandariza los filtros de selección. La IA formula preguntas situacionales y valida si el postulante responde con Situación, Tarea, Acción y Resultado.",
    },
    {
      icon: Clock,
      title: "-70% Tiempo de Reclutamiento",
      description:
        "Los candidatos realizan la primera entrevista con la IA según tu perfil de búsqueda. Tu equipo solo entrevista a los perfiles con mejor match cultural y técnico.",
    },
    {
      icon: ShieldCheck,
      title: "Selección Ciega sin Sesgos",
      description:
        "Decisiones basadas en datos y desempeño demostrable. Evaluaciones objetivas que garantizan igualdad de oportunidades y mejor fit cultural.",
    },
    {
      icon: FileText,
      title: "Informes Comparativos Ejecutivos",
      description:
        "Generación automática de un reporte con puntajes de oratoria, asertividad, resolución de problemas y fortalezas detectadas.",
    },
  ];

  const candidateFeatures = [
    {
      icon: Sparkles,
      title: "Simula el Rol que Quieras",
      description:
        "Desde analistas junior hasta directores de área y posiciones técnicas. Personaliza el nivel de exigencia y las preguntas de la entrevista.",
    },
    {
      icon: Target,
      title: "Feedback Predictivo Inmediato",
      description:
        "Descubre en segundos si tus respuestas transmiten solvencia, si tus ejemplos son claros y cómo estructurar mejor tus logros pasados.",
    },
    {
      icon: ShieldCheck,
      title: "Espacio Seguro y Confidencial",
      description:
        "Equivócate, repite y perfecciona tu discurso tantas veces como necesites antes de estar frente al reclutador real.",
    },
    {
      icon: FileText,
      title: "Análisis de Muletillas y Tono",
      description:
        "Detección de claridad vocal, ritmo, precisión verbal y coherencia argumental para proyectar máxima seguridad.",
    },
  ];

  return (
    <section id="simulador" className="py-24 bg-[#07090E] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] glow-blue pointer-events-none -z-10 blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-700/50 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Pilar 01 • Selección & Talento
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Simulador de Entrevistas con{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Metodología STAR
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Diseñado para que las empresas identifiquen al mejor talento en una fracción de tiempo, y para que los profesionales ganen la confianza necesaria para superar cualquier proceso.
          </p>

          {/* Toggle between Company and Candidate view */}
          <div className="mt-8 inline-flex p-1.5 bg-[#0F1422] rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveAudience("empresas")}
              className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all ${
                activeAudience === "empresas"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Para Equipos de Selección & RRHH
            </button>
            <button
              onClick={() => setActiveAudience("candidatos")}
              className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all ${
                activeAudience === "candidatos"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Para Candidatos & Profesionales
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
                  className="p-6 rounded-2xl bg-[#0C101C] border border-slate-800/90 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-800/40 flex items-center justify-center mb-5 group-hover:bg-blue-600/20 group-hover:border-blue-500/60 transition-colors">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center text-xs text-slate-400 gap-1.5 font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Algoritmo entrenado por psicólogos de RRHH</span>
                  </div>
                </div>
              );
            }
          )}
        </div>

        {/* Highlight Callout Box */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-cyan-950/40 border border-blue-800/50 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">
              Experiencia Inmersiva
            </span>
            <h4 className="text-xl font-bold text-white">
              ¿Quieres probar cómo evalúa una entrevista Dinamis AI?
            </h4>
            <p className="text-sm text-slate-300">
              Inicia una simulación de 3 minutos ahora mismo sin costo de alta.
            </p>
          </div>
          <a
            href="https://app.grupodinamis.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("simulator_callout_click")}
            className="shrink-0 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2 group"
          >
            <span>Iniciar Simulación Gratis</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
