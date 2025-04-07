
import React from 'react';
import { Button } from "@/components/ui/button";
import { Clock, Coffee, Globe, MapPin, PenTool, UserCog } from 'lucide-react';

const ProfileSection = () => {
  return (
    <div className="card-gradient rounded-xl p-6 flex flex-col space-y-6">
      <div className="flex items-center space-x-2">
        <div className="bg-green-400/20 text-green-400 text-xs px-3 py-1 rounded-full">
          Available To Work
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <img 
          src="/lovable-uploads/82fe6ff0-15cf-42fb-8725-33bb1d5b7810.png" 
          alt="Profile" 
          className="w-20 h-20 rounded-xl"
        />
        <div>
          <h2 className="text-[#b2a7fb] text-2xl font-semibold">Mihai</h2>
          <div className="text-sm flex items-center text-[#fafafa]">
            I'm a <span className="ml-1 text-[#b2a7fb]">Full Stack Developer</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center text-[#7b7a7f] text-sm">
          <Globe className="w-4 h-4 mr-2 text-[#b2a7fb] opacity-70" />
          English & Romanian
        </div>
        <div className="flex items-center text-[#7b7a7f] text-sm">
          <MapPin className="w-4 h-4 mr-2 text-[#b2a7fb] opacity-70" />
          Romania
        </div>
        <div className="flex items-center text-[#7b7a7f] text-sm">
          <Clock className="w-4 h-4 mr-2 text-[#b2a7fb] opacity-70" />
          UTC+3
        </div>
        <div className="flex items-center text-[#7b7a7f] text-sm">
          <Coffee className="w-4 h-4 mr-2 text-[#b2a7fb] opacity-70" />
          Coffee Addict
        </div>
        <div className="flex items-center text-[#7b7a7f] text-sm">
          <UserCog className="w-4 h-4 mr-2 text-[#b2a7fb] opacity-70" />
          Freelancer
        </div>
        <div className="flex items-center text-[#7b7a7f] text-sm">
          <PenTool className="w-4 h-4 mr-2 text-[#b2a7fb] opacity-70" />
          17y/o
        </div>
      </div>
      
      <div className="flex space-x-2 pt-2">
        <Button className="flex-1 bg-[#b2a7fb] text-white hover:bg-[#a295fa]">
          Hire Me
        </Button>
        <Button variant="outline" className="flex-1 border-gray-700">
          GitHub
        </Button>
      </div>
    </div>
  );
};

export default ProfileSection;
