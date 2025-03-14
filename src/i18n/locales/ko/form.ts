export const form = {
  sections: {
    personalInfo: {
      sectionTitle: '개인 정보',
      fullName: {
        label: '성명',
        placeholder: '전체 이름을 입력하세요',
        tooltip: {
          content: "이력서에 표시하고 싶은 전문적인 이름.",
          importance: "채용 담당자가 가장 먼저 보는 정보이며 ATS 시스템 매칭에 사용됩니다.",
          tips: "법적 이름 또는 일관된 전문적인 이름을 사용하세요.",
        },
      },
      professionalTitle: {
        label: '직함',
        placeholder: '예: 시니어 소프트웨어 엔지니어',
        tooltip: {
          content: "현재 또는 목표 직위.",
          importance: "채용 담당자가 귀하의 경력 수준과 전문성을 빠르게 이해하는 데 도움이 됩니다.",
          tips: "창의적인 직함 대신 업계 표준 직함을 사용하세요.",
        },
      },
      location: {
        label: '위치',
        placeholder: '예: 서울특별시',
        tooltip: {
          content: "현재 도시와 국가/지역.",
          importance: "직무 자격을 결정하고 채용 담당자가 귀하가 대상 시장에 있는지 평가하는 데 중요합니다.",
          tips: "'도시, 국가' 또는 '도시, 도/시, 국가' 형식으로 작성하세요. 구체적이되 전체 주소는 포함하지 마세요.",
        },
      },
      email: {
        label: '이메일',
        placeholder: 'your.name@example.com',
        tooltip: {
          content: "귀하의 전문적인 이메일 주소.",
          importance: "채용 담당자가 연락하는 주요 방법입니다. ATS 시스템과 후속 커뮤니케이션에 필수적입니다.",
          tips: "전문적인 이메일 주소를 사용하고, 가능하면 이름을 포함하세요. 캐주얼하거나 창의적인 주소는 피하세요.",
        },
      },
      phone: {
        label: '전화번호',
        placeholder: '+82 10 1234 5678',
        tooltip: {
          content: "귀하의 연락처 전화번호.",
          importance: "이차적이지만 중요한 연락 방법입니다. 일부 채용 담당자는 초기 스크리닝에 전화를 선호합니다.",
          tips: "국제 지원의 경우 국가 코드를 포함하세요. 일관된 형식을 사용하세요.",
        },
      },
      githubUrl: {
        label: 'GitHub 링크',
        placeholder: 'https://github.com/username',
        tooltip: {
          content: "귀하의 GitHub 프로필 링크.",
          importance: "오픈소스 기여와 코딩 활동을 보여줍니다. 많은 기술 회사들이 특별히 이것을 찾습니다.",
          tips: "프로필이 최신 상태이고 최고의 작업을 보여주는지 확인하세요.",
        },
      },
      linkedinUrl: {
        label: 'LinkedIn 링크',
        placeholder: 'https://linkedin.com/in/username',
        tooltip: {
          content: "귀하의 LinkedIn 프로필 URL.",
          importance: "LinkedIn은 채용 담당자가 귀하의 경험과 네트워크를 확인하는 표준 참조점입니다.",
          tips: "이름이 포함된 맞춤 LinkedIn URL을 사용하세요. 프로필을 이력서와 동기화하세요.",
        },
      },
      portfolioUrl: {
        label: '포트폴리오 링크',
        placeholder: 'https://your-portfolio.com',
        tooltip: {
          content: "귀하의 개인 웹사이트 또는 포트폴리오 링크.",
          importance: "귀하의 작업과 개성에 대한 더 깊은 통찰을 제공합니다. GitHub에 없는 프로젝트를 보여주기에 좋습니다.",
          tips: "모바일 친화적이고 빠르게 로드되는지 확인하세요. 최고의 관련 작업을 강조하세요.",
        },
      },
      willRelocate: {
        label: '이주 가능',
        tooltip: {
          content: "직무 기회를 위해 이주할 의향이 있는지 표시합니다.",
          importance: "채용 담당자가 다른 지역의 기회와 매칭하는 데 도움이 됩니다. 더 많은 직무 가능성을 열 수 있습니다.",
          tips: "이 옵션을 선택할 때 비자 요구사항과 이주 비용을 고려하세요.",
        },
      },
      bio: {
        label: '자기소개',
        placeholder: '귀하의 전문성과 경력 목표를 강조하는 간단한 전문적 요약을 작성하세요...',
        tooltip: {
          content: "귀하의 전문성과 경력 목표를 강조하는 간단한 전문적 요약.",
          importance: "이것은 귀하의 엘리베이터 피치입니다. 채용 담당자가 가장 먼저 읽는 단락이며 귀하의 가치 제안을 빠르게 이해하는 데 도움이 됩니다.",
          tips: "3-5문장으로 유지하세요. 귀하의 고유한 가치 제안, 주요 성과, 경력 방향에 초점을 맞추세요. 업계 키워드를 자연스럽게 사용하세요.",
        },
      },
    },
    experience: {
      sectionTitle: '경력사항',
      addButton: '경력 추가',
    },
    education: {
      sectionTitle: '학력사항',
      addButton: '학력 추가',
    },
  },
};