
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface TechItemProps {
  icon: string;
  name: string;
  version: string;
}

const TechItem = ({ icon, name, version }: TechItemProps) => {
  return (
    <div className="flex items-center justify-between border border-gray-800 rounded-xl p-4">
      <div className="flex items-center space-x-4">
        <div className="bg-secondary rounded-lg w-10 h-10 flex items-center justify-center text-2xl">
          {icon}
        </div>
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-xs text-muted-foreground">Version {version}</div>
        </div>
      </div>
      <ExternalLink className="w-5 h-5 text-gray-500" />
    </div>
  );
};

const TechStackSection = () => {
  return (
    <div className="card-gradient rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-2">
        <div className="bg-purple-400/20 text-purple-400 text-xl p-1 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <rect width="20" height="14" x="2" y="3" rx="2"></rect>
            <line x1="8" x2="16" y1="21" y2="21"></line>
            <line x1="12" x2="12" y1="17" y2="21"></line>
          </svg>
        </div>
        <h2 className="text-xl font-medium">My Tech Stack</h2>
      </div>
      <p className="text-muted-foreground text-sm mb-6">
        My favorite tech stack I use on my projects
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
