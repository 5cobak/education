import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const i18nMain = i18next.createInstance();

i18nMain.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  debug: __IS_DEV__,
});

export default i18nMain;
