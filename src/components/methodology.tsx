import { BookOpenCheck, Users2, Lock, Award, ShieldCheck, Sparkles } from "lucide-react";

export function Methodology() {
  const points = [
    {
      icon: BookOpenCheck,
      title: "Evaluación Estructurada con Metodología STAR",
      desc: "El sistema evalúa la coherencia entre lo que la persona afirma haber realizado (Acción) y el impacto concreto obtenido (Resultado), evitando respuestas genéricas o discursos aprendidos de memoria.",
    },
    {
      icon: Users2,
      title: "15 Años de Experiencia en Selección y Desarrollo",
      desc: "Dinamis AI fue desarrollada a partir del conocimiento y la práctica de Grupo Dinamis en consultoría de personas, acompañando procesos en más de 200 empresas de América Latina.",
    },
    {
      icon: Lock,
      title: "Privacidad y Confidencialidad de los Datos",
      desc: "La información de tus evaluaciones, candidatos y líderes es privada y confidencial. No se comparte con terceros ni se utiliza para entrenar modelos públicos de inteligencia artificial.",
    },
    {
      icon: Award,
      title: "Acompañamiento Profesional de Consultores",
      desc: "La plataforma agiliza la práctica y el diagnóstico; para desafíos estratégicos de desarrollo o búsquedas complejas, contás con el respaldo del equipo de consultores de Grupo Dinamis.",
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
              experiencia real en gestión de personas.
            </span>
          </h2>
          <p className="text-[#4a423d] text-base sm:text-lg leading-relaxed">
            Dinamis AI incorpora los criterios de evaluación, competencias laborales y rigor metodológico desarrollados por Grupo Dinamis a lo largo de más de 15 años en el mercado.
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
