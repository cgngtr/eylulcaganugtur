import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Check, Clock, Sparkles } from 'lucide-react';

const PACKAGE_ORDER = ['basic', 'standard', 'premium'] as const;

type PackageKey = typeof PACKAGE_ORDER[number];

type Phase = {
  title: string;
  deliverables: string[];
  outcome: string;
};

type TimelineData = Record<string, Phase>;

type CommunicationBlock = {
  title: string;
  frequency: string;
  methods: string[];
  availability: string;
};

const DURATION_MAP: Record<PackageKey, number> = {
  basic: 18,
  standard: 24,
  premium: 35
};

const TimelineSection = () => {
  const { t } = useTranslation();
  const [selectedPackage, setSelectedPackage] = useState<PackageKey>('standard');

  const phases = useMemo(() => {
    const raw = t('services.project_timeline.phases', { returnObjects: true }) as TimelineData;
    return Object.entries(raw);
  }, [t]);

  const communication = t('services.project_timeline.communication', { returnObjects: true }) as CommunicationBlock;
  const packageSummary = t('services.project_timeline.package_summary', { returnObjects: true }) as Record<PackageKey, string>;

  const maxDuration = Math.max(...Object.values(DURATION_MAP));

  return (
    <section className="py-20" id="timeline-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-3 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold">{t('services.project_timeline.title')}</h2>
            <p className="text-muted-foreground">{t('services.project_timeline.subtitle')}</p>
            <p className="text-sm text-primary font-medium">
              {packageSummary?.[selectedPackage] ?? ''}
            </p>
          </div>
          <div className="flex flex-col items-start gap-3">
            <ToggleGroup
              type="single"
              className="bg-muted/40 rounded-full p-1"
              value={selectedPackage}
              onValueChange={(value) => value && setSelectedPackage(value as PackageKey)}
            >
              {PACKAGE_ORDER.map((tier) => (
                <ToggleGroupItem key={tier} value={tier} className="px-4 py-2 rounded-full text-sm">
                  {t(`services.pricing.${tier}.name`)}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
        </header>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-6">
            {phases.map(([key, phase], index) => (
              <Card key={key} className="border-border/60">
                <CardHeader className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <CardTitle className="text-lg">{phase.title}</CardTitle>
                    <span className="ml-auto text-xs uppercase text-muted-foreground">
                      {t(`services.pricing.${selectedPackage}.delivery`)}
                    </span>
                  </div>
                  <CardDescription>{phase.outcome}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  {phase.deliverables.map((deliverable) => (
                    <div key={deliverable} className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      {deliverable}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="lg:col-span-4 space-y-6">
            <Card className="border-primary/30 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  {communication.title}
                </CardTitle>
                <CardDescription>{communication.frequency}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <div className="text-4xl font-bold text-primary">
                    {DURATION_MAP[selectedPackage]} <span className="text-lg text-muted-foreground">days</span>
                  </div>
                  <Progress value={(DURATION_MAP[selectedPackage] / maxDuration) * 100} />
                </div>
                <Separator />
                <div className="space-y-2">
                  {(communication.methods as string[]).map((method) => (
                    <div key={method} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      {method}
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground">{communication.availability}</p>
              </CardContent>
            </Card>
            <Card className="border-border/60 bg-muted/30">
              <CardContent className="py-4 text-sm text-muted-foreground">
                {t('services.hero_enhanced.subtitle')}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;





