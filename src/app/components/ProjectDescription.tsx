import * as style from "../styles/projects/project.css";

const ProjectDescription = () => {
  return (
    <div className={style.introduction_item}>
      <div className={style.project_introduction_wrapper}>
        <div className={style.introduction_sub_wrapper}>
          <div className={style.introduction_front}>
            <span className={style.intro_sub_title}>2024 — Present</span>
          </div>
          <div className={style.introduction_rear}>
            <p className={style.intro_description}>
              {`탄핵소추의 의결을 받은 자는 탄핵심판이 있을 때까지 그 권한행사가 정지된다.
          
          국회가 재적의원 과반수의 찬성으로 계엄의 해제를 요구한 때에는 대통령은 이를 해제하여야 한다.
          
          국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다.`}
            </p>
          </div>
        </div>
        <div className={style.seperated_wrapper}>
          <div className={style.introduction_front}>
            <span className={style.intro_sub_title_accent}>주요기능</span>
          </div>
          <div className={style.introduction_rear}>
            <p className={style.intro_description}>
              {`날짜별로 각 루틴의 달성 여부, 할 일 목록, 시간 단위 일정 기입하기, 월별로 각 루틴의 달성 여부를 한눈에 확인하기`}
            </p>
          </div>
        </div>
        <div className={style.introduction_sub_wrapper}>
          <div className={style.introduction_front}>
            <span className={style.intro_sub_title_accent}>github</span>
          </div>
          <div className={style.introduction_rear}>
            <a
              href="https://github.com/Arangluv/portfolio"
              className={style.intro_description_link}
            >
              https://github.com/Arangluv/portfolio
            </a>
          </div>
        </div>
        <div className={style.introduction_sub_wrapper}>
          <div className={style.introduction_front}>
            <span className={style.intro_sub_title_accent}>front</span>
          </div>
          <div className={style.introduction_rear}>
            <p className={style.intro_description}>next.js, vanilla-extract</p>
          </div>
        </div>
        <div className={style.introduction_sub_wrapper}>
          <div className={style.introduction_front}>
            <span className={style.intro_sub_title_accent}>deployment</span>
          </div>
          <div className={style.introduction_rear}>
            <p className={style.intro_description}>
              Vercel, Supabase (Authentication)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
