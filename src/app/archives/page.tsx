import * as style from '../styles/archives/archives.css';
import GithubIcon from '../assets/github.svg';
import NotionIcon from '../assets/notion.svg';
import { FaCheck } from 'react-icons/fa';
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
              <div className={style.archive_icon_container}>
                <FaCheck className={style.archive_icon} />
              </div>
              <span>과거 및 현재 프로젝트의 소스코드를 저장</span>
            </span>
            <span className={style.archive_description}>
              <div className={style.archive_icon_container}>
                <FaCheck className={style.archive_icon} />
              </div>
              <span>공부를 진행하며 적어둔 코드 저장</span>
            </span>
          </div>
          <div className={style.read_more}>
            <a
              href="https://github.com/Arangluv"
              className={style.read_more_text}
              target="_blank"
            >
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
              <div className={style.archive_icon_container}>
                <FaCheck className={style.archive_icon} />
              </div>
              <span>프로젝트를 진행하면서 배운 부분을 기록</span>
            </span>
            <span className={style.archive_description}>
              <div className={style.archive_icon_container}>
                <FaCheck className={style.archive_icon} />
              </div>
              <span>찾아본 것을 다시 찾아보는 것을 방지하기 위한 정리</span>
            </span>
            <span className={style.archive_description}>
              <div className={style.archive_icon_container}>
                <FaCheck className={style.archive_icon} />
              </div>
              <span>진짜 내 것으로 만들기 위해 정리</span>
            </span>
          </div>
          <div className={style.read_more}>
            <a
              href="https://observant-bite-62a.notion.site/Next-js-4464ac8b6b5e4c9eb4404255746b2316"
              className={style.read_more_text}
              target="_blank"
            >
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
