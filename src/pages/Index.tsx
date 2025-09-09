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
import SpotifyNowPlaying from '@/components/SpotifyNowPlaying';

const Index = () => {
  return (
    <div className="min-h-screen py-4 px-2 sm:px-3 md:px-4 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* First column */}
        <div className="space-y-4 md:space-y-6">
          <ProfileSection />
          <ServicesSection />
          <ProjectsSection />
        </div>
        
        {/* Second column */}
        <div className="space-y-4 md:space-y-6">
          <TechStackSection />
          <StatisticsSection />
          <CallToActionSection />
          <SpotifyNowPlaying />
        </div>
        
        {/* Third column */}
        <div className="space-y-4 md:space-y-6">
          <WorkProcessSection />
          <TestimonialsSection />
        </div>
      </div>
      
      <FooterSection />
    </div>
  );
};

export default Index;
