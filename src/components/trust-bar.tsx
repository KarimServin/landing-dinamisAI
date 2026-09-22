import { Building2, Landmark, Cpu, Truck, ShieldCheck, HeartHandshake } from "lucide-react";

const metrics = [
  {
    value: "+15",
    unit: "años",
    label: "En gestión de personas",
    detail: "Trayectoria de Grupo Dinamis en consultoría RRHH",
  },
  {
    value: "+200",
    unit: "empresas",
    label: "Procesos acompañados",
    detail: "Selección y desarrollo organizacional en LATAM",
  },
  {
    value: "STAR",
    unit: "metodología",
    label: "Criterio estructurado",
    detail: "Evaluación objetiva basada en evidencias reales",
  },
  {
    value: "100%",
    unit: "privado",
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

const testimonials = [
  {
    quote:
      "Antes de usar Dinamis AI nuestros candidatos llegaban sin estructura. Ahora llegan con el STAR trabajado y el proceso tarda la mitad.",
    author: "Jefa de RRHH",
    company: "Empresa industrial, Santa Fe",
  },
  {
    quote:
      "Practiqué tres veces con el simulador. La cuarta entrevista real la sentí como un ensayo más — y quedé seleccionado.",
    author: "Profesional en transición de carrera",
    company: "Sector tecnológico",
  },
  {
    quote:
      "El coaching de liderazgo me ayudó a manejar una situación con un colaborador que venía postergando hace meses. Concrete la conversación en 48 horas.",
    author: "Gerente de Operaciones",
    company: "Empresa logística, Córdoba",
  },
];

export function TrustBar() {
  return (
    <section className="py-16 bg-white border-b border-[#f1dfd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-[#f1dfd3]">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-left md:pr-6 md:border-r md:border-[#f1dfd3] last:border-0"
            >
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff8b1e] to-[#da551d] tracking-tighter">
                  {metric.value}
                </span>
                <span className="text-sm font-bold text-[#da551d]">{metric.unit}</span>
              </div>
              <span className="text-sm font-bold text-[#111111] block">{metric.label}</span>
              <span className="text-xs text-[#6b625b] mt-0.5 block leading-snug">{metric.detail}</span>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="py-10 border-b border-[#f1dfd3]">
          <p className="text-xs uppercase tracking-widest text-[#61100d] font-bold mb-6 text-center">
            Lo que dicen quienes ya lo usan
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#fffbf9] border border-[#f1dfd3] p-5 shadow-[0_2px_12px_rgba(97,16,13,0.04)] hover:border-[#ff8b1e]/40 transition-colors"
              >
                <p className="text-sm text-[#4a423d] leading-relaxed italic mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <span className="text-xs font-bold text-[#111111] block">{t.author}</span>
                  <span className="text-xs text-[#6b625b]">{t.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sectors */}
        <div className="pt-8">
          <p className="text-xs uppercase tracking-widest text-[#61100d] font-bold mb-5">
            La misma metodología que usan estas industrias para seleccionar a sus mejores líderes
          </p>
          <div className="flex flex-wrap items-center gap-3 text-[#4a423d]">
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
