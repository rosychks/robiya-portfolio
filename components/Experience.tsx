"use client";

import { useLang } from "@/lib/LangContext";

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="py-14 scroll-mt-24">
      <div className="flex items-baseline gap-3.5 mb-8">
        <span className="font-mono text-[13px] text-violet">02</span>
        <h2 className="section-title">{t.experienceSection.title}</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
      </div>

      <div className="flex flex-col gap-5">
        {t.experience.map((e) => (
          <div key={e.role + e.company} className="glass rounded-glass p-7">
            <div className="flex flex-wrap justify-between gap-2 mb-1">
              <h3 className="font-display font-semibold text-[19px] text-text0">
                {e.role} <span className="text-text2 font-normal">· {e.company}</span>
              </h3>
              <span className="font-mono text-xs text-violet whitespace-nowrap">{e.date}</span>
            </div>
            <div className="text-text2 text-[13.5px] mb-3.5">{e.location}</div>
            <ul className="list-disc pl-[18px] text-text1 text-[14.5px] leading-relaxed marker:text-violet space-y-1.5">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
