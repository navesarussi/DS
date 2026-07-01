"use client";

import { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { siteConfig, whatsappHref } from "@/lib/site-config";

const NAV_LINKS = [
  { href: "#about", label: "מי אנחנו" },
  { href: "#services", label: "שירותים" },
  { href: "#portfolio", label: "פרויקטים" },
  { href: "#process", label: "איך זה עובד" },
  { href: "#contact", label: "צור קשר" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-border bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="text-xl font-extrabold text-brand-navy">
          {siteConfig.businessName}
          <span className="text-brand-blue-light">.</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition hover:text-brand-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-navy md:inline-flex"
        >
          <MessageCircle className="h-4 w-4" />
          בואו נדבר
        </a>

        <button
          type="button"
          aria-label="פתיחת תפריט"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg border border-brand-border p-2 text-brand-navy md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-brand-border bg-white px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
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
            <li>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                בואו נדבר
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
