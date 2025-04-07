import React from 'react';
import { Briefcase, Users, Award } from 'lucide-react';

const StatisticsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="card-gradient rounded-lg p-4 flex flex-col items-center justify-center border border-[#1e1e1f] space-y-3">
        <div className="text-3xl font-bold text-[#b2a7fb] flex items-center">
          19<span className="text-[#b2a7fb]">+</span>
        </div>
        <div className="flex items-center text-muted-foreground mt-2 bg-[#0d0c0d] p-2 rounded-lg w-full">
          <div className="flex items-center justify-center w-full">
            <Briefcase className="w-3.5 h-3.5 mr-2 text-[#b2a7fb]" />
            <span className="font-bold text-xs">Projects</span>
          </div>
        </div>
      </div>
      
      <div className="card-gradient rounded-lg p-4 flex flex-col items-center justify-center border border-[#1e1e1f] space-y-3">
        <div className="text-3xl font-bold text-[#b2a7fb] flex items-center">
          9<span className="text-[#b2a7fb]">+</span>
        </div>
        <div className="flex items-center text-muted-foreground mt-2 bg-[#0d0c0d] p-2 rounded-lg w-full">
          <div className="flex items-center justify-center w-full">
            <Users className="w-3.5 h-3.5 mr-2 text-[#b2a7fb]" />
            <span className="font-bold text-xs">Clients</span>
          </div>
        </div>
      </div>
      
      <div className="card-gradient rounded-lg p-4 flex flex-col items-center justify-center border border-[#1e1e1f] space-y-3">
        <div className="text-3xl font-bold text-[#b2a7fb] flex items-center">
          4<span className="text-[#b2a7fb]">+</span>
        </div>
        <div className="flex items-center text-muted-foreground mt-2 bg-[#0d0c0d] p-2 rounded-lg w-full">
          <div className="flex items-center justify-center w-full">
            <Award className="w-3.5 h-3.5 mr-2 text-[#b2a7fb]" />
            <span className="font-bold text-xs">Yrs Expertise</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
