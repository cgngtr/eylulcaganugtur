import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BadgeCheck, CheckCircle } from 'lucide-react';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

type ServicesHeroProps = {
  onGetStarted: () => void;
  onExplore: () => void;
};

const ServicesHero = ({ onGetStarted, onExplore }: ServicesHeroProps) => {
  const { t } = useTranslation();
  const highlights = useMemo(() => t('services.hero_highlights', { returnObjects: true }) as string[], [t]);

  return (
    <section className="relative overflow-hidden" id="hero-section">
      <div className="absolute top-4 right-4 hidden lg:block">
        <LanguageSwitcher />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-8">
        <div className="text-center space-y-6">
          <Badge variant="secondary" className="mb-2">
            {t('services.title')}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            {t('services.hero_title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('services.hero_description')}
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
            <TrustBadge translationKey="services.hero_enhanced.trust_points.experience" />
            <TrustBadge translationKey="services.hero_enhanced.trust_points.projects" />
            <TrustBadge translationKey="services.hero_enhanced.trust_points.satisfaction" />
          </div>
        </div>

        <div className="max-w-3xl mx-auto grid gap-3 text-sm">
          {highlights.map((item) => (
            <div key={item} className="flex items-center gap-2 bg-background/70 border border-border/50 rounded-xl px-4 py-2">
              <BadgeCheck className="w-4 h-4 text-primary" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8" onClick={onGetStarted}>
            {t('services.cta_button')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8" onClick={onExplore}>
            {t('services.hero_secondary_cta', { defaultValue: 'Explore services overview' })}
          </Button>
        </div>
      </div>
    </section>
  );
};

const TrustBadge = ({ translationKey }: { translationKey: string }) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2">
      <CheckCircle className="w-4 h-4 text-green-500" />
      {t(translationKey)}
    </div>
  );
};

export default ServicesHero;
