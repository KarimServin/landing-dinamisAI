"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/components/analytics";

export function Navbar() {
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
          ? "bg-[#fffbf9]/95 backdrop-blur-md border-b border-[#f1dfd3] shadow-sm py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-[#ff8b1e] flex items-center justify-center text-white font-bold text-lg shadow-sm">
              D
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-[#171412] flex items-center gap-1">
                Dinamis <span className="text-[#da551d] font-semibold">AI</span>
              </span>
              <span className="text-[11px] font-normal text-[#6b625b]">
                Por Grupo Dinamis
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4a423d]">
            <a
              href="#simulador"
              className="hover:text-[#da551d] transition-colors py-1"
            >
              Simulador de Entrevistas
            </a>
            <a
              href="#coaching"
              className="hover:text-[#da551d] transition-colors py-1"
            >
              Coaching de Líderes
            </a>
            <a
              href="#calculadora"
              className="hover:text-[#da551d] transition-colors py-1"
            >
              Estimación de Impacto
            </a>
            <a
              href="#metodologia"
              className="hover:text-[#da551d] transition-colors py-1"
            >
              Metodología
            </a>
            <a
              href="#precios"
              className="hover:text-[#da551d] transition-colors py-1"
            >
              Planes
            </a>
            <a
              href="#faq"
              className="hover:text-[#da551d] transition-colors py-1"
            >
              Preguntas Frecuentes
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://app.grupodinamis.com/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCtaClick("navbar_login")}
              className="px-4 py-2 text-sm font-medium text-[#4a423d] hover:text-[#171412] transition-colors"
            >
              Iniciar sesión
            </a>
            <a
              href="https://app.grupodinamis.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCtaClick("navbar_free_trial")}
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#da551d] hover:bg-[#c24614] text-white font-medium text-sm transition-colors gap-1.5 shadow-sm"
            >
              <span>Acceder a la plataforma</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://app.grupodinamis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-medium rounded-md bg-[#da551d] text-white sm:hidden"
            >
              Acceder
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#171412] hover:bg-[#fff8f3] border border-[#f1dfd3]"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fffbf9] border-b border-[#f1dfd3] px-5 pt-4 pb-6 mt-3 space-y-3 shadow-md">
          <a
            href="#simulador"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-[#171412] hover:text-[#da551d]"
          >
            Simulador de Entrevistas
          </a>
          <a
            href="#coaching"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-[#171412] hover:text-[#da551d]"
          >
            Coaching de Líderes
          </a>
          <a
            href="#calculadora"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-[#171412] hover:text-[#da551d]"
          >
            Estimación de Impacto
          </a>
          <a
            href="#metodologia"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-[#171412] hover:text-[#da551d]"
          >
            Metodología
          </a>
          <a
            href="#precios"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-[#171412] hover:text-[#da551d]"
          >
            Planes
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-[#171412] hover:text-[#da551d]"
          >
            Preguntas Frecuentes
          </a>

          <div className="pt-4 border-t border-[#f1dfd3] flex flex-col gap-2">
            <a
              href="https://app.grupodinamis.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center w-full py-2.5 rounded-lg border border-[#f1dfd3] text-[#171412] text-sm font-medium"
            >
              Iniciar sesión
            </a>
            <a
              href="https://app.grupodinamis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center w-full py-2.5 rounded-lg bg-[#da551d] text-white text-sm font-medium"
            >
              Acceder a la plataforma
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
