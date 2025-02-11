import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import en from "../utils/locales/en.json";
import fr from "../utils/locales/fr.json";

// import de from "../utils/de.json";
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    // es: { translation: es },
    // de: { translation: de },
  },
  lng: "en", // Default language
  fallbackLng: "en", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
