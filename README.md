# Dinamis AI — Landing Page SaaS

Landing page de alta conversión para **Dinamis AI**, la plataforma SaaS de inteligencia artificial aplicada a la **Simulación de Entrevistas** y al **Coaching de Líderes**, respaldada por los más de 15 años de metodología de **Grupo Dinamis** (+200 empresas clientes en LATAM).

---

## 🚀 Tecnologías & Arquitectura

* **Framework:** [Next.js 15+ (App Router)](https://nextjs.org/) con Turbopack
* **Lenguaje:** TypeScript estricto
* **Estilos & UI:** Tailwind CSS + Lucide Icons + glassmorphism
* **Rendimiento:** 95-100 en Google Core Web Vitals (cero saltos CLS con `next/font`, SSG estático)
* **Destino de Dominio:** `https://ai.grupodinamis.com`
* **App de Destino (CTAs):** `https://app.grupodinamis.com`
* **Web Matriz:** `https://grupodinamis.com`

---

## 🎯 Pilares del Producto

1. **Simulador de Entrevistas con Metodología STAR:**
   * Entrena respuestas en Situación, Tarea, Acción y Resultado.
   * Feedback instantáneo sobre oratoria, asertividad, coherencia y áreas de mejora.
   * Reduce un 70% los tiempos de cribado inicial para selectores y áreas de RRHH.
2. **AI Leadership Coach (Coaching Ejecutivo 24/7):**
   * Roleplay de escenarios difíciles reales (feedback correctivo, resolución de conflictos, delegación, comunicación de crisis).
   * Mentoría continua adaptada a mandos medios y directores.
   * Diagnósticos ejecutivos cuantitativos para medir la evolución del liderazgo.

---

## 🔍 SEO Técnico & Publicidad (Google Ads / Meta Ads)

* **Schema.org JSON-LD:** Datos estructurados incorporados en `src/app/layout.tsx`:
  * `SoftwareApplication` (Indexación del SaaS en Google)
  * `Organization` (Grupo Dinamis)
  * `FAQPage` (Preguntas frecuentes con Rich Snippets en resultados de búsqueda)
* **Sitemap Dinámico:** Generado en `src/app/sitemap.ts` (`/sitemap.xml`)
* **Robots.txt:** Generado en `src/app/robots.ts` (`/robots.txt`)
* **Tracking de Conversión & GTM:**
  * Componente `src/components/analytics.tsx`
  * Variable de entorno `NEXT_PUBLIC_GTM_ID` para activar Google Tag Manager sin penalizar Core Web Vitals.
  * Helper `trackEvent(eventName, params)` para rastrear clics en CTAs clave.

---

## 📦 Ejecución en Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción y verificar build estático
npm run build

# Iniciar servidor de producción
npm run start
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 🌐 Configuración del Dominio `ai.grupodinamis.com`

1. **Despliegue en Vercel:**
   * Importa este repositorio de GitHub (`landing-dinamisAI`) en Vercel.
   * En la configuración de dominios del proyecto en Vercel, añade `ai.grupodinamis.com`.
2. **Registro DNS en DonWeb / Hostmar:**
   * Ve a la zona DNS de `grupodinamis.com` en tu panel de DonWeb.
   * Agrega un nuevo registro **CNAME**:
     * **Host:** `ai`
     * **Destino:** `cname.vercel-dns.com`
   * En minutos el certificado SSL se expedirá automáticamente y la landing estará activa.

---

## 📂 Estructura del Código

```text
src/
├── app/
│   ├── globals.css          # Estilos globales, variables de tema y animaciones
│   ├── layout.tsx           # SEO Metadata, OpenGraph, JSON-LD Schemas y GTM
│   ├── page.tsx             # Ensamblador de todas las secciones de la landing
│   ├── robots.ts            # Generador dinámico de robots.txt
│   └── sitemap.ts           # Generador dinámico de sitemap.xml
└── components/
    ├── analytics.tsx        # Módulo de tracking y Google Tag Manager
    ├── navbar.tsx           # Barra de navegación sticky con accesos y CTAs
    ├── hero.tsx             # Hero section con simulador interactivo en vivo
    ├── trust-bar.tsx        # Métricas cuantitativas e industrias acompañadas
    ├── interview-simulator.tsx # Sección detallada del simulador STAR
    ├── leadership-coach.tsx # Sección detallada del AI Leadership Coach
    ├── roi-calculator.tsx   # Calculadora interactiva de impacto y ahorro para RRHH
    ├── methodology.tsx      # La ciencia y metodología de Grupo Dinamis
    ├── pricing.tsx          # Planes y precios B2B transparentes
    ├── faq.tsx              # Preguntas frecuentes interactivas
    ├── cta-banner.tsx       # Llamado a la acción final de alta conversión
    └── footer.tsx           # Pie de página corporativo con enlaces y contacto
```

---

© 2026 Grupo Dinamis. Todos los derechos reservados.
