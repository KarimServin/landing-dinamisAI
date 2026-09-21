"use client";

import { ArrowRight, MessageSquare } from "lucide-react";
import { trackEvent } from "@/components/analytics";

export function CtaBanner() {
  return (
    <section className="py-20 bg-[#fffbf9] border-b border-[#f1dfd3]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-2xl bg-white border border-[#f1dfd3] p-8 sm:p-12 shadow-sm">
          <span className="text-xs font-semibold text-[#da551d] uppercase tracking-wider block mb-2">
            Comenzar la experiencia
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#171412] tracking-tight mb-4 max-w-2xl mx-auto">
            Una herramienta práctica para acompañar a tus líderes y procesos de selección.
          </h2>
          <p className="text-sm sm:text-base text-[#4a423d] max-w-xl mx-auto mb-8 leading-relaxed">
            Podés realizar una prueba inicial en la plataforma o contactarte con nuestro equipo de consultores para evaluar la modalidad más adecuada para tu organización.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href="https://app.grupodinamis.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("footer_banner_start_free")}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#da551d] hover:bg-[#c24614] text-white font-medium text-sm transition-colors flex items-center justify-center gap-2"
            >
              <span>Ingresar a la plataforma</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/5493425200959?text=Hola%20Grupo%20Dinamis%2C%20quisiera%20coordinar%20una%20demostraci%C3%B3n%20de%20Dinamis%20AI"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("footer_banner_demo_whatsapp")}
              className="w-full sm:w-auto px-5 py-3 rounded-lg bg-white hover:bg-[#fff8f3] text-[#171412] border border-[#f1dfd3] font-medium text-sm transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#da551d]" />
              <span>Coordinar una llamada</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
