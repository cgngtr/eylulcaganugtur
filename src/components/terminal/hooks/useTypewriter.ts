import { useState, useEffect, useCallback } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
  onComplete?: () => void;
}

interface UseTypewriterReturn {
  displayText: string;
  isTyping: boolean;
  isComplete: boolean;
  restart: () => void;
}

export const useTypewriter = ({
  text,
  speed = 50,
  delay = 0,
  onComplete,
}: UseTypewriterOptions): UseTypewriterReturn => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  const restart = useCallback(() => {
    setDisplayText('');
    setIsComplete(false);
    setIsTyping(false);
    setStartTyping(false);
    // Trigger restart after a tick
    setTimeout(() => setStartTyping(true), 0);
  }, []);

  useEffect(() => {
    // Initial delay before starting
    const delayTimer = setTimeout(() => {
      setStartTyping(true);
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [delay]);

  useEffect(() => {
    if (!startTyping) return;

    setIsTyping(true);
    let currentIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        setIsComplete(true);
        onComplete?.();
      }
    }, speed);

    return () => clearInterval(typeInterval);
  }, [text, speed, startTyping, onComplete]);

  return { displayText, isTyping, isComplete, restart };
};

export default useTypewriter;
