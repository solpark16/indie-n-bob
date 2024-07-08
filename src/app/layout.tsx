import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const notoSansKr = Noto_Sans_KR({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "indieNbob: 인디언밥",
  description: "오늘 날 우리가 사랑하는 인디씬",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function HTMLLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>{children}</body>
    </html>
  );
}
