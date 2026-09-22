"use client";

import { useState } from "react";
import {
  Compass,
  TrendingUp,
  Brain,
  Shield,
  Layers,
  ArrowRight,
  Sparkles,
  MessageSquare,
  Handshake,
  Scale,
  Split,
} from "lucide-react";
import { trackEvent } from "@/components/analytics";

export function LeadershipCoach() {
  const [activeScenario, setActiveScenario] = useState(0);

  const scenarios = [
    {
      title: "Coaching de Feedback Constructivo",
      tag: "Desempeño & Asertividad",
      icon: MessageSquare,
      description:
        "Entrena cómo formular retroalimentación constructiva a un colaborador con bajo rendimiento o desalineación, separando hechos observables de juicios de valor para acordar compromisos concretos.",
      methodologicalNote:
        "La metodología de Grupo Dinamis enseña a describir conductas objetivas sin adjetivos calificativos, promoviendo preguntas que inviten al colaborador a reflexionar en lugar de ponerse a la defensiva.",
    },
    {
      title: "Resolución de Conflictos en Equipos",
      tag: "Mediación & Acuerdos Ganar-Ganar",
      icon: Split,
      description:
        "Simula una mediación entre dos miembros del equipo enfrentados por recursos, responsabilidades cruzadas o roces interpersonales, desactivando la tensión y restableciendo la sinergia operativa.",
      methodologicalNote:
        "Aprende a identificar intereses profundos por encima de posturas rígidas, canalizando la conversación hacia el impacto en los objetivos compartidos de la empresa.",
    },
    {
      title: "Negociación Estratégica (MAAN / BATNA)",
      tag: "Acuerdos & Manejo de Objeciones",
      icon: Handshake,
      description:
        "Práctica intensiva para definir objetivos claros, anticipar objeciones difíciles y buscar alternativas viables (MAAN / BATNA) frente a clientes internos, proveedores o mandos superiores.",
      methodologicalNote:
        "Entrena la capacidad de ceder sin perder valor, explorar variables de intercambio no monetarias y cerrar acuerdos sólidos y sostenibles en el tiempo.",
    },
    {
      title: "Delegación Asertiva y Conducción en Crisis",
      tag: "Liderazgo Situacional",
      icon: Scale,
      description:
        "Supera el síndrome del 'lo hago yo más rápido'. Practica cómo transferir autonomía con checkpoints clave y comunicar cambios o momentos de incertidumbre con serenidad y convicción.",
      methodologicalNote:
        "Se evalúa si estableces el marco de autoridad exacto, si validas las emociones del equipo y si marcas el rumbo con claridad sin caer en micromanagement.",
    },
  ];

  return (
    <section id="coaching" className="py-24 bg-white border-b border-[#f1dfd3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffdfc5] border border-[#ff8b1e]/30 text-[#61100d] text-xs font-bold uppercase tracking-wider mb-4">
            Pilar 02 • Desarrollo de Líderes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight mb-4">
            AI Leadership Coach:{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8b1e] via-[#da551d] to-[#61100d]">
              Coaching Ejecutivo 24/7
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#4a423d] leading-relaxed">
            Los líderes no fallan por falta de capacidad técnica, sino por desafíos en conversaciones humanas difíciles. Democratiza el entrenamiento de liderazgo para todos tus mandos medios con simulación inmersiva y privada.
          </p>
        </div>

        {/* Interactive Scenario Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Scenarios List */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#61100d] px-1 block mb-2">
              Módulos de Roleplay Corporativo:
            </span>
            {scenarios.map((sc, index) => {
              const Icon = sc.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveScenario(index)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                    activeScenario === index
                      ? "bg-[#fffbf9] border-2 border-[#ff8b1e] shadow-[0_4px_20px_rgba(255,139,30,0.12)]"
                      : "bg-white border-[#f1dfd3] hover:border-[#ff8b1e]/50 hover:bg-[#fff8f3]/50"
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
                      Módulo 0{index + 1}
                    </span>
                  </div>
                  <h3
                    className={`text-base font-bold flex items-center gap-2 ${
                      activeScenario === index ? "text-[#111111]" : "text-[#4a423d]"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-[#ff8b1e] shrink-0" />
                    <span>{sc.title}</span>
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Right Column: Scenario Detail Card */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-[#f1dfd3] p-7 sm:p-9 shadow-[0_8px_30px_rgba(97,16,13,0.06)] relative overflow-hidden">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#ffdfc5] border border-[#ff8b1e]/30 flex items-center justify-center">
                <Brain className="w-6 h-6 text-[#da551d]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#da551d] uppercase tracking-wider block">
                  Simulación de Rol en Vivo
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-[#111111]">
                  {scenarios[activeScenario].title}
                </h4>
              </div>
            </div>

            <p className="text-[#4a423d] text-base leading-relaxed mb-6">
              {scenarios[activeScenario].description}
            </p>

            <div className="p-4 sm:p-5 rounded-xl bg-[#fff8f3] border border-[#ffdfc5] space-y-1.5 mb-6">
              <div className="flex items-center gap-2 text-[#61100d] text-xs font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4 text-[#ff8b1e]" />
                <span>Metodología de Desarrollo Organizacional Grupo Dinamis:</span>
              </div>
              <p className="text-xs sm:text-sm text-[#111111] leading-relaxed">
                {scenarios[activeScenario].methodologicalNote}
              </p>
            </div>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-xs sm:text-sm text-[#4a423d]">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#ff8b1e] shrink-0" />
                <span className="font-medium">100% Confidencial y privado</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#ff8b1e] shrink-0" />
                <span className="font-medium">Métricas de evolución y progreso</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#ff8b1e] shrink-0" />
                <span className="font-medium">Roleplay de turno único sin fatiga</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#ff8b1e] shrink-0" />
                <span className="font-medium">Entrada por voz y lectura con audio</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="https://app.grupodinamis.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("leadership_start_sim")}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ff8b1e] to-[#da551d] hover:from-[#ff8b1e] hover:to-[#c24614] text-white font-bold text-sm shadow-[0_4px_16px_rgba(255,139,30,0.25)] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Entrenar este escenario en la App</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://wa.me/5493425200959?text=Hola%20Grupo%20Dinamis%2C%20quisiera%20consultar%20por%20el%20programa%20de%20Coaching%20de%20Lideres"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-[#61100d] hover:text-[#da551d] font-semibold transition-colors underline cursor-pointer"
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
