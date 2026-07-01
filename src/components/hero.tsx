"use client";

import { ArrowLeft, ArrowRight, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { whatsappHref } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n/language-context";
import { Reveal } from "@/components/reveal";

export function Hero() {
  const { dict } = useLanguage();
  const ArrowIcon = dict.dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-brand-navy text-white"
    >
      {/* Ambient animated background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 sd-grid opacity-60" />
        <div className="absolute -top-28 -start-24 h-96 w-96 rounded-full bg-brand-blue-light/50 blur-3xl sd-float" />
        <div
          className="absolute bottom-[-6rem] end-0 h-80 w-80 rounded-full bg-brand-blue/50 blur-3xl sd-float"
          style={{ animationDelay: "-4s" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-navy to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-blue-100 backdrop-blur">
              <ShieldCheck className="h-4 w-4" />
              {dict.hero.badge}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
              {dict.hero.titleLine1}
              <span className="text-brand-blue-light">
                {" "}
                {dict.hero.titleHighlight}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-blue-100 md:text-xl">
              {dict.hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={whatsappHref(dict.contact.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-blue-light px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5 hover:brightness-110 hover:shadow-xl"
              >
                <MessageCircle className="h-5 w-5" />
                {dict.hero.ctaPrimary}
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
              >
                {dict.hero.ctaSecondary}
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:-translate-x-0.5 rtl:group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-8 inline-flex items-center gap-2 text-sm text-blue-200/90">
              <Sparkles className="h-4 w-4 text-brand-blue-light" />
              {dict.hero.note}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
