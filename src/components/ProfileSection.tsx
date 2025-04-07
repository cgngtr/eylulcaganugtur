import React from 'react';
import { Button } from "@/components/ui/button";
import { Clock, Coffee, Mic, MapPin, Calendar, Mail, Github } from 'lucide-react';

const ProfileSection = () => {
  return (
    <div className="bg-[#0f0f10] rounded-lg p-4 flex flex-col space-y-3 max-w-[560px] border border-[#1e1e1f]">
      <div className="flex space-x-3">
        <img 
          src="/lovable-uploads/pp.png" 
          alt="Profile" 
          className="w-20 h-20 rounded-lg"
        />
        
        <div className="flex flex-col">
          <div className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-full font-medium mb-1 w-fit">
            Available To Work
          </div>
          <h2 className="text-[#b2a7fb] text-2xl font-bold">Çağan</h2>
          <div className="text-sm flex items-center text-[#fafafa] font-bold">
            I'm a <span className="ml-1 text-[#b2a7fb] font-bold">Full Stack Developer</span>
          </div>
        </div>
      </div>
      
      <div className="bg-[#0d0c0d] rounded-lg p-3">
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center bg-[#171717] p-1.5 px-2 rounded-md w-fit">
            <Mic className="w-4 h-4 mr-1.5 text-[#b2a7fb]" />
            <span className="text-[#A3A3A3] text-xs font-bold">English & Turkish</span>
          </div>
          <div className="flex items-center bg-[#171717] p-1.5 px-2 rounded-md w-fit">
            <MapPin className="w-4 h-4 mr-1.5 text-[#b2a7fb]" />
            <span className="text-[#A3A3A3] text-xs font-bold">Türkiye</span>
          </div>
          <div className="flex items-center bg-[#171717] p-1.5 px-2 rounded-md w-fit">
            <Clock className="w-4 h-4 mr-1.5 text-[#b2a7fb]" />
            <span className="text-[#A3A3A3] text-xs font-bold">UTC+3</span>
          </div>
          <div className="flex items-center bg-[#171717] p-1.5 px-2 rounded-md w-fit">
            <Coffee className="w-4 h-4 mr-1.5 text-[#b2a7fb]" />
            <span className="text-[#A3A3A3] text-xs font-bold">Coffee Addict</span>
          </div>
          <div className="flex items-center bg-[#171717] p-1.5 px-2 rounded-md w-fit">
            <div className="w-4 h-4 mr-1.5 text-[#b2a7fb]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
            </div>
            <span className="text-[#A3A3A3] text-xs font-bold">Freelancer</span>
          </div>
          <div className="flex items-center bg-[#171717] p-1.5 px-2 rounded-md w-fit">
            <Calendar className="w-4 h-4 mr-1.5 text-[#b2a7fb]" />
            <span className="text-[#A3A3A3] text-xs font-bold">21y/o</span>
          </div>
        </div>
      </div>
      
      <div className="flex space-x-2 pt-1">
        <Button className="flex-1 bg-[#b2a7fb] text-white hover:bg-[#a295fa] rounded-md text-xs py-1.5 h-8 flex items-center justify-center gap-1 border-none font-bold">
          <Mail className="w-3.5 h-3.5" /> Hire Me
        </Button>
        <Button className="flex-1 bg-[#1A1A1A] text-white hover:bg-[#2a2a2a] rounded-md text-xs py-1.5 h-8 flex items-center justify-center gap-1 border-none font-bold">
          <Github className="w-3.5 h-3.5" /> GitHub
        </Button>
      </div>
    </div>
  );
};

export default ProfileSection;
