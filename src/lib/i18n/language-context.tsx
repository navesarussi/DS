"use client";

import { createContext, useContext } from "react";
import { useRouter } from "next/navigation";
import { type Locale, dictionaries } from "./dictionaries";

const COOKIE_NAME = "sd-lang";

type LanguageContextValue = {
  locale: Locale;
  dict: (typeof dictionaries)[Locale];
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const router = useRouter();

  const setLocale = (next: Locale) => {
    if (next === locale) return;
    // Remembered so a future visit to "/" lands back on this language.
    document.cookie = `${COOKIE_NAME}=${next}; path=/; max-age=31536000; samesite=lax`;
    router.push(`/${next}`);
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
