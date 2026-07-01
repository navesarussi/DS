"use client";

import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n/language-context";

export function Footer() {
  const { dict } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border bg-brand-surface py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center">
        <a
          href="#top"
          className="text-xl font-extrabold tracking-tight text-brand-navy"
        >
          {siteConfig.businessName}
          <span className="text-brand-blue-light">.</span>
        </a>
        <p className="text-sm text-slate-500">{dict.footer.tagline}</p>
        <p className="text-xs text-slate-400">
          &copy; {year} {siteConfig.businessName}. {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
