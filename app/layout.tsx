import type { Metadata } from "next";
import { Raleway, Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  preload: false,
});

export const metadata: Metadata = {
  title: "江宗原｜Technical PM 作品集",
  description:
    "江宗原：Technical PM／AI 專案經理／軟體專案主管，近 18 年軟體開發、系統分析與專案管理經驗。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className={`${raleway.variable} ${notoSansTC.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
