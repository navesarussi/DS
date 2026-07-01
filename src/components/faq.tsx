"use client";

import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/language-context";
import { Reveal } from "@/components/reveal";

export function Faq() {
  const { dict } = useLanguage();

  return (
    <section id="faq" className="bg-brand-surface py-24">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-blue">
            {dict.faq.eyebrow}
          </h2>
          <p className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy md:text-4xl">
            {dict.faq.title}
          </p>
        </Reveal>

        <div className="mt-12 flex flex-col gap-3">
          {dict.faq.items.map((item, index) => (
            <Reveal key={item.question} delay={index * 60}>
              <details className="group rounded-2xl border border-brand-border bg-white px-6 py-1 transition open:shadow-md open:shadow-brand-navy/5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-start text-base font-bold text-brand-navy transition hover:text-brand-blue">
                  {item.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-brand-blue transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="pb-5 text-sm leading-relaxed text-slate-600">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
