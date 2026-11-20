// app/page.tsx
"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
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
  "SaaS",
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

// 「標題：內容」拆成兩段，方便粗體呈現標題
function splitLabel(s: string) {
  const i = s.indexOf("：");
  return i === -1 ? { label: "", text: s } : { label: s.slice(0, i), text: s.slice(i + 1) };
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

  // Featured 固定抓 featured:true 的 4 個
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
          (p.summary || []).join(" "),
          (p.role || []).join(" "),
          (p.deliverables || []).join(" "),
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
    for (const [c, arr] of m.entries()) {
      m.set(c, arr.sort(sortForInterviewer));
    }
    return m;
  }, [filtered]);

  return (
    <main className="min-h-screen px-3 py-6 md:px-6 md:py-14">
      <div className="mx-auto max-w-[1100px] bg-white shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
        {/* Header：姓名 / 頭像 / 聯絡方式 */}
        <div className="pt-8 md:pt-[52px]">
          <header className="grid md:h-[284px] md:grid-cols-[minmax(0,1fr)_280px_292px] md:gap-[26px]">
            <div className="flex min-w-0">
              <span className="w-3 shrink-0 bg-ink md:w-[50px]" />
              <div className="flex min-w-0 flex-col justify-center px-6 py-4 md:py-0 md:pl-7 md:pr-0">
                <h1 className="text-[56px] font-black leading-none tracking-tight text-ink md:text-[76px]">
                  {PROFILE.name}
                </h1>
                <div className="mt-2 text-[34px] font-extrabold uppercase leading-none tracking-tight text-ink md:mt-3 md:text-[46px]">
                  {PROFILE.nameEn}
                </div>
                <p className="mt-4 text-[15px] tracking-[0.06em] text-neutral-700 md:mt-5 md:text-[17px]">
                  {PROFILE.title}
                </p>
                <p className="mt-1.5 text-[13px] text-neutral-500">{PROFILE.tagline}</p>
              </div>
            </div>

            <div className="mt-6 px-6 md:mt-0 md:px-0">
              <div className="relative mx-auto aspect-square w-full max-w-[280px] border-[10px] border-ink md:aspect-auto md:h-full md:max-w-none">
                <Image
                  src={PROFILE.avatar}
                  alt={`${PROFILE.name} 頭像`}
                  fill
                  priority
                  sizes="280px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-8 bg-ink px-7 py-8 text-white md:mt-0 md:flex md:flex-col md:justify-center md:py-0">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center bg-white text-ink">
                  <Icon name="user" className="h-6 w-6" />
                </span>
                <span className="text-[26px] font-extrabold tracking-tight">聯絡方式</span>
              </div>
              <ul className="mt-7 space-y-4 text-[13.5px]">
                {PROFILE.contact.map((c) => (
                  <li key={c.label} className="flex items-center gap-4">
                    <span className="grid h-7 w-7 shrink-0 place-items-center bg-white text-ink">
                      <Icon name={c.icon} className="h-4 w-4" />
                    </span>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noreferrer" className="min-w-0 break-all hover:underline">
                        {c.label}
                      </a>
                    ) : (
                      <span className="min-w-0">{c.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </header>
        </div>

        {/* 履歷主體：左側灰底欄 + 右側內容 */}
        <div className="mt-10 grid md:mt-[52px] md:grid-cols-[41%_minmax(0,1fr)]">
          <aside className="space-y-9 bg-panel px-6 py-10 md:px-[52px] md:py-[52px]">
            <Block icon="user" title="關於我">
              <div className="space-y-5 text-[14.5px] leading-[1.9] text-neutral-600 md:text-justify">
                {PROFILE.about.map((s) => (
                  <p key={s}>{s}</p>
                ))}
              </div>
            </Block>

            <Block icon="pie" title="專長技能">
              <ul className="flex flex-wrap gap-2.5">
                {PROFILE.skills.map((s) => (
                  <li key={s} className="border-2 border-ink bg-white px-3.5 py-2 text-[13.5px] font-semibold text-ink">
                    {s}
                  </li>
                ))}
              </ul>
            </Block>

            <Block icon="globe" title="語言能力">
              <div className="flex flex-wrap gap-3">
                {PROFILE.languages.map((l) => (
                  <span key={l.name} className="border-2 border-ink px-5 py-2.5 text-[14px] font-bold text-ink">
                    {l.name}・{l.level}
                  </span>
                ))}
              </div>
            </Block>

            <Block icon="flag" title="求職條件">
              <dl className="space-y-3 text-[14px]">
                {PROFILE.jobPreferences.map((r) => (
                  <div key={r.label} className="grid grid-cols-[76px_minmax(0,1fr)] gap-3">
                    <dt className="font-semibold text-ink">{r.label}</dt>
                    <dd className="text-neutral-600">{r.value}</dd>
                  </div>
                ))}
              </dl>
            </Block>

            <Block icon="award" title="認證登錄">
              <div className="space-y-5">
                {PROFILE.certifications.map((c) => (
                  <div key={c.title}>
                    <div className="text-[15px] font-bold leading-snug text-ink">{c.title}</div>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-neutral-600">{c.detail}</p>
                    <p className="mt-1 text-[13px] text-neutral-600">{c.meta}</p>
                    <p className="mt-1 text-[13px] text-neutral-500">{c.period}</p>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 border-2 border-ink bg-white px-3 py-1.5 text-[12px] font-bold tracking-wider text-ink transition hover:bg-ink hover:text-white"
                    >
                      相關新聞
                      <Icon name="external" className="h-3.5 w-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </Block>
          </aside>

          <div className="space-y-9 px-6 py-10 md:px-[52px] md:pb-[52px] md:pt-0">
            <Block icon="book" title="學歷">
              <div className="grid gap-6 sm:grid-cols-2">
                {PROFILE.education.map((e) => (
                  <div key={e.school}>
                    <div className="text-[16px] font-bold text-ink">{e.school}</div>
                    <div className="mt-1.5 text-[13px] tracking-wide text-neutral-700">{e.degree}</div>
                    <div className="mt-1 text-[13px] text-neutral-500">{e.period}</div>
                  </div>
                ))}
              </div>
            </Block>

            <Block icon="users" title="專案摘要">
              <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {PROFILE.highlights.map((h) => {
                  const { label, text } = splitLabel(h);
                  return (
                    <div key={h}>
                      <div className="text-[15px] font-bold text-ink">{label}</div>
                      <div className="mt-1 text-[13.5px] leading-relaxed text-neutral-600">{text}</div>
                    </div>
                  );
                })}
              </div>
            </Block>

            <Block icon="briefcase" title="工作經歷">
              <div className="space-y-7">
                {PROFILE.experience.map((x) => (
                  <div key={x.title + x.period}>
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-[16px] font-extrabold text-ink">{x.title}</h3>
                      <span className="shrink-0 text-[13px] font-bold text-ink">{x.period}</span>
                    </div>
                    <div className="mt-1 text-[14px] italic text-neutral-600">{x.company}</div>
                    <ul className="mt-3 space-y-2 text-[13.5px] leading-relaxed text-neutral-600">
                      {x.points.map((pt) => {
                        const { label, text } = splitLabel(pt);
                        return (
                          <li key={pt}>
                            {label ? <span className="font-semibold text-ink">{label}：</span> : null}
                            {text}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </Block>
          </div>
        </div>

        {/* 作品區 */}
        <div className="space-y-14 px-6 pb-16 pt-6 md:px-[52px] md:pt-[52px]">
          <section>
            <SectionTitle icon="star" aside="4 個精選案例">
              精選專案
            </SectionTitle>
            <div className="mt-7 grid gap-[26px] md:grid-cols-2">
              {featured.map((p) => (
                <FeaturedCard key={p.id} p={p} />
              ))}
            </div>
          </section>

          <section>
            <SectionTitle icon="grid" aside={`共 ${filtered.length} 筆`}>
              全部作品
            </SectionTitle>

            {/* Filters */}
            <div className="mt-7">
              <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_200px]">
                <label className="flex h-11 items-center gap-2.5 border-2 border-ink px-3">
                  <Icon name="search" className="h-4 w-4 shrink-0 text-ink" />
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="搜尋關鍵字：AR、LINE、驗收、學會、電商、ERP…"
                    aria-label="搜尋作品"
                    className="w-full min-w-0 bg-transparent text-[14px] outline-none placeholder:text-neutral-400"
                  />
                </label>
                <select
                  value={rocYear}
                  onChange={(e) => {
                    const v = e.target.value;
                    setRocYear(v === "All" ? "All" : Number(v));
                  }}
                  aria-label="年份（民國）"
                  className="h-11 border-2 border-ink bg-white px-3 text-[14px] text-ink outline-none"
                >
                  <option value="All">全部年份</option>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      民國 {y} 年
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <FilterButton active={category === "All"} onClick={() => setCategory("All")}>
                  全部類型
                </FilterButton>
                {CATEGORIES.map((c) => (
                  <FilterButton key={c} active={category === c} onClick={() => setCategory(c)}>
                    {CATEGORY_LABELS[c]}
                  </FilterButton>
                ))}
              </div>

              <label className="mt-4 inline-flex items-center gap-2 text-[14px] text-neutral-700">
                <input
                  type="checkbox"
                  checked={showHidden}
                  onChange={(e) => setShowHidden(e.target.checked)}
                  className="h-4 w-4 accent-ink"
                />
                顯示更多作品
              </label>
            </div>

            {/* 未套用過濾：分群；有套用過濾：平鋪 */}
            {!isFiltered ? (
              <div className="mt-10 space-y-12">
                {CATEGORY_ORDER.map((c) => {
                  const items = grouped.get(c) ?? [];
                  if (!items.length) return null;
                  return (
                    <div key={c}>
                      <div className="flex items-end justify-between border-b-2 border-ink pb-2.5">
                        <h3 className="text-[18px] font-extrabold text-ink">{CATEGORY_LABELS[c]}</h3>
                        <span className="text-[13px] text-neutral-500">{items.length} 筆</span>
                      </div>
                      <ProjectGrid items={items} />
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="mt-10 border-t-2 border-ink">
                {filtered.length ? (
                  <ProjectGrid items={filtered} />
                ) : (
                  <p className="py-10 text-center text-[14px] text-neutral-500">沒有符合條件的作品</p>
                )}
              </div>
            )}
          </section>
        </div>

        <footer className="bg-ink px-6 py-6 text-[12px] tracking-wider text-white/70 md:px-[52px]">
          © {new Date().getFullYear()} {PROFILE.name} {PROFILE.nameEn} — Portfolio
        </footer>
      </div>
    </main>
  );
}

function ProjectGrid({ items }: { items: Project[] }) {
  return (
    <div className="grid md:grid-cols-2 md:gap-x-12">
      {items.map((p) => (
        <ProjectEntry key={p.id} p={p} />
      ))}
    </div>
  );
}

function FeaturedCard({ p }: { p: Project }) {
  return (
    <article className="flex flex-col border-2 border-ink">
      <div className="bg-ink px-6 py-5 text-white">
        <div className="text-[11.5px] font-semibold uppercase tracking-[0.14em] text-white/70">
          {CATEGORY_LABELS[p.category]}
          {p.rocYear ? `・${formatRocYear(p.rocYear)}` : ""}
        </div>
        <h3 className="mt-2 text-[17px] font-bold leading-snug break-words">{p.title}</h3>
      </div>
      <div className="flex-1 px-6 pb-6 pt-1">
        <ProjectDetails p={p} showMetrics />
      </div>
    </article>
  );
}

function ProjectEntry({ p }: { p: Project }) {
  return (
    <article className="border-b border-neutral-300 py-6">
      <div className="flex items-baseline justify-between gap-4">
        <h4 className="min-w-0 text-[15.5px] font-bold leading-snug text-ink break-words">{p.title}</h4>
        {p.rocYear ? (
          <span className="shrink-0 text-[13px] font-bold text-ink">民國 {p.rocYear}</span>
        ) : null}
      </div>
      <div className="mt-1 text-[13px] italic text-neutral-500">
        {CATEGORY_LABELS[p.category]}
        {p.featured ? "・精選" : ""}
      </div>
      {/* 非政府案不顯示成果/量化 */}
      <ProjectDetails p={p} showMetrics={p.category === "Gov Program"} />
    </article>
  );
}

function ProjectDetails({ p, showMetrics }: { p: Project; showMetrics: boolean }) {
  return (
    <>
      {p.summary?.length ? (
        <div className="mt-4 space-y-2.5 text-[13.5px] leading-[1.8] text-neutral-600">
          {p.summary.map((s) => (
            <p key={s}>{s}</p>
          ))}
        </div>
      ) : null}

      <p className="mt-4 text-[13.5px] leading-relaxed text-neutral-600">
        <span className="font-semibold text-ink">角色：</span>
        {p.role.join("、")}
      </p>

      <DetailList title="交付內容" items={p.deliverables.slice(0, 6)} />

      {showMetrics && p.metrics?.length ? (
        <DetailList title="成果／量化" items={p.metrics.slice(0, 6)} />
      ) : null}

      {p.techOrTools?.length ? (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.techOrTools.map((t) => (
            <span key={t} className="border border-ink px-2 py-0.5 text-[11.5px] font-semibold text-ink">
              {t}
            </span>
          ))}
        </div>
      ) : null}

      {p.links?.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {p.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 border-2 border-ink px-3 py-1.5 text-[12px] font-bold uppercase tracking-wider text-ink transition hover:bg-ink hover:text-white"
            >
              {l.label}
              <Icon name="external" className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      ) : null}
    </>
  );
}

function DetailList({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div className="mt-4">
      <div className="text-[12.5px] font-bold tracking-wider text-ink">{title}</div>
      <ul className="mt-2 space-y-1 text-[13.5px] leading-relaxed text-neutral-600">
        {items.map((x) => (
          <li key={x} className="flex gap-2.5">
            <span className="mt-[0.7em] h-1 w-1 shrink-0 bg-ink" />
            <span className="min-w-0 break-words">{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionTitle({
  icon,
  aside,
  children,
}: {
  icon: IconName;
  aside?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="grid h-[42px] w-[42px] shrink-0 place-items-center bg-ink text-white">
        <Icon name={icon} className="h-[22px] w-[22px]" />
      </span>
      <h2 className="text-[24px] font-extrabold tracking-tight text-ink md:text-[26px]">{children}</h2>
      {aside ? <span className="ml-auto text-[13px] text-neutral-500">{aside}</span> : null}
    </div>
  );
}

// 履歷區塊：標題 + 內容 + 底線分隔
function Block({ icon, title, children }: { icon: IconName; title: string; children: React.ReactNode }) {
  return (
    <section className="border-b-2 border-ink pb-8">
      <SectionTitle icon={icon}>{title}</SectionTitle>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`border-2 border-ink px-3.5 py-2 text-[13px] font-bold transition ${
        active ? "bg-ink text-white" : "bg-white text-ink hover:bg-panel"
      }`}
    >
      {children}
    </button>
  );
}

const ICONS = {
  user: (
    <>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </>
  ),
  users: (
    <>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  mail: (
    <>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </>
  ),
  github: (
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  ),
  pin: (
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  pie: (
    <>
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </>
  ),
  flag: (
    <>
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </>
  ),
  book: (
    <>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </>
  ),
  briefcase: (
    <>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </>
  ),
  star: (
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </>
  ),
  external: (
    <>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </>
  ),
} as const;

type IconName = keyof typeof ICONS;

function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {ICONS[name]}
    </svg>
  );
}
