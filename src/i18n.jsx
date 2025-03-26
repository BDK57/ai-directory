import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend) // Load translations from the public folder
  .use(LanguageDetector) // Detect user's language
  .use(initReactI18next)
  .init({
    fallbackLng: "en", // Default language
    debug: true, // Enable debugging in console
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    backend: {
      loadPath: "../src/locales/{{lng}}.json", // Public folder, not src
    },
  });

// Normalize language to 'en' or 'ar' only
const normalizeLanguage = (lng) => {
  const lang = lng.split("-")[0]; // Convert 'en-GB' → 'en'
  return lang === "ar" ? "ar" : "en"; // Only allow 'en' or 'ar'
};

// Force i18next to use only 'en' or 'ar'
const userLanguage = localStorage.getItem("i18nextLng") || i18n.language;
i18n.changeLanguage(normalizeLanguage(userLanguage));

export default i18n;
