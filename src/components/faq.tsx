"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Qué es Dinamis AI y en qué se diferencia de un ChatGPT convencional?",
      a: "Dinamis AI no es un chatbot genérico sin contexto. Está entrenado y parametrizado con los más de 15 años de metodología en Recursos Humanos, evaluación por competencias (STAR) y desarrollo organizacional de Grupo Dinamis. Ofrece métricas cuantitativas, reportes ejecutivos comparativos y simulaciones de rol diseñadas específicamente para el mundo corporativo.",
    },
    {
      q: "¿Cómo funciona la simulación de entrevistas laborales?",
      a: "El usuario o candidato inicia una sesión interactiva donde la IA asume el rol de selector senior según la vacante seleccionada. Al finalizar, el sistema genera de inmediato un diagnóstico que analiza la estructura de respuestas (STAR), claridad de oratoria, asertividad, coherencia y áreas concretas de mejora.",
    },
    {
      q: "¿Cómo ayuda el AI Leadership Coach a los mandos medios?",
      a: "Permite a supervisores, gerentes y coordinadores practicar conversaciones difíciles (feedback correctivo, despidos, mediación de conflictos o crisis de equipo) en un entorno 100% seguro y confidencial las 24 horas del día, recibiendo sugerencias metodológicas basadas en psicología organizacional antes de tener la conversación real.",
    },
    {
      q: "¿Es segura y confidencial la información de mi empresa?",
      a: "Totalmente. Cumplimos con estrictos estándares de privacidad. Los audios, transcripciones y evaluaciones de tus colaboradores o candidatos no se utilizan bajo ninguna circunstancia para entrenar modelos públicos y permanecen encriptados en reposo y en tránsito.",
    },
    {
      q: "¿Puedo probar la plataforma antes de contratar un plan de empresa?",
      a: "Sí. Puedes registrarte y realizar simulaciones gratuitas de prueba directamente en app.grupodinamis.com. Además, para planes de equipos y corporativos ofrecemos un piloto de 14 días y demostraciones guiadas por nuestros consultores.",
    },
    {
      q: "¿Cómo se integra con los servicios de consultoría de Grupo Dinamis?",
      a: "Dinamis AI es el brazo tecnológico de Grupo Dinamis. Las empresas pueden combinar la plataforma SaaS con programas de consultoría presencial o remota en Dirección Externa, Hunting Ejecutivo, Evaluaciones de Desempeño y Transformación Cultural liderados por los socios fundadores.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0A0E1A] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-700/50 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Respuestas Clave</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Preguntas Frecuentes sobre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Dinamis AI
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Todo lo que necesitas saber sobre la tecnología, la metodología y la implementación en tu organización.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#0F1422] border border-slate-800 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/60 animate-in fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center p-6 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-sm font-semibold text-white">
              ¿Tienes una consulta específica para tu empresa?
            </p>
            <p className="text-xs text-slate-400">
              Nuestro equipo de consultoría en RRHH te responde en el día.
            </p>
          </div>
          <a
            href="https://wa.me/5493425200959?text=Hola%20Grupo%20Dinamis%2C%20tengo%20una%20consulta%20sobre%20Dinamis%20AI"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm flex items-center gap-2 shadow-md transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Hablar por WhatsApp (+54 9 342 5200959)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
