import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PricingGuide } from "@/components/home/PricingGuide";
import { ServiceAreaMap } from "@/components/home/ServiceAreaMap";
import { Reviews } from "@/components/home/Reviews";
import { BeforeAfter } from "@/components/home/BeforeAfter";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { faqSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
      />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <HowItWorks />
      <PricingGuide />
      <BeforeAfter />
      <Reviews />
      <ServiceAreaMap />
      <FAQ />
      <FinalCTA />
    </>
  );
}
