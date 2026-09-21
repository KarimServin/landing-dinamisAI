import Link from "next/link";
import { Sparkles, ShieldCheck, MapPin, Phone, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#171412] border-t border-[#2d1a10] text-[#a3998f] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#ff8b1e] to-[#da551d] p-[2px]">
                <div className="w-full h-full bg-[#171412] rounded-[10px] flex items-center justify-center">
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

            <div className="flex items-center gap-2 text-xs text-[#a3998f]">
              <ShieldCheck className="w-4 h-4 text-[#ff8b1e]" />
              <span>Respaldado por Grupo Dinamis • Confianza humana, resultados profesionales.</span>
            </div>

            <div className="pt-2 text-xs text-[#a3998f] space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#ff8b1e] shrink-0" />
                <span>Santa Fe Capital, Argentina • Alcance regional en LATAM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#ff8b1e] shrink-0" />
                <a
                  href="https://wa.me/5493425200959"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff8b1e] transition-colors"
                >
                  +54 9 342 5200959 (Atención exclusiva para empresas)
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Dinamis AI Platform */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Plataforma AI
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
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
                  La Ciencia & Metodología
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

          {/* Column 3: Grupo Dinamis Consultoría */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Grupo Dinamis
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="https://grupodinamis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff8b1e] transition-colors flex items-center gap-1"
                >
                  <span>Web Corporativa</span>
                  <ExternalLink className="w-3 h-3" />
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

          {/* Column 4: App & Legal */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Acceso App SaaS
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="https://app.grupodinamis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff8b1e] hover:text-[#ffdfc5] font-semibold transition-colors"
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
                  Iniciar Sesión
                </a>
              </li>
              <li className="pt-3">
                <span className="text-xs uppercase tracking-wider text-[#6b625b] font-bold block mb-1">
                  Seguridad
                </span>
                <span className="text-xs text-[#a3998f] block">
                  Encriptación SSL/TLS de 256 bits y estricto cumplimiento de privacidad corporativa.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-14 pt-8 border-t border-[#2d1a10] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#80766d]">
          <p>
            © {new Date().getFullYear()} Grupo Dinamis. Todos los derechos reservados. Dinamis AI es una marca de Grupo Dinamis.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors">Privacidad</span>
            <span>•</span>
            <span className="hover:text-white transition-colors">Términos de Servicio</span>
            <span>•</span>
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
