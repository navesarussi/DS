import { siteConfig } from "@/lib/site-config";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-brand-blue">
          מי אנחנו
        </h2>
        <p className="mt-3 text-3xl font-extrabold text-brand-navy md:text-4xl">
          שני מהנדסי תוכנה שהקימו את {siteConfig.businessName}
        </p>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          אנחנו נוה סרוסי ואושר ברון - שני מהנדסי תוכנה ובוגרי יחידה
          טכנולוגית בחיל האוויר, צה״ל. הבאנו את המשמעת, הדיוק והראש
          הטכנולוגי שרכשנו בצבא, ואת זה שאנחנו עושים לעולם העסקי - כדי
          לעזור לעסקים קטנים ובינוניים לצמוח דיגיטלית.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {siteConfig.founders.map((founder) => (
          <div
            key={founder.name}
            className="flex items-start gap-5 rounded-2xl border border-brand-border bg-brand-surface p-7"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand-blue text-xl font-bold text-white">
              {founder.initials}
            </div>
            <div>
              <p className="text-lg font-bold text-brand-navy">{founder.name}</p>
              <p className="text-sm font-medium text-brand-blue">{founder.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {founder.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
