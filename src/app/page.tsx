import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { TrustMetrics } from "@/components/landing/TrustMetrics";
import { ValueProposition } from "@/components/landing/ValueProposition";
import { InstitutionalFlow } from "@/components/landing/InstitutionalFlow";
import { ProductGrid } from "@/components/landing/ProductGrid";
import { YieldTrackRecord } from "@/components/landing/YieldTrackRecord";
import { ComplianceLegal } from "@/components/landing/ComplianceLegal";
import { Integrations } from "@/components/landing/Integrations";
import { AudienceSegmentation } from "@/components/landing/AudienceSegmentation";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      
      <Hero />
      <TrustMetrics />
      <ValueProposition />
      <InstitutionalFlow />
      <ProductGrid />
      <YieldTrackRecord />
      <ComplianceLegal />
      <Integrations />
      <AudienceSegmentation />
      
      <Footer />
    </main>
  );
}
