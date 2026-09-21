import Link from "next/link";
import { MapPin, Phone, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#171412] text-[#a3998f] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#da551d] flex items-center justify-center text-white font-bold text-base">
                D
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Dinamis <span className="text-[#da551d]">AI</span>
              </span>
            </Link>

            <p className="text-xs text-[#a3998f] leading-relaxed max-w-sm">
              Herramienta de desarrollo organizacional concebida por Grupo Dinamis para ejercitar conversaciones de liderazgo y estructurar la evaluación de competencias laborales.
            </p>

            <div className="pt-2 text-xs text-[#a3998f] space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#da551d] shrink-0" />
                <span>Santa Fe Capital, Argentina</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#da551d] shrink-0" />
                <a
                  href="https://wa.me/5493425200959"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +54 9 342 5200959
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Platform Sections */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Herramienta
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#simulador" className="hover:text-white transition-colors">
                  Simulador de Entrevistas
                </a>
              </li>
              <li>
                <a href="#coaching" className="hover:text-white transition-colors">
                  Coaching de Líderes
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-white transition-colors">
                  Estimación de Impacto
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-white transition-colors">
                  Metodología STAR
                </a>
              </li>
              <li>
                <a href="#precios" className="hover:text-white transition-colors">
                  Planes de Acceso
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Grupo Dinamis */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Grupo Dinamis
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://grupodinamis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
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
                  className="hover:text-white transition-colors"
                >
                  Desarrollo de Líderes
                </a>
              </li>
              <li>
                <a
                  href="https://grupodinamis.com/direccion-externa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Dirección Externa
                </a>
              </li>
              <li>
                <a
                  href="https://grupodinamis.com/hunting-ejecutivo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Hunting Ejecutivo
                </a>
              </li>
              <li>
                <a
                  href="https://grupodinamis.com/busqueda-laboral/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Búsqueda y Selección
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Platform Access */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Acceso
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://app.grupodinamis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#da551d] hover:underline font-medium"
                >
                  Ingresar a la plataforma
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
                Práctica segura bajo estándares de confidencialidad y ética profesional.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-12 pt-6 border-t border-[#2a1b14] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#80766d]">
          <p>
            © {new Date().getFullYear()} Grupo Dinamis. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://grupodinamis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#da551d] hover:underline"
            >
              grupodinamis.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
