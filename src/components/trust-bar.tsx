import { Building2, Landmark, Cpu, Truck, ShieldCheck, HeartHandshake } from "lucide-react";

export function TrustBar() {
  const metrics = [
    {
      value: "+15 Años",
      label: "Trayectoria en RRHH y Desarrollo",
      detail: "Metodología validada en el mercado",
    },
    {
      value: "+200",
      label: "Empresas Clientes",
      detail: "En Argentina y Latinoamérica",
    },
    {
      value: "-70%",
      label: "Tiempo de Filtro Inicial",
      detail: "Aceleración de procesos de selección",
    },
    {
      value: "24/7",
      label: "Disponibilidad del Coach",
      detail: "Entrenamiento continuo sin agendas",
    },
  ];

  const industries = [
    { name: "Tecnología & Software", icon: Cpu },
    { name: "Fintech & Banca", icon: Landmark },
    { name: "Agroindustria & Alimentos", icon: Building2 },
    { name: "Logística & Supply Chain", icon: Truck },
    { name: "Salud & Farmacéutica", icon: ShieldCheck },
    { name: "Servicios Profesionales B2B", icon: HeartHandshake },
  ];

  return (
    <section className="py-14 bg-[#fff8f3] border-y border-[#f1dfd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quantitative Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pb-12 border-b border-[#f1dfd3]">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center md:text-left">
              <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff8b1e] to-[#da551d] block tracking-tight">
                {metric.value}
              </span>
              <span className="text-sm font-bold text-[#171412] block mt-1">
                {metric.label}
              </span>
              <span className="text-xs text-[#6b625b] mt-0.5 block">
                {metric.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Industry Trust Badges */}
        <div className="pt-8">
          <p className="text-center text-xs uppercase tracking-widest text-[#6b625b] font-bold mb-6">
            Ecosistema de talento y liderazgo adoptado en múltiples sectores corporativos
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[#4a423d]">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-[#f1dfd3] shadow-sm hover:border-[#ff8b1e]/50 hover:shadow-md transition-all"
                >
                  <Icon className="w-4 h-4 text-[#ff8b1e]" />
                  <span className="text-xs font-semibold text-[#171412]">{ind.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
