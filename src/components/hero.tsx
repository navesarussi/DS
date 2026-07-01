import { ArrowLeft, MessageCircle, ShieldCheck } from "lucide-react";
import { whatsappHref } from "@/lib/site-config";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-brand-navy text-white">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand-blue-light blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-brand-blue blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-blue-100">
            <ShieldCheck className="h-4 w-4" />
            הוקם ע״י מהנדסי תוכנה, בוגרי יחידה טכנולוגית בחיל האוויר
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
            נוכחות דיגיטלית שמביאה
            <span className="text-brand-blue-light"> לקוחות אמיתיים</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-blue-100 md:text-xl">
            אנחנו עוזרים לעסקים קטנים ובינוניים להיראות בגוגל מפות, לבנות אתר
            מקצועי, ולהפעיל צ׳אטבוט או עוזר אישי חכם - כדי שהעסק שלכם יצמח
            ויגדיל הכנסות בעולם הדיגיטלי.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-blue-light px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:brightness-110"
            >
              <MessageCircle className="h-5 w-5" />
              קבעו שיחת ייעוץ חינם
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
            >
              השירותים שלנו
              <ArrowLeft className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
