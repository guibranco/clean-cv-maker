export const certifications = {
  title: '자격증',
  addButton: '자격증 추가',
  name: {
    label: '자격증 이름',
    placeholder: '자격증 이름을 입력하세요',
    tooltip: {
      content: '자격증 또는 인증의 이름.',
      importance: '이력서에 표시되는 항목으로, 채용 담당자가 귀하의 자격을 이해하는 데 도움이 됩니다.',
      tips: '자격증에 표시된 공식 명칭을 사용하세요.',
    },
  },
  issuer: {
    label: '발급 기관',
    placeholder: '발급 기관을 입력하세요',
    tooltip: {
      content: '자격증을 발급한 기관.',
      importance: '발급 기관의 신뢰도는 자격증의 가치를 높여줍니다.',
      tips: '발급 기관의 공식 명칭을 사용하세요.',
    },
  },
  issuerLogo: {
    label: '발급 기관 로고 URL',
    tooltip: {
      content: '발급 기관 로고의 URL.',
      importance: '시각적 표현은 빠른 인식을 돕습니다.',
      tips: '고화질의 공식 로고를 사용하세요. URL이 영구적이고 접근 가능한지 확인하세요.',
    },
  },
  dates: {
    issueDate: {
      label: '발급일',
      tooltip: {
        content: '이 자격증을 취득한 날짜.',
        importance: '자격증의 최신성을 보여줍니다.',
        tips: '자격증에 표시된 날짜를 사용하세요.',
      },
    },
    expiryDate: {
      label: '만료일',
      tooltip: {
        content: '해당되는 경우 이 자격증의 만료일.',
        importance: '일부 자격증은 갱신이 필요하며, 이는 최신 지식을 유지하고 있음을 보여줍니다.',
        tips: '자격증 갱신이 필요한지 확인하고 만료일을 관리하세요.',
      },
    },
    neverExpires: '만료되지 않음',
  },
  credential: {
    id: {
      label: '자격증 ID',
      placeholder: '자격증 ID를 입력하세요',
      tooltip: {
        content: '자격증의 고유 식별자.',
        importance: '자격증의 진위 여부를 확인하는 데 도움이 됩니다.',
        tips: '자격증 또는 인증 페이지에 표시된 그대로 정확히 복사하세요.',
      },
    },
    url: {
      label: '자격증 URL',
      placeholder: '자격증 URL을 입력하세요',
      tooltip: {
        content: '온라인에서 자격증을 확인할 수 있는 링크.',
        importance: '자격증을 빠르게 검증할 수 있게 해줍니다.',
        tips: '발급 기관에서 제공하는 영구 검증 URL을 사용하세요.',
      },
    },
  },
  isPaid: {
    label: '유료 자격증입니다',
    tooltip: {
      content: '유료 자격증인지 여부를 표시합니다.',
      importance: '유료 자격증은 고용주에게 더 큰 신뢰를 줄 수 있습니다.',
      tips: '무료 자격증도 여전히 가치가 있을 수 있지만, 포함할 항목은 신중하게 선택하세요.',
    },
    warning:
      '무료 자격증은 일부 고용주에게 덜 긍정적으로 평가될 수 있습니다. 가장 관련성 높은 자격증만 포함하는 것을 고려하세요.',
  },
  topics: {
    label: '다룬 주제 및 기술',
    addButton: '주제 추가',
    placeholder: '다룬 주제나 기술을 입력하세요',
    tooltip: {
      content: '자격증에서 다룬 주요 주제와 기술.',
      importance: '이 자격증으로 검증된 구체적인 지식과 역량을 보여줍니다.',
      tips: '목표 직무에 가장 관련성 높고 가치 있는 기술을 포함하세요.',
    },
  },
};
