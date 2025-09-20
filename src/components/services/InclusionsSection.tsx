import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Button } from '@/components/ui/button';
import { Plus, Check, Lightbulb } from 'lucide-react';

const InclusionsSection = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<'all' | 'included' | 'responsibilities' | 'extras'>('all');

  const included = t('services.whats_included.included.services', { returnObjects: true }) as string[];
  const responsibilities = t('services.whats_included.client_responsibilities', { returnObjects: true }) as Record<string, string>;
  const extras = t('services.whats_included.third_party.services', { returnObjects: true }) as string[];
  const extrasHint = t('services.whats_included.extras_hint');

  const items = useMemo(() => {
    const all = [
      ...included.map((item) => ({ item, type: 'included' as const })),
      ...Object.values(responsibilities).map((item) => ({ item, type: 'responsibility' as const })),
      ...extras.map((item) => ({ item, type: 'extra' as const }))
    ];
    if (filter === 'all') return all;
    return all.filter((entry) =>
      (filter === 'included' && entry.type === 'included') ||
      (filter === 'responsibilities' && entry.type === 'responsibility') ||
      (filter === 'extras' && entry.type === 'extra')
    );
  }, [included, responsibilities, extras, filter]);

  return (
    <section className="py-20 bg-muted/20" id="inclusions-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">{t('services.whats_included.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('services.whats_included.subtitle')}</p>
        </div>
        <div className="flex justify-center">
          <ToggleGroup
            type="single"
            value={filter}
            onValueChange={(value) => value && setFilter(value as typeof filter)}
            className="bg-background border border-border/60 rounded-full p-1"
          >
            <ToggleGroupItem value="all" className="px-4 py-2 rounded-full text-sm">All</ToggleGroupItem>
            <ToggleGroupItem value="included" className="px-4 py-2 rounded-full text-sm">Included</ToggleGroupItem>
            <ToggleGroupItem value="responsibilities" className="px-4 py-2 rounded-full text-sm">Your role</ToggleGroupItem>
            <ToggleGroupItem value="extras" className="px-4 py-2 rounded-full text-sm">Optional extras</ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((entry) => (
            <Card key={`${entry.type}-${entry.item}`} className="border-border/60">
              <CardContent className="py-5 px-6 flex items-start gap-3 text-sm">
                <span className={`mt-1 w-6 h-6 flex items-center justify-center rounded-md text-xs font-semibold ${
                  entry.type === 'included'
                    ? 'bg-green-500/10 text-green-500'
                    : entry.type === 'responsibility'
                    ? 'bg-blue-500/10 text-blue-500'
                    : 'bg-orange-500/10 text-orange-500'
                }`}>
                  {entry.type === 'included' ? <Check className="w-3 h-3" /> : entry.type === 'responsibility' ? '•' : <Plus className="w-3 h-3" />}
                </span>
                <span>{entry.item}</span>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="border-dashed border-primary/40 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm uppercase tracking-wide text-primary">
              <Lightbulb className="w-4 h-4" />
              Need a recommendation?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="max-w-2xl">{extrasHint}</p>
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10" onClick={() => setFilter('extras')}>
              Show extras
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default InclusionsSection;
