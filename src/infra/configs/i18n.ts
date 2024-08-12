// import i18n from "i18next";
// import Backend from "i18next-http-backend";
// import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
// import themeConfig from "./themeConfig";

// const defaultLang = themeConfig.defaultLanguage;

// i18n
//   .use(Backend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     //lng: defaultLang,
//     backend: {
//       loadPath: "/locales/{{lng}}.json",
//     },
//     // fallbackLng: defaultLang,
//     //keySeparator: false,
//     react: {
//       useSuspense: false,
//     },
//     interpolation: {
//       escapeValue: false,
//       formatSeparator: ",",
//     },
//   });

// export default i18n;

import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import themeConfig from "./themeConfig";

const defaultLang = themeConfig.defaultLanguage;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    //lng: defaultLang,
    backend: {
      loadPath: "/locales/{{lng}}.json",
    },
    fallbackLng: defaultLang,
    //keySeparator: false,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    detection: {
      caches: [],
    },
  });

export function getUserLanguage() {
  const defaultList = ["en", "kr", "ja"];
  const language = (
    navigator.languages && navigator.languages.length
      ? navigator.language.slice(0, 2) === "ko"
        ? "kr"
        : navigator.language
      : navigator.languages[0].slice(0, 2) === "ko"
      ? "kr"
      : navigator.languages[0]
  ).slice(0, 2);
  return !defaultList.includes(language) ? defaultList[0] : language;
}

export default i18n;
