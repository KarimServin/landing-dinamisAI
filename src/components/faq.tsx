"use client";

import { useState } from "react";
import { ChevronDown, MessageSquare, HelpCircle } from "lucide-react";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿En qué se diferencia Dinamis AI de usar una IA genérica como ChatGPT o Claude?",
      a: "ChatGPT y otras IAs generales son hojas en blanco que requieren redactar prompts complejos, tienden a salirse de personaje, responden con listas interminables y no evalúan objetivamente. Dinamis AI es un simulador de vuelo para conversaciones laborales: ofrece roleplay estricto (1 pregunta por turno sin explicaciones teóricas en el medio), evaluadores con identidad rioplatense real, interacción por voz y un Scorecard cuantitativo formal (1 al 10) al finalizar la sesión.",
    },
    {
      q: "¿Cómo funciona el Módulo Primer Empleo si no tengo experiencia laboral previa?",
      a: "El Módulo Primer Empleo tiene reglas pedagógicas estrictas programadas: la IA tiene prohibido exigir años de trayectoria corporativa. En su lugar, evalúa tu potencial, vocación, proyectos académicos o personales, motivación y capacidad de aprendizaje rápido, ayudándote a responder con seguridad aunque nunca hayas trabajado formalmente.",
    },
    {
      q: "¿Puedo practicar con voz y micrófono como en una entrevista real?",
      a: "Sí. Dinamis AI cuenta con experiencia multimodal: podés hablarle al micrófono y escuchar la respuesta del reclutador virtual con lectura fluida. Esto te permite entrenar la oratoria, la modulación y los tiempos reales de una videollamada o entrevista telefónica, en lugar de limitarte a tipear.",
    },
    {
      q: "¿En qué consiste el Scorecard de Desempeño (1 a 10) al final de la sesión?",
      a: "Al concluir los turnos de la entrevista o coaching (entre 6 y 10 preguntas), la IA cierra la simulación y genera un Reporte de Desempeño que incluye: una calificación global estimada (1 a 10), una matriz de fortalezas demostradas bajo metodología STAR y recomendaciones prácticas y concretas para corregir tus puntos ciegos antes de la entrevista real.",
    },
    {
      q: "¿Qué tipo de situaciones de liderazgo pueden entrenar los mandos medios?",
      a: "Dispone de módulos de roleplay para conversaciones de alta fricción: Coaching de Feedback constructivo (separando hechos de juicios), Resolución de Conflictos entre colaboradores (acuerdos ganar-ganar), Negociación Estratégica con clientes o directivos (método MAAN/BATNA), y Delegación en momentos de cambio o crisis.",
    },
    {
      q: "¿Mis respuestas y sesiones son privadas y confidenciales?",
      a: "Absolutamente. Toda la información, audios y transcripciones se procesan en entornos seguros, no se comparten con terceros ni se utilizan para alimentar o entrenar modelos públicos de inteligencia artificial.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-[#f1dfd3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffdfc5] border border-[#ff8b1e]/30 text-[#61100d] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#ff8b1e]" />
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111111] tracking-tight mb-3">
            Todo lo que necesitás saber sobre Dinamis AI
          </h2>
          <p className="text-sm sm:text-base text-[#4a423d]">
            Detalles sobre los módulos, la tecnología de simulación de rol y la metodología de Grupo Dinamis.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#fffbf9] border border-[#f1dfd3] transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#111111] pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#da551d] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-[#4a423d] text-xs sm:text-sm leading-relaxed border-t border-[#f1dfd3]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Consultation box */}
        <div className="mt-10 p-6 rounded-2xl bg-[#fff8f3] border border-[#ffdfc5] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div>
            <p className="text-sm font-bold text-[#111111]">
              ¿Tenés dudas sobre cómo implementarlo en tu empresa o iniciar tu práctica?
            </p>
            <p className="text-xs text-[#6b625b] mt-0.5">
              Conversá directamente con el equipo de consultores sénior de Grupo Dinamis.
            </p>
          </div>
          <a
            href="https://wa.me/5493425200959?text=Hola%20Grupo%20Dinamis%2C%20tengo%20una%20consulta%20sobre%20la%20plataforma%20Dinamis%20AI"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-xs shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Hablar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
