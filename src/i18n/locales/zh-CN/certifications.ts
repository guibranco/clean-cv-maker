export const certifications = {
  title: '证书',
  addButton: '添加证书',
  name: {
    label: '证书名称',
    placeholder: '输入证书名称',
    tooltip: {
      content: '您的证书或认证的名称。',
      importance: '这会显示在您的简历上，帮助招聘人员了解您的资质。',
      tips: '使用证书上显示的官方名称。',
    },
  },
  issuer: {
    label: '颁发机构',
    placeholder: '输入颁发机构名称',
    tooltip: {
      content: '颁发该证书的机构。',
      importance: '颁发机构的信誉为您的证书增加了分量。',
      tips: '使用颁发机构的官方名称。',
    },
  },
  issuerLogo: {
    label: '颁发机构徽标链接',
    tooltip: {
      content: '颁发机构徽标的链接。',
      importance: '直观的展示有助于快速识别。',
      tips: '使用高质量的官方徽标。确保链接永久有效且可访问。',
    },
  },
  dates: {
    issueDate: {
      label: '颁发日期',
      tooltip: {
        content: '您获得此证书的日期。',
        importance: '展示您证书的时效性。',
        tips: '使用证书上显示的日期。',
      },
    },
    expiryDate: {
      label: '到期日期',
      tooltip: {
        content: '此证书的到期日期（如适用）。',
        importance: '部分证书需要续期，这表明您在持续更新知识。',
        tips: '确认您的证书是否需要续期，并跟踪到期日期。',
      },
    },
    neverExpires: '永不过期',
  },
  credential: {
    id: {
      label: '证书编号',
      placeholder: '输入证书编号',
      tooltip: {
        content: '您证书的唯一标识符。',
        importance: '有助于验证您证书的真实性。',
        tips: '请与证书或证书页面上显示的内容完全一致地复制。',
      },
    },
    url: {
      label: '证书链接',
      placeholder: '输入证书链接',
      tooltip: {
        content: '在线验证您证书的链接。',
        importance: '可以快速验证您的证书。',
        tips: '如果颁发机构提供了永久验证链接，请使用该链接。',
      },
    },
  },
  isPaid: {
    label: '这是一项付费认证',
    tooltip: {
      content: '标明此证书是否为付费认证。',
      importance: '付费认证通常在雇主眼中更具分量。',
      tips: '免费证书同样有价值，但请谨慎挑选要列入的证书。',
    },
    warning: '部分雇主可能不太看重免费证书。建议只列出最相关的证书。',
  },
  topics: {
    label: '涵盖的主题与技能',
    addButton: '添加主题',
    placeholder: '输入涵盖的主题或技能',
    tooltip: {
      content: '该证书涵盖的关键主题和技能。',
      importance: '展示此证书所验证的具体知识和能力。',
      tips: '列出与您目标职位最相关、最有价值的技能。',
    },
  },
};
