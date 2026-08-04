"use client";

import { useLang } from "@/lib/LangContext";
import GithubProjects from "./GithubProjects";

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="py-14 scroll-mt-24">
      <div className="flex items-baseline gap-3.5 mb-8">
        <span className="font-mono text-[13px] text-violet">01</span>
        <h2 className="section-title">{t.projectsSection.title}</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-white/40 to-transparent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {t.projects.map((p) => (
          <div key={p.title} className="glass-featured p-7 flex flex-col gap-3.5 relative">
            <span className="self-start flex items-center gap-1.5 px-3 py-1 rounded-full glass-inset-sm text-[10.5px] font-mono uppercase tracking-wider text-violet">
              ⚡ {t.projectsSection.featuredBadge}
            </span>
            <div>
              <h3 className="font-display font-semibold text-[19px] text-text0">{p.title}</h3>
              <p className="text-xs text-text2 font-mono mt-1">{p.subtitle}</p>
            </div>
            <p className="text-text1 text-[14px] leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
              {p.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            <div className="flex gap-3 pt-1">
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="chip !py-1.5 !px-3.5 text-[12px]"
              >
                {t.projectsSection.github} ↗
              </a>
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="!py-1.5 !px-3.5 text-[12px] rounded-full glass-inset-sm text-violet flex items-center gap-1.5 no-underline"
              >
                ▶ {t.projectsSection.liveDemo}
              </a>
            </div>
          </div>
        ))}
      </div>

      <GithubProjects />
    </section>
  );
}
