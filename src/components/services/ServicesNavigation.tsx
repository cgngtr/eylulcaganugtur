import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { SECTION_IDS, SectionId } from './useActiveSection';
import { MapPinned, DollarSign, Workflow, Cpu, Wallet, CalendarDays, ListChecks, LifeBuoy, HelpCircle } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

type ServicesNavigationProps = {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
};

const ICON_MAP: Record<SectionId, React.ComponentType<{ className?: string }>> = {
  'hero-section': MapPinned,
  'pricing-section': DollarSign,
  'process-section': Workflow,
  'tech-section': Cpu,
  'payment-section': Wallet,
  'timeline-section': CalendarDays,
  'inclusions-section': ListChecks,
  'post-launch-section': LifeBuoy,
  'faq-section': HelpCircle,
};

const ServicesNavigation = ({ activeSection, onNavigate }: ServicesNavigationProps) => {
  const { t } = useTranslation();
  const items = useMemo(() => {
    const nav = t('services.nav', { returnObjects: true }) as Record<string, string>;
    return SECTION_IDS.map((id) => ({ id, label: nav[getNavKey(id)] ?? '' }));
  }, [t]);

  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      return undefined;
    }

    const sentinel = sentinelRef.current;
    if (!sentinel) {
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsSticky(!entry.isIntersecting);
    });

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      setIsSticky(false);
    };
  }, []);

  return (
    <>
      <div ref={sentinelRef} aria-hidden className="h-px opacity-0" />
      <nav className="sticky top-0 z-40 bg-background/90 backdrop-blur border-b border-border hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center justify-center gap-3">
            {items.map(({ id, label }) => {
              const Icon = ICON_MAP[id];
              const isActive = id === activeSection;
              return (
                <Button
                  key={id}
                  variant={isActive ? 'default' : 'ghost'}
                  className={`rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2 transition ${
                    isActive ? 'shadow bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}
                  onClick={() => onNavigate(id)}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Button>
              );
            })}
          </div>
          {isSticky ? (
            <div className="ml-auto">
              <LanguageSwitcher />
            </div>
          ) : null}
        </div>
      </nav>
    </>
  );
};

const getNavKey = (id: SectionId) => {
  switch (id) {
    case 'hero-section':
      return 'hero';
    case 'pricing-section':
      return 'pricing';
    case 'process-section':
      return 'process';
    case 'tech-section':
      return 'tech';
    case 'payment-section':
      return 'payment';
    case 'timeline-section':
      return 'timeline';
    case 'inclusions-section':
      return 'inclusions';
    case 'post-launch-section':
      return 'post_launch';
    case 'faq-section':
      return 'faq';
    default:
      return 'hero';
  }
};

export default ServicesNavigation;

