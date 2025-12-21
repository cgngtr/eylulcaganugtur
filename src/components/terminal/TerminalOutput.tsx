import React from 'react';

interface TerminalOutputProps {
  children: React.ReactNode;
  className?: string;
}

const TerminalOutput: React.FC<TerminalOutputProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`text-terminal-output font-mono ${className}`}>
      {children}
    </div>
  );
};

export default TerminalOutput;
