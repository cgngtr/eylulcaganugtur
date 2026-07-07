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
        <div className="flex items-center justify-between gap-3 text-sm text-terminal-muted">
          <span>total {projects.length}</span>
          <span className="site-chip">case studies</span>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="site-card site-card-hover group relative overflow-hidden p-4"
            >
              <Link
                to={`/project/${project.slug}`}
                className="block no-underline"
              >
                <div className="relative flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="mb-2 flex items-center gap-2">
                      <Folder className="h-5 w-5 shrink-0 text-terminal-directory" />
                      <h3 className="truncate text-lg font-black tracking-[-0.03em] text-terminal-command transition-colors group-hover:text-terminal-prompt">
                        {project.name}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-terminal-muted">{project.period}</span>
                  </div>
                  <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-terminal-muted transition group-hover:translate-x-1 group-hover:text-terminal-prompt" />
                </div>

                <p className="relative mt-3 text-sm leading-6 text-terminal-output/80">
                  {project.description}
                </p>
              </Link>

              <div className="relative mt-4 flex flex-wrap gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-button min-h-11 px-3 py-2 font-mono text-xs sm:min-h-0 sm:px-2 sm:py-1"
                    aria-label={`View GitHub repository for ${project.name}`}
                  >
                    <Github className="h-3.5 w-3.5" />
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="site-button min-h-11 px-3 py-2 font-mono text-xs sm:min-h-0 sm:px-2 sm:py-1"
                    aria-label={`View live site for ${project.name}`}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live
                  </a>
                )}
                {project.tech.map((tech) => (
                  <span key={tech} className="site-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </TerminalCard>
  );
};

export default ProjectsTerminal;
