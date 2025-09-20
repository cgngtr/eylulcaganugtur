import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check, ShieldCheck, Users, Zap, Star, Globe } from 'lucide-react';

type Warranty = {
  title: string;
  duration: string;
  coverage: string[];
  exclusions: string[];
};

type Training = {
  title: string;
  session: string;
  topics: string[];
};

type Maintenance = {
  title: string;
  price: string;
  services: string[];
  response: string;
};

type Metric = {
  label: string;
  value: string;
};

type PostFaq = {
  question: string;
  answer: string;
};

const PostLaunchSection = () => {
  const { t } = useTranslation();

  const warranty = t('services.post_launch.warranty', { returnObjects: true }) as Warranty;
  const training = t('services.post_launch.training', { returnObjects: true }) as Training;
  const documentation = t('services.post_launch.documentation', { returnObjects: true }) as Record<string, string>;
  const maintenance = t('services.post_launch.maintenance', { returnObjects: true }) as Maintenance;
  const metrics = t('services.post_launch.metrics', { returnObjects: true }) as Metric[];
  const faq = t('services.post_launch.faq', { returnObjects: true }) as PostFaq[];

  return (
    <section className="py-20" id="post-launch-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">{t('services.post_launch.title')}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('services.post_launch.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="border-border/50">
            <CardHeader className="flex flex-col gap-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                {warranty.title}
              </CardTitle>
              <Badge variant="outline" className="w-fit">{warranty.duration}</Badge>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2 text-green-600">Covered</h4>
                <ul className="space-y-1">
                  {warranty.coverage.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-orange-600">Not covered</h4>
                <ul className="space-y-1">
                  {warranty.exclusions.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-orange-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="w-5 h-5" />
                {training.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="bg-primary/10 rounded-lg p-3 font-medium text-primary">{training.session}</div>
              <Accordion type="single" collapsible>
                {training.topics.map((topic, index) => (
                  <AccordionItem key={topic} value={`topic-${index}`}>
                    <AccordionTrigger className="text-sm">{topic}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm">
                      {t('services.post_launch.training.materials')}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="bg-muted/40 border border-border/60 rounded-lg p-3 text-xs text-muted-foreground">
                {Object.values(documentation).map((doc) => (
                  <div key={doc}>• {doc}</div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Globe className="w-5 h-5" />
                {maintenance.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="text-2xl font-bold text-primary">{maintenance.price}</div>
              <ul className="space-y-1">
                {maintenance.services.map((service) => (
                  <li key={service} className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    {service}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground">{maintenance.response}</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {metrics.map((metric) => (
            <Card key={metric.label} className="border-border/60">
              <CardContent className="py-6 text-center">
                <p className="text-sm text-muted-foreground">{metric.label}</p>
                <p className="text-3xl font-bold text-primary mt-2">{metric.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faq.map((item, index) => (
            <AccordionItem key={item.question} value={`post-faq-${index}`} className="border border-border/60 rounded-xl">
              <AccordionTrigger className="px-4 text-left text-base font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-sm text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default PostLaunchSection;
