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
    <section id={id} className={`mb-8 w-full ${className}`}>
      {/* Prompt Line */}
      <TerminalPrompt
        command={command}
        directory={directory}
        className="mb-3"
      />

      {/* Output Area */}
      <div className="bg-terminal-bg-medium border border-terminal-border rounded-lg p-6 text-terminal-output font-mono">
        {children}
      </div>
    </section>
  );
};

export default TerminalCard;
