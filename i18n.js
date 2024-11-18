import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common_en from './public/locales/en/common.json';
import common_bn from './public/locales/bn/common.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { common: common_en },
    bn: { common: common_bn },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
