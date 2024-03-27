// import { myBtn } from "./styles.css";
import * as style from "./styles/main.css";
import CornerBottomRight from "./components/ConnerBottomRight";
import CornerTopLeft from "./components/CornerTopLeft";
import Introduction from "./components/Introduction";
import Header from "./components/Header";
export default function Home() {
  return (
    <div className={style.main_frame}>
      <CornerTopLeft className={style.top_left_corner}></CornerTopLeft>
      <main className={style.main_wrapper}>
        <Introduction className={style.main_content_wrapper}></Introduction>
        <header className={style.grid_item}>
          <Header />
        </header>
        <nav className={style.grid_item_3}>
          <div className={style.top_left_category_corner}></div>
        </nav>
        <footer className={style.grid_item}></footer>
      </main>
      <CornerBottomRight
        className={style.bottom_right_corner}
      ></CornerBottomRight>
    </div>
  );
}
