export const workExperience = {
  title: '경력사항',
  addButton: '경력 추가',
  companyName: {
    label: '회사명',
    placeholder: '회사명을 입력하세요',
    tooltip: {
      content: '근무했던 회사의 이름.',
      importance:
        'ATS 시스템에서 핵심적인 항목이며 채용 담당자가 근무 이력을 확인하는 데 도움이 됩니다.',
      tips: '약어나 비공식 명칭이 아닌 회사의 공식 명칭을 사용하세요.',
    },
  },
  companyLogo: {
    label: '회사 로고 URL',
    tooltip: {
      content: '회사 로고 이미지의 URL.',
      importance: '시각적 요소를 추가하면 이력서가 더 매력적이고 기억에 남을 수 있습니다.',
      tips: '고화질의 전문적인 로고 이미지를 사용하세요. URL이 영구적이고 접근 가능한지 확인하세요.',
    },
  },
  companySize: {
    label: '회사 규모',
    placeholder: '예: 1-10, 11-50, 51-200, 201-500, 500+',
    tooltip: {
      content: '직원 수 기준 회사의 대략적인 규모.',
      importance: '채용 담당자가 함께 일한 조직의 규모를 이해하는 데 도움이 됩니다.',
      tips: "'1-10', '11-50', '51-200', '201-500', '500+'와 같은 표준 범위를 사용하세요",
    },
  },
  industry: {
    label: '업종',
    tooltip: {
      content: '회사의 주요 업종 또는 분야.',
      importance:
        '다양한 업종에서의 경험을 보여주며 업종별 채용 매칭에 도움이 됩니다.',
      tips: '해당 분야에서 인정받는 표준 업종 용어를 사용하세요.',
    },
  },
  description: {
    label: '회사 설명',
    tooltip: {
      content: '회사가 하는 일에 대한 간단한 설명.',
      importance:
        '근무 환경에 대한 맥락을 제공하고 채용 담당자가 회사의 사업 분야를 이해하는 데 도움이 됩니다.',
      tips: '간결하면서도 정보성 있게 작성하세요. 회사의 주요 사업과 성과에 집중하세요.',
    },
  },
  contractType: {
    label: '계약 형태',
    options: {
      fullTime: '정규직',
      partTime: '파트타임',
      freelance: '프리랜서',
    },
    tooltip: {
      content: '보유했던 고용 계약의 유형.',
      importance:
        '고용 상태를 명확히 하고 유사한 기회와의 매칭에 도움이 됩니다.',
      tips: '고용 형태에 대해 정직하게 작성하세요. 각 형태마다 고유한 장점이 있습니다.',
    },
  },
  workSchema: {
    label: '근무 형태',
    options: {
      onSite: '출근',
      remote: '원격',
      hybrid: '하이브리드',
    },
    tooltip: {
      content: '근무 방식 (출근, 원격, 또는 하이브리드).',
      importance:
        '근무 위치의 유연성은 고용주와 직원 모두에게 점점 더 중요해지고 있습니다.',
      tips: '원격 근무 채용을 검색할 때 특히 관련성이 높을 수 있습니다.',
    },
  },
  dates: {
    startDate: {
      label: '시작일',
      tooltip: {
        content: '이 회사에서 근무를 시작한 시기.',
        importance: '경력 발전 과정을 보여주고 근무 기간을 확인하는 데 도움이 됩니다.',
        tips: '내부 승진이나 직무 변경의 경우에도 실제 시작일을 사용하세요.',
      },
    },
    endDate: {
      label: '종료일',
      tooltip: {
        content: '이 회사에서 근무를 마친 시기.',
        importance: '근무 이력을 완성하고 직업 안정성을 보여줍니다.',
        tips: "현재 재직 중인 경우 '현재' 체크박스를 사용하세요.",
      },
    },
    current: '현재',
  },
  role: {
    title: {
      label: '직책',
      tooltip: {
        content: '이 역할에서의 직함 또는 직위.',
        importance: '직함은 ATS 매칭과 경력 발전을 보여주는 데 핵심적입니다.',
        tips: '표준 업계 직함을 사용하세요. 회사 고유의 명칭이나 창의적인 직함은 피하세요.',
      },
    },
    description: {
      label: '역할 설명',
      tooltip: {
        content: '이 역할에서의 책임과 범위에 대한 요약.',
        importance: '일상 업무와 영향력을 자세히 설명할 수 있는 부분입니다.',
        tips: '가능하면 행동 동사를 사용하고 결과를 수치화하세요. 가장 중요한 책임에 집중하세요.',
      },
    },
    achievements: {
      label: '주요 성과',
      addButton: '성과 추가',
      placeholder: '성과',
      tooltip: {
        content: '이 역할에서의 구체적인 성취와 성공 사례.',
        importance: '성과는 잠재적 고용주에게 귀하의 영향력과 가치를 보여줍니다.',
        tips: '가능하면 지표와 수치를 사용하세요. 단순한 책임보다는 결과와 영향력에 집중하세요.',
      },
    },
  },
};
