import * as style from "../styles/archives/archives.css";
import GithubIcon from "../assets/github.svg";
import NotionIcon from "../assets/notion.svg";
import { FaCheck } from "react-icons/fa";
const Archiving = () => {
  return (
    <div className={style.archives_wrapper}>
      {/* sub container line */}
      <div className={style.grid_item}>
        {/* sub container item line */}
        <div className={style.archive_item_container}>
          <div className={style.archive_sub_container}>
            <GithubIcon className={style.icon} />
            <span className={style.archive_title}>GITHUB</span>
          </div>

          <div className={style.description_box}>
            <span className={style.archive_description}>
              <FaCheck className={style.archive_icon} />
              소스 코드를 틈틈히 저장해두었습니다
            </span>
            <span className={style.archive_description}>
              <FaCheck className={style.archive_icon} />
              과거 / 현재 프로젝트 코드 저장소 입니다
            </span>
            <span className={style.archive_description}>
              <FaCheck className={style.archive_icon} />
              혼자서 코딩 연습을 위해 끄적이던 소스 코드
            </span>
          </div>
          <div className={style.read_more}>
            <a href="#" className={style.read_more_text}>
              READ MORE
            </a>
          </div>
        </div>
      </div>
      <div className={style.grid_item}>
        {/* sub container item line */}
        <div className={style.archive_item_container}>
          <div className={style.archive_sub_container}>
            <NotionIcon className={style.icon} />
            <span className={style.archive_title}>Notion</span>
          </div>

          <div className={style.description_box}>
            <span className={style.archive_description}>
              <FaCheck className={style.archive_icon} />
              소스 코드를 틈틈히 저장해두었습니다
            </span>
            <span className={style.archive_description}>
              <FaCheck className={style.archive_icon} />
              과거 / 현재 프로젝트 코드 저장소 입니다
            </span>
            <span className={style.archive_description}>
              <FaCheck className={style.archive_icon} />
              혼자서 코딩 연습을 위해 끄적이던 소스 코드
            </span>
          </div>
          <div className={style.read_more}>
            <a href="#" className={style.read_more_text}>
              READ MORE
            </a>
          </div>
        </div>
      </div>
      {/* 위에만 디자인해서 template copy and paste */}
    </div>
  );
};

export default Archiving;
{
  /* <div>
<span className={style.archive_description}>
  혼자서 코딩 연습을 위해 끄적이던 소스 코드
</span>
</div>
<div>
<span className={style.archive_description}>
  과거 프로젝트, 프로그램, 앱의 소스 코드
</span>
</div> */
}
