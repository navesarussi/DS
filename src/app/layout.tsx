import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

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
    <html lang="he" dir="rtl" className={`${heebo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
