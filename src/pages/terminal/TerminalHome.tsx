import React, { useEffect } from 'react';
import { TerminalNav, InteractiveTerminal } from '@/components/terminal';
import { useThemeInit } from '@/lib/useTheme';
import {
  HeroTerminal,
  ProjectsTerminal,
  ExperienceTerminal,
  EducationTerminal,
  AchievementsTerminal,
  SkillsTerminal,
  SpotifyTerminal,
  GitHubTerminal,
  LinksTerminal,
  ContactTerminal,
} from '@/components/terminal/sections';

const TerminalHome: React.FC = () => {
  useThemeInit();

  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.site-home');
    if (!root) return;

    const revealItems = Array.from(root.querySelectorAll<HTMLElement>('.site-reveal'));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    root.classList.add('is-reveal-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    );

    revealItems.forEach((item, index) => {
      item.style.setProperty('--appear-delay', String(Math.min(index, 8)));
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const handleMoreClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const target = document.getElementById('profile');
    if (!target) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targetTop = target.getBoundingClientRect().top + window.scrollY;
    const landingTop = Math.max(targetTop - 56, 0);

    window.scrollTo({
      top: landingTop,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
    window.history.replaceState(null, '', '#profile');
  };

  return (
    <div className="site-home min-h-screen text-terminal-output">

      <main className="site-main mx-auto px-4 pt-6 pb-16 sm:px-6">
        <div className="site-shell-layout">
          <TerminalNav />

          <div className="site-content-stack">
        <section id="intro" className="site-hero grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="site-reveal">
            <div className="site-kicker">~/cagan/profile · full-stack developer</div>
            <h1 className="site-pixel-title">Çağan<br />Uğtur</h1>
            <p className="max-w-[36rem] text-base font-medium leading-7 text-terminal-muted sm:text-lg">
              Computer engineering graduate building TypeScript-heavy products for booking flows,
              internal tools, mobile interfaces, and AI-assisted workflows.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <a className="site-button is-primary" href="#projects">View selected work</a>
              <a className="site-button" href="#contact">Contact</a>
            </div>

          </div>

          <aside className="site-reveal justify-self-center lg:justify-self-end" aria-label="Personal profile dossier">
            <div className="site-mini-window site-dossier-window">
              <div className="site-window-bar">
                <span>profile.card</span>
                <span className="site-window-buttons"><span /><span /><span /></span>
              </div>
              <div className="site-dossier-body">
                <div className="site-dossier-profile">
                  <div className="site-dossier-avatar">
                    <img src="/favicon.png" alt="Çağan Uğtur" />
                  </div>
                  <div>
                    <p className="font-mono text-xs font-bold text-terminal-directory">whoami</p>
                    <p className="text-lg font-black leading-tight text-terminal-output">Çağan Uğtur</p>
                    <p className="text-xs font-semibold text-terminal-muted">full-stack developer · OSTIM CENG</p>
                  </div>
                </div>

                <div className="site-dossier-terminal">
                  <p><span>$ open current_tabs</span></p>
                  <p>Saatinde / MIMIC / resolves / Confix</p>
                  <p><span>$ cat working_style</span></p>
                  <p>practical systems, typed flows, product delivery</p>
                </div>

                <div className="site-dossier-list" aria-label="Last opened work">
                  <div>
                    <strong>01 Saatinde</strong>
                    <span>booking infrastructure</span>
                  </div>
                  <div>
                    <strong>02 MIMIC</strong>
                    <span>AI-assisted workflows</span>
                  </div>
                  <div>
                    <strong>03 Resolves</strong>
                    <span>product interfaces</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <a className="site-scroll-cue" href="#profile" onClick={handleMoreClick} aria-label="Scroll to more sections">
            <span>there's more</span>
            <svg aria-hidden="true" viewBox="0 0 58 42" focusable="false">
              <path d="M10 6C18 25 30 16 39 31" />
              <path d="M31 31c4 1 8 1 10 0" />
              <path d="M39 22c0 4 1 7 2 9" />
            </svg>
          </a>
        </section>

        <HeroTerminal />
        <InteractiveTerminal />
        <ProjectsTerminal />
        <ExperienceTerminal />
        <EducationTerminal />
        <AchievementsTerminal />
        <SkillsTerminal />
        <SpotifyTerminal />
        <GitHubTerminal />
        <LinksTerminal />
        <ContactTerminal />

        <footer className="site-card mt-16 p-6 text-center">
          <div className="font-mono text-sm text-terminal-muted">
            <span className="text-terminal-prompt">$</span>{' '}
            <span className="text-terminal-command">echo</span>{' '}
            <span className="inline-flex items-center justify-center gap-1.5 text-terminal-output">
              <span>"Built with</span>
              <svg
                role="img"
                aria-label="love"
                viewBox="0 0 24 24"
                className="h-4 w-4 -translate-y-px text-terminal-prompt drop-shadow-[0_0_0.45rem_rgba(185,120,169,0.72)]"
              >
                <path
                  fill="currentColor"
                  d="M12 20.35c-.25 0-.5-.08-.7-.25C5.6 15.26 2.5 12.46 2.5 8.98 2.5 6.2 4.66 4 7.42 4c1.56 0 3.05.73 4.02 1.88A5.24 5.24 0 0 1 15.58 4c2.76 0 4.92 2.2 4.92 4.98 0 3.48-3.1 6.28-8.8 11.12-.2.17-.45.25-.7.25Z"
                />
                <path
                  fill="#f6eeee"
                  d="M7.8 6.55c.42-.22 1.2-.14 1.67.18.28.19.31.58.06.81-.22.2-.53.22-.8.09-.29-.15-.63-.15-.91 0-.3.16-.67.06-.84-.24-.17-.31-.08-.68.22-.84Z"
                  opacity="0.9"
                />
              </svg>
              <span>"</span>
            </span>
            <div className="mt-1 flex items-center justify-center gap-1.5 text-[0.68rem] font-medium text-terminal-muted/80">
              <span>and... a lot of coffee</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 text-terminal-command/85"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M6.5 9.25h9.25v4.2a4.05 4.05 0 0 1-4.05 4.05H10.55a4.05 4.05 0 0 1-4.05-4.05v-4.2Z"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M15.75 10.35h1.15a2.15 2.15 0 0 1 0 4.3h-1.15M8.25 6.6c-.55-.45-.55-1.2 0-1.65M11.5 6.6c-.55-.45-.55-1.2 0-1.65M14.75 6.6c-.55-.45-.55-1.2 0-1.65M6 19h10.75"
                />
              </svg>
            </div>
          </div>
          <div className="mt-2 text-xs font-semibold text-terminal-muted">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </footer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TerminalHome;
