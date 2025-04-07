export const form = {
  sections: {
    personalInfo: {
      sectionTitle: '個人情報',
      fullName: {
        label: '氏名',
        placeholder: 'フルネームを入力してください',
        tooltip: {
          content: "履歴書に表示したい完全な専門的な名前。",
          importance: "重要な理由：採用担当者が最初に目にする情報で、ATSシステムでの照合に使用されます。",
          tips: "ヒント：法的名前または一貫した専門的な名前を使用してください。",
        },
      },
      professionalTitle: {
        label: '職業名',
        placeholder: '例：シニアソフトウェアエンジニア',
        tooltip: {
          content: "現在または希望する職位。",
          importance: "重要な理由：採用担当者があなたのキャリアレベルと専門性を素早く理解するのに役立ちます。",
          tips: "ヒント：創造的なタイトルではなく、業界標準のタイトルを使用してください。",
        },
      },
    },
    experience: {
      title: '職歴',
      addButton: '経験を追加',
    },
    education: {
      title: '学歴',
      addButton: '学歴を追加',
    },
  },
};