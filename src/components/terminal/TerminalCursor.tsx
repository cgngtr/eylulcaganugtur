import React from 'react';

interface TerminalCursorProps {
  className?: string;
}

const TerminalCursor: React.FC<TerminalCursorProps> = ({ className = '' }) => {
  return (
    <span
      className={`inline-block w-2 h-4 bg-terminal-output terminal-cursor ${className}`}
      aria-hidden="true"
    />
  );
};

export default TerminalCursor;
