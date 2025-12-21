import React from 'react';
import { TerminalCard } from '../index';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface Education {
  id: string;
  degree: string;
  school: string;
  location: string;
  period: string;
  description?: string;
}

const education: Education[] = [
  {
    id: '1',
    degree: 'Computer Engineering',
    school: 'OSTIM Technical University',
    location: 'Ankara, Türkiye',
    period: '2022 - 2026',
    description: 'Focus on software engineering and web development',
  },
];

const EducationTerminal: React.FC = () => {
  return (
    <TerminalCard command="cat education.txt" id="education">
      <div className="space-y-6">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="flex items-start gap-4 p-4 rounded-lg border border-terminal-border hover:border-terminal-directory transition-colors"
          >
            {/* Icon */}
            <div className="p-3 rounded-lg bg-terminal-bg-light">
              <GraduationCap className="w-6 h-6 text-terminal-directory" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-terminal-command">
                {edu.degree}
              </h3>
              <p className="text-terminal-output/80">{edu.school}</p>

              <div className="flex flex-wrap items-center gap-3 text-sm text-terminal-muted mt-2">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {edu.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {edu.period}
                </span>
              </div>

              {edu.description && (
                <p className="text-sm text-terminal-output/60 mt-2">
                  {edu.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </TerminalCard>
  );
};

export default EducationTerminal;
