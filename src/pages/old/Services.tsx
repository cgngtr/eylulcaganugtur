import ServicesHero from '@/components/services/HeroSection';
import ServicesPricing from '@/components/services/PricingSection';
import ServicesProcess from '@/components/services/ProcessSection';
import TechStackSection from '@/components/services/TechStackSection';
import PaymentSection from '@/components/services/PaymentSection';
import TimelineSection from '@/components/services/TimelineSection';
import InclusionsSection from '@/components/services/InclusionsSection';
import PostLaunchSection from '@/components/services/PostLaunchSection';
import FaqSection from '@/components/services/FaqSection';
import FinalCtaSection from '@/components/services/FinalCtaSection';
import FloatingCta from '@/components/services/FloatingCta';
import ServicesNavigation from '@/components/services/ServicesNavigation';
import useActiveSection, { SECTION_IDS, type SectionId } from '@/components/services/useActiveSection';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleGetStarted = useCallback(() => navigate('/client-form'), [navigate]);

  const scrollToSection = useCallback((id: SectionId) => {
    const node = document.getElementById(id);
    if (node) {
      node.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const activeSection = useActiveSection([...SECTION_IDS]);

  const handleGotoPricing = useCallback(() => scrollToSection('pricing-section'), [scrollToSection]);

  return (
    <div className="min-h-screen bg-[hsl(280_6%_5%)] text-foreground">
      <FloatingCta
        activeSection={activeSection}
        onGotoPricing={handleGotoPricing}
        onConsult={handleGetStarted}
        pricingLabel={t('services.jump_to_pricing', { defaultValue: 'View pricing' })}
        consultLabel={t('services.book_consultation', { defaultValue: 'Book a consultation' })}
      />
      <ServicesHero onGetStarted={handleGetStarted} onExplore={handleGotoPricing} />
      <ServicesNavigation activeSection={activeSection} onNavigate={scrollToSection} />
      <ServicesPricing onGetStarted={handleGetStarted} />
      <ServicesProcess />
      <TechStackSection />
      <PaymentSection />
      <TimelineSection />
      <InclusionsSection />
      <PostLaunchSection />
      <FaqSection />
      <FinalCtaSection onPrimary={handleGetStarted} onSecondary={() => navigate('/')} />
    </div>
  );
};

export default Services;
