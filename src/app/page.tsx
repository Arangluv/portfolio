// import { myBtn } from "./styles.css";
import * as style from "./styles/main.css";
import CornerBottomRight from "./components/ConnerBottomRight";
import CornerTopLeft from "./components/CornerTopLeft";
import Introduction from "./components/Introduction";
import Header from "./components/Header";
import Category from "./components/Category";
export default function Home() {
  return (
    <div className={style.main_frame}>
      <CornerTopLeft className={style.top_left_corner}></CornerTopLeft>
      <main className={style.main_wrapper}>
        <Introduction className={style.main_content_wrapper}></Introduction>
        <header className={style.grid_item}>
          <Header />
        </header>
        <div className={style.grid_item}>
          <h2 className={style.category_title}>Category</h2>
        </div>
        <nav className={style.grid_item_3}>
          <div className={style.top_left_category_corner}></div>
          <Category />
        </nav>
        <footer className={style.grid_item}></footer>
      </main>
      <CornerBottomRight
        className={style.bottom_right_corner}
      ></CornerBottomRight>
    </div>
  );
}
