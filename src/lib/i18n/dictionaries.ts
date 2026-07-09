export type Locale = "he" | "en" | "fr";

export const locales: Locale[] = ["he", "en", "fr"];

// UI labels for the language switcher. Add a locale here + a dictionary below
// and it appears in the switcher automatically — no component changes needed.
export const localeMeta: Record<Locale, { label: string; short: string }> = {
  he: { label: "עברית", short: "עב" },
  en: { label: "English", short: "EN" },
  fr: { label: "Français", short: "FR" },
};

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
    note: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  whyUs: {
    eyebrow: string;
    title: string;
    items: { title: string; description: string }[];
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
    items: {
      title: string;
      description: string;
      demoLabel?: string;
    }[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    note: string;
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
  faq: {
    eyebrow: string;
    title: string;
    items: { question: string; answer: string }[];
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
    form: {
      title: string;
      name: string;
      namePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      orReachDirectly: string;
    };
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
      title: "ScaleDigital | נוכחות דיגיטלית שמביאה לקוחות",
      description:
        "בונים לעסקים קטנים ובינוניים נוכחות דיגיטלית שמביאה לקוחות — נראות ב-Google Maps, אתרים מהירים, צ׳אטבוטים, אוטומציות (Make, n8n) ועוזרי AI. הוקם בידי שני מהנדסי תוכנה.",
    },
    nav: {
      about: "מי אנחנו",
      services: "שירותים",
      portfolio: "עבודות",
      process: "איך זה עובד",
      contact: "יצירת קשר",
      cta: "בואו נדבר",
      menuLabel: "פתיחת תפריט",
    },
    hero: {
      badge: "הוקם בידי שני מהנדסי תוכנה מנוסים",
      titleLine1: "נוכחות דיגיטלית שמביאה",
      titleHighlight: "לקוחות אמיתיים",
      subtitle:
        "אנחנו בונים לעסקים קטנים ובינוניים נוכחות דיגיטלית שעובדת: נראות ב-Google Maps, אתר מהיר שממיר גולשים לפניות, וצ׳אטבוט או עוזר AI שזמין ללקוחות מסביב לשעון. פחות עומס עליכם, יותר לקוחות אצלכם.",
      note: "אנחנו בתחילת הדרך ומקבלים מספר מצומצם של לקוחות מייסדים — ליווי צמוד ותשומת לב מלאה.",
      ctaPrimary: "לשיחת ייעוץ חינם",
      ctaSecondary: "לשירותים שלנו",
    },
    whyUs: {
      eyebrow: "למה ScaleDigital",
      title: "עבודה הנדסית, יחס אישי",
      items: [
        {
          title: "סטנדרט הנדסי",
          description:
            "כל אתר, בוט ואוטומציה נבנים באותה קפדנות שבה בונים תוכנה — מהיר, יציב ומדויק.",
        },
        {
          title: "גישה ישירה למייסדים",
          description:
            "עובדים מולנו ישירות, בלי שרשרת מתווכים. אתם תמיד יודעים מי בונה לכם ומה קורה.",
        },
        {
          title: "AI מהדור החדש",
          description:
            "צ׳אטבוטים ועוזרים חכמים שחוסכים לכם שעות ועונים ללקוחות גם כשאתם לא פנויים.",
        },
        {
          title: "שקיפות מלאה",
          description:
            "מסבירים כל צעד בשפה פשוטה ובונים לפי סדר עדיפויות ברור — בלי הפתעות.",
        },
      ],
    },
    about: {
      eyebrow: "מי אנחנו",
      title: "שני מהנדסי תוכנה שבנו את ScaleDigital",
      body: "אנחנו נוה סרוסי ואושר ברון, שני מהנדסי תוכנה מנוסים. את הדיוק, הקפדנות והחשיבה ההנדסית שרכשנו בשנים של פיתוח תוכנה אנחנו מביאים לעולם העסקי — כדי לבנות לעסקים קטנים ובינוניים נוכחות דיגיטלית שמייצרת תוצאות, לא סתם עוד אתר יפה.",
    },
    founders: {
      nave: {
        name: "נוה סרוסי",
        role: "מייסד שותף · מהנדס תוכנה",
        bio: "מהנדס תוכנה מנוסה, עם רקע בפיתוח מוצרים ומערכות דיגיטליות.",
      },
      osher: {
        name: "אושר ברון",
        role: "מייסד שותף · מהנדס תוכנה",
        bio: "מהנדס תוכנה מנוסה, עם רקע בפיתוח מוצרים ומערכות דיגיטליות.",
      },
    },
    services: {
      eyebrow: "השירותים שלנו",
      title: "כל מה שצריך כדי לצמוח דיגיטלית",
      items: [
        {
          title: "נראות ב-Google Maps ובחיפוש",
          description:
            "בונים ומייעלים את פרופיל העסק ב-Google כדי שלקוחות ימצאו אתכם ראשונים, בדיוק ברגע שהם מחפשים.",
        },
        {
          title: "בניית אתרים",
          description:
            "אתר מהיר, מודרני ומותאם לנייד, שבנוי כדי להפוך גולשים לפניות — לא רק להיראות טוב.",
        },
        {
          title: "צ׳אטבוטים חכמים",
          description:
            "בוט שמדבר עם הלקוחות 24/7, עונה על שאלות וקובע תורים — גם באמצע הלילה.",
        },
        {
          title: "עוזרי AI אישיים",
          description:
            "עוזר דיגיטלי שמנהל פניות, תיאומים ומעקבים, ומשחרר לכם זמן לעסק עצמו.",
        },
        {
          title: "מענה טלפוני חכם עם AI",
          description:
            "עוזר קולי מבוסס AI שעונה לשיחות של הלקוחות שלכם, מספק מידע מדויק ומנתב לשלוחה או לנציג הנכון — כבר בפעולה אצלנו, לא רק רעיון.",
          demoLabel: "נסו את הדמו החי",
        },
        {
          title: "אוטומציה מותאמת אישית",
          description:
            "אוטומציות מותאמות אישית עם Make, n8n ועוד — מחברים CRM, גיליונות, וואטסאפ ומייל לתהליכים שחוסכים שעות ומבטלים העתקות ידניות.",
        },
        {
          title: "אסטרטגיית צמיחה דיגיטלית",
          description:
            "תוכנית ברורה עם יעדים מדידים: יותר חשיפה, יותר לידים ויותר הכנסות לאורך זמן.",
        },
      ],
    },
    portfolio: {
      eyebrow: "עבודות נבחרות",
      title: "מוצרים שעיצבנו ובנינו",
      note: "פרויקטים שבנינו בעצמנו — טעימה מהיכולות שנביא לעסק שלכם.",
      linkText: "לצפייה בפרויקט",
      items: {
        kupapay: {
          name: "KupaPay",
          tag: "אפליקציית iOS",
          description: "אפליקציית תשלומים לאייפון, פורסמה ב-App Store — מאפיון ועד השקה.",
        },
        karma: {
          name: "Karma Community",
          tag: "פלטפורמת קהילה",
          description: "אתר קהילה מלא לניהול חברים, תוכן ותקשורת פנימית.",
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
      title: "ארבעה שלבים לצמיחה דיגיטלית",
      steps: [
        {
          title: "שיחת אבחון חינם",
          description: "מכירים את העסק, הלקוחות והיעדים שלכם — בלי התחייבות.",
        },
        {
          title: "אסטרטגיה מותאמת",
          description:
            "בונים תוכנית ברורה: מה עושים קודם ולמה, בלי לבזבז זמן וכסף.",
        },
        {
          title: "בנייה והשקה",
          description:
            "מקימים את הנוכחות הדיגיטלית: Google Maps, אתר, בוט או עוזר AI.",
        },
        {
          title: "ליווי וצמיחה",
          description:
            "עוקבים אחרי התוצאות וממשיכים לשפר, כדי להביא לכם עוד לקוחות.",
        },
      ],
    },
    faq: {
      eyebrow: "שאלות נפוצות",
      title: "כל מה שרציתם לדעת",
      items: [
        {
          question: "אתם חברה חדשה — למה שאבחר בכם?",
          answer:
            "כי אתם מקבלים מהנדסי תוכנה שבונים ברמה גבוהה, יחס אישי וגישה ישירה אלינו. אנחנו בתחילת הדרך, ולכן כל לקוח מקבל תשומת לב מלאה והשקעה שקשה למצוא במקום אחר.",
        },
        {
          question: "כמה זה עולה?",
          answer:
            "המחיר תלוי בהיקף — אתר, בוט או ליווי מלא. בשיחת האבחון החינמית נבין מה אתם צריכים וניתן הצעת מחיר ברורה, בלי אותיות קטנות.",
        },
        {
          question: "כמה זמן לוקח להקים?",
          answer:
            "אתר נחיתה עולה לרוב תוך שבוע-שבועיים. פרויקטים גדולים יותר לוקחים יותר — נגדיר לוח זמנים מדויק כבר בהתחלה.",
        },
        {
          question: "אין לי שום דבר דיגיטלי, מאיפה מתחילים?",
          answer:
            "בדיוק בשביל זה אנחנו כאן. מתחילים מאפס: פרופיל Google, אתר וערוצי פנייה — צעד אחר צעד, בקצב שלכם.",
        },
        {
          question: "אני לא מבין בטכנולוגיה, זו בעיה?",
          answer:
            "ממש לא. אנחנו מתרגמים הכול לשפה פשוטה ומטפלים בצד הטכני. אתם מתעסקים בעסק, אנחנו בדיגיטל.",
        },
      ],
    },
    contact: {
      eyebrow: "יצירת קשר",
      title: "בואו נדבר על העסק שלכם",
      subtitle:
        "בוואטסאפ, בטלפון או במייל — נחזור אליכם עוד היום. אפשר גם להשאיר פרטים כאן וניצור קשר.",
      whatsapp: { label: "וואטסאפ", value: "הדרך המהירה ביותר לתשובה" },
      phone: { label: "טלפון" },
      email: { label: "אימייל" },
      whatsappMessage:
        "היי! הגעתי דרך האתר של ScaleDigital ואשמח לשמוע איך תוכלו לעזור לעסק שלי לצמוח דיגיטלית 🚀",
      mailtoSubject: "פנייה מהאתר — ScaleDigital",
      form: {
        title: "השאירו פרטים",
        name: "שם",
        namePlaceholder: "השם שלכם",
        phone: "טלפון",
        phonePlaceholder: "מספר לחזרה",
        message: "הודעה",
        messagePlaceholder: "ספרו לנו קצת על העסק ומה אתם צריכים",
        submit: "שליחה בוואטסאפ",
        orReachDirectly: "או פנו אלינו ישירות:",
      },
    },
    footer: {
      tagline: "נוה סרוסי ואושר ברון · פתרונות דיגיטליים לעסקים",
      rights: "כל הזכויות שמורות.",
    },
  },
  en: {
    dir: "ltr",
    htmlLang: "en",
    meta: {
      title: "ScaleDigital | Digital Presence That Brings Customers",
      description:
        "We build digital presence that brings customers for small and medium businesses — Google Maps visibility, fast websites, chatbots, Make & n8n automations, and AI assistants. Founded by two software engineers.",
    },
    nav: {
      about: "About",
      services: "Services",
      portfolio: "Work",
      process: "How It Works",
      contact: "Contact",
      cta: "Let's Talk",
      menuLabel: "Toggle menu",
    },
    hero: {
      badge:
        "Founded by two experienced software engineers",
      titleLine1: "Digital Presence That Brings",
      titleHighlight: "Real Customers",
      subtitle:
        "We build working digital presence for small and medium businesses: visibility on Google Maps, a fast website that turns visitors into leads, and a chatbot or AI assistant available to your customers around the clock. Less on your plate, more customers at your door.",
      note: "We're just getting started and taking on a select few founding clients — close guidance and our full attention.",
      ctaPrimary: "Book a Free Consultation",
      ctaSecondary: "Our Services",
    },
    whyUs: {
      eyebrow: "Why ScaleDigital",
      title: "Engineering-Grade Work, a Personal Touch",
      items: [
        {
          title: "Engineering Standard",
          description:
            "Every website, bot, and automation is built with the same rigor as real software — fast, stable, and precise.",
        },
        {
          title: "Direct Founder Access",
          description:
            "You work with us directly, no chain of middlemen. You always know who's building your project and where it stands.",
        },
        {
          title: "Next-Gen AI",
          description:
            "Smart chatbots and assistants that save you hours and answer customers even when you can't.",
        },
        {
          title: "Full Transparency",
          description:
            "We explain every step in plain language and build to a clear order of priorities — no surprises.",
        },
      ],
    },
    about: {
      eyebrow: "Who We Are",
      title: "Two Software Engineers Behind ScaleDigital",
      body: "We're Nave Sarussi and Osher Baron — two experienced software engineers. We bring the precision, rigor, and engineering mindset we built over years of writing real software into the business world, to give small and medium businesses a digital presence that delivers results — not just another good-looking website.",
    },
    founders: {
      nave: {
        name: "Nave Sarussi",
        role: "Co-Founder · Software Engineer",
        bio: "Software engineer with a background in building digital products and systems.",
      },
      osher: {
        name: "Osher Baron",
        role: "Co-Founder · Software Engineer",
        bio: "Software engineer with a background in building digital products and systems.",
      },
    },
    services: {
      eyebrow: "Our Services",
      title: "Everything You Need to Grow Digitally",
      items: [
        {
          title: "Google Maps & Search Presence",
          description:
            "We build and optimize your Google Business Profile so customers find you first — right when they're searching.",
        },
        {
          title: "Website Development",
          description:
            "A fast, modern, mobile-first website built to turn visitors into leads — not just to look good.",
        },
        {
          title: "Smart Chatbots",
          description:
            "A bot that talks to customers 24/7, answers questions, and books appointments — even in the middle of the night.",
        },
        {
          title: "Personal AI Assistants",
          description:
            "A digital assistant that handles inquiries, scheduling, and follow-ups, freeing your time for the business itself.",
        },
        {
          title: "AI Voice Phone Assistant",
          description:
            "An AI-powered voice assistant that answers your customers' calls, gives accurate information, and routes them to the right extension or team member — already live and running, not just a concept.",
          demoLabel: "Try the live demo",
        },
        {
          title: "Custom Automation",
          description:
            "Custom workflows with Make, n8n, and more — we connect your CRM, spreadsheets, WhatsApp, and email so repetitive tasks run on autopilot.",
        },
        {
          title: "Digital Growth Strategy",
          description:
            "A clear plan with measurable goals: more visibility, more leads, and more revenue over time.",
        },
      ],
    },
    portfolio: {
      eyebrow: "Selected Work",
      title: "Products We've Designed and Built",
      note: "Projects we built ourselves — a taste of the capabilities we'll bring to your business.",
      linkText: "View Project",
      items: {
        kupapay: {
          name: "KupaPay",
          tag: "iOS App",
          description:
            "A payments app for iPhone, published on the App Store — from concept to launch.",
        },
        karma: {
          name: "Karma Community",
          tag: "Community Platform",
          description:
            "A full community website for managing members, content, and internal communication.",
        },
        glowe: {
          name: "Glowe",
          tag: "Web Platform",
          description: "An innovative web platform built for the Karma community.",
        },
      },
    },
    process: {
      eyebrow: "How It Works",
      title: "Four Steps to Digital Growth",
      steps: [
        {
          title: "Free Discovery Call",
          description:
            "We get to know your business, customers, and goals — no commitment.",
        },
        {
          title: "Tailored Strategy",
          description:
            "We build a clear plan: what to do first and why, without wasting time or money.",
        },
        {
          title: "Build & Launch",
          description:
            "We set up your digital presence: Google Maps, website, bot, or AI assistant.",
        },
        {
          title: "Guidance & Growth",
          description:
            "We track results and keep improving to bring you more customers.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Everything You Wanted to Know",
      items: [
        {
          question: "You're a new company — why choose you?",
          answer:
            "Because you get software engineers who build to a high standard, a personal touch, and direct access to us. We're just starting out, so every client gets full attention and a level of investment that's hard to find elsewhere.",
        },
        {
          question: "How much does it cost?",
          answer:
            "It depends on scope — a website, a bot, or full guidance. In the free discovery call we'll understand what you need and give you a clear quote, no fine print.",
        },
        {
          question: "How long does it take?",
          answer:
            "A landing site usually goes live within one to two weeks. Larger projects take longer — we'll set a precise timeline up front.",
        },
        {
          question: "I have nothing digital yet — where do we start?",
          answer:
            "That's exactly what we're here for. We start from scratch: Google profile, website, and contact channels — step by step, at your pace.",
        },
        {
          question: "I'm not tech-savvy — is that a problem?",
          answer:
            "Not at all. We translate everything into plain language and handle the technical side. You run the business; we run the digital.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's Talk About Your Business",
      subtitle:
        "On WhatsApp, by phone, or by email — we'll get back to you today. You can also leave your details here and we'll reach out.",
      whatsapp: { label: "WhatsApp", value: "The fastest way to get a reply" },
      phone: { label: "Phone" },
      email: { label: "Email" },
      whatsappMessage:
        "Hi! I came across the ScaleDigital website and I'd love to hear how you can help my business grow digitally 🚀",
      mailtoSubject: "Website inquiry — ScaleDigital",
      form: {
        title: "Leave Your Details",
        name: "Name",
        namePlaceholder: "Your name",
        phone: "Phone",
        phonePlaceholder: "A number to call back",
        message: "Message",
        messagePlaceholder: "Tell us a bit about your business and what you need",
        submit: "Send via WhatsApp",
        orReachDirectly: "Or reach us directly:",
      },
    },
    footer: {
      tagline: "Nave Sarussi & Osher Baron · Digital Solutions for Businesses",
      rights: "All rights reserved.",
    },
  },
  fr: {
    dir: "ltr",
    htmlLang: "fr",
    meta: {
      title: "ScaleDigital | Une présence digitale qui attire des clients",
      description:
        "Nous créons pour les petites et moyennes entreprises une présence digitale qui attire des clients : Google Maps, sites web, chatbots, automatisations Make & n8n et assistants IA. Fondé par deux ingénieurs logiciels.",
    },
    nav: {
      about: "À propos",
      services: "Services",
      portfolio: "Réalisations",
      process: "Comment ça marche",
      contact: "Contact",
      cta: "Discutons",
      menuLabel: "Ouvrir le menu",
    },
    hero: {
      badge:
        "Fondé par deux ingénieurs logiciels expérimentés",
      titleLine1: "Une présence digitale qui attire",
      titleHighlight: "de vrais clients",
      subtitle:
        "Nous créons pour les petites et moyennes entreprises une présence digitale efficace : visibilité sur Google Maps, un site rapide qui transforme les visiteurs en contacts, et un chatbot ou assistant IA disponible pour vos clients 24h/24. Moins de charge pour vous, plus de clients pour votre entreprise.",
      note: "Nous débutons et accueillons un nombre limité de clients fondateurs — un accompagnement rapproché et toute notre attention.",
      ctaPrimary: "Réserver une consultation gratuite",
      ctaSecondary: "Nos services",
    },
    whyUs: {
      eyebrow: "Pourquoi ScaleDigital",
      title: "Un travail d'ingénieur, une relation personnelle",
      items: [
        {
          title: "Standard d'ingénierie",
          description:
            "Chaque site, bot et automatisation est construit avec la même rigueur qu'un vrai logiciel — rapide, stable et précis.",
        },
        {
          title: "Accès direct aux fondateurs",
          description:
            "Vous travaillez directement avec nous, sans intermédiaires. Vous savez toujours qui réalise votre projet et où il en est.",
        },
        {
          title: "IA nouvelle génération",
          description:
            "Des chatbots et assistants intelligents qui vous font gagner des heures et répondent à vos clients même en votre absence.",
        },
        {
          title: "Transparence totale",
          description:
            "Nous expliquons chaque étape en langage clair et travaillons selon des priorités précises — sans surprises.",
        },
      ],
    },
    about: {
      eyebrow: "Qui sommes-nous",
      title: "Deux ingénieurs logiciels derrière ScaleDigital",
      body: "Nous sommes Nave Sarussi et Osher Baron, deux ingénieurs logiciels expérimentés. Nous apportons au monde des affaires la précision, la rigueur et l'esprit d'ingénierie acquis au fil d'années de développement logiciel, pour offrir aux petites et moyennes entreprises une présence digitale qui produit des résultats — pas seulement un joli site de plus.",
    },
    founders: {
      nave: {
        name: "Nave Sarussi",
        role: "Cofondateur · Ingénieur logiciel",
        bio: "Ingénieur logiciel avec une expérience dans le développement de produits et de systèmes numériques.",
      },
      osher: {
        name: "Osher Baron",
        role: "Cofondateur · Ingénieur logiciel",
        bio: "Ingénieur logiciel avec une expérience dans le développement de produits et de systèmes numériques.",
      },
    },
    services: {
      eyebrow: "Nos services",
      title: "Tout ce qu'il faut pour se développer en ligne",
      items: [
        {
          title: "Présence sur Google Maps et la recherche",
          description:
            "Nous créons et optimisons votre fiche Google pour que les clients vous trouvent en premier, au moment précis où ils cherchent.",
        },
        {
          title: "Création de sites web",
          description:
            "Un site rapide, moderne et adapté au mobile, conçu pour transformer les visiteurs en contacts — pas seulement pour faire joli.",
        },
        {
          title: "Chatbots intelligents",
          description:
            "Un bot qui parle à vos clients 24h/24, répond aux questions et prend les rendez-vous — même en pleine nuit.",
        },
        {
          title: "Assistants IA personnels",
          description:
            "Un assistant digital qui gère les demandes, les rendez-vous et les relances, et vous libère du temps pour votre activité.",
        },
        {
          title: "Assistant vocal IA pour le téléphone",
          description:
            "Un assistant vocal basé sur l'IA qui répond aux appels de vos clients, fournit des informations précises et les redirige vers le bon poste ou la bonne personne — déjà opérationnel chez nous, pas juste une idée.",
          demoLabel: "Essayer la démo en direct",
        },
        {
          title: "Automatisation sur mesure",
          description:
            "Automatisations sur mesure avec Make, n8n et plus — nous relions CRM, tableurs, WhatsApp et e-mail pour que les tâches répétitives tournent toutes seules.",
        },
        {
          title: "Stratégie de croissance digitale",
          description:
            "Un plan clair avec des objectifs mesurables : plus de visibilité, plus de contacts et plus de revenus dans la durée.",
        },
      ],
    },
    portfolio: {
      eyebrow: "Réalisations",
      title: "Des produits que nous avons conçus et développés",
      note: "Des projets que nous avons construits nous-mêmes — un aperçu des capacités que nous mettrons au service de votre entreprise.",
      linkText: "Voir le projet",
      items: {
        kupapay: {
          name: "KupaPay",
          tag: "Application iOS",
          description:
            "Une application de paiement pour iPhone, publiée sur l'App Store — du concept au lancement.",
        },
        karma: {
          name: "Karma Community",
          tag: "Plateforme communautaire",
          description:
            "Un site communautaire complet pour gérer les membres, le contenu et la communication interne.",
        },
        glowe: {
          name: "Glowe",
          tag: "Plateforme web",
          description:
            "Une plateforme web innovante développée pour la communauté Karma.",
        },
      },
    },
    process: {
      eyebrow: "Comment ça marche",
      title: "Quatre étapes vers la croissance digitale",
      steps: [
        {
          title: "Appel de découverte gratuit",
          description:
            "Nous découvrons votre entreprise, vos clients et vos objectifs — sans engagement.",
        },
        {
          title: "Stratégie sur mesure",
          description:
            "Nous établissons un plan clair : quoi faire en premier et pourquoi, sans perdre de temps ni d'argent.",
        },
        {
          title: "Réalisation et lancement",
          description:
            "Nous mettons en place votre présence digitale : Google Maps, site, bot ou assistant IA.",
        },
        {
          title: "Accompagnement et croissance",
          description:
            "Nous suivons les résultats et continuons d'améliorer pour vous amener plus de clients.",
        },
      ],
    },
    faq: {
      eyebrow: "Questions fréquentes",
      title: "Tout ce que vous vouliez savoir",
      items: [
        {
          question: "Vous êtes une nouvelle entreprise — pourquoi vous choisir ?",
          answer:
            "Parce que vous bénéficiez d'ingénieurs logiciels qui travaillent à un haut niveau, d'une relation personnelle et d'un accès direct à nous. Nous débutons, donc chaque client reçoit toute notre attention et un investissement difficile à trouver ailleurs.",
        },
        {
          question: "Combien ça coûte ?",
          answer:
            "Cela dépend du périmètre — un site, un bot ou un accompagnement complet. Lors de l'appel de découverte gratuit, nous comprenons vos besoins et vous remettons un devis clair, sans petits caractères.",
        },
        {
          question: "Combien de temps faut-il ?",
          answer:
            "Un site vitrine est généralement en ligne en une à deux semaines. Les projets plus importants prennent plus de temps — nous fixons un calendrier précis dès le départ.",
        },
        {
          question: "Je n'ai rien de digital — par où commencer ?",
          answer:
            "C'est exactement notre rôle. Nous partons de zéro : fiche Google, site et canaux de contact — étape par étape, à votre rythme.",
        },
        {
          question: "Je ne suis pas à l'aise avec la technologie — est-ce un problème ?",
          answer:
            "Pas du tout. Nous traduisons tout en langage simple et gérons la partie technique. Vous vous occupez de votre activité, nous du digital.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Parlons de votre entreprise",
      subtitle:
        "Sur WhatsApp, par téléphone ou par e-mail — nous vous répondons dès aujourd'hui. Vous pouvez aussi laisser vos coordonnées ici et nous vous recontactons.",
      whatsapp: {
        label: "WhatsApp",
        value: "Le moyen le plus rapide d'obtenir une réponse",
      },
      phone: { label: "Téléphone" },
      email: { label: "E-mail" },
      whatsappMessage:
        "Bonjour ! J'ai découvert le site de ScaleDigital et j'aimerais savoir comment vous pouvez aider mon entreprise à se développer en ligne 🚀",
      mailtoSubject: "Demande via le site — ScaleDigital",
      form: {
        title: "Laissez vos coordonnées",
        name: "Nom",
        namePlaceholder: "Votre nom",
        phone: "Téléphone",
        phonePlaceholder: "Un numéro pour vous rappeler",
        message: "Message",
        messagePlaceholder: "Parlez-nous un peu de votre entreprise et de vos besoins",
        submit: "Envoyer via WhatsApp",
        orReachDirectly: "Ou contactez-nous directement :",
      },
    },
    footer: {
      tagline: "Nave Sarussi & Osher Baron · Solutions digitales pour les entreprises",
      rights: "Tous droits réservés.",
    },
  },
};
