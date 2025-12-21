import { useState, useCallback } from 'react';

interface UseCommandHistoryReturn {
  history: string[];
  historyIndex: number;
  addToHistory: (command: string) => void;
  navigateUp: () => string | null;
  navigateDown: () => string | null;
  resetNavigation: () => void;
}

export const useCommandHistory = (maxSize: number = 50): UseCommandHistoryReturn => {
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const addToHistory = useCallback((command: string) => {
    if (!command.trim()) return;

    setHistory((prev) => {
      const newHistory = [...prev, command];
      // Keep only the last maxSize commands
      if (newHistory.length > maxSize) {
        return newHistory.slice(-maxSize);
      }
      return newHistory;
    });
    setHistoryIndex(-1);
  }, [maxSize]);

  const navigateUp = useCallback((): string | null => {
    if (history.length === 0) return null;

    const newIndex = historyIndex === -1
      ? history.length - 1
      : Math.max(0, historyIndex - 1);

    setHistoryIndex(newIndex);
    return history[newIndex];
  }, [history, historyIndex]);

  const navigateDown = useCallback((): string | null => {
    if (historyIndex === -1) return null;

    const newIndex = historyIndex + 1;

    if (newIndex >= history.length) {
      setHistoryIndex(-1);
      return '';
    }

    setHistoryIndex(newIndex);
    return history[newIndex];
  }, [history, historyIndex]);

  const resetNavigation = useCallback(() => {
    setHistoryIndex(-1);
  }, []);

  return {
    history,
    historyIndex,
    addToHistory,
    navigateUp,
    navigateDown,
    resetNavigation,
  };
};

export default useCommandHistory;
