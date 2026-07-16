export const certifications = {
  title: '資格',
  addButton: '資格を追加',
  name: {
    label: '資格名',
    placeholder: '資格名を入力してください',
    tooltip: {
      content: '取得した資格や認定の名称。',
      importance: '履歴書に表示される項目で、採用担当者があなたの資格を理解するのに役立ちます。',
      tips: '証明書に記載されている正式な資格名を使用してください。',
    },
  },
  issuer: {
    label: '発行機関',
    placeholder: '発行機関を入力してください',
    tooltip: {
      content: '資格を発行した機関。',
      importance: '発行機関の信頼性が、あなたの資格の説得力を高めます。',
      tips: '発行機関の正式名称を使用してください。',
    },
  },
  issuerLogo: {
    label: '発行機関ロゴURL',
    tooltip: {
      content: '発行機関のロゴへのURL。',
      importance: '視覚的な表現は素早い認識に役立ちます。',
      tips: '高品質な公式ロゴを使用してください。URLが永続的でアクセス可能であることを確認してください。',
    },
  },
  dates: {
    issueDate: {
      label: '発行日',
      tooltip: {
        content: 'この資格を取得した日付。',
        importance: '資格の新しさを示します。',
        tips: '証明書に記載されている日付を使用してください。',
      },
    },
    expiryDate: {
      label: '有効期限',
      tooltip: {
        content: '該当する場合、この資格の有効期限。',
        importance: '一部の資格は更新が必要で、最新の知識を維持していることを示します。',
        tips: '資格の更新が必要かどうかを確認し、有効期限を管理してください。',
      },
    },
    neverExpires: '無期限',
  },
  credential: {
    id: {
      label: '資格ID',
      placeholder: '資格IDを入力してください',
      tooltip: {
        content: 'あなたの証明書の一意の識別子。',
        importance: '資格の信憑性を証明するのに役立ちます。',
        tips: '証明書または資格情報ページに記載されている通りに正確にコピーしてください。',
      },
    },
    url: {
      label: '資格情報URL',
      placeholder: '資格情報URLを入力してください',
      tooltip: {
        content: 'オンラインで資格を確認するためのリンク。',
        importance: '資格情報の迅速な確認を可能にします。',
        tips: '発行機関から提供されている場合は、永続的な検証用URLを使用してください。',
      },
    },
  },
  isPaid: {
    label: 'これは有料の資格です',
    tooltip: {
      content: 'この資格が有料であったかどうかを示します。',
      importance: '有料の資格は、雇用主からより重視される傾向があります。',
      tips: '無料の資格も価値がある場合がありますが、掲載するものは選んでください。',
    },
    warning:
      '無料の資格は、一部の雇用主からあまり高く評価されない場合があります。最も関連性の高いものだけを含めることを検討してください。',
  },
  topics: {
    label: '対象トピック・スキル',
    addButton: 'トピックを追加',
    placeholder: '対象となるトピックやスキルを入力してください',
    tooltip: {
      content: 'この資格で扱われる主なトピックやスキル。',
      importance: 'この資格によって証明される具体的な知識と能力を示します。',
      tips: '志望する職種にとって最も関連性が高く価値のあるスキルを含めてください。',
    },
  },
};
