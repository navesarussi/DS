"use client";

import { ArrowUpLeft, ArrowUpRight, Bot, Cog, Globe, MapPin, Phone, Sparkles, TrendingUp } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";

const ICONS = [MapPin, Globe, Bot, Phone, Cog, Sparkles, TrendingUp];

export function Services() {
  const { dict, locale } = useLanguage();
  const ArrowIcon = dict.dir === "rtl" ? ArrowUpLeft : ArrowUpRight;

  return (
    <section id="services" className="bg-brand-surface py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-blue">
            {dict.services.eyebrow}
          </h2>
          <p className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy md:text-4xl">
            {dict.services.title}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.services.items.map((service, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <Reveal
                key={service.title}
                delay={index * 80}
                className="group rounded-2xl border border-brand-border bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-navy/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition group-hover:bg-brand-blue group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-brand-navy">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
                {service.demoLabel && (
                  <a
                    href={siteConfig.voiceDemoUrl[locale]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue"
                  >
                    {service.demoLabel}
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
