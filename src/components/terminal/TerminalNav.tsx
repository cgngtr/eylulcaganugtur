import React, { useState, useEffect } from 'react';
import {
  FileDown,
  Menu,
  X,
  Home,
  FolderOpen,
  Code2,
  GraduationCap,
  Trophy,
  Layers,
  FileText,
  MessageSquare
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: 'intro', label: 'home', href: '#intro', icon: <Home className="w-4 h-4" /> },
  { id: 'projects', label: 'projects', href: '#projects', icon: <FolderOpen className="w-4 h-4" /> },
  { id: 'experience', label: 'experience', href: '#experience', icon: <Code2 className="w-4 h-4" /> },
  { id: 'education', label: 'education', href: '#education', icon: <GraduationCap className="w-4 h-4" /> },
  { id: 'achievements', label: 'achievements', href: '#achievements', icon: <Trophy className="w-4 h-4" /> },
  { id: 'skills', label: 'skills', href: '#skills', icon: <Layers className="w-4 h-4" /> },
  { id: 'blog', label: 'blog', href: '#blog', icon: <FileText className="w-4 h-4" /> },
  { id: 'contact', label: 'contact', href: '#contact', icon: <MessageSquare className="w-4 h-4" /> },
];

const TerminalNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('intro');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/${href}`;
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-terminal-bg-dark">
      <div className="max-w-4xl mx-auto px-4 py-4">
        {/* Top Row: whoami + resume */}
        <div className="flex items-start justify-between mb-4">
          {/* Left: whoami command and name */}
          <div className="font-mono">
            <div className="text-sm text-terminal-muted">
              <span className="text-terminal-directory">~</span>
              <span className="text-terminal-muted"> $ </span>
              <span className="text-terminal-output">whoami</span>
            </div>
            <h1 className="text-xl font-bold text-terminal-output mt-1">
              cagan ugtur
            </h1>
          </div>

          {/* Right: Resume button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 text-terminal-output hover:text-terminal-command font-mono text-sm transition-colors"
          >
            <FileDown className="w-4 h-4" />
            resume
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-terminal-output hover:text-terminal-command transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Navigation Grid */}
        <div className="hidden md:grid grid-cols-4 gap-x-8 gap-y-2 font-mono text-sm">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`flex items-center gap-2 transition-colors ${
                activeSection === item.id
                  ? 'text-terminal-command'
                  : 'text-terminal-muted hover:text-terminal-output'
              }`}
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-terminal-border pt-4">
            <div className="grid grid-cols-2 gap-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center gap-2 font-mono text-sm py-2 transition-colors ${
                    activeSection === item.id
                      ? 'text-terminal-command'
                      : 'text-terminal-muted hover:text-terminal-output'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </div>

            {/* Resume Button Mobile */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-terminal-output font-mono text-sm mt-4 pt-4 border-t border-terminal-border"
            >
              <FileDown className="w-4 h-4" />
              resume
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TerminalNav;
