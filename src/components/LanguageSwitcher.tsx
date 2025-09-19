import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const normalizeLanguage = (lang: string) => lang.split('-')[0];

  const languages = [
    { code: 'en', name: 'English', flag: String.fromCodePoint(0x1f1ec, 0x1f1e7) },
    { code: 'tr', name: 'Türkçe', flag: String.fromCodePoint(0x1f1f9, 0x1f1f7) },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === normalizeLanguage(i18n.language)) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    // Store language preference in localStorage
    localStorage.setItem('language', langCode);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 mt">
          <Globe className="h-4 w-4" />
          <span>{currentLanguage.flag} {currentLanguage.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={normalizeLanguage(i18n.language) === language.code ? 'bg-accent' : ''}
          >
            <span className="mr-2">{language.flag}</span>
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;