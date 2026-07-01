export type Locale = "he" | "en";

export const locales: Locale[] = ["he", "en"];

type Dictionary = {
  dir: "rtl" | "ltr";
  htmlLang: string;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    services: string;
    portfolio: string;
    process: string;
    contact: string;
    cta: string;
    menuLabel: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    eyebrow: string;
    title: string;
    body: string;
  };
  founders: Record<
    "nave" | "osher",
    { name: string; role: string; bio: string }
  >;
  services: {
    eyebrow: string;
    title: string;
    items: { title: string; description: string }[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    linkText: string;
    items: Record<
      "kupapay" | "karma" | "glowe",
      { name: string; tag: string; description: string }
    >;
  };
  process: {
    eyebrow: string;
    title: string;
    steps: { title: string; description: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    whatsapp: { label: string; value: string };
    phone: { label: string };
    email: { label: string };
    whatsappMessage: string;
    mailtoSubject: string;
  };
  footer: {
    tagline: string;
    rights: string;
  };
};

export const dictionaries: Record<Locale, Dictionary> = {
  he: {
    dir: "rtl",
    htmlLang: "he",
    meta: {
      title: "ScaleDigital | פתרונות דיגיטליים לעסקים",
      description:
        "ScaleDigital מלווה עסקים קטנים ובינוניים לבניית נוכחות דיגיטלית, נוכחות בגוגל מפות, אתרים, צ׳אטבוטים ועוזרים אישיים חכמים - כדי להביא יותר לקוחות ולהגדיל הכנסות.",
    },
    nav: {
      about: "מי אנחנו",
      services: "שירותים",
      portfolio: "פרויקטים",
      process: "איך זה עובד",
      contact: "צור קשר",
      cta: "בואו נדבר",
      menuLabel: "פתיחת תפריט",
    },
    hero: {
      badge: "הוקם ע״י מהנדסי תוכנה, בוגרי יחידה טכנולוגית בחיל האוויר",
      titleLine1: "נוכחות דיגיטלית שמביאה",
      titleHighlight: "לקוחות אמיתיים",
      subtitle:
        "אנחנו עוזרים לעסקים קטנים ובינוניים להיראות בגוגל מפות, לבנות אתר מקצועי, ולהפעיל צ׳אטבוט או עוזר אישי חכם - כדי שהעסק שלכם יצמח ויגדיל הכנסות בעולם הדיגיטלי.",
      ctaPrimary: "קבעו שיחת ייעוץ חינם",
      ctaSecondary: "השירותים שלנו",
    },
    about: {
      eyebrow: "מי אנחנו",
      title: "שני מהנדסי תוכנה שהקימו את ScaleDigital",
      body: "אנחנו נוה סרוסי ואושר ברון - שני מהנדסי תוכנה ובוגרי יחידה טכנולוגית בחיל האוויר, צה״ל. הבאנו את המשמעת, הדיוק והראש הטכנולוגי שרכשנו בצבא, ואת זה שאנחנו עושים לעולם העסקי - כדי לעזור לעסקים קטנים ובינוניים לצמוח דיגיטלית.",
    },
    founders: {
      nave: {
        name: "נוה סרוסי",
        role: "מייסד שותף | מהנדס תוכנה",
        bio: "מהנדס תוכנה ובוגר יחידה טכנולוגית בחיל האוויר, צה״ל.",
      },
      osher: {
        name: "אושר ברון",
        role: "מייסד שותף | מהנדס תוכנה",
        bio: "מהנדס תוכנה ובוגר יחידה טכנולוגית בחיל האוויר, צה״ל.",
      },
    },
    services: {
      eyebrow: "השירותים שלנו",
      title: "כל מה שהעסק שלכם צריך כדי לצמוח דיגיטלית",
      items: [
        {
          title: "נוכחות בגוגל מפות ובחיפוש",
          description:
            "בונים ומאפטמים את פרופיל העסק בגוגל (Google Business Profile) כדי שלקוחות ימצאו אתכם ראשונים בחיפוש ובמפות.",
        },
        {
          title: "בניית אתרים מקצועיים",
          description:
            "אתר מהיר, מודרני ומותאם לנייד שמציג את העסק שלכם בצורה הכי מקצועית ומביא פניות אמיתיות.",
        },
        {
          title: "צ׳אטבוטים חכמים",
          description:
            "צ׳אטבוט שעונה ללקוחות 24/7, קובע תורים ועונה על שאלות נפוצות - גם כשאתם לא זמינים.",
        },
        {
          title: "עוזרים אישיים מבוססי AI",
          description:
            "עוזר דיגיטלי חכם שמנהל פניות, תיאום ומעקב לקוחות, כדי לחסוך לכם זמן יקר בניהול השוטף.",
        },
        {
          title: "אסטרטגיית צמיחה דיגיטלית",
          description:
            "ליווי מותאם אישית לעסק שלכם, עם יעדים ברורים להגדלת חשיפה, לידים והכנסות לאורך זמן.",
        },
      ],
    },
    portfolio: {
      eyebrow: "פרויקטים שבנינו",
      title: "קצת מהניסיון שלנו",
      linkText: "לצפייה בפרויקט",
      items: {
        kupapay: {
          name: "KupaPay",
          tag: "אפליקציית iOS",
          description: "אפליקציית מובייל ל-App Store לניהול תשלומים.",
        },
        karma: {
          name: "Karma Community",
          tag: "אתר קהילה",
          description: "אתר קהילה דיגיטלי מלא לניהול וחיבור בין חברי קהילה.",
        },
        glowe: {
          name: "Glowe",
          tag: "פלטפורמת ווב",
          description: "פלטפורמת ווב חדשנית שפותחה עבור קהילת Karma.",
        },
      },
    },
    process: {
      eyebrow: "איך זה עובד",
      title: "ארבעה שלבים פשוטים לצמיחה דיגיטלית",
      steps: [
        {
          title: "פגישת אבחון חינם",
          description:
            "מכירים את העסק שלכם, את הלקוחות ואת המטרות שלכם לצמיחה.",
        },
        {
          title: "אסטרטגיה מותאמת אישית",
          description:
            "בונים תוכנית פעולה ברורה: מה בונים קודם ולמה, בלי בזבוז זמן.",
        },
        {
          title: "בנייה ויישום",
          description:
            "מקימים את הנוכחות הדיגיטלית - גוגל מפות, אתר, צ׳אטבוט או עוזר אישי.",
        },
        {
          title: "ליווי וצמיחה מתמשכת",
          description: "עוקבים אחרי התוצאות וממשיכים לשפר כדי להביא עוד לקוחות.",
        },
      ],
    },
    contact: {
      eyebrow: "צור קשר",
      title: "בואו נדבר על העסק שלכם",
      subtitle: "מלאו פרטים בוואטסאפ, שלחו מייל או התקשרו - נחזור אליכם באותו היום.",
      whatsapp: { label: "וואטסאפ", value: "הדרך המהירה ביותר לקבל תשובה" },
      phone: { label: "טלפון" },
      email: { label: "אימייל" },
      whatsappMessage:
        "היי! ראיתי את האתר של ScaleDigital ואשמח לשמוע איך תוכלו לעזור לעסק שלי להתקדם דיגיטלית 🚀",
      mailtoSubject: "פנייה מהאתר - ScaleDigital",
    },
    footer: {
      tagline: "נוה סרוסי ואושר ברון | פתרונות דיגיטליים לעסקים",
      rights: "כל הזכויות שמורות.",
    },
  },
  en: {
    dir: "ltr",
    htmlLang: "en",
    meta: {
      title: "ScaleDigital | Digital Solutions for Businesses",
      description:
        "ScaleDigital helps small and medium businesses build a digital presence - Google Maps visibility, professional websites, smart chatbots, and AI assistants - to bring in more customers and grow revenue.",
    },
    nav: {
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      process: "How We Work",
      contact: "Contact",
      cta: "Let's Talk",
      menuLabel: "Toggle menu",
    },
    hero: {
      badge:
        "Founded by software engineers, alumni of an elite technological unit in the Israeli Air Force",
      titleLine1: "Digital Presence That Brings",
      titleHighlight: "Real Customers",
      subtitle:
        "We help small and medium businesses get discovered on Google Maps, launch a professional website, and run a smart chatbot or AI assistant - so your business grows and revenue follows.",
      ctaPrimary: "Book a Free Consultation",
      ctaSecondary: "Our Services",
    },
    about: {
      eyebrow: "Who We Are",
      title: "Two Software Engineers Behind ScaleDigital",
      body: "We're Nave Sarussi and Osher Baron - software engineers and alumni of an elite technological unit in the Israeli Air Force. We bring the discipline, precision, and technical rigor we built in the military into the business world, helping small and medium businesses grow through digital transformation.",
    },
    founders: {
      nave: {
        name: "Nave Sarussi",
        role: "Co-Founder | Software Engineer",
        bio: "Software engineer and alumnus of an elite technological unit in the Israeli Air Force.",
      },
      osher: {
        name: "Osher Baron",
        role: "Co-Founder | Software Engineer",
        bio: "Software engineer and alumnus of an elite technological unit in the Israeli Air Force.",
      },
    },
    services: {
      eyebrow: "Our Services",
      title: "Everything Your Business Needs to Grow Digitally",
      items: [
        {
          title: "Google Maps & Search Presence",
          description:
            "We build and optimize your Google Business Profile so customers find you first in search and on the map.",
        },
        {
          title: "Professional Website Development",
          description:
            "A fast, modern, mobile-first website that showcases your business at its best and turns visitors into real leads.",
        },
        {
          title: "Smart Chatbots",
          description:
            "A chatbot that engages customers around the clock, books appointments, and answers common questions - even when you're offline.",
        },
        {
          title: "AI-Powered Personal Assistants",
          description:
            "A smart digital assistant that manages inquiries, scheduling, and follow-ups, saving you valuable time on day-to-day operations.",
        },
        {
          title: "Digital Growth Strategy",
          description:
            "A tailored growth plan for your business, with clear goals to increase visibility, leads, and revenue over time.",
        },
      ],
    },
    portfolio: {
      eyebrow: "Our Work",
      title: "A Glimpse of Our Experience",
      linkText: "View Project",
      items: {
        kupapay: {
          name: "KupaPay",
          tag: "iOS App",
          description: "A mobile payments app published on the App Store.",
        },
        karma: {
          name: "Karma Community",
          tag: "Community Platform",
          description:
            "A full-featured community website for connecting and managing members.",
        },
        glowe: {
          name: "Glowe",
          tag: "Web Platform",
          description: "An innovative web platform built for the Karma community.",
        },
      },
    },
    process: {
      eyebrow: "How We Work",
      title: "Four Simple Steps to Digital Growth",
      steps: [
        {
          title: "Free Discovery Call",
          description:
            "We get to know your business, your customers, and your growth goals.",
        },
        {
          title: "Tailored Strategy",
          description:
            "We build a clear action plan - what to build first, and why - with no wasted time.",
        },
        {
          title: "Build & Launch",
          description:
            "We set up your digital presence: Google Maps, website, chatbot, or personal assistant.",
        },
        {
          title: "Ongoing Growth Support",
          description:
            "We track results and keep optimizing to bring you more customers over time.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact Us",
      title: "Let's Talk About Your Business",
      subtitle:
        "Reach out on WhatsApp, send an email, or give us a call - we'll get back to you the same day.",
      whatsapp: { label: "WhatsApp", value: "The fastest way to get a response" },
      phone: { label: "Phone" },
      email: { label: "Email" },
      whatsappMessage:
        "Hi! I came across the ScaleDigital website and I'd love to learn how you can help my business grow digitally 🚀",
      mailtoSubject: "Website Inquiry - ScaleDigital",
    },
    footer: {
      tagline: "Nave Sarussi & Osher Baron | Digital Solutions for Businesses",
      rights: "All rights reserved.",
    },
  },
};
