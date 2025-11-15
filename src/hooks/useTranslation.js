import { useLanguage } from "../contexts/LanguageContext";
import { translations as enTranslations } from "../translations/en";
import { translations as ruTranslations } from "../translations/ru";

const translations = {
  en: enTranslations,
  ru: ruTranslations,
};

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (path) => {
    const keys = path.split(".");
    let value = translations[language];

    for (const key of keys) {
      value = value?.[key];
      if (value === undefined) {
        console.warn(`Translation missing for path: ${path}`);
        return path;
      }
    }

    return value;
  };

  return { t, language };
};
