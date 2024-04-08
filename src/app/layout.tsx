import type { Metadata } from "next";
import { Noto_Sans_KR, Karla } from "next/font/google";
import "./styles/global.css";
import Provider from "./context/ThemeProvider";
import CornerTopLeft from "./components/CornerTopLeft";
import * as style from "./styles/main.css";
import Header from "./components/Header";
import Category from "./components/Category";
import Footer from "./components/Footer";
import CornerBottomRight from "./components/ConnerBottomRight";
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
        <Provider>
          <div className={style.main_frame}>
            <CornerTopLeft className={style.top_left_corner}></CornerTopLeft>
            <main className={style.main_wrapper}>
              <section className={style.main_content_wrapper}>
                {children}
              </section>
              <header
                className={`${style.grid_item} ${style.grid_order_second}`}
              >
                <Header />
              </header>
              <div className={`${style.grid_item} ${style.grid_order_first}`}>
                <h2 className={style.category_title}>Category</h2>
              </div>
              <nav className={`${style.grid_item_3} ${style.grid_order_third}`}>
                <div className={style.top_left_category_corner}></div>
                <Category />
              </nav>
              <footer className={`${style.grid_item} ${style.grid_order_last}`}>
                <Footer />
              </footer>
            </main>
            <CornerBottomRight
              className={style.bottom_right_corner}
            ></CornerBottomRight>
          </div>
        </Provider>
      </body>
    </html>
  );
}
