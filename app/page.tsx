import { Navigation } from "@/components/gsf/navigation";
import { HeroSection } from "@/components/gsf/hero-section";
import { CredibilitySection } from "@/components/gsf/credibility-section";
import { SofomSection } from "@/components/gsf/sofom-section";
import { ModelsSection } from "@/components/gsf/models-section";
import { ProcessSection } from "@/components/gsf/process-section";
import { ClientProfileSection } from "@/components/gsf/client-profile-section";
import { FaqSection } from "@/components/gsf/faq-section";
import { ContactSection } from "@/components/gsf/contact-section";
import { FooterSection } from "@/components/gsf/footer-section";
import { AnimatedParticles } from "@/components/gsf/animated-particles";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AnimatedParticles />
      <Navigation />
      <HeroSection />
      <CredibilitySection />
      <SofomSection />
      <ModelsSection />
      <ProcessSection />
      <ClientProfileSection />
      <FaqSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
