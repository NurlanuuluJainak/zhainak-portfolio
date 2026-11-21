import type { L10n } from "./i18n";

/* ──────────────────────────────────────────────────────────────
   Бардык жеке маалыматтар ушул файлда. Өзгөртүү үчүн ушул жерди оңдоңуз.
   Все личные данные — в этом файле. Правьте здесь.
   ────────────────────────────────────────────────────────────── */

export const profile = {
  name: { ky: "Жайнак Нурлан уулу", ru: "Жайнак Нурлан уулу", en: "Zhainak Nurlan uulu" } as L10n,
  shortName: "Zhainak",
  headline: "React · Next.js · TypeScript · Redux Toolkit",
  tagline: {
    ky: "2 банк сайтынын жана HR-порталдын жалгыз frontend-иштеп чыгуучусу · FinTech & GovTech · 4+ жыл",
    ru: "Единственный frontend 2 банковских сайтов и HR-портала · FinTech & GovTech · 4+ лет",
    en: "Sole frontend developer for 2 banking websites & HR portal · FinTech & GovTech · 4+ yrs",
  } as L10n,
  photo: "/me.jpg",
  email: "nurlanuuluzajnak75@gmail.com",
  github: "https://github.com/NurlanuuluJainak",
  // Толтуруңуз / Заполните — пустые ссылки на сайте не показываются
  phone: "+996 709 408 819",
  phoneRaw: "+996709408819",
  telegram: "https://t.me/ZhainakNurlan",
  telegramHandle: "@ZhainakNurlan",
  whatsapp: "https://wa.me/996709408819",
  linkedin: "https://www.linkedin.com/in/zhainak-nurlan-8b5168243/",
  cv: "",
};

export const stats = [
  { value: "4+", key: "statYears" },
  { value: "4 000+", key: "statCommits" },
  { value: "4", key: "statProducts" },
  { value: "3", key: "statLangs" },
] as const;

export type CompanyId = "bakai" | "isistent" | "personal";

export type Project = {
  id: string;
  company: CompanyId;
  title: string;
  kind: L10n;
  year: string;
  role: L10n;
  url?: string;
  cover: string;
  images: string[];
  accent: string;
  /** solo — единственный frontend-разработчик; team — работа в команде */
  team?: "solo" | "team";
  stack: string[];
  summary: L10n;
  highlights: L10n<string[]>;
};

export const projects: Project[] = [
  {
    id: "bakai-kg",
    company: "bakai",
    title: "bakai.kg",
    kind: { ky: "Банктын расмий сайты", ru: "Официальный сайт банка", en: "Bank's public website" },
    year: "2024 — 2026",
    role: { ky: "Жалгыз frontend-иштеп чыгуучу", ru: "Единственный frontend-разработчик", en: "Sole frontend developer" },
    url: "https://bakai.kg",
    cover: "/projects/bakai-home.jpg",
    images: ["/projects/bakai-home.jpg"],
    accent: "#0a3d91",
    team: "solo",
    stack: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "next-intl", "Framer Motion", "Leaflet", "Chart.js", "Jest"],
    summary: {
      ky: "Кыргызстандагы ири банктардын биринин расмий сайты: карталар, депозиттер, кредиттер, которуулар, бизнес бөлүмү, филиалдар картасы жана валюта курстары. Күн сайын миңдеген колдонуучулар.",
      ru: "Официальный сайт одного из крупнейших банков Кыргызстана: карты, депозиты, кредиты, переводы, раздел для бизнеса, карта отделений и курсы валют. Тысячи посетителей каждый день.",
      en: "The public website of one of Kyrgyzstan's largest banks: cards, deposits, loans, transfers, a business section, a branch map and exchange rates. Thousands of visitors every day.",
    },
    highlights: {
      ky: [
        "Сайттын жалгыз frontend-иштеп чыгуучусумун: архитектура, релиздер жана сапат толугу менен менин жоопкерчилигимде — 1 700+ коммит",
        "3 тил (кыргызча, орусча, англисче) next-intl аркылуу, SEO жана SSR",
        "Жарык/караңгы тема жана көрүүсү начар адамдар үчүн режим",
        "Карталар, депозиттер жана кредиттер каталогу, кредит калькуляторлору",
        "Leaflet менен филиалдар жана банкоматтар картасы, кластерлер",
        "Валюта курстары, Chart.js графиктери, Lighthouse оптимизациясы",
      ],
      ru: [
        "Единственный frontend-разработчик сайта: архитектура, релизы и качество полностью на мне — 1 700+ коммитов",
        "3 языка (кыргызский, русский, английский) на next-intl, SEO и SSR",
        "Светлая/тёмная темы и версия для слабовидящих",
        "Каталоги карт, депозитов и кредитов, кредитные калькуляторы",
        "Карта отделений и банкоматов на Leaflet с кластеризацией",
        "Курсы валют, графики на Chart.js, оптимизация под Lighthouse",
      ],
      en: [
        "Sole frontend developer: architecture, releases and quality are fully on me, with 1,700+ commits",
        "3 locales (Kyrgyz, Russian, English) with next-intl, SEO and SSR",
        "Light/dark themes and an accessibility mode for low-vision users",
        "Catalogs of cards, deposits and loans, plus loan calculators",
        "Branch & ATM map on Leaflet with clustering",
        "Exchange rates, Chart.js charts, Lighthouse-driven optimization",
      ],
    },
  },
  {
    id: "ifcenter",
    company: "bakai",
    title: "ifcenter.kg · BAKAI Islam",
    kind: { ky: "Исламдык банкинг сайты", ru: "Сайт исламского банкинга", en: "Islamic banking website" },
    year: "2024 — 2026",
    role: { ky: "Жалгыз frontend-иштеп чыгуучу", ru: "Единственный frontend-разработчик", en: "Sole frontend developer" },
    url: "https://ifcenter.kg",
    cover: "/projects/ifc-home.jpg",
    images: ["/projects/ifc-home.jpg"],
    accent: "#2f6b55",
    team: "solo",
    stack: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "next-intl", "Framer Motion"],
    summary: {
      ky: "BAKAI Islam — Бакай Банктын исламдык финансы борборунун сайты: шарият принциптерине ылайык карталар, Мудараба, Мурабаха жана авто каржылоо.",
      ru: "BAKAI Islam — сайт центра исламского финансирования Бакай Банка: продукты по принципам шариата — карты, Мудараба, Мурабаха, авто­финансирование.",
      en: "BAKAI Islam is the website of Bakai Bank's Islamic finance center: Sharia-compliant cards, Mudaraba, Murabaha and car financing.",
    },
    highlights: {
      ky: [
        "bakai.kg менен жалпы компоненттер базасы — бир код, эки бренд",
        "Өзүнчө жашыл бренд-тема жана продукт баракчалары",
        "1 800+ коммит, релиздерди жана code review жетектейм",
        "3 тил, адаптивдүү дизайн, жеткиликтүүлүк режими",
      ],
      ru: [
        "Общая база компонентов с bakai.kg: один код, два бренда",
        "Отдельная зелёная бренд-тема и продуктовые страницы",
        "1 800+ коммитов, веду релизы и code review",
        "3 языка, адаптивная вёрстка, версия для слабовидящих",
      ],
      en: [
        "Shared component base with bakai.kg: one codebase, two brands",
        "Separate green brand theme and product pages",
        "1,800+ commits; I run releases and code review",
        "3 locales, responsive layout, accessibility mode",
      ],
    },
  },
  {
    id: "bakai-hr",
    company: "bakai",
    title: "Bakai HR",
    kind: { ky: "Кызматкерлер үчүн ички HR-портал", ru: "Внутренний HR-портал для сотрудников", en: "Internal HR portal for employees" },
    year: "2026",
    role: { ky: "Жалгыз frontend-иштеп чыгуучу · нөлдөн", ru: "Единственный frontend-разработчик · с нуля", en: "Sole frontend developer · from scratch" },
    cover: "/projects/hr-dashboard.jpg",
    images: ["/projects/hr-dashboard.jpg", "/projects/hr-org.jpg", "/projects/hr-learning.jpg"],
    accent: "#0072de",
    team: "solo",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "daisyUI 5", "next-intl", "d3-org-chart", "Zod", "WebSocket", "Vitest"],
    summary: {
      ky: "Бакай Банктын бардык кызматкерлери үчүн корпоративдик портал: жаңылыктар, окутуу, билим базасы, оргструктура, өргүүлөр, KPI, сурамжылоолор, маркетплейс жана жеке кабинет. Чыныгы HR API менен иштейт.",
      ru: "Корпоративный портал для всех сотрудников Бакай Банка: новости, обучение, база знаний, оргструктура, отпуска, KPI, опросы, маркетплейс и личный кабинет. Работает на реальном HR API.",
      en: "A corporate portal for every Bakai Bank employee: news, learning, knowledge base, org chart, vacations, KPIs, polls, a marketplace and a personal cabinet. Runs on the real HR API.",
    },
    highlights: {
      ky: [
        "Долбоорду нөлдөн курдум: архитектура (MVC: models / controllers / views), эрежелер, CI",
        "40+ бөлүм: башкы бет, каналдар, окутуу жана тесттер, KPI, өргүүлөр, вакансиялар",
        "d3 менен интерактивдүү оргструктура: масштаб, издөө, бөлүмдөр",
        "Suspense жана стриминг: ар бир виджет өз алдынча жүктөлөт",
        "Жарык/караңгы тема, кыргызча жана орусча интерфейс",
        "WebSocket билдирмелер, BAKAI GPT ассистенти, онбординг-тур",
      ],
      ru: [
        "Построил проект с нуля: архитектура (MVC: models / controllers / views), правила, CI",
        "40+ разделов: главная, каналы, обучение и тесты, KPI, отпуска, вакансии",
        "Интерактивная оргструктура на d3: масштаб, поиск, подразделения",
        "Suspense и стриминг: каждый виджет грузится независимо",
        "Светлая/тёмная темы, интерфейс на кыргызском и русском",
        "Уведомления по WebSocket, ассистент BAKAI GPT, онбординг-тур",
      ],
      en: [
        "Built it from scratch: architecture (MVC: models / controllers / views), conventions, CI",
        "40+ sections: dashboard, channels, courses & tests, KPIs, vacations, vacancies",
        "Interactive org chart on d3 with zoom, search and departments",
        "Suspense and streaming, so every widget loads independently",
        "Light/dark themes, Kyrgyz and Russian UI",
        "WebSocket notifications, BAKAI GPT assistant, onboarding tour",
      ],
    },
  },
  {
    id: "bakai-hr-mobile",
    company: "bakai",
    title: "Bakai HR Mobile",
    kind: { ky: "HR мобилдик тиркемеси", ru: "Мобильное HR-приложение", en: "HR mobile app" },
    year: "2026",
    role: { ky: "Жалгыз frontend-иштеп чыгуучу", ru: "Единственный frontend-разработчик", en: "Sole frontend developer" },
    cover: "/projects/hr-mobile.jpg",
    images: ["/projects/hr-mobile.jpg"],
    accent: "#003497",
    team: "solo",
    stack: ["React Native", "Expo", "Expo Router", "TypeScript"],
    summary: {
      ky: "HR-порталдын iOS жана Android үчүн мобилдик версиясы: өргүү, HR'га арыздар, чаттар, маркет жана жаңылыктар.",
      ru: "Мобильная версия HR-портала для iOS и Android: отпуска, заявки в HR, чаты, маркет и новости.",
      en: "The mobile companion of the HR portal for iOS and Android: vacations, HR requests, chats, marketplace and news.",
    },
    highlights: {
      ky: ["Expo Router, 5 таб жана 10+ экран", "Өзүнчө UI-кит жана bakai / bakai-dark темалары", "Өргүү календары жана арыз берүү"],
      ru: ["Expo Router, 5 табов и 10+ экранов", "Свой UI-кит и темы bakai / bakai-dark", "Календарь отпусков и подача заявок"],
      en: ["Expo Router, 5 tabs and 10+ screens", "Custom UI kit with bakai / bakai-dark themes", "Vacation calendar and request flow"],
    },
  },
  {
    id: "taxopark",
    company: "bakai",
    title: "Bakai24 · Таксопарки",
    kind: { ky: "Bakai24 тиркемесиндеги WebView-сервис", ru: "WebView-сервис в приложении Bakai24", en: "WebView service inside the Bakai24 app" },
    year: "2025",
    role: { ky: "Frontend-иштеп чыгуучу · командада", ru: "Frontend-разработчик · в команде", en: "Frontend developer · in a team" },
    cover: "/projects/taxopark.jpg",
    images: ["/projects/taxopark.jpg", "/projects/taxopark-promo.jpg"],
    accent: "#0b3fbf",
    team: "team",
    stack: ["React", "TypeScript", "WebView", "REST API", "Mobile-first"],
    summary: {
      ky: "Bakai24 мобилдик банкинг тиркемесинин ичиндеги «Таксопарки» сервиси: таксопарктардын айдоочулары өз эмгек акысын банк картасына чыгарып, балансын толтура алышат. Тиркеменин ичинде WebView катары иштейт.",
      ru: "Сервис «Таксопарки» внутри мобильного банкинга Bakai24: водители таксопарков выводят заработок на банковскую карту и пополняют баланс. Работает как WebView внутри приложения.",
      en: "The Taxi Fleets service inside the Bakai24 mobile banking app: drivers working for taxi fleets withdraw their earnings to a bank card and top up their balance. It runs as a WebView inside the app.",
    },
    highlights: {
      ky: [
        "Команданын курамында сервистин frontend бөлүгүн иштеп чыктым",
        "Таксопарк тандоо, баланс, чыгаруу жана толтуруу агымдары",
        "Нативдүү тиркеме менен WebView интеграциясы, mobile-first интерфейс",
        "Айдоочулар үчүн акциялар менен колдоо — сервис банктын маркетингинде колдонулат",
      ],
      ru: [
        "Разрабатывал frontend сервиса в составе команды",
        "Флоу выбора таксопарка, баланса, вывода и пополнения средств",
        "Интеграция WebView с нативным приложением, mobile-first интерфейс",
        "Сервис используется в маркетинговых акциях банка для водителей такси",
      ],
      en: [
        "Built the service's frontend as part of the team",
        "Flows for choosing a fleet, checking the balance, withdrawals and top-ups",
        "WebView integration with the native app and a mobile-first UI",
        "The service powers the bank's marketing campaigns for taxi drivers",
      ],
    },
  },
  {
    id: "finpulse",
    company: "isistent",
    title: "FinPulse",
    kind: { ky: "Жеке финансы дашборду", ru: "Дашборд личных финансов", en: "Personal finance dashboard" },
    year: "2023",
    role: { ky: "Frontend-иштеп чыгуучу", ru: "Frontend-разработчик", en: "Frontend developer" },
    cover: "/projects/finpulse.jpg",
    images: ["/projects/finpulse.jpg"],
    accent: "#4936c9",
    stack: ["React", "TypeScript", "Redux Toolkit", "RTK Query", "Recharts"],
    summary: {
      ky: "Кардарлар үчүн финансы аналитикасы: баланс, кирешелер жана чыгашалар, операциялар жана топтоо максаттары.",
      ru: "Финансовая аналитика для клиентов: баланс, доходы и расходы, операции и цели накоплений.",
      en: "Financial analytics for customers: balance, income and spending, transactions and savings goals.",
    },
    highlights: {
      ky: ["Redux Toolkit + RTK Query менен кэш жана оптимисттик жаңыртуулар", "Интерактивдүү графиктер жана фильтрлер", "Дизайн-система жана караңгы тема"],
      ru: ["Redux Toolkit + RTK Query: кэш и оптимистичные обновления", "Интерактивные графики и фильтры", "Дизайн-система и тёмная тема"],
      en: ["Redux Toolkit + RTK Query with caching and optimistic updates", "Interactive charts and filters", "Design system and dark theme"],
    },
  },
  {
    id: "credit-calc",
    company: "personal",
    title: "CreditCalc",
    kind: { ky: "Кредит калькулятору", ru: "Кредитный калькулятор", en: "Loan calculator" },
    year: "2025",
    role: { ky: "Жеке долбоор", ru: "Пет-проект", en: "Pet project" },
    cover: "/projects/credit.jpg",
    images: ["/projects/credit.jpg"],
    accent: "#4f46e5",
    stack: ["React", "TypeScript", "Vite", "CSS Modules"],
    summary: {
      ky: "Аннуитеттик жана дифференцияланган төлөмдөр, толук төлөө графиги жана ашыкча төлөмдү эсептөө.",
      ru: "Аннуитетные и дифференцированные платежи, полный график погашения и расчёт переплаты.",
      en: "Annuity and differentiated payments, a full repayment schedule and overpayment breakdown.",
    },
    highlights: {
      ky: ["Банктык формулалар боюнча так эсептөө", "Төлөм графигин PDF'ке экспорттоо", "Слайдерлер менен ыкчам интерфейс"],
      ru: ["Точный расчёт по банковским формулам", "Экспорт графика платежей в PDF", "Отзывчивый интерфейс со слайдерами"],
      en: ["Accurate math based on banking formulas", "Export the payment schedule to PDF", "Responsive slider-driven UI"],
    },
  },
  {
    id: "taskflow",
    company: "personal",
    title: "TaskFlow",
    kind: { ky: "Канбан-такта", ru: "Канбан-доска", en: "Kanban board" },
    year: "2025",
    role: { ky: "Жеке долбоор", ru: "Пет-проект", en: "Pet project" },
    cover: "/projects/taskflow.jpg",
    images: ["/projects/taskflow.jpg"],
    accent: "#f97316",
    stack: ["Next.js", "TypeScript", "Redux Toolkit", "dnd-kit", "WebSocket"],
    summary: {
      ky: "Командалар үчүн тапшырмаларды башкаруу: drag & drop, спринттер жана реалдуу убакытта синхрондоо.",
      ru: "Управление задачами для команд: drag & drop, спринты и синхронизация в реальном времени.",
      en: "Task management for teams: drag & drop, sprints and real-time sync.",
    },
    highlights: {
      ky: ["dnd-kit менен drag & drop", "WebSocket аркылуу биргелешип иштөө", "Оптимисттик UI жана офлайн-кэш"],
      ru: ["Drag & drop на dnd-kit", "Совместная работа через WebSocket", "Оптимистичный UI и офлайн-кэш"],
      en: ["Drag & drop with dnd-kit", "Real-time collaboration over WebSocket", "Optimistic UI and offline cache"],
    },
  },
];

export type Job = {
  company: CompanyId;
  name: string;
  logo: string;
  role: L10n;
  start: string;
  end?: string;
  location: L10n;
  about: L10n;
  bullets: L10n<string[]>;
};

export const jobs: Job[] = [
  {
    company: "bakai",
    name: "Bakai Bank",
    logo: "B",
    role: { ky: "Frontend Developer · Lead", ru: "Frontend Developer · Lead", en: "Frontend Developer · Lead" },
    start: "07.2024",
    location: { ky: "Бишкек · FinTech", ru: "Бишкек · FinTech", en: "Bishkek · FinTech" },
    about: {
      ky: "Кыргызстандагы ири коммерциялык банктардын бири. Банктын эки сайтынын, HR-порталынын жана HR мобилдик тиркемесинин жалгыз frontend-иштеп чыгуучусумун — frontend үчүн толук жооп берем.",
      ru: "Один из крупнейших коммерческих банков Кыргызстана. Единственный frontend-разработчик двух сайтов банка, HR-портала и HR-приложения — полностью отвечаю за frontend.",
      en: "One of the largest commercial banks in Kyrgyzstan. I am the sole frontend developer of the bank's two websites, the HR portal and the HR mobile app, and own the frontend end to end.",
    },
    bullets: {
      ky: [
        "bakai.kg жана ifcenter.kg — 3 500+ коммит, жалпы компоненттер базасы, 3 тил",
        "Жалгыз frontend катары Bakai HR порталын нөлдөн курдум: Next.js 16, React 19, 40+ бөлүм",
        "HR мобилдик тиркемеси (Expo) жана кадр документтери сервиси",
        "Bakai24 тиркемесиндеги «Таксопарки» WebView-сервиси — командада",
        "Code review, релиздер, архитектуралык чечимдер, жаңы иштеп чыгуучуларды үйрөтүү",
        "Дизайнерлер, backend жана бизнес менен тыгыз иштешүү",
      ],
      ru: [
        "bakai.kg и ifcenter.kg — 3 500+ коммитов, общая база компонентов, 3 языка",
        "Как единственный frontend построил HR-портал Bakai HR с нуля: Next.js 16, React 19, 40+ разделов",
        "Мобильное HR-приложение (Expo) и сервис кадровых документов",
        "WebView-сервис «Таксопарки» в приложении Bakai24 — в команде",
        "Code review, релизы, архитектурные решения, онбординг разработчиков",
        "Плотная работа с дизайнерами, backend и бизнесом",
      ],
      en: [
        "bakai.kg and ifcenter.kg: 3,500+ commits, a shared component base, 3 locales",
        "As the sole frontend dev, built the Bakai HR portal from scratch: Next.js 16, React 19, 40+ sections",
        "HR mobile app (Expo) and an HR documents service",
        "The Taxi Fleets WebView service in the Bakai24 app, built with the team",
        "Code review, releases, architecture decisions, onboarding new developers",
        "Close collaboration with designers, backend and business",
      ],
    },
  },
  {
    company: "isistent",
    name: "Isistent",
    logo: "i",
    role: { ky: "Frontend Developer", ru: "Frontend Developer", en: "Frontend Developer" },
    start: "2022",
    end: "07.2024",
    location: { ky: "Бишкек · FinTech & GovTech", ru: "Бишкек · FinTech & GovTech", en: "Bishkek · FinTech & GovTech" },
    about: {
      ky: "Финтех, мамлекеттик жана коммерциялык кардарлар үчүн веб-тиркемелерди иштеп чыгуучу IT-компания.",
      ru: "IT-компания, разрабатывающая веб-приложения для финтех-, государственных и коммерческих заказчиков.",
      en: "An IT company building web applications for fintech, government and commercial clients.",
    },
    bullets: {
      ky: [
        "React, TypeScript жана Redux Toolkit менен SPA жана SSR тиркемелер",
        "Дашборддор, финансы аналитикасы жана көп кадамдуу формалар",
        "REST API интеграциясы, RTK Query, авторизация",
        "Кайра колдонулуучу компоненттер китепканасы жана адаптивдүү верстка",
      ],
      ru: [
        "SPA и SSR-приложения на React, TypeScript и Redux Toolkit",
        "Дашборды, финансовая аналитика и многошаговые формы",
        "Интеграция REST API, RTK Query, авторизация",
        "Библиотека переиспользуемых компонентов и адаптивная вёрстка",
      ],
      en: [
        "SPA and SSR apps with React, TypeScript and Redux Toolkit",
        "Dashboards, financial analytics and multi-step forms",
        "REST API integration, RTK Query, authentication",
        "A reusable component library and responsive layouts",
      ],
    },
  },
];

export const aboutFacts: L10n<string[]> = {
  ky: [
    "Бишкекте жашайм жана иштейм",
    "4 жылдан ашык frontend иштеп чыгуудамын — FinTech жана GovTech",
    "Бакай Банкта 2 сайттын, HR-порталдын жана HR тиркемесинин жалгыз frontend-иштеп чыгуучусумун",
    "Миңдеген колдонуучулар күн сайын колдонгон интерфейстерди жасайм",
    "Таза архитектураны, тесттерди жана code review'ду баалайм",
    "Кыргызча, орусча жана англисче сүйлөйм",
  ],
  ru: [
    "Живу и работаю в Бишкеке",
    "4+ года во frontend-разработке — FinTech и GovTech",
    "В Бакай Банке — единственный frontend двух сайтов, HR-портала и HR-приложения",
    "Делаю интерфейсы, которыми каждый день пользуются тысячи людей",
    "Ценю чистую архитектуру, тесты и code review",
    "Говорю на кыргызском, русском и английском",
  ],
  en: [
    "Based in Bishkek, Kyrgyzstan",
    "4+ years in frontend development across FinTech and GovTech",
    "At Bakai Bank I am the sole frontend dev on 2 websites, the HR portal and the HR app",
    "I build interfaces thousands of people use every day",
    "I care about clean architecture, tests and code review",
    "I speak Kyrgyz, Russian and English",
  ],
};

export const aboutCards = [
  {
    title: { ky: "Продукт ой жүгүртүү", ru: "Продуктовое мышление", en: "Product thinking" },
    text: {
      ky: "Код — бул максат эмес. Бизнес жана колдонуучу үчүн натыйжаны ойлоп, дизайнерлер жана аналитиктер менен бирге чечим издейм.",
      ru: "Код — не самоцель. Думаю о результате для бизнеса и пользователя, ищу решения вместе с дизайнерами и аналитиками.",
      en: "Code is not the goal. I think about outcomes for the business and the user, and solve problems together with designers and analysts.",
    },
  },
  {
    title: { ky: "Сапат жана ылдамдык", ru: "Качество и скорость", en: "Quality and speed" },
    text: {
      ky: "SSR, стриминг, кэш, Lighthouse — сайт тез ачылып, бардык түзмөктө туура иштеши керек.",
      ru: "SSR, стриминг, кэш, Lighthouse — сайт должен открываться быстро и работать на любом устройстве.",
      en: "SSR, streaming, caching, Lighthouse: a site should load fast and work on any device.",
    },
  },
  {
    title: { ky: "Командада иштөө", ru: "Работа в команде", en: "Teamwork" },
    text: {
      ky: "Code review, документация жана жаңы иштеп чыгуучуларды онбординг — команданын ылдамдыгы жеке ылдамдыктан маанилүү.",
      ru: "Code review, документация и онбординг новых разработчиков — скорость команды важнее личной.",
      en: "Code review, documentation and onboarding: the team's velocity matters more than my own.",
    },
  },
];

export const skills: { group: L10n; items: string[] }[] = [
  { group: { ky: "Негизги", ru: "Основное", en: "Core" }, items: ["React", "Next.js", "TypeScript", "JavaScript (ES2024)", "HTML5", "CSS3"] },
  { group: { ky: "Абал жана маалымат", ru: "Состояние и данные", en: "State & data" }, items: ["Redux Toolkit", "RTK Query", "React Query", "Zod", "REST", "WebSocket"] },
  { group: { ky: "Стилдер", ru: "Стили", en: "Styling" }, items: ["Tailwind CSS", "daisyUI", "SCSS", "Flowbite", "Framer Motion"] },
  { group: { ky: "Куралдар", ru: "Инструменты", en: "Tooling" }, items: ["Git", "GitLab CI", "Docker", "Vitest", "Jest", "ESLint", "Figma"] },
  { group: { ky: "Дагы", ru: "Также", en: "Also" }, items: ["next-intl / i18n", "SSR & SEO", "a11y", "React Native / Expo", "d3", "Leaflet"] },
];
