import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Inter Variable (OFL), the same file linear.app serves; keeps the cv01/ss03 stylistic sets.
const inter = localFont({
  src: "./fonts/InterVariable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Prufbase — Пруф вместо скриншота",
  description:
    "Витрина верифицированной выручки для российских инди-фаундеров. Подключи read-only ключ от ЮKassa или CloudPayments и получи бейдж, который нельзя подделать.",
};

// Restores a saved light choice before first paint; dark stays the default.
const themeScript = `try{if(localStorage.getItem("prufbase-theme")==="light")document.documentElement.classList.remove("dark")}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Dark is the default theme; ThemeToggle in the footer switches to light and remembers the choice.
    <html lang="ru" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable} dark h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
