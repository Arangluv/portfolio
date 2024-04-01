import * as style from "../styles/projects/project.css";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
const Project = () => {
  return (
    <div className={style.project_wrapper}>
      <div className={style.prev_btn_item}>
        <MdOutlineNavigateBefore className={style.btn_icon} />
      </div>
      <div className={style.main_content_wrapper}>
        <div className={style.header_item}>caruosel project name part</div>
        <div className={style.picture_wrapper_item}>caruosel picture part</div>
        <div className={style.introduction_item}>caruosel description part</div>
      </div>
      <div className={style.next_btn_item}>
        <MdOutlineNavigateNext className={style.btn_icon} />
      </div>
      <div className={style.progress_state_item}>
        <div className={style.progressiv_dot_inactive}></div>
        <div className={style.progressiv_dot_inactive}></div>
        <div className={style.progressiv_dot_active}></div>
        <div className={style.progressiv_dot_inactive}></div>
        <div className={style.progressiv_dot_inactive}></div>
      </div>
    </div>
  );
};

export default Project;
