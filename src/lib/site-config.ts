// כל הנתונים הלא-מתורגמים של העסק - עדכנו כאן ותפוצץ בכל האתר.
// טקסטים (כותרות, תיאורים) נמצאים ב-src/lib/i18n/dictionaries.ts.

// חשוב: המספר "0434109987" נמסר בהודעה קולית/מוקלדת שבה גם הופיע "61" לפני המספר,
// כך שיכול להיות שיש בו טעות הקלדה. בדקו ותקנו כאן אם צריך.
const RAW_PHONE = "0434109987";

function toIntl(local: string) {
  return local.startsWith("0") ? `972${local.slice(1)}` : local;
}

export const siteConfig = {
  businessName: "ScaleDigital",
  founders: [
    { id: "nave", initials: "NS" },
    { id: "osher", initials: "OB" },
  ],
  contact: {
    phoneDisplay: RAW_PHONE,
    phoneTel: `+${toIntl(RAW_PHONE)}`,
    whatsappNumber: toIntl(RAW_PHONE),
    email: "navesarussi@gmail.com",
  },
  portfolio: [
    {
      id: "kupapay",
      url: "https://apps.apple.com/app/kupapay/id6780216665",
    },
    {
      id: "karma",
      url: "https://karma-community-kc.com/",
    },
    {
      id: "glowe",
      url: "https://dev.karma-community.pages.dev/glowe/",
    },
  ],
} as const;

export function whatsappHref(message: string) {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function mailtoHref(subject: string) {
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}`;
}

export function telHref() {
  return `tel:${siteConfig.contact.phoneTel}`;
}
