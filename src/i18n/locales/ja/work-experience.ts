export const workExperience = {
  title: '職歴',
  addButton: '経験を追加',
  companyName: {
    label: '会社名',
    placeholder: '会社名を入力してください',
    tooltip: {
      content: '勤務していた会社の名称。',
      importance:
        'ATSシステムにとって重要な項目であり、採用担当者があなたの職歴を確認するのに役立ちます。',
      tips: '略称や非公式な名称ではなく、会社の正式名称を使用してください。',
    },
  },
  companyLogo: {
    label: '会社ロゴURL',
    tooltip: {
      content: '会社のロゴ画像へのURL。',
      importance: '視覚的な要素を加えることで、履歴書をより魅力的で記憶に残るものにできます。',
      tips: '高品質でプロフェッショナルなロゴ画像を使用してください。URLが永続的でアクセス可能であることを確認してください。',
    },
  },
  companySize: {
    label: '会社規模',
    placeholder: '例：1-10、11-50、51-200、201-500、500+',
    tooltip: {
      content: '従業員数で見た会社のおおよその規模。',
      importance: '採用担当者があなたが働いてきた組織の規模を理解するのに役立ちます。',
      tips: '「1-10」「11-50」「51-200」「201-500」「500+」のような標準的な範囲を使用してください。',
    },
  },
  industry: {
    label: '業界',
    tooltip: {
      content: '会社の主な業界または分野。',
      importance:
        '異なる業界での経験を示し、業界特有の求人とのマッチングに役立ちます。',
      tips: 'あなたの分野で認識されている標準的な業界用語を使用してください。',
    },
  },
  description: {
    label: '会社の説明',
    tooltip: {
      content: 'その会社が何を行っているかについての簡潔な説明。',
      importance:
        'あなたの職場環境についての背景情報を提供し、採用担当者が会社の事業内容を理解するのに役立ちます。',
      tips: '簡潔かつ情報量のある内容にしてください。会社の主な事業と実績に焦点を当ててください。',
    },
  },
  contractType: {
    label: '雇用形態',
    options: {
      fullTime: '正社員',
      partTime: 'パートタイム',
      freelance: 'フリーランス',
    },
    tooltip: {
      content: 'あなたの雇用契約の種類。',
      importance:
        'あなたの雇用形態を明確にし、類似の求人とのマッチングに役立ちます。',
      tips: '雇用形態について正直に記載してください。それぞれに利点があります。',
    },
  },
  workSchema: {
    label: '勤務形態',
    options: {
      onSite: '出社',
      remote: 'リモート',
      hybrid: 'ハイブリッド',
    },
    tooltip: {
      content: '勤務方法（出社、リモート、またはハイブリッド）。',
      importance:
        '勤務地の柔軟性は、雇用主・従業員の双方にとってますます重要になっています。',
      tips: 'リモート求人を探す際に特に重要になる場合があります。',
    },
  },
  dates: {
    startDate: {
      label: '開始日',
      tooltip: {
        content: 'この会社で働き始めた時期。',
        importance: 'あなたのキャリアの推移を示し、勤務期間の確認に役立ちます。',
        tips: '社内昇進や職務変更の場合でも、実際の開始日を使用してください。',
      },
    },
    endDate: {
      label: '終了日',
      tooltip: {
        content: 'この会社での勤務を終えた時期。',
        importance: 'あなたの職歴のタイムラインを完成させ、職の安定性を示します。',
        tips: '現在の職位については「現在」チェックボックスを使用してください。',
      },
    },
    current: '現在',
  },
  role: {
    title: {
      label: '役職名',
      tooltip: {
        content: 'この役割におけるあなたの職位または役職。',
        importance: '役職名はATSマッチングとキャリアの推移を示す上で重要です。',
        tips: '業界標準の役職名を使用してください。会社独自または創造的な役職名は避けてください。',
      },
    },
    description: {
      label: '役割の説明',
      tooltip: {
        content: 'この役割における責任範囲と業務内容の概要。',
        importance: '日々の業務内容と成果を詳しく説明できる項目です。',
        tips: '可能であれば行動を表す動詞と定量的な成果を使用してください。最も重要な責任に焦点を当ててください。',
      },
    },
    achievements: {
      label: '主な実績',
      addButton: '実績を追加',
      placeholder: '実績',
      tooltip: {
        content: 'この役割における具体的な成果と成功事例。',
        importance: '実績は、あなたが潜在的な雇用主に与える影響と価値を示します。',
        tips: '可能な限り指標や数値を使用してください。責任範囲だけでなく、結果と影響に焦点を当ててください。',
      },
    },
  },
};
