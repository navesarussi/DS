import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Heebo } from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "@/lib/i18n/language-context";
import { dictionaries, locales, type Locale } from "@/lib/i18n/dictionaries";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
});

const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  he: "he_IL",
  fr: "fr_FR",
};

function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = dictionaries[locale];

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: OG_LOCALE[locale],
      type: "website",
    },
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = dictionaries[locale];

  return (
    <html
      lang={dict.htmlLang}
      dir={dict.dir}
      className={`${heebo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <LanguageProvider locale={locale}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
