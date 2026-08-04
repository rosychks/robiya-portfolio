"use client";

import { useLang } from "@/lib/LangContext";
import { contact } from "@/lib/translations";

export default function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="py-14 scroll-mt-24">
      <div className="glass rounded-glass px-8 py-11 md:px-12 md:py-14 text-center flex flex-col items-center gap-4">
        <h2 className="font-display font-semibold text-[26px] md:text-[38px] text-text0">
          {t.contactSection.title}
        </h2>
        <p className="text-text1 max-w-[480px] text-[15px] leading-relaxed">{t.contactSection.text}</p>
        <div className="flex flex-wrap gap-3 justify-center pt-2">
          <a
            href={`mailto:${contact.email}`}
            className="px-6 py-3 rounded-full font-semibold text-[14px] text-violet glass-sm no-underline transition-transform hover:-translate-y-0.5"
          >
            {t.contactSection.cta}
          </a>
          <a className="chip" href={contact.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a className="chip" href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
      </div>

      <footer className="text-center pt-9 pb-4 text-text2 text-xs font-mono">
        © 2026 ROBIYA OLIMJONOVA — {t.footer.toUpperCase()}
      </footer>
    </section>
  );
}
