import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

const FEATURE_KEYS = [
  'functional_website',
  'pages',
  'design',
  'mobile',
  'cms',
  'content_upload',
  'optimization',
  'hosting_setup',
  'integrations',
  'ecommerce',
  'payment'
] as const;

const TIER_ORDER = ['basic', 'standard', 'premium'] as const;

type TierKey = typeof TIER_ORDER[number];
type FeatureKey = typeof FEATURE_KEYS[number];

type TierFeature = {
  key: FeatureKey;
  label: string;
  available: boolean;
};

const UNAVAILABLE_FEATURES: Partial<Record<TierKey, FeatureKey[]>> = {
  basic: ['ecommerce', 'payment']
};

const PricingSection = ({ onGetStarted }: { onGetStarted: () => void }) => {
  const { t } = useTranslation();

  const tiers = useMemo(
    () =>
      TIER_ORDER.map((tier) => {
        const features = FEATURE_KEYS.map((key) => {
          const label = t(`services.pricing.${tier}.features.${key}`, { defaultValue: '' });
          if (!label) {
            return null;
          }

          const unavailable = UNAVAILABLE_FEATURES[tier]?.includes(key);

          return {
            key,
            label,
            available: !unavailable
          } satisfies TierFeature;
        }).filter(Boolean) as TierFeature[];

        return {
          id: tier,
          name: t(`services.pricing.${tier}.name`),
          subtitle: t(`services.pricing.${tier}.subtitle`),
          price: t(`services.pricing.${tier}.price`),
          description: t(`services.pricing.${tier}.description`),
          delivery: t(`services.pricing.${tier}.delivery`),
          revisions: t(`services.pricing.${tier}.revisions`),
          cta: t(`services.pricing.${tier}.cta`),
          badge: tier === 'standard' ? t('services.pricing.standard.badge', { defaultValue: 'Most Popular' }) : null,
          features
        };
      }),
    [t]
  );

  const cardClassName: Record<TierKey, string> = {
    basic: 'pricing-card pricing-card-basic h-full flex flex-col',
    standard: 'pricing-card pricing-card-standard h-full flex flex-col',
    premium: 'pricing-card pricing-card-premium h-full flex flex-col'
  };

  const buttonVariant: Record<TierKey, 'default' | 'outline'> = {
    basic: 'outline',
    standard: 'outline',
    premium: 'default'
  };

  return (
    <section id="pricing-section" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('services.pricing.title')}</h2>
          <p className="text-muted-foreground">{t('services.pricing.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start lg:px-8">
          {tiers.map((tier) => (
            <Card key={tier.id} className={cardClassName[tier.id]}>
              <CardHeader className="text-center relative flex-shrink-0">
                <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                <CardDescription className="text-base mb-4">{tier.subtitle}</CardDescription>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                </div>
                <div className="space-y-1 text-sm text-muted-foreground mb-4">
                  <p>{tier.delivery}</p>
                  <p>{tier.revisions}</p>
                </div>
                {tier.badge ? (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground border-none">
                    {tier.badge}
                  </Badge>
                ) : null}
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col flex-grow">
                <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                <div className="space-y-3 flex-grow">
                  {tier.features.map((feature) => (
                    <div key={feature.key} className="flex items-center justify-between text-sm">
                      <span>{feature.label}</span>
                      {feature.available ? (
                        <Check className="w-4 h-4 feature-check" />
                      ) : (
                        <X className="w-4 h-4 feature-cross" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-auto pt-6">
                  <Button onClick={onGetStarted} className="w-full" variant={buttonVariant[tier.id]}>
                    {tier.cta}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
