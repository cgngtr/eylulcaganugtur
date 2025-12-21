import React from 'react';
import { TerminalCard } from '../index';

const HeroTerminal: React.FC = () => {
  return (
    <TerminalCard command="cat intro.txt" id="intro">
      <div className="space-y-4 text-terminal-output leading-relaxed">
        <p>
          i'm çağan, a computer engineering student at OSTIM Technical University
          in Ankara. currently distributing confix and building side projects.
          i build fullstack web & mobile apps with TypeScript, React, and Next.js.
        </p>
        <p>
          when i'm not coding, you'll find me over-engineering side projects
          or debugging with a weird v60 brew in hand. i use arch btw.
        </p>
      </div>
    </TerminalCard>
  );
};

export default HeroTerminal;
