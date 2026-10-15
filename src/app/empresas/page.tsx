import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { LeadershipCoach } from "@/components/leadership-coach";
import { InterviewSimulator } from "@/components/interview-simulator";
import { Methodology } from "@/components/methodology";
import { ComparisonTable } from "@/components/comparison-table";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { SegmentProvider } from "@/components/segment-context";
import { Apple3DSection } from "@/components/apple-3d-section";

export const metadata: Metadata = {
  title: "Dinamis AI para Empresas | Coaching de Líderes y Selección de Talento con IA",
  description:
    "Automatiza los filtros de entrevistas por competencias STAR y capacita a tus mandos medios en conversaciones difíciles con la metodología experta de Grupo Dinamis.",
  keywords: [
    "software recursos humanos ia",
    "evaluacion de talento rrhh",
    "coaching mandos medios ia",
    "simulador entrevistas star empresas",
    "pruebas de seleccion laboral ia",
    "entrenamiento liderazgo corporativo",
    "metodologia star rrhh",
  ],
  alternates: {
    canonical: "https://ai.grupodinamis.com/empresas",
  },
  openGraph: {
    title: "Dinamis AI para Empresas | Coaching de Líderes y Selección de Talento con IA",
    description:
      "Plataforma B2B para capacitar líderes y evaluar candidatos con IA y más de 15 años de metodología en desarrollo organizacional de Grupo Dinamis.",
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
        "SaaS B2B para simulación de entrevistas por competencias STAR y entrenamiento continuo en liderazgo para mandos medios.",
      offers: {
        "@type": "Offer",
        price: "79",
        priceCurrency: "USD",
        description: "Plan Equipos & RRHH para selección y mandos medios.",
      },
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
          name: "¿Cómo reduce Dinamis AI los tiempos del equipo de selección?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Los postulantes completan su primera entrevista por competencias con el evaluador de IA bajo modelo STAR. La plataforma genera un reporte comparativo objetivo, ahorrando hasta un 70% del tiempo de cribado inicial de RRHH.",
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

          {/* Pilar 2 para Empresas: Filtros STAR y Evaluación de Talento */}
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

          {/* Planes B2B (Equipos & Enterprise) */}
          <Apple3DSection>
            <Pricing />
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
