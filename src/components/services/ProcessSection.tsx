import { useState, useMemo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Workflow, Target, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type StepKey = 'consultation' | 'planning' | 'development' | 'testing';

const ICONS: Record<StepKey, typeof Code> = {
  consultation: Code,
  planning: Workflow,
  development: Target,
  testing: Shield
};

const ProcessSection = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState<StepKey>('consultation');

  const steps = useMemo(() => (
    ['consultation', 'planning', 'development', 'testing'] as StepKey[]
  ).map((key) => ({
    key,
    title: t(`services.process.${key}`),
    description: t(`services.process.${key}_desc`),
    deliverables: Array.isArray(t(`services.project_timeline.phases.${key}.deliverables`, { returnObjects: true }))
      ? (t(`services.project_timeline.phases.${key}.deliverables`, { returnObjects: true }) as string[])
      : []
  })), [t]);

  return (
    <section className="py-20 bg-muted/20" id="process-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">{t('services.process.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('services.process.description')}</p>
        </div>
        <Tabs value={active} onValueChange={(value) => setActive(value as StepKey)} className="space-y-8">
          <TabsList className="h-auto flex flex-wrap justify-center gap-2 rounded-full bg-muted/40 p-1">
            {steps.map(({ key, title }) => (
              <TabsTrigger key={key} value={key} className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-sm">
                {title}
              </TabsTrigger>
            ))}
          </TabsList>
          {steps.map(({ key, title, description, deliverables }) => {
            const Icon = ICONS[key];
            return (
              <TabsContent key={key} value={key} className="mt-0">
                <Card className="border-border/60">
                  <div className="flex flex-col items-center gap-3 px-4 py-4 text-center sm:flex-row sm:items-center sm:gap-4 sm:px-6 sm:py-6">
                    <Icon className="w-6 h-6 text-primary sm:self-start" />
                    <div className="flex flex-1 flex-col items-center text-center sm:items-start sm:text-left">
                      <Badge variant="outline" className="mb-2 mx-auto sm:mx-0">
                        {title}
                      </Badge>
                      <CardTitle className="text-xl">{title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">{description}</CardDescription>
                    </div>
                  </div>
                  {deliverables.length ? (
                    <ul className="px-4 pb-4 sm:px-6 sm:pb-6 space-y-2 text-sm text-muted-foreground">
                      {deliverables.map((item) => (
                        <li key={item} className="flex items-center justify-center gap-2 text-center sm:justify-start sm:text-left">
                          <Code className="w-4 h-4 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default ProcessSection;






