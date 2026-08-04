"use client";

import { useLang } from "@/lib/LangContext";

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="py-14 scroll-mt-24">
      <div className="flex items-baseline gap-3.5 mb-8">
        <span className="font-mono text-[13px] text-violet">01</span>
        <h2 className="section-title">{t.projectsSection.title}</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-glass-border to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {t.projects.map((p) => (
          <div key={p.title} className="glass rounded-glass p-7 flex flex-col gap-3.5 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-violet/20 blur-3xl pointer-events-none" />
            <div>
              <h3 className="font-display font-semibold text-[18px] text-text0">{p.title}</h3>
              <p className="text-xs text-text2 font-mono mt-1">{p.subtitle}</p>
            </div>
            <p className="text-text1 text-[14px] leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
              {p.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan text-xs font-mono no-underline border-b border-cyan/35 hover:border-cyan self-start"
            >
              {t.projectsSection.github} ↗
            </a>
          </div>
        ))}
      </div>

      <h3 className="font-display text-[15px] text-text2 mt-10 mb-4">{t.projectsSection.more}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {t.moreProjects.map((p) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-glass p-5 no-underline flex flex-col gap-1.5 hover:bg-white/[0.08] transition-colors"
          >
            <span className="font-mono text-[13px] text-text0">{p.title}</span>
            <span className="text-text2 text-[12.5px] leading-relaxed">{p.desc}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
