"use client";

import { useLang } from "@/lib/LangContext";
import { contact } from "@/lib/translations";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="pt-16 pb-14 flex flex-col items-start gap-6">
      <div className="flex items-center gap-2.5 font-mono text-xs tracking-[0.14em] uppercase text-violet">
        <span className="w-2 h-2 rounded-full bg-cyan shadow-[0_0_10px_#8bd41a] inline-block" />
        {t.hero.eyebrow}
      </div>

      <h1 className="font-display font-bold text-[40px] sm:text-[56px] md:text-[72px] leading-[1.02] tracking-tight bg-gradient-to-r from-text0 via-violet to-cyan bg-clip-text text-transparent">
        Robiya
        <br />
        Olimjonova
      </h1>

      <p className="text-[18px] md:text-[22px] text-text1 font-medium">{t.hero.role}</p>

      <div className="w-full glass rounded-glass px-6 py-5 flex flex-wrap gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-2.5">
          <span className="chip">📍 {t.hero.location}</span>
          <a className="chip" href={`mailto:${contact.email}`}>✉ Email</a>
          <a className="chip" href={contact.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a className="chip" href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
      </div>

      <p className="text-text1 text-[16px] leading-relaxed max-w-[680px]">{t.hero.bio}</p>

      <div className="flex flex-wrap gap-3 pt-1">
        
          href="#projects"
          className="px-6 py-3 rounded-full font-semibold text-[14px] text-violet glass-sm no-underline transition-transform hover:-translate-y-0.5"
        >
          {t.hero.ctaProjects}
        </a>
        <a href="#contact" className="chip">{t.hero.ctaContact}</a>
        
          href="/resume.pdf"
          download="Robiya_Olimjonova_CV.pdf"
          className="px-6 py-3 rounded-full font-semibold text-[14px] text-cyan glass-sm no-underline transition-transform hover:-translate-y-0.5"
        >
          {t.hero.ctaResume} ↓
        </a>
      </div>
    </section>
  );
}
