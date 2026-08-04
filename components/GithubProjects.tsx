"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/LangContext";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  fork: boolean;
  updated_at: string;
};

const GITHUB_USERNAME = "rosychks";
// Repos that already have a dedicated, hand-written featured card above —
// keep them out of the auto-pulled list so they don't show twice.
const EXCLUDE_REPO_NAMES = new Set([`${GITHUB_USERNAME}.github.io`]);

export default function GithubProjects() {
  const { t } = useLang();
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=30`)
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API error");
        return res.json();
      })
      .then((data: Repo[]) => {
        if (cancelled) return;
        const filtered = data
          .filter((r) => !r.fork && !EXCLUDE_REPO_NAMES.has(r.name))
          .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
        setRepos(filtered);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  // Localized description overrides for repos we already know about;
  // anything new pulled from GitHub falls back to its own description field.
  const knownDescriptions: Record<string, string> = Object.fromEntries(
    t.moreProjects.map((p) => [p.title, p.desc])
  );

  return (
    <>
      <div className="flex items-center gap-2 mt-12 mb-4">
        <h3 className="font-display text-[15px] text-text2">{t.projectsSection.more}</h3>
        <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
        <span className="text-text2 text-[11px] font-mono">{t.projectsSection.autoNote}</span>
      </div>

      {error && <p className="text-text2 text-[13px]">{t.projectsSection.error}</p>}

      {!error && repos === null && <p className="text-text2 text-[13px]">{t.projectsSection.loading}</p>}

      {repos && repos.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {repos.map((r) => (
            <div key={r.id} className="glass-sm p-5 flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[13px] text-text0 truncate">{r.name}</span>
                {r.language && (
                  <span className="text-[10px] font-mono text-violet whitespace-nowrap">{r.language}</span>
                )}
              </div>
              <span className="text-text2 text-[12.5px] leading-relaxed">
                {knownDescriptions[r.name] ?? r.description ?? "—"}
              </span>
              <div className="flex gap-2 pt-1 mt-auto">
                <a
                  href={r.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-text1 no-underline border-b border-text2/30 hover:border-text1"
                >
                  {t.projectsSection.github} ↗
                </a>
                <a
                  href={r.homepage || r.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-violet no-underline border-b border-violet/35 hover:border-violet"
                >
                  ▶ {t.projectsSection.liveDemo}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
