"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { trackEvent } from "@/components/analytics";

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("annual");

  const plans = [
    {
      name: "Individual",
      subtitle: "Para postulantes o líderes en preparación personal",
      priceMonthly: 19,
      priceAnnual: 15,
      description: "Práctica autónoma para preparar entrevistas laborales o ensayar conversaciones de equipo.",
      features: [
        "Prácticas de entrevista ilimitadas",
        "Estructura de evaluación bajo modelo STAR",
        "Devoluciones constructivas de claridad y fluidez",
        "Acceso a escenarios clave de liderazgo",
        "Historial individual de sesiones",
      ],
      ctaText: "Comenzar práctica",
      ctaUrl: "https://app.grupodinamis.com",
      isFeatured: false,
    },
    {
      name: "Equipos y RRHH",
      subtitle: "Para áreas de personas y coordinación de mandos medios",
      priceMonthly: 99,
      priceAnnual: 79,
      description: "Estandarización de primeros filtros de búsqueda y acompañamiento continuo a líderes.",
      features: [
        "Hasta 80 evaluaciones preliminares por mes",
        "Panel de gestión para el equipo de selección",
        "Informes consolidados por candidato",
        "Acceso de entrenamiento para hasta 10 líderes",
        "Casos prácticos de gestión de equipo",
        "Soporte y orientación metodológica",
      ],
      ctaText: "Probar con tu equipo",
      ctaUrl: "https://app.grupodinamis.com",
      isFeatured: true,
    },
    {
      name: "Corporativo",
      subtitle: "Para organizaciones con procesos a escala o proyectos a medida",
      priceMonthly: "A medida",
      priceAnnual: "A medida",
      description: "Implementación adaptada a la cultura de la empresa con soporte consultivo de Grupo Dinamis.",
      features: [
        "Volumen ilimitado de evaluaciones y líderes",
        "Parametrización de competencias organizacionales",
        "Integración con sistemas y procesos internos",
        "Instancias de consultoría con el equipo sénior",
        "Acuerdo formal de servicio y confidencialidad (DPA)",
        "Acompañamiento ejecutivo dedicado",
      ],
      ctaText: "Conversar con un consultor",
      ctaUrl: "https://wa.me/5493425200959?text=Hola%20Grupo%20Dinamis%2C%20quisiera%20consultar%20por%20el%20plan%20Corporativo%20de%20Dinamis%20AI",
      isFeatured: false,
    },
  ];

  return (
    <section id="precios" className="py-20 bg-[#fffbf9] border-b border-[#f1dfd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold text-[#da551d] uppercase tracking-wider block mb-2">
            Modalidades de Acceso
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171412] tracking-tight mb-4">
            Planes adaptados al tamaño de tu organización
          </h2>
          <p className="text-base text-[#4a423d] leading-relaxed">
            Elegí la alternativa más conveniente según las necesidades de evaluación o formación de tu equipo.
          </p>

          {/* Billing Switch */}
          <div className="mt-6 inline-flex items-center p-1 bg-white rounded-lg border border-[#f1dfd3]">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors ${
                billingPeriod === "monthly"
                  ? "bg-[#171412] text-white"
                  : "text-[#6b625b] hover:text-[#171412]"
              }`}
            >
              Facturación mensual
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-md transition-colors ${
                billingPeriod === "annual"
                  ? "bg-[#171412] text-white"
                  : "text-[#6b625b] hover:text-[#171412]"
              }`}
            >
              Facturación anual (bonificada)
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all ${
                plan.isFeatured
                  ? "bg-white border-2 border-[#da551d] shadow-md"
                  : "bg-white border border-[#f1dfd3]"
              }`}
            >
              <div>
                <div className="mb-2">
                  <h3 className="text-lg font-bold text-[#171412]">{plan.name}</h3>
                  <p className="text-xs text-[#6b625b] mt-0.5">{plan.subtitle}</p>
                </div>

                {/* Price */}
                <div className="my-5 pb-5 border-b border-[#f1dfd3]">
                  {typeof plan.priceMonthly === "number" ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-bold text-[#171412]">
                        ${billingPeriod === "annual" ? plan.priceAnnual : plan.priceMonthly}
                      </span>
                      <span className="text-xs text-[#6b625b]">USD / mes</span>
                    </div>
                  ) : (
                    <div className="text-2xl font-bold text-[#171412]">
                      {plan.priceAnnual}
                    </div>
                  )}
                  <p className="text-xs text-[#6b625b] mt-1.5">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-7 text-xs sm:text-sm text-[#4a423d]">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-[#da551d] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <a
                  href={plan.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("pricing_plan_click", { plan: plan.name })}
                  className={`w-full py-2.5 px-4 rounded-lg font-medium text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 ${
                    plan.isFeatured
                      ? "bg-[#da551d] hover:bg-[#c24614] text-white"
                      : "bg-[#fff8f3] hover:bg-[#f1dfd3] text-[#171412] border border-[#f1dfd3]"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
