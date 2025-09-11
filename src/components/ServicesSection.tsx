import React from 'react';
import { useTranslation } from 'react-i18next';
import { Wrench } from 'lucide-react';
import './ServicesSection.css';

const ServiceItem = ({ text }: { text: string }) => {
  return (
    <li className="group relative flex cursor-pointer flex-row items-center gap-2 rounded-xl bg-background/90 px-5 py-2 transition hover:bg-background/70">
      <h1 className="font-black text-primary">{text}</h1>
    </li>
  );
};

const ServicesSection = () => {
  const { t } = useTranslation();
  const services = [
    t('services.web_development'),
    t('services.web_design'),
    t('services.seo_optimization'),
    t('services.hosting_guide'),
    t('services.web_security'),
    t('services.website_rework')
  ];

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm relative">
      <div className="flex flex-col space-y-1.5 p-4">
        <h3 className="text-xl font-semibold leading-none tracking-tight flex flex-row items-center gap-1">
          <Wrench className="size-6 text-primary" fill="currentColor" />
          {t('services.title')}
        </h3>
        <p className="text-sm text-muted-foreground">{t('services.description')}</p>
      </div>
      <div className="p-4 pt-0">
        <div className="group mx-auto max-w-full items-center justify-center">
          {/* First row - scrolling right */}
          <div className="scroller relative z-20 max-w-full overflow-hidden" style={{ '--animation-direction': 'forwards', '--animation-duration': '30s' } as React.CSSProperties}>
            <ul className="flex min-w-full shrink-0 gap-4 py-3 w-max flex-nowrap animate-scroll">
              {services.map((service, index) => (
                <ServiceItem key={index} text={service} />
              ))}
              {services.map((service, index) => (
                <ServiceItem key={`dup-${index}`} text={service} />
              ))}
              {services.map((service, index) => (
                <ServiceItem key={`dup2-${index}`} text={service} />
              ))}
              {services.map((service, index) => (
                <ServiceItem key={`dup3-${index}`} text={service} />
              ))}
            </ul>
          </div>
          {/* Second row - scrolling left */}
          <div className="scroller relative z-20 max-w-full overflow-hidden" style={{ '--animation-direction': 'reverse', '--animation-duration': '40s' } as React.CSSProperties}>
            <ul className="flex min-w-full shrink-0 gap-4 py-3 w-max flex-nowrap animate-scroll">
              {[...services].reverse().map((service, index) => (
                <ServiceItem key={index} text={service} />
              ))}
              {[...services].reverse().map((service, index) => (
                <ServiceItem key={`dup-${index}`} text={service} />
              ))}
              {[...services].reverse().map((service, index) => (
                <ServiceItem key={`dup2-${index}`} text={service} />
              ))}
              {[...services].reverse().map((service, index) => (
                <ServiceItem key={`dup3-${index}`} text={service} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
