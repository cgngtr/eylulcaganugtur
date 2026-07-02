import React from 'react';
import { Link } from 'react-router-dom';
import { TerminalCard } from '../index';
import { ExternalLink, Github, Folder, ChevronRight } from 'lucide-react';

interface Project {
  id: string;
  slug: string;
  name: string;
  description: string;
  period: string;
  tech: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    id: '1',
    slug: 'saatinde',
    name: 'Saatinde',
    description: 'Appointment platform with booking pages, upfront payments, reminders, and double-booking protection',
    period: 'May 2026',
    tech: [],
    live: 'https://saatin.de/',
  },
  {
    id: '2',
    slug: 'resolves',
    name: 'resolves',
    description: 'AI decision coaching with personal profiles, multi-model deliberation, crowd wisdom, and outcome follow-ups',
    period: 'Apr 2026',
    tech: [],
    live: 'https://resolves.app/',
  },
  {
    id: '3',
    slug: 'mimic',
    name: 'MIMIC',
    description: 'AI voice matching and tweet scheduling for generating content in a selected Twitter persona',
    period: 'Feb 2026',
    tech: [],
    live: 'https://usemimic.app/',
  },
  {
    id: '4',
    slug: 'confix',
    name: 'Confix',
    description: 'AI-powered landing page analyzer that gives actionable recommendations to improve conversion rates',
    period: 'Nov 2025 - Present',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind'],
    live: 'https://confix.dev',
  },
  {
    id: '5',
    slug: 'caruso-olive',
    name: 'Caruso Olive',
    description: 'E-commerce website built for a client with full payment integration',
    period: 'Oct 2025',
    tech: ['React', 'Tailwind', 'Supabase', 'Iyzico'],
  },
  {
    id: '6',
    slug: 'ostim-publications',
    name: 'OSTIM Institutional Publications',
    description: 'Research platform for OSTIM Technical University',
    period: 'Jun 2025 - Jul 2025',
    tech: ['React', 'MySQL'],
  },
  {
    id: '7',
    slug: 'balancr',
    name: 'Balancr',
    description: 'Helps groups split expenses, track balances, and settle payments—fairly and effortlessly',
    period: 'Jan 2025 - Feb 2025',
    tech: ['React', 'TypeScript', 'Tailwind', 'Supabase'],
    live: 'https://balancr.vercel.app',
  },
];

const ProjectsTerminal: React.FC = () => {
  return (
    <TerminalCard command="ls ./projects" directory="~/projects" id="projects">
      <div className="space-y-4">
        {/* Terminal-style header */}
        <div className="text-terminal-muted text-sm mb-4">
          total {projects.length}
        </div>

        {/* Project list */}
        <div className="space-y-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.slug}`}
              className="group block border border-terminal-border rounded-lg p-4 hover:border-terminal-prompt transition-colors"
            >
              {/* Project header */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <Folder className="w-5 h-5 text-terminal-directory" />
                  <h3 className="text-lg font-semibold text-terminal-command group-hover:text-terminal-prompt transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-terminal-muted text-sm">
                    {project.period}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.github, '_blank');
                      }}
                      className="p-2 hover:bg-terminal-bg-light rounded-md transition-colors cursor-pointer"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-4 h-4 text-terminal-output/70 hover:text-terminal-output" />
                    </span>
                  )}
                  {project.live && (
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(project.live, '_blank');
                      }}
                      className="p-2 hover:bg-terminal-bg-light rounded-md transition-colors cursor-pointer"
                      aria-label="View live site"
                    >
                      <ExternalLink className="w-4 h-4 text-terminal-output/70 hover:text-terminal-output" />
                    </span>
                  )}
                  <ChevronRight className="w-4 h-4 text-terminal-muted group-hover:text-terminal-prompt transition-colors" />
                </div>
              </div>

              {/* Description */}
              <p className="text-terminal-output/80 text-sm mb-3">
                {project.description}
              </p>

              {project.tech.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded bg-terminal-bg-light text-terminal-constant"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </TerminalCard>
  );
};

export default ProjectsTerminal;
