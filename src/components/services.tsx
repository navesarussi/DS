import {
  Bot,
  Globe,
  MapPin,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const SERVICES = [
  {
    icon: MapPin,
    title: "נוכחות בגוגל מפות ובחיפוש",
    description:
      "בונים ומאפטמים את פרופיל העסק בגוגל (Google Business Profile) כדי שלקוחות ימצאו אתכם ראשונים בחיפוש ובמפות.",
  },
  {
    icon: Globe,
    title: "בניית אתרים מקצועיים",
    description:
      "אתר מהיר, מודרני ומותאם לנייד שמציג את העסק שלכם בצורה הכי מקצועית ומביא פניות אמיתיות.",
  },
  {
    icon: Bot,
    title: "צ׳אטבוטים חכמים",
    description:
      "צ׳אטבוט שעונה ללקוחות 24/7, קובע תורים ועונה על שאלות נפוצות - גם כשאתם לא זמינים.",
  },
  {
    icon: Sparkles,
    title: "עוזרים אישיים מבוססי AI",
    description:
      "עוזר דיגיטלי חכם שמנהל פניות, תיאום ומעקב לקוחות, כדי לחסוך לכם זמן יקר בניהול השוטף.",
  },
  {
    icon: TrendingUp,
    title: "אסטרטגיית צמיחה דיגיטלית",
    description:
      "ליווי מותאם אישית לעסק שלכם, עם יעדים ברורים להגדלת חשיפה, לידים והכנסות לאורך זמן.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-brand-surface py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-blue">
            השירותים שלנו
          </h2>
          <p className="mt-3 text-3xl font-extrabold text-brand-navy md:text-4xl">
            כל מה שהעסק שלכם צריך כדי לצמוח דיגיטלית
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-brand-border bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand-navy">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
