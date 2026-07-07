import React from 'react';
import { TerminalCard } from '../index';

const HeroTerminal: React.FC = () => {
  return (
    <TerminalCard command="cat intro.txt" id="profile">
      <div className="space-y-4 text-terminal-output">
        <p className="text-lg font-semibold leading-7 text-terminal-output">
          i'm çağan, a computer engineering graduate from OSTIM Technical University. currently distributing confix and shipping MIMIC, resolves, and Saatinde. i build fullstack web & mobile apps with TypeScript, React, and Next.js.
        </p>
        <p className="leading-7 text-terminal-muted">
          when i'm not coding, you'll find me over-engineering side projects or debugging with a weird v60 brew in hand. i use arch btw.
        </p>
      </div>
    </TerminalCard>
  );
};

export default HeroTerminal;
