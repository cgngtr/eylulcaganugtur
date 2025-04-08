import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  
  // Project data defined here (in a real application, this could be fetched from an API)
  const projects = {
    '1': {
      title: 'Balancr',
      description: 'This project is a mobile application designed to easily share expenses among friends and family. It was developed using React Native and Expo. Users can create groups, add expenses, track debts/credits, and easily visualize payments.',
      image: 'https://i.ibb.co/gZ8Y9MCq/Group-6-1.png',
      technologies: ['React Native', 'TypeScript', 'Expo', 'Supabase', 'React Context API', 'React Hook Form + Zod', 'AsyncStorage', 'React Native Reanimated'],
      githubUrl: 'https://github.com/cgngtr/balancr-app',
      liveUrl: 'https://github.com/cgngtr/balancr-app',
      features: [
        'Create and manage groups',
        'Add and track expenses',
        'Smart expense sharing (equal, percentage, or fixed amount)',
        'Debt/credit tracking',
        'Easy payment visualization',
        'Offline usage support',
        'Push notifications',
        'Cross-platform UI'
      ]
    },
    '2': {
      title: 'Project 2',
      description: 'This project is an admin panel developed for e-commerce platforms. It stands out with its user-friendly interface and advanced analytics features.',
      image: 'https://via.placeholder.com/800x400/0f1118/666666?text=Project+2',
      technologies: ['Next.js', 'MongoDB', 'Express', 'Node.js'],
      githubUrl: '#',
      liveUrl: '#',
      features: [
        'Real-time analytics',
        'User management',
        'Product catalog',
        'Order tracking'
      ]
    },
    '3': {
      title: 'Project 3',
      description: 'Mobile app development project. A fitness application developed for iOS and Android platforms using React Native.',
      image: 'https://via.placeholder.com/800x400/0f1118/666666?text=Project+3',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      githubUrl: '#',
      liveUrl: '#',
      features: [
        'Offline usage',
        'Personalized training programs',
        'Progress tracking',
        'Social sharing features'
      ]
    }
  };
  
  const project = projects[id as keyof typeof projects];
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0f0f10]">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#b2a7fb] mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">The project you are looking for does not exist.</p>
          <Link to="/">
            <Button className="bg-[#b2a7fb] text-white hover:bg-[#a295fa]">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen py-4 px-2 sm:px-3 md:px-4 mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link to="/" className="text-[#b2a7fb] hover:text-[#a295fa] flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
        </div>
        
        <div className="bg-[#0f0f10] rounded-lg p-6 border border-[#1e1e1f] space-y-6">
          <h1 className="text-3xl font-bold text-[#b2a7fb]">{project.title}</h1>
          
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Project Description</h2>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <div key={index} className="bg-[#171717] text-[#A3A3A3] text-xs font-bold px-3 py-1.5 rounded-md">
                  {tech}
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Features</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="flex space-x-4 pt-4">
            <Button className="bg-[#1A1A1A] text-white hover:bg-[#2a2a2a] rounded-md py-2 flex items-center justify-center gap-2 border-none font-bold" onClick={() => window.open(project.githubUrl, '_blank')}>
              <Github className="w-4 h-4" /> GitHub Repository
            </Button>
            <Button className="bg-[#b2a7fb] text-white hover:bg-[#a295fa] rounded-md py-2 flex items-center justify-center gap-2 border-none font-bold" onClick={() => window.open(project.liveUrl, '_blank')}>
              <ExternalLink className="w-4 h-4" /> Live Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;