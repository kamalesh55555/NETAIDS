import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../locales/en/translation.json';
import taTranslation from '../locales/ta/translation.json';
import cyTranslation from '../locales/cy/translation.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  ta: {
    translation: taTranslation,
  },
  cy: {
    translation: cyTranslation,
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
