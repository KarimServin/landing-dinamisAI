import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { LeadershipCoach } from "@/components/leadership-coach";
import { InterviewSimulator } from "@/components/interview-simulator";
import { Methodology } from "@/components/methodology";
import { ComparisonTable } from "@/components/comparison-table";
import { Faq } from "@/components/faq";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { SegmentProvider } from "@/components/segment-context";
import { Apple3DSection } from "@/components/apple-3d-section";

export const metadata: Metadata = {
  title: "Dinamis AI para Empresas | Coaching de Líderes y Desarrollo de Equipos con IA",
  description:
    "Capacita a tus líderes, supervisores y mandos medios en conversaciones difíciles, feedback y resolución de conflictos con la metodología experta de Grupo Dinamis.",
  keywords: [
    "coaching mandos medios ia",
    "desarrollo de lideres corporativo",
    "entrenamiento liderazgo con ia",
    "feedback y resolucion de conflictos",
    "software recursos humanos ia",
    "entrenamiento liderazgo ejecutivo",
    "capacitacion supervisores ia",
  ],
  alternates: {
    canonical: "https://ai.grupodinamis.com/empresas",
  },
  openGraph: {
    title: "Dinamis AI para Empresas | Coaching de Líderes y Desarrollo de Equipos con IA",
    description:
      "Plataforma B2B para capacitar líderes y mandos medios con IA y más de 15 años de metodología en desarrollo organizacional de Grupo Dinamis.",
    url: "https://ai.grupodinamis.com/empresas",
  },
};

const jsonLdB2B = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Dinamis AI para Empresas",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web App",
      url: "https://ai.grupodinamis.com/empresas",
      description:
        "SaaS B2B para entrenamiento continuo en liderazgo, feedback y desarrollo de mandos medios.",
      author: {
        "@type": "Organization",
        name: "Grupo Dinamis",
        url: "https://grupodinamis.com",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Cómo ayuda Dinamis AI en el entrenamiento de líderes y mandos medios?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Brinda un entorno simulado confidencial 24/7 donde líderes y mandos medios practican conversaciones complejas (feedback correctivo, 1-on-1s, delegación, resolución de conflictos) con retroalimentación objetiva basada en la metodología de Grupo Dinamis.",
          },
        },
        {
          "@type": "Question",
          name: "¿En qué consiste el coaching de liderazgo para mandos medios?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Brinda un entorno privado y seguro 24/7 donde líderes y jefes de equipo ensayan conversaciones difíciles (feedback correctivo, delegación, resolución de conflictos) recibiendo retroalimentación basada en la metodología de Grupo Dinamis.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo se garantiza la confidencialidad de los datos empresariales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Toda la información, transcripciones y evaluaciones son estrictamente confidenciales, no se comparten con terceros ni se utilizan para entrenar modelos públicos de inteligencia artificial.",
          },
        },
      ],
    },
  ],
};

export default function EmpresasPage() {
  return (
    <SegmentProvider initialSegment="empresa">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdB2B) }}
      />
      <div className="flex flex-col min-h-screen bg-[#fffbf9] text-[#171412] selection:bg-[#ff8b1e] selection:text-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero en modo Empresa */}
          <Apple3DSection isHero>
            <Hero />
          </Apple3DSection>

          {/* Social Proof Corporativo */}
          <Apple3DSection>
            <TrustBar />
          </Apple3DSection>

          {/* Pilar 1 para Empresas: AI Leadership Coach */}
          <Apple3DSection>
            <LeadershipCoach />
          </Apple3DSection>

          {/* Pilar 2 para Empresas: Simulador de Conversaciones de Gestión */}
          <Apple3DSection>
            <InterviewSimulator />
          </Apple3DSection>

          {/* Metodología Científica Grupo Dinamis */}
          <Apple3DSection>
            <Methodology />
          </Apple3DSection>

          {/* Tabla Comparativa: Dinamis AI vs IAs Generales */}
          <Apple3DSection>
            <ComparisonTable />
          </Apple3DSection>

          {/* Preguntas Frecuentes Corporativas */}
          <Apple3DSection>
            <Faq />
          </Apple3DSection>

          {/* Banner de Conversión B2B */}
          <Apple3DSection>
            <CtaBanner />
          </Apple3DSection>
        </main>

        <Footer />
      </div>
    </SegmentProvider>
  );
}
