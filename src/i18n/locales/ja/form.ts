export const form = {
  sections: {
    personalInfo: {
      sectionTitle: '個人情報',
      fullName: {
        label: '氏名',
        placeholder: 'フルネームを入力してください',
        tooltip: {
          content: "履歴書に表示したい完全な専門的な名前。",
          importance: "採用担当者が最初に目にする情報で、ATSシステムでの照合に使用されます。",
          tips: "法的名前または一貫した専門的な名前を使用してください。",
        },
      },
      professionalTitle: {
        label: '職業名',
        placeholder: '例：シニアソフトウェアエンジニア',
        tooltip: {
          content: "現在または希望する職位。",
          importance: "採用担当者があなたのキャリアレベルと専門性を素早く理解するのに役立ちます。",
          tips: "創造的なタイトルではなく、業界標準のタイトルを使用してください。",
        },
      },
      location: {
        label: '所在地',
        placeholder: '例：東京都',
        tooltip: {
          content: "現在の都市と国/地域。",
          importance: "職務適格性の判断と、採用担当者があなたが対象市場にいるかを評価するのに重要です。",
          tips: "「都市、国」または「都市、都道府県、国」の形式で。具体的に、ただし完全な住所は含めないでください。",
        },
      },
      email: {
        label: 'メールアドレス',
        placeholder: 'your.name@example.com',
        tooltip: {
          content: "あなたの専門的なメールアドレス。",
          importance: "採用担当者があなたに連絡する主要な方法です。ATSシステムとフォローアップコミュニケーションに不可欠です。",
          tips: "専門的なメールアドレスを使用し、できれば名前を含めてください。カジュアルまたは創造的なアドレスは避けてください。",
        },
      },
      phone: {
        label: '電話番号',
        placeholder: '+81 90 1234 5678',
        tooltip: {
          content: "あなたの連絡先電話番号。",
          importance: "二次的だが重要な連絡方法。一部の採用担当者は初期スクリーニングに電話を好みます。",
          tips: "国際電話の場合は国番号を含めてください。一貫した形式を使用してください。",
        },
      },
      githubUrl: {
        label: 'GitHubリンク',
        placeholder: 'https://github.com/username',
        tooltip: {
          content: "あなたのGitHubプロフィールへのリンク。",
          importance: "オープンソースへの貢献とコーディング活動を示します。多くのテクノロジー企業が特にこれを探しています。",
          tips: "プロフィールが最新で、最高の作品を展示していることを確認してください。",
        },
      },
      linkedinUrl: {
        label: 'LinkedInリンク',
        placeholder: 'https://linkedin.com/in/username',
        tooltip: {
          content: "あなたのLinkedInプロフィールURL。",
          importance: "LinkedInは採用担当者があなたの経験とネットワークを確認する標準的な参照ポイントです。",
          tips: "名前を含むカスタムLinkedIn URLを使用してください。プロフィールを履歴書と同期させてください。",
        },
      },
      portfolioUrl: {
        label: 'ポートフォリオリンク',
        placeholder: 'https://your-portfolio.com',
        tooltip: {
          content: "あなたの個人ウェブサイトまたはポートフォリオへのリンク。",
          importance: "あなたの仕事と個性についてより深い洞察を提供します。GitHubにないプロジェクトを展示するのに最適です。",
          tips: "モバイルフレンドリーで読み込みが速いことを確認してください。最高かつ最も関連性の高い作品を強調してください。",
        },
      },
      willRelocate: {
        label: '転居可能',
        tooltip: {
          content: "仕事の機会のために引っ越す意思があるかどうかを示します。",
          importance: "採用担当者が異なる場所の機会とマッチングするのに役立ちます。より多くの仕事の可能性を開くことができます。",
          tips: "このオプションを選択する際は、ビザ要件と引っ越しコストを考慮してください。",
        },
      },
      bio: {
        label: '自己紹介',
        placeholder: 'あなたの専門知識とキャリア目標を強調した簡単な専門的な要約を書いてください...',
        tooltip: {
          content: "あなたの専門知識とキャリア目標を強調した簡単な専門的な要約。",
          importance: "これはあなたのエレベーターピッチです。採用担当者が最初に読む段落で、あなたの価値提案を素早く理解するのに役立ちます。",
          tips: "3-5文に抑えてください。あなたのユニークな価値提案、主要な成果、キャリアの方向性に焦点を当ててください。業界のキーワードを自然に使用してください。",
        },
      },
    },
    experience: {
      sectionTitle: '職歴',
      addButton: '経験を追加',
    },
    education: {
      sectionTitle: '学歴',
      addButton: '学歴を追加',
    },
  },
};