
import React from 'react';
import { Briefcase, Users, Award } from 'lucide-react';

const StatisticsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="card-gradient rounded-xl p-6 flex flex-col items-center justify-center">
        <div className="text-4xl font-bold text-purple-light flex items-center">
          19<span className="text-purple-light">+</span>
        </div>
        <div className="flex items-center text-muted-foreground mt-2">
          <Briefcase className="w-4 h-4 mr-2 text-purple-light" />
          Projects
        </div>
      </div>
      
      <div className="card-gradient rounded-xl p-6 flex flex-col items-center justify-center">
        <div className="text-4xl font-bold text-purple-light flex items-center">
          9<span className="text-purple-light">+</span>
        </div>
        <div className="flex items-center text-muted-foreground mt-2">
          <Users className="w-4 h-4 mr-2 text-purple-light" />
          Clients
        </div>
      </div>
      
      <div className="card-gradient rounded-xl p-6 flex flex-col items-center justify-center">
        <div className="text-4xl font-bold text-purple-light flex items-center">
          4<span className="text-purple-light">+</span>
        </div>
        <div className="flex items-center text-muted-foreground mt-2">
          <Award className="w-4 h-4 mr-2 text-purple-light" />
          <span>Yrs<br />Expertise</span>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
