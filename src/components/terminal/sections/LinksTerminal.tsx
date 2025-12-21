import React from 'react';
import { TerminalCard } from '../index';
import { Github, FileText, Globe, Linkedin, Twitter, Mail } from 'lucide-react';

interface Link {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

const links: Link[] = [
  {
    id: 'github',
    name: 'github',
    description: 'source code & projects',
    url: 'https://github.com/cgngtr',
    icon: <Github className="w-5 h-5" />,
    color: 'text-terminal-output',
  },
  {
    id: 'linkedin',
    name: 'linkedin',
    description: 'professional network',
    url: 'https://linkedin.com/in/eylul-cagan-ugtur',
    icon: <Linkedin className="w-5 h-5" />,
    color: 'text-terminal-info',
  },
  {
    id: 'twitter',
    name: 'twitter/x',
    description: 'thoughts & updates',
    url: 'https://twitter.com/buildincrisis',
    icon: <Twitter className="w-5 h-5" />,
    color: 'text-terminal-directory',
  },
  {
    id: 'resume',
    name: 'resume.pdf',
    description: 'download my resume',
    url: '/resume.pdf',
    icon: <FileText className="w-5 h-5" />,
    color: 'text-terminal-command',
  },
  {
    id: 'old-portfolio',
    name: 'old-portfolio',
    description: 'previous portfolio design',
    url: '/old',
    icon: <Globe className="w-5 h-5" />,
    color: 'text-terminal-constant',
  },
  {
    id: 'email',
    name: 'email',
    description: 'get in touch',
    url: 'mailto:cgngtr5026@gmail.com',
    icon: <Mail className="w-5 h-5" />,
    color: 'text-terminal-keyword',
  },
];

const LinksTerminal: React.FC = () => {
  return (
    <TerminalCard command="ls ./links" directory="~/links" id="links">
      <div className="space-y-1">
        {/* Terminal-style header */}
        <div className="text-terminal-muted text-sm mb-4 flex items-center gap-4">
          <span>total {links.length}</span>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-3 p-3 rounded-lg border border-terminal-border hover:border-terminal-prompt hover:bg-terminal-bg-light/50 transition-all"
            >
              <div className={`${link.color}`}>{link.icon}</div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-terminal-output group-hover:text-terminal-command transition-colors">
                  {link.name}
                </div>
                <div className="text-xs text-terminal-muted truncate">
                  {link.description}
                </div>
              </div>
              <span className="text-terminal-muted group-hover:text-terminal-prompt transition-colors">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </TerminalCard>
  );
};

export default LinksTerminal;
