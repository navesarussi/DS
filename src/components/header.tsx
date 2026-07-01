"use client";

import { useState } from "react";
import { Globe, Menu, MessageCircle, X } from "lucide-react";
import { siteConfig, whatsappHref } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n/language-context";

export function Header() {
  const [open, setOpen] = useState(false);
  const { locale, dict, toggleLocale } = useLanguage();

  const navLinks = [
    { href: "#about", label: dict.nav.about },
    { href: "#services", label: dict.nav.services },
    { href: "#portfolio", label: dict.nav.portfolio },
    { href: "#process", label: dict.nav.process },
    { href: "#contact", label: dict.nav.contact },
  ];

  const waHref = whatsappHref(dict.contact.whatsappMessage);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="text-xl font-extrabold text-brand-navy">
          {siteConfig.businessName}
          <span className="text-brand-blue-light">.</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleLocale}
            className="inline-flex items-center gap-1.5 rounded-full border border-brand-border px-3.5 py-2 text-sm font-semibold text-brand-navy transition hover:border-brand-blue hover:text-brand-blue"
            aria-label="Switch language"
          >
            <Globe className="h-4 w-4" />
            {locale === "he" ? "EN" : "עב"}
          </button>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-navy"
          >
            <MessageCircle className="h-4 w-4" />
            {dict.nav.cta}
          </a>
        </div>

        <button
          type="button"
          aria-label={dict.nav.menuLabel}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg border border-brand-border p-2 text-brand-navy md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-brand-border bg-white px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-medium text-slate-700"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                {dict.nav.cta}
              </a>
              <button
                type="button"
                onClick={toggleLocale}
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-border px-3.5 py-2.5 text-sm font-semibold text-brand-navy"
                aria-label="Switch language"
              >
                <Globe className="h-4 w-4" />
                {locale === "he" ? "EN" : "עב"}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
