import  i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationFR from "./local/fr.json";
import translationAR from "./local/ar.json";

const resources = {
  fr: {
    translation:translationFR
  },
  ar: {
    translation: translationAR
  }
};

i18n
 
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources,
    lng: "fr", 

    interpolation: {
      escapeValue: false 
    },
    react: {
      useSuspense: false
    }
  });

  export default i18n;