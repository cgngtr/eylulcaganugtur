import React, { useState, useEffect, useRef } from 'react';
import { Users, MessageSquare, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToActionSection = () => {
  const phrases = [
    'on internet.',
    'to life.',
    'alive.',
    'to reality.',
    'to fruition.',
    'to existence.',
    'to the screen.',
    'to the digital world.',
    'to the web.'
  ];
  
  const [currentPhrase, setCurrentPhrase] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [cursorVisible, setCursorVisible] = useState(true);
  
  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  // Typing effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Current phrase to work with
      const fullPhrase = phrases[currentIndex];
      
      // If deleting, remove a character, otherwise add a character
      if (isDeleting) {
        setCurrentPhrase(prev => prev.substring(0, prev.length - 1));
        setTypingSpeed(50); // Faster when deleting
      } else {
        setCurrentPhrase(fullPhrase.substring(0, currentPhrase.length + 1));
        setTypingSpeed(100); // Normal speed when typing
      }
      
      // If completed typing the current phrase
      if (!isDeleting && currentPhrase === fullPhrase) {
        // Pause at the end of typing a complete phrase
        setTimeout(() => setIsDeleting(true), 1500);
        setTypingSpeed(200);
      } 
      // If deleted the entire phrase
      else if (isDeleting && currentPhrase === '') {
        setIsDeleting(false);
        // Move to the next phrase
        setCurrentIndex((currentIndex + 1) % phrases.length);
        setTypingSpeed(200);
      }
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentPhrase, isDeleting, currentIndex, typingSpeed, phrases]);
  
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm relative">
      <div className="flex flex-col space-y-1.5 p-4">
        <h2 className="text-xl font-semibold leading-none tracking-tight flex flex-row items-center gap-1">
          <Users className="size-6 text-primary" fill="currentColor" />
          Let's Work Together
        </h2>
        <p className="text-sm text-muted-foreground">Bringing your ideas to life</p>
      </div>
      <div className="p-4 pt-0 text-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-xl font-bold min-h-[3.5rem] flex items-center justify-center whitespace-nowrap overflow-hidden">
            <span>and make your ideas come&nbsp;</span>
            <span className="text-primary">{currentPhrase}</span>
            <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100 ml-0.5`}>|</span>
          </div>
          
          <p className="text-muted-foreground max-w-md mx-auto">
            Ready to start a project? I'm available for freelance work. Let's discuss your ideas and make them a reality.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center mt-4">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <MessageSquare className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
            
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Github className="mr-2 h-4 w-4" />
              View GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
