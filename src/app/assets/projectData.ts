interface ProjectData {
  title: string;
  period: string[];
  overview: string;
  functions: string;
  github: string;
  frontend: string[] | null;
  backend: string[] | null;
  database: string[] | null;
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
    frontend: ['next.js', 'typescript', 'vanilla-extract'],
    backend: null,
    database: null,
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
    overview: `만든 강의를 한 플랫폼에 종속적이지 않고 관리하기 위한 개인적인 공간이 필요하여 제작하게 강의 사이트입니다.
    
    수강생들의 원할한 강의 시청을 위해 local ffmpeg를 활용하여 mp4 미디어 파일을 m3u8로 sementation 후 aws S3에 업로드 하여 HLS 스트리밍을 지원 했습니다
    
    강의 / 댓글 / 이슈 / 프로필 등 데이터를 생성 및 추가하기 위한 많은 form element를 사용했어야 했습니다.
    
    많은 제어 컴포넌트를 관리하기 위해 react-hook-form를 사용했으며, 비제어 컴포넌트로 불필요한 리렌더링을 막아주는 점과 깔끔한 코드와 validation 및 error 핸들링 등 다양한 장점을 숙지할 수 있었습니다.

    그 외 react-query를 사용하여 강의 데이터를 캐싱하여 반복적으로 API가 호출되는 것을 방지했으며,

    강의 데이터 및 수강생 정보 등의 데이터를 recoil을 통해 전역적으로 관리하여 이전 프로젝트에서 경험한 props drilling을 해결해보는 시간을 가졌습니다.
    `,
    functions: `강사(admin) : 강의를 업로드 및 수정하기, 결제 정보 확인하기, 수강생들이 생성한 댓글, 이슈 확인하기
    
    수강생(clitent): 강의 결제하기, 이메일 / 카카오톡 간편 로그인하기, 수강중인 강의 확인하기, 생성한 이슈 / 댓글 대쉬보드에서 확인하기, 강의 수강하기
    `,
    github: 'https://github.com/Arangluv/togetercoding',
    frontend: [
      'React',
      'typescript',
      'recoil',
      'react-query',
      'react-hook-form',
      'styled-components',
    ],
    backend: ['express.js', 'node.js'],
    database: ['mongoDB'],
    deployment: null,
    images: [
      '/assets/project-images/togethercoding/join.gif',
      '/assets/project-images/togethercoding/kakao-login.gif',
      '/assets/project-images/togethercoding/make-lecture.gif',
      '/assets/project-images/togethercoding/upload-video.gif',
      '/assets/project-images/togethercoding/load-lecture.gif',
      '/assets/project-images/togethercoding/payment.gif',
      '/assets/project-images/togethercoding/payment-1.gif',
      '/assets/project-images/togethercoding/see-video.gif',
      '/assets/project-images/togethercoding/make-issue.gif',
      '/assets/project-images/togethercoding/dashboard.gif',
      '/assets/project-images/togethercoding/confirm-issue.gif',
      '/assets/project-images/togethercoding/reply-issue.gif',
    ],
  },
];

export default projectData;
