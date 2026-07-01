"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { type Locale, dictionaries } from "./dictionaries";

const STORAGE_KEY = "sd-lang";
const DEFAULT_LOCALE: Locale = "he";

type LanguageContextValue = {
  locale: Locale;
  dict: (typeof dictionaries)[Locale];
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LANGUAGE_INIT_SCRIPT = `(function() {
  try {
    var lang = localStorage.getItem("${STORAGE_KEY}");
    if (lang === "en" || lang === "he") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
    }
  } catch (e) {}
})();`;

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    // One-time sync from localStorage, an external system unavailable during SSR.
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "he") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocaleState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = dictionaries[locale].htmlLang;
    document.documentElement.dir = dictionaries[locale].dir;
  }, [locale]);

  const setLocale = (next: Locale) => {
    window.localStorage.setItem(STORAGE_KEY, next);
    setLocaleState(next);
  };

  const toggleLocale = () => setLocale(locale === "he" ? "en" : "he");

  return (
    <LanguageContext.Provider
      value={{ locale, dict: dictionaries[locale], setLocale, toggleLocale }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
