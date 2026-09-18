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
          ? "bg-[#07090E]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Grupo Dinamis Endorsement */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-[2px] shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-cyan-400 transition-transform group-hover:scale-110" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                Dinamis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-extrabold">AI</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-400 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-blue-400 inline" /> By Grupo Dinamis
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a
              href="#simulador"
              className="hover:text-cyan-400 transition-colors py-1"
            >
              Simulador de Entrevistas
            </a>
            <a
              href="#coaching"
              className="hover:text-cyan-400 transition-colors py-1"
            >
              Coaching de Líderes
            </a>
            <a
              href="#calculadora"
              className="hover:text-cyan-400 transition-colors py-1"
            >
              Impacto & ROI
            </a>
            <a
              href="#metodologia"
              className="hover:text-cyan-400 transition-colors py-1"
            >
              Metodología
            </a>
            <a
              href="#precios"
              className="hover:text-cyan-400 transition-colors py-1"
            >
              Precios
            </a>
            <a
              href="#faq"
              className="hover:text-cyan-400 transition-colors py-1"
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
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Iniciar Sesión
            </a>
            <a
              href="https://app.grupodinamis.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCtaClick("navbar_free_trial")}
              className="relative inline-flex items-center justify-center p-[1px] rounded-lg font-medium text-sm overflow-hidden group shadow-md shadow-blue-900/30 hover:shadow-cyan-500/25 transition-all"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 group-hover:from-blue-500 group-hover:to-cyan-400 transition-all duration-300"></span>
              <span className="relative px-4 py-2 bg-[#0A0E1A] rounded-[7px] text-white flex items-center gap-1.5 transition-all duration-200 group-hover:bg-transparent">
                Probar Gratis
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://app.grupodinamis.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleCtaClick("navbar_mobile_quick")}
              className="px-3 py-1.5 text-xs font-semibold rounded-md bg-blue-600 text-white sm:hidden"
            >
              Probar
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F19]/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in fade-in slide-in-from-top-2">
          <a
            href="#simulador"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg"
          >
            Simulador de Entrevistas
          </a>
          <a
            href="#coaching"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg"
          >
            Coaching de Líderes
          </a>
          <a
            href="#calculadora"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg"
          >
            Impacto & ROI
          </a>
          <a
            href="#metodologia"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg"
          >
            Metodología
          </a>
          <a
            href="#precios"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg"
          >
            Precios
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg"
          >
            FAQ
          </a>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="https://app.grupodinamis.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center w-full py-2.5 rounded-lg border border-slate-700 text-slate-200 text-sm font-medium hover:bg-slate-800"
            >
              Iniciar Sesión
            </a>
            <a
              href="https://app.grupodinamis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center w-full py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold shadow-lg shadow-blue-500/20"
            >
              Comenzar Prueba Gratuita
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
