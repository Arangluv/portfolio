import * as style from '../styles/introduction/introduction.css';

export default function Introduction() {
  return (
    <div className={style.intro_wrapper}>
      <h1 className={style.main_title}>WELLCOME</h1>
      <h2 className={style.sub_title}>안녕하세요 프론트 개발자 류현수입니다</h2>
      <span className={style.paragraph_wrapper}>
        <p className={style.paragraph}>
          모르는 것에 대한 두려움, 그것을 해결할 때의 즐거움을 좋아합니다.
        </p>
        <p className={style.paragraph}>
          주먹구구식 학습보다는 프로젝트를 직접 구현해가며 개발 역량을
          키워왔습니다. 모르는 부분은 검색을 통해 먼저 해결하고, 공식문서를 통해
          완전한 내 것으로 만드는 방식으로 학습합니다
        </p>
        <p className={style.paragraph}>
          운동, 공부 등과 같이 시간이 쌓였을 때 가치있는 것들을 중요하게
          생각하기 때문에 자기 개발을 소홀히 하지 않습니다
        </p>
      </span>
    </div>
  );
}
