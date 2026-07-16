export const form = {
  sections: {
    personalInfo: {
      sectionTitle: '個人情報',
      fullName: {
        label: '氏名',
        placeholder: 'フルネームを入力してください',
        tooltip: {
          content: '履歴書に表示したい完全な専門的な名前。',
          importance:
            '重要な理由：採用担当者が最初に目にする情報で、ATSシステムでの照合に使用されます。',
          tips: 'ヒント：法的名前または一貫した専門的な名前を使用してください。',
        },
      },
      professionalTitle: {
        label: '職業名',
        placeholder: '例：シニアソフトウェアエンジニア',
        tooltip: {
          content: '現在または希望する職位。',
          importance:
            '重要な理由：採用担当者があなたのキャリアレベルと専門性を素早く理解するのに役立ちます。',
          tips: 'ヒント：創造的なタイトルではなく、業界標準のタイトルを使用してください。',
        },
      },
      location: {
        label: '所在地',
        placeholder: '例：東京都',
        tooltip: {
          content: '現在お住まいの都市と国・地域。',
          importance:
            '重要な理由：所在地は就業資格を判断する上で重要であり、採用担当者が対象市場に該当するかどうかを判断するのに役立ちます。',
          tips: 'ヒント：「都市, 国」または「都市, 都道府県, 国」の形式で記入してください。具体的にしつつ、住所の詳細は記載しないでください。',
        },
      },
      email: {
        label: 'メールアドレス',
        placeholder: 'your.name@example.com',
        tooltip: {
          content: 'あなたの職業用メールアドレス。',
          importance:
            '重要な理由：採用担当者があなたに連絡する主な手段です。ATSシステムやフォローアップの連絡に不可欠です。',
          tips: 'ヒント：できれば氏名を含む、プロフェッショナルなメールアドレスを使用してください。カジュアルまたは奇抜なアドレスは避けてください。',
        },
      },
      phone: {
        label: '電話番号',
        placeholder: '+81 90 1234 5678',
        tooltip: {
          content: '連絡先の電話番号。',
          importance:
            '重要な理由：補助的ながら欠かせない連絡手段です。採用担当者の中には、初回選考で電話を好む場合もあります。',
          tips: 'ヒント：海外からの応募の場合は国番号を含めてください。表記は統一してください（例：+81 90 1234 5678）。',
        },
      },
      githubUrl: {
        label: 'GitHub URL',
        placeholder: 'https://github.com/username',
        tooltip: {
          content: 'あなたのGitHubプロフィールへのリンク。',
          importance:
            '重要な理由：オープンソースへの貢献やコーディング活動を示します。多くのテクノロジー企業が特にこれを重視します。',
          tips: 'ヒント：プロフィールを最新の状態に保ち、最も優れた成果を紹介してください。関連するリポジトリをピン留めしてください。',
        },
      },
      linkedinUrl: {
        label: 'LinkedIn URL',
        placeholder: 'https://linkedin.com/in/username',
        tooltip: {
          content: 'あなたのLinkedInプロフィールのURL。',
          importance:
            '重要な理由：LinkedInは、採用担当者があなたの経験や人脈を確認するための標準的な参照先です。',
          tips: 'ヒント：氏名を含むカスタムLinkedIn URLを使用してください。プロフィールを履歴書と同期させておいてください。',
        },
      },
      portfolioUrl: {
        label: 'ポートフォリオURL',
        placeholder: 'https://your-portfolio.com',
        tooltip: {
          content: 'あなたの個人サイトやポートフォリオへのリンク。',
          importance:
            '重要な理由：あなたの作品や人柄をより深く知ってもらうことができます。GitHubにないプロジェクトを紹介するのに最適です。',
          tips: 'ヒント：モバイル対応で読み込みが速いことを確認してください。最も優れた、関連性の高い作品を強調してください。',
        },
      },
      willRelocate: {
        label: '転勤・移住可能',
        tooltip: {
          content: '就業機会のために転居する意志があるかどうかを示します。',
          importance:
            '重要な理由：採用担当者が異なる地域の求人とあなたをマッチングするのに役立ちます。より多くの求人の可能性が広がります。',
          tips: 'ヒント：このオプションを選択する際は、ビザの要件や引っ越し費用を考慮してください。',
        },
      },
      bio: {
        label: '職務経歴要約',
        placeholder:
          'あなたの専門性とキャリア目標を強調した簡潔な職務要約を記入してください...',
        tooltip: {
          content: 'あなたの専門性とキャリア目標を強調した簡潔な職務要約。',
          importance:
            '重要な理由：これはあなたのエレベーターピッチです。採用担当者が最初に読む段落であることが多く、あなたの価値提案を素早く理解する助けになります。',
          tips: 'ヒント：3〜5文程度に収めてください。独自の価値提案、主な実績、キャリアの方向性に焦点を当ててください。業界のキーワードを自然に使用してください。',
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
