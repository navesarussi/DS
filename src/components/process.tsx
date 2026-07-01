"use client";

import { useLanguage } from "@/lib/i18n/language-context";

export function Process() {
  const { dict } = useLanguage();

  return (
    <section id="process" className="bg-brand-navy py-24 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-blue-light">
            {dict.process.eyebrow}
          </h2>
          <p className="mt-3 text-3xl font-extrabold md:text-4xl">
            {dict.process.title}
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {dict.process.steps.map((step, index) => (
            <div key={step.title} className="relative">
              <span className="text-4xl font-extrabold text-white/15">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-100">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
