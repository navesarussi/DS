// כל פרטי העסק במקום אחד - עדכנו כאן ותפוצץ בכל האתר.

// חשוב: המספר "0434109987" נמסר בהודעה קולית/מוקלדת שבה גם הופיע "61" לפני המספר,
// כך שיכול להיות שיש בו טעות הקלדה. בדקו ותקנו כאן אם צריך.
const RAW_PHONE = "0434109987";

function toIntl(local: string) {
  return local.startsWith("0") ? `972${local.slice(1)}` : local;
}

export const siteConfig = {
  businessName: "ScaleDigital",
  tagline: "פתרונות דיגיטליים לעסקים קטנים ובינוניים",
  founders: [
    {
      name: "נוה סרוסי",
      role: "מייסד שותף | מהנדס תוכנה",
      bio: "מהנדס תוכנה ובוגר יחידה טכנולוגית בחיל האוויר, צה״ל.",
      initials: "נס",
    },
    {
      name: "אושר ברון",
      role: "מייסד שותף | מהנדס תוכנה",
      bio: "מהנדס תוכנה ובוגר יחידה טכנולוגית בחיל האוויר, צה״ל.",
      initials: "אב",
    },
  ],
  contact: {
    phoneDisplay: RAW_PHONE,
    phoneTel: `+${toIntl(RAW_PHONE)}`,
    whatsappNumber: toIntl(RAW_PHONE),
    whatsappMessage: "היי! ראיתי את האתר של ScaleDigital ואשמח לשמוע איך תוכלו לעזור לעסק שלי להתקדם דיגיטלית 🚀",
    email: "navesarussi@gmail.com",
  },
  portfolio: [
    {
      name: "KupaPay",
      description: "אפליקציית מובייל ל-App Store לניהול תשלומים.",
      url: "https://apps.apple.com/app/kupapay/id6780216665",
      tag: "אפליקציית iOS",
    },
    {
      name: "Karma Community",
      description: "אתר קהילה דיגיטלי מלא לניהול וחיבור בין חברי קהילה.",
      url: "https://karma-community-kc.com/",
      tag: "אתר קהילה",
    },
    {
      name: "Glowe",
      description: "פלטפורמת ווב חדשנית שפותחה עבור קהילת Karma.",
      url: "https://dev.karma-community.pages.dev/glowe/",
      tag: "פלטפורמת ווב",
    },
  ],
} as const;

export function whatsappHref() {
  const { whatsappNumber, whatsappMessage } = siteConfig.contact;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
}

export function mailtoHref() {
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    "פנייה מהאתר - ScaleDigital"
  )}`;
}

export function telHref() {
  return `tel:${siteConfig.contact.phoneTel}`;
}
