import * as style from "../styles/projects/project.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import Image from "next/image";
interface ContentStyleInfo {
  contentWidth: number | undefined;
  contentHeight: number | undefined;
}
const ProjectContent = ({ contentWidth, contentHeight }: ContentStyleInfo) => {
  return (
    <div
      className={style.main_content_wrapper}
      style={assignInlineVars({
        [style.computedWidth]: contentWidth ? `${contentWidth}px` : "0px",
        [style.computedHeight]: contentHeight ? `${contentHeight}px` : "0px",
      })}
    >
      <div className={style.header_item}>AQUIZ - 나만의 퀴즈사이트</div>
      <div className={style.picture_wrapper_item}>
        <Image
          fill={true}
          alt="?"
          src="https://i.stack.imgur.com/LUm4a.png"
        />
        <div className={style.image_slider_btn_wrapper}>
          <div className={style.image_slider_prev_item}>
            <MdOutlineNavigateBefore className={style.image_icon} />
          </div>
          <div className={style.image_slider_btn_item}>
            <span className={style.image_count_text}>1 / 8</span>
          </div>
          <div className={style.image_slider_next_item}>
            <MdOutlineNavigateNext className={style.image_icon} />
          </div>
        </div>
      </div>
      <div className={style.introduction_item}>caruosel description part</div>
    </div>
  );
};

export default ProjectContent;
