"use client";

import { useLanguage } from "@/lib/i18n/language-context";
import { Reveal } from "@/components/reveal";

export function Process() {
  const { dict } = useLanguage();

  return (
    <section id="process" className="relative overflow-hidden bg-brand-navy py-24 text-white">
      <div className="pointer-events-none absolute inset-0 sd-grid opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-blue-light">
            {dict.process.eyebrow}
          </h2>
          <p className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            {dict.process.title}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {dict.process.steps.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 100}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition duration-300 hover:border-white/25 hover:bg-white/10"
            >
              <span className="text-4xl font-extrabold text-brand-blue-light/40">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-100">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
