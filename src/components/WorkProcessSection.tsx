import React from 'react';
import { Users, Code, Beaker, Rocket } from 'lucide-react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProcessStep = ({ number, title, description, icon }: ProcessStepProps) => {
  return (
    <div className="flex items-start space-x-4 mb-3 bg-[#0d0c0d] p-4 rounded-xl">
      <div className="mt-1 bg-[#b2a7fb]/20 text-[#b2a7fb] rounded-lg p-2">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">{title}</h3>
          <span className="text-[#b2a7fb] font-bold">#{number}</span>
        </div>
        <p className="text-sm text-muted-foreground font-bold">{description}</p>
      </div>
    </div>
  );
};

const WorkProcessSection = () => {
  return (
    <div className="card-gradient rounded-lg p-4 border border-[#1e1e1f] space-y-3">
      <div className="flex items-center space-x-2 mb-2">
        <div className="text-[#b2a7fb]">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
          </svg>
        </div>
        <h2 className="text-xl font-bold">Work Process</h2>
      </div>
      <p className="text-muted-foreground text-sm mb-3">
        The work process explained in 4 simple steps
      </p>
      
      <div>
        <ProcessStep 
          number="1"
          title="Project Brief"
          description="We will discuss your project and its goals."
          icon={<Users className="w-5 h-5" />}
        />
        
        <ProcessStep 
          number="2"
          title="Design & Develop"
          description="I will design and develop your website according to your needs."
          icon={<Code className="w-5 h-5" />}
        />
        
        <ProcessStep 
          number="3"
          title="Testing & Review"
          description="I will let you test the website and make any changes if needed."
          icon={<Beaker className="w-5 h-5" />}
        />
        
        <ProcessStep 
          number="4"
          title="Launch"
          description="I will give you the source code and help you with the launch."
          icon={<Rocket className="w-5 h-5" />}
        />
      </div>
    </div>
  );
};

export default WorkProcessSection;
