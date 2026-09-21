import { BookOpenCheck, Users2, Lock, Award, ShieldCheck } from "lucide-react";

export function Methodology() {
  const points = [
    {
      icon: BookOpenCheck,
      title: "Criterio basado en evidencias (STAR)",
      desc: "Estructura rigurosa orientada a identificar qué hizo concretamente la persona, en qué contexto y con qué resultados, evitando respuestas genéricas o discursos aprendidos.",
    },
    {
      icon: Users2,
      title: "15 años de experiencia en el terreno",
      desc: "La herramienta fue concebida a partir de procesos reales de selección, desarrollo de mandos medios y transformación cultural llevados adelante por Grupo Dinamis en más de 200 empresas.",
    },
    {
      icon: Lock,
      title: "Confidencialidad y rigor ético",
      desc: "Tratamos las respuestas, grabaciones y evaluaciones con estricta reserva corporativa. La información es exclusiva de tu organización y no se comparte con terceros.",
    },
    {
      icon: Award,
      title: "Acompañamiento profesional",
      desc: "Para búsquedas de mandos altos o programas profundos de transformación, la plataforma se complementa con la mirada y el diagnóstico presencial o remoto de nuestros consultores.",
    },
  ];

  return (
    <section id="metodologia" className="py-20 bg-white border-b border-[#f1dfd3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold text-[#da551d] uppercase tracking-wider block mb-2">
            Metodología y Criterio
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#171412] tracking-tight mb-4">
            El respaldo profesional de Grupo Dinamis
          </h2>
          <p className="text-base text-[#4a423d] leading-relaxed">
            La tecnología es un medio para dar accesibilidad y escala. El criterio pedagógico, psicométrico y evaluativo proviene de la práctica directa de consultoría en gestión de personas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-xl bg-[#fffbf9] border border-[#f1dfd3] flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-[#f1dfd3] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#da551d]" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-[#171412]">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-[#6b625b] leading-relaxed">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Quote */}
        <div className="mt-12 p-8 rounded-xl bg-[#fff8f3] border border-[#f1dfd3] text-center max-w-3xl mx-auto">
          <blockquote className="text-base sm:text-lg text-[#171412] font-medium mb-2 italic">
            &ldquo;Conectamos talento, cultura y estrategia para convertir el potencial de tu empresa en resultados sostenibles.&rdquo;
          </blockquote>
          <p className="text-xs text-[#808285]">
            Grupo Dinamis • Consultoría en RRHH y Desarrollo Organizacional
          </p>
        </div>
      </div>
    </section>
  );
}
