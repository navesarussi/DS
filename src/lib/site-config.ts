// כל הנתונים הלא-מתורגמים של העסק - עדכנו כאן ותפוצץ בכל האתר.
// טקסטים (כותרות, תיאורים) נמצאים ב-src/lib/i18n/dictionaries.ts.

// מספר אוסטרלי: 08 7666 2740 (מקומי) → +61 8 7666 2740 (בינלאומי).
const RAW_PHONE = "0876662740";
const COUNTRY_CODE = "61";

function toIntl(local: string) {
  return local.startsWith("0") ? `${COUNTRY_CODE}${local.slice(1)}` : local;
}

export const siteConfig = {
  businessName: "ScaleDigital",
  siteUrl: "https://scaledigital-sd.com",
  founders: [
    { id: "nave", initials: "NS" },
    { id: "osher", initials: "OB" },
  ],
  contact: {
    phoneDisplay: "+61 8 7666 2740",
    phoneTel: `+${toIntl(RAW_PHONE)}`,
    whatsappNumber: toIntl(RAW_PHONE),
    email: "scaledigital2au@gmail.com",
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
  voiceDemoUrl: {
    he: "https://voice.panther2000.com/he/",
    en: "https://voice.panther2000.com/en/",
    fr: "https://voice.panther2000.com/en/",
  },
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
