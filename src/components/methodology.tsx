import { BookOpenCheck, Users2, Lock, Award, ShieldCheck, Sparkles } from "lucide-react";

export function Methodology() {
  const points = [
    {
      icon: BookOpenCheck,
      title: "Evidencias Reales (STAR) • Marcus Buckingham",
      desc: "La IA audita la coherencia entre Acción y Resultado con base en First, Break All the Rules: las conductas pasadas reales predicen el desempeño futuro con mayor rigor que discursos teóricos o respuestas hipotéticas.",
    },
    {
      icon: Users2,
      title: "Liderazgo y Feedback • Kim Scott & Ram Charan",
      desc: "Simulaciones estructuradas sobre marcos reconocidos de gestión de personas: Radical Candor y método SBI (Scott, Stone & Heen) para feedback directo y empático, y The Leadership Pipeline (Charan) con Liderazgo Situacional para delegación.",
    },
    {
      icon: Award,
      title: "Negociación y Conflictos • Fisher, Ury & Voss",
      desc: "Marcos de resolución de desacuerdos basados en Crucial Conversations (Patterson & Grenny), el modelo de negociación de Harvard (Getting to Yes) y la empatía táctica de Chris Voss para separar hechos de juicios y alcanzar acuerdos ganar-ganar.",
    },
    {
      icon: Sparkles,
      title: "Growth Mindset en Primer Empleo • Carol Dweck",
      desc: "Inspirado en la investigación de Mentalidad de Crecimiento de Carol Dweck: los módulos de iniciación laboral evalúan aprendibilidad, persistencia y motivación genuina antes que experiencia corporativa previa.",
    },
  ];

  return (
    <section id="metodologia" className="py-24 bg-white border-b border-[#f1dfd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffdfc5] border border-[#ff8b1e]/30 text-[#61100d] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#ff8b1e]" />
            <span>Metodología y Respaldo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight mb-4">
            Tecnología respaldada por{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8b1e] via-[#da551d] to-[#61100d]">
              ciencia del comportamiento y autores líderes.
            </span>
          </h2>
          <p className="text-[#4a423d] text-base sm:text-lg leading-relaxed">
            Dinamis AI incorpora los criterios de evaluación, competencias laborales y rigor metodológico desarrollados por Grupo Dinamis a lo largo de más de 15 años, integrando los marcos teóricos de mayor impacto en desarrollo humano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="bento-card p-8 rounded-2xl flex gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-[#fff8f3] border border-[#ffdfc5] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-[#da551d]" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#111111]">{p.title}</h3>
                  <p className="text-sm text-[#4a423d] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Author & Methodology Backing Ribbon */}
        <div className="mt-10 p-6 rounded-2xl bg-[#fff8f3] border border-[#ffdfc5] text-center max-w-4xl mx-auto shadow-2xs">
          <p className="text-xs uppercase tracking-wider text-[#61100d] font-bold mb-3">
            Marcos Teóricos y Bibliografía en los que se Fundamenta la IA
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <span className="px-3 py-1 rounded-lg bg-white border border-[#ffdfc5] text-[#111111] font-semibold shadow-2xs">
              Kim Scott <span className="text-[#80766e] font-normal">(Radical Candor)</span>
            </span>
            <span className="px-3 py-1 rounded-lg bg-white border border-[#ffdfc5] text-[#111111] font-semibold shadow-2xs">
              Patterson & Grenny <span className="text-[#80766e] font-normal">(Crucial Conversations)</span>
            </span>
            <span className="px-3 py-1 rounded-lg bg-white border border-[#ffdfc5] text-[#111111] font-semibold shadow-2xs">
              Fisher & Ury <span className="text-[#80766e] font-normal">(Getting to Yes)</span>
            </span>
            <span className="px-3 py-1 rounded-lg bg-white border border-[#ffdfc5] text-[#111111] font-semibold shadow-2xs">
              Chris Voss <span className="text-[#80766e] font-normal">(Never Split the Difference)</span>
            </span>
            <span className="px-3 py-1 rounded-lg bg-white border border-[#ffdfc5] text-[#111111] font-semibold shadow-2xs">
              Carol Dweck <span className="text-[#80766e] font-normal">(Mindset)</span>
            </span>
            <span className="px-3 py-1 rounded-lg bg-white border border-[#ffdfc5] text-[#111111] font-semibold shadow-2xs">
              Ram Charan <span className="text-[#80766e] font-normal">(Leadership Pipeline)</span>
            </span>
            <span className="px-3 py-1 rounded-lg bg-white border border-[#ffdfc5] text-[#111111] font-semibold shadow-2xs">
              Marcus Buckingham <span className="text-[#80766e] font-normal">(First, Break All the Rules)</span>
            </span>
          </div>
        </div>

        {/* Corporate Quote Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#fff8f3] via-[#ffdfc5]/30 to-[#fff8f3] border border-[#ffdfc5] text-center max-w-4xl mx-auto shadow-[0_4px_16px_rgba(97,16,13,0.03)]">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-[#ffdfc5] text-[#ff8b1e] mb-4 shadow-sm">
            <ShieldCheck className="w-6 h-6 text-[#da551d]" />
          </div>
          <blockquote className="text-lg sm:text-xl italic text-[#111111] font-bold mb-3">
            &ldquo;Conectamos talento, cultura y estrategia para convertir el potencial de tu empresa en resultados sostenibles.&rdquo;
          </blockquote>
          <p className="text-xs uppercase tracking-wider text-[#61100d] font-bold">
            Filosofía Grupo Dinamis • Más de 15 años acompañando el desarrollo organizacional
          </p>
        </div>
      </div>
    </section>
  );
}
