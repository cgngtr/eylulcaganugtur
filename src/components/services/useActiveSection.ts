import { useEffect, useRef, useState } from 'react';

export const SECTION_IDS = [
  'hero-section',
  'pricing-section',
  'process-section',
  'tech-section',
  'payment-section',
  'timeline-section',
  'inclusions-section',
  'post-launch-section',
  'faq-section'
] as const;

export type SectionId = typeof SECTION_IDS[number];

const VIEWPORT_OFFSET_RATIO = 0.3;

const useActiveSection = (ids: SectionId[]) => {
  const [active, setActive] = useState<SectionId>('hero-section');
  const activeRef = useRef<SectionId>('hero-section');

  useEffect(() => {
    if (!ids.length || typeof window === 'undefined') {
      return;
    }

    const resolveSections = () =>
      ids
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => Boolean(el))
        .sort((a, b) => a.offsetTop - b.offsetTop);

    let sections = resolveSections();
    let frame = 0;

    const updateActiveSection = () => {
      if (!sections.length) {
        return;
      }

      const scrollPosition = window.scrollY + window.innerHeight * VIEWPORT_OFFSET_RATIO;
      let nextActive = sections[0].id as SectionId;

      for (const section of sections) {
        if (scrollPosition >= section.offsetTop) {
          nextActive = section.id as SectionId;
        } else {
          break;
        }
      }

      if (activeRef.current !== nextActive) {
        activeRef.current = nextActive;
        setActive(nextActive);
      }
    };

    const requestUpdate = () => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateActiveSection();
      });
    };

    const handleResize = () => {
      sections = resolveSections();
      requestUpdate();
    };

    updateActiveSection();

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', handleResize);
    };
  }, [ids.join('|')]);

  return active;
};

export default useActiveSection;
