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
    name: 'app_frontend',
    skills: ['React', 'React Native', 'Next.js', 'Expo'],
  },
  {
    name: 'state_forms',
    skills: ['Zustand', 'TanStack Query', 'Zod'],
  },
  {
    name: 'backend_data',
    skills: ['Node.js', 'Supabase', 'PostgreSQL', 'Prisma'],
  },
];

const longestCategoryName = Math.max(
  ...skillCategories.map((category) => category.name.length),
);

const SkillsTerminal: React.FC = () => {
  return (
    <TerminalCard command="cat stack.json" id="skills">
      <div className="space-y-1 text-sm">
        <div className="text-terminal-output">{'{'}</div>

        {skillCategories.map((category, categoryIndex) => {
          const padding = ' '.repeat(longestCategoryName - category.name.length + 3);
          const values = category.skills.map((skill) => `"${skill}"`).join(', ');

          return (
            <div key={category.name} className="whitespace-pre pl-4">
              <span className="text-terminal-keyword">"{category.name}"</span>
              <span className="text-terminal-output">:{padding}[</span>
              <span className="text-terminal-prompt">{values}</span>
              <span className="text-terminal-output">]</span>
              {categoryIndex < skillCategories.length - 1 && (
                <span className="text-terminal-output">,</span>
              )}
            </div>
          );
        })}

        <div className="text-terminal-output">{'}'}</div>
      </div>
    </TerminalCard>
  );
};

export default SkillsTerminal;
