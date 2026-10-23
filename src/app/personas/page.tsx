import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { InterviewSimulator } from "@/components/interview-simulator";
import { LeadershipCoach } from "@/components/leadership-coach";
import { Methodology } from "@/components/methodology";
import { ComparisonTable } from "@/components/comparison-table";
import { Faq } from "@/components/faq";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { SegmentProvider } from "@/components/segment-context";
import { Apple3DSection } from "@/components/apple-3d-section";

export const metadata: Metadata = {
  title: "Dinamis AI para Profesionales | Práctica de Entrevistas Laborales y Salto de Carrera",
  description:
    "Supera los nervios, aprende a responder bajo el método STAR y recibe feedback diagnóstico instantáneo antes de tu próxima entrevista laboral.",
  keywords: [
    "practicar entrevistas laborales",
    "simulador de entrevistas de trabajo",
    "metodo star preguntas",
    "preparar entrevista de trabajo",
    "conseguir mejor empleo",
    "triunfo laboral",
    "entrenar entrevistas con ia",
    "feedback entrevista laboral",
  ],
  alternates: {
    canonical: "https://ai.grupodinamis.com/personas",
  },
  openGraph: {
    title: "Dinamis AI para Profesionales | Práctica de Entrevistas Laborales con IA",
    description:
      "Vence los nervios y da el salto al trabajo que mereces. Simulaciones con feedback bajo metodología STAR de Grupo Dinamis.",
    url: "https://ai.grupodinamis.com/personas",
  },
};

const jsonLdB2C = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Dinamis AI para Candidatos & Profesionales",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web App",
      url: "https://ai.grupodinamis.com/personas",
      description:
        "Plataforma de inteligencia artificial para simular entrevistas de trabajo, aprender el método STAR y ganar seguridad profesional.",
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
          name: "¿Cómo me ayuda el simulador a superar una entrevista laboral difícil?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Te permite entrenar tantas veces como desees frente a una IA que formula preguntas situacionales reales. Analiza tus respuestas, detecta muletillas y te enseña a estructurar tus logros para impactar positivamente al entrevistador.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué es el método STAR y por qué lo exigen los reclutadores?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El método STAR (Situación, Tarea, Acción y Resultado) es la técnica de evaluación por competencias más respetada del mundo. Permite demostrar con hechos pasados verificables tu capacidad para resolver problemas y agregar valor.",
          },
        },
        {
          "@type": "Question",
          name: "¿Mis respuestas y sesiones son 100% privadas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sí, tus simulaciones son completamente anónimas y confidenciales. Nadie más tiene acceso a tus grabaciones ni transcripciones.",
          },
        },
      ],
    },
  ],
};

export default function PersonasPage() {
  return (
    <SegmentProvider initialSegment="persona">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdB2C) }}
      />
      <div className="flex flex-col min-h-screen bg-[#fffbf9] text-[#171412] selection:bg-[#ff8b1e] selection:text-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero en modo Persona */}
          <Apple3DSection isHero>
            <Hero />
          </Apple3DSection>

          {/* Social Proof */}
          <Apple3DSection>
            <TrustBar />
          </Apple3DSection>

          {/* Pilar 1 para Candidatos: Simulador de Entrevistas STAR */}
          <Apple3DSection>
            <InterviewSimulator />
          </Apple3DSection>

          {/* Pilar 2 para Candidatos: Coach de Comunicación y Liderazgo */}
          <Apple3DSection>
            <LeadershipCoach />
          </Apple3DSection>

          {/* Metodología de Selección Dinamis */}
          <Apple3DSection>
            <Methodology />
          </Apple3DSection>

          {/* Tabla Comparativa: Dinamis AI vs IAs Generales */}
          <Apple3DSection>
            <ComparisonTable />
          </Apple3DSection>

          {/* Preguntas Frecuentes para Postulantes */}
          <Apple3DSection>
            <Faq />
          </Apple3DSection>

          {/* Banner de Conversión para Candidatos */}
          <Apple3DSection>
            <CtaBanner />
          </Apple3DSection>
        </main>

        <Footer />
      </div>
    </SegmentProvider>
  );
}
