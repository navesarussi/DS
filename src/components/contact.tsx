"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";
import { mailtoHref, siteConfig, telHref, whatsappHref } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n/language-context";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";

export function Contact() {
  const { dict } = useLanguage();

  const options = [
    {
      key: "whatsapp",
      icon: MessageCircle,
      label: dict.contact.whatsapp.label,
      value: dict.contact.whatsapp.value,
      href: whatsappHref(dict.contact.whatsappMessage),
      external: true,
    },
    {
      key: "phone",
      icon: Phone,
      label: dict.contact.phone.label,
      value: siteConfig.contact.phoneDisplay,
      href: telHref(),
      external: false,
    },
    {
      key: "email",
      icon: Mail,
      label: dict.contact.email.label,
      value: siteConfig.contact.email,
      href: mailtoHref(dict.contact.mailtoSubject),
      external: false,
    },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-brand-blue">
          {dict.contact.eyebrow}
        </h2>
        <p className="mt-3 text-3xl font-extrabold tracking-tight text-brand-navy md:text-4xl">
          {dict.contact.title}
        </p>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          {dict.contact.subtitle}
        </p>
      </Reveal>

      <div className="mt-14 grid items-start gap-8 lg:grid-cols-2">
        <Reveal>
          <ContactForm />
        </Reveal>

        <Reveal delay={120} className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
            {dict.contact.form.orReachDirectly}
          </p>
          {options.map((option) => (
            <a
              key={option.key}
              href={option.href}
              target={option.external ? "_blank" : undefined}
              rel={option.external ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-2xl border border-brand-border bg-brand-surface p-5 transition duration-300 hover:-translate-y-0.5 hover:border-brand-blue/30 hover:bg-white hover:shadow-lg hover:shadow-brand-navy/5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-blue text-white transition group-hover:scale-105">
                <option.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-brand-navy">{option.label}</p>
                <p dir="ltr" className="truncate text-start text-sm text-slate-600">
                  {option.value}
                </p>
              </div>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
