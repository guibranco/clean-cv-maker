export const form = {
  sections: {
    personalInfo: {
      sectionTitle: '个人信息',
      fullName: {
        label: '姓名',
        placeholder: '输入您的全名',
        tooltip: {
          content: '您希望在简历中显示的完整专业名称。',
          importance: '这是招聘人员看到的第一个信息，用于ATS系统匹配。',
          tips: '使用您的法定姓名或一致的专业名称。',
        },
      },
      professionalTitle: {
        label: '职业头衔',
        placeholder: '例如：高级软件工程师',
        tooltip: {
          content: '您当前或目标职位。',
          importance: '帮助招聘人员快速了解您的职业水平和专业知识。',
          tips: '使用行业标准职位名称，而不是创意性的头衔。',
        },
      },
      location: {
        label: '所在地',
        placeholder: '例如：北京市',
        tooltip: {
          content: '您当前的城市和国家/地区。',
          importance: '对于确定工作资格和帮助招聘人员评估您是否在其目标市场中至关重要。',
          tips: '格式为"城市，国家"或"城市，省份，国家"。具体但不要包含完整地址。',
        },
      },
      email: {
        label: '电子邮箱',
        placeholder: 'your.name@example.com',
        tooltip: {
          content: '您的专业电子邮箱地址。',
          importance: '这是招聘人员联系您的主要方式。对ATS系统和后续沟通至关重要。',
          tips: '使用专业的电子邮箱地址，最好包含您的姓名。避免使用随意或创意性的地址。',
        },
      },
      phone: {
        label: '电话号码',
        placeholder: '+86 123 4567 8901',
        tooltip: {
          content: '您的联系电话。',
          importance: '次要但重要的联系方式。一些招聘人员更喜欢电话初筛。',
          tips: '包含国际区号。保持格式一致。',
        },
      },
      githubUrl: {
        label: 'GitHub链接',
        placeholder: 'https://github.com/username',
        tooltip: {
          content: '您的GitHub个人资料链接。',
          importance: '展示您的开源贡献和编码活动。许多科技公司特别关注这一点。',
          tips: '确保您的个人资料是最新的，展示您最好的作品。',
        },
      },
      linkedinUrl: {
        label: 'LinkedIn链接',
        placeholder: 'https://linkedin.com/in/username',
        tooltip: {
          content: '您的LinkedIn个人资料链接。',
          importance: 'LinkedIn是招聘人员验证您的经验和人脉的标准参考点。',
          tips: '使用自定义LinkedIn URL，包含您的姓名。保持个人资料与简历同步。',
        },
      },
      portfolioUrl: {
        label: '作品集链接',
        placeholder: 'https://your-portfolio.com',
        tooltip: {
          content: '您的个人网站或作品集链接。',
          importance: '提供对您的工作和个性的深入了解。适合展示GitHub上没有的项目。',
          tips: '确保移动端友好且加载迅速。突出展示您最好和最相关的作品。',
        },
      },
      willRelocate: {
        label: '愿意搬迁',
        tooltip: {
          content: '表明您是否愿意为工作机会搬迁。',
          importance: '帮助招聘人员匹配不同地点的机会。可以开启更多工作可能性。',
          tips: '选择此选项时，请考虑签证要求和搬迁成本。',
        },
      },
      bio: {
        label: '个人简介',
        placeholder: '写一段简短的专业总结，突出您的专业知识和职业目标...',
        tooltip: {
          content: '简短的专业总结，突出您的专业知识和职业目标。',
          importance:
            '这是您的电梯演讲。通常是招聘人员阅读的第一段，帮助他们快速理解您的价值主张。',
          tips: '保持在3-5句话。关注您的独特价值主张、主要成就和职业方向。自然地使用行业关键词。',
        },
      },
    },
    experience: {
      sectionTitle: '工作经验',
      addButton: '添加经验',
    },
    education: {
      sectionTitle: '教育背景',
      addButton: '添加教育经历',
    },
  },
};
