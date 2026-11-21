"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import { I18nProvider, LOCALES, LOCALE_LABELS, ui, useI18n } from "@/lib/i18n";
import { aboutCards, aboutFacts, jobs, profile, projects, skills, stats, type CompanyId, type Project } from "@/lib/data";

const SECTIONS = ["work", "experience", "about", "contact"] as const;
const MARQUEE = ["React", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "next-intl", "React Native", "daisyUI", "Zod", "d3", "Leaflet", "Vitest", "Docker", "GitLab CI"];

export default function Portfolio() {
  return (
    <I18nProvider>
      <Progress />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <Experience />
        <About />
      </main>
      <Contact />
      <Reveal />
    </I18nProvider>
  );
}

/* Плавное появление блоков с классом .reveal при скролле */
function Reveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    const observeAll = () => document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
    observeAll();
    // карточки проектов перерисовываются при смене фильтра
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
  return null;
}

function Progress() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      ref.current?.style.setProperty("--p", String(max > 0 ? window.scrollY / max : 0));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="progress" ref={ref} aria-hidden />;
}

function Header() {
  const { t, locale, setLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header__row">
        <a href="#top" className="logo" aria-label={profile.shortName}>
          <span className="logo__mark">ZN</span>
          <span className="logo__text">{profile.shortName}</span>
        </a>
        <nav className="nav">
          {SECTIONS.map((id) => (
            <a key={id} href={`#${id}`} className={active === id ? "is-active" : ""}>
              {t(ui.nav[id === "contact" ? "contact" : id])}
            </a>
          ))}
        </nav>
        <div className="lang" role="group" aria-label="Language">
          {LOCALES.map((l) => (
            <button key={l} className={l === locale ? "is-active" : ""} onClick={() => setLocale(l)} aria-pressed={l === locale}>
              {LOCALE_LABELS[l]}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useI18n();
  const [first, ...rest] = t(profile.name).split(" ");
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden>
        <div className="glow glow--a" />
        <div className="glow glow--b" />
        <div className="gridlines" />
      </div>
      <div className="container hero__grid">
        <div className="hero__text">
          <span className="status reveal">
            <i /> {t(ui.hero.available)}
          </span>
          <h1 className="hero__name reveal">
            {first}
            <br />
            <span className="shine">{rest.join(" ")}</span>
          </h1>
          <p className="hero__role reveal">
            {t(ui.hero.role)} <span className="muted">/</span> <span className="grad">{profile.headline}</span>
          </p>
          <p className="hero__tagline reveal">{t(profile.tagline)}</p>
          <p className="hero__bio reveal">{t(ui.hero.bio)}</p>
          <div className="hero__cta reveal">
            <a className="btn btn--primary" href={profile.telegram} target="_blank" rel="noreferrer">
              {t(ui.hero.cta)} <Arrow />
            </a>
            <a className="btn btn--ghost" href="#work">
              {t(ui.hero.seeWork)}
            </a>
            <Socials />
          </div>
        </div>

        <div className="hero__photo reveal">
          <div className="photo">
            <Image src={profile.photo} alt={t(profile.name)} fill priority sizes="(max-width: 900px) 90vw, 440px" />
          </div>
          <div className="float float--a">
            <b>4+</b>
            <span>{t(ui.hero.statYears)}</span>
          </div>
          <div className="float float--b">
            <span className="dot" /> FinTech & GovTech
          </div>
          <div className="float float--c">
            <span className="float__logo">B</span>
            <span>
              <small>{t(ui.hero.current)}</small>
              Bakai Bank
            </span>
          </div>
        </div>
      </div>

      <div className="container stats">
        {stats.map((s, i) => (
          <div key={s.key} className="stat reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
            <b>
              <CountUp value={s.value} />
            </b>
            <span>{t(ui.hero[s.key])}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* "4 000+" → анимированно считает 0…4000, сохраняя пробелы и суффикс */
function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const target = Number(value.replace(/\D/g, ""));
  const suffix = value.replace(/[\d\s]/g, "");
  const [n, setN] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setN(0);
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const k = Math.min(1, (now - start) / 1400);
        setN(Math.round(target * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    io.observe(el);
    return () => io.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {n.toLocaleString("ru-RU")}
      {suffix}
    </span>
  );
}

function Marquee() {
  const row = [...MARQUEE, ...MARQUEE];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        {row.map((s, i) => (
          <span key={i}>
            {s}
            <i>✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}

function Socials() {
  const links = [
    { href: profile.telegram, label: "Telegram" },
    { href: profile.whatsapp, label: "WhatsApp" },
    { href: profile.linkedin, label: "LinkedIn" },
    { href: profile.github, label: "GitHub" },
    { href: profile.cv, label: "CV" },
  ].filter((l) => l.href);
  return (
    <div className="socials">
      {links.map((l) => (
        <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
          {l.label} <span aria-hidden>↗</span>
        </a>
      ))}
    </div>
  );
}

type Filter = "all" | CompanyId;

function Work() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<Project | null>(null);

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: t(ui.work.all) },
    { id: "bakai", label: "Bakai Bank" },
    { id: "isistent", label: "Isistent" },
    { id: "personal", label: t(ui.work.personal) },
  ];

  const list = useMemo(() => (filter === "all" ? projects : projects.filter((p) => p.company === filter)), [filter]);

  useEffect(() => {
    const onOpen = (e: Event) => {
      const p = projects.find((x) => x.id === (e as CustomEvent<string>).detail);
      if (p) setOpen(p);
    };
    window.addEventListener("open-project", onOpen);
    return () => window.removeEventListener("open-project", onOpen);
  }, []);

  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHead index="01" eyebrow={t(ui.work.eyebrow)} title={t(ui.work.title)} aside={`${projects.length} ${t(ui.work.count)}`} />
        <div className="tabs reveal">
          {filters.map((f) => (
            <button key={f.id} className={filter === f.id ? "is-active" : ""} onClick={() => setFilter(f.id)}>
              {f.label}
              <small>{f.id === "all" ? projects.length : projects.filter((p) => p.company === f.id).length}</small>
            </button>
          ))}
        </div>
        <div className="projects" key={filter}>
          {list.map((p, i) => (
            <ProjectCard key={p.id} p={p} big={i === 0} index={i} onOpen={() => setOpen(p)} />
          ))}
        </div>
      </div>
      {open && <ProjectModal p={open} onClose={() => setOpen(null)} />}
    </section>
  );
}

/* Подсветка карточки, следующая за курсором */
function spotlight(e: MouseEvent<HTMLElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
}

function companyLabel(p: Project, t: ReturnType<typeof useI18n>["t"]) {
  if (p.company === "personal") return t(ui.work.personal);
  return p.company === "bakai" ? "Bakai Bank" : "Isistent";
}

function ProjectCard({ p, big, index, onOpen }: { p: Project; big: boolean; index: number; onOpen: () => void }) {
  const { t } = useI18n();
  return (
    <article
      className={`card spot ${big ? "card--big" : ""}`}
      style={{ ["--accent" as string]: p.accent, animationDelay: `${index * 0.06}s` }}
      onMouseMove={spotlight}
    >
      <button className="card__media" onClick={onOpen} aria-label={`${t(ui.work.open)}: ${p.title}`}>
        <div className="browser">
          <div className="browser__bar">
            <i />
            <i />
            <i />
            <span>{p.url ? p.url.replace("https://", "") : p.title.toLowerCase()}</span>
          </div>
          <div className="browser__img">
            <Image src={p.cover} alt={p.title} fill sizes="(max-width: 900px) 100vw, 60vw" />
          </div>
        </div>
      </button>
      <div className="card__body">
        <div className="card__meta">
          <span className={`badge badge--${p.company}`}>{companyLabel(p, t)}</span>
          {p.team && <span className={`badge badge--${p.team}`}>{t(ui.work[p.team])}</span>}
          <span className="muted card__year">{p.year}</span>
        </div>
        <h3>{p.title}</h3>
        <p className="muted">{t(p.kind)}</p>
        <p className="card__summary">{t(p.summary)}</p>
        <div className="chips">
          {p.stack.slice(0, big ? 8 : 4).map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <div className="card__actions">
          <button className="link" onClick={onOpen}>
            {t(ui.work.open)} <Arrow />
          </button>
          {p.url && (
            <a className="link link--muted" href={p.url} target="_blank" rel="noreferrer">
              {t(ui.work.visit)} ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectModal({ p, onClose }: { p: Project; onClose: () => void }) {
  const { t } = useI18n();
  const [img, setImg] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setImg((i) => (i + 1) % p.images.length);
      if (e.key === "ArrowLeft") setImg((i) => (i - 1 + p.images.length) % p.images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, p.images.length]);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={p.title} onClick={onClose}>
      <div className="modal__panel" onClick={(e) => e.stopPropagation()} style={{ ["--accent" as string]: p.accent }}>
        <button className="modal__close" onClick={onClose} aria-label={t(ui.work.close)}>
          ✕
        </button>
        <div className="modal__gallery">
          <div className="browser">
            <div className="browser__bar">
              <i />
              <i />
              <i />
              <span>{p.url ? p.url.replace("https://", "") : p.title.toLowerCase()}</span>
            </div>
            <div className="browser__img">
              <Image key={p.images[img]} src={p.images[img]} alt={`${p.title} ${img + 1}`} fill sizes="(max-width: 900px) 100vw, 900px" />
            </div>
          </div>
          {p.images.length > 1 && (
            <div className="thumbs">
              {p.images.map((src, i) => (
                <button key={src} className={i === img ? "is-active" : ""} onClick={() => setImg(i)} aria-label={`${i + 1}`}>
                  <Image src={src} alt="" fill sizes="160px" />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="modal__body">
          <div className="card__meta">
            <span className={`badge badge--${p.company}`}>{companyLabel(p, t)}</span>
            {p.team && <span className={`badge badge--${p.team}`}>{t(ui.work[p.team])}</span>}
          </div>
          <h3>{p.title}</h3>
          <span className="muted">{t(p.kind)}</span>
          <p>{t(p.summary)}</p>
          <dl className="facts">
            <div>
              <dt>{t(ui.work.role)}</dt>
              <dd>{t(p.role)}</dd>
            </div>
            <div>
              <dt>{t(ui.work.year)}</dt>
              <dd>{p.year}</dd>
            </div>
          </dl>
          <h4>{t(ui.work.did)}</h4>
          <ul className="ticks">
            {t(p.highlights).map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <h4>{t(ui.work.stack)}</h4>
          <div className="chips">
            {p.stack.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
          {p.url && (
            <a className="btn btn--primary modal__cta" href={p.url} target="_blank" rel="noreferrer">
              {t(ui.work.visit)} ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function Experience() {
  const { t } = useI18n();
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHead index="02" eyebrow={t(ui.exp.eyebrow)} title={t(ui.exp.title)} />
        <div className="timeline">
          {jobs.map((j) => {
            const jobProjects = projects.filter((p) => p.company === j.company);
            return (
              <article key={j.name} className="job spot reveal" onMouseMove={spotlight}>
                <div className="job__side">
                  <span className={`job__logo job__logo--${j.company}`}>{j.logo}</span>
                  <span className="job__dates">
                    {j.start} — {j.end ?? t(ui.exp.now)}
                  </span>
                  {!j.end && <span className="job__now">● {t(ui.hero.current)}</span>}
                </div>
                <div className="job__main">
                  <div className="job__head">
                    <h3>{j.name}</h3>
                    <span className="job__role">{t(j.role)}</span>
                  </div>
                  <p className="muted">{t(j.location)}</p>
                  <p className="job__about">{t(j.about)}</p>
                  <ul className="ticks">
                    {t(j.bullets).map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  <div className="job__projects">
                    <span className="muted">{t(ui.exp.projects)}:</span>
                    {jobProjects.map((p) => (
                      <a
                        key={p.id}
                        href="#work"
                        onClick={() => window.dispatchEvent(new CustomEvent("open-project", { detail: p.id }))}
                        className="mini"
                      >
                        <span className="mini__img">
                          <Image src={p.cover} alt="" fill sizes="64px" />
                        </span>
                        {p.title}
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About() {
  const { t } = useI18n();
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead index="03" eyebrow={t(ui.about.eyebrow)} title={t(ui.about.title)} />
        <div className="about">
          <div className="about__photo reveal">
            <Image src={profile.photo} alt={t(profile.name)} fill sizes="(max-width: 900px) 100vw, 400px" />
            <div className="about__caption">
              <b>{t(profile.name)}</b>
              <span>{t(ui.hero.role)} · Bishkek</span>
            </div>
          </div>
          <ol className="about__facts reveal">
            {t(aboutFacts).map((f, i) => (
              <li key={f}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {f}
              </li>
            ))}
          </ol>
        </div>
        <div className="about__cards">
          {aboutCards.map((c, i) => (
            <div key={i} className="acard spot reveal" onMouseMove={spotlight} style={{ transitionDelay: `${i * 0.08}s` }}>
              <span className="acard__num">0{i + 1}</span>
              <h3>{t(c.title)}</h3>
              <p>{t(c.text)}</p>
            </div>
          ))}
        </div>
        <h3 className="skills__title reveal">{t(ui.about.skills)}</h3>
        <div className="skills">
          {skills.map((g) => (
            <div key={g.items[0]} className="skill spot reveal" onMouseMove={spotlight}>
              <span className="muted">{t(g.group)}</span>
              <div className="chips">
                {g.items.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <footer className="contact" id="contact">
      <div className="bigtext" aria-hidden>
        <div className="bigtext__track">
          {Array.from({ length: 4 }, (_, i) => (
            <span key={i}>
              {t(ui.contact.big)} <i>✦</i>
            </span>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="contact__card reveal">
          <div className="glow glow--c" />
          <div className="gridlines" />
          <span className="eyebrow">04 · {t(ui.nav.contact)}</span>
          <h2>{t(ui.contact.title)}</h2>
          <p>{t(ui.contact.text)}</p>
          <div className="channels">
            <a className="channel" href={profile.telegram} target="_blank" rel="noreferrer">
              <span className="channel__icon channel__icon--tg">
                <TelegramIcon />
              </span>
              <span>
                <small>Telegram</small>
                {profile.telegramHandle}
              </span>
            </a>
            <a className="channel" href={profile.whatsapp} target="_blank" rel="noreferrer">
              <span className="channel__icon channel__icon--wa">
                <WhatsAppIcon />
              </span>
              <span>
                <small>WhatsApp</small>
                {profile.phone}
              </span>
            </a>
            <a className="channel" href={`tel:${profile.phoneRaw}`}>
              <span className="channel__icon channel__icon--ph">
                <PhoneIcon />
              </span>
              <span>
                <small>{t(ui.contact.phone)}</small>
                {profile.phone}
              </span>
            </a>
            <button className="channel" onClick={copy}>
              <span className="channel__icon channel__icon--em">@</span>
              <span>
                <small>{copied ? t(ui.contact.copied) : "Email"}</small>
                {profile.email}
              </span>
            </button>
          </div>
          <div className="socials">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
        <div className="footer">
          <span>
            © {new Date().getFullYear()} {t(profile.name)}
          </span>
          <span>{t(ui.contact.rights)}</span>
          <a href="#top">↑ Top</a>
        </div>
      </div>
    </footer>
  );
}

function SectionHead({ index, eyebrow, title, aside }: { index: string; eyebrow: string; title: string; aside?: string }) {
  return (
    <div className="shead reveal">
      <div>
        <span className="eyebrow">
          {index} · {eyebrow}
        </span>
        <h2>{title}</h2>
      </div>
      {aside && <span className="shead__aside">{aside}</span>}
    </div>
  );
}

function TelegramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21.9 4.3 18.7 19.4c-.2 1-.9 1.3-1.7.8l-4.8-3.6-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.9 8.9-8c.4-.3-.1-.5-.6-.2l-11 6.9-4.7-1.5c-1-.3-1-1 .2-1.5L20.5 3c.9-.3 1.6.2 1.4 1.3Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3c-.2.3-.9.9-.9 2.2s1 2.5 1.1 2.7c.1.2 1.9 2.9 4.6 4 1.7.7 2.4.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
