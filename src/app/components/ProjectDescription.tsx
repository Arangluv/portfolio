import * as style from '../styles/projects/project.css';

interface DescriptionInfo {
  period: string[];
  overview: string;
  functions: string;
  github: string;
  frontend: string[] | null;
  backend: string[] | null;
  deployment: string[] | null;
}

export default function ProjectDescription(props: DescriptionInfo) {
  const { period, overview, functions, github, frontend, backend, deployment } =
    props;
  return (
    <div className={style.introduction_item}>
      <div className={style.project_introduction_wrapper}>
        <div className={style.introduction_sub_wrapper}>
          <div className={style.introduction_front}>
            <span className={style.intro_sub_title}>
              {period[0]} — &nbsp; {period[1]}
            </span>
          </div>
          <div className={style.introduction_rear}>
            <p className={style.intro_description}>{overview}</p>
          </div>
        </div>
        <div className={style.seperated_wrapper}>
          <div className={style.introduction_front}>
            <span className={style.intro_sub_title_accent}>주요기능</span>
          </div>
          <div className={style.introduction_rear}>
            <p className={style.intro_description}>{functions}</p>
          </div>
        </div>
        <div className={style.introduction_sub_wrapper}>
          <div className={style.introduction_front}>
            <span className={style.intro_sub_title_accent}>github</span>
          </div>
          <div className={style.introduction_rear}>
            <a href={github} className={style.intro_description_link}>
              {github}
            </a>
          </div>
        </div>
        {frontend ? (
          <div className={style.introduction_sub_wrapper}>
            <div className={style.introduction_front}>
              <span className={style.intro_sub_title_accent}>front</span>
            </div>
            <div className={style.introduction_rear}>
              <p className={style.intro_description}>{frontend?.join(', ')}</p>
            </div>
          </div>
        ) : null}
        {backend ? (
          <div className={style.introduction_sub_wrapper}>
            <div className={style.introduction_front}>
              <span className={style.intro_sub_title_accent}>backend</span>
            </div>
            <div className={style.introduction_rear}>
              <p className={style.intro_description}>{backend?.join(', ')}</p>
            </div>
          </div>
        ) : null}
        {deployment ? (
          <div className={style.introduction_sub_wrapper}>
            <div className={style.introduction_front}>
              <span className={style.intro_sub_title_accent}>deployment</span>
            </div>
            <div className={style.introduction_rear}>
              <p className={style.intro_description}>
                {deployment?.join(', ')}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
