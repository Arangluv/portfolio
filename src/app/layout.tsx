import type { Metadata } from "next";
import { Noto_Sans_KR, Karla } from "next/font/google";
import "./styles/global.css";
import Provider from "./context/ThemeProvider";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "류현수's Portfolio",
  description: "류현수의 웹 포트폴리오",
};

const notoSansKr = Noto_Sans_KR({
  weight: ["400"],
  subsets: ["latin"],
});
const karla = Karla({
  weight: ["400"],
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={(notoSansKr.className, karla.className)}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
