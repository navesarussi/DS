import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";
import {
  LANGUAGE_INIT_SCRIPT,
  LanguageProvider,
} from "@/lib/i18n/language-context";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
});

export const metadata: Metadata = {
  title: "ScaleDigital | פתרונות דיגיטליים לעסקים",
  description:
    "ScaleDigital מלווה עסקים קטנים ובינוניים לבניית נוכחות דיגיטלית, נוכחות בגוגל מפות, אתרים, צ׳אטבוטים ועוזרים אישיים חכמים - כדי להביא יותר לקוחות ולהגדיל הכנסות.",
  openGraph: {
    title: "ScaleDigital | פתרונות דיגיטליים לעסקים",
    description:
      "בונים לעסק שלכם נוכחות דיגיטלית שמביאה לקוחות: גוגל מפות, אתרים, צ׳אטבוטים ועוזרים אישיים חכמים.",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      suppressHydrationWarning
      className={`${heebo.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: LANGUAGE_INIT_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
