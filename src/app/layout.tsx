import type { Metadata } from "next";
// import "./theme.css";
import "./styles/global.css";
import Provider from "./context/ThemeProvider";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

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
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
