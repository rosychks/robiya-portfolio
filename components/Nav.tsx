"use client";

import { useLang } from "@/lib/LangContext";
import { languages } from "@/lib/translations";

export default function Nav() {
  const { lang, setLang, t } = useLang();

  const links = [
    { href: "#projects", label: t.nav.projects },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav className="sticky top-4 z-20 mx-auto max-w-[1080px] flex items-center justify-between gap-4 px-5 py-3.5 glass rounded-full">
      <a href="#" className="font-display font-semibold text-[15px] tracking-wide text-text0 no-underline">
        robiya<span className="text-violet">.ml</span>
      </a>

      <ul className="hidden md:flex gap-6 list-none m-0 p-0">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-[13.5px] text-text1 hover:text-text0 no-underline transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>

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
