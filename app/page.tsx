// app/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import {
  PROJECTS,
  PROFILE,
  Project,
  ProjectCategory,
  CATEGORY_LABELS,
  CATEGORY_ORDER,
} from "@/data/projects";

const CATEGORIES: ProjectCategory[] = [
  "Gov Program",
  "Product/App",
  "System",
  "Ecommerce",
  "Website",
];

function uniq<T>(arr: T[]) {
  return Array.from(new Set(arr));
}

function formatRocYear(y?: number) {
  return y ? `民國 ${y} 年` : "年份未標";
}

function categoryWeight(c: ProjectCategory) {
  const idx = CATEGORY_ORDER.indexOf(c);
  return idx === -1 ? 999 : idx;
}

// 面試官視角排序：類型重要性 → 年份新到舊 → Featured 優先 → 標題
function sortForInterviewer(a: Project, b: Project) {
  const wa = categoryWeight(a.category);
  const wb = categoryWeight(b.category);
  if (wa !== wb) return wa - wb;

  const ya = a.rocYear ?? -1;
  const yb = b.rocYear ?? -1;
  if (ya !== yb) return yb - ya;

  const fa = a.featured ? 1 : 0;
  const fb = b.featured ? 1 : 0;
  if (fa !== fb) return fb - fa;

  return a.title.localeCompare(b.title, "zh-Hant");
}

export default function Page() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<ProjectCategory | "All">("All");
  const [rocYear, setRocYear] = useState<number | "All">("All");
  const [showHidden, setShowHidden] = useState(false);

  const years = useMemo(() => {
    const ys = PROJECTS.map((p) => p.rocYear).filter(
      (x): x is number => typeof x === "number"
    );
    return uniq(ys).sort((a, b) => b - a);
  }, []);

  // Featured 固定抓 featured:true 的 4 個（你已指定）
  const featured = useMemo(() => {
    return PROJECTS.filter((p) => p.featured).sort(sortForInterviewer).slice(0, 4);
  }, []);

  const filtered = useMemo(() => {
    const kw = q.trim().toLowerCase();
    return PROJECTS
      .filter((p) => showHidden || !p.hidden)
      .filter((p) => (category === "All" ? true : p.category === category))
      .filter((p) => (rocYear === "All" ? true : p.rocYear === rocYear))
      .filter((p) => {
        if (!kw) return true;
        const blob = [
          p.title,
          p.category,
          (p.role || []).join(" "),
          (p.deliverables || []).join(" "),
          // metrics 不放進搜尋也行；但政府案仍可搜到
          (p.metrics || []).join(" "),
          (p.techOrTools || []).join(" "),
        ]
          .join(" ")
          .toLowerCase();
        return blob.includes(kw);
      })
      .sort(sortForInterviewer);
  }, [q, category, rocYear, showHidden]);

  const isFiltered = useMemo(() => {
    return category !== "All" || rocYear !== "All" || q.trim().length > 0;
  }, [category, rocYear, q]);

  // 未套用過濾時：All Projects 分群顯示（同類型排序）
  const grouped = useMemo(() => {
    const m = new Map<ProjectCategory, Project[]>();
    for (const c of CATEGORY_ORDER) m.set(c, []);
    for (const p of filtered) {
      const arr = m.get(p.category) ?? [];
      arr.push(p);
      m.set(p.category, arr);
    }
    // 每群內再依面試官排序（年份/標題）
    for (const [c, arr] of m.entries()) {
      m.set(c, arr.sort(sortForInterviewer));
    }
    return m;
  }, [filtered]);

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Header（專案摘要滿版） */}
        <header className="mb-10">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs text-neutral-700 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-900/70" />
              Available for Technical PM
            </div>

            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
              {PROFILE.name}
            </h1>
            <p className="mt-2 max-w-3xl text-base leading-relaxed text-neutral-700">
              {PROFILE.title}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <StatPill label="如期交付率" value="100%" />
              <StatPill label="一次驗收通過" value="90%" />
              <StatPill label="團隊規模" value="6–12 人（均 9）" />
              <StatPill label="協作窗口" value="平均 3 個" />
              <StatPill label="單案/聯合預算" value="400–2,000 萬" />
              <StatPill label="工具" value="Trello / ClickUp" />
            </div>
          </div>

          <section className="mt-6 rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="text-sm font-semibold text-neutral-900">專案摘要</div>
                <div className="mt-1 text-xs leading-relaxed text-neutral-500">
                  以交付、驗收、風險控管與跨團隊協作為主軸
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Chip>Gov Program</Chip>
                <Chip>Product / App</Chip>
                <Chip>Delivery & Acceptance</Chip>
              </div>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {PROFILE.highlights.map((h) => (
                <div
                  key={h}
                  className="flex gap-2 rounded-2xl border border-neutral-200 bg-white/60 p-4 text-sm text-neutral-700"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-900/50" />
                  <span className="min-w-0 break-words">{h}</span>
                </div>
              ))}
            </div>
          </section>
        </header>

        {/* Featured（固定 4 個） */}
        <section className="mb-10">
          <div className="mb-3 flex items-end justify-between">
            <h2 className="text-xl font-semibold">Featured</h2>
            <span className="text-sm text-neutral-500">
              4 個精選案例（含家樂福）
            </span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {featured.map((p) => (
              <ProjectCard key={p.id} p={p} showMetrics />
            ))}
          </div>
        </section>

        {/* Filters */}
        <section className="mb-6 rounded-3xl border border-neutral-200 bg-white/70 p-5 shadow-sm">
          <div className="grid gap-3 md:grid-cols-4">
            <div className="md:col-span-2">
              <label className="text-sm font-medium">搜尋</label>
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="輸入關鍵字：AR、LINE、驗收、學會、電商、ERP…"
                className="mt-1 w-full rounded-2xl border border-neutral-300 bg-white/70 px-3 py-2 outline-none focus:border-neutral-500"
              />
            </div>

            <div>
              <label className="text-sm font-medium">分類</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="mt-1 w-full rounded-2xl border border-neutral-300 bg-white/70 px-3 py-2 outline-none focus:border-neutral-500"
              >
                <option value="All">全部</option>
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {CATEGORY_LABELS[c]}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium">年份（民國）</label>
              <select
                value={rocYear}
                onChange={(e) => {
                  const v = e.target.value;
                  setRocYear(v === "All" ? "All" : Number(v));
                }}
                className="mt-1 w-full rounded-2xl border border-neutral-300 bg-white/70 px-3 py-2 outline-none focus:border-neutral-500"
              >
                <option value="All">全部</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <input
              id="showHidden"
              type="checkbox"
              checked={showHidden}
              onChange={(e) => setShowHidden(e.target.checked)}
              className="h-4 w-4"
            />
            <label htmlFor="showHidden" className="text-sm text-neutral-700">
              顯示「預設隱藏」作品（例如農業題材/不想優先呈現的案）
            </label>
          </div>
        </section>

        {/* All Projects */}
        <section>
          <div className="mb-3 flex items-end justify-between">
            <h2 className="text-xl font-semibold">All Projects</h2>
            <span className="text-sm text-neutral-500">共 {filtered.length} 筆</span>
          </div>

          {/* 未套用過濾：分群（同類型排序 + 重要性往前排） */}
          {!isFiltered ? (
            <div className="space-y-8">
              {CATEGORY_ORDER.map((c) => {
                const items = grouped.get(c) ?? [];
                if (!items.length) return null;
                return (
                  <div key={c}>
                    <div className="mb-3 flex items-end justify-between">
                      <h3 className="text-base font-semibold text-neutral-900">
                        {CATEGORY_LABELS[c]}
                      </h3>
                      <span className="text-sm text-neutral-500">{items.length} 筆</span>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      {items.map((p) => (
                        <ProjectCard
                          key={p.id}
                          p={p}
                          // ✅ All Projects：只有政府案顯示成果/量化
                          showMetrics={p.category === "Gov Program"}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            // 有套用過濾：平鋪列表
            <div className="grid gap-4 md:grid-cols-2">
              {filtered.map((p) => (
                <ProjectCard
                  key={p.id}
                  p={p}
                  showMetrics={p.category === "Gov Program"}
                />
              ))}
            </div>
          )}
        </section>

        <footer className="mt-10 border-t border-neutral-200 pt-6 text-sm text-neutral-500">
          <div>
            © {new Date().getFullYear()} {PROFILE.name} — Portfolio
          </div>
        </footer>
      </div>
    </main>
  );
}

function ProjectCard({ p, showMetrics }: { p: Project; showMetrics: boolean }) {
  return (
    <article className="group rounded-3xl border border-neutral-200 bg-white/70 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold leading-snug break-words">{p.title}</h3>
          <div className="mt-1 flex flex-wrap gap-2 text-xs">
            <Badge>{CATEGORY_LABELS[p.category]}</Badge>
            <Badge>{formatRocYear(p.rocYear)}</Badge>
            {p.hidden ? <Badge>Hidden</Badge> : null}
            {p.featured ? <Badge>Featured</Badge> : null}
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div className="text-sm font-medium text-neutral-900">我的角色</div>
        <ul className="mt-1 list-disc pl-5 text-sm text-neutral-700">
          {p.role.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>

      <div className="mt-3">
        <div className="text-sm font-medium text-neutral-900">交付內容</div>
        <ul className="mt-1 list-disc pl-5 text-sm text-neutral-700">
          {p.deliverables.slice(0, 6).map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>

      {/* ✅ All Projects 非政府案不顯示成果/量化 */}
      {showMetrics && p.metrics?.length ? (
        <div className="mt-3">
          <div className="text-sm font-medium text-neutral-900">成果/量化</div>
          <ul className="mt-1 list-disc pl-5 text-sm text-neutral-700">
            {p.metrics.slice(0, 6).map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {p.techOrTools?.length ? (
        <div className="mt-3">
          <div className="text-sm font-medium text-neutral-900">工具/技術</div>
          <div className="mt-1 flex flex-wrap gap-2">
            {p.techOrTools.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      ) : null}

      {p.links?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {p.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-neutral-200 bg-white/70 px-3 py-2 text-sm hover:border-neutral-500"
            >
              {l.label}
            </a>
          ))}
        </div>
      ) : null}
    </article>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-neutral-200 bg-white/70 px-2 py-1 text-neutral-700">
      {children}
    </span>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-neutral-200 bg-white/70 px-2 py-1 text-xs text-neutral-700">
      {children}
    </span>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs text-neutral-700">
      {children}
    </span>
  );
}

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white/70 px-3 py-2 text-xs shadow-sm">
      <div className="text-neutral-500">{label}</div>
      <div className="mt-0.5 font-semibold text-neutral-900">{value}</div>
    </div>
  );
}
