"use client";

import { ArrowRight, Sparkles, Play, ShieldCheck, Rocket } from "lucide-react";
import { trackEvent } from "@/components/analytics";
import { useSegment } from "@/components/segment-context";

export function CtaBanner() {
  const { segment } = useSegment();

  return (
    <section className="py-20 bg-[#fffbf9] border-b border-[#f1dfd3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#61100d] via-[#a03417] via-[#da551d] to-[#ff8b1e] p-8 sm:p-14 text-center overflow-hidden shadow-[0_16px_50px_rgba(97,16,13,0.25)] text-white">
          {/* Subtle light glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/15 border border-white/30 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#ffdfc5]" />
              <span>
                {segment === "persona"
                  ? "Tu Próximo Desafío Profesional"
                  : "Comienza la Experiencia"}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              {segment === "persona"
                ? "Da el Salto Profesional y Conseguí el Empleo que Merecés"
                : "Lleva la Selección y el Liderazgo de tu Empresa al Siguiente Nivel"}
            </h2>

            <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              {segment === "persona"
                ? "Superá los nervios, aprendé a responder con seguridad bajo el método STAR y destacate en cada entrevista laboral con Dinamis AI."
                : "Simula entrevistas con precisión diagnóstica y brinda coaching continuo a tus líderes con la metodología probada de Grupo Dinamis."}
            </p>

            <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.grupodinamis.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("footer_banner_start_free", { segment })
                }
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#61100d] hover:bg-[#fff8f3] font-extrabold text-base shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>
                  {segment === "persona"
                    ? "Comenzar Práctica Gratuita"
                    : "Probar Dinamis AI Gratis"}
                </span>
                <ArrowRight className="w-4 h-4 text-[#da551d] transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={
                  segment === "persona"
                    ? "https://wa.me/5493425200959?text=Hola%20Grupo%20Dinamis%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20c%C3%B3mo%20preparar%20mis%20entrevistas%20con%20Dinamis%20AI"
                    : "https://wa.me/5493425200959?text=Hola%20Grupo%20Dinamis%2C%20quiero%20agendar%20una%20demostraci%C3%B3n%20personalizada%20de%20Dinamis%20AI"
                }
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackEvent("footer_banner_demo_whatsapp", { segment })
                }
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-black/25 hover:bg-black/35 text-white border border-white/30 font-bold text-base transition-all flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
              >
                <Play className="w-4 h-4 text-[#ffdfc5] fill-[#ffdfc5]" />
                <span>
                  {segment === "persona"
                    ? "Consultar por WhatsApp"
                    : "Agendar Demostración B2B"}
                </span>
              </a>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-white/80 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#ffdfc5]" /> Alta instantánea en 30 segundos
              </span>
              <span>•</span>
              <span>Acceso directo desde cualquier navegador web</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
