# Zhainak Nurlan uulu — Portfolio

Next.js 16 · React 19 · TypeScript. 3 тил: кыргызча / русский / English (`?lang=ky|ru|en`).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Маалыматты өзгөртүү / Как править контент
- `lib/data.ts` — профиль, байланыштар (telegram, linkedin, cv), долбоорлор, иш тажрыйбасы, навыктар
- `lib/i18n.tsx` — интерфейстин тексттери (3 тил)
- `public/me.jpg` — сүрөт, `public/projects/*.jpg` — долбоорлордун скриншоттору

## Vercel'ге жайгаштыруу
GitHub'ка push кылып, vercel.com → New Project → ушул репозиторийди тандаңыз. Же: `npx vercel`.
