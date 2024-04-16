interface ProjectData {
  title: string;
  period: string[];
  overview: string;
  functions: string;
  github: string;
  frontend: string[] | null;
  backend: string[] | null;
  deployment: string[] | null;
  images: string[];
}

const projectData: ProjectData[] = [
  {
    title: "웹 포트폴리오",
    period: ["2024-03", "2024-04"],
    overview: `next.js와 zero-runtime style sheets 기능을 제공하는
    vanilla-extract로 만든 웹 포트폴리오 입니다.

    기존 react로만 개발하는 과정에서 SSR의 필요성을 느끼고 next.js를 학습하면서 만든 프로젝트 입니다.
    
    후술추가
    `,
    functions:
      "외부 라이브러리 없이 carousel 구현, zero-runtime css를 지원하는 vanilla-extract로 반응형 웹앱 구현, next-images를 통한 이미지 최적화, next-themes를 활용한 multi themes 구현",
    github: "https://github.com/Arangluv/portfolio",
    frontend: ["next.js", "vanilla-extract"],
    backend: null,
    deployment: ["Vercel"],
    images: [
      "/assets/project-images/portfolio/multi-themes.gif",
      "/assets/project-images/portfolio/project-image-slide.gif",
      "/assets/project-images/portfolio/project-slide.gif",
    ],
  },

  {
    title: "같이코딩 - 나만의 강의 사이트",
    period: ["2023-07", "2023-09"],
    overview: `탄핵소추의 의결을 받은 자는 탄핵심판이 있을 때까지 그 권한행사가 정지된다.

    국회가 재적의원 과반수의 찬성으로 계엄의 해제를 요구한 때에는 대통령은 이를 해제하여야 한다.
    
    국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다.`,
    functions:
      "날짜별로 각 루틴의 달성 여부, 할 일 목록, 시간 단위 일정 기입하기, 월별로 각 루틴의 달성 여부를 한눈에 확인하기",
    github: "https://github.com/Arangluv/portfolio",
    frontend: ["next.js", "vanilla-extract", "anything"],
    backend: ["express.js"],
    deployment: ["Vercel", "Supabase (Authentication)"],
    images: ["/assets/project-images/portfolio/multi-themes.gif"],
  },
];

export default projectData;
