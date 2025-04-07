import React from 'react';
import { Briefcase, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  return (
    <div className="card-gradient rounded-lg p-4 border border-[#1e1e1f] space-y-3">
      <div className="flex items-center space-x-2 mb-2">
        <div className="text-[#b2a7fb]">
          <Briefcase className="w-7 h-7" />
        </div>
        <h2 className="text-xl font-bold">Projects</h2>
      </div>
      <p className="text-muted-foreground text-sm mb-3">
        Here are some of the projects I have worked on
      </p>
      
      <div className="grid grid-cols-3 gap-4 mb-3">
        <div className="relative rounded-xl overflow-hidden group">
          <img 
            src="https://via.placeholder.com/300x200/0f1118/666666?text=Project+1" 
            alt="Project 1" 
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
            <div className="p-3 text-white">
              <h3 className="font-bold">Project Name</h3>
            </div>
          </div>
        </div>
        
        <div className="relative rounded-xl overflow-hidden group">
          <img 
            src="https://via.placeholder.com/300x200/0f1118/666666?text=Project+2" 
            alt="Project 2" 
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
            <div className="p-3 text-white">
              <h3 className="font-bold">Project Name</h3>
            </div>
          </div>
        </div>
        
        <div className="relative rounded-xl overflow-hidden group">
          <img 
            src="https://via.placeholder.com/300x200/0f1118/666666?text=Project+3" 
            alt="Project 3" 
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
            <div className="p-3 text-white">
              <h3 className="font-bold">Project Name</h3>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <Button variant="outline" className="text-[#b2a7fb] border-gray-700 font-bold">
          <Eye className="w-4 h-4 mr-2 text-[#b2a7fb]" />
          View All Projects
        </Button>
      </div>
    </div>
  );
};

export default ProjectsSection;
