import * as style from "../styles/projects/project.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
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
      <div className={style.header_item}>caruosel project name part</div>
      <div className={style.picture_wrapper_item}>caruosel picture part</div>
      <div className={style.introduction_item}>caruosel description part</div>
    </div>
  );
};

export default ProjectContent;
