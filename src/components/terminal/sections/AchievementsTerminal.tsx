import React from 'react';
import { Medal } from 'lucide-react';
import { TerminalCard } from '../index';

interface Achievement {
  id: string;
  event: string;
  placement: string;
  location: string;
  tone: 'success' | 'warning' | 'info';
}

const achievements: Achievement[] = [
  {
    id: 'ostim-blockchain-first-place',
    event: 'OSTIM Technical University Blockchain Hackathon',
    placement: '1st place',
    location: 'OSTIM Technical University',
    tone: 'success',
  },
  {
    id: 'wraitathon-second-place',
    event: 'Wraith x Fal Hackathon (Wraitathon)',
    placement: '2nd place',
    location: 'Wraitathon',
    tone: 'warning',
  },
  {
    id: 'ostim-hackathon-third-place',
    event: 'OSTIM Technical University Hackathon',
    placement: '3rd place',
    location: 'OSTIM Technical University',
    tone: 'info',
  },
];

const toneClass: Record<Achievement['tone'], string> = {
  success: 'text-terminal-success border-terminal-success/30 bg-terminal-success/10',
  warning: 'text-terminal-warning border-terminal-warning/30 bg-terminal-warning/10',
  info: 'text-terminal-info border-terminal-info/30 bg-terminal-info/10',
};

const AchievementsTerminal: React.FC = () => {
  return (
    <TerminalCard command="cat achievements.log" directory="~/timeline" id="achievements">
      <div className="space-y-4">

        <div className="space-y-3">
          {achievements.map((achievement, index) => (
            <article key={achievement.id} className="site-record">
              <div className={`site-record-icon ${toneClass[achievement.tone]}`}>
                <Medal className="h-5 w-5" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-terminal-muted">#{index + 1}</span>
                  <h3 className="font-semibold text-terminal-command">
                    {achievement.event}
                  </h3>
                </div>

                <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                  <span className="site-chip">{achievement.placement}</span>
                  <span className="text-terminal-muted">{achievement.location}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </TerminalCard>
  );
};

export default AchievementsTerminal;
