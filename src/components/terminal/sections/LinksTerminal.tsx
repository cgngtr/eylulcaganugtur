import React from 'react';
import { TerminalCard } from '../index';
import { Github, FileText, Linkedin, Twitter, Mail } from 'lucide-react';

interface Link {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: React.ReactNode;
  iconClass: string;
}

const links: Link[] = [
  {
    id: 'github',
    name: 'github',
    description: 'source code & projects',
    url: 'https://github.com/cgngtr',
    icon: <Github className="w-5 h-5" />,
    iconClass: 'is-github',
  },
  {
    id: 'linkedin',
    name: 'linkedin',
    description: 'professional network',
    url: 'https://linkedin.com/in/eylul-cagan-ugtur',
    icon: <Linkedin className="w-5 h-5" />,
    iconClass: 'is-blue',
  },
  {
    id: 'twitter',
    name: 'twitter/x',
    description: 'thoughts & updates',
    url: 'https://twitter.com/buildincrisis',
    icon: <Twitter className="w-5 h-5" />,
    iconClass: 'is-x',
  },
  {
    id: 'resume',
    name: 'request-cv',
    description: 'ask for current resume',
    url: 'mailto:cgngtr5026@gmail.com?subject=Resume%20request',
    icon: <FileText className="w-5 h-5" />,
    iconClass: 'is-file',
  },
  {
    id: 'email',
    name: 'email',
    description: 'get in touch',
    url: 'mailto:cgngtr5026@gmail.com',
    icon: <Mail className="w-5 h-5" />,
    iconClass: 'is-mail',
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
        <div className="site-launcher-grid">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="site-launcher-tile"
            >
              <span className={`site-launcher-icon ${link.iconClass}`} aria-hidden="true">
                {link.icon}
              </span>
              <span className="min-w-0">
                <span className="block font-semibold text-terminal-output">
                  {link.name}
                </span>
                <span className="block truncate text-xs text-terminal-muted">
                  {link.description}
                </span>
              </span>
              <span className="text-terminal-muted" aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </div>
    </TerminalCard>
  );
};

export default LinksTerminal;
