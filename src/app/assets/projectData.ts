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
      "외부 라이브러리 없이 carousel 구현, zero-runtime css를 지원하는 vanilla-extract로 반응형 웹앱 구현, next-images를 통한 이미지 최적화",
    github: "https://github.com/Arangluv/portfolio",
    frontend: ["next.js", "vanilla-extract"],
    backend: null,
    deployment: ["Vercel"],
    images: [
      "https://private-user-images.githubusercontent.com/90511789/290078257-b0a070c2-264d-4249-8fd3-ffb4649a9174.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTMwMTU0MzUsIm5iZiI6MTcxMzAxNTEzNSwicGF0aCI6Ii85MDUxMTc4OS8yOTAwNzgyNTctYjBhMDcwYzItMjY0ZC00MjQ5LThmZDMtZmZiNDY0OWE5MTc0LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDEzVDEzMzIxNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFkZGNlMjVkN2YwMTFiNDU4YmQ4YTg4ZjA5MDY5N2U2ZjIwZjc3NGZmODhjNWUxYzI4MjJjMTI1ZDdmMGFiMmUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.nZncXQV-m7HZLOQ2vaxvHuZoqPv7A4BoW8PzQ3NfKSA",
      "https://private-user-images.githubusercontent.com/90511789/290079707-8be3aec1-10a4-4090-8a92-f9daf0cdb900.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTMwMTU0MzUsIm5iZiI6MTcxMzAxNTEzNSwicGF0aCI6Ii85MDUxMTc4OS8yOTAwNzk3MDctOGJlM2FlYzEtMTBhNC00MDkwLThhOTItZjlkYWYwY2RiOTAwLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDEzVDEzMzIxNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTI4MjBlMjdlZDJiNzJmM2Y5MmY0M2U0MjA0OTRlM2Y3MjM2YjNkZGI3NzAxZDFlOTVjZDJiNGRjYzJiODQ3ZjMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.4oviVVpRw_6qI_l3NgwtNv2jOkcy9FOiecgvYdkV_zI",
      "https://private-user-images.githubusercontent.com/90511789/290079801-c5447138-7159-49b4-ab51-e22465c6a385.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTMwMTU0MzUsIm5iZiI6MTcxMzAxNTEzNSwicGF0aCI6Ii85MDUxMTc4OS8yOTAwNzk4MDEtYzU0NDcxMzgtNzE1OS00OWI0LWFiNTEtZTIyNDY1YzZhMzg1LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDEzVDEzMzIxNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY4MDBlYTkwY2I4ZjZlN2QwM2U4YmVhZTJkOTc5MTdkN2M4NjRjMjdlM2ZhYWE0NjgxZjVjMDU3ZTk1YWU2NmUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.QTPlbD1-S3cC8HNuBHesz2OPf7HMdAogp2adX-ZhuDE",
      "https://private-user-images.githubusercontent.com/90511789/290097001-1900c275-ce69-494d-b261-6e03d08a9d0e.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTMxNjY1ODgsIm5iZiI6MTcxMzE2NjI4OCwicGF0aCI6Ii85MDUxMTc4OS8yOTAwOTcwMDEtMTkwMGMyNzUtY2U2OS00OTRkLWIyNjEtNmUwM2QwOGE5ZDBlLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDE1VDA3MzEyOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ5NTI4YTEzNjI1ZDQzNGFmMWVmMjg0YThiM2I5MmQ2MjI5YWRjOWY0NjFjZTFlYzZjMWFhNjY5N2RjNWMzM2ImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.5HQKkU7EqpLt1mfeqCbvY_XvTIy-xumAw7O3SupFwbs",
      "https://private-user-images.githubusercontent.com/90511789/290089197-16e4ffd1-0e4c-451f-bd6b-96a58fdd5b3a.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTMxNjY1ODgsIm5iZiI6MTcxMzE2NjI4OCwicGF0aCI6Ii85MDUxMTc4OS8yOTAwODkxOTctMTZlNGZmZDEtMGU0Yy00NTFmLWJkNmItOTZhNThmZGQ1YjNhLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDE1VDA3MzEyOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZmMmM2OTQzMmJkOGI4ZDBmZDE0NDRmMTBlYTNmNjYyZTU3YjM3M2NmNmZlZjIxMWJjNDU4ODA3NjRiYmNiNTcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.0uPBlKRyoR1IJYvf6-NBnBJ6JEeDg_bJqhoh5BNTukM",
      "https://private-user-images.githubusercontent.com/90511789/290113783-2beeab6b-e1c0-4b6d-98f8-cf89aec93a4c.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTMxNjY1ODgsIm5iZiI6MTcxMzE2NjI4OCwicGF0aCI6Ii85MDUxMTc4OS8yOTAxMTM3ODMtMmJlZWFiNmItZTFjMC00YjZkLTk4ZjgtY2Y4OWFlYzkzYTRjLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDE1VDA3MzEyOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTAzZDhmNTRlYjNiNzkxYjM1MTNmYTk5YjYzMTY4YTZhODUwM2U1Njg5ZDM0MzJkNTA5Yzc2M2Q0YzkzZjE5MDEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Jjw9epJHXJywUrsL03pMWwiUpl39fl7lbXFG-qm0rx4",
      "https://private-user-images.githubusercontent.com/90511789/290117685-771bf997-d9de-4e5a-9a15-90e64d3b8601.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTMxNjY1ODgsIm5iZiI6MTcxMzE2NjI4OCwicGF0aCI6Ii85MDUxMTc4OS8yOTAxMTc2ODUtNzcxYmY5OTctZDlkZS00ZTVhLTlhMTUtOTBlNjRkM2I4NjAxLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDE1VDA3MzEyOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThmNDk2YTRhZDAwN2YxYjgzM2VlOTYzNmM1N2UxOGJhMTFjZjAxZWE4MjA3MzcyZjEzZWU5OGI0MTk0NzdhOGImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.6HT9Omd4CSXjdzc5a3cz61EeSg_qiNTtBknf_wQdbnA",
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
    images: [
      "https://private-user-images.githubusercontent.com/90511789/290078257-b0a070c2-264d-4249-8fd3-ffb4649a9174.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTMwMTU0MzUsIm5iZiI6MTcxMzAxNTEzNSwicGF0aCI6Ii85MDUxMTc4OS8yOTAwNzgyNTctYjBhMDcwYzItMjY0ZC00MjQ5LThmZDMtZmZiNDY0OWE5MTc0LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDEzVDEzMzIxNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFkZGNlMjVkN2YwMTFiNDU4YmQ4YTg4ZjA5MDY5N2U2ZjIwZjc3NGZmODhjNWUxYzI4MjJjMTI1ZDdmMGFiMmUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.nZncXQV-m7HZLOQ2vaxvHuZoqPv7A4BoW8PzQ3NfKSA",
      "https://private-user-images.githubusercontent.com/90511789/290079707-8be3aec1-10a4-4090-8a92-f9daf0cdb900.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTMwMTU0MzUsIm5iZiI6MTcxMzAxNTEzNSwicGF0aCI6Ii85MDUxMTc4OS8yOTAwNzk3MDctOGJlM2FlYzEtMTBhNC00MDkwLThhOTItZjlkYWYwY2RiOTAwLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDEzVDEzMzIxNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTI4MjBlMjdlZDJiNzJmM2Y5MmY0M2U0MjA0OTRlM2Y3MjM2YjNkZGI3NzAxZDFlOTVjZDJiNGRjYzJiODQ3ZjMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.4oviVVpRw_6qI_l3NgwtNv2jOkcy9FOiecgvYdkV_zI",
      "https://private-user-images.githubusercontent.com/90511789/290079801-c5447138-7159-49b4-ab51-e22465c6a385.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTMwMTU0MzUsIm5iZiI6MTcxMzAxNTEzNSwicGF0aCI6Ii85MDUxMTc4OS8yOTAwNzk4MDEtYzU0NDcxMzgtNzE1OS00OWI0LWFiNTEtZTIyNDY1YzZhMzg1LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MTMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDEzVDEzMzIxNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTY4MDBlYTkwY2I4ZjZlN2QwM2U4YmVhZTJkOTc5MTdkN2M4NjRjMjdlM2ZhYWE0NjgxZjVjMDU3ZTk1YWU2NmUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.QTPlbD1-S3cC8HNuBHesz2OPf7HMdAogp2adX-ZhuDE",
      "https://private-user-images.githubusercontent.com/90511789/290097001-1900c275-ce69-494d-b261-6e03d08a9d0e.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTMxNjY1ODgsIm5iZiI6MTcxMzE2NjI4OCwicGF0aCI6Ii85MDUxMTc4OS8yOTAwOTcwMDEtMTkwMGMyNzUtY2U2OS00OTRkLWIyNjEtNmUwM2QwOGE5ZDBlLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDE1VDA3MzEyOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQ5NTI4YTEzNjI1ZDQzNGFmMWVmMjg0YThiM2I5MmQ2MjI5YWRjOWY0NjFjZTFlYzZjMWFhNjY5N2RjNWMzM2ImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.5HQKkU7EqpLt1mfeqCbvY_XvTIy-xumAw7O3SupFwbs",
      "https://private-user-images.githubusercontent.com/90511789/290089197-16e4ffd1-0e4c-451f-bd6b-96a58fdd5b3a.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTMxNjY1ODgsIm5iZiI6MTcxMzE2NjI4OCwicGF0aCI6Ii85MDUxMTc4OS8yOTAwODkxOTctMTZlNGZmZDEtMGU0Yy00NTFmLWJkNmItOTZhNThmZGQ1YjNhLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDE1VDA3MzEyOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZmMmM2OTQzMmJkOGI4ZDBmZDE0NDRmMTBlYTNmNjYyZTU3YjM3M2NmNmZlZjIxMWJjNDU4ODA3NjRiYmNiNTcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.0uPBlKRyoR1IJYvf6-NBnBJ6JEeDg_bJqhoh5BNTukM",
      "https://private-user-images.githubusercontent.com/90511789/290113783-2beeab6b-e1c0-4b6d-98f8-cf89aec93a4c.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTMxNjY1ODgsIm5iZiI6MTcxMzE2NjI4OCwicGF0aCI6Ii85MDUxMTc4OS8yOTAxMTM3ODMtMmJlZWFiNmItZTFjMC00YjZkLTk4ZjgtY2Y4OWFlYzkzYTRjLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDE1VDA3MzEyOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTAzZDhmNTRlYjNiNzkxYjM1MTNmYTk5YjYzMTY4YTZhODUwM2U1Njg5ZDM0MzJkNTA5Yzc2M2Q0YzkzZjE5MDEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.Jjw9epJHXJywUrsL03pMWwiUpl39fl7lbXFG-qm0rx4",
      "https://private-user-images.githubusercontent.com/90511789/290117685-771bf997-d9de-4e5a-9a15-90e64d3b8601.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTMxNjY1ODgsIm5iZiI6MTcxMzE2NjI4OCwicGF0aCI6Ii85MDUxMTc4OS8yOTAxMTc2ODUtNzcxYmY5OTctZDlkZS00ZTVhLTlhMTUtOTBlNjRkM2I4NjAxLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MTUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDE1VDA3MzEyOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThmNDk2YTRhZDAwN2YxYjgzM2VlOTYzNmM1N2UxOGJhMTFjZjAxZWE4MjA3MzcyZjEzZWU5OGI0MTk0NzdhOGImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.6HT9Omd4CSXjdzc5a3cz61EeSg_qiNTtBknf_wQdbnA",
    ],
  },
];

export default projectData;
