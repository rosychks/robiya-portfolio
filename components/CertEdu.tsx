"use client";

import { useLang } from "@/lib/LangContext";

export default function CertEdu() {
  const { t } = useLang();

  return (
    <section className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="glass rounded-glass p-6">
          <h4 className="font-mono text-[13px] text-violet uppercase tracking-wider mb-3">
            {t.certEduSection.certTitle}
          </h4>
          <ul className="flex flex-col gap-2">
            {t.certifications.map((c) => (
              <li key={c} className="text-text1 text-[14px] flex items-center gap-2">
                <span className="text-violet">✓</span> {c}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass rounded-glass p-6">
          <h4 className="font-mono text-[13px] text-violet uppercase tracking-wider mb-3">
            {t.certEduSection.eduTitle}
          </h4>
          <div className="text-text0 text-[15px] font-medium">{t.education.school}</div>
          <div className="text-text1 text-[13.5px] mt-1 leading-relaxed">{t.education.degree}</div>
          <div className="text-text2 text-xs font-mono mt-2">{t.education.year}</div>
        </div>
      </div>
    </section>
  );
}
