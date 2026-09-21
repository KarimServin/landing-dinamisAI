import Link from "next/link";
import { Sparkles, MapPin, Phone, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#090807] to-[#171412] text-[#a3998f] text-sm border-t border-[#da551d]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#ff8b1e] via-[#da551d] to-[#61100d] p-[2px]">
                <div className="w-full h-full bg-[#090807] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#ff8b1e]" />
                </div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Dinamis <span className="text-[#ff8b1e]">AI</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#a3998f] leading-relaxed max-w-sm">
              Plataforma SaaS que digitaliza más de 15 años de metodología en Recursos Humanos y Desarrollo Organizacional de Grupo Dinamis para entrenar líderes y evaluar talento con Inteligencia Artificial.
            </p>

            <div className="pt-2 text-xs text-[#a3998f] space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#ff8b1e] shrink-0" />
                <span>Santa Fe Capital, Argentina • Cobertura LATAM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#ff8b1e] shrink-0" />
                <a
                  href="https://wa.me/5493425200959"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +54 9 342 5200959 (Atención corporativa)
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Platform Sections */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Plataforma
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#simulador" className="hover:text-[#ff8b1e] transition-colors">
                  Simulador de Entrevistas (STAR)
                </a>
              </li>
              <li>
                <a href="#coaching" className="hover:text-[#ff8b1e] transition-colors">
                  AI Leadership Coach
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-[#ff8b1e] transition-colors">
                  Calculadora de ROI
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-[#ff8b1e] transition-colors">
                  Metodología de Grupo Dinamis
                </a>
              </li>
              <li>
                <a href="#precios" className="hover:text-[#ff8b1e] transition-colors">
                  Planes & Precios
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#ff8b1e] transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Grupo Dinamis */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Grupo Dinamis
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://grupodinamis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff8b1e] transition-colors flex items-center gap-1"
                >
                  <span>Sitio Institucional</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://grupodinamis.com/desarrollo-de-lideres/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff8b1e] transition-colors"
                >
                  Desarrollo de Líderes
                </a>
              </li>
              <li>
                <a
                  href="https://grupodinamis.com/direccion-externa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff8b1e] transition-colors"
                >
                  Dirección Externa
                </a>
              </li>
              <li>
                <a
                  href="https://grupodinamis.com/hunting-ejecutivo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff8b1e] transition-colors"
                >
                  Hunting Ejecutivo
                </a>
              </li>
              <li>
                <a
                  href="https://grupodinamis.com/busqueda-laboral/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff8b1e] transition-colors"
                >
                  Búsqueda y Selección
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Platform Access */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Acceso App
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://app.grupodinamis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff8b1e] hover:underline font-bold"
                >
                  Registrarse en la App
                </a>
              </li>
              <li>
                <a
                  href="https://app.grupodinamis.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Iniciar sesión
                </a>
              </li>
              <li className="pt-2 text-[11px] text-[#80766d] leading-relaxed">
                Práctica protegida bajo estrictas normas de confidencialidad y privacidad corporativa.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#80766d]">
          <p>
            © {new Date().getFullYear()} Grupo Dinamis. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://grupodinamis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ff8b1e] hover:underline"
            >
              grupodinamis.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
