"use client";

import { useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { siteConfig, whatsappHref } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n/language-context";
import { LanguageSwitcher } from "@/components/language-switcher";

export function Header() {
  const [open, setOpen] = useState(false);
  const { dict } = useLanguage();

  const navLinks = [
    { href: "#about", label: dict.nav.about },
    { href: "#services", label: dict.nav.services },
    { href: "#portfolio", label: dict.nav.portfolio },
    { href: "#process", label: dict.nav.process },
    { href: "#contact", label: dict.nav.contact },
  ];

  const waHref = whatsappHref(dict.contact.whatsappMessage);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3.5">
        <a
          href="#top"
          className="text-xl font-extrabold tracking-tight text-brand-navy"
        >
          {siteConfig.businessName}
          <span className="text-brand-blue-light">.</span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative whitespace-nowrap text-sm font-medium text-slate-600 transition-colors after:absolute after:-bottom-1.5 after:start-0 after:h-0.5 after:w-0 after:rounded-full after:bg-brand-blue after:transition-all after:duration-300 hover:text-brand-blue hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-blue/20 transition hover:bg-brand-navy hover:shadow-md"
          >
            <MessageCircle className="h-4 w-4" />
            {dict.nav.cta}
          </a>
        </div>

        {/* Mobile actions — switcher stays visible outside the menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            aria-label={dict.nav.menuLabel}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg border border-brand-border p-2 text-brand-navy transition hover:border-brand-blue hover:text-brand-blue"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-brand-border bg-white px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-brand-surface hover:text-brand-blue"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                {dict.nav.cta}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
