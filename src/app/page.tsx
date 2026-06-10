import AnimatedGradientBackground from "@/components/AnimatedGradientBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ScrollTransformation from "@/components/ScrollTransformation";
import HowItWorks from "@/components/HowItWorks";
import Deliverables from "@/components/Deliverables";
import BeforeAfter from "@/components/BeforeAfter";
import Services from "@/components/Services";
import Credibility from "@/components/Credibility";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-space-950 text-slate-100">
      {/* Fixed animated background — renders behind all content */}
      <AnimatedGradientBackground />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <ProblemSection />
        <ScrollTransformation />
        <HowItWorks />
        <Deliverables />
        <BeforeAfter />
        <Services />
        <Credibility />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
