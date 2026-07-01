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
  title: "ScaleDigital | Digital Presence That Brings Customers",
  description:
    "We build digital presence that brings customers for small and medium businesses — Google Maps visibility, fast websites, chatbots, and AI assistants. Founded by two software engineers.",
  openGraph: {
    title: "ScaleDigital | Digital Presence That Brings Customers",
    description:
      "We build digital presence that brings customers for small and medium businesses — Google Maps visibility, fast websites, chatbots, and AI assistants.",
    locale: "en_US",
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
      lang="en"
      dir="ltr"
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
