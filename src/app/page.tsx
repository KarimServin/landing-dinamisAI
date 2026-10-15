import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { InterviewSimulator } from "@/components/interview-simulator";
import { LeadershipCoach } from "@/components/leadership-coach";
import { Methodology } from "@/components/methodology";
import { ComparisonTable } from "@/components/comparison-table";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { SegmentProvider } from "@/components/segment-context";
import { SiteIntroExperience } from "@/components/site-intro-experience";
import { SingleRobotCompanion } from "@/components/single-robot-companion";
import { Apple3DSection } from "@/components/apple-3d-section";

export default function Home() {
  return (
    <SegmentProvider>
      <div className="flex flex-col min-h-screen bg-[#fffbf9] text-[#171412] selection:bg-[#ff8b1e] selection:text-white">
        {/* Efecto Cinemático WOW de Primera Entrada */}
        <SiteIntroExperience />

        {/* Sticky Navigation Bar */}
        <Navbar />

        {/* Único Robot 3D en todo el sitio: Docks en Hero y salta entre secciones con ojos al contenido */}
        <SingleRobotCompanion />

        {/* Main Sections con Transiciones 3D estilo Apple / Framer */}
        <main className="flex-grow">
          {/* 1. Hero with interactive preview */}
          <Apple3DSection isHero>
            <Hero />
          </Apple3DSection>

          {/* 2. Quantitative social proof and industry badges */}
          <Apple3DSection>
            <TrustBar />
          </Apple3DSection>

          {/* 3. Core Pillar 01: Simulador de Entrevistas (Módulos + Scorecard) */}
          <Apple3DSection>
            <InterviewSimulator />
          </Apple3DSection>

          {/* 4. Core Pillar 02: AI Leadership Coach (Feedback, Negociación, Conflictos) */}
          <Apple3DSection>
            <LeadershipCoach />
          </Apple3DSection>

          {/* 5. The science and methodology of Grupo Dinamis */}
          <Apple3DSection>
            <Methodology />
          </Apple3DSection>

          {/* 6. Comparison Table: Dinamis AI vs IAs Generales (ChatGPT / Claude) */}
          <Apple3DSection>
            <ComparisonTable />
          </Apple3DSection>

          {/* 7. Transparent SaaS pricing */}
          <Apple3DSection>
            <Pricing />
          </Apple3DSection>

          {/* 8. FAQ matching Schema.org FAQPage */}
          <Apple3DSection>
            <Faq />
          </Apple3DSection>

          {/* 9. Final high-conversion CTA banner */}
          <Apple3DSection>
            <CtaBanner />
          </Apple3DSection>
        </main>

        {/* Corporate B2B Footer */}
        <Footer />
      </div>
    </SegmentProvider>
  );
}
