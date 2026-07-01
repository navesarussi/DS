"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { type Locale, dictionaries, locales } from "./dictionaries";

const STORAGE_KEY = "sd-lang";
const DEFAULT_LOCALE: Locale = "en";

function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as string[]).includes(value);
}

type LanguageContextValue = {
  locale: Locale;
  dict: (typeof dictionaries)[Locale];
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

// Runs before hydration to set <html lang/dir> from a previous choice, avoiding
// a flash of the default language. Only Hebrew is RTL.
export const LANGUAGE_INIT_SCRIPT = `(function() {
  try {
    var lang = localStorage.getItem("${STORAGE_KEY}");
    if (lang === "he" || lang === "en" || lang === "fr") {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
    }
  } catch (e) {}
})();`;

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    // One-time sync from localStorage, an external system unavailable during SSR.
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) {
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

  return (
    <LanguageContext.Provider
      value={{ locale, dict: dictionaries[locale], setLocale }}
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
