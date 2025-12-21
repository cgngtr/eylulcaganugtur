import React from 'react';

interface TerminalPromptProps {
  command: string;
  directory?: string;
  showPrefix?: boolean;
  prefix?: string;
  className?: string;
}

const TerminalPrompt: React.FC<TerminalPromptProps> = ({
  command,
  directory = '~',
  showPrefix = true,
  prefix = '$',
  className = '',
}) => {
  return (
    <div className={`flex items-center gap-2 font-mono text-sm ${className}`}>
      {showPrefix && (
        <>
          <span className="text-terminal-prompt font-bold">{prefix}</span>
          <span className="text-terminal-directory">{directory}</span>
        </>
      )}
      <span className="text-terminal-command">{command}</span>
    </div>
  );
};

export default TerminalPrompt;
