"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { whatsappHref } from "@/lib/site-config";
import { useLanguage } from "@/lib/i18n/language-context";

export function ContactForm() {
  const { dict } = useLanguage();
  const form = dict.contact.form;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const composed = [
      name && `${name}`,
      phone && `(${phone})`,
      message && `— ${message}`,
    ]
      .filter(Boolean)
      .join(" ");
    const text = composed || dict.contact.whatsappMessage;
    window.open(whatsappHref(text), "_blank", "noopener,noreferrer");
  }

  const fieldClass =
    "w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-navy placeholder:text-slate-400 transition focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/25";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-brand-border bg-white p-7 shadow-sm"
    >
      <p className="text-lg font-bold text-brand-navy">{form.title}</p>

      <div className="mt-5 flex flex-col gap-4">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-slate-600">{form.name}</span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={form.namePlaceholder}
            className={fieldClass}
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-slate-600">{form.phone}</span>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={form.phonePlaceholder}
            className={fieldClass}
            dir="ltr"
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-slate-600">
            {form.message}
          </span>
          <textarea
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={form.messagePlaceholder}
            className={`${fieldClass} resize-none`}
          />
        </label>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-brand-blue/20 transition hover:-translate-y-0.5 hover:bg-brand-navy hover:shadow-md"
        >
          <Send className="h-4 w-4" />
          {form.submit}
        </button>
      </div>
    </form>
  );
}
