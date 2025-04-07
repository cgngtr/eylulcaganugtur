
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
        and make your ideas come to <span className="text-purple-light">on internet</span>
      </p>
      
      <div className="flex justify-center space-x-4">
        <Button variant="outline" className="border-gray-700 h-12 w-12 p-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"></path>
            <polyline points="15,9 18,9 18,11"></polyline>
            <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0"></path>
            <line x1="6" x2="7" y1="10" y2="10"></line>
          </svg>
        </Button>
        <Button variant="outline" className="border-gray-700 h-12 w-12 p-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="m3 3 3 9-3 9 19-9Z"></path>
            <path d="M6 12h16"></path>
          </svg>
        </Button>
        <Button variant="outline" className="border-gray-700 h-12 w-12 p-0">
          <Github className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default CallToActionSection;
