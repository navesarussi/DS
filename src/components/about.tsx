"use client";

import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n/language-context";

export function About() {
  const { dict } = useLanguage();

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-brand-blue">
          {dict.about.eyebrow}
        </h2>
        <p className="mt-3 text-3xl font-extrabold text-brand-navy md:text-4xl">
          {dict.about.title}
        </p>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          {dict.about.body}
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {siteConfig.founders.map((founder) => {
          const info = dict.founders[founder.id];
          return (
            <div
              key={founder.id}
              className="flex items-start gap-5 rounded-2xl border border-brand-border bg-brand-surface p-7"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-blue text-xl font-bold text-white">
                {founder.initials}
              </div>
              <div>
                <p className="text-lg font-bold text-brand-navy">{info.name}</p>
                <p className="text-sm font-medium text-brand-blue">{info.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {info.bio}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
