# ScaleDigital Polish, Elevated Copy & French — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Elevate the ScaleDigital landing page (visual polish + subtle animations + top-tier trilingual copy) and add French as a third language with a prominent, scalable header language switcher.

**Architecture:** Client-rendered single page. i18n via a React context + a typed `dictionaries` object keyed by locale. Language switching becomes an N-language dropdown (not a binary toggle). Animations are pure CSS keyframes + a small `IntersectionObserver` reveal component — no new dependencies. Contact gains a client-only form that composes a prefilled WhatsApp/mailto message (no backend).

**Tech Stack:** Next.js 16, React 19, Tailwind CSS v4, TypeScript, lucide-react.

**Spec:** `docs/superpowers/specs/2026-07-01-scaledigital-polish-fr-design.md`

### Testing approach (override note)
The repo has **no test framework** (no `test` script, no jest/vitest) and the work is visual/content-heavy. Per the spec's §11 and the principle that project context overrides default TDD, verification is via **`npm run build` + `npm run lint` + manual browser checks**, not unit tests. Adding a test harness is out of scope.

### Quality tooling to use during execution
- Use the **hebrew-content-writer** skill for Hebrew copy (user emphasized "text at the highest level").
- Keep RTL correctness (hebrew-rtl-best-practices): logical layout, no hardcoded left/right where direction matters.

---

## File Structure

**Modify**
- `src/lib/i18n/dictionaries.ts` — add `fr` to `Locale`/`locales`; add `localeMeta`; add `whyUs`, `faq`, `contact.form` keys; rewrite all copy (he/en) and add all fr copy.
- `src/lib/i18n/language-context.tsx` — `setLocale` as the API; init script + validation support `he|en|fr`.
- `src/components/header.tsx` — use `<LanguageSwitcher />`, visible on desktop + mobile.
- `src/components/hero.tsx` — direction via `dict.dir`; entrance/reveal; subtle founding-clients line.
- `src/components/portfolio.tsx` — direction via `dict.dir`; reframed as "Selected Work"; reveal.
- `src/components/about.tsx`, `services.tsx`, `process.tsx`, `contact.tsx`, `footer.tsx` — polish + reveal.
- `src/components/contact.tsx` — clean method cards + embed the new form.
- `src/lib/site-config.ts` — fix phone to +61 (Australia).
- `src/app/globals.css` — animation keyframes, utilities, reduced-motion, small design tokens.
- `src/app/page.tsx` — insert `<WhyUs />` and `<Faq />` in order.

**Create**
- `src/components/language-switcher.tsx` — accessible N-language dropdown.
- `src/components/reveal.tsx` — IntersectionObserver reveal wrapper (+ stagger).
- `src/components/why-us.tsx` — differentiators strip.
- `src/components/faq.tsx` — accessible accordion.
- `src/components/contact-form.tsx` — client-only form composing WhatsApp/mailto.

---

## Task 1: i18n foundation — add French locale + new keys

**Files:** Modify `src/lib/i18n/dictionaries.ts`, `src/lib/i18n/language-context.tsx`

- [ ] **Step 1: Extend the type & locales, add `localeMeta`.**
  In `dictionaries.ts`:
  ```ts
  export type Locale = "he" | "en" | "fr";
  export const locales: Locale[] = ["he", "en", "fr"];

  export const localeMeta: Record<Locale, { label: string; short: string }> = {
    he: { label: "עברית", short: "עב" },
    en: { label: "English", short: "EN" },
    fr: { label: "Français", short: "FR" },
  };
  ```

- [ ] **Step 2: Extend the `Dictionary` type** with the new sections (add to the existing type):
  ```ts
  whyUs: {
    eyebrow: string;
    title: string;
    items: { title: string; description: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { question: string; answer: string }[];
  };
  ```
  And extend `contact` with:
  ```ts
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
  ```

- [ ] **Step 3: Update `language-context.tsx`** — default stays `he`; expose `setLocale`; update init script + effect to treat only `he` as RTL:
  ```ts
  export const LANGUAGE_INIT_SCRIPT = `(function() {
    try {
      var lang = localStorage.getItem("${STORAGE_KEY}");
      if (lang === "he" || lang === "en" || lang === "fr") {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
      }
    } catch (e) {}
  })();`;
  ```
  In the provider: validate stored value against `["he","en","fr"]`; keep the `dir`/`lang` effect (already reads `dictionaries[locale].dir`). Remove `toggleLocale` from the context value; keep `setLocale`.

- [ ] **Step 4: Verify types compile** — `npx tsc --noEmit` (expect: no errors once all dicts filled in Task 6/7/8; may error until then — that's fine, revisit).

- [ ] **Step 5: Commit** after the dictionary content tasks (see Task 8), since types depend on complete data.

---

## Task 2: LanguageSwitcher component + header integration

**Files:** Create `src/components/language-switcher.tsx`; Modify `src/components/header.tsx`

- [ ] **Step 1: Build `language-switcher.tsx`** — a client dropdown:
  - Trigger: `<button>` with `Globe` icon + `localeMeta[locale].short` + `ChevronDown` (from lucide-react), rounded-full, brand-bordered.
  - Menu: `locales.map` → button per locale showing `localeMeta[l].label` + a `Check` icon when `l === locale`; calls `setLocale(l)` then closes.
  - A11y: `aria-haspopup="menu"`, `aria-expanded`, `role="menu"`/`role="menuitem"`; close on outside click (a `useEffect` mousedown listener + ref) and on `Escape`.
  - Positioning: absolute panel; use logical `end-0` so it aligns correctly in RTL/LTR.
  - Optional prop `className` for placement tweaks.

- [ ] **Step 2: Integrate into `header.tsx`** — remove the two inline `toggleLocale` buttons; render `<LanguageSwitcher />` in the desktop actions cluster, and **also render it in the top bar for mobile** (outside the hamburger) so it is always visible. Keep the WhatsApp CTA on desktop; on mobile keep the CTA inside the menu but the switcher visible in the bar.

- [ ] **Step 3: Verify** — `npm run build` compiles; manual: switcher visible at all breakpoints.

- [ ] **Step 4: Commit** (with Task 1) — `feat(i18n): N-language switcher + French scaffolding`.

---

## Task 3: Direction fixes

**Files:** Modify `src/components/hero.tsx`, `src/components/portfolio.tsx`

- [ ] **Step 1: hero.tsx** — replace `const ArrowIcon = locale === "en" ? ArrowRight : ArrowLeft;` with direction-based:
  ```ts
  const ArrowIcon = dict.dir === "rtl" ? ArrowLeft : ArrowRight;
  ```
  (Drop the now-unused `locale` if not otherwise used.)

- [ ] **Step 2: portfolio.tsx** — replace `const ArrowIcon = locale === "en" ? ArrowUpRight : ArrowUpLeft;` with:
  ```ts
  const ArrowIcon = dict.dir === "rtl" ? ArrowUpLeft : ArrowUpRight;
  ```

- [ ] **Step 3: Verify** — French renders LTR arrows; Hebrew still RTL.

---

## Task 4: Phone number correction

**Files:** Modify `src/lib/site-config.ts`

- [ ] **Step 1:** Set the number explicitly to the Australian value and remove the stale uncertainty comment:
  ```ts
  // Australian mobile: 0434 109 987 → international +61 434 109 987
  const RAW_PHONE = "0434109987";
  const COUNTRY_CODE = "61";
  function toIntl(local: string) {
    return local.startsWith("0") ? `${COUNTRY_CODE}${local.slice(1)}` : local;
  }
  ```
  Set `phoneDisplay: "+61 434 109 987"`, keep `phoneTel: \`+${toIntl(RAW_PHONE)}\``, `whatsappNumber: toIntl(RAW_PHONE)`.

- [ ] **Step 2: Verify** — WhatsApp/tel links resolve to `+61434109987`.

- [ ] **Step 3: Commit** — `fix: correct phone number to Australian +61`.

---

## Task 5: Animation infrastructure

**Files:** Modify `src/app/globals.css`; Create `src/components/reveal.tsx`

- [ ] **Step 1: globals.css** — add keyframes + utilities + reduced-motion + a slow float for hero blobs:
  ```css
  @keyframes sd-fade-up { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
  @keyframes sd-fade-in { from { opacity: 0; } to { opacity: 1; } }
  @keyframes sd-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-24px); } }

  .sd-reveal { opacity: 0; }
  .sd-reveal.is-visible { animation: sd-fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both; }
  .sd-float { animation: sd-float 9s ease-in-out infinite; }

  @media (prefers-reduced-motion: reduce) {
    .sd-reveal, .sd-reveal.is-visible { opacity: 1 !important; animation: none !important; }
    .sd-float { animation: none !important; }
  }
  ```

- [ ] **Step 2: reveal.tsx** — client wrapper using IntersectionObserver:
  ```tsx
  "use client";
  import { useEffect, useRef, useState } from "react";
  export function Reveal({ children, delay = 0, className = "" }: {
    children: React.ReactNode; delay?: number; className?: string;
  }) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      const el = ref.current; if (!el) return;
      const io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting) { setVisible(true); io.disconnect(); }
      }, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
      io.observe(el); return () => io.disconnect();
    }, []);
    return (
      <div ref={ref} className={`sd-reveal ${visible ? "is-visible" : ""} ${className}`}
           style={{ animationDelay: visible ? `${delay}ms` : undefined }}>
        {children}
      </div>
    );
  }
  ```
  Note: initial opacity 0 could hide content if JS fails; acceptable trade-off, and reduced-motion users get opacity 1. (If SSR-noscript is a concern later, add a `<noscript>` style override.)

- [ ] **Step 3: Verify** — `npm run build`; manual: sections fade up on scroll; reduced-motion shows everything static.

- [ ] **Step 4: Commit** — `feat: subtle scroll-reveal animation system`.

---

## Task 6: Elevated copy — existing sections (he/en) + French

**Files:** Modify `src/lib/i18n/dictionaries.ts`

- [ ] **Step 1:** Using the **hebrew-content-writer** skill for Hebrew, rewrite `meta`, `nav`, `hero`, `about`, `founders`, `services`, `portfolio`, `process`, `contact`, `footer` for **he** and **en** to the refined professional/trustworthy tone. Reframe `portfolio` copy to "products we designed and built". Add one subtle founding-clients line in `hero.subtitle` or a new `hero.note`.
- [ ] **Step 2:** Add the complete **fr** dictionary mirroring the structure, professional French, `dir: "ltr"`, `htmlLang: "fr"`.
- [ ] **Step 3: Verify** — `npx tsc --noEmit` after Tasks 7–8 complete the new keys.

---

## Task 7: New sections — Why Us + FAQ

**Files:** Create `src/components/why-us.tsx`, `src/components/faq.tsx`; Modify `dictionaries.ts`, `src/app/page.tsx`

- [ ] **Step 1: dictionaries** — fill `whyUs` (3–4 honest differentiators) and `faq` (4–6 Q/A handling first-client objections) for he/en/fr.
- [ ] **Step 2: why-us.tsx** — compact card strip (icons from lucide-react: e.g. `Code2`, `Handshake`, `Sparkles`, `ShieldCheck`), wrapped in `<Reveal>` with staggered delays. Follow existing section markup conventions (`max-w-6xl`, eyebrow/title pattern).
- [ ] **Step 3: faq.tsx** — accessible accordion using native `<details>`/`<summary>` styled with Tailwind (`group`, rotating chevron), or a controlled list with `aria-expanded`. RTL-safe chevron via logical classes.
- [ ] **Step 4: page.tsx** — insert `<WhyUs />` after `<Hero />` and `<Faq />` after `<Process />`:
  ```tsx
  <Hero /> <WhyUs /> <About /> <Services /> <Portfolio /> <Process /> <Faq /> <Contact />
  ```
- [ ] **Step 5: Verify** — `npm run build`; sections render in all three languages.
- [ ] **Step 6: Commit** — `feat: add Why-Us strip and FAQ (trilingual)`.

---

## Task 8: Contact refinement + lightweight form

**Files:** Create `src/components/contact-form.tsx`; Modify `src/components/contact.tsx`, `dictionaries.ts`

- [ ] **Step 1: dictionaries** — fill `contact.form` labels/placeholders for he/en/fr.
- [ ] **Step 2: contact-form.tsx** — client form (name, phone, message). On submit, build a WhatsApp URL from `whatsappHref(...)` with a composed message (`"${name} (${phone}): ${message}"`), open it (`window.open`), and offer a mailto fallback link. Client-side required-field validation; no backend.
- [ ] **Step 3: contact.tsx** — keep the three method cards but make them clean/scannable; place `<ContactForm />` alongside (e.g. two-column on desktop: methods + form) so all options are present without crowding.
- [ ] **Step 4: Verify** — submitting composes a correct prefilled WhatsApp message with the +61 number; links work in all languages.
- [ ] **Step 5: Commit** — `feat: clean contact section + lightweight form`.

---

## Task 9: Visual polish + reveal wiring across sections

**Files:** Modify `hero.tsx`, `about.tsx`, `services.tsx`, `portfolio.tsx`, `process.tsx`, `contact.tsx`, `footer.tsx`, `globals.css`

- [ ] **Step 1:** Apply the refined visual system: consistent section rhythm, refined heading scale/tracking, softer card shadows + hairline borders, focus-visible rings, alternating backgrounds. Add `.sd-float` to hero blobs and a subtle hero entrance.
- [ ] **Step 2:** Wrap section headers and card grids in `<Reveal>` with small staggered delays (e.g. `delay={index * 80}` for card lists).
- [ ] **Step 3:** Ensure every change is RTL/LTR-correct (logical properties; no direction-breaking hardcoded margins).
- [ ] **Step 4: Verify** — visual pass in he/en/fr, desktop + mobile; no layout shift; reduced-motion respected.
- [ ] **Step 5: Commit** — `style: elevate visual design + wire reveal animations`.

---

## Task 10: Final verification & deploy

- [ ] **Step 1:** `npm run lint` → clean.
- [ ] **Step 2:** `npm run build` → succeeds.
- [ ] **Step 3:** Manual: switch he↔en↔fr (text, dir, arrows, switcher, persistence); language switcher clearly visible in header on desktop + mobile; contact links use +61; animations smooth + reduced-motion safe.
- [ ] **Step 4:** Commit any fixes; then push the branch and open a PR (or merge per user's deployment flow) so Vercel deploys the updated version.

---

## Self-Review (completed)
- **Spec coverage:** language system (T1–T2), French (T1,T6,T7,T8), prominent switcher (T2), direction fix (T3), phone fix (T4), animations (T5,T9), copy elevation (T6), Why-Us (T7), FAQ (T7), contact + form (T8), visual polish (T9), verify/deploy (T10). All spec sections mapped.
- **Placeholders:** copy strings are generated during execution using the hebrew-content-writer skill and the tone spec; structure/keys are fully specified. No unresolved TODOs in code steps.
- **Type consistency:** `Locale`, `localeMeta`, `whyUs`, `faq`, `contact.form`, `setLocale`, `Reveal` used consistently across tasks.
