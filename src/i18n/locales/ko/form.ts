export const form = {
  sections: {
    personalInfo: {
      sectionTitle: '개인 정보',
      fullName: {
        label: '성명',
        placeholder: '전체 이름을 입력하세요',
        tooltip: {
          content: '이력서에 표시하고 싶은 전문적인 이름.',
          importance:
            '중요한 이유: 채용 담당자가 가장 먼저 보는 정보이며 ATS 시스템 매칭에 사용됩니다.',
          tips: '팁: 법적 이름 또는 일관된 전문적인 이름을 사용하세요.',
        },
      },
      professionalTitle: {
        label: '직함',
        placeholder: '예: 시니어 소프트웨어 엔지니어',
        tooltip: {
          content: '현재 또는 목표 직위.',
          importance:
            '중요한 이유: 채용 담당자가 귀하의 경력 수준과 전문성을 빠르게 이해하는 데 도움이 됩니다.',
          tips: '팁: 창의적인 직함 대신 업계 표준 직함을 사용하세요.',
        },
      },
      location: {
        label: '위치',
        placeholder: '예: 서울특별시',
        tooltip: {
          content: '현재 거주하는 도시와 국가/지역.',
          importance:
            '중요한 이유: 위치는 채용 자격을 결정하는 데 중요하며 채용 담당자가 목표 지역에 속하는지 판단하는 데 도움이 됩니다.',
          tips: "팁: '도시, 국가' 또는 '도시, 주, 국가' 형식으로 작성하세요. 구체적으로 작성하되 전체 주소는 포함하지 마세요.",
        },
      },
      email: {
        label: '이메일',
        placeholder: 'your.name@example.com',
        tooltip: {
          content: '전문적인 이메일 주소.',
          importance:
            '중요한 이유: 채용 담당자가 연락하는 주요 수단입니다. ATS 시스템과 후속 연락에 필수적입니다.',
          tips: '팁: 가급적 본인 이름이 포함된 전문적인 이메일 주소를 사용하세요. 캐주얼하거나 창의적인 주소는 피하세요.',
        },
      },
      phone: {
        label: '전화번호',
        placeholder: '+1 (555) 555-5555',
        tooltip: {
          content: '연락 가능한 전화번호.',
          importance:
            '중요한 이유: 보조 연락 수단이지만 매우 중요합니다. 일부 채용 담당자는 초기 심사를 위해 전화를 선호합니다.',
          tips: '팁: 해외 지원 시 국가 코드를 포함하세요. 형식을 일관되게 유지하세요 (예: +82-10-1234-5678).',
        },
      },
      githubUrl: {
        label: 'GitHub URL',
        placeholder: 'https://github.com/username',
        tooltip: {
          content: 'GitHub 프로필 링크.',
          importance:
            '중요한 이유: 오픈소스 기여와 코딩 활동을 보여줍니다. 많은 기술 기업이 이를 특별히 확인합니다.',
          tips: '팁: 프로필을 최신 상태로 유지하고 가장 우수한 작업을 보여주세요. 관련 저장소를 고정하세요.',
        },
      },
      linkedinUrl: {
        label: 'LinkedIn URL',
        placeholder: 'https://linkedin.com/in/username',
        tooltip: {
          content: 'LinkedIn 프로필 URL.',
          importance:
            '중요한 이유: LinkedIn은 채용 담당자가 경력과 네트워크를 확인하는 표준적인 참고 자료입니다.',
          tips: '팁: 본인 이름이 포함된 맞춤 LinkedIn URL을 사용하세요. 프로필을 이력서와 동기화된 상태로 유지하세요.',
        },
      },
      portfolioUrl: {
        label: '포트폴리오 URL',
        placeholder: 'https://your-portfolio.com',
        tooltip: {
          content: '개인 웹사이트 또는 포트폴리오 링크.',
          importance:
            '중요한 이유: 본인의 작업과 개성을 더 깊이 있게 보여줍니다. GitHub에 없는 프로젝트를 소개하기에 좋습니다.',
          tips: '팁: 모바일 친화적이고 빠르게 로드되도록 하세요. 가장 우수하고 관련성 높은 작업을 강조하세요.',
        },
      },
      willRelocate: {
        label: '이주 가능',
        tooltip: {
          content: '채용 기회를 위해 이주할 의향이 있는지를 나타냅니다.',
          importance:
            '중요한 이유: 채용 담당자가 다른 지역의 기회와 매칭하는 데 도움이 됩니다. 더 많은 취업 가능성을 열어줄 수 있습니다.',
          tips: '팁: 이 옵션을 선택할 때 비자 요건과 이주 비용을 고려하세요.',
        },
      },
      bio: {
        label: '자기소개',
        placeholder:
          '전문성과 커리어 목표를 강조하는 간단한 자기소개를 작성하세요...',
        tooltip: {
          content: '전문성과 커리어 목표를 강조하는 간단한 전문 요약.',
          importance:
            '중요한 이유: 이는 당신의 엘리베이터 피치입니다. 채용 담당자가 가장 먼저 읽는 문단인 경우가 많으며 당신의 가치 제안을 빠르게 이해하는 데 도움이 됩니다.',
          tips: '팁: 3~5문장으로 작성하세요. 고유한 가치 제안, 주요 성과, 커리어 방향에 집중하세요. 업계 키워드를 자연스럽게 사용하세요.',
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
