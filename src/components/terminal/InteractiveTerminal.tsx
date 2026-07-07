import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { TerminalCursor } from './index';
import { useCommandHistory } from './hooks/useCommandHistory';
import { executeCommand, CommandResult } from './commands';

interface TerminalLine {
  id: number;
  type: 'input' | 'output';
  content: React.ReactNode;
  isError?: boolean;
}

const InteractiveTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [lineCounter, setLineCounter] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const { addToHistory, navigateUp, navigateDown, resetNavigation } = useCommandHistory();

  // Welcome message
  useEffect(() => {
    setLines([
      {
        id: 0,
        type: 'output',
        content: (
          <div className="space-y-1">
            <div className="text-terminal-command">interactive terminal [v1.0.0]</div>
            <div className="text-terminal-muted">type 'help' for available commands.</div>
          </div>
        ),
      },
    ]);
    setLineCounter(1);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  // Focus input on click
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleSubmit = () => {
    if (!input.trim()) return;

    const command = input.trim();
    addToHistory(command);

    // Add input line
    const inputLine: TerminalLine = {
      id: lineCounter,
      type: 'input',
      content: command,
    };

    // Execute command
    const result = executeCommand(command);

    // Handle clear command
    if (result.clearScreen) {
      setLines([]);
      setInput('');
      setLineCounter(0);
      return;
    }

    // Add output line if there's output
    const newLines: TerminalLine[] = [inputLine];
    if (result.output !== null) {
      newLines.push({
        id: lineCounter + 1,
        type: 'output',
        content: result.output,
        isError: result.isError,
      });
    }

    setLines((prev) => [...prev, ...newLines]);
    setLineCounter((prev) => prev + newLines.length);
    setInput('');
    resetNavigation();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevCommand = navigateUp();
      if (prevCommand !== null) {
        setInput(prevCommand);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextCommand = navigateDown();
      if (nextCommand !== null) {
        setInput(nextCommand);
      }
    }
  };

  return (
    <section id="terminal" className="site-reveal mb-8 w-full">
      <div className="mb-3 flex items-center gap-2 px-1 font-mono text-sm">
        <span className="font-bold text-terminal-prompt">$</span>
        <span className="text-terminal-directory">~</span>
        <span className="text-terminal-command">./interactive-terminal</span>
      </div>

      <div className="site-card site-terminal-shell overflow-hidden">
        {/* macOS title bar */}
        <div className="flex items-center gap-2 border-b border-terminal-border/80 bg-terminal-bg-light/50 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="flex-1 text-center text-terminal-muted text-xs">terminal</span>
          <div className="w-[52px]" /> {/* Spacer to center title */}
        </div>

        {/* Terminal content */}
        <div
          ref={terminalRef}
          onClick={handleTerminalClick}
          className="p-4 font-mono text-sm h-72 overflow-y-auto cursor-text"
        >
        {/* Lines */}
        <div className="space-y-2" role="log" aria-live="polite" aria-relevant="additions text">
          {lines.map((line) => (
            <div key={line.id}>
              {line.type === 'input' ? (
                <div className="flex items-center gap-2">
                  <span className="text-terminal-prompt">$</span>
                  <span className="text-terminal-output">{line.content}</span>
                </div>
              ) : (
                <div className={line.isError ? 'text-terminal-error' : ''}>
                  {line.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input line */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-terminal-prompt">$</span>
          <div className="flex-1 relative">
            {/* Hidden input for capturing keystrokes */}
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Interactive terminal command input"
              className="absolute inset-0 w-full opacity-0"
              autoComplete="off"
              spellCheck={false}
            />
            {/* Visible text with cursor */}
            <span className="text-terminal-output">{input}</span>
            <TerminalCursor />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTerminal;
