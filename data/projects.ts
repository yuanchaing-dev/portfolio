// data/projects.ts

export type ProjectCategory =
  | "Gov Program"
  | "Product/App"
  | "SaaS"
  | "System"
  | "Ecommerce"
  | "Website";

export type ProjectLink = { label: string; url: string };

export type Project = {
  id: string;
  title: string;
  rocYear?: number; // 民國年（政府案/歷年案可填）
  category: ProjectCategory;
  featured?: boolean; // Featured 區塊用（非 category）
  hidden?: boolean; // 預設隱藏（可用 UI 勾選顯示）

  summary?: string[]; // 專案說明（段落）
  role: string[];
  deliverables: string[];

  // 僅政府計畫案保留（All Projects 非政府案會不顯示）
  metrics?: string[];

  techOrTools?: string[];
  links?: ProjectLink[];
};

export const PROFILE = {
  name: "江宗原",
  nameEn: "Ken Chiang",
  title: "Technical PM／AI 專案經理／軟體專案主管",
  tagline: "近 18 年軟體開發、系統分析與專案管理經驗",
  avatar: "/avatar.jpg",
  contact: [
    { icon: "mail", label: "yuanchaing@gmail.com", href: "mailto:yuanchaing@gmail.com" },
    { icon: "github", label: "github.com/yuanchaing-dev", href: "https://github.com/yuanchaing-dev" },
    { icon: "pin", label: "台北市內湖區", href: undefined },
  ],
  about: [
    "具近 18 年軟體開發、系統分析與專案管理經驗，現任傑飛特科技軟體專案主管，主要負責企業 Web／App 系統與政府研發計畫的需求規劃、開發管理、跨團隊協作及交付驗收。",
    "具備 C#/.NET、React、Next.js、TypeScript 等開發與系統整合背景，熟悉 SA/SD、REST API、OAuth 及第三方金流串接；近年運用 Claude Code、Codex 等 AI 工具協助系統規劃、程式開發與審查。",
  ],
  skills: [
    "專案管理（WBS／風險／UAT）",
    "系統分析 SA/SD",
    "API／OAuth／金流整合",
    "React／Next.js／TypeScript",
    "C#／ASP.NET MVC",
    "Claude Code／Codex",
  ],
  languages: [
    { name: "中文", level: "精通" },
    { name: "英文", level: "中等" },
  ],
  jobPreferences: [
    { label: "工作性質", value: "全職・日班" },
    { label: "可上班日", value: "錄取後隨時可上班" },
    { label: "希望地點", value: "台北市、新北市、宜蘭縣、基隆市、桃園市" },
  ],
  certifications: [
    {
      title: "數位發展部 AI 技術服務能量登錄",
      detail: "申請通過並取得「智慧客服」服務項目登錄證書（數位產業署・數位服務機構能量登錄證書）",
      meta: "登錄類別：人工智慧技術服務機構",
      period: "2026/10/15 取得・有效至 2028/10/15",
      href: "https://www.jfetek.com/news/55",
    },
  ],
  education: [
    { school: "私立淡江大學", degree: "土木工程所 博士肄業", period: "2006/6 – 2007/9" },
    { school: "私立中華大學", degree: "土木工程所 碩士畢業", period: "2002/9 – 2004/6" },
  ],
  experience: [
    {
      title: "軟體專案主管",
      company: "傑飛特科技股份有限公司・管理 9–12 人",
      period: "2008/10 – 至今",
      points: [
        "專案規劃與管理：政府補助研發計畫及企業系統專案的需求訪談、計畫內容設計、WBS/Gantt 排程、預算與資源配置、風險管理及期中、期末驗收。",
        "團隊與跨廠商協作：統籌前端、後端、UI/UX 與測試工作；平均協作 3 個對外窗口（客戶、合作廠商及場域單位）。",
        "系統分析與架構規劃：主導 SA/SD、UI 規格、系統功能與資料流程設計，協調 API、OAuth、金流及第三方服務介接。",
        "品質與交付驗收：規劃 UAT 測試、缺陷追蹤、資安風險檢核及驗收文件，以 Trello、ClickUp 管理里程碑與需求變更。",
        "AI 與開發流程應用：運用 Claude Code、Codex 輔助需求分析、程式開發、測試與 Code Review。",
        "AI 服務能量登錄：申請通過數位發展部 AI 技術服務能量登錄，取得智慧客服服務項目登錄證書（2026/10）。",
      ],
    },
    {
      title: "C# .NET 後端工程師",
      company: "聯宏資通股份有限公司",
      period: "2005/8 – 2006/2",
      points: ["負責系統分析、UI 介面設計、C# .NET Web 系統開發與維護，協助教育訓練課程規劃與導入。"],
    },
    {
      title: "講師",
      company: "聯成電腦有限公司",
      period: "2005/2 – 2006/5",
      points: ["擔任多媒體與認證課程講師，負責教學與課程規劃。"],
    },
  ],
  highlights: [
    "專案型態：政府補助/場域案 12–24 個月（聯合型 3 家協作）",
    "協作：平均 3 個對外窗口（客戶、合作廠商、場域單位）；管理 9–12 人工程團隊",
    "交付績效：如期交付率 100%；一次驗收通過率 90%",
    "預算規模：曾統籌預算最高 2,000 萬元（補助 1,000 萬）的跨域聯合專案，協調 3 家合作廠商；單案 400 萬（補助 200 萬）",
    "系統分析：SA/SD、REST API、OAuth、第三方金流與系統整合",
    "技術背景：C#/.NET、React、Next.js、TypeScript；Hybrid App（Cordova、Ionic）",
    "AI 應用：Claude Code、Codex 輔助需求分析、程式開發、測試與程式碼審查",
    "常用工具：Trello、ClickUp；Git/GitHub；Vercel、Render、VPS 部署",
  ],
} as const;

const COMMON_PM_ROLE = ["Technical PM", "專案管理", "軟體規劃/SA", "交付與驗收負責"] as const;
const COMMON_ER_ROLE = ["雙平台 APP 開發", "前端工程"] as const;
const COMMON_FE_ROLE = ["前端工程"] as const;
const DEV_LEAD_ROLE = ["開發", "管理", "資安", "驗收"] as const;

const GOV_METRICS = [
  "如期交付率：100%（跨案）",
  "一次驗收通過率：90%（跨案）",
  "協作：平均 3 個對外窗口；管理 9–12 人工程團隊",
  "預算規模：曾統籌預算最高 2,000 萬元（補助 1,000 萬）的跨域聯合專案，協調 3 家合作廠商；單案 400 萬（補助 200 萬）",
] as const;

const GOV_DOCS = [
  "計畫書段落/期中期末簡報",
  "WBS/Gantt（里程碑、查核點）",
  "SASD/UI 規格（含流程/權限/欄位）",
  "UAT 紀錄/缺陷追蹤",
  "期中/期末驗收報告",
] as const;

const SOCIETY_DELIVERABLES = [
  "官網/資訊架構 1 站（RWD）",
  "後台/會員功能 1 套（依專案）",
  "報名/金流等功能 1 套（依專案）",
  "文章上稿/審稿流程 1 套（依專案）",
] as const;

function url(u: string) {
  if (!u) return u;
  if (u.startsWith("http://") || u.startsWith("https://")) return u;
  return `https://${u}`;
}

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  "Gov Program": "政府計畫／場域案",
  "Product/App": "產品／APP",
  SaaS: "Web SaaS 產品",
  System: "系統／平台",
  Ecommerce: "電商／商城",
  Website: "網站／官網",
};

// 面試官視角的重要性排序（All Projects 依此分群往前排）
export const CATEGORY_ORDER: ProjectCategory[] = [
  "Gov Program",
  "Product/App",
  "SaaS",
  "System",
  "Ecommerce",
  "Website",
];

export const PROJECTS: Project[] = [
  // =========================
  // Featured（4 個，必含家樂福）
  // =========================

  // 1) 家樂福（必放 Featured）
  {
    id: "featured-carrefour",
    title: "家樂福 Carrefour－官網與 App 專案",
    category: "Website",
    featured: true,
    role: [...COMMON_PM_ROLE, ...COMMON_ER_ROLE],
    deliverables: [
        "交付：Carrefour Taiwan 官方網站（RWD）",
        "交付：開發 Carrefour Pay 系統",
        "交付：Android、iOS APP 與 APP 後台，並上架於雙平台商城",
        "交付：SASD 規格書、系統操作文件/驗收文件、UI/UX 設計稿、原型",
        "交付：串接宜睿（Edenred）系統",
        "交付：串接 Carrefour 點數系統",
        "交付：串接 Carrefour 線上會員卡系統",
        "交付：介面/功能協作與上線驗收",
    ],
    links: [{ label: "Site", url: url("www.carrefour.com.tw") }],
  },

  // 2) SBIR（合併：SBIR 同一案 + MoneyGO + TKI LINE Bot）
  {
    id: "featured-gov-114-sbir-migrant-life",
    title: "經濟部 企業跨域(SBIR)：外籍移工行動生活APP—移工線上生活圈（MoneyGO + TKI LINE 多語機器人）",
    rocYear: 114,
    category: "Gov Program",
    featured: true,
    role: [...COMMON_PM_ROLE],
    deliverables: [
      "交付：MoneyGO 外籍移工匯兌 App 1 套（iOS/Android）",
      "交付：購物站/入口 1 套（生活圈服務整合）",
      "交付：TKI LINE 多語對話機器人 1 套（中/印尼/英）",
      `交付文件：${GOV_DOCS.join("、")}`,
    ],
    metrics: [
      ...GOV_METRICS,
      "使用者：外籍移工（以印尼籍為主）",
      "規模：萬人以上使用（MoneyGO）",
      "案期：12–24 個月（依補助/聯合案型態）",
    ],
    techOrTools: ["Trello", "ClickUp", "LINE Bot", "App（iOS/Android）"],
    links: [{ label: "Store", url: url("goo.gl/lItQKg") }],
  },

  // 3) 台北明明補習班（補齊你指定交付）
  {
    id: "featured-taidaschool",
    title: "台北明明補習班－整合資訊管理系統（官網前後台 + 學生專區/員工專區前後台 + 學生簽到系統）",
    category: "System",
    featured: true,
    role: [...COMMON_PM_ROLE],
    deliverables: [
      "交付：官網前台 + 後台管理 1 套（內容/權限/營運）",
      "交付：學生專區系統（前台+後台）1 套（課程/教材/通知等依專案）",
      "交付：員工專區系統（前台+後台）1 套（內部流程/資料管理依專案）",
      "交付：學生簽到/點名系統 1 套（流程/紀錄/報表依專案）",
      "交付：UAT/驗收文件與缺陷追蹤 1 套",
    ],
    links: [{ label: "Site", url: url("www.taidaschool.com.tw") }],
  },

  // 4) 食旅示範（跨 AR/LINE/AI）
  {
    id: "featured-gov-114-foodtravel-demo",
    title: "AI 食旅創新整合示範體系（台南彼緹娃藝術蛋糕觀光工廠｜11/27 成果發表）",
    rocYear: 114,
    category: "Gov Program",
    featured: true,
    role: [...COMMON_PM_ROLE],
    deliverables: [
      "交付：AR 互動影像/導覽模組 1 套",
      "交付：LINE AI 客服機器人 1 套（情境/FAQ/流程）",
      "交付：AI 影像辨識模組 1 套（辨識流程/回報介面）",
      "交付：集章/優惠券活動系統 1 套（含上線與活動驗收）",
      `交付文件：${GOV_DOCS.join("、")}`,
    ],
    metrics: [...GOV_METRICS, "活動：11/27 成果發表交付"],
    links: [{ label: "集章活動頁", url: url("arcompletions.onrender.com") }],
  },

  // =========================
  // 政府/場域計畫（非 Featured）
  // =========================
  {
    id: "gov-113-iwalking-carbon",
    title: "經濟部 商業服務業智減碳：iWalking 愛走路減碳會員系統（含 EZCOIN 介接）",
    rocYear: 113,
    category: "Gov Program",
    role: [...COMMON_PM_ROLE],
    deliverables: [
      "交付：會員系統/APP 1 套（登入、會員資料、任務/活動）",
      "交付：減碳計算機制 1 套（規則定義、資料欄位、報表口徑）",
      "交付：EZCOIN 介接/兌換流程 1 套（可驗收）",
      `交付文件：${GOV_DOCS.join("、")}`,
    ],
    metrics: [...GOV_METRICS],
  },
  {
    id: "gov-113-taipei-walkbtc",
    title: "臺北市產發局：走路減碳賺比特幣 系統主題式研發計畫（113/10–114/9）",
    rocYear: 113,
    category: "Gov Program",
    role: [...COMMON_PM_ROLE],
    deliverables: [
      "交付：APP 1 套（任務/記錄/會員）",
      "交付：虛擬幣兌換介接 1 套（流程/驗收口徑）",
      `交付文件：${GOV_DOCS.join("、")}`,
    ],
    metrics: [...GOV_METRICS, "案期：12 個月（113/10–114/9）"],
  },
  {
    id: "gov-112-songshan-ar",
    title: "松菸 智慧眼鏡導覽（10/05–10/31）：AR 互動模組交付",
    rocYear: 112,
    category: "Gov Program",
    role: [...COMMON_PM_ROLE],
    deliverables: ["交付：AR 互動導覽模組 1 套", "交付：場域上線/期間維運 1 次", "交付：驗收報告 1 份"],
    metrics: [...GOV_METRICS],
  },
  {
    id: "gov-112-alwayslunch-carbon",
    title: "經濟部 智慧減碳：企業低碳永續餐盒線上訂購服務（AlwaysLunch）（112/9–113/2）",
    rocYear: 112,
    category: "Gov Program",
    role: [...COMMON_PM_ROLE],
    deliverables: ["交付：線上訂購服務 1 套（前台+後台）", "交付：訂單/出餐流程 1 套", `交付文件：${GOV_DOCS.join("、")}`],
    metrics: [...GOV_METRICS, "案期：6 個月（112/9–113/2）"],
  },
  {
    id: "gov-112-qiusen-cup",
    title: "經濟部 智慧減碳：丘森茶室 循環杯減碳會員系統（112/12–113/5）",
    rocYear: 112,
    category: "Gov Program",
    role: [...COMMON_PM_ROLE],
    deliverables: ["交付：會員/活動系統 1 套", "交付：減碳計算與紀錄機制 1 套", `交付文件：${GOV_DOCS.join("、")}`],
    metrics: [...GOV_METRICS, "案期：6 個月（112/12–113/5）"],
  },
  {
    id: "gov-112-hotspot-order",
    title: "經濟部 智慧減碳：熱點共配服務與智慧化點餐減碳計畫（112/9–113/2）",
    rocYear: 112,
    category: "Gov Program",
    role: [...COMMON_PM_ROLE],
    deliverables: ["交付：智慧點餐/訂單流程 1 套", "交付：減碳計算口徑 1 套", `交付文件：${GOV_DOCS.join("、")}`],
    metrics: [...GOV_METRICS, "案期：6 個月（112/9–113/2）"],
  },
  {
    id: "gov-110-o2o-vending",
    title: "臺北市產發局：無接觸 O2O 智慧餐飲販售機系統研發創業計畫",
    rocYear: 110,
    category: "Gov Program",
    role: [...COMMON_PM_ROLE],
    deliverables: ["交付：O2O 訂購/核銷流程 1 套", "交付：營運後台 1 套", `交付文件：${GOV_DOCS.join("、")}`],
    metrics: [...GOV_METRICS],
  },
  {
    id: "gov-109-citd-alwayslunch",
    title: "經濟部 CITD：後肺炎時期餐飲復甦訂閱制研發（AlwaysLunch）",
    rocYear: 109,
    category: "Gov Program",
    role: [...COMMON_PM_ROLE],
    deliverables: ["交付：APP 1 套", "交付：餐點訂閱/訂單系統 1 套", `交付文件：${GOV_DOCS.join("、")}`],
    metrics: [...GOV_METRICS],
  },

  // 歷年政府研發案（保留你貼的清單；獎項已去除）
  { id: "gov-105-hotel", title: "經濟部：飯店訂房功能與服務整合管理系統", rocYear: 105, category: "Gov Program", role: [...COMMON_PM_ROLE], deliverables: ["交付：訂房/房態/訂單管理系統 1 套", "交付：後台管理 1 套", "交付：驗收報告 1 份"], metrics: [...GOV_METRICS] },
  { id: "gov-103-social-platform", title: "臺北市產發局：具回饋機制之社群網站行銷平台研發計畫", rocYear: 103, category: "Gov Program", role: [...COMMON_PM_ROLE], deliverables: ["交付：社群行銷平台 1 套（活動/回饋/報表）", "交付：後台管理 1 套", "交付：驗收報告 1 份"], metrics: [...GOV_METRICS] },
  { id: "gov-102-fresh-orders", title: "經濟部工業局：多網站之生鮮商品訂單管理系統計畫", rocYear: 102, category: "Gov Program", role: [...COMMON_PM_ROLE], deliverables: ["交付：多站訂單整併/管理系統 1 套", "交付：後台管理 1 套", "交付：驗收報告 1 份"], metrics: [...GOV_METRICS] },
  { id: "gov-100-siir-mobile", title: "經濟部 SIIR：數位內容轉換至行動載具之服務平台開發計畫", rocYear: 100, category: "Gov Program", role: [...COMMON_PM_ROLE], deliverables: ["交付：行動載具服務平台 1 套", "交付：內容管理/轉換流程 1 套", "交付：驗收報告 1 份"], metrics: [...GOV_METRICS] },
  { id: "gov-100-citd-convert", title: "經濟部工業局 CITD：網路數位內容轉換流程技術開發計畫", rocYear: 100, category: "Gov Program", role: [...COMMON_PM_ROLE], deliverables: ["交付：內容轉換流程/工具鏈 1 套", "交付：系統文件與驗收 1 套"], metrics: [...GOV_METRICS] },
  { id: "gov-99-taipei-sbir", title: "臺北市 SBIR：電腦行為分析預警服務系統計畫", rocYear: 99, category: "Gov Program", role: [...COMMON_PM_ROLE], deliverables: ["交付：行為分析/預警系統 1 套", "交付：管理後台 1 套", "交付：驗收報告 1 份"], metrics: [...GOV_METRICS] },
  { id: "gov-99-siir-sme", title: "經濟部商業司 SIIR：中小企業線上資訊管理系統", rocYear: 99, category: "Gov Program", role: [...COMMON_PM_ROLE], deliverables: ["交付：線上資訊管理系統 1 套", "交付：權限/報表/維運機制 1 套", "交付：驗收報告 1 份"], metrics: [...GOV_METRICS] },
  { id: "gov-97-security-record", title: "經濟部工業局：電腦資安事件畫面側錄暨搜尋分析系統", rocYear: 97, category: "Gov Program", role: [...COMMON_PM_ROLE], deliverables: ["交付：側錄/檢索分析系統 1 套", "交付：管理介面 1 套", "交付：驗收報告 1 份"], metrics: [...GOV_METRICS] },
  { id: "gov-96-siir-protect", title: "經濟部商業司 SIIR：家庭暨微型企業之網路行為安全防護計畫", rocYear: 96, category: "Gov Program", role: [...COMMON_PM_ROLE], deliverables: ["交付：安全防護/監控系統 1 套", "交付：管理後台 1 套", "交付：驗收報告 1 份"], metrics: [...GOV_METRICS] },

  // =========================
  // 產品 / App（非政府：不保留 metrics）
  // =========================
  {
    id: "app-moneygo",
    title: "MoneyGo｜金融科技行動應用程式開發",
    category: "Product/App",
    summary: [
      "主導 MoneyGo 金融科技行動應用程式之端到端開發與交付，全面負責產品需求分析、系統架構設計、技術選型、核心功能開發、專案管理及測試驗收。整合產品設計與軟體工程實務，透過模組化架構、系統整合、安全性設計及品質控管，確保產品具備良好的可維護性、擴充性與穩定性，展現獨立主導複雜軟體專案及完整產品生命週期管理之能力。",
    ],
    role: [...DEV_LEAD_ROLE],
    deliverables: [
      "交付：雙平台 APP 上架",
      "交付：原始檔",
      "交付：SASD 規格書、系統操作文件/驗收文件、UI/UX 設計稿、原型",
    ],
    links: [{ label: "Site", url: url("https://www.moneygo.com.tw/?lang=zh-tw") }],
  },
  {
    id: "app-carrefour",
    title: "家樂福 APP",
    category: "Product/App",
    role: [...COMMON_PM_ROLE, "雙平台 APP 開發"],
    deliverables: [
      "交付：SASD 規格書、系統操作文件/驗收文件、UI/UX 設計稿、原型",
      "交付：雙平台 APP 上架（含測試）",
      "交付：上線驗收 1 次",
      "交付：後續營運維護",
    ],
  },
  {
    id: "app-alwayslunch",
    title: "生活食堂 AlwaysLunch（訂閱制餐點/訂單系統 + App）",
    category: "Product/App",
    role: [...COMMON_PM_ROLE, ...COMMON_ER_ROLE],
    deliverables: ["交付：訂閱制訂餐服務 1 套（前台+後台）", "交付：SASD 規格書、系統操作文件/驗收文件、UI/UX 設計稿、原型","交付：App 1 套（Android）", "交付：上線驗收 1 次"],
    links: [{ label: "Site", url: url("www.dingtable.com") }],
  },
  {
    id: "app-bels",
    title: "BitoPro BELS NFT 交易平台（前台 + 營運功能）",
    category: "Product/App",
    role: [...COMMON_PM_ROLE, ...COMMON_ER_ROLE],
    deliverables: ["交付：交易平台前台 1 站", "交付：SASD 規格書、系統操作文件/驗收文件、UI/UX 設計稿、原型","交付：營運/管理功能 1 套", "交付：上線驗收 1 次"],
    links: [{ label: "Site", url: url("www.bels.co") }],
  },

  // =========================
  // Web SaaS 產品（非政府：不保留 metrics）
  // =========================
  {
    id: "saas-zhuqin",
    title: "築勤 ZhuQin｜營造工程智慧差勤與工地管理 SaaS 平台",
    category: "SaaS",
    summary: [
      "主導規劃針對中小型營造企業的雲端工地管理 SaaS 平台，整合 LINE LIFF 行動打卡、GPS 地理圍欄驗證、多工地人員調度、出勤審核、工數核定、薪資試算及施工日誌管理，解決傳統工程行依賴紙本與 Excel 管理的痛點。",
      "系統採用 Next.js、React、TypeScript、Node.js、PostgreSQL 與 Prisma 建置，透過 Multi-Tenant 架構、RBAC 角色權限及 PostgreSQL RLS 實現多企業資料隔離，並整合 LINE 生態系降低員工使用門檻。",
      "專案涵蓋產品需求分析、系統架構規劃、UI/UX 設計、AI 輔助開發、測試驗收及雲端部署規劃，具備從產品構想到 SaaS 系統落地的完整實務經驗。",
    ],
    role: ["產品規劃", "系統架構", "專案管理", "AI 輔助開發"],
    deliverables: [
      "交付：LINE LIFF 行動打卡與 GPS 地理圍欄驗證",
      "交付：多工地人員調度、出勤審核與工數核定",
      "交付：薪資試算與施工日誌管理",
      "交付：Multi-Tenant 架構、RBAC 角色權限與 PostgreSQL RLS 多企業資料隔離",
      "交付：產品需求分析、系統架構規劃、UI/UX 設計、測試驗收及雲端部署規劃",
    ],
    techOrTools: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "LINE LIFF"],
    links: [{ label: "系統登入", url: url("https://zhuqin.jfetek.com/admin") }],
  },
  {
    id: "saas-ai-translate",
    title: "LINE 翻譯機器人｜橋語翻譯（LINE 群組多語自動互譯）",
    category: "SaaS",
    role: [...DEV_LEAD_ROLE],
    deliverables: [
      "交付：LINE 群組翻譯 Bot（中文 ⇄ 印尼、越南、泰、菲律賓、英文雙向自動翻譯）",
      "交付：群組認領與啟用流程（一次性認領碼綁定、後台設定外語與翻譯模式）",
      "交付：管理後台（用量、設定、訂單）與訂閱方案（免費／Pro／企業）",
      "交付：隱私設計：不儲存對話原文與譯文",
    ],
    techOrTools: ["LINE Bot", "SaaS 訂閱"],
    links: [{ label: "Site", url: url("https://www.jfetek.com/ai-translate/") }],
  },
  {
    id: "saas-shiftgo",
    title: "ShiftGo 餐勤通｜餐飲店 LINE 智慧排班管理",
    category: "SaaS",
    role: [...DEV_LEAD_ROLE],
    deliverables: [
      "交付：員工端 LINE 排休、上下班打卡、請假與查班表（免安裝 App）",
      "交付：Web 後台排班與假勤／代班管理",
      "交付：AI 排班建議與班表草稿（店長確認後才發布）",
      "交付：出勤紀錄整理、工時與薪資試算、營運分析",
      "交付：多店管理與訂閱方案（基本版／白金版最多 5 家店／客製方案）",
    ],
    techOrTools: ["LINE", "AI 排班", "SaaS 訂閱"],
    links: [{ label: "Site", url: url("https://www.jfetek.com/shiftgo-ai/") }],
  },
  {
    id: "saas-ai-booking",
    title: "掌席｜餐飲店 LINE 訂位與 AI 智慧客服",
    category: "SaaS",
    role: [...DEV_LEAD_ROLE],
    deliverables: [
      "交付：LINE 官方帳號 AI 客服（24 小時回覆，常見問答與後台共用知識庫）",
      "交付：LINE 線上訂位與提醒（人數／兒童椅／低消規則、爽約風險標示、一鍵關閉當日訂位）",
      "交付：熟客建檔與會員分群標籤",
      "交付：客訴處理方案（AI 偵測不滿先行安撫）",
      "交付：店家營運後台（今日營運、預約、客訴）",
      "交付：現場候位掃碼取號、行銷推播與 Google 評論分析",
    ],
    techOrTools: ["LINE 官方帳號", "AI 客服", "SaaS 訂閱"],
    links: [{ label: "Site", url: url("https://www.jfetek.com/ai-booking/") }],
  },
  {
    id: "saas-ai-admissions",
    title: "班務助手 AI｜補習班 LINE 班群管理與 AI 招生客服",
    category: "SaaS",
    role: [...DEV_LEAD_ROLE],
    deliverables: [
      "交付：五大服務入口整合（LINE 班群 BOT、家長服務帳號、招生客服帳號、官網 AI Widget、LIFF 私人查詢頁）",
      "交付：AI 對話協助（只用核准資料回答，不確定不亂答；導師已回答時不搶答）",
      "交付：案件與真人接手（狀態、負責人、期限，高風險優先）",
      "交付：招生詢問追蹤（來源、需求、首次聯絡期限）",
      "交付：LIFF 身分驗證私人流程（成績、費用等私人資料）",
      "交付：營運總覽後台",
    ],
    techOrTools: ["LINE Bot", "LIFF", "AI 客服", "Web Widget"],
    links: [{ label: "Site", url: url("https://www.jfetek.com/ai-admissions/") }],
  },
  {
    id: "saas-tron-wallet",
    title: "TRON 區塊鏈數位資產錢包與自動化金流管理系統",
    category: "SaaS",
    summary: [
      "本專案的技術核心不僅是一般的加密貨幣轉帳功能，而是將 TRON 公鏈的資源經濟模型整合至企業金流系統，解決多錢包營運中常見的交易成本、資源調度、資產歸集及鏈上交易可靠性問題。",
      "透過自營 Energy 能量池及自動化資產管理架構，使企業能以更具成本效益的方式管理大量 TRON 錢包與 TRC-20 交易，並為後續擴充數位資產支付、企業收款及鏈上資金管理服務提供技術基礎。",
    ],
    role: [...DEV_LEAD_ROLE],
    deliverables: [
      "交付：TRON 數位資產錢包與 TRC-20 交易管理",
      "交付：自營 Energy 能量池與資源調度（降低交易成本）",
      "交付：多錢包資產歸集與自動化資產管理",
      "交付：鏈上交易可靠性處理",
    ],
    techOrTools: ["TRON", "TRC-20", "Energy 能量池"],
  },

  // =========================
  // 系統／平台（非政府：不保留 metrics）
  // =========================
  // ✅ 合併：ZYXEL（合勤）兩筆為同一個
  {
    id: "sys-zyxel",
    title: "ZYXEL（合勤）：Router 管理系統／ERP（前端介面交付）",
    category: "System",
    role: [...COMMON_PM_ROLE],
    deliverables: ["交付：Router 管理介面 1 套", "交付：ERP 介面/流程 1 套", "交付：SASD 規格書、系統操作文件/驗收文件、UI/UX 設計稿、原型","交付：UAT/驗收 1 套"],
  },
  {
    id: "sys-caiyuan-verify",
    title: "采園生態驗證有限公司：驗證平台系統",
    category: "System",
    role: [...COMMON_PM_ROLE],
    deliverables: ["交付：驗證流程/資料管理系統 1 套", "交付：管理介面 1 套", "交付：SASD 規格書、系統操作文件/驗收文件、UI/UX 設計稿、原型","交付：UAT/驗收 1 套"],
  },
  {
    id: "sys-dhl-tool",
    title: "DHL 物流查詢整合與工具介面",
    category: "System",
    role: [...COMMON_PM_ROLE],
    deliverables: ["交付：查詢整合介面 1 套", "交付：API 介接/權限流程 1 套", "交付：SASD 規格書、系統操作文件/驗收文件、UI/UX 設計稿、原型","交付：UAT/驗收 1 套"],
  },
  {
    id: "sys-onepage-internal",
    title: "OnePage（公司內部系統）",
    category: "System",
    role: [...COMMON_PM_ROLE],
    deliverables: ["交付：內部系統 1 套（前台+管理端）", "交付：App 1 套（內部用）", "交付：SASD 規格書、系統操作文件/驗收文件、UI/UX 設計稿、原型","交付：UAT/驗收 1 套"],
  },
  {
    id: "sys-kmsn-monitor",
    title: "KMSN 網頁監控系統",
    category: "System",
    role: [...COMMON_PM_ROLE],
    deliverables: ["交付：監控/告警介面 1 套", "交付：報表/管理功能 1 套", "交付：SASD 規格書、系統操作文件/驗收文件、UI/UX 設計稿、原型","交付：UAT/驗收 1 套"],
  },
  {
    id: "sys-auction",
    title: "拍賣競標系統（整合拍賣站/競標流程）",
    category: "System",
    role: [...COMMON_PM_ROLE],
    deliverables: ["交付：競標/出價流程 1 套", "交付：後台管理 1 套", "交付：SASD 規格書、系統操作文件/驗收文件、UI/UX 設計稿、原型","交付：UAT/驗收 1 套"],
  },
  {
    id: "sys-comma",
    title: "逗點教室後台管理系統",
    category: "System",
    role: [...COMMON_PM_ROLE],
    deliverables: ["交付：後台管理系統 1 套（權限/內容/營運）", "交付：SASD 規格書、系統操作文件/驗收文件、UI/UX 設計稿、原型","交付：UAT/驗收 1 套"],
    links: [{ label: "Site", url: url("comma.jfetek.com") }],
  },
  {
    id: "sys-weather-tp",
    title: "臺北市校園數位氣象網",
    category: "System",
    role: [...COMMON_PM_ROLE],
    deliverables: ["交付：資訊入口/查詢系統 1 套", "交付：SASD 規格書、系統操作文件/驗收文件、UI/UX 設計稿、原型"],
    links: [{ label: "Site", url: url("weather.tp.edu.tw") }],
  },
  {
    id: "sys-idonate",
    title: "I DONATE - 為愛相挺，溫暖同行（募捐平台）",
    category: "System",
    role: [...COMMON_PM_ROLE],
    deliverables: ["交付：募捐平台 1 套（前台+管理端）", "交付：SASD 規格書、系統操作文件/驗收文件、UI/UX 設計稿、原型"],
  },

  // =========================
  // 電商／商城（非政府：不保留 metrics）
  // =========================
  { id: "ec-fmspices", title: "飛馬辛香料", category: "Ecommerce", role: [...COMMON_PM_ROLE], deliverables: ["交付：電商站 1 套（前台+後台）"], links: [{ label: "Site", url: url("www.fmspices.com") }] },
  { id: "ec-kathyjade", title: "KATHY JADE", category: "Ecommerce", role: [...COMMON_PM_ROLE], deliverables: ["交付：電商站 1 套（前台+後台）"], links: [{ label: "Site", url: url("www.kathyjade.com") }] },
  { id: "ec-miusbaby", title: "mius baby", category: "Ecommerce", role: [...COMMON_PM_ROLE], deliverables: ["交付：電商站 1 套（前台+後台）"], links: [{ label: "Site", url: url("www.miusbaby.com") }] },
  { id: "ec-aircook", title: "鮮食煮藝", category: "Ecommerce", role: [...COMMON_PM_ROLE], deliverables: ["交付：品牌/電商站 1 套"], links: [{ label: "Site", url: url("www.aircook.com.tw") }] },
  { id: "ec-happymarket", title: "HappyMarket", category: "Ecommerce", role: [...COMMON_PM_ROLE], deliverables: ["交付：電商站 1 套"], links: [{ label: "Site", url: url("www.happymarket.com.tw") }] },
  { id: "ec-freshgood", title: "鮮好購（線上菜市場）", category: "Ecommerce", role: [...COMMON_PM_ROLE], deliverables: ["交付：電商站 1 套"], links: [{ label: "Site", url: url("www.freshgood.tw") }] },
  { id: "ec-kjade", title: "KJADE", category: "Ecommerce", role: [...COMMON_PM_ROLE], deliverables: ["交付：品牌/電商站 1 套"], links: [{ label: "Site", url: url("www.kjade.com") }] },
  { id: "ec-mr9", title: "蕭敬騰購物站", category: "Ecommerce", role: [...COMMON_PM_ROLE], deliverables: ["交付：購物站 1 套"], links: [{ label: "Site", url: url("mr9.asia") }] },
  { id: "ec-10000goods", title: "台灣10000個好物商城", category: "Ecommerce", role: [...COMMON_PM_ROLE], deliverables: ["交付：商城平台 1 套（前台+後台）"] },

  // 農業/你可能不想優先呈現（預設隱藏）
  { id: "ec-meicai", title: "美菜市集", category: "Ecommerce", hidden: true, role: [...COMMON_PM_ROLE], deliverables: ["交付：電商/市集站 1 套"], links: [{ label: "Site", url: url("coa.meicai.com.tw") }] },
  { id: "ec-pineapple", title: "鳳梨線上甜蜜蜜", category: "Ecommerce", hidden: true, role: [...COMMON_PM_ROLE], deliverables: ["交付：活動/銷售站 1 站"], links: [{ label: "Site", url: url("pineapple.jfetek.com") }] },

  // =========================
  // 網站／官網（非政府：不保留 metrics）
  // =========================
  { id: "web-jjlin", title: "JJLIN 官方網站", category: "Website", role: [...COMMON_PM_ROLE, ...COMMON_FE_ROLE], deliverables: ["交付：RWD 官網 1 站", "交付：上線驗收 1 次"], links: [{ label: "Site", url: url("www.jjlin.com") }] },
  { id: "web-jamhsiao", title: "蕭敬騰官方網站", category: "Website", role: [...COMMON_PM_ROLE, ...COMMON_FE_ROLE], deliverables: ["交付：RWD 官網 1 站", "交付：上線驗收 1 次"], links: [{ label: "Site", url: url("www.jamhsiao.com") }] },
  { id: "web-papago", title: "日暉渡假村", category: "Website", role: [...COMMON_PM_ROLE, ...COMMON_FE_ROLE], deliverables: ["交付：RWD 官網 1 站", "交付：上線驗收 1 次"], links: [{ label: "Site", url: url("www.papago-resort.com") }] },
  { id: "web-ximencorner", title: "西門街角", category: "Website", role: [...COMMON_PM_ROLE, ...COMMON_FE_ROLE], deliverables: ["交付：RWD 官網 1 站"], links: [{ label: "Site", url: url("www.ximencorner.com") }] },
  { id: "web-howyoung", title: "好漾國際旅行社", category: "Website", role: [...COMMON_PM_ROLE, ...COMMON_FE_ROLE], deliverables: ["交付：企業官網 1 站（RWD）"], links: [{ label: "Site", url: url("www.howyoungtours.com.tw") }] },
  { id: "web-rightone", title: "正一旅行社", category: "Website", role: [...COMMON_PM_ROLE, ...COMMON_FE_ROLE], deliverables: ["交付：企業官網 1 站（RWD）"], links: [{ label: "Site", url: url("www.rightonetravel.com") }] },
  { id: "web-mezi", title: "日暉酒店", category: "Website", role: [...COMMON_PM_ROLE, ...COMMON_FE_ROLE], deliverables: ["交付：官網 1 站（RWD）"], links: [{ label: "Site", url: url("www.mezi.com.tw") }] },
  { id: "web-acits", title: "環洋假期", category: "Website", role: [...COMMON_PM_ROLE, ...COMMON_FE_ROLE], deliverables: ["交付：官網 1 站（RWD）"], links: [{ label: "Site", url: url("www.acits.com.tw") }] },
  { id: "web-honeymoon", title: "蜜月四季", category: "Website", role: [...COMMON_PM_ROLE, ...COMMON_FE_ROLE], deliverables: ["交付：官網 1 站（RWD）"], links: [{ label: "Site", url: url("www.honeymoon.com.tw") }] },
  { id: "web-roundday", title: "全日物流股份有限公司", category: "Website", role: [...COMMON_PM_ROLE, ...COMMON_FE_ROLE], deliverables: ["交付：企業官網 1 站"], links: [{ label: "Site", url: url("www.roundday.com.tw") }] },
  { id: "web-ushio", title: "優志旺股份有限公司", category: "Website", role: [...COMMON_PM_ROLE, ...COMMON_FE_ROLE], deliverables: ["交付：企業官網 1 站"], links: [{ label: "Site", url: url("www.ushio.com.tw") }] },
  { id: "web-ppgathering", title: "群聚", category: "Website", role: [...COMMON_PM_ROLE, ...COMMON_FE_ROLE], deliverables: ["交付：品牌網站 1 站"], links: [{ label: "Site", url: url("ppgathering.com") }] },
  { id: "web-peoplenews", title: "民報 Taiwan People News", category: "Website", role: [...COMMON_PM_ROLE, ...COMMON_FE_ROLE], deliverables: ["交付：媒體網站 1 站", "交付：內容管理/上稿流程 1 套（依專案）"], links: [{ label: "Site", url: url("www.peoplenews.tw") }] },
  { id: "web-chinafun", title: "喜鵲娛樂", category: "Website", role: [...COMMON_PM_ROLE, ...COMMON_FE_ROLE], deliverables: ["交付：企業官網 1 站"], links: [{ label: "Site", url: url("www.chinafun.com.tw") }] },
  { id: "web-bestpals", title: "Best Pals 百事特", category: "Website", role: [...COMMON_PM_ROLE], deliverables: ["交付：品牌網站 1 站"], links: [{ label: "Site", url: url("bestpals.jfetek.com") }] },

  // 學會類（補齊你要求的交付）
  { id: "soc-tadhtw", title: "台灣口腔衛生科學學會", category: "Website", role: [...COMMON_PM_ROLE, ...COMMON_FE_ROLE], deliverables: [...SOCIETY_DELIVERABLES], links: [{ label: "Site", url: url("www.tadhtw.org") }] },
  { id: "soc-retina", title: "中華民國視網膜醫學會", category: "Website", role: [...COMMON_PM_ROLE, ...COMMON_FE_ROLE], deliverables: [...SOCIETY_DELIVERABLES], links: [{ label: "Site", url: url("www.retina.org.tw") }] },
  { id: "soc-twtois", title: "中華民國眼部炎症醫學會", category: "Website", role: [...COMMON_PM_ROLE, ...COMMON_FE_ROLE], deliverables: [...SOCIETY_DELIVERABLES], links: [{ label: "Site", url: url("www.twtois.org.tw") }] },
  { id: "soc-lasermed", title: "台灣醫用雷射光電學會", category: "Website", role: [...COMMON_PM_ROLE, ...COMMON_FE_ROLE], deliverables: [...SOCIETY_DELIVERABLES], links: [{ label: "Site", url: url("www.lasermed.org.tw") }] },
  { id: "soc-twao", title: "台灣眼科學教授學術醫學會", category: "Website", role: [...COMMON_PM_ROLE, ...COMMON_FE_ROLE], deliverables: [...SOCIETY_DELIVERABLES], links: [{ label: "Site", url: url("www.twao.org.tw") }] },
  { id: "soc-ais", title: "台灣人工智慧暨區塊鏈應用學會", category: "Website", role: [...COMMON_PM_ROLE, ...COMMON_FE_ROLE], deliverables: [...SOCIETY_DELIVERABLES], links: [{ label: "Site", url: url("www.ais.org.tw") }] },

  // 其他網站
  { id: "web-vigormedia", title: "銳傳媒", category: "Website", role: [...COMMON_PM_ROLE, ...COMMON_FE_ROLE], deliverables: ["交付：媒體網站 1 站", "交付：內容管理/上稿流程 1 套（依專案）"], links: [{ label: "Site", url: url("vigormedia.tw") }] },
  { id: "web-bombus", title: "邦鉑科技", category: "Website", role: [...COMMON_PM_ROLE, ...COMMON_FE_ROLE], deliverables: ["交付：企業官網 1 站"], links: [{ label: "Site", url: url("www.bombus.com.tw") }] },

  // 農業課程（預設隱藏）
  { id: "web-agri-training", title: "農科院 農業課程報名與查詢系統", category: "Website", hidden: true, role: [...COMMON_PM_ROLE, ...COMMON_FE_ROLE], deliverables: ["交付：報名/查詢系統 1 套", "交付：後台管理 1 套", "交付：上線驗收 1 次"], links: [{ label: "Site", url: url("agritraining.atri.org.tw") }] },
];
