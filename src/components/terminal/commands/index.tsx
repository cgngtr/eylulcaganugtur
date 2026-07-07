import React from 'react';

export interface CommandResult {
  output: React.ReactNode;
  isError?: boolean;
  clearScreen?: boolean;
}

export type CommandHandler = (args: string[]) => CommandResult;

export interface Command {
  name: string;
  description: string;
  handler: CommandHandler;
}

// Help command
const helpCommand: Command = {
  name: 'help',
  description: 'List available commands',
  handler: () => ({
    output: (
      <div className="space-y-1">
        <div className="text-terminal-muted mb-2">Available commands:</div>
        {Object.entries(commands).map(([name, cmd]) => (
          <div key={name} className="flex gap-4">
            <span className="text-terminal-command w-20">{name}</span>
            <span className="text-terminal-output/70">{cmd.description}</span>
          </div>
        ))}
      </div>
    ),
  }),
};

// About command
const aboutCommand: Command = {
  name: 'about',
  description: 'Learn about me',
  handler: () => ({
    output: (
      <div className="space-y-2">
        <div className="text-terminal-command">Çağan</div>
        <div className="text-terminal-output">Full-stack Developer · Computer Engineering Graduate</div>
        <div className="text-terminal-muted text-sm mt-2">
          Currently distributing Confix and shipping MIMIC, resolves, and Saatinde.
          <br />
          I build web & mobile apps with TypeScript, React, and Next.js.
        </div>
      </div>
    ),
  }),
};

// Projects command
const projectsCommand: Command = {
  name: 'projects',
  description: 'List my projects',
  handler: () => ({
    output: (
      <div className="space-y-2">
        <div className="text-terminal-muted">Recent projects:</div>
        <div className="pl-2 space-y-1">
          <div>
            <span className="text-terminal-directory">→</span>{' '}
            <span className="text-terminal-command">Saatinde</span>{' '}
            <span className="text-terminal-muted">- Appointment management</span>
          </div>
          <div>
            <span className="text-terminal-directory">→</span>{' '}
            <span className="text-terminal-command">resolves</span>{' '}
            <span className="text-terminal-muted">- AI decision coaching</span>
          </div>
          <div>
            <span className="text-terminal-directory">→</span>{' '}
            <span className="text-terminal-command">MIMIC</span>{' '}
            <span className="text-terminal-muted">- AI voice matching</span>
          </div>
          <div>
            <span className="text-terminal-directory">→</span>{' '}
            <span className="text-terminal-command">Confix</span>{' '}
            <span className="text-terminal-muted">- AI landing page analyzer</span>
          </div>
          <div>
            <span className="text-terminal-directory">→</span>{' '}
            <span className="text-terminal-command">Caruso Olive</span>{' '}
            <span className="text-terminal-muted">- E-commerce website</span>
          </div>
          <div>
            <span className="text-terminal-directory">→</span>{' '}
            <span className="text-terminal-command">OSTIM Publications</span>{' '}
            <span className="text-terminal-muted">- Research platform</span>
          </div>
          <div>
            <span className="text-terminal-directory">→</span>{' '}
            <span className="text-terminal-command">Balancr</span>{' '}
            <span className="text-terminal-muted">- Group expense splitting</span>
          </div>
        </div>
        <div className="text-terminal-output/60 text-sm mt-2">
          Type <span className="text-terminal-command">scroll projects</span> or visit #projects section
        </div>
      </div>
    ),
  }),
};

// Skills command
const skillsCommand: Command = {
  name: 'skills',
  description: 'Show my tech stack',
  handler: () => ({
    output: (
      <div className="space-y-2">
        <div className="text-terminal-muted">Core stack:</div>
        <div className="pl-2 space-y-1 text-sm">
          <div>
            <span className="text-terminal-keyword">languages:</span>{' '}
            <span className="text-terminal-prompt">TypeScript, JavaScript, C++, SQL</span>
          </div>
          <div>
            <span className="text-terminal-keyword">app_frontend:</span>{' '}
            <span className="text-terminal-prompt">React, React Native, Next.js, Expo, Tailwind</span>
          </div>
          <div>
            <span className="text-terminal-keyword">backend_data:</span>{' '}
            <span className="text-terminal-prompt">Node.js, Supabase, PostgreSQL, Prisma</span>
          </div>
          <div>
            <span className="text-terminal-keyword">ai_ocr:</span>{' '}
            <span className="text-terminal-prompt">LLM integrations, OCR workflows</span>
          </div>
        </div>
      </div>
    ),
  }),
};

// Contact command
const contactCommand: Command = {
  name: 'contact',
  description: 'Get contact information',
  handler: () => ({
    output: (
      <div className="space-y-2">
        <div className="text-terminal-muted">Contact Info:</div>
        <div className="pl-2 space-y-1">
          <div>
            <span className="text-terminal-keyword">email:</span>{' '}
            <span className="text-terminal-directory">cgngtr5026@gmail.com</span>
          </div>
          <div>
            <span className="text-terminal-keyword">location:</span>{' '}
            <span className="text-terminal-output">Turkey (UTC+3)</span>
          </div>
        </div>
      </div>
    ),
  }),
};

// Social command
const socialCommand: Command = {
  name: 'social',
  description: 'Show social links',
  handler: () => ({
    output: (
      <div className="space-y-2">
        <div className="text-terminal-muted">Social Links:</div>
        <div className="pl-2 space-y-1">
          <div>
            <span className="text-terminal-keyword">github:</span>{' '}
            <span className="text-terminal-directory">github.com/cgngtr</span>
          </div>
          <div>
            <span className="text-terminal-keyword">linkedin:</span>{' '}
            <span className="text-terminal-directory">linkedin.com/in/eylul-cagan-ugtur</span>
          </div>
          <div>
            <span className="text-terminal-keyword">twitter:</span>{' '}
            <span className="text-terminal-directory">@buildincrisis</span>
          </div>
        </div>
      </div>
    ),
  }),
};

// Clear command
const clearCommand: Command = {
  name: 'clear',
  description: 'Clear the terminal',
  handler: () => ({
    output: null,
    clearScreen: true,
  }),
};

// Echo command
const echoCommand: Command = {
  name: 'echo',
  description: 'Echo back text',
  handler: (args) => ({
    output: (
      <div className="text-terminal-output">
        {args.join(' ') || ''}
      </div>
    ),
  }),
};

// Whoami command
const whoamiCommand: Command = {
  name: 'whoami',
  description: 'Who is visiting?',
  handler: () => ({
    output: (
      <div className="text-terminal-output">
        visitor@eylulcaganugtur.com
      </div>
    ),
  }),
};

// Date command
const dateCommand: Command = {
  name: 'date',
  description: 'Show current date and time',
  handler: () => ({
    output: (
      <div className="text-terminal-output">
        {new Date().toString()}
      </div>
    ),
  }),
};

// Scroll command
const scrollCommand: Command = {
  name: 'scroll',
  description: 'Scroll to a section (e.g., scroll projects)',
  handler: (args) => {
    const section = args[0]?.toLowerCase();
    const validSections = ['intro', 'profile', 'terminal', 'projects', 'experience', 'education', 'achievements', 'skills', 'spotify', 'github', 'links', 'contact'];

    if (!section) {
      return {
        output: (
          <div className="space-y-1">
            <div className="text-terminal-error">Usage: scroll [section]</div>
            <div className="text-terminal-muted">
              Available sections: {validSections.join(', ')}
            </div>
          </div>
        ),
        isError: true,
      };
    }

    if (!validSections.includes(section)) {
      return {
        output: (
          <div className="text-terminal-error">
            Unknown section: {section}. Try: {validSections.join(', ')}
          </div>
        ),
        isError: true,
      };
    }

    // Scroll to section
    setTimeout(() => {
      const element = document.getElementById(section);
      if (element) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
      }
    }, 100);

    return {
      output: (
        <div className="text-terminal-success">
          Scrolling to {section}...
        </div>
      ),
    };
  },
};

// Command registry
export const commands: Record<string, Command> = {
  help: helpCommand,
  about: aboutCommand,
  projects: projectsCommand,
  skills: skillsCommand,
  contact: contactCommand,
  social: socialCommand,
  clear: clearCommand,
  echo: echoCommand,
  whoami: whoamiCommand,
  date: dateCommand,
  scroll: scrollCommand,
};

// Execute command
export const executeCommand = (input: string): CommandResult => {
  const trimmed = input.trim();
  if (!trimmed) {
    return { output: null };
  }

  const parts = trimmed.split(/\s+/);
  const commandName = parts[0].toLowerCase();
  const args = parts.slice(1);

  const command = commands[commandName];

  if (!command) {
    return {
      output: (
        <div className="text-terminal-error">
          Command not found: {commandName}. Type <span className="text-terminal-command">help</span> for available commands.
        </div>
      ),
      isError: true,
    };
  }

  return command.handler(args);
};
