import React from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const { t } = useTranslation();
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm relative">
      <div className="flex flex-col space-y-1.5 p-4">
        <h2 className="text-xl font-semibold leading-none tracking-tight flex flex-row items-center gap-1">
          <Briefcase className="size-6 text-primary" fill="currentColor" />
          {t('projects.title')}
        </h2>
        <p className="text-sm text-muted-foreground">{t('projects.description')}</p>
      </div>
      <div className="p-4 pt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-3">
          <Link to="/project/1" className="relative rounded-xl overflow-hidden group cursor-pointer">
            <img 
              src="https://i.ibb.co/tw4L0HXF/Group-6-3.png" 
              alt="Balancr" 
              className="w-full h-32 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
              <div className="p-3 text-white">
                <h3 className="font-bold">Balancr</h3>
              </div>
            </div>
          </Link>
          
          <Link to="/project/2" className="relative rounded-xl overflow-hidden group cursor-pointer">
            <img 
              src="https://via.placeholder.com/300x200/0f1118/666666?text=Project+2" 
              alt="Project 2" 
              className="w-full h-32 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
              <div className="p-3 text-white">
                <h3 className="font-bold">Project 2</h3>
              </div>
            </div>
          </Link>
          
          <Link to="/project/3" className="relative rounded-xl overflow-hidden group cursor-pointer">
            <img 
              src="https://via.placeholder.com/300x200/0f1118/666666?text=Project+3" 
              alt="Project 3" 
              className="w-full h-32 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
              <div className="p-3 text-white">
                <h3 className="font-bold">Project 3</h3>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="flex justify-center">
          <Button
            asChild
            className="bg-[#b2a7fb]/10 border-none hover:bg-[#b2a7fb]/20 rounded-xl py-2 px-4"
          >
            <Link to="/projects" className="flex items-center text-[#b2a7fb] font-bold">
              <Eye className="w-5 h-5 mr-2 text-[#b2a7fb]" />
              {t('projects.view_all')}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
