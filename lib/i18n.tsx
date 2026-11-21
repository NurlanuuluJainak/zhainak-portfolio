"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export const LOCALES = ["ky", "ru", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export type L10n<T = string> = Record<Locale, T>;

export const LOCALE_LABELS: Record<Locale, string> = { ky: "KG", ru: "RU", en: "EN" };

const STORAGE_KEY = "portfolio-locale";

export const ui = {
  nav: {
    work: { ky: "Долбоорлор", ru: "Проекты", en: "Work" },
    experience: { ky: "Тажрыйба", ru: "Опыт", en: "Experience" },
    about: { ky: "Мен жөнүндө", ru: "Обо мне", en: "About" },
    contact: { ky: "Байланыш", ru: "Контакты", en: "Contact" },
  },
  hero: {
    current: { ky: "Азыр", ru: "Сейчас", en: "Currently" },
    scroll: { ky: "Ылдый", ru: "Листайте", en: "Scroll" },
    available: { ky: "Жаңы долбоорлорго ачыкмын", ru: "Открыт к новым проектам", en: "Open to new opportunities" },
    role: { ky: "Frontend-иштеп чыгуучу", ru: "Frontend-разработчик", en: "Frontend Developer" },
    bio: {
      ky: "4 жылдан ашык тажрыйбасы бар Frontend-иштеп чыгуучумун. Бакай Банктын эки сайтынын, HR-порталынын жана HR тиркемесинин жалгыз frontend-иштеп чыгуучусумун — frontend үчүн толук жооп берем. Тез, ыңгайлуу жана көп тилдүү интерфейстерди жакшы көрөм — миңдеген колдонуучулар күн сайын колдонгон продуктуларды жасайм.",
      ru: "Frontend-разработчик с опытом 4+ лет. Единственный frontend-разработчик двух сайтов, HR-портала и HR-приложения Бакай Банка — полностью отвечаю за frontend. Люблю быстрые, удобные и многоязычные интерфейсы — делаю продукты, которыми каждый день пользуются тысячи людей.",
      en: "Frontend developer with 4+ years of experience. I'm the sole frontend developer of two websites, the HR portal and the HR app at Bakai Bank, and I own the frontend end to end. I love fast, accessible, multilingual interfaces and build products that thousands of people use every day.",
    },
    cta: { ky: "Байланышуу", ru: "Связаться", en: "Get in touch" },
    seeWork: { ky: "Долбоорлорду көрүү", ru: "Смотреть проекты", en: "View my work" },
    statYears: { ky: "жыл тажрыйба", ru: "лет опыта", en: "years of experience" },
    statCommits: { ky: "коммит продакшнда", ru: "коммитов в продакшн", en: "commits to production" },
    statProducts: { ky: "продукт — жалгыз frontend", ru: "продукта — единственный frontend", en: "products as the sole frontend dev" },
    statLangs: { ky: "тилдүү интерфейстер", ru: "языка в интерфейсах", en: "languages in my UIs" },
  },
  work: {
    eyebrow: { ky: "Тандалган иштер", ru: "Избранные работы", en: "Selected work" },
    title: { ky: "Менин долбоорлорум", ru: "Мои проекты", en: "My projects" },
    all: { ky: "Баары", ru: "Все", en: "All" },
    personal: { ky: "Жеке долбоорлор", ru: "Пет-проекты", en: "Pet projects" },
    open: { ky: "Толугураак", ru: "Подробнее", en: "View case" },
    visit: { ky: "Сайтка өтүү", ru: "Открыть сайт", en: "Visit website" },
    role: { ky: "Ролум", ru: "Роль", en: "Role" },
    year: { ky: "Жыл", ru: "Год", en: "Year" },
    stack: { ky: "Технологиялар", ru: "Стек", en: "Stack" },
    did: { ky: "Эмне кылдым", ru: "Что я сделал", en: "What I did" },
    close: { ky: "Жабуу", ru: "Закрыть", en: "Close" },
    solo: { ky: "Жалгыз frontend", ru: "Единственный frontend", en: "Sole frontend" },
    team: { ky: "Командада", ru: "В команде", en: "Team project" },
    count: { ky: "долбоор", ru: "проектов", en: "projects" },
  },
  exp: {
    eyebrow: { ky: "Карьера", ru: "Карьера", en: "Career" },
    title: { ky: "Иш тажрыйбасы", ru: "Опыт работы", en: "Work experience" },
    now: { ky: "азыр", ru: "н.в.", en: "present" },
    projects: { ky: "Долбоорлор", ru: "Проекты", en: "Projects" },
  },
  about: {
    eyebrow: { ky: "Мен жөнүндө", ru: "Обо мне", en: "About me" },
    title: { ky: "Код, продукт жана деталдар", ru: "Код, продукт и детали", en: "Code, product and details" },
    skills: { ky: "Көндүмдөр", ru: "Навыки", en: "Skills" },
  },
  contact: {
    title: { ky: "Чогуу иштешели", ru: "Давайте работать вместе", en: "Let's work together" },
    text: {
      ky: "Продукт командаларына, аутстаффка, толук жана жарым күндүк долбоорлорго ачыкмын. Жазыңыз — тез жооп берем.",
      ru: "Открыт к работе в продуктовых командах, аутстаффе, full-time и part-time проектах. Пишите — отвечу быстро.",
      en: "Open to product teams, outstaff engagements, full-time and part-time projects. Drop me a line and I'll reply quickly.",
    },
    big: { ky: "Сүйлөшөлү", ru: "Давайте обсудим", en: "Let's talk" },
    phone: { ky: "Телефон", ru: "Телефон", en: "Phone" },
    copy: { ky: "Көчүрүү", ru: "Копировать", en: "Copy" },
    copied: { ky: "Көчүрүлдү!", ru: "Скопировано!", en: "Copied!" },
    rights: { ky: "Бишкек, Кыргызстан", ru: "Бишкек, Кыргызстан", en: "Bishkek, Kyrgyzstan" },
  },
} as const;

type Ctx = { locale: Locale; setLocale: (l: Locale) => void; t: <T>(v: L10n<T>) => T };

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ru");

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch {}
    const next = [fromUrl, saved].find((v): v is Locale => LOCALES.includes(v as Locale));
    if (next) setLocaleState(next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "ky" ? "ky" : locale;
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: (v) => v[locale] }}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
