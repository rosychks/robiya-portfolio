"use client";

import { useLang } from "@/lib/LangContext";
import { languages } from "@/lib/translations";

export default function Nav() {
  const { lang, setLang, t } = useLang();

  const links = [
    { href: "#about", label: t.nav.about, icon: "👤" },
    { href: "#projects", label: t.nav.projects, icon: "💼" },
    { href: "#experience", label: t.nav.experience, icon: "📈" },
    { href: "#skills", label: t.nav.skills, icon: "🛠" },
    { href: "#certifications", label: t.nav.certifications, icon: "🎓" },
    { href: "#contact", label: t.nav.contact, icon: "✉" },
  ];

  return (
    <nav className="sticky top-4 z-20 mx-auto max-w-[1080px] flex items-center justify-between gap-2 sm:gap-4 px-4 sm:px-5 py-3 sm:py-3.5 glass rounded-full">
      <a href="#about" className="shrink-0 font-display font-semibold text-[15px] tracking-wide text-text0 no-underline flex items-center gap-1.5">
        <span className="text-violet">✦</span>robiya
      </a>

      <ul className="flex items-center gap-0.5 sm:gap-1.5 list-none m-0 p-0 overflow-x-auto">
        {links.map((l) => (
          <li key={l.href} className="shrink-0">
            <a
              href={l.href}
              title={l.label}
              className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-full text-[12.5px] text-text1 hover:text-violet no-underline transition-colors whitespace-nowrap"
            >
              <span>{l.icon}</span>
              <span className="hidden md:inline">{l.label}</span>
            </a>
          </li>
        ))}
        <li className="shrink-0">
          <a
            href="/resume.pdf"
            download="Robiya_Olimjonova_CV.pdf"
            title={t.hero.ctaResume}
            className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-full text-[12.5px] text-cyan hover:text-violet no-underline transition-colors whitespace-nowrap"
          >
            <span>⬇️</span>
            <span className="hidden md:inline">{t.hero.ctaResume}</span>
          </a>
        </li>
      </ul>

      <div className="shrink-0 flex gap-1.5 glass-inset-sm rounded-full p-1.5">
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
