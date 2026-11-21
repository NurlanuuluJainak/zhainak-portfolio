import type { Metadata, Viewport } from "next";
import { Manrope, Unbounded } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin", "cyrillic"], variable: "--font-body", display: "swap" });
const unbounded = Unbounded({ subsets: ["latin", "cyrillic"], variable: "--font-display", display: "swap" });

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Zhainak Nurlan uulu — Frontend Developer",
  description:
    "Frontend Developer | React, Next.js, TypeScript, Redux Toolkit | Sole frontend developer for 2 banking websites & HR portal | FinTech & GovTech | 4+ yrs",
  openGraph: {
    title: "Zhainak Nurlan uulu — Frontend Developer",
    description: "Sole frontend developer for 2 banking websites & HR portal at Bakai Bank. React, Next.js, TypeScript.",
    images: ["/me.jpg"],
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#08090c" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${manrope.variable} ${unbounded.variable}`}>
      <body>{children}</body>
    </html>
  );
}
