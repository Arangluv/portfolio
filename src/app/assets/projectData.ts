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
    title: '웹 포트폴리오',
    period: ['2024-03', '2024-04'],
    overview: `next.js와 zero-runtime style sheets 기능을 제공하는
    vanilla-extract로 만든 웹 포트폴리오 입니다.

    기존 react로만 개발하는 과정에서 SSR의 필요성을 느끼고 next.js를 학습하면서 만든 프로젝트 입니다.
    
    vanilla-extract을 통해 반응형 웹앱 구현해보며 다양한 API를 사용해보기 위해 외부 라이브러리 없이 carousel 구현해보았습니다.

    next-themes를 활용하여 카테고리 별로 multi themes 구현했습니다.

    협업 시 코드의 가독성을 올리고, 통일된 코드를 작성하기 위해 eslint, prettier를 설정했습니다 

    image component를 통한 이미지 최적화, 반복적인 UI 처리, RSC와 RCC 등 next 14에서 제공하는 다양한 기능을 사용해보며,

    기능이 복잡한 프로젝트를 만들어 보기 전 프로젝트 세팅, 폴더 구조, 문법을 익히기에 좋은 프로젝트 였습니다


    `,
    functions: '개발한 프로젝트의 개요보기, 기술스택 한눈에 보기',
    github: 'https://github.com/Arangluv/portfolio',
    frontend: ['next.js', 'vanilla-extract'],
    backend: null,
    deployment: ['Vercel'],
    images: [
      '/assets/project-images/portfolio/multi-themes.gif',
      '/assets/project-images/portfolio/project-image-slide.gif',
      '/assets/project-images/portfolio/project-slide.gif',
    ],
  },

  {
    title: '같이코딩 - 나만의 강의 사이트',
    period: ['2023-07', '2023-12'],
    overview: `만든 강의를 한 플랫폼에 종속적이지 않고 관리하기 위한 개인만의 공간이 필요하여 제작하게 된 개인 강의 사이트입니다`,
    functions: `local ffmpeg를 활용하여 mp4 미디어 파일을 m3u8로 sementation 후 aws S3에 업로드 하여 HLS 스트리밍을 지원 -> 강의 재생 지연을 최소화,
      `,
    github: 'https://github.com/Arangluv/portfolio',
    frontend: ['next.js', 'vanilla-extract', 'anything'],
    backend: ['express.js'],
    deployment: null,
    images: ['/assets/project-images/portfolio/multi-themes.gif'],
  },
];

export default projectData;
