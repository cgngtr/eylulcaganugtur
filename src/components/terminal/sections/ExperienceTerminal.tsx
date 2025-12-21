import React from 'react';
import { TerminalCard } from '../index';
import { Calendar, Building2 } from 'lucide-react';

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
    location: 'Ankara, Türkiye · Remote',
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
    location: 'Türkiye',
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
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className="relative pl-6 pb-6 border-l border-terminal-border last:pb-0"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-terminal-prompt" />

            {/* Header */}
            <div className="mb-2">
              <h3 className="text-lg font-semibold text-terminal-command">
                {exp.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-sm text-terminal-muted mt-1">
                <span className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  {exp.company}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {exp.period}
                </span>
              </div>
            </div>

            {/* Description */}
            <ul className="list-none space-y-1 text-sm text-terminal-output/80 mb-3">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-terminal-prompt mt-1">→</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Tech tags */}
            {exp.tech && (
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-xs rounded bg-terminal-bg-light text-terminal-constant"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </TerminalCard>
  );
};

export default ExperienceTerminal;
