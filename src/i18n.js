import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./locales/english.json";
import translationNEP from "./locales/nepali.json";

const value = localStorage.getItem("language");

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: value === "nep" ? translationNEP : translationEN,
            },
        },
        fallbackLng: value || "en",
        debug: true,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
