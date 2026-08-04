"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Lang, content } from "./translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof content["ru"];
};

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-lang") as Lang | null;
    if (saved && (saved === "ru" || saved === "uz" || saved === "en")) {
      setLangState(saved);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem("portfolio-lang", l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
