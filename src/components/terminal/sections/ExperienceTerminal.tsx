import React from 'react';
import { TerminalCard } from '../index';
import { Calendar, Building2, MapPin } from 'lucide-react';

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  tech?: string[];
}

const experiences: Experience[] = [
  {
    id: '1',
    title: 'Summer Intern',
    company: 'OSTIM Technical University',
    location: 'Ankara, Turkey · Remote',
    period: 'Jun 2025 - Jul 2025',
    description: [
      'Web development internship focusing on modern frontend technologies',
      'Building applications with TypeScript and React',
      'Collaborating with university tech team on internal projects',
    ],
    tech: ['TypeScript', 'Web Development', 'React', 'JavaScript'],
  },
  {
    id: '2',
    title: 'Summer Intern',
    company: 'Asisguard',
    location: 'Turkey',
    period: 'Jul 2023',
    description: [
      'Worked with OpenCV library using C++',
      'Completed 5 computer vision projects',
      'Gained experience in object detection and image processing',
    ],
    tech: ['C++', 'OpenCV', 'Object Detection', 'Image Processing'],
  },
];

const ExperienceTerminal: React.FC = () => {
  return (
    <TerminalCard command="cat experience.log" id="experience">
      <div className="space-y-6">
        {experiences.map((exp) => (
          <article key={exp.id} className="site-record">
            <div className="site-record-icon">
              <Building2 className="h-5 w-5" />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-semibold text-terminal-command">
                {exp.title}
              </h3>

              <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-terminal-muted">
                <span className="flex items-center gap-1">
                  <Building2 className="h-4 w-4" />
                  {exp.company}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {exp.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {exp.period}
                </span>
              </div>

              <ul className="mb-3 mt-3 list-none space-y-1 text-sm text-terminal-output/80">
                {exp.description.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-terminal-prompt">→</span>
                    {item}
                  </li>
                ))}
              </ul>

              {exp.tech && (
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="site-chip">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </TerminalCard>
  );
};

export default ExperienceTerminal;
