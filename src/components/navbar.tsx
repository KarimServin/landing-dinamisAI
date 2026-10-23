"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, Building2, Rocket } from "lucide-react";
import { trackEvent } from "@/components/analytics";
import { useSegment } from "@/components/segment-context";
import { DinamisBrandLogo } from "@/components/dinamis-logo";

interface Section {
  id: string;
  labelEmpresa: string;
  labelPersona: string;
}

// Orden riguroso que coincide exactamente con el DOM de la página (Pilar 01 simulador precede a Pilar 02 coaching)
const SECTIONS: Section[] = [
  { id: "hero", labelEmpresa: "Inicio", labelPersona: "Inicio" },
  { id: "simulador", labelEmpresa: "Simulador de Rol", labelPersona: "Simulador STAR" },
  { id: "coaching", labelEmpresa: "Coaching de Liderazgo", labelPersona: "Coaching Carrera" },
  { id: "metodologia", labelEmpresa: "Metodología", labelPersona: "Metodología" },
  { id: "comparativa", labelEmpresa: "Diferencial", labelPersona: "Diferencial" },
  { id: "faq", labelEmpresa: "FAQ", labelPersona: "Preguntas" },
];

export function Navbar() {
  const { segment, setSegment } = useSegment();
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const isManualScrollRef = useRef(false);
  const manualScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const visibleSections = SECTIONS.filter((s) => (segment === "empresa" ? s.labelEmpresa : s.labelPersona));

  useEffect(() => {
    let ticking = false;

    const evaluateActiveSection = () => {
      // Si se hizo clic en un ítem del índice, no interferir durante la animación suave
      if (isManualScrollRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 1. Si está en el tope de la pantalla
      if (scrollY < 120) {
        setActiveSection("hero");
        return;
      }

      // 2. Si está al final de la página, activa la última sección
      if (scrollY + windowHeight >= documentHeight - 60) {
        setActiveSection(visibleSections[visibleSections.length - 1].id);
        return;
      }

      // 3. Línea de lectura visual óptima (35% de la altura del viewport)
      const readingLine = windowHeight * 0.35;
      let matchedSectionId = visibleSections[0].id;

      for (let i = 0; i < visibleSections.length; i++) {
        const sec = visibleSections[i];
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Si la sección ya llegó o superó la línea de lectura y no ha terminado
          if (rect.top <= readingLine) {
            matchedSectionId = sec.id;
          } else {
            break;
          }
        }
      }

      setActiveSection(matchedSectionId);
    };

    const handleScroll = () => {
      // Ocultar franja negra y activar glassmorphism al scrollear hacia abajo del hero
      setIsScrolled(window.scrollY > 45);
      evaluateActiveSection();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    evaluateActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (manualScrollTimeoutRef.current) {
        clearTimeout(manualScrollTimeoutRef.current);
      }
    };
  }, [segment]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    isManualScrollRef.current = true;
    if (manualScrollTimeoutRef.current) {
      clearTimeout(manualScrollTimeoutRef.current);
    }

    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        // Compensación precisa por la altura del navbar fijo para que no tape el encabezado
        const navbarOffset = 78;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }

    // Reactivar seguimiento automático tras completarse la animación de scroll
    manualScrollTimeoutRef.current = setTimeout(() => {
      isManualScrollRef.current = false;
    }, 850);
  };

  const handleCtaClick = (location: string) => {
    trackEvent("click_cta", { location, target: "app.grupodinamis.com" });
  };

  return (
    <>
      {/* Header Superior Fijo con Tira Negra Institucional */}
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
        {/* Tira Superior Negra: Se oculta suavemente al scrollear hacia abajo del hero */}
        <div
          className={`bg-[#090807] text-white overflow-hidden transition-all duration-300 ease-in-out px-4 sm:px-6 lg:px-8 ${
            isScrolled
              ? "max-h-0 opacity-0 -translate-y-2 py-0 border-b-0 pointer-events-none"
              : "max-h-12 opacity-100 translate-y-0 py-1.5 border-b border-white/10"
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-center text-xs sm:text-[13px] font-medium text-white">
            <a
              href="https://grupodinamis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:opacity-90 transition-opacity"
              title="Grupo Dinamis"
            >
              <span className="font-semibold text-white">Grupo Dinamis</span>{" "}
              <span className="text-white/90">presenta su nueva herramienta de IA</span>
            </a>
          </div>
        </div>

        {/* Barra de Navegación Principal con efecto Glassmorphism */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? "bg-white/70 backdrop-blur-xl backdrop-saturate-150 border-b border-[#f1dfd3]/60 shadow-[0_8px_30px_rgba(97,16,13,0.06)] py-2.5 sm:py-3"
              : "bg-[#fffbf9]/90 backdrop-blur-md border-b border-[#f1dfd3]/80 py-3 sm:py-3.5"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative flex items-center justify-between gap-3">
            {/* Mobile Brand Logo (Izquierda en pantallas móviles) */}
            <div className="flex md:hidden items-center z-10">
              <Link href="/" className="shrink-0 flex items-center">
                <DinamisBrandLogo priority />
              </Link>
            </div>

            {/* Selector de Audiencia: "Soy empresa" / "Soy candidato/a" (Desktop Izquierda) */}
            <div className="hidden md:flex items-center p-1 bg-white rounded-2xl border border-[#f1dfd3] shadow-xs text-xs font-bold shrink-0 z-10">
              <button
                onClick={() => setSegment("empresa")}
                className={`px-3 sm:px-4 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  segment === "empresa"
                    ? "bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white shadow-xs font-bold"
                    : "text-[#6b625b] hover:text-[#111111]"
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Soy empresa</span>
                <span className="sm:hidden">Empresas</span>
              </button>
              <button
                onClick={() => setSegment("persona")}
                className={`px-3 sm:px-4 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  segment === "persona"
                    ? "bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white shadow-xs font-bold"
                    : "text-[#6b625b] hover:text-[#111111]"
                }`}
              >
                <Rocket className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Soy candidato/a</span>
                <span className="sm:hidden">Candidatos</span>
              </button>
            </div>

            {/* Logo Marca Institucional Grupo Dinamis (Desktop: Centro Geométrico Absoluto) */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center pointer-events-auto">
              <Link href="/" className="shrink-0 flex items-center justify-center">
                <DinamisBrandLogo priority />
              </Link>
            </div>

            {/* Acciones Derecha */}
            <div className="flex items-center gap-3 z-10">
              <a
                href="https://app.grupodinamis.com/login"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCtaClick("doc_nav_login")}
                className="hidden md:inline-block text-xs font-medium text-[#111111] hover:text-[#ff8b1e] transition-colors"
              >
                Iniciar sesión
              </a>
              <a
                href="https://app.grupodinamis.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleCtaClick("doc_nav_free_trial")}
                className="inline-flex items-center justify-center px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#ff8b1e] to-[#da551d] hover:from-[#ff8b1e] hover:to-[#c24614] text-white font-semibold text-xs shadow-xs hover:shadow-sm transition-all duration-200 gap-1 group shrink-0"
              >
                <span>Probar ahora</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Indicador de Sección Flotante al Costado (Flotante sin recuadro ni fondo) */}
      <aside
        aria-label="Navegación de documento"
        className="fixed right-6 sm:right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-2.5 bg-transparent p-0 border-0 shadow-none pointer-events-auto"
      >
        {visibleSections.map((sec) => {
          const isActive = activeSection === sec.id;
          const label = segment === "empresa" ? sec.labelEmpresa : sec.labelPersona;

          return (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className="group flex items-center gap-3 cursor-pointer py-1 pl-3 pr-0 bg-transparent border-0 transition-all duration-300"
            >
              {/* Texto flotante sin fondo */}
              <span
                className={`text-xs sm:text-sm tracking-tight transition-all duration-300 select-none whitespace-nowrap ${
                  isActive
                    ? "text-[#da551d] font-extrabold translate-x-0 drop-shadow-xs"
                    : "text-[#80766e] font-semibold hover:text-[#111111] group-hover:-translate-x-1"
                }`}
              >
                {label}
              </span>

              {/* Indicador visual de acento */}
              <div className="flex items-center justify-center w-3 h-5">
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-2 h-5 bg-gradient-to-b from-[#ff8b1e] to-[#da551d] shadow-[0_0_12px_rgba(255,139,30,0.5)]"
                      : "w-1.5 h-1.5 bg-[#c5b8ad] group-hover:bg-[#ff8b1e] group-hover:h-3"
                  }`}
                />
              </div>
            </button>
          );
        })}
      </aside>

      {/* Indicador de Sección Flotante en Móvil (Pill Inferior) */}
      <div className="md:hidden fixed bottom-5 right-5 z-40">
        <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#171412]/90 backdrop-blur-md text-white border border-white/20 shadow-xl text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-[#ff8b1e] animate-pulse" />
          <span>
            {visibleSections.find((s) => s.id === activeSection)?.[
              segment === "empresa" ? "labelEmpresa" : "labelPersona"
            ] || "Sección"}
          </span>
        </div>
      </div>
    </>
  );
}
