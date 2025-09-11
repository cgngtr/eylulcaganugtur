import React from 'react';
import { useTranslation } from 'react-i18next';

interface TechItemProps {
  icon: React.ReactNode;
  name: string;
  version?: string;
  url: string;
}

const TechItem = ({ icon, name, version, url }: TechItemProps) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="group relative flex cursor-pointer flex-row items-center gap-2 rounded-2xl bg-background/90 p-2 transition hover:bg-background/70">
      <div className="flex flex-row items-center gap-1 rounded-xl border border-secondary bg-secondary/50 p-2">
        {icon}
      </div>
      <div className="flex flex-col items-start gap-1">
        <h2 className="font-semibold text-neutral-300">{name}</h2>
        {version && <p className="text-left text-[0.7rem] font-semibold text-muted-foreground lg:text-xs">{version}</p>}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className="iconify iconify--eva absolute right-2 size-6 text-primary transition duration-300 group-hover:scale-110" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="currentColor" d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1"></path>
        <path fill="currentColor" d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2"></path>
      </svg>
    </a>
  );
};

const TechStackSection = () => {
  const { t } = useTranslation();
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm relative">
      <div className="flex flex-col space-y-1.5 p-4">
        <h2 className="text-xl font-semibold leading-none tracking-tight flex flex-row items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="iconify iconify--fa6-solid size-6 text-primary" width="1.13em" height="1em" viewBox="0 0 576 512">
            <path fill="currentColor" d="M248 0h-40c-26.5 0-48 21.5-48 48v112c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64V48c0-26.5-21.5-48-48-48h-40v80c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16zM64 256c-35.3 0-64 28.7-64 64v128c0 35.3 28.7 64 64 64h160c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64h-40v80c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-80zm288 256h160c35.3 0 64-28.7 64-64V320c0-35.3-28.7-64-64-64h-40v80c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16v-80h-40c-15 0-28.8 5.1-39.7 13.8c4.9 10.4 7.7 22 7.7 34.2v160c0 12.2-2.8 23.8-7.7 34.2C323.2 506.9 337 512 352 512"></path>
          </svg>
          {t('tech_stack.title')}
        </h2>
        <p className="text-sm text-muted-foreground">{t('tech_stack.subtitle')}</p>
      </div>
      <div className="p-4 pt-0">
        <div className="grid grid-cols-1 gap-2 max-md:w-full 2xl:grid-cols-2">
          <TechItem 
            icon={
              <img src="/icons/react.svg" alt="React" className="size-6" />
            }
            name="React"
            version="18.2.0"
            url="https://react.dev"
          />
          <TechItem 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-[#3178C6]" viewBox="0 0 24 24">
                <path fill="currentColor" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361a5.093 5.093 0 0 0-.717-.26a5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529c.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416c.47.197.892.407 1.266.628c.374.222.695.473.963.753c.268.279.472.598.614.957c.142.359.214.776.214 1.253c0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085a4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164a5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09c.249-.06.456-.144.623-.25c.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089a2.12 2.12 0 0 0-.537-.5a5.597 5.597 0 0 0-.807-.444a27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405c-.45-.553-.676-1.222-.676-2.005c0-.614.123-1.141.369-1.582c.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629a7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path>
              </svg>
            }
            name="TypeScript"
            version="5.0.4"
            url="https://www.typescriptlang.org"
          />
          <TechItem 
            icon={
              <img src="/icons/tailwindcss.svg" alt="Tailwind CSS" className="size-6" />
            }
            name="Tailwind CSS"
            version="3.3.3"
            url="https://tailwindcss.com"
          />
          <TechItem 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-[#F7DF1E]" viewBox="0 0 24 24">
                <path fill="currentColor" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873c-.736-.345-1.554-.585-1.797-1.14c-.091-.33-.105-.51-.046-.705c.15-.646.915-.84 1.515-.66c.39.12.75.42.976.9c1.034-.676 1.034-.676 1.755-1.125c-.27-.42-.404-.601-.586-.78c-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005c-1.14 1.291-.811 3.541.569 4.471c1.365 1.02 3.361 1.244 3.616 2.205c.24 1.17-.87 1.545-1.966 1.41c-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109c1.74 1.756 6.09 1.666 6.871-1.004c.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805c0 1.232.063 2.363-.138 2.711c-.33.689-1.18.601-1.566.48c-.396-.196-.597-.466-.83-.855c-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517c.855.51 2.004.675 3.207.405c.783-.226 1.458-.691 1.811-1.411c.51-.93.402-2.07.397-3.346c.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
              </svg>
            }
            name="JavaScript"
            version="ES2022"
            url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          />
          <TechItem 
            icon={
              <img src="/icons/nextjs.svg" alt="Next.js" className="size-6" />
            }
            name="Next.js"
            version="14.0.0"
            url="https://nextjs.org"
          />
          <TechItem 
            icon={
              <img src="/icons/shadcn.svg" alt="Shadcn UI" className="size-6" />
            }
            name="Shadcn UI"
            version="0.5.0"
            url="https://ui.shadcn.com"
          />
        </div>
      </div>
    </div>
  );
};

export default TechStackSection;
