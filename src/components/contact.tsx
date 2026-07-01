"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";
import { mailtoHref, siteConfig, telHref, whatsappHref } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n/language-context";

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
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-brand-blue">
          {dict.contact.eyebrow}
        </h2>
        <p className="mt-3 text-3xl font-extrabold text-brand-navy md:text-4xl">
          {dict.contact.title}
        </p>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          {dict.contact.subtitle}
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {options.map((option) => (
          <a
            key={option.key}
            href={option.href}
            target={option.external ? "_blank" : undefined}
            rel={option.external ? "noopener noreferrer" : undefined}
            dir="ltr"
            className="flex flex-col items-center gap-3 rounded-2xl border border-brand-border bg-brand-surface p-8 text-center transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white">
              <option.icon className="h-6 w-6" />
            </div>
            <span dir="auto" className="font-bold text-brand-navy">
              {option.label}
            </span>
            <span className="text-sm text-slate-600">{option.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
