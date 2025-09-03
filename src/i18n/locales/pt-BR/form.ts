export const form = {
  sections: {
    personalInfo: {
      sectionTitle: 'Informações Pessoais',
      fullName: {
        label: 'Nome Completo',
        placeholder: 'Digite seu nome completo',
        tooltip: {
          content: 'Seu nome profissional completo como você gostaria que aparecesse no currículo.',
          importance:
            'Por que importa: É geralmente a primeira coisa que os recrutadores veem e é usado para correspondência em sistemas ATS.',
          tips: 'Dicas: Use seu nome legal ou um nome profissional consistente.',
        },
      },
      professionalTitle: {
        label: 'Cargo Profissional',
        placeholder: 'ex., Engenheiro de Software Sênior',
        tooltip: {
          content: 'Seu cargo atual ou desejado.',
          importance:
            'Por que importa: Ajuda os recrutadores a entenderem rapidamente seu nível profissional.',
          tips: 'Dicas: Use títulos padrão da indústria em vez de títulos criativos.',
        },
      },
      location: {
        label: 'Localização',
        placeholder: 'ex., São Paulo, SP',
        tooltip: {
          content: 'Sua cidade e estado/país atual.',
          importance:
            'Por que importa: A localização é crucial para determinar a elegibilidade do trabalho e ajuda os recrutadores a avaliar se você está em seu mercado-alvo.',
          tips: "Dicas: Formate como 'Cidade, Estado' ou 'Cidade, País'. Seja específico, mas não inclua o endereço completo.",
        },
      },
      email: {
        label: 'E-mail',
        placeholder: 'seu.nome@exemplo.com',
        tooltip: {
          content: 'Seu endereço de e-mail profissional.',
          importance:
            'Por que importa: Esta é a principal forma de contato dos recrutadores. É essencial para sistemas ATS e comunicações de acompanhamento.',
          tips: 'Dicas: Use um endereço de e-mail profissional, preferencialmente com seu nome. Evite endereços casuais ou criativos.',
        },
      },
      phone: {
        label: 'Telefone',
        placeholder: '+55 (11) 98765-4321',
        tooltip: {
          content: 'Seu número de telefone para contato.',
          importance:
            'Por que importa: Um método secundário, mas crucial, de contato. Alguns recrutadores preferem ligar para triagens iniciais.',
          tips: 'Dicas: Inclua o código do país para aplicações internacionais. Mantenha o formato consistente.',
        },
      },
      githubUrl: {
        label: 'URL do GitHub',
        placeholder: 'https://github.com/seunome',
        tooltip: {
          content: 'Link para seu perfil do GitHub.',
          importance:
            'Por que importa: Mostra suas contribuições open-source e atividade de código. Muitas empresas de tecnologia procuram especificamente por isso.',
          tips: 'Dicas: Certifique-se de que seu perfil está atualizado e mostra seus melhores trabalhos. Fixe repositórios relevantes.',
        },
      },
      linkedinUrl: {
        label: 'URL do LinkedIn',
        placeholder: 'https://linkedin.com/in/seunome',
        tooltip: {
          content: 'URL do seu perfil do LinkedIn.',
          importance:
            'Por que importa: LinkedIn é um ponto de referência padrão para recrutadores verificarem sua experiência e rede.',
          tips: 'Dicas: Use uma URL personalizada do LinkedIn com seu nome. Mantenha seu perfil sincronizado com seu currículo.',
        },
      },
      portfolioUrl: {
        label: 'URL do Portfólio',
        placeholder: 'https://seu-portfolio.com',
        tooltip: {
          content: 'Link para seu site pessoal ou portfólio.',
          importance:
            'Por que importa: Fornece uma visão mais profunda do seu trabalho e personalidade. Ótimo para mostrar projetos que não estão no GitHub.',
          tips: 'Dicas: Certifique-se de que é responsivo e carrega rapidamente. Destaque seus melhores e mais relevantes trabalhos.',
        },
      },
      willRelocate: {
        label: 'Disponível para Realocação',
        tooltip: {
          content: 'Indica se você está disposto a se mudar para uma oportunidade de trabalho.',
          importance:
            'Por que importa: Ajuda os recrutadores a combinar você com oportunidades em diferentes locais. Pode abrir mais possibilidades de trabalho.',
          tips: 'Dicas: Considere requisitos de visto e custos de realocação ao selecionar esta opção.',
        },
      },
      bio: {
        label: 'Biografia Profissional',
        placeholder:
          'Escreva um breve resumo profissional destacando sua experiência e objetivos de carreira...',
        tooltip: {
          content:
            'Um breve resumo profissional destacando sua experiência e objetivos de carreira.',
          importance:
            'Por que importa: Este é seu elevator pitch. É frequentemente o primeiro parágrafo que os recrutadores leem e os ajuda a entender rapidamente sua proposta de valor.',
          tips: 'Dicas: Mantenha entre 3-5 frases. Foque em sua proposta de valor única, principais conquistas e direção de carreira. Use palavras-chave da indústria naturalmente.',
        },
      },
    },
    experience: {
      sectionTitle: 'Experiência Profissional',
      addButton: 'Adicionar Experiência',
      experienceYears: {
        title: 'Anos de Experiência',
        addButton: 'Adicionar Experiência',
        technology: {
          label: 'Tecnologia ou Área',
          placeholder: 'Digite a tecnologia ou área',
        },
        startDate: {
          label: 'Data de Início',
          tooltip: {
            content: 'Quando você começou a trabalhar com esta tecnologia.',
            importance:
              'Por que importa: Mostra a profundidade da sua experiência em áreas específicas.',
            tips: 'Dicas: Use a data em que você começou a trabalhar profissionalmente com a tecnologia.',
          },
        },
      },
      projectsWorked: {
        title: 'Projetos em que Trabalhei',
        addButton: 'Adicionar Projeto',
        placeholder: 'Descrição do projeto',
        tooltip: {
          content: 'Lista de projetos significativos em que você trabalhou.',
          importance:
            'Por que importa: Demonstra sua experiência prática e diversidade de projetos.',
          tips: 'Dicas: Inclua nomes de projetos e breves descrições que mostrem suas habilidades.',
        },
      },
    },
    education: {
      sectionTitle: 'Formação Acadêmica',
      addButton: 'Adicionar Formação',
    },
    languages: {
      title: 'Idiomas',
      addButton: 'Adicionar Idioma',
      language: {
        label: 'Idioma',
        placeholder: 'Nome do idioma',
      },
      proficiency: {
        label: 'Nível de Proficiência',
        tooltip: {
          content: 'Seu nível de proficiência no idioma.',
          importance:
            'Por que importa: Ajuda empregadores a entender suas habilidades de comunicação em diferentes idiomas.',
          tips: 'Dicas: Seja honesto sobre seu nível. Considere usar certificações de idiomas como referência.',
        },
      },
    },
  },
};
