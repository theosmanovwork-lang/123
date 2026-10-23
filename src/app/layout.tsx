import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrustMRR - Buy and Sell SaaS Startups",
  description:
    "The database of verified startup revenues. Browse SaaS, mobile apps, and digital businesses for acquisition on TrustMRR.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
