"use client";

import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n/language-context";
import { Reveal } from "@/components/reveal";

export function Portfolio() {
  const { dict } = useLanguage();
  const ArrowIcon = dict.dir === "rtl" ? ArrowUpLeft : ArrowUpRight;

  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-brand-blue">
          {dict.portfolio.eyebrow}
        </h2>
        <p className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy md:text-4xl">
          {dict.portfolio.title}
        </p>
        <p className="mt-4 text-base leading-relaxed text-slate-500">
          {dict.portfolio.note}
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {siteConfig.portfolio.map((project, index) => {
          const info = dict.portfolio.items[project.id];
          return (
            <Reveal key={project.id} delay={index * 90}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border bg-white transition duration-300 hover:-translate-y-1.5 hover:border-brand-blue/30 hover:shadow-xl hover:shadow-brand-navy/5"
              >
                <div
                  className="relative flex h-32 items-center justify-center overflow-hidden text-2xl font-extrabold text-white"
                  style={{
                    background:
                      index % 2 === 0
                        ? "linear-gradient(135deg, var(--brand-navy), var(--brand-blue))"
                        : "linear-gradient(135deg, var(--brand-blue), var(--brand-blue-light))",
                  }}
                >
                  <div className="absolute inset-0 sd-grid opacity-40" />
                  <span className="relative">{info.name}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-bold uppercase tracking-wide text-brand-blue">
                    {info.tag}
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {info.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy">
                    {dict.portfolio.linkText}
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
