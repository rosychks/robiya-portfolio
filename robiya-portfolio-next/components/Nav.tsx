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
        РОБИЯ<span className="text-cyan">.ml</span>
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

      <div className="flex gap-1 bg-white/5 border border-glass-border rounded-full p-1">
        {languages.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            aria-pressed={lang === l.code}
            className={`px-2.5 py-1 rounded-full text-xs font-mono transition-colors ${
              lang === l.code ? "bg-white/15 text-text0" : "text-text2 hover:text-text1"
            }`}
          >
            {l.flag} {l.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
