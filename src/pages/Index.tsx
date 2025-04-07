
import React from 'react';
import ProfileSection from '@/components/ProfileSection';
import TechStackSection from '@/components/TechStackSection';
import WorkProcessSection from '@/components/WorkProcessSection';
import StatisticsSection from '@/components/StatisticsSection';
import ServicesSection from '@/components/ServicesSection';
import ProjectsSection from '@/components/ProjectsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First column */}
        <div className="space-y-6">
          <ProfileSection />
          <ServicesSection />
          <ProjectsSection />
        </div>
        
        {/* Second column */}
        <div className="space-y-6">
          <TechStackSection />
          <StatisticsSection />
          <CallToActionSection />
        </div>
        
        {/* Third column */}
        <div className="space-y-6">
          <WorkProcessSection />
          <TestimonialsSection />
        </div>
      </div>
      
      <FooterSection />
    </div>
  );
};

export default Index;
