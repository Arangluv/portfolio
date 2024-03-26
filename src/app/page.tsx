// import { myBtn } from "./styles.css";
import * as style from "./styles/main.css";
import CornerBottomRight from "./components/ConnerBottomRight";
import CornerTopLeft from "./components/CornerTopLeft";
export default function Home() {
  return (
    <div className={style.main_frame}>
      <CornerTopLeft className={style.top_left_corner}></CornerTopLeft>
      <main className={style.main_wrapper}></main>
      <CornerBottomRight
        className={style.bottom_right_corner}
      ></CornerBottomRight>
    </div>
  );
}
