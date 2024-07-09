import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const font = localFont({
  src: [{ path: "../../public/font/PretendardVariable.woff2" }],
});

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
      <body className={font.className}>{children}</body>
    </html>
  );
}
