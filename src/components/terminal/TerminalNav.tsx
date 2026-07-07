import React, { useState, useEffect } from 'react';
import {
  Home,
  FolderOpen,
  Code2,
  GraduationCap,
  Trophy,
  Layers,
  MessageSquare
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

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
  { id: 'contact', label: 'contact', href: '#contact', icon: <MessageSquare className="w-4 h-4" /> },
];

const TerminalNav: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomeRoute = location.pathname === '/';
  const [activeSection, setActiveSection] = useState<string>(isHomeRoute ? 'intro' : '');

  useEffect(() => {
    if (!isHomeRoute) {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2;
      let closestSectionId = navItems[0].id;
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
          setActiveSection(item.id);
          return;
        }

        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSectionId = item.id;
        }
      }

      setActiveSection(closestSectionId);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomeRoute]);

  useEffect(() => {
    if (!isHomeRoute || !location.hash) return;

    const frame = window.requestAnimationFrame(() => {
      const element = document.getElementById(location.hash.slice(1));
      if (!element) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'center' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [isHomeRoute, location.hash]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (!isHomeRoute) {
      navigate(`/${href}`);
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'center' });
    window.history.replaceState(null, '', href);
  };

  const renderNavLink = (item: NavItem) => {
    const isActive = isHomeRoute && activeSection === item.id;

    return (
      <a
        key={item.id}
        href={isHomeRoute ? item.href : `/${item.href}`}
        aria-current={isActive ? 'page' : undefined}
        onClick={(e) => handleNavClick(e, item.href)}
        className={`site-side-link ${
          isActive
            ? 'is-active'
            : ''
        }`}
      >
        <span className="site-side-icon" aria-hidden="true">
          {item.icon}
        </span>
        <span className="truncate">{item.label}</span>
      </a>
    );
  };

  return (
    <aside className="site-side-rail" aria-label="Portfolio sections">
      <div className="site-side-meta" aria-hidden="true">
        <span>~/sections</span>
        <span>{navItems.length} files</span>
      </div>

      <nav className="site-side-nav" aria-label="Portfolio sections">
        {navItems.map(renderNavLink)}
      </nav>

      <div className="site-side-tail" aria-hidden="true">
        <span />
        <span />
      </div>
    </aside>
  );
};

export default TerminalNav;
