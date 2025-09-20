import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Server } from 'lucide-react';

type TabKey = 'frontend' | 'backend' | 'hosting';

type StackHighlight = {
  label: string;
  description: string;
};

const TechStackSection = () => {
  const { t } = useTranslation();
  const [tab, setTab] = useState<TabKey>('frontend');

  const data = useMemo(() => ({
    frontend: {
      icon: Code,
      title: t('services.tech_stack.frontend.title'),
      highlights: [
        { label: t('services.tech_stack.frontend.react'), description: t('services.tech_stack.frontend.react_desc') },
        { label: t('services.tech_stack.frontend.styling'), description: t('services.tech_stack.frontend.styling_desc') },
        { label: t('services.tech_stack.frontend.performance'), description: t('services.tech_stack.frontend.performance_desc') }
      ] as StackHighlight[],
      sample: [
        '// example React component',
        'function Hero() {',
        '  return <section className="py-16">...</section>;',
        '}'
      ].join('\n')
    },
    backend: {
      icon: Database,
      title: t('services.tech_stack.backend.title'),
      highlights: [
        { label: t('services.tech_stack.backend.supabase'), description: t('services.tech_stack.backend.supabase_desc') },
        { label: t('services.tech_stack.backend.features'), description: t('services.tech_stack.backend.benefits') }
      ] as StackHighlight[],
      sample: [
        "const { data, error } = await supabase",
        "  .from('pages')",
        "  .select('*')",
        "  .eq('status', 'published');"
      ].join('\n')
    },
    hosting: {
      icon: Server,
      title: t('services.tech_stack.hosting.title'),
      highlights: [
        { label: t('services.tech_stack.hosting.netlify'), description: t('services.tech_stack.hosting.netlify_desc') },
        { label: t('services.tech_stack.hosting.features'), description: t('services.tech_stack.hosting.features') }
      ] as StackHighlight[],
      sample: [
        '# Deploy pipeline',
        'git push origin main',
        '# CI builds & deploys',
        'vercel --prod'
      ].join('\n')
    }
  }), [t]);

  return (
    <section className="py-20" id="tech-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">{t('services.tech_stack.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('services.tech_stack.subtitle')}</p>
        </div>
        <Tabs value={tab} onValueChange={(value) => setTab(value as TabKey)} className="space-y-8">
          <TabsList className="h-auto flex flex-wrap justify-center gap-2 rounded-full bg-muted/40 p-1">
            {(['frontend', 'backend', 'hosting'] as TabKey[]).map((key) => (
              <TabsTrigger key={key} value={key} className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground data-[state=active]:bg-accent data-[state=active]:text-accent-foreground data-[state=active]:shadow-sm">
                {data[key].title}
              </TabsTrigger>
            ))}
          </TabsList>
          {(['frontend', 'backend', 'hosting'] as TabKey[]).map((key) => {
            const { icon: Icon, title, highlights, sample } = data[key];
            return (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="grid lg:grid-cols-[2fr,1fr] gap-8">
                  <Card className="border-border/60">
                    <CardHeader className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-primary" />
                      <CardTitle className="text-xl">{title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm text-muted-foreground">
                      {highlights.map((item) => (
                        <div key={item.label} className="border border-border/50 rounded-lg p-4">
                          <p className="font-semibold text-foreground mb-1">{item.label}</p>
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                  <Card className="border-border/60 bg-muted/40">
                    <CardHeader>
                      <CardTitle className="text-sm font-semibold flex items-center gap-2">
                        <Badge variant="secondary">Workflow</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <code className="text-xs text-muted-foreground whitespace-pre-wrap break-words block">
                        {sample}
                      </code>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default TechStackSection;
