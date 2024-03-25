import type { Metadata } from "next";
// import "./theme.css";
import "./styles/global.css";
import { darkTheme } from "./styles/theme.css";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });
console.log("darkTheme ?");
console.log(darkTheme);
export const metadata: Metadata = {
  title: "류현수's Portfolio",
  description: "류현수의 웹 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={darkTheme}>{children}</body>
    </html>
  );
}
