"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { localeMeta, locales } from "@/lib/i18n/dictionaries";
import { useLanguage } from "@/lib/i18n/language-context";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Language"
        className="inline-flex items-center gap-1.5 rounded-full border border-brand-border bg-white px-3.5 py-2 text-sm font-semibold text-brand-navy shadow-sm transition hover:border-brand-blue hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40"
      >
        <Globe className="h-4 w-4" />
        <span className="tabular-nums">{localeMeta[locale].short}</span>
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Select language"
          className="absolute end-0 z-50 mt-2 w-44 origin-top overflow-hidden rounded-xl border border-brand-border bg-white p-1 shadow-xl shadow-brand-navy/10 sd-menu-in"
        >
          {locales.map((l) => {
            const active = l === locale;
            return (
              <button
                key={l}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                onClick={() => {
                  setLocale(l);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-start text-sm font-medium transition ${
                  active
                    ? "bg-brand-surface text-brand-blue"
                    : "text-slate-700 hover:bg-brand-surface"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <span className="w-6 text-xs font-bold uppercase tracking-wide text-slate-400">
                    {localeMeta[l].short}
                  </span>
                  {localeMeta[l].label}
                </span>
                {active && <Check className="h-4 w-4 shrink-0 text-brand-blue" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
