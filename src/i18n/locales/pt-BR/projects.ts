export const projects = {
  title: 'Projetos',
  addButton: 'Adicionar Projeto',
  name: {
    label: 'Nome do Projeto',
    placeholder: 'Digite o nome do projeto',
    tooltip: {
      content: "O nome do seu projeto.",
      importance: "Torna seu projeto facilmente identificável e memorável.",
      tips: "Use um nome claro e descritivo que reflita o propósito do projeto.",
    },
  },
  icon: {
    label: 'URL do Ícone do Projeto',
    tooltip: {
      content: "URL para o ícone ou logo do projeto.",
      importance: "A representação visual ajuda seu projeto a se destacar.",
      tips: "Use uma imagem quadrada com fundo transparente. Formatos SVG ou PNG funcionam melhor.",
    },
  },
  description: {
    label: 'Descrição do Projeto',
    placeholder: 'Descreva seu projeto...',
    tooltip: {
      content: "Uma breve descrição do que seu projeto faz.",
      importance: "Ajuda os leitores a entenderem rapidamente o propósito e valor do seu projeto.",
      tips: "Foque no problema que ele resolve e recursos principais. Mantenha conciso mas informativo.",
    },
  },
  sourceCode: {
    label: 'Código fonte é aberto',
    url: {
      label: 'URL do Código Fonte',
      tooltip: {
        content: "Link para o repositório do código fonte do seu projeto.",
        importance: "Permite que outros revisem seu código e implementação.",
        tips: "Geralmente uma URL do GitHub, GitLab ou Bitbucket.",
      },
    },
  },
  demo: {
    label: 'Demo disponível',
    url: {
      label: 'URL da Demo',
      tooltip: {
        content: "Link para uma demonstração ao vivo do seu projeto.",
        importance: "Permite que outros experimentem seu projeto imediatamente.",
        tips: "Certifique-se de que a demo esteja estável e represente bem seu projeto.",
      },
    },
  },
  documentation: {
    label: 'Documentação disponível',
    url: {
      label: 'URL da Documentação',
      tooltip: {
        content: "Link para a documentação do seu projeto.",
        importance: "Ajuda outros a entenderem como usar seu projeto.",
        tips: "Considere usar plataformas como ReadTheDocs ou GitHub Pages.",
      },
    },
  },
  startDate: {
    label: 'Data de Início',
    tooltip: {
      content: "Quando você começou a trabalhar neste projeto.",
      importance: "Mostra a linha do tempo do projeto e sua progressão de experiência.",
      tips: "Use o mês em que você fez sua primeira contribuição significativa.",
    },
  },
  techStack: {
    label: 'Stack Tecnológica',
    addCustom: {
      placeholder: 'Adicionar tecnologia personalizada',
      button: 'Adicionar',
    },
    tooltip: {
      content: "As tecnologias utilizadas neste projeto.",
      importance: "Mostra sua expertise técnica e complexidade do projeto.",
      tips: "Selecione até 10 tecnologias. Adicione personalizadas se necessário.",
    },
    limit: {
      text: "tecnologias selecionadas",
      max: "Máximo de 10 tecnologias permitidas",
    },
    suggested: "Tecnologias sugeridas:",
  },
};