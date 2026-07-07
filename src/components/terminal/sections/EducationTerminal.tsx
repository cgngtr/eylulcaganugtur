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
    location: 'Ankara, Turkey',
    period: '2022 - 2026',
    description: 'Graduated; focused on software engineering and web development',
  },
];

const EducationTerminal: React.FC = () => {
  return (
    <TerminalCard command="cat education.txt" id="education">
      <div className="space-y-6">
        {education.map((edu) => (
          <article key={edu.id} className="site-record">
            <div className="site-record-icon">
              <GraduationCap className="h-5 w-5" />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-semibold text-terminal-command">
                {edu.degree}
              </h3>
              <p className="text-terminal-output/80">{edu.school}</p>

              <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-terminal-muted">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {edu.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {edu.period}
                </span>
              </div>

              {edu.description && (
                <p className="mt-2 text-sm leading-6 text-terminal-output/70">
                  {edu.description}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </TerminalCard>
  );
};

export default EducationTerminal;
