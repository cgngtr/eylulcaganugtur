import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TerminalCard, TerminalNav } from '@/components/terminal';
import { ArrowLeft, ExternalLink, Github, Calendar, Folder } from 'lucide-react';
import { useThemeInit } from '@/lib/useTheme';

interface ProjectData {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  period: string;
  tech: string[];
  images: string[];
  live?: string;
  github?: string;
}

const projects: Record<string, ProjectData> = {
  confix: {
    slug: 'confix',
    name: 'Confix',
    description: 'AI-powered landing page analyzer',
    longDescription: `Confix analyzes landing pages and gives actionable recommendations so that website owners can actually fix their conversion rates.

Landing pages are critical for conversion, but most small businesses and freelancers don't have access to professional UX/UI designers or CRO experts. They create landing pages blindly, hoping they work.

Confix solves this by providing AI-powered analysis that reviews visual design, UX patterns, copywriting, and conversion optimization—like having a senior UX/CRO consultant review your landing page in 30 seconds.`,
    period: 'Nov 2025 - Present',
    tech: ['Next.js', 'React', 'TypeScript', 'Prisma', 'Claude AI', 'Tailwind', 'Supabase', 'Polar', 'Resend', 'PostHog'],
    images: ['/images/projects/confix.png'],
    live: 'https://confix.dev',
  },
  'caruso-olive': {
    slug: 'caruso-olive',
    name: 'Caruso Olive',
    description: 'E-commerce website for a client',
    longDescription: `A fully functional e-commerce website built for Caruso Olive, featuring product catalog, shopping cart, and integrated payment processing with Iyzico.

Built with a modern React frontend and Supabase backend for real-time data and authentication.`,
    period: 'Oct 2025',
    tech: ['React', 'Tailwind', 'Supabase', 'Iyzico'],
    images: ['/images/projects/caruso.png'],
  },
  'ostim-publications': {
    slug: 'ostim-publications',
    name: 'OSTIM Institutional Publications',
    description: 'Research platform for university',
    longDescription: `A research platform built for OSTIM Technical University to manage and display institutional publications.

Features include publication search, filtering by department/author, and a clean interface for browsing academic papers and research outputs.`,
    period: 'Jun 2025 - Jul 2025',
    tech: ['React', 'MySQL'],
    images: ['/images/projects/ostim.png'],
  },
  balancr: {
    slug: 'balancr',
    name: 'Balancr',
    description: 'Group expense splitting app',
    longDescription: `Balancr helps groups split expenses, track balances, and settle payments—fairly and effortlessly.

Perfect for roommates, trips, or any shared expenses. Features include expense tracking, balance calculation, and payment settlement suggestions.`,
    period: 'Jan 2025 - Feb 2025',
    tech: ['React', 'TypeScript', 'Tailwind', 'Supabase'],
    images: ['/images/projects/balancr.png'],
    live: 'https://balancr.vercel.app',
  },
};

const ProjectDetail: React.FC = () => {
  useThemeInit();
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projects[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-terminal-bg-dark text-terminal-output">
        <TerminalNav />
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <TerminalCard command={`cat ./projects/${slug || 'unknown'}.md`} directory="~/projects">
            <div className="text-terminal-error">
              <p>Error: Project not found</p>
              <Link to="/#projects" className="text-terminal-directory hover:underline mt-4 inline-block">
                ← Back to projects
              </Link>
            </div>
          </TerminalCard>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-terminal-bg-dark text-terminal-output">
      <TerminalNav />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back link */}
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-terminal-muted hover:text-terminal-directory transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          cd ../projects
        </Link>

        {/* Project header */}
        <TerminalCard command={`cat ./projects/${project.slug}.md`} directory="~/projects">
          <div className="space-y-6">
            {/* Title and links */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Folder className="w-6 h-6 text-terminal-directory" />
                  <h1 className="text-2xl font-bold text-terminal-command">{project.name}</h1>
                </div>
                <div className="flex items-center gap-2 text-terminal-muted text-sm">
                  <Calendar className="w-4 h-4" />
                  {project.period}
                </div>
              </div>
              <div className="flex items-center gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-terminal-bg-light rounded-md transition-colors"
                  >
                    <Github className="w-5 h-5 text-terminal-output/70 hover:text-terminal-output" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-terminal-prompt/10 hover:bg-terminal-prompt/20 text-terminal-prompt rounded-md transition-colors text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Site
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-terminal-keyword text-sm uppercase tracking-wider">About</h2>
              <div className="text-terminal-output/80 whitespace-pre-line leading-relaxed">
                {project.longDescription}
              </div>
            </div>

            {/* Tech stack */}
            <div className="space-y-3">
              <h2 className="text-terminal-keyword text-sm uppercase tracking-wider">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded bg-terminal-bg-light text-terminal-constant"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Screenshots */}
            {project.images.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-terminal-keyword text-sm uppercase tracking-wider">Screenshot</h2>
                <div className="space-y-4">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-video rounded-lg border border-terminal-border overflow-hidden bg-terminal-bg-medium"
                    >
                      <img
                        src={image}
                        alt={`${project.name} screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Hide broken images
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-terminal-muted text-sm">
                        {/* Placeholder text shown if image fails */}
                        <span className="hidden">Screenshot {index + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </TerminalCard>
      </div>
    </div>
  );
};

export default ProjectDetail;
