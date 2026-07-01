import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border bg-brand-surface py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center">
        <p className="text-lg font-extrabold text-brand-navy">
          {siteConfig.businessName}
        </p>
        <p className="text-sm text-slate-500">
          נוה סרוסי ואושר ברון | פתרונות דיגיטליים לעסקים
        </p>
        <p className="text-xs text-slate-400">
          &copy; {year} {siteConfig.businessName}. כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
}
