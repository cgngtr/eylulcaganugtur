import React from 'react';
import { TerminalNav, InteractiveTerminal } from '@/components/terminal';
import {
  HeroTerminal,
  ProjectsTerminal,
  ExperienceTerminal,
  EducationTerminal,
  SkillsTerminal,
  BlogTerminal,
  SpotifyTerminal,
  GitHubTerminal,
  LinksTerminal,
  ContactTerminal,
} from '@/components/terminal/sections';

const TerminalHome: React.FC = () => {
  return (
    <div className="min-h-screen bg-terminal-bg-dark">
      {/* Navigation */}
      <TerminalNav />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pb-16">
        {/* Hero Section */}
        <HeroTerminal />

        {/* Interactive Terminal */}
        <InteractiveTerminal />

        {/* Projects */}
        <ProjectsTerminal />

        {/* Experience */}
        <ExperienceTerminal />

        {/* Education */}
        <EducationTerminal />

        {/* Skills */}
        <SkillsTerminal />

        {/* Blog */}
        <BlogTerminal />

        {/* Spotify */}
        <SpotifyTerminal />

        {/* GitHub */}
        <GitHubTerminal />

        {/* Links */}
        <LinksTerminal />

        {/* Contact */}
        <ContactTerminal />

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-terminal-border text-center">
          <div className="font-mono text-sm text-terminal-muted">
            <span className="text-terminal-prompt">$</span>{' '}
            <span className="text-terminal-command">echo</span>{' '}
            <span className="text-terminal-output">"Built with React + TypeScript"</span>
          </div>
          <div className="mt-2 text-xs text-terminal-muted">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </footer>
      </main>
    </div>
  );
};

export default TerminalHome;
