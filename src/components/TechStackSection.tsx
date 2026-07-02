import { useTranslation } from 'react-i18next';
import { Braces, Code2, Database, Layers, Palette, Smartphone } from 'lucide-react';

const techItems = [
  {
    name: 'React',
    role: 'UI',
    url: 'https://react.dev',
    icon: Layers,
  },
  {
    name: 'TypeScript',
    role: 'Language',
    url: 'https://www.typescriptlang.org',
    icon: Braces,
  },
  {
    name: 'Next.js',
    role: 'Full-stack React',
    url: 'https://nextjs.org',
    icon: Code2,
  },
  {
    name: 'React Native',
    role: 'Mobile apps',
    url: 'https://reactnative.dev',
    icon: Smartphone,
  },
  {
    name: 'Supabase',
    role: 'Backend/data',
    url: 'https://supabase.com',
    icon: Database,
  },
  {
    name: 'Tailwind CSS',
    role: 'Styling',
    url: 'https://tailwindcss.com',
    icon: Palette,
  },
];

const TechStackSection = () => {
  const { t } = useTranslation();

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm relative">
      <div className="flex flex-col space-y-1.5 p-4">
        <h2 className="text-xl font-semibold leading-none tracking-tight flex flex-row items-center gap-2">
          <Layers className="size-5 text-primary" />
          {t('tech_stack.title')}
        </h2>
        <p className="text-sm text-muted-foreground">{t('tech_stack.subtitle')}</p>
      </div>

      <div className="p-4 pt-0">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {techItems.map(({ name, role, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-border/70 bg-background/80 p-3 transition hover:border-primary/50 hover:bg-background"
            >
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-neutral-200">{name}</h3>
                <p className="text-xs font-medium text-muted-foreground">{role}</p>
              </div>
              <span className="ml-auto text-primary/70 transition group-hover:translate-x-0.5 group-hover:text-primary" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
