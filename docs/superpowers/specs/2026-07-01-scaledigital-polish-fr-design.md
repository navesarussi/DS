# ScaleDigital — Polish, Elevated Copy & French Language — Design Spec

**Date:** 2026-07-01
**Author:** Nave Sarussi (with Claude)
**Status:** Awaiting approval

---

## 1. Context & Goals

ScaleDigital is a single-page marketing site (Next.js 16, React 19, Tailwind v4, TypeScript) for a
new digital-solutions studio run by two experienced software engineers (Nave Sarussi & Osher Baron).

**Current reality (decisive constraint):** the business is at the very beginning. It has **no clients
yet** and is seeking its **first clients**. The "portfolio" items (KupaPay, Karma Community, Glowe) are
products the founders built themselves. Therefore the site must build trust **honestly** — no fake
testimonials, no invented client counts.

**Goals**
1. Elevate the visual design to feel professional and premium — a *polish & refine* pass on the
   existing brand, not a redesign.
2. Add **subtle, professional animations**.
3. Rewrite all copy (Hebrew + English) to a high, credible standard and add **French** as a third
   language, with the language system built to scale to more languages later.
4. Make the **language switcher prominent and clearly visible in the header** on both desktop and
   mobile (currently it is `md`-only on desktop and hidden inside the mobile hamburger menu).
5. Fix the phone number (currently mis-converted to +972; the real number is Australian +61).

**Non-goals (deliberately out of scope)**
- Client testimonials / logo walls (none exist — will not fabricate).
- Pricing/packages section (would prematurely gate first-contact).
- Backend/email service for the contact form.
- CMS, blog, multi-page routing.

---

## 2. Positioning & Tone

**Tone:** professional, trustworthy, refined (chosen). Applied honestly for an early-stage studio:

- Lean on **real** credibility: experienced software engineers, years of building real software,
  direct founder access, modern AI-driven approach, transparency.
- Reframe the portfolio truthfully as **"products we designed and built"** — proof of *capability*,
  not claims of past client work.
- Include a **subtle** "founding clients" angle (approved): e.g. a quiet line such as
  *"We're taking on a select number of founding clients"* — creates exclusivity and gentle urgency
  without sounding desperate. One tasteful placement (hero sub-line or contact section), not repeated.

---

## 3. Information Architecture

Keep the existing flow; refine it; add only what serves a first client.

| # | Section | Change |
|---|---------|--------|
| 1 | Header | Prominent **LanguageSwitcher** (dropdown) + CTA. Visible on desktop **and** mobile. |
| 2 | Hero | Elevated copy; subtle entrance animation; animated gradient background; subtle founding-clients line. |
| 3 | **Why Us** strip *(new, compact)* | 3–4 real differentiators (engineering-grade quality, direct founder access, modern AI approach, transparency). |
| 4 | About | Strengthen the engineering-credibility story. |
| 5 | Services | Visual refinement + sharper copy. |
| 6 | Portfolio → "Selected Work" | Reframed honestly as products the founders built. |
| 7 | Process | Refinement. |
| 8 | **FAQ** *(new)* | Objection-handling for a first client: cost, timeline, "you're new", "I have nothing digital yet". |
| 9 | Contact | All methods (WhatsApp + phone + email + **lightweight form**), clean and easy to choose — not crowded. |
| 10 | Footer | Refinement. |

---

## 4. Language System (core requirement)

### 4.1 Data model — `src/lib/i18n/dictionaries.ts`
- Extend `Locale` to `"he" | "en" | "fr"` and `locales` to `["he", "en", "fr"]`.
- Add a full **`fr`** dictionary (professional French copy). `dir: "ltr"`, `htmlLang: "fr"`.
- Add a `localeMeta` map for the switcher UI, e.g.:
  ```ts
  export const localeMeta: Record<Locale, { label: string; short: string }> = {
    he: { label: "עברית", short: "עב" },
    en: { label: "English", short: "EN" },
    fr: { label: "Français", short: "FR" },
  };
  ```
- Add dictionary keys for the new sections: `whyUs`, `faq`, and `contact.form` (see §6).
- Structure must stay uniform so adding a 4th language later is "copy the shape, translate".

### 4.2 Context — `src/lib/i18n/language-context.tsx`
- `DEFAULT_LOCALE` stays `"he"`.
- Replace the binary `toggleLocale` with the general `setLocale(locale)` (keep `toggleLocale`
  removed from the public surface; the switcher uses `setLocale`).
- Update `LANGUAGE_INIT_SCRIPT` to accept any known locale and set
  `dir = locale === "he" ? "rtl" : "ltr"` (so `fr` renders LTR). Validate against the known set.
- Persist selection to `localStorage` (unchanged key `sd-lang`), guard unknown values.

### 4.3 Switcher UI — new `src/components/language-switcher.tsx`
- A real menu, not a toggle: a trigger button (Globe icon + current `short` label + chevron) that
  opens a dropdown listing **all** locales, with a check mark on the active one.
- **Always visible** in the header on desktop and mobile (not hidden in the hamburger).
- Accessible: `aria-haspopup`, `aria-expanded`, `role="menu"`/`menuitem`, keyboard support
  (Enter/Space to open, Arrow/Escape to navigate/close), close on outside click.
- RTL-aware positioning (opens correctly in both directions).
- Adding a future language requires only a dictionary + `localeMeta` entry — no switcher changes.

### 4.4 Header — `src/components/header.tsx`
- Replace the two inline toggle buttons with `<LanguageSwitcher />`.
- Ensure the switcher sits in the top bar itself on mobile (visible without opening the menu).

### 4.5 Direction bug fix — `src/components/hero.tsx`
- Current arrow logic keys off `locale === "en"`; generalize to direction:
  `dir === "rtl" ? ArrowLeft : ArrowRight` so French (LTR) points correctly.
- Audit all components for any other `locale === "en"` direction assumptions and switch to `dict.dir`.

---

## 5. Visual Design System (polish & refine)

Keep the existing brand palette (navy `#0b2545`, blue `#1b4f91`, blue-light `#2e86de`, surface,
border) and Heebo font. Refinements only:

- **Typography:** tighter, more deliberate scale; refined line-heights and letter-spacing on
  headings; consistent eyebrow/label treatment.
- **Spacing & rhythm:** consistent vertical section rhythm; better max-width and gutters.
- **Surfaces:** cards with subtle depth (soft shadows, hairline borders, gentle radius); alternating
  section backgrounds (white / `brand-surface`) for rhythm.
- **Hero background:** keep the blurred blobs but make them feel alive (slow float) and add a subtle
  grid/gradient for depth.
- **Micro-interactions:** hover lift + shadow on cards, smooth button transitions, focus-visible
  rings for accessibility.
- **Icons:** continue with `lucide-react`; consistent sizing and accent color.

All refinements must work identically in RTL (he) and LTR (en/fr) — use logical properties / Tailwind
logical utilities, no hardcoded left/right where direction matters.

---

## 6. New Sections & Contact

### 6.1 Why Us — `src/components/why-us.tsx`
Compact strip of 3–4 cards, each an honest differentiator. Copy in `dict.whyUs`.

### 6.2 FAQ — `src/components/faq.tsx`
Accessible accordion (native `<details>`/`<summary>` or a small controlled component with proper
ARIA). 4–6 questions in `dict.faq.items[]` addressing first-client objections. Subtle open/close
animation, reduced-motion aware.

### 6.3 Contact — refine `src/components/contact.tsx` (+ optional `contact-form.tsx`)
- Present WhatsApp (primary), phone, and email as clean, equal, easy-to-scan choices — uncluttered.
- Add a **lightweight form** (name, phone, short message). On submit it **composes a prefilled
  WhatsApp message** (and offers a mailto fallback). **No backend, no API keys.** Client-side only.
- Basic client-side validation and clear success/redirect behavior.
- Copy in `dict.contact.form`.

---

## 7. Animation System (subtle & professional, no new dependencies)

**Approach:** CSS keyframes + a tiny `IntersectionObserver` reveal hook. No Framer Motion.

- `src/app/globals.css`: add `fade-up` / `fade-in` keyframes, utility classes, and a
  `@media (prefers-reduced-motion: reduce)` block that disables transforms/animations.
- New `src/components/reveal.tsx` (or `src/lib/use-reveal.ts`): a client component/hook that adds an
  "in-view" class when the element enters the viewport; supports a stagger delay (via index) for
  lists of cards.
- Apply reveal-on-scroll to section headers and card grids (staggered), hover micro-interactions on
  interactive elements, and the hero entrance + floating background.
- Everything must degrade gracefully with reduced-motion and must not cause layout shift or hydration
  mismatches (respect SSR: initial state visible-safe).

---

## 8. Copywriting Plan

- **Hebrew:** rewrite all sections to a higher, credible standard; keep RTL punctuation/typography
  correct; honest early-stage framing; one subtle founding-clients line.
- **English:** parallel rewrite to native, confident, professional English.
- **French:** fresh professional translation matching tone; correct accents and typography
  (e.g. `«  »` optional, proper apostrophes). Founders' names unchanged.
- Reframe portfolio copy to "products we designed and built".
- New copy for Why Us, FAQ, and contact form across all three languages.

---

## 9. Data & Config Corrections — `src/lib/site-config.ts`

- Phone number is **Australian**, not Israeli. Correct the international conversion to **+61**:
  - `phoneDisplay`: `+61 434 109 987`
  - `phoneTel`: `+61434109987`
  - `whatsappNumber`: `61434109987`
- Replace/adjust the `toIntl` helper (currently hardcodes `972`) and remove the stale uncertainty
  comment, or set the country code explicitly for Australia.

---

## 10. Technical Notes / Constraints

- This is a modified Next.js 16 ("not the Next.js you know" — per `AGENTS.md`). Before writing code,
  read the relevant guide under `node_modules/next/dist/docs/` and heed deprecations.
- No new runtime dependencies (animations are CSS + IO; form is client-only).
- Keep components small and single-purpose; follow existing file conventions.

---

## 11. Verification

- `npm run build` and `npm run lint` pass.
- Manual: switch he ↔ en ↔ fr — text, `dir`, arrows, and switcher all update correctly; selection
  persists across reload; no hydration warnings.
- Language switcher is clearly visible in the header on desktop **and** mobile.
- WhatsApp / phone / email links use the corrected +61 number; contact form composes a correct
  prefilled message.
- Animations are smooth, respect `prefers-reduced-motion`, and cause no layout shift.
- Lighthouse/basic a11y sanity: focus states, contrast, keyboard nav for the switcher and FAQ.

---

## 12. Future (not now)
- Additional languages (drop-in via dictionary + `localeMeta`).
- Real testimonials once first clients are onboarded.
- Optional pricing section; optional backend-backed contact form (e.g. Resend).
