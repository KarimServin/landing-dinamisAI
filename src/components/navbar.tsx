"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";
import { trackEvent } from "@/components/analytics";
import { useSegment } from "@/components/segment-context";

export function Navbar() {
  const { segment, setSegment, openGate } = useSegment();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCtaClick = (location: string) => {
    trackEvent("click_cta", { location, target: "app.grupodinamis.com" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[#fffbf9]/95 backdrop-blur-md border-b border-[#f1dfd3] shadow-[0_4px_16px_rgba(97,16,13,0.03)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ff8b1e] via-[#da551d] to-[#61100d] p-[2px] shadow-[0_4px_12px_rgba(255,139,30,0.25)] group-hover:shadow-[0_4px_20px_rgba(255,139,30,0.4)] transition-all">
              <div className="w-full h-full bg-[#fffbf9] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#ff8b1e] transition-transform group-hover:scale-110" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#111111] flex items-center gap-1.5">
                Dinamis{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8b1e] to-[#da551d] font-extrabold">
                  AI
                </span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#61100d] flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#da551d] inline" /> By Grupo Dinamis
              </span>
            </div>
          </Link>

          {/* Audience Switcher & Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-1.5 p-1 bg-white rounded-xl border border-[#f1dfd3] shadow-sm">
            <button
              onClick={() => setSegment("empresa")}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                segment === "empresa"
                  ? "bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white shadow-sm"
                  : "text-[#6b625b] hover:text-[#111111]"
              }`}
            >
              🏢 Soy Empresa
            </button>
            <button
              onClick={() => setSegment("persona")}
              className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                segment === "persona"
                  ? "bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white shadow-sm"
                  : "text-[#6b625b] hover:text-[#111111]"
              }`}
            >
              🚀 Soy Persona
            </button>
            <button
              onClick={openGate}
              title="Abrir Asistente Robot 3D"
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded-lg text-[#61100d] bg-[#fff8f3] hover:bg-[#ffdfc5] border border-[#ffdfc5] transition-all cursor-pointer shadow-xs ml-1"
            >
              <Image
                src="/images/dinamis-bot.png"
                alt="Robot Dinamis"
                width={16}
                height={16}
                className="animate-bounce"
                style={{ animationDuration: "2.5s" }}
              />
              <span>Robot 3D</span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#4a423d]">
            <a
              href="#simulador"
              className="hover:text-[#ff8b1e] transition-colors py-1"
            >
              {segment === "empresa" ? "Filtros STAR" : "Simulador de Entrevista"}
            </a>
            <a
              href="#coaching"
              className="hover:text-[#ff8b1e] transition-colors py-1"
            >
              {segment === "empresa" ? "Coaching de Líderes" : "Coaching de Carrera"}
            </a>
            <a
              href="#calculadora"
              className="hover:text-[#ff8b1e] transition-colors py-1"
            >
              {segment === "empresa" ? "Impacto & ROI" : "Estimador"}
            </a>
            <a
              href="#metodologia"
              className="hover:text-[#ff8b1e] transition-colors py-1"
            >
              Metodología
            </a>
            <a
              href="#comparativa"
              className="hover:text-[#ff8b1e] transition-colors py-1"
            >
              Diferencial
            </a>
            <a
              href="#precios"
              className="hover:text-[#ff8b1e] transition-colors py-1"
            >
              Planes
            </a>
            <a
              href="#faq"
              className="hover:text-[#ff8b1e] transition-colors py-1"
            >
              FAQ
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://app.grupodinamis.com/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCtaClick("navbar_login")}
              className="px-4 py-2 text-sm font-medium text-[#111111] hover:text-[#ff8b1e] transition-colors"
            >
              Iniciar sesión
            </a>
            <a
              href="https://app.grupodinamis.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCtaClick("navbar_free_trial")}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#ff8b1e] to-[#da551d] hover:from-[#ff8b1e] hover:to-[#c24614] text-white font-semibold text-sm shadow-[0_4px_16px_rgba(255,139,30,0.25)] hover:shadow-[0_4px_20px_rgba(218,85,29,0.35)] transition-all duration-200 gap-1.5 group"
            >
              <span>Probar gratis</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://app.grupodinamis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#ff8b1e] text-white sm:hidden shadow-sm"
            >
              Probar
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#111111] hover:bg-[#ffdfc5]/40 border border-[#f1dfd3] transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fffbf9] border-b border-[#f1dfd3] px-5 pt-4 pb-6 mt-3 space-y-3 shadow-xl animate-in fade-in slide-in-from-top-2">
          {/* Mobile Audience Switcher */}
          <div className="p-1 bg-white rounded-xl border border-[#f1dfd3] grid grid-cols-2 gap-1 mb-2">
            <button
              onClick={() => {
                setSegment("empresa");
              }}
              className={`py-2 px-3 text-xs font-bold rounded-lg transition-all text-center flex items-center justify-center gap-1.5 ${
                segment === "empresa"
                  ? "bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white shadow-sm"
                  : "text-[#6b625b]"
              }`}
            >
              <span>🏢</span>
              <span>Empresa</span>
            </button>
            <button
              onClick={() => {
                setSegment("persona");
              }}
              className={`py-2 px-3 text-xs font-bold rounded-lg transition-all text-center flex items-center justify-center gap-1.5 ${
                segment === "persona"
                  ? "bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white shadow-sm"
                  : "text-[#6b625b]"
              }`}
            >
              <span>🚀</span>
              <span>Persona</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openGate();
              }}
              className="col-span-2 py-2 px-3 text-xs font-bold rounded-lg transition-all text-center flex items-center justify-center gap-2 bg-[#fff8f3] text-[#61100d] border border-[#ffdfc5] hover:bg-[#ffdfc5] cursor-pointer mt-0.5"
            >
              <Image
                src="/images/dinamis-bot.png"
                alt="Robot Dinamis"
                width={16}
                height={16}
              />
              <span>Abrir Asistente Robot 3D</span>
            </button>
          </div>

          <a
            href="#simulador"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-[#111111] hover:text-[#ff8b1e] hover:bg-[#fff8f3] rounded-lg"
          >
            {segment === "empresa" ? "Filtros STAR" : "Simulador de Entrevistas"}
          </a>
          <a
            href="#coaching"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-[#111111] hover:text-[#ff8b1e] hover:bg-[#fff8f3] rounded-lg"
          >
            {segment === "empresa" ? "Coaching de Líderes" : "Coaching de Carrera"}
          </a>
          <a
            href="#calculadora"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-[#111111] hover:text-[#ff8b1e] hover:bg-[#fff8f3] rounded-lg"
          >
            {segment === "empresa" ? "Impacto & ROI" : "Calculadora de Ahorro"}
          </a>
          <a
            href="#metodologia"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-[#111111] hover:text-[#ff8b1e] hover:bg-[#fff8f3] rounded-lg"
          >
            Metodología Dinamis
          </a>
          <a
            href="#comparativa"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-[#111111] hover:text-[#ff8b1e] hover:bg-[#fff8f3] rounded-lg"
          >
            Diferencial vs IAs Generales
          </a>
          <a
            href="#precios"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-[#111111] hover:text-[#ff8b1e] hover:bg-[#fff8f3] rounded-lg"
          >
            Planes
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-semibold text-[#111111] hover:text-[#ff8b1e] hover:bg-[#fff8f3] rounded-lg"
          >
            Preguntas Frecuentes
          </a>

          <div className="pt-4 border-t border-[#f1dfd3] flex flex-col gap-2.5">
            <a
              href="https://app.grupodinamis.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center w-full py-2.5 rounded-xl border border-[#f1dfd3] text-[#111111] text-sm font-semibold hover:bg-[#fff8f3]"
            >
              Iniciar sesión
            </a>
            <a
              href="https://app.grupodinamis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center w-full py-2.5 rounded-xl bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white text-sm font-bold shadow-md shadow-[#ff8b1e]/20"
            >
              Comenzar prueba gratuita
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
