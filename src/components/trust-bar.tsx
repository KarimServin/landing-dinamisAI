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
      detail: "Procesos de selección y desarrollo en LATAM",
    },
    {
      value: "Metodología STAR",
      label: "Criterio estructurado",
      detail: "Evaluación objetiva basada en evidencias",
    },
    {
      value: "100% Privado",
      label: "Confidencialidad blindada",
      detail: "Espacio seguro para líderes y postulantes",
    },
  ];

  const industries = [
    { name: "Tecnología y Software", icon: Cpu },
    { name: "Fintech y Banca", icon: Landmark },
    { name: "Agro e Industria", icon: Building2 },
    { name: "Logística y Distribución", icon: Truck },
    { name: "Salud y Farmacia", icon: ShieldCheck },
    { name: "Servicios Corporativos B2B", icon: HeartHandshake },
  ];

  return (
    <section className="py-14 bg-white border-b border-[#f1dfd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-10 border-b border-[#f1dfd3]">
          {metrics.map((metric, index) => (
            <div key={index} className="text-left">
              <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff8b1e] to-[#da551d] block tracking-tight">
                {metric.value}
              </span>
              <span className="text-sm font-bold text-[#111111] block mt-1">
                {metric.label}
              </span>
              <span className="text-xs text-[#6b625b] mt-0.5 block">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Sectors */}
        <div className="pt-7">
          <p className="text-xs uppercase tracking-wider text-[#61100d] font-bold mb-4">
            Metodología adoptada en organizaciones de diversos sectores
          </p>
          <div className="flex flex-wrap items-center gap-3.5 text-[#4a423d]">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#fffbf9] border border-[#f1dfd3] shadow-[0_2px_8px_rgba(97,16,13,0.02)] hover:border-[#ff8b1e]/40 transition-colors"
                >
                  <Icon className="w-4 h-4 text-[#ff8b1e]" />
                  <span className="text-xs font-semibold text-[#111111]">{ind.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
