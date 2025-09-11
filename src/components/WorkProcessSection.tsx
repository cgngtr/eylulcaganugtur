import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Code2, FlaskConical, Rocket } from 'lucide-react';

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProcessStep = ({ number, title, description, icon }: ProcessStepProps) => {
  return (
    <div className="rounded-lg border text-card-foreground shadow-sm group h-fit overflow-hidden bg-background">
      <div className="relative flex flex-row gap-3 p-2.5 transition-all duration-300">
        <div className="flex-shrink-0 flex items-center justify-center rounded-lg bg-secondary/50 p-1 transition-all duration-300 group-hover:rounded-l md:group-hover:scale-150 md:group-hover:rounded-r-none">
          {icon}
        </div>
        <div className="flex flex-col gap-1 transition-all duration-300 md:group-hover:translate-x-3 min-h-[50px] flex-grow">
          <h1 className="font-bold">{title}</h1>
          <p className="text-sm font-semibold text-gray-400">{description}</p>
        </div>
        <div className="absolute right-2 top-2 rounded-xl bg-secondary p-1 font-black text-gray-400 transition duration-300 md:group-hover:-translate-y-10 md:group-hover:translate-x-10 md:group-hover:opacity-0">
          #{number}
        </div>
      </div>
    </div>
  );
};

const WorkProcessSection = () => {
  const { t } = useTranslation();
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm relative">
      <div className="flex flex-col space-y-1.5 p-4">
        <h3 className="text-xl font-semibold leading-none tracking-tight flex flex-row items-center gap-1">
          <Users className="size-6 text-primary" fill="currentColor" />
          {t('work_process.title')}
        </h3>
        <p className="text-sm text-muted-foreground">{t('work_process.description')}</p>
      </div>
      <div className="p-4 pt-0">
        <div className="grid grid-cols-1 gap-3">
          <ProcessStep
            number="1"
            title={t('work_process.project_brief')}
            description={t('work_process.project_brief_desc')}
            icon={<Users className="size-8 text-primary" fill="currentColor" />}
          />

          <ProcessStep
            number="2"
            title={t('work_process.design_develop')}
            description={t('work_process.design_develop_desc')}
            icon={<Code2 className="size-8 text-primary" fill="currentColor" />}
          />

          <ProcessStep
            number="3"
            title={t('work_process.testing_review')}
            description={t('work_process.testing_review_desc')}
            icon={<FlaskConical className="size-8 text-primary" fill="currentColor" />}
          />

          <ProcessStep
            number="4"
            title={t('work_process.launch')}
            description={t('work_process.launch_desc')}
            icon={<Rocket className="size-8 text-primary" fill="currentColor" />}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkProcessSection;
