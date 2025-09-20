import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

interface FinalCtaSectionProps {
  onPrimary: () => void;
  onSecondary: () => void;
}

const FinalCtaSection = ({ onPrimary, onSecondary }: FinalCtaSectionProps) => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {t('services.cta_section.title')}
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          {t('services.cta_section.description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={onPrimary} size="lg" className="text-lg px-8">
            {t('services.cta_section.button')}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8"
            onClick={onSecondary}
          >
            {t('services.cta_section.contact_alt')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
