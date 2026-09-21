"use client";

import { useState } from "react";
import { ChevronDown, MessageSquare } from "lucide-react";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Cómo me ayuda Dinamis AI si busco empleo o quiero dar un salto profesional?",
      a: "Dinamis AI te permite entrenar tantas entrevistas como necesites antes de presentarte ante el reclutador real. La IA te evalúa con preguntas situacionales por competencias (método STAR), detecta muletillas, analiza tu fluidez comunicacional y te brinda devoluciones pedagógicas para que adquieras máxima seguridad y logres el trabajo que merecés.",
    },
    {
      q: "¿En qué consiste la evaluación bajo modelo STAR?",
      a: "El modelo STAR (Situación, Tarea, Acción y Resultado) es el estándar global más utilizado en selección por competencias. La plataforma guía al postulante para que estruture sus respuestas con foco en evidencias concretas y resultados demostrables en lugar de respuestas teóricas abstractas.",
    },
    {
      q: "¿Cómo ayuda la plataforma a las empresas, áreas de RRHH y mandos medios?",
      a: "Automatiza y estandariza los primeros filtros de selección con informes ejecutivos comparativos, reduciendo un 70% los tiempos operativos. Para los líderes en funciones, actúa como un AI Leadership Coach 24/7 para ensayar conversaciones críticas (dar feedback, delegar, resolver tensiones internas) en un entorno 100% privado con la metodología de Grupo Dinamis.",
    },
    {
      q: "¿Cómo se gestiona la privacidad y confidencialidad de los datos?",
      a: "Tratamos la información con estricto rigor ético y reserva corporativa. Las respuestas, transcripciones y evaluaciones son privadas, no se comparten con terceros ni se utilizan para alimentar modelos públicos de IA.",
    },
    {
      q: "¿Cómo se complementa con los servicios de Grupo Dinamis?",
      a: "Dinamis AI es parte del ecosistema de servicios de Grupo Dinamis. Las empresas pueden utilizar la plataforma de forma autónoma o integrarla en programas más amplios de Desarrollo de Líderes, Dirección Externa o Búsqueda y Selección acompañados por nuestros consultores sénior.",
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
          <span className="text-xs font-semibold text-[#da551d] uppercase tracking-wider block mb-2">
            Preguntas Frecuentes
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#171412] tracking-tight mb-3">
            Consultas habituales sobre la herramienta
          </h2>
          <p className="text-sm text-[#4a423d]">
            Detalles sobre el funcionamiento, la metodología y la implementación en las organizaciones.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#fffbf9] border border-[#f1dfd3] transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-[#171412] pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#da551d] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-[#6b625b] text-xs sm:text-sm leading-relaxed border-t border-[#f1dfd3]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Consultation box */}
        <div className="mt-10 p-5 rounded-xl bg-[#fff8f3] border border-[#f1dfd3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[#171412]">
              ¿Tenés dudas sobre cómo aplicarlo en tu empresa?
            </p>
            <p className="text-xs text-[#6b625b]">
              Podés conversar directamente con el equipo de consultoría de Grupo Dinamis.
            </p>
          </div>
          <a
            href="https://wa.me/5493425200959?text=Hola%20Grupo%20Dinamis%2C%20tengo%20una%20consulta%20sobre%20la%20herramienta%20Dinamis%20AI"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-xs sm:text-sm flex items-center gap-2 transition-colors shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
