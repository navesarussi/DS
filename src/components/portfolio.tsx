import { ArrowUpLeft } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-6xl px-5 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-brand-blue">
          פרויקטים שבנינו
        </h2>
        <p className="mt-3 text-3xl font-extrabold text-brand-navy md:text-4xl">
          קצת מהניסיון שלנו
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {siteConfig.portfolio.map((project, index) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-2xl border border-brand-border bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5"
          >
            <div
              className="flex h-32 items-center justify-center text-2xl font-extrabold text-white"
              style={{
                background:
                  index % 2 === 0
                    ? "linear-gradient(135deg, var(--brand-navy), var(--brand-blue))"
                    : "linear-gradient(135deg, var(--brand-blue), var(--brand-blue-light))",
              }}
            >
              {project.name}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="text-xs font-bold uppercase tracking-wide text-brand-blue">
                {project.tag}
              </span>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {project.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy">
                לצפייה בפרויקט
                <ArrowUpLeft className="h-4 w-4 transition group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
