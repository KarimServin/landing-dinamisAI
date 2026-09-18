import Link from "next/link";
import { Sparkles, ShieldCheck, MapPin, Phone, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#05070B] border-t border-slate-800 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[2px]">
                <div className="w-full h-full bg-[#0B0F19] rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Dinamis <span className="text-cyan-400">AI</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Plataforma SaaS que digitaliza más de 15 años de metodología en Recursos Humanos y Desarrollo Organizacional de Grupo Dinamis para entrenar líderes y evaluar talento con Inteligencia Artificial.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Respaldado por Grupo Dinamis • Confianza humana, resultados profesionales.</span>
            </div>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Santa Fe Capital, Argentina • Alcance regional en LATAM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a
                  href="https://wa.me/5493425200959"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
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
                <a href="#simulador" className="hover:text-cyan-400 transition-colors">
                  Simulador de Entrevistas (STAR)
                </a>
              </li>
              <li>
                <a href="#coaching" className="hover:text-cyan-400 transition-colors">
                  AI Leadership Coach
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-cyan-400 transition-colors">
                  Calculadora de ROI
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-cyan-400 transition-colors">
                  La Ciencia & Metodología
                </a>
              </li>
              <li>
                <a href="#precios" className="hover:text-cyan-400 transition-colors">
                  Planes & Precios
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
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
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1"
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
                  className="hover:text-cyan-400 transition-colors"
                >
                  Desarrollo de Líderes
                </a>
              </li>
              <li>
                <a
                  href="https://grupodinamis.com/direccion-externa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Dirección Externa
                </a>
              </li>
              <li>
                <a
                  href="https://grupodinamis.com/hunting-ejecutivo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Hunting Ejecutivo
                </a>
              </li>
              <li>
                <a
                  href="https://grupodinamis.com/busqueda-laboral/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
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
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
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
                <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                  Seguridad
                </span>
                <span className="text-xs text-slate-400 block">
                  Encriptación SSL/TLS de 256 bits y cumplimiento de privacidad corporativa.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Grupo Dinamis. Todos los derechos reservados. Dinamis AI es una marca de Grupo Dinamis.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 transition-colors">Privacidad</span>
            <span>•</span>
            <span className="hover:text-slate-300 transition-colors">Términos de Servicio</span>
            <span>•</span>
            <a
              href="https://grupodinamis.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              grupodinamis.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
