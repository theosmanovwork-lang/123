import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin", "cyrillic"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin", "cyrillic"] });

// Restores a saved light choice before first paint; dark stays the default.
const themeScript = `try{if(localStorage.getItem("prufbase-theme")==="light")document.documentElement.classList.remove("dark")}catch(e){}`;

export const metadata: Metadata = {
  title: "Prufbase — Пруф вместо скриншота",
  description:
    "Витрина верифицированной выручки для российских инди-фаундеров. Подключи read-only ключ от ЮKassa или CloudPayments и получи бейдж, который нельзя подделать.",
};

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
