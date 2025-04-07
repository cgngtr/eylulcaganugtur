
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
    <div className="flex items-start space-x-4 mb-6">
      <div className="mt-1 bg-purple-400/20 text-purple-400 rounded-lg p-2">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{title}</h3>
          <span className="text-purple-light">#{number}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const WorkProcessSection = () => {
  return (
    <div className="card-gradient rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-2">
        <div className="bg-purple-400/20 text-purple-400 text-xl p-1 rounded">🧩</div>
        <h2 className="text-xl font-medium">Work Process</h2>
      </div>
      <p className="text-muted-foreground text-sm mb-6">
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
