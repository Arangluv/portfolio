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
    title: "AQUIZ - 나만의 퀴즈 사이트",
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
    ],
  },
  {
    title: "AQUIZ - 나만의 퀴즈 사이트",
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
    ],
  },
  {
    title: "AQUIZ - 나만의 퀴즈 사이트",
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
    ],
  },
];

export default projectData;
