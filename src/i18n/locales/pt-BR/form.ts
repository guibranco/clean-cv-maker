export const form = {
  sections: {
    personalInfo: {
      sectionTitle: 'Informações Pessoais',
      fullName: {
        label: 'Nome Completo',
        placeholder: 'Digite seu nome completo',
        tooltip: {
          content: "Seu nome profissional completo como você gostaria que aparecesse no currículo.",
          importance: "Este é geralmente o primeiro item que os recrutadores veem e é usado para correspondência em sistemas ATS.",
          tips: "Use seu nome legal ou um nome profissional consistente.",
        },
      },
      professionalTitle: {
        label: 'Cargo Profissional',
        placeholder: 'ex., Engenheiro de Software Sênior',
        tooltip: {
          content: "Seu cargo atual ou desejado.",
          importance: "Ajuda os recrutadores a entenderem rapidamente seu nível profissional e experiência.",
          tips: "Use títulos padrão da indústria em vez de títulos criativos.",
        },
      },
      location: {
        label: 'Localização',
        placeholder: 'ex., São Paulo, SP',
        tooltip: {
          content: "Sua cidade e país/região atual.",
          importance: "Crucial para determinar a elegibilidade do trabalho e ajuda os recrutadores a avaliarem se você está em seu mercado-alvo.",
          tips: "Formato 'Cidade, País' ou 'Cidade, Estado, País'. Seja específico, mas não inclua o endereço completo.",
        },
      },
      email: {
        label: 'E-mail',
        placeholder: 'seu.nome@exemplo.com',
        tooltip: {
          content: "Seu endereço de e-mail profissional.",
          importance: "Esta é a principal forma de contato dos recrutadores. É essencial para sistemas ATS e comunicações de acompanhamento.",
          tips: "Use um endereço de e-mail profissional, preferencialmente com seu nome. Evite endereços casuais ou criativos.",
        },
      },
      phone: {
        label: 'Telefone',
        placeholder: '+55 11 98765-4321',
        tooltip: {
          content: "Seu número de telefone para contato.",
          importance: "Um método de contato secundário, mas crucial. Alguns recrutadores preferem ligar para triagens iniciais.",
          tips: "Inclua o código do país para aplicações internacionais. Mantenha um formato consistente.",
        },
      },
      githubUrl: {
        label: 'URL do GitHub',
        placeholder: 'https://github.com/username',
        tooltip: {
          content: "Link para seu perfil do GitHub.",
          importance: "Mostra suas contribuições open source e atividade de programação. Muitas empresas de tecnologia procuram especificamente por isso.",
          tips: "Certifique-se de que seu perfil esteja atualizado e mostre seu melhor trabalho. Fixe repositórios relevantes.",
        },
      },
      linkedinUrl: {
        label: 'URL do LinkedIn',
        placeholder: 'https://linkedin.com/in/username',
        tooltip: {
          content: "URL do seu perfil do LinkedIn.",
          importance: "LinkedIn é um ponto de referência padrão para recrutadores verificarem sua experiência e rede.",
          tips: "Use uma URL personalizada do LinkedIn com seu nome. Mantenha seu perfil sincronizado com seu currículo.",
        },
      },
      portfolioUrl: {
        label: 'URL do Portfólio',
        placeholder: 'https://seu-portfolio.com',
        tooltip: {
          content: "Link para seu site pessoal ou portfólio.",
          importance: "Fornece uma visão mais profunda do seu trabalho e personalidade. Ótimo para mostrar projetos que não estão no GitHub.",
          tips: "Certifique-se de que seja responsivo e carregue rapidamente. Destaque seus melhores e mais relevantes trabalhos.",
        },
      },
      willRelocate: {
        label: 'Disponível para Relocação',
        tooltip: {
          content: "Indica se você está disposto a se mudar para uma oportunidade de trabalho.",
          importance: "Ajuda os recrutadores a corresponderem você com oportunidades em diferentes locais. Pode abrir mais possibilidades de trabalho.",
          tips: "Considere requisitos de visto e custos de relocação ao selecionar esta opção.",
        },
      },
      bio: {
        label: 'Biografia Profissional',
        placeholder: 'Escreva um breve resumo profissional destacando sua experiência e objetivos de carreira...',
        tooltip: {
          content: "Um breve resumo profissional destacando sua experiência e objetivos de carreira.",
          importance: "Este é seu elevator pitch. É frequentemente o primeiro parágrafo que os recrutadores leem e os ajuda a entender rapidamente sua proposta de valor.",
          tips: "Mantenha entre 3-5 frases. Foque em sua proposta de valor única, principais conquistas e direção de carreira. Use palavras-chave da indústria naturalmente.",
        },
      },
    },
    experience: {
      sectionTitle: 'Experiência Profissional',
      addButton: 'Adicionar Experiência',
    },
    education: {
      sectionTitle: 'Educação',
      addButton: 'Adicionar Educação',
    },
  },
};