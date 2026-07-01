"use client";

import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n/language-context";
import { Reveal } from "@/components/reveal";

export function About() {
  const { dict } = useLanguage();

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-brand-blue">
          {dict.about.eyebrow}
        </h2>
        <p className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy md:text-4xl">
          {dict.about.title}
        </p>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">
          {dict.about.body}
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {siteConfig.founders.map((founder, index) => {
          const info = dict.founders[founder.id];
          return (
            <Reveal
              key={founder.id}
              delay={index * 100}
              className="flex items-start gap-5 rounded-2xl border border-brand-border bg-brand-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg hover:shadow-brand-navy/5"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-blue-light text-xl font-bold text-white shadow-md shadow-brand-blue/20">
                {founder.initials}
              </div>
              <div>
                <p className="text-lg font-bold text-brand-navy">{info.name}</p>
                <p className="text-sm font-medium text-brand-blue">{info.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {info.bio}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
