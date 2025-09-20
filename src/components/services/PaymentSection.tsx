import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, DollarSign, Info } from 'lucide-react';

const PaymentSection = () => {
  const { t } = useTranslation();
  const methods = t('services.payment_terms.payment_methods', { returnObjects: true }) as Record<string, string>;
  const contractTerms = t('services.payment_terms.contract_terms', { returnObjects: true }) as Record<string, string>;
  const visual = t('services.payment_terms.visual', { returnObjects: true }) as {
    title: string;
    subtitle: string;
    blocks: { key: string; label: string; percent: string; detail: string }[];
  };

  const total = useMemo(
    () => visual.blocks.reduce((sum, block) => sum + parseFloat(block.percent), 0) || 100,
    [visual.blocks]
  );

  return (
    <section className="py-20 bg-muted/20" id="payment-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <header className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">{t('services.payment_terms.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('services.payment_terms.subtitle')}</p>
        </header>

        <Card className="border-border/60">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-xl">{visual.title}</CardTitle>
            <p className="text-muted-foreground text-sm">{visual.subtitle}</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col gap-4">
              <div className="flex rounded-full overflow-hidden border border-primary/30">
                {visual.blocks.map((block) => (
                  <div
                    key={block.key}
                    className="bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide text-center py-3"
                    style={{ flex: parseFloat(block.percent) / total }}
                  >
                    {block.percent}%
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                {visual.blocks.map((block) => (
                  <div key={block.key} className="border border-border/60 rounded-xl p-4 space-y-1">
                    <p className="font-semibold text-foreground">{block.label}</p>
                    <p className="text-muted-foreground">{block.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                {t('services.payment_terms.payment_methods.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3 text-sm">
              {['bank_transfer', 'credit_card', 'crypto', 'wise'].map((key) => (
                <div key={key} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />
                  {methods[key]}
                </div>
              ))}
              <p className="col-span-2 text-xs text-muted-foreground">
                {t('services.payment_terms.payment_methods.note')}
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Info className="w-5 h-5" />
                {t('services.payment_terms.contract_terms.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              {Object.entries(contractTerms)
                .filter(([key]) => key !== 'title')
                .map(([key, term]) => (
                  <div key={key} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>{term}</span>
                  </div>
                ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
