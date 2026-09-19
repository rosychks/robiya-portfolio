"use client";

import { useLang } from "@/lib/LangContext";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="about" className="pt-16 pb-14 flex flex-col items-start gap-6 scroll-mt-24">
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

      <p className="text-text1 text-[16px] leading-relaxed max-w-[680px]">{t.hero.bio}</p>
    </section>
  );
}
