import { Building2, Landmark, Cpu, Truck, ShieldCheck, HeartHandshake } from "lucide-react";

export function TrustBar() {
  const metrics = [
    {
      value: "+15 Años",
      label: "En gestión de personas",
      detail: "Trayectoria de Grupo Dinamis en consultoría",
    },
    {
      value: "+200",
      label: "Empresas acompañadas",
      detail: "Procesos de selección y desarrollo en la región",
    },
    {
      value: "Metodología STAR",
      label: "Criterio estructurado",
      detail: "Evaluación objetiva basada en evidencias",
    },
    {
      value: "100% Confidencial",
      label: "Privacidad garantizada",
      detail: "Espacio protegido para líderes y postulantes",
    },
  ];

  const industries = [
    { name: "Tecnología y Servicios", icon: Cpu },
    { name: "Sector Financiero", icon: Landmark },
    { name: "Agro e Industria", icon: Building2 },
    { name: "Logística y Distribución", icon: Truck },
    { name: "Salud", icon: ShieldCheck },
    { name: "Consultoría y B2B", icon: HeartHandshake },
  ];

  return (
    <section className="py-12 bg-white border-b border-[#f1dfd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-10 border-b border-[#f1dfd3]">
          {metrics.map((metric, index) => (
            <div key={index} className="text-left">
              <span className="text-2xl sm:text-3xl font-bold text-[#da551d] block tracking-tight">
                {metric.value}
              </span>
              <span className="text-sm font-semibold text-[#171412] block mt-1">
                {metric.label}
              </span>
              <span className="text-xs text-[#6b625b] mt-0.5 block">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Sectors */}
        <div className="pt-6">
          <p className="text-xs uppercase tracking-wider text-[#808285] font-medium mb-4">
            Metodología aplicada en organizaciones de diversos sectores
          </p>
          <div className="flex flex-wrap items-center gap-3 text-[#4a423d]">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#fffbf9] border border-[#f1dfd3]"
                >
                  <Icon className="w-3.5 h-3.5 text-[#da551d]" />
                  <span className="text-xs font-medium text-[#171412]">{ind.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
