import { Mail, MessageCircle, Phone } from "lucide-react";
import { mailtoHref, siteConfig, telHref, whatsappHref } from "@/lib/site-config";

const CONTACT_OPTIONS = [
  {
    icon: MessageCircle,
    label: "וואטסאפ",
    value: "הדרך המהירה ביותר לקבל תשובה",
    href: whatsappHref(),
  },
  {
    icon: Phone,
    label: "טלפון",
    value: siteConfig.contact.phoneDisplay,
    href: telHref(),
  },
  {
    icon: Mail,
    label: "אימייל",
    value: siteConfig.contact.email,
    href: mailtoHref(),
  },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-brand-blue">
          צור קשר
        </h2>
        <p className="mt-3 text-3xl font-extrabold text-brand-navy md:text-4xl">
          בואו נדבר על העסק שלכם
        </p>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          מלאו פרטים בוואטסאפ, שלחו מייל או התקשרו - נחזור אליכם באותו היום.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {CONTACT_OPTIONS.map((option) => (
          <a
            key={option.label}
            href={option.href}
            target={option.label === "וואטסאפ" ? "_blank" : undefined}
            rel={option.label === "וואטסאפ" ? "noopener noreferrer" : undefined}
            dir="ltr"
            className="flex flex-col items-center gap-3 rounded-2xl border border-brand-border bg-brand-surface p-8 text-center transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white">
              <option.icon className="h-6 w-6" />
            </div>
            <span dir="rtl" className="font-bold text-brand-navy">
              {option.label}
            </span>
            <span className="text-sm text-slate-600">{option.value}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
