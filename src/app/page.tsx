import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EthosSection from "@/components/EthosSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import TransformationCockpit from "@/components/TransformationCockpit";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Hero />
        <EthosSection />
        <CapabilitiesSection />
        <TransformationCockpit />
        <CaseStudiesSection />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
