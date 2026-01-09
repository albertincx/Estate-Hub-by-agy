import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EstateHub | Недвижимость в Таиланде",
  description: "Найдите идеальную недвижимость в Таиланде: Пхукет, Самуи, Паттайя, Бангкок. Удобный расчет стоимости в любой валюте.",
  openGraph: {
    title: "EstateHub - Недвижимость в Таиланде",
    description: "Лучшие предложения недвижимости в Таиланде с актуальными ценами в THB, USD, EUR и RUB.",
    type: "website",
    locale: "ru_RU",
  }
};

import { ThemeProvider } from "@/components/theme-provider";
import { CurrencyProvider } from "@/lib/store";
import { DEFAULT_CURRENCY } from "@/lib/constants";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CurrencyProvider initialCurrency={DEFAULT_CURRENCY}>
            {children}
          </CurrencyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
