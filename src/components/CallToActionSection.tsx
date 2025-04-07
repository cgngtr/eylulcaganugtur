
import React from 'react';
import { Users, MessageSquare, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToActionSection = () => {
  return (
    <div className="card-gradient rounded-xl p-8 text-center">
      <div className="bg-purple-400/20 text-purple-400 text-xl p-3 rounded-full mx-auto w-14 h-14 flex items-center justify-center mb-4">
        <Users className="w-7 h-7" />
      </div>
      
      <h2 className="text-2xl font-medium mb-2">Let's Work Together</h2>
      <p className="text-muted-foreground mb-6">
        and make your ideas come to <span className="text-purple-light">the raccoon|</span>
      </p>
      
      <div className="flex justify-center space-x-4">
        <Button variant="outline" className="border-gray-700">
          <MessageSquare className="w-5 h-5" />
        </Button>
        <Button variant="outline" className="border-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
        </Button>
        <Button variant="outline" className="border-gray-700">
          <Github className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default CallToActionSection;
