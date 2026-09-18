import { ShieldCheck, BookOpenCheck, Lock, Users2, Sparkles, Award } from "lucide-react";

export function Methodology() {
  const points = [
    {
      icon: BookOpenCheck,
      title: "Metodología STAR Rigurosa",
      desc: "Nuestros algoritmos están calibrados para evaluar la consistencia entre lo que el candidato dice que hizo (Acción) y el impacto tangible (Resultado), evitando respuestas de manual vacías.",
    },
    {
      icon: Users2,
      title: "+15 Años de Experiencia en el Terreno",
      desc: "No somos una empresa de software aislada. Dinamis AI nace dentro de Grupo Dinamis, consultora líder que ha transformado cientos de organizaciones y evaluado miles de talentos en el mundo real.",
    },
    {
      icon: Lock,
      title: "Seguridad y Confidencialidad Blindada",
      desc: "La información de tus evaluaciones, candidatos y líderes es privada, encriptada y nunca se comparte ni se utiliza para entrenar modelos públicos de terceros.",
    },
    {
      icon: Award,
      title: "Acompañamiento Híbrido (IA + Consultores)",
      desc: "Para desafíos estratégicos de alta dirección o reestructuraciones, cuentas con el equipo de consultores sénior de Grupo Dinamis para intervenir con una mirada humana profunda.",
    },
  ];

  return (
    <section id="metodologia" className="py-24 bg-[#0A0D17] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-700/50 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>El Factor Diferencial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            No es solo Inteligencia Artificial.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Es Metodología Humana en Escala.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Cualquiera puede abrir una ventana de chat; Dinamis AI incorpora la estructura psicométrica, la calibración de competencias y el rigor organizacional de Grupo Dinamis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#0F1422] border border-slate-800 hover:border-slate-700 transition-all flex gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate quote box */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950/20 to-slate-900 border border-slate-800 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/20 border border-blue-500/40 text-cyan-400 mb-4">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <blockquote className="text-lg sm:text-xl italic text-slate-200 font-medium mb-3">
            &ldquo;Conectamos talento, cultura y estrategia para convertir el potencial de tu empresa en resultados sostenibles.&rdquo;
          </blockquote>
          <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
            Filosofía Grupo Dinamis • Más de 15 años acompañando el desarrollo organizacional
          </p>
        </div>
      </div>
    </section>
  );
}
