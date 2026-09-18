"use client";

import { useState } from "react";
import { Check, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { trackEvent } from "@/components/analytics";

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("annual");

  const plans = [
    {
      name: "Profesional",
      subtitle: "Para candidatos y líderes en desarrollo individual",
      priceMonthly: 19,
      priceAnnual: 15,
      description: "Perfecciona tus respuestas y adquiere seguridad para tus próximas entrevistas y desafíos de liderazgo.",
      features: [
        "Simulaciones de entrevista ilimitadas",
        "Diagnóstico y feedback STAR instantáneo",
        "Detección de muletillas y fluidez comunicacional",
        "Acceso a 5 escenarios de liderazgo",
        "Historial de progreso y calificaciones",
      ],
      ctaText: "Comenzar Gratis",
      ctaUrl: "https://app.grupodinamis.com",
      isPopular: false,
    },
    {
      name: "Equipos & RRHH",
      subtitle: "Para departamentos de personas, selección y mandos medios",
      priceMonthly: 99,
      priceAnnual: 79,
      description: "Automatiza el primer filtro de candidatos y capacita a tus líderes en conversaciones estratégicas.",
      features: [
        "Hasta 80 entrevistas preliminares con IA al mes",
        "Panel centralizado para el equipo de selección",
        "Informes comparativos de candidatos en PDF",
        "Coaching para hasta 10 líderes y mandos medios",
        "Escenarios de liderazgo personalizables",
        "Soporte prioritario por email y WhatsApp",
      ],
      ctaText: "Probar 14 Días Gratis",
      ctaUrl: "https://app.grupodinamis.com",
      isPopular: true,
    },
    {
      name: "Enterprise",
      subtitle: "Para organizaciones con procesos a gran escala",
      priceMonthly: "Custom",
      priceAnnual: "A Medida",
      description: "Solución integral personalizada con el respaldo y consultoría estratégica directa de Grupo Dinamis.",
      features: [
        "Candidatos y líderes ilimitados",
        "Modelado de competencias y cultura de tu empresa",
        "Integración con ATS y sistemas internos (API)",
        "Sesiones de consultoría híbrida con Grupo Dinamis",
        "Acuerdo de Nivel de Servicio (SLA) y DPA dedicado",
        "Account Manager dedicado",
      ],
      ctaText: "Agendar con un Consultor",
      ctaUrl: "https://wa.me/5493425200959?text=Hola%20Grupo%20Dinamis%2C%20quiero%20cotizar%20el%20plan%20Enterprise%20de%20Dinamis%20AI",
      isPopular: false,
    },
  ];

  return (
    <section id="precios" className="py-24 bg-[#07090E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-700/50 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Inversión Transparente
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Planes Diseñados para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Crecer con tu Organización
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Empieza con una prueba gratuita y escala a medida que incorporas más candidatos y líderes a la plataforma.
          </p>

          {/* Billing Switch */}
          <div className="mt-8 inline-flex items-center p-1.5 bg-[#0F1422] rounded-xl border border-slate-800">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                billingPeriod === "monthly"
                  ? "bg-blue-600 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Facturación Mensual
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                billingPeriod === "annual"
                  ? "bg-blue-600 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Facturación Anual</span>
              <span className="text-[10px] bg-cyan-400 text-slate-950 font-bold px-1.5 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl flex flex-col justify-between p-8 transition-all duration-300 ${
                plan.isPopular
                  ? "bg-gradient-to-b from-[#111827] to-[#0D121F] border-2 border-cyan-500/80 shadow-2xl shadow-cyan-500/10 lg:-translate-y-2"
                  : "bg-[#0C101C] border border-slate-800 hover:border-slate-700"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-xs font-extrabold uppercase tracking-wider rounded-full shadow-md flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-slate-950 fill-current" />
                  Más Elegido por Empresas
                </div>
              )}

              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                </div>
                <p className="text-xs text-slate-400 mb-6 min-h-[32px]">
                  {plan.subtitle}
                </p>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-slate-800">
                  {typeof plan.priceMonthly === "number" ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white">
                        ${billingPeriod === "annual" ? plan.priceAnnual : plan.priceMonthly}
                      </span>
                      <span className="text-sm text-slate-400 font-medium">USD / mes</span>
                    </div>
                  ) : (
                    <div className="text-3xl sm:text-4xl font-extrabold text-white">
                      {plan.priceAnnual}
                    </div>
                  )}
                  <p className="text-xs text-slate-400 mt-2">{plan.description}</p>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={plan.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("pricing_plan_click", { plan: plan.name })}
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 group ${
                    plan.isPopular
                      ? "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/35 hover:scale-[1.02]"
                      : "bg-slate-800 hover:bg-slate-700 text-white"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <div className="mt-3 text-center">
                  <span className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-cyan-400" /> Facturación empresarial disponible
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
