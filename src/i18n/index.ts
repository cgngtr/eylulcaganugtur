import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enTranslation from './locales/en.json';
import trTranslation from './locales/tr.json';

// Get saved language from localStorage or use browser language or default to English
const savedLanguage = localStorage.getItem('language');
const browserLanguage = navigator.language.startsWith('tr') ? 'tr' : 'en';
const defaultLanguage = savedLanguage || browserLanguage || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      tr: {
        translation: trTranslation
      }
    },
    lng: defaultLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // React already escapes by default
    }
  });

export default i18n;