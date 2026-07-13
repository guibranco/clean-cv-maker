export const projects = {
  title: '프로젝트',
  addButton: '프로젝트 추가',
  name: {
    label: '프로젝트 이름',
    placeholder: '프로젝트 이름을 입력하세요',
    tooltip: {
      content: '프로젝트의 이름.',
      importance: '프로젝트를 쉽게 식별하고 기억할 수 있게 해줍니다.',
      tips: '프로젝트의 목적을 반영하는 명확하고 설명적인 이름을 사용하세요.',
    },
  },
  icon: {
    label: '프로젝트 아이콘 URL',
    tooltip: {
      content: '프로젝트의 아이콘 또는 로고 URL.',
      importance: '시각적 표현은 프로젝트를 돋보이게 하는 데 도움이 됩니다.',
      tips: '배경이 명확한 정사각형 이미지를 사용하세요. SVG 또는 PNG 형식이 가장 적합합니다.',
    },
  },
  description: {
    label: '프로젝트 설명',
    placeholder: '프로젝트를 설명하세요...',
    tooltip: {
      content: '프로젝트가 수행하는 작업에 대한 간단한 설명.',
      importance: '독자가 프로젝트의 목적과 가치를 빠르게 이해하는 데 도움이 됩니다.',
      tips: '해결하는 문제와 주요 기능에 집중하세요. 간결하면서도 정보성 있게 작성하세요.',
    },
  },
  sourceCode: {
    label: '소스 코드 공개',
    url: {
      label: '소스 코드 URL',
      tooltip: {
        content: '프로젝트 소스 코드 저장소 링크.',
        importance: '다른 사람이 코드와 구현을 검토할 수 있게 해줍니다.',
        tips: '일반적으로 GitHub, GitLab, Bitbucket 저장소 URL을 사용합니다.',
      },
    },
  },
  demo: {
    label: '데모 제공',
    url: {
      label: '데모 URL',
      tooltip: {
        content: '프로젝트의 라이브 데모 링크.',
        importance: '다른 사람이 즉시 프로젝트를 사용해볼 수 있게 해줍니다.',
        tips: '데모가 안정적이고 프로젝트를 잘 대표하는지 확인하세요.',
      },
    },
  },
  documentation: {
    label: '문서 제공',
    url: {
      label: '문서 URL',
      tooltip: {
        content: '프로젝트 문서 링크.',
        importance: '다른 사람이 프로젝트 사용법을 이해하는 데 도움이 됩니다.',
        tips: 'ReadTheDocs 또는 GitHub Pages와 같은 플랫폼 사용을 고려하세요.',
      },
    },
  },
  startDate: {
    label: '시작일',
    tooltip: {
      content: '이 프로젝트 작업을 시작한 시기.',
      importance: '프로젝트 타임라인과 경력 발전 과정을 보여줍니다.',
      tips: '첫 번째 유의미한 기여를 한 달을 사용하세요.',
    },
  },
  techStack: {
    label: '기술 스택',
    addCustom: {
      placeholder: '사용자 지정 기술 추가',
      button: '추가',
    },
    tooltip: {
      content: '이 프로젝트에서 사용된 기술.',
      importance: '기술적 전문성과 프로젝트의 복잡성을 보여줍니다.',
      tips: '최대 10개의 기술을 선택하세요. 필요한 경우 사용자 지정 기술을 추가하세요.',
    },
    limit: {
      text: '개의 기술 선택됨',
      max: '최대 10개의 기술까지 허용됩니다',
    },
    suggested: '추천 기술:',
  },
};
