export const projects = {
  title: 'プロジェクト',
  addButton: 'プロジェクトを追加',
  name: {
    label: 'プロジェクト名',
    placeholder: 'プロジェクト名を入力してください',
    tooltip: {
      content: 'あなたのプロジェクトの名称。',
      importance: 'プロジェクトを容易に識別・記憶しやすくします。',
      tips: 'プロジェクトの目的を反映した、明確で説明的な名前を使用してください。',
    },
  },
  icon: {
    label: 'プロジェクトアイコンURL',
    tooltip: {
      content: 'プロジェクトのアイコンまたはロゴへのURL。',
      importance: '視覚的な表現はプロジェクトを目立たせるのに役立ちます。',
      tips: '背景が明確な正方形の画像を使用してください。SVGまたはPNG形式が最適です。',
    },
  },
  description: {
    label: 'プロジェクトの説明',
    placeholder: 'プロジェクトについて説明してください...',
    tooltip: {
      content: 'あなたのプロジェクトが何を行うかについての簡潔な説明。',
      importance: '読者がプロジェクトの目的と価値を素早く理解するのに役立ちます。',
      tips: '解決する課題と主な機能に焦点を当ててください。簡潔かつ情報量のある内容にしてください。',
    },
  },
  sourceCode: {
    label: 'ソースコードは公開されています',
    url: {
      label: 'ソースコードURL',
      tooltip: {
        content: 'プロジェクトのソースコードリポジトリへのリンク。',
        importance: '他者があなたのコードと実装を確認できるようにします。',
        tips: '通常はGitHub、GitLab、またはBitbucketのリポジトリURLです。',
      },
    },
  },
  demo: {
    label: 'デモが利用可能です',
    url: {
      label: 'デモURL',
      tooltip: {
        content: 'プロジェクトのライブデモへのリンク。',
        importance: '他者があなたのプロジェクトをすぐに試せるようにします。',
        tips: 'デモが安定しており、プロジェクトを適切に表現していることを確認してください。',
      },
    },
  },
  documentation: {
    label: 'ドキュメントが利用可能です',
    url: {
      label: 'ドキュメントURL',
      tooltip: {
        content: 'プロジェクトのドキュメントへのリンク。',
        importance: '他者があなたのプロジェクトの使い方を理解するのに役立ちます。',
        tips: 'ReadTheDocsやGitHub Pagesなどのプラットフォームの利用を検討してください。',
      },
    },
  },
  startDate: {
    label: '開始日',
    tooltip: {
      content: 'このプロジェクトに着手した時期。',
      importance: 'プロジェクトのタイムラインとあなたの経験の推移を示します。',
      tips: '最初に重要な貢献を行った月を使用してください。',
    },
  },
  techStack: {
    label: '技術スタック',
    addCustom: {
      placeholder: 'カスタム技術を追加',
      button: '追加',
    },
    tooltip: {
      content: 'このプロジェクトで使用された技術。',
      importance: 'あなたの技術的専門性とプロジェクトの複雑さを示します。',
      tips: '最大10個の技術を選択してください。必要に応じてカスタム項目を追加してください。',
    },
    limit: {
      text: '個の技術が選択されています',
      max: '技術は最大10個まで選択できます',
    },
    suggested: 'おすすめの技術：',
  },
};
