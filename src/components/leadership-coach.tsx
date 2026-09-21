"use client";

import { useState } from "react";
import {
  Compass,
  MessageCircleQuestion,
  TrendingUp,
  Brain,
  Shield,
  Layers,
  ArrowRight,
} from "lucide-react";
import { trackEvent } from "@/components/analytics";

export function LeadershipCoach() {
  const [activeScenario, setActiveScenario] = useState(0);

  const scenarios = [
    {
      title: "Feedback Correctivo y Empático",
      tag: "Gestión del Desempeño",
      description:
        "Entrena cómo abordar la baja de rendimiento de un colaborador clave sin desmotivarlo, equilibrando firmeza y empatía para fijar compromisos claros.",
      aiTip:
        "La IA te orienta a separar los hechos objetivos de las interpretaciones, usando preguntas poderosas en lugar de sermones.",
    },
    {
      title: "Resolución de Conflictos en el Equipo",
      tag: "Clima Organizacional",
      description:
        "Simula una mediación entre dos miembros enfrentados por recursos o responsabilidades cruzadas, restaurando la confianza y la sinergia.",
      aiTip:
        "Aprende a desactivar la defensividad y centrar el diálogo en los objetivos estratégicos compartidos.",
    },
    {
      title: "Delegación Efectiva y Seguimiento",
      tag: "Eficiencia Operativa",
      description:
        "Supera el síndrome del 'lo hago yo más rápido'. Practica cómo delegar proyectos complejos transfiriendo autonomía con controles clave.",
      aiTip:
        "La IA evalúa si defines el nivel de autoridad exacto y si estableces checkpoints claros sin caer en micromanagement.",
    },
    {
      title: "Comunicación de Cambios y Crisis",
      tag: "Liderazgo Situacional",
      description:
        "Prepara la comunicación de cambios organizacionales, reestructuraciones o momentos de alta incertidumbre con serenidad y claridad.",
      aiTip:
        "Entrena la capacidad de transmitir convicción, validar las emociones del equipo y marcar el rumbo inmediato.",
    },
  ];

  return (
    <section id="coaching" className="py-24 bg-[#fff8f3] border-y border-[#f1dfd3] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] glow-orange pointer-events-none -z-10 blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffdfc5]/60 border border-[#ff8b1e]/30 text-[#61100d] text-xs font-bold uppercase tracking-wider mb-4">
            Pilar 02 • Desarrollo de Líderes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#171412] tracking-tight mb-4">
            AI Leadership Coach:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8b1e] via-[#da551d] to-[#c22722]">
              Coaching Ejecutivo 24/7
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#4a423d]">
            Los líderes no fallan por falta de capacidad técnica, sino por desafíos en conversaciones humanas complejas. Democratiza el entrenamiento de liderazgo para todos tus mandos medios.
          </p>
        </div>

        {/* Interactive Scenario Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Scenario Selectors */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6b625b] px-1 block mb-2">
              Escenarios de Roleplay Disponibles:
            </span>
            {scenarios.map((sc, index) => (
              <button
                key={index}
                onClick={() => setActiveScenario(index)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 ${
                  activeScenario === index
                    ? "bg-white border-2 border-[#ff8b1e] shadow-lg shadow-[#ff8b1e]/10"
                    : "bg-white/70 border-[#f1dfd3] hover:border-[#ff8b1e]/50 text-[#4a423d]"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`text-xs font-bold px-2.5 py-0.5 rounded-md ${
                      activeScenario === index
                        ? "bg-[#ffdfc5] text-[#61100d]"
                        : "bg-[#fff8f3] text-[#6b625b]"
                    }`}
                  >
                    {sc.tag}
                  </span>
                  <span className="text-xs font-mono text-[#808285]">
                    Modo #{index + 1}
                  </span>
                </div>
                <h3
                  className={`text-base font-bold ${
                    activeScenario === index ? "text-[#171412]" : "text-[#4a423d]"
                  }`}
                >
                  {sc.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Right Column: Scenario Detail Card */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-[#f1dfd3] p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#ffdfc5] border border-[#ff8b1e]/30 flex items-center justify-center">
                <Brain className="w-6 h-6 text-[#da551d]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#da551d] uppercase tracking-wider block">
                  Simulación Activa
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-[#171412]">
                  {scenarios[activeScenario].title}
                </h4>
              </div>
            </div>

            <p className="text-[#4a423d] text-base leading-relaxed mb-6">
              {scenarios[activeScenario].description}
            </p>

            <div className="p-4 rounded-xl bg-[#fff8f3] border border-[#ffdfc5] space-y-2 mb-6">
              <div className="flex items-center gap-2 text-[#61100d] text-xs font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4 text-[#ff8b1e]" />
                <span>Metodología Grupo Dinamis incorporada:</span>
              </div>
              <p className="text-sm text-[#171412] leading-relaxed">
                {scenarios[activeScenario].aiTip}
              </p>
            </div>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs sm:text-sm text-[#4a423d]">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#ff8b1e] shrink-0" />
                <span>100% Confidencial y privado</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#ff8b1e] shrink-0" />
                <span>Métricas de evolución mensual</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#ff8b1e] shrink-0" />
                <span>Alineado a la cultura de tu empresa</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircleQuestion className="w-4 h-4 text-[#ff8b1e] shrink-0" />
                <span>Feedback en lenguaje natural</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://app.grupodinamis.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("leadership_start_sim")}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#ff8b1e] to-[#da551d] hover:brightness-105 text-white font-semibold text-sm shadow-lg shadow-[#ff8b1e]/25 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Entrenar este escenario en la App</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://wa.me/5493425200959?text=Hola%20Grupo%20Dinamis%2C%20quisiera%20consultar%20por%20el%20programa%20de%20Coaching%20de%20Lideres%20con%20IA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-[#6b625b] hover:text-[#da551d] transition-colors underline"
              >
                Consultar por programas híbridos (IA + Consultores)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
