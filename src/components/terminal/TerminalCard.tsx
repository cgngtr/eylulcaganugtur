import React from 'react';
import TerminalPrompt from './TerminalPrompt';

interface TerminalCardProps {
  command: string;
  directory?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const TerminalCard: React.FC<TerminalCardProps> = ({
  command,
  directory = '~',
  children,
  className = '',
  id,
}) => {
  return (
    <section id={id} className={`site-reveal mb-8 w-full ${className}`}>
      <TerminalPrompt
        command={command}
        directory={directory}
        className="mb-3 px-1"
      />

      <div className="site-card site-card-hover p-5 font-mono text-terminal-output sm:p-6">
        {children}
      </div>
    </section>
  );
};

export default TerminalCard;
