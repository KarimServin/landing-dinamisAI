import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { InterviewSimulator } from "@/components/interview-simulator";
import { LeadershipCoach } from "@/components/leadership-coach";
import { RoiCalculator } from "@/components/roi-calculator";
import { Methodology } from "@/components/methodology";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { SegmentProvider } from "@/components/segment-context";

export const metadata: Metadata = {
  title: "Dinamis AI para Profesionales | Práctica de Entrevistas Laborales y Salto de Carrera",
  description:
    "Supera los nervios, aprende a responder bajo el método STAR y recibe feedback diagnóstico instantáneo antes de tu próxima entrevista laboral. Empieza gratis.",
  keywords: [
    "practicar entrevistas laborales",
    "simulador entrevistas de trabajo gratis",
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
      "Vence los nervios y da el salto al trabajo que mereces. Simulaciones ilimitadas con feedback bajo metodología STAR de Grupo Dinamis.",
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
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Práctica gratuita y simulación inicial sin costo.",
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
    <SegmentProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdB2C) }}
      />
      <div className="flex flex-col min-h-screen bg-[#fffbf9] text-[#171412] selection:bg-[#ff8b1e] selection:text-white">
        <Navbar />

        <main className="flex-grow">
          {/* Hero en modo Persona */}
          <Hero />

          {/* Social Proof */}
          <TrustBar />

          {/* Pilar 1 para Candidatos: Simulador de Entrevistas STAR */}
          <InterviewSimulator />

          {/* Pilar 2 para Candidatos: Coach de Comunicación y Liderazgo */}
          <LeadershipCoach />

          {/* Estimador de Salto Profesional */}
          <RoiCalculator />

          {/* Metodología de Selección Dinamis */}
          <Methodology />

          {/* Planes Individuales (Prueba Gratuita & Profesional) */}
          <Pricing />

          {/* Preguntas Frecuentes para Postulantes */}
          <Faq />

          {/* Banner de Conversión para Candidatos */}
          <CtaBanner />
        </main>

        <Footer />
      </div>
    </SegmentProvider>
  );
}
