"use client";

import { useState } from "react";
import { Check, ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
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
        "Acceso a 5 escenarios clave de liderazgo",
        "Historial individual de sesiones y calificaciones",
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
      priceMonthly: "A medida",
      priceAnnual: "A medida",
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
    <section id="precios" className="py-24 bg-[#fffbf9] border-b border-[#f1dfd3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffdfc5] border border-[#ff8b1e]/30 text-[#61100d] text-xs font-bold uppercase tracking-wider mb-4">
            Inversión Transparente
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight mb-4">
            Planes Diseñados para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8b1e] via-[#da551d] to-[#61100d]">
              Crecer con tu Empresa
            </span>
          </h2>
          <p className="text-[#4a423d] text-base sm:text-lg leading-relaxed">
            Empieza con una prueba gratuita y escala a medida que incorporas más candidatos y líderes a la plataforma.
          </p>

          {/* Billing Switch */}
          <div className="mt-8 inline-flex items-center p-1.5 bg-white rounded-2xl border border-[#f1dfd3] shadow-sm">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all ${
                billingPeriod === "monthly"
                  ? "bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white shadow-sm"
                  : "text-[#6b625b] hover:text-[#111111]"
              }`}
            >
              Facturación Mensual
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center gap-2 ${
                billingPeriod === "annual"
                  ? "bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white shadow-sm"
                  : "text-[#6b625b] hover:text-[#111111]"
              }`}
            >
              <span>Facturación Anual</span>
              <span className="text-[10px] bg-[#ffdfc5] text-[#61100d] font-bold px-2 py-0.5 rounded-full border border-[#ff8b1e]/30">
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
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-200 ${
                plan.isPopular
                  ? "bg-white border-2 border-[#ff8b1e] shadow-[0_12px_40px_rgba(255,139,30,0.15)] lg:-translate-y-2"
                  : "bento-card"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#ffdfc5]" />
                  Recomendado para Empresas
                </div>
              )}

              <div>
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="text-xl font-bold text-[#111111]">{plan.name}</h3>
                </div>
                <p className="text-xs text-[#6b625b] mb-6 min-h-[32px]">
                  {plan.subtitle}
                </p>

                {/* Price */}
                <div className="mb-6 pb-6 border-b border-[#f1dfd3]">
                  {typeof plan.priceMonthly === "number" ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-[#111111]">
                        ${billingPeriod === "annual" ? plan.priceAnnual : plan.priceMonthly}
                      </span>
                      <span className="text-sm text-[#6b625b] font-medium">USD / mes</span>
                    </div>
                  ) : (
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#111111]">
                      {plan.priceAnnual}
                    </div>
                  )}
                  <p className="text-xs text-[#6b625b] mt-2">{plan.description}</p>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#4a423d]">
                      <Check className="w-4 h-4 text-[#ff8b1e] shrink-0 mt-0.5" />
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
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 group ${
                    plan.isPopular
                      ? "bg-gradient-to-r from-[#ff8b1e] to-[#da551d] hover:from-[#ff8b1e] hover:to-[#c24614] text-white shadow-[0_4px_16px_rgba(255,139,30,0.25)] hover:scale-[1.02]"
                      : "bg-[#fff8f3] hover:bg-[#ffdfc5]/50 border border-[#f1dfd3] text-[#111111]"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <div className="mt-3 text-center">
                  <span className="text-[11px] text-[#808285] flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#ff8b1e]" /> Facturación empresarial disponible
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
