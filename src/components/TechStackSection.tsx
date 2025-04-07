import React from 'react';
import { ExternalLink } from 'lucide-react';

interface TechItemProps {
  icon: string;
  name: string;
  version: string;
}

const TechItem = ({ icon, name, version }: TechItemProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl p-4 bg-[#0d0c0d]">
      <div className="flex items-center space-x-4">
        <div className="bg-secondary rounded-lg w-10 h-10 flex items-center justify-center text-2xl font-bold text-[#b2a7fb]">
          {icon}
        </div>
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-xs text-muted-foreground">Version {version}</div>
        </div>
      </div>
      <ExternalLink className="w-5 h-5 text-[#b2a7fb]" />
    </div>
  );
};

const TechStackSection = () => {
  return (
    <div className="card-gradient rounded-lg p-4 border border-[#1e1e1f] space-y-3">
      <div className="flex items-center space-x-2 mb-2">
        <div className="text-[#b2a7fb]">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
            <rect width="20" height="14" x="2" y="3" rx="2"></rect>
            <line x1="8" x2="16" y1="21" y2="21"></line>
            <line x1="12" x2="12" y1="17" y2="21"></line>
          </svg>
        </div>
        <h2 className="text-xl font-bold">My Tech Stack</h2>
      </div>
      <p className="text-muted-foreground text-sm mb-4">
        My favorite tech stack I use on my projects
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TechItem 
          icon="N" 
          name="Next.JS" 
          version="15+"
        />
        <TechItem 
          icon="T" 
          name="Tailwind CSS" 
          version=""
        />
        <TechItem 
          icon="S" 
          name="ShadCN/UI" 
          version=""
        />
        <TechItem 
          icon="N" 
          name="Node.JS" 
          version="20.17.0"
        />
      </div>
    </div>
  );
};

export default TechStackSection;
