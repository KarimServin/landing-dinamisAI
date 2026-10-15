"use client";

import { useState, useEffect } from "react";
import {
  FileText,
  Target,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  GraduationCap,
  Briefcase,
  Layers,
  Award,
  BarChart3,
  Bot,
  UserCheck,
} from "lucide-react";
import { trackEvent } from "@/components/analytics";
import { useSegment } from "@/components/segment-context";

export function InterviewSimulator() {
  const { segment } = useSegment();
  const [activeAudience, setActiveAudience] = useState<"empresas" | "candidatos">("empresas");

  useEffect(() => {
    setActiveAudience(segment === "persona" ? "candidatos" : "empresas");
  }, [segment]);

  const candidateModules = [
    {
      icon: Briefcase,
      badge: "Cualquier Rubro & Rol",
      title: "Entrevistas a Medida por Rol y Empresa",
      description:
        "Elegí el puesto y la empresa a la que te postulás. La plataforma adapta las preguntas técnicas y conductuales al perfil solicitado para que practiques respuestas concretas y realistas.",
      highlight: "Preguntas técnicas y conductuales adaptadas al perfil",
    },
    {
      icon: GraduationCap,
      badge: "Exclusivo para Jóvenes",
      title: "Módulo Primer Empleo",
      description:
        "Diseñado para quienes buscan su primera oportunidad laboral. No exige experiencia corporativa previa: evalúa iniciativa, capacidad de aprendizaje, criterio práctico y motivación.",
      highlight: "Evaluación sin requisitos de experiencia previa",
    },
    {
      icon: Layers,
      badge: "Gestión & Operaciones",
      title: "Mandos Medios & Operativos",
      description:
        "Pensado para roles con responsabilidad de equipo. Evalúa organización del trabajo, manejo de prioridades cruzadas, apego a procesos y resolución de imprevistos.",
      highlight: "Práctica de organización, criterio y resolución cotidiana",
    },
    {
      icon: Sparkles,
      badge: "Mentor Pre-Simulación",
      title: "Estructura de Respuestas (Método STAR)",
      description:
        "Aprendé a ordenar tus respuestas en Situación, Tarea, Acción y Resultado para comunicar tus logros con claridad, sin divagar y respondiendo con precisión a lo que pregunta el selector.",
      highlight: "Respuestas claras, ordenadas y fundamentadas en hechos",
    },
  ];

  const companyModules = [
    {
      icon: Target,
      badge: "Gestión de Equipos",
      title: "Feedback de Desempeño y Alineación",
      description:
        "Práctica guiada para señalar desvíos de rendimiento o conductas desalineadas, con foco en describir hechos objetivos y construir acuerdos de mejora mutuos.",
      highlight: "Conversaciones basadas en hechos observables y acuerdos claros",
    },
    {
      icon: Clock,
      badge: "Mediación de Fricciones",
      title: "Resolución de Conflictos Operativos",
      description:
        "Escenarios prácticos para mediar en desacuerdos entre colaboradores o áreas, ayudando a los supervisores a encontrar soluciones de trabajo sostenibles sin desgastar el clima.",
      highlight: "Mediación constructiva para restablecer la colaboración",
    },
    {
      icon: ShieldCheck,
      badge: "SLA & Comunicación",
      title: "Alineación y Coordinación Inter-Áreas",
      description:
        "Práctica para fundamentar pedidos a otras gerencias (Sistemas, Compras, Finanzas) y fijar prioridades de trabajo con claridad y respeto profesional.",
      highlight: "Coordinación efectiva de prioridades entre distintas áreas",
    },
    {
      icon: BarChart3,
      badge: "Auditoría de Desarrollo",
      title: "Scorecards y Métricas de Avance",
      description:
        "Seguimiento estructurado con métricas de 1 a 10 para que la gerencia de RRHH conozca la evolución de sus mandos medios y el ajuste metodológico de sus candidatos.",
      highlight: "Reportes estructurados con métricas claras para RRHH",
    },
  ];

  return (
    <section id="simulador" className="py-24 bg-[#fffbf9] border-b border-[#f1dfd3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffdfc5] border border-[#ff8b1e]/30 text-[#61100d] text-xs font-bold uppercase tracking-wider mb-4">
            {segment === "persona" ? "Pilar 01 • Entrevistas & Preparación" : "Pilar 01 • Desarrollo de Mandos Medios"}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111111] tracking-tight mb-4">
            {segment === "persona" ? (
              <>
                Practicá tu próxima entrevista y{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8b1e] via-[#da551d] to-[#61100d]">
                  descubrí qué podés mejorar.
                </span>
              </>
            ) : (
              <>
                Entrená a tus líderes y{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8b1e] via-[#da551d] to-[#61100d]">
                  evaluá talento con criterio objetivo.
                </span>
              </>
            )}
          </h2>
          <p className="text-base sm:text-lg text-[#4a423d] leading-relaxed">
            {segment === "persona"
              ? "En una entrevista laboral tenés poco tiempo para demostrar tu potencial. Dinamis AI te permite ensayar por voz o texto las veces que quieras, ganar fluidez y llegar más seguro al encuentro con el selector."
              : "Dinamis AI brinda un espacio para que tus mandos medios practiquen conversaciones cotidianas de conducción de equipos, y ayuda a RRHH a evaluar candidatos aplicando metodología STAR con reportes objetivos."}
          </p>

          {/* Toggle Button */}
          <div className="mt-8 inline-flex p-1.5 bg-white rounded-2xl border border-[#f1dfd3] shadow-sm">
            <button
              onClick={() => setActiveAudience("empresas")}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                activeAudience === "empresas"
                  ? "bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white shadow-sm"
                  : "text-[#6b625b] hover:text-[#111111]"
              }`}
            >
              Para Empresas (Coaching de Liderazgo)
            </button>
            <button
              onClick={() => setActiveAudience("candidatos")}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                activeAudience === "candidatos"
                  ? "bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white shadow-sm"
                  : "text-[#6b625b] hover:text-[#111111]"
              }`}
            >
              Para Candidatos & Profesionales
            </button>
          </div>
        </div>

        {/* Feature Grid with Specialized Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {(activeAudience === "empresas" ? companyModules : candidateModules).map(
            (feat, index) => {
              const Icon = feat.icon;
              return (
                <div
                  key={index}
                  className="bento-card p-7 rounded-2xl flex flex-col justify-between hover:border-[#ff8b1e]/50 transition-all shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#fff8f3] border border-[#ffdfc5] flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#da551d]" />
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#ffdfc5] text-[#61100d]">
                        {feat.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#111111] mb-2.5">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4a423d] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#f1dfd3] flex items-center text-xs text-[#da551d] gap-1.5 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff8b1e] shrink-0" />
                    <span className="line-clamp-1">{feat.highlight}</span>
                  </div>
                </div>
              );
            }
          )}
        </div>

        {/* Scorecard Showcase: Evaluación y Feedback Predictivo Automatizado */}
        <div className="rounded-3xl bg-white border border-[#f1dfd3] p-8 sm:p-12 shadow-[0_12px_40px_rgba(97,16,13,0.06)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left explanation */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fff8f3] border border-[#ffdfc5] text-[#da551d] text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-[#ff8b1e]" />
                <span>Cierre de Simulación (Turnos 6 a 10)</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
                Reporte de Desempeño y Scorecard Predictivo
              </h3>
              <p className="text-sm sm:text-base text-[#4a423d] leading-relaxed">
                Al concluir los turnos programados, la IA cierra la sesión formalmente y genera de forma automática un informe detallado que no se limita a generalidades:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-[#111111]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ff8b1e] shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-bold">Calificación estimada cuantitativa (1 a 10):</strong> Índice global de preparación y ajuste al rol.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#da551d] shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-bold">Matriz de fortalezas demostradas:</strong> Validación de evidencias STAR, asertividad y claridad oratoria.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#61100d] shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-bold">Áreas de mejora y recomendaciones concretas:</strong> Puntos ciegos corregidos con consejos accionables para la vida real.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Mockup Scorecard */}
            <div className="lg:col-span-6 bg-[#fffbf9] border border-[#f1dfd3] rounded-2xl p-6 sm:p-7 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-[#f1dfd3] pb-4">
                <div>
                  <span className="text-xs uppercase font-mono text-[#808285] block">
                    Scorecard de Desempeño #8492
                  </span>
                  <h4 className="text-base font-bold text-[#111111]">
                    Entrevista: Analista de Procesos Sr.
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-[#da551d] block">8.8 / 10</span>
                  <span className="text-[10px] font-bold text-[#10b981] bg-[#10b981]/10 px-2 py-0.5 rounded-full">
                    Aprobado • Perfil Recomendado
                  </span>
                </div>
              </div>

              {/* Competency Bars */}
              <div className="space-y-2.5 text-xs">
                <div>
                  <div className="flex justify-between font-semibold mb-1">
                    <span className="text-[#4a423d]">Estructuración STAR (Hechos vs Opinión)</span>
                    <span className="text-[#da551d] font-bold">9.2 / 10</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#f1dfd3] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#ff8b1e] to-[#da551d] w-[92%] rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between font-semibold mb-1">
                    <span className="text-[#4a423d]">Resolución de Problemas y Acción</span>
                    <span className="text-[#ff8b1e] font-bold">8.5 / 10</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#f1dfd3] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#ff8b1e] to-[#da551d] w-[85%] rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between font-semibold mb-1">
                    <span className="text-[#4a423d]">Oratoria, Asertividad y Cero Muletillas</span>
                    <span className="text-[#10b981] font-bold">8.7 / 10</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#f1dfd3] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#10b981] to-[#0d9488] w-[87%] rounded-full" />
                  </div>
                </div>
              </div>

              {/* Concrete Feedback Callout */}
              <div className="p-3.5 bg-white rounded-xl border border-[#ffdfc5] text-xs">
                <span className="font-bold text-[#61100d] block mb-1">
                  💡 Recomendación Concreta de Grupo Dinamis:
                </span>
                <p className="text-[#4a423d] text-[11px] leading-relaxed">
                  &ldquo;Tus ejemplos de proyectos pasados son sólidos. En la pregunta sobre conflicto operativo, recordá enfatizar el resultado cuantitativo (cuánto se ahorró en horas o costo) para cerrar la respuesta con máximo impacto ante el selector.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#fff8f3] via-[#ffdfc5]/40 to-[#fff8f3] border border-[#ffdfc5] p-7 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_4px_20px_rgba(97,16,13,0.03)]">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-bold text-[#61100d] uppercase tracking-wider">
              Práctica en Tiempo Real
            </span>
            <h4 className="text-xl font-bold text-[#111111]">
              ¿Querés vivir la experiencia de una entrevista con Dinamis AI?
            </h4>
            <p className="text-sm text-[#4a423d]">
              Iniciá una simulación gratuita por voz o texto con tu puesto deseado ahora mismo.
            </p>
          </div>
          <a
            href="https://app.grupodinamis.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("simulator_callout_click")}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ff8b1e] to-[#da551d] hover:from-[#ff8b1e] hover:to-[#c24614] text-white font-bold text-sm shadow-[0_4px_16px_rgba(255,139,30,0.25)] transition-all flex items-center gap-2 group cursor-pointer"
          >
            <span>Iniciar Simulación Gratis</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
