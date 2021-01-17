import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/translation.json';
import ms from './ms/translation.json';

// the translations
const resources = {
    en: {
      translation: en
    },
    ms: {
      translation: ms
    }
  };

  // init
i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    resources
});

export default i18n;
