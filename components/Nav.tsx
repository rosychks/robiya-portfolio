"use client";

import { useLang } from "@/lib/LangContext";
import { languages } from "@/lib/translations";

export default function Nav() {
  const { lang, setLang, t } = useLang();

  return (
    <nav className="sticky top-4 z-20 mx-auto max-w-[1080px] flex items-center justify-between gap-4 px-5 py-3.5 glass rounded-full">
      <a href="#" className="font-display font-semibold text-[15px] tracking-wide text-text0 no-underline flex items-center gap-1.5">
        <span className="text-violet">✦</span>robiya
      </a>

      <a
        href="/resume.pdf"
        download="Robiya_Olimjonova_CV.pdf"
        className="text-[13px] font-mono font-medium text-violet hover:text-cyan transition-colors no-underline whitespace-nowrap"
      >
        {t.hero.ctaResume} ↓
      </a>

      <div className="flex gap-1.5 glass-inset-sm rounded-full p-1.5">
        {languages.map((l) => (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={lang === l.code}
            className={`px-3 py-1.5 rounded-full text-[12px] font-mono font-medium transition-all ${
              lang === l.code
                ? "glass-inset-sm text-violet"
                : "text-text2 hover:text-text1"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
