"use client";

import { Code2, Handshake, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { Reveal } from "@/components/reveal";

const ICONS = [Code2, Handshake, Sparkles, ShieldCheck];

export function WhyUs() {
  const { dict } = useLanguage();

  return (
    <section className="border-y border-brand-border bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-blue">
            {dict.whyUs.eyebrow}
          </h2>
          <p className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy md:text-4xl">
            {dict.whyUs.title}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.whyUs.items.map((item, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <Reveal
                key={item.title}
                delay={index * 90}
                className="group rounded-2xl border border-brand-border bg-brand-surface/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:bg-white hover:shadow-lg hover:shadow-brand-navy/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
