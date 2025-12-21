import React from 'react';
import { TerminalCard } from '../index';

interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'languages',
    skills: ['TypeScript', 'JavaScript', 'C++', 'SQL'],
  },
  {
    name: 'frontend',
    skills: ['React', 'React Native', 'Next.js', 'Expo', 'Tailwind CSS', 'Framer Motion', 'Tamagui'],
  },
  {
    name: 'state_and_data',
    skills: ['Zustand', 'React Query', 'React Hook Form', 'Zod'],
  },
  {
    name: 'backend',
    skills: ['Node.js', 'Supabase', 'Prisma', 'PostgreSQL', 'Cloudflare R2'],
  },
  {
    name: 'ai_and_ml',
    skills: ['Claude AI', 'Google Gemini', 'Vertex AI', 'ML Kit OCR'],
  },
  {
    name: 'services',
    skills: ['Vercel', 'Polar', 'Resend', 'PostHog', 'Better Auth'],
  },
];

const SkillsTerminal: React.FC = () => {
  return (
    <TerminalCard command="cat stack.json" id="skills">
      <div className="space-y-1 text-sm">
        {/* JSON opening brace */}
        <div className="text-terminal-output">{'{'}</div>

        {skillCategories.map((category, catIndex) => (
          <div key={category.name} className="pl-4">
            {/* Category name */}
            <span className="text-terminal-keyword">"{category.name}"</span>
            <span className="text-terminal-output">: [</span>

            {/* Skills */}
            <div className="pl-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skill}>
                  <span className="text-terminal-prompt">"{skill}"</span>
                  {skillIndex < category.skills.length - 1 && (
                    <span className="text-terminal-output">,</span>
                  )}
                </div>
              ))}
            </div>

            <span className="text-terminal-output">]</span>
            {catIndex < skillCategories.length - 1 && (
              <span className="text-terminal-output">,</span>
            )}
          </div>
        ))}

        {/* JSON closing brace */}
        <div className="text-terminal-output">{'}'}</div>
      </div>
    </TerminalCard>
  );
};

export default SkillsTerminal;
