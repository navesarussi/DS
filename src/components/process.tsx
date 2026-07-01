const STEPS = [
  {
    number: "01",
    title: "פגישת אבחון חינם",
    description: "מכירים את העסק שלכם, את הלקוחות ואת המטרות שלכם לצמיחה.",
  },
  {
    number: "02",
    title: "אסטרטגיה מותאמת אישית",
    description: "בונים תוכנית פעולה ברורה: מה בונים קודם ולמה, בלי בזבוז זמן.",
  },
  {
    number: "03",
    title: "בנייה ויישום",
    description:
      "מקימים את הנוכחות הדיגיטלית - גוגל מפות, אתר, צ׳אטבוט או עוזר אישי.",
  },
  {
    number: "04",
    title: "ליווי וצמיחה מתמשכת",
    description: "עוקבים אחרי התוצאות וממשיכים לשפר כדי להביא עוד לקוחות.",
  },
];

export function Process() {
  return (
    <section id="process" className="bg-brand-navy py-24 text-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-blue-light">
            איך זה עובד
          </h2>
          <p className="mt-3 text-3xl font-extrabold md:text-4xl">
            ארבעה שלבים פשוטים לצמיחה דיגיטלית
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {STEPS.map((step) => (
            <div key={step.number} className="relative">
              <span className="text-4xl font-extrabold text-white/15">
                {step.number}
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
