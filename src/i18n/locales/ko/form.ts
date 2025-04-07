export const form = {
  sections: {
    personalInfo: {
      sectionTitle: '개인 정보',
      fullName: {
        label: '성명',
        placeholder: '전체 이름을 입력하세요',
        tooltip: {
          content: "이력서에 표시하고 싶은 전문적인 이름.",
          importance: "중요한 이유: 채용 담당자가 가장 먼저 보는 정보이며 ATS 시스템 매칭에 사용됩니다.",
          tips: "팁: 법적 이름 또는 일관된 전문적인 이름을 사용하세요.",
        },
      },
      professionalTitle: {
        label: '직함',
        placeholder: '예: 시니어 소프트웨어 엔지니어',
        tooltip: {
          content: "현재 또는 목표 직위.",
          importance: "중요한 이유: 채용 담당자가 귀하의 경력 수준과 전문성을 빠르게 이해하는 데 도움이 됩니다.",
          tips: "팁: 창의적인 직함 대신 업계 표준 직함을 사용하세요.",
        },
      },
    },
    experience: {
      title: '경력사항',
      addButton: '경력 추가',
    },
    education: {
      title: '학력사항',
      addButton: '학력 추가',
    },
  },
};