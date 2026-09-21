"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";
import { trackEvent } from "@/components/analytics";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCtaClick = (location: string) => {
    trackEvent("click_cta", { location, target: "app.grupodinamis.com" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#fffbf9]/95 backdrop-blur-md border-b border-[#f1dfd3] shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Grupo Dinamis Endorsement */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ff8b1e] via-[#da551d] to-[#c22722] p-[2px] shadow-md shadow-[#ff8b1e]/20 group-hover:shadow-[#ff8b1e]/40 transition-all duration-300">
              <div className="w-full h-full bg-[#fffbf9] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#ff8b1e] transition-transform group-hover:scale-110" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#171412] flex items-center gap-1.5">
                Dinamis{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff8b1e] to-[#da551d] font-extrabold">
                  AI
                </span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#808285] flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#ff8b1e] inline" /> By Grupo Dinamis
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4a423d]">
            <a
              href="#simulador"
              className="hover:text-[#ff8b1e] transition-colors py-1"
            >
              Simulador de Entrevistas
            </a>
            <a
              href="#coaching"
              className="hover:text-[#ff8b1e] transition-colors py-1"
            >
              Coaching de Líderes
            </a>
            <a
              href="#calculadora"
              className="hover:text-[#ff8b1e] transition-colors py-1"
            >
              Impacto & ROI
            </a>
            <a
              href="#metodologia"
              className="hover:text-[#ff8b1e] transition-colors py-1"
            >
              Metodología
            </a>
            <a
              href="#precios"
              className="hover:text-[#ff8b1e] transition-colors py-1"
            >
              Precios
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
              className="px-4 py-2 text-sm font-medium text-[#171412] hover:text-[#ff8b1e] transition-colors"
            >
              Iniciar Sesión
            </a>
            <a
              href="https://app.grupodinamis.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCtaClick("navbar_free_trial")}
              className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white font-medium text-sm shadow-md shadow-[#ff8b1e]/25 hover:shadow-lg hover:shadow-[#da551d]/35 hover:brightness-105 transition-all duration-200 gap-1.5 group"
            >
              <span>Probar Gratis</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://app.grupodinamis.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCtaClick("navbar_mobile_quick")}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#ff8b1e] text-white sm:hidden"
            >
              Probar
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#171412] hover:bg-[#fff8f3] border border-[#f1dfd3] transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fffbf9] border-b border-[#f1dfd3] px-4 pt-4 pb-6 mt-3 space-y-3 shadow-xl animate-in fade-in slide-in-from-top-2">
          <a
            href="#simulador"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#171412] hover:text-[#ff8b1e] hover:bg-[#fff8f3] rounded-lg"
          >
            Simulador de Entrevistas
          </a>
          <a
            href="#coaching"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#171412] hover:text-[#ff8b1e] hover:bg-[#fff8f3] rounded-lg"
          >
            Coaching de Líderes
          </a>
          <a
            href="#calculadora"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#171412] hover:text-[#ff8b1e] hover:bg-[#fff8f3] rounded-lg"
          >
            Impacto & ROI
          </a>
          <a
            href="#metodologia"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#171412] hover:text-[#ff8b1e] hover:bg-[#fff8f3] rounded-lg"
          >
            Metodología
          </a>
          <a
            href="#precios"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#171412] hover:text-[#ff8b1e] hover:bg-[#fff8f3] rounded-lg"
          >
            Precios
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-[#171412] hover:text-[#ff8b1e] hover:bg-[#fff8f3] rounded-lg"
          >
            FAQ
          </a>

          <div className="pt-4 border-t border-[#f1dfd3] flex flex-col gap-2">
            <a
              href="https://app.grupodinamis.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center w-full py-2.5 rounded-xl border border-[#f1dfd3] text-[#171412] text-sm font-medium hover:bg-[#fff8f3]"
            >
              Iniciar Sesión
            </a>
            <a
              href="https://app.grupodinamis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center w-full py-2.5 rounded-xl bg-gradient-to-r from-[#ff8b1e] to-[#da551d] text-white text-sm font-semibold shadow-md shadow-[#ff8b1e]/20"
            >
              Comenzar Prueba Gratuita
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
