import { useEffect, useState } from 'react';
import { DollarSign, ArrowRight } from 'lucide-react';
import type { SectionId } from './useActiveSection';

type FloatingCtaProps = {
  activeSection: SectionId;
  onGotoPricing: () => void;
  onConsult: () => void;
  pricingLabel: string;
  consultLabel: string;
};

const CONSULT_SECTIONS: SectionId[] = [
  'timeline-section',
  'inclusions-section',
  'post-launch-section',
  'faq-section'
];

const FloatingCta = ({ activeSection, onGotoPricing, onConsult, pricingLabel, consultLabel }: FloatingCtaProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 200);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  if (!visible) return null;

  const suggestConsult = CONSULT_SECTIONS.includes(activeSection);
  const label = suggestConsult ? consultLabel : pricingLabel;
  const action = suggestConsult ? onConsult : onGotoPricing;

  return (
    <button
      type="button"
      onClick={action}
      className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-3 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-105 flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
    >
      <DollarSign className="w-5 h-5" />
      <span className="font-medium hidden sm:inline">{label}</span>
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </button>
  );
};

export default FloatingCta;
