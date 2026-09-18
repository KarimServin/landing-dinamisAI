"use client";

import { Sparkles, ArrowRight, ShieldCheck, Play } from "lucide-react";
import { trackEvent } from "@/components/analytics";

export function CtaBanner() {
  return (
    <section className="py-20 bg-[#07090E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-900/50 via-indigo-950/70 to-cyan-950/50 border border-blue-700/50 p-8 sm:p-14 text-center overflow-hidden shadow-2xl">
          {/* Ambient light glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-700/60 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
              <span>Comienza Hoy Mismo</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Lleva la Selección y el Liderazgo de tu Organización al Siguiente Nivel
            </h2>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              Simula entrevistas con precisión diagnóstica y brinda coaching continuo a tus líderes con la metodología probada de Grupo Dinamis.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.grupodinamis.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("footer_banner_start_free")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold text-base shadow-xl shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Probar Dinamis AI Gratis</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="https://wa.me/5493425200959?text=Hola%20Grupo%20Dinamis%2C%20quiero%20agendar%20una%20demostraci%C3%B3n%20personalizada%20de%20Dinamis%20AI"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("footer_banner_demo_whatsapp")}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-base transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                <span>Agendar Demostración B2B</span>
              </a>
            </div>

            <div className="pt-4 flex items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" /> Alta instantánea en 30 segundos
              </span>
              <span>•</span>
              <span>Acceso desde cualquier navegador web</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
