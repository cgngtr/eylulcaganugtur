import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  // Project data defined here (in a real application, this could be fetched from an API)
  const projects = [
    {
      id: '1',
      title: 'Balancr',
      description: 'This project is a mobile application designed to easily share expenses among friends and family. It was developed using React Native and Expo. Users can create groups, add expenses, track debts/credits, and easily visualize payments.',
      image: 'https://i.ibb.co/gZ8Y9MCq/Group-6-1.png',
      technologies: ['React Native', 'TypeScript', 'Expo', 'Supabase', 'React Context API', 'React Hook Form + Zod']
    },
    {
      id: '2',
      title: 'Project 2',
      description: 'This project is an admin panel developed for e-commerce platforms.',
      image: 'https://via.placeholder.com/800x400/0f1118/666666?text=Project+2',
      technologies: ['Next.js', 'MongoDB', 'Express', 'Node.js']
    },
    {
      id: '3',
      title: 'Project 3',
      description: 'Mobile app development project. A fitness application developed for iOS and Android platforms using React Native.',
      image: 'https://via.placeholder.com/800x400/0f1118/666666?text=Project+3',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo']
    },
    {
      id: '4',
      title: 'Project 4',
      description: 'An AI-powered content management system.',
      image: 'https://via.placeholder.com/800x400/0f1118/666666?text=Project+4',
      technologies: ['Python', 'TensorFlow', 'Django', 'PostgreSQL']
    },
    {
      id: '5',
      title: 'Project 5',
      description: 'A blockchain-based digital asset management platform.',
      image: 'https://via.placeholder.com/800x400/0f1118/666666?text=Project+5',
      technologies: ['Solidity', 'Ethereum', 'Web3.js', 'React']
    },
    {
      id: '6',
      title: 'Project 6',
      description: 'A messaging application developed for real-time communication.',
      image: 'https://via.placeholder.com/800x400/0f1118/666666?text=Project+6',
      technologies: ['Socket.io', 'Express', 'MongoDB', 'React']
    }
  ];
  
  return (
    <div className="min-h-screen py-4 px-2 sm:px-3 md:px-4 mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link to="/" className="text-[#b2a7fb] hover:text-[#a295fa] flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
        </div>
        
        <div className="bg-[#0f0f10] rounded-lg p-6 border border-[#1e1e1f] space-y-6">
          <div className="flex items-center space-x-2 mb-4">
            <h1 className="text-3xl font-bold text-[#b2a7fb]">All Projects</h1>
          </div>
          
          <p className="text-muted-foreground mb-6">
            All of my projects are listed here. You can click on a project card to see its details.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link 
                to={`/project/${project.id}`} 
                key={project.id}
                className="bg-[#171717] rounded-lg overflow-hidden hover:ring-2 hover:ring-[#b2a7fb] transition-all duration-300"
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <div className="p-4 space-y-3">
                  <h2 className="text-xl font-bold text-[#b2a7fb]">{project.title}</h2>
                  <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <div key={index} className="bg-[#0f0f10] text-[#A3A3A3] text-xs font-bold px-2 py-1 rounded-md">
                        {tech}
                      </div>
                    ))}
                    {project.technologies.length > 3 && (
                      <div className="bg-[#0f0f10] text-[#A3A3A3] text-xs font-bold px-2 py-1 rounded-md">
                        +{project.technologies.length - 3}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;