export const workExperience = {
  title: '工作经验',
  addButton: '添加经验',
  companyName: {
    label: '公司名称',
    placeholder: '输入公司名称',
    tooltip: {
      content: '您工作过的公司名称。',
      importance: '这是 ATS 系统的关键字段，也有助于招聘人员核实您的工作经历。',
      tips: '使用公司的官方名称，而不是缩写或非正式名称。',
    },
  },
  companyLogo: {
    label: '公司徽标链接',
    tooltip: {
      content: '公司徽标图片的链接。',
      importance: '添加视觉元素可以让您的简历更具吸引力和记忆点。',
      tips: '使用高质量的专业徽标图片。确保链接永久有效且可访问。',
    },
  },
  companySize: {
    label: '公司规模',
    placeholder: '例如：1-10、11-50、51-200、201-500、500+',
    tooltip: {
      content: '公司大致的员工规模。',
      importance: '帮助招聘人员了解您所工作过的组织规模。',
      tips: "使用标准区间，如 '1-10'、'11-50'、'51-200'、'201-500'、'500+'",
    },
  },
  industry: {
    label: '行业',
    tooltip: {
      content: '公司所属的主要行业或领域。',
      importance: '展示您跨行业的工作经验，有助于行业相关的职位匹配。',
      tips: '使用您所在领域公认的标准行业术语。',
    },
  },
  description: {
    label: '公司描述',
    tooltip: {
      content: '简要描述该公司的业务。',
      importance: '为您的工作环境提供背景信息，帮助招聘人员了解公司的业务重点。',
      tips: '保持简洁但信息充分。重点说明公司的主要业务和成就。',
    },
  },
  contractType: {
    label: '合同类型',
    options: {
      fullTime: '全职',
      partTime: '兼职',
      freelance: '自由职业',
    },
    tooltip: {
      content: '您所拥有的雇佣合同类型。',
      importance: '明确您的雇佣状态，帮助匹配类似的工作机会。',
      tips: '如实说明您的雇佣类型。每种类型都有各自的优势。',
    },
  },
  workSchema: {
    label: '工作方式',
    options: {
      onSite: '现场办公',
      remote: '远程办公',
      hybrid: '混合办公',
    },
    tooltip: {
      content: '您的工作方式（现场办公、远程办公或混合办公）。',
      importance: '工作地点的灵活性对雇主和员工都越来越重要。',
      tips: '这对远程职位求职尤其重要。',
    },
  },
  dates: {
    startDate: {
      label: '开始日期',
      tooltip: {
        content: '您开始在该公司工作的日期。',
        importance: '展示您的职业发展历程，并有助于核实雇佣时长。',
        tips: '即使是内部晋升或职位变动，也使用实际的开始日期。',
      },
    },
    endDate: {
      label: '结束日期',
      tooltip: {
        content: '您结束在该公司工作的日期。',
        importance: '完善您的雇佣时间线，展示工作稳定性。',
        tips: "对于当前的职位，请使用'当前'复选框。",
      },
    },
    current: '当前',
  },
  role: {
    title: {
      label: '职位名称',
      tooltip: {
        content: '您在此职位中的职称或职位。',
        importance: '职位名称对 ATS 匹配至关重要，也能展示您的职业发展。',
        tips: '使用标准的行业职称，避免使用公司内部专用或创意性的头衔。',
      },
    },
    description: {
      label: '职位描述',
      tooltip: {
        content: '概述您在此职位中的职责和工作范围。',
        importance: '这里可以详细说明您的日常工作和影响力。',
        tips: '使用行动动词，尽可能量化成果。重点说明您最重要的职责。',
      },
    },
    achievements: {
      label: '主要成就',
      addButton: '添加成就',
      placeholder: '成就',
      tooltip: {
        content: '您在此职位中取得的具体成果和成就。',
        importance: '成就展示了您对潜在雇主的影响力和价值。',
        tips: '尽可能使用具体指标和数字。注重成果和影响，而不仅仅是职责描述。',
      },
    },
  },
};
