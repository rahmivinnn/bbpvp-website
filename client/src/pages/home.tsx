import { useEffect } from 'react';
import { Navigation } from '../components/navigation';
import { HeroSection } from '../components/hero-section';
import { StatsSection } from '../components/stats-section';
import { AboutSection } from '../components/about-section';
import { ProgramsSection } from '../components/programs-section';
import { ArticlesSection } from '../components/articles-section';
import { GallerySection } from '../components/gallery-section';
import { ContactSection } from '../components/contact-section';
import { FacilitiesSection } from '../components/facilities-section';
import { ServiceFlowSection } from '../components/service-flow-section';
import { TrainingCatalogSection } from '../components/training-catalog-section';
import { ChatBot } from '../components/chatbot';
import { Footer } from '../components/footer';
import { ScrollProgress } from '../components/ui/scroll-progress';
import { BackToTop } from '../components/ui/back-to-top';
import { useGSAPAnimations } from '../hooks/use-gsap-animations';

export default function Home() {
  useGSAPAnimations();

  useEffect(() => {
    // Load Font Awesome for icons
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(fontAwesome);

    // Navbar will stay consistently white - no scroll effects
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ProgramsSection />
        <FacilitiesSection />
        <ServiceFlowSection />
        <TrainingCatalogSection />
        <ArticlesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      <ChatBot />
    </div>
  );
}
