import React from 'react';
import { Button } from "@/components/ui/button";
import { Clock, Coffee, Mic, MapPin, Calendar, Mail, Github } from 'lucide-react';

const ProfileSection = () => {
  return (
    <div className="bg-[#0f0f10] rounded-lg p-5 flex flex-col space-y-4">
      <div className="flex items-center">
        <div className="bg-green-600 text-white text-xs px-2.5 py-0.5 rounded-full font-medium">
          Available To Work
        </div>
      </div>
      
      <div className="flex items-start space-x-4">
        <img 
          src="/lovable-uploads/82fe6ff0-15cf-42fb-8725-33bb1d5b7810.png" 
          alt="Profile" 
          className="w-16 h-16 rounded-lg"
        />
        <div className="pt-1">
          <h2 className="text-white text-2xl font-bold">Çağan</h2>
          <div className="text-sm flex items-center text-[#A3A3A3]">
            I'm a <span className="ml-1 text-[#b2a7fb] font-medium">Full Stack Developer</span>
          </div>
        </div>
      </div>
      
      <div className="bg-[#0d0c0d] rounded-lg p-4">
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center bg-[#171717] p-2 px-3 rounded-md w-fit">
            <Mic className="w-5 h-5 mr-2 text-[#b2a7fb]" />
            <span className="text-[#A3A3A3] text-sm">English & Turkish</span>
          </div>
          <div className="flex items-center bg-[#171717] p-2 px-3 rounded-md w-fit">
            <MapPin className="w-5 h-5 mr-2 text-[#b2a7fb]" />
            <span className="text-[#A3A3A3] text-sm">Türkiye</span>
          </div>
          <div className="flex items-center bg-[#171717] p-2 px-3 rounded-md w-fit">
            <Clock className="w-5 h-5 mr-2 text-[#b2a7fb]" />
            <span className="text-[#A3A3A3] text-sm">UTC+3</span>
          </div>
          <div className="flex items-center bg-[#171717] p-2 px-3 rounded-md w-fit">
            <Coffee className="w-5 h-5 mr-2 text-[#b2a7fb]" />
            <span className="text-[#A3A3A3] text-sm">Coffee Addict</span>
          </div>
          <div className="flex items-center bg-[#171717] p-2 px-3 rounded-md w-fit">
            <div className="w-5 h-5 mr-2 text-[#b2a7fb]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              </svg>
            </div>
            <span className="text-[#A3A3A3] text-sm">Freelancer</span>
          </div>
          <div className="flex items-center bg-[#171717] p-2 px-3 rounded-md w-fit">
            <Calendar className="w-5 h-5 mr-2 text-[#b2a7fb]" />
            <span className="text-[#A3A3A3] text-sm">21y/o</span>
          </div>
        </div>
      </div>
      
      <div className="flex space-x-2 pt-2">
        <Button className="flex-1 bg-[#b2a7fb] text-white hover:bg-[#a295fa] rounded-md text-sm py-1.5 h-auto flex items-center justify-center gap-1.5 border-none">
          <Mail className="w-4 h-4" /> Hire Me
        </Button>
        <Button className="flex-1 bg-[#1A1A1A] text-white hover:bg-[#2a2a2a] rounded-md text-sm py-1.5 h-auto flex items-center justify-center gap-1.5 border-none">
          <Github className="w-4 h-4" /> GitHub
        </Button>
      </div>
    </div>
  );
};

export default ProfileSection;
