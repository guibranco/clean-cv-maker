export const form = {
  sections: {
    personalInfo: {
      title: 'Informações Pessoais',
      fullName: {
        label: 'Nome Completo',
        placeholder: 'Digite seu nome completo',
        tooltip: {
          content: "Seu nome profissional completo como você gostaria que aparecesse no currículo.",
          importance: "Por que importa: É geralmente a primeira coisa que os recrutadores veem e é usado para correspondência em sistemas ATS.",
          tips: "Dicas: Use seu nome legal ou um nome profissional consistente.",
        },
      },
      title: {
        label: 'Cargo Profissional',
        placeholder: 'ex., Engenheiro de Software Sênior',
        tooltip: {
          content: "Seu cargo atual ou desejado.",
          importance: "Por que importa: Ajuda os recrutadores a entenderem rapidamente seu nível profissional.",
          tips: "Dicas: Use títulos padrão da indústria em vez de títulos criativos.",
        },
      },
    },
    experience: {
      title: 'Experiência Profissional',
      addButton: 'Adicionar Experiência',
    },
    education: {
      title: 'Educação',
      addButton: 'Adicionar Educação',
    },
  },
};