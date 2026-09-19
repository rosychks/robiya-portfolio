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
      <a href="#about" className="shrink-0 font-display font-semibold text-[15px] tracking-wide text-text0 no-underline flex items-center gap-1.5 ml-2 sm:ml-3">
        <span className="text-violet inline-flex animate-[pulse_2.4s_ease-in-out_infinite]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="m12 2.5 1.6 4.9a2.4 2.4 0 0 0 1.53 1.53L20 10.5l-4.87 1.57a2.4 2.4 0 0 0-1.53 1.53L12 18.5l-1.6-4.9a2.4 2.4 0 0 0-1.53-1.53L4 10.5l4.87-1.57a2.4 2.4 0 0 0 1.53-1.53L12 2.5Z"
              fill="currentColor"
            />
            <path
              d="M19 15.5 19.7 17.6 21.8 18.3 19.7 19 19 21.1 18.3 19 16.2 18.3 18.3 17.6 19 15.5Z"
              fill="currentColor"
              opacity="0.7"
            />
          </svg>
        </span>
      </a>

      <ul className="flex items-center gap-0.5 sm:gap-1.5 list-none m-0 p-0 overflow-x-auto">
        {links.map((l) => (
          <li key={l.href} className="shrink-0">
            <a
              href={l.href}
              title={l.label}
              className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-full text-[12.5px] font-semibold text-text1 hover:text-violet no-underline transition-colors whitespace-nowrap"
            >
              <span>{l.icon}</span>
              <span className="hidden lg:inline">{l.label}</span>
            </a>
          </li>
        ))}
        <li className="shrink-0">
          <a
            href="/resume.pdf"
            download="Robiya_Olimjonova_CV.pdf"
            title={t.hero.ctaResume}
            className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-full text-[12.5px] font-semibold text-cyan hover:text-violet no-underline transition-colors whitespace-nowrap"
          >
            <span>⬇️</span>
            <span className="hidden lg:inline">{t.hero.ctaResume}</span>
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
