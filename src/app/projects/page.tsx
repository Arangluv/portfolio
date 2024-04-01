import * as style from "../styles/projects/project.css";

const Project = () => {
  return (
    <div className={style.project_wrapper}>
      <div className={style.prev_btn_item}>prev</div>
      <div className={style.main_content_wrapper}>
        <div className={style.header_item}>caruosel part</div>
        <div className={style.picture_wrapper_item}>caruosel part</div>
        <div className={style.introduction_item}>caruosel part</div>
      </div>
      <div className={style.next_btn_item}>next</div>
      <div className={style.progress_state_item}>progressive</div>
    </div>
  );
};

export default Project;
