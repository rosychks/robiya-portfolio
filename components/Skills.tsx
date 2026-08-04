"use client";

import { useLang } from "@/lib/LangContext";

export default function Skills() {
  const { t } = useLang();

  return (
    <section id="skills" className="py-14 scroll-mt-24">
      <div className="flex items-baseline gap-3.5 mb-8">
        <span className="font-mono text-[13px] text-violet">03</span>
        <h2 className="section-title">{t.skillsSection.title}</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
      </div>

      <div className="glass rounded-glass p-6 mb-6">
        <h4 className="font-mono text-[13px] text-violet uppercase tracking-wider mb-3">{t.skillsSection.top}</h4>
        <div className="flex flex-wrap gap-2">
          {t.topSkills.map((s) => (
            <span key={s} className="tag text-[12px]">{s}</span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {t.skillGroups.map((g) => (
          <div key={g.name} className="glass rounded-glass p-6">
            <h4 className="font-mono text-[13px] text-violet uppercase tracking-wider mb-3">{g.name}</h4>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="text-[12.5px] px-3 py-1.5 rounded-lg glass-inset-sm text-text1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
