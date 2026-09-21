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

export default function Home() {
  return (
    <SegmentProvider>
      <div className="flex flex-col min-h-screen bg-[#fffbf9] text-[#171412] selection:bg-[#ff8b1e] selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* 1. Hero with interactive preview */}
        <Hero />

        {/* 2. Quantitative social proof and industry badges */}
        <TrustBar />

        {/* 3. Core Pillar 01: Simulador de Entrevistas */}
        <InterviewSimulator />

        {/* 4. Core Pillar 02: AI Leadership Coach */}
        <LeadershipCoach />

        {/* 5. Interactive ROI & impact calculator */}
        <RoiCalculator />

        {/* 6. The science and methodology of Grupo Dinamis */}
        <Methodology />

        {/* 7. Transparent B2B SaaS pricing */}
        <Pricing />

        {/* 8. FAQ matching Schema.org FAQPage */}
        <Faq />

        {/* 9. Final high-conversion CTA banner */}
        <CtaBanner />
      </main>

      {/* Corporate B2B Footer */}
      <Footer />
    </div>
    </SegmentProvider>
  );
}
