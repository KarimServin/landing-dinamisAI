
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai.grupodinamis.com"),
  title: {
    default: "Dinamis AI | Simulación de Entrevistas y Coaching de Líderes con IA",
    template: "%s | Dinamis AI - By Grupo Dinamis",
  },
  description:
    "Potencia el capital humano con inteligencia artificial. Simulación de entrevistas laborales por competencias (STAR) y coaching ejecutivo continuo para líderes. Desarrollado con el respaldo y metodología de Grupo Dinamis.",
  keywords: [
    "simulacion de entrevistas ia",
    "coaching de lideres inteligencia artificial",
    "entrevistas laborales con ia",
    "evaluacion de talento rrhh",
    "metodologia star ia",
    "software recursos humanos ia",
    "entrenamiento liderazgo ejecutivo",
    "dinamis ai",
    "grupo dinamis",
    "feedback de entrevistas automatizado",
  ],
  authors: [{ name: "Grupo Dinamis", url: "https://grupodinamis.com" }],
  creator: "Grupo Dinamis",
  publisher: "Grupo Dinamis",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://ai.grupodinamis.com",
    title: "Dinamis AI | Simulación de Entrevistas y Coaching de Líderes con IA",
    description:
      "Entrena líderes y evalúa candidatos con IA avanzada y más de 15 años de metodología en desarrollo organizacional de Grupo Dinamis. Reduce tiempos de selección un 70%.",
    siteName: "Dinamis AI",
    images: [
      {
        url: "https://grupodinamis.com/wp-content/uploads/2026/06/Captura-de-pantalla-2026-06-05-114954.png",
        width: 1200,
        height: 630,
        alt: "Dinamis AI - Plataforma de IA para Entrevistas y Liderazgo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinamis AI | Simulación de Entrevistas y Coaching de Líderes",
    description:
      "Plataforma SaaS que une la inteligencia artificial con la consultoría en RRHH para escalar el talento de tu empresa.",
    images: [
      "https://grupodinamis.com/wp-content/uploads/2026/06/Captura-de-pantalla-2026-06-05-114954.png",
    ],
  },
  alternates: {
    canonical: "https://ai.grupodinamis.com",
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://ai.grupodinamis.com/#software",
      name: "Dinamis AI",
      applicationCategory: "BusinessApplication",
      operatingSystem: "All (Web App)",
      url: "https://ai.grupodinamis.com",
      description:
        "SaaS impulsado por inteligencia artificial para simulación realista de entrevistas laborales y coaching de líderes con metodología de Grupo Dinamis.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        description: "Versión de prueba y simulación gratuita disponible.",
      },
      author: {
        "@id": "https://grupodinamis.com/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://grupodinamis.com/#organization",
      name: "Grupo Dinamis",
      url: "https://grupodinamis.com",
      logo: "https://grupodinamis.com/wp-content/uploads/2026/06/Captura-de-pantalla-2026-06-05-114954.png",
      description:
        "Consultora de Recursos Humanos y Desarrollo Organizacional con más de 15 años de experiencia acompañando a +200 empresas en LATAM.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+54-9-342-5200959",
        contactType: "customer service",
        areaServed: ["AR", "UY", "CL", "MX", "CO", "ES"],
        availableLanguage: ["Spanish"],
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://ai.grupodinamis.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es Dinamis AI y en qué se diferencia de un ChatGPT convencional?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dinamis AI no es un modelo genérico sin contexto. Está entrenado y parametrizado con los más de 15 años de metodología en Recursos Humanos, evaluación por competencias (STAR) y desarrollo organizacional de Grupo Dinamis. Ofrece métricas cuantitativas, informes comparativos para selectores y simulaciones realistas de liderazgo corporativo.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo funciona la simulación de entrevistas laborales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El usuario o candidato se conecta a una sesión interactiva donde la IA actúa como selector senior. Al finalizar la entrevista, genera un diagnóstico detallado con puntaje de idoneidad, análisis de respuestas bajo modelo STAR, claridad de comunicación y oportunidades de mejora.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo ayuda el AI Leadership Coach a los líderes de empresa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Permite a mandos medios y directores ensayar conversaciones difíciles (dar feedback correctivo, resolución de disputas, delegación o crisis) en un entorno seguro y confidencial 24/7, recibiendo recomendaciones prácticas para perfeccionar su estilo de liderazgo.",
          },
        },
        {
          "@type": "Question",
          name: "¿Puedo integrar Dinamis AI con los procesos de RRHH de mi empresa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, Dinamis AI cuenta con planes corporativos que permiten configurar casos de estudio específicos de tu industria, panel de control multi-usuario para el equipo de selección y acompañamiento consultivo de los especialistas de Grupo Dinamis.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <meta name="theme-color" content="#fffbf9" />
        <link
          rel="icon"
          type="image/png"
          href="https://grupodinamis.com/wp-content/uploads/2026/02/cropped-Reduccion-06-32x32.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#fffbf9] text-[#171412] selection:bg-[#ff8b1e] selection:text-white">
        <Analytics />
        {children}
      </body>
    </html>
  );
}

