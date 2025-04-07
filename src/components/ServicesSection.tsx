import React from 'react';
import { Wrench } from 'lucide-react';

const ServiceButton = ({ text }: { text: string }) => {
  return (
    <button className="bg-secondary rounded-lg px-4 py-2 text-sm text-white hover:bg-[#b2a7fb]/20 hover:text-[#b2a7fb] transition-colors font-bold">
      {text}
    </button>
  );
};

const ServicesSection = () => {
  return (
    <div className="card-gradient rounded-lg p-4 border border-[#1e1e1f] space-y-3">
      <div className="flex items-center space-x-2 mb-2">
        <div className="text-[#b2a7fb]">
          <Wrench className="w-7 h-7" />
        </div>
        <h2 className="text-xl font-bold text-[#fafafa]">Services</h2>
      </div>
      <p className="text-[#7b7a7f] text-sm mb-3">
        My services are tailored to your needs and budget
      </p>
      
      <div className="flex flex-wrap gap-2">
        <ServiceButton text="SEO Optimization" />
        <ServiceButton text="Hosting Guide" />
        <ServiceButton text="Web Security" />
        <ServiceButton text="Website Rework" />
        <ServiceButton text="Web Development" />
        <ServiceButton text="Web Design" />
      </div>
    </div>
  );
};

export default ServicesSection;
