import * as style from "../styles/introduction/introduction.css";

const Introduction = ({ className }: { className: string }) => {
  return (
    <section className={className}>
      <div className={style.intro_wrapper}>
        <h1 className={style.main_title}>WELLCOME</h1>
        <h2 className={style.sub_title}>
          안녕하세요 프론트 개발자 류현수입니다
        </h2>
        <span className={style.paragraph_wrapper}>
          <p className={style.paragraph}>
            예비비는 총액으로 국회의 의결을 얻어야 한다. 예비비의 지출은
            차기국회의 승인을 얻어야 한다. 제2항과 제3항의 처분에 대하여는
            법원에 제소할 수 없다. 국무총리 또는 행정각부의 장은 소관사무에
            관하여 법률이나 대통령령의 위임 또는 직권으로 총리령 또는 부령을
            발할 수 있다. 국가의 세입·세출의 결산, 국가 및 법률이 정한 단체의
            회계검사와 행정기관 및 공무원의 직무에 관한 감찰을 하기 위하여
            대통령 소속하에 감사원을 둔다.
          </p>
          <p className={style.paragraph}>
            예비비는 총액으로 국회의 의결을 얻어야 한다. 예비비의 지출은
            차기국회의 승인을 얻어야 한다. 제2항과 제3항의 처분에 대하여는
            법원에 제소할 수 없다. 국무총리 또는 행정각부의 장은 소관사무에
            관하여
          </p>
        </span>
      </div>
    </section>
  );
};

export default Introduction;
