import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/english.json";
import translationNEP from "./locales/nepali.json";

// Get saved language from localStorage or fallback to English
const savedLanguage = localStorage.getItem("language") || "en";

i18n
  .use(LanguageDetector) // Detect language based on browser settings, localStorage, etc.
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN, // English translations
      },
      nep: {
        translation: translationNEP, // Nepali translations
      },
    },
    lng: savedLanguage, // Default language based on localStorage
    fallbackLng: "en", // Fallback to English if a translation is missing
    debug: true, // Enable debug logs
    interpolation: {
      escapeValue: false, // React already escapes values to prevent XSS
    },
  });

export default i18n;
