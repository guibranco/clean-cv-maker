export const workExperience = {
  title: 'Experiência Profissional',
  addButton: 'Adicionar Experiência',
  companyName: {
    label: 'Nome da Empresa',
    placeholder: 'Digite o nome da empresa',
    tooltip: {
      content: 'O nome da empresa onde você trabalhou.',
      importance:
        'Este é um campo chave para sistemas ATS e ajuda recrutadores a verificar seu histórico de emprego.',
      tips: 'Use o nome oficial da empresa, não abreviações ou nomes informais.',
    },
  },
  companyLogo: {
    label: 'URL do Logo da Empresa',
    tooltip: {
      content: 'Uma URL para a imagem do logo da empresa.',
      importance:
        'Adicionar elementos visuais pode tornar seu currículo mais atraente e memorável.',
      tips: 'Use uma imagem de logo profissional e de alta qualidade. Certifique-se de que a URL seja permanente e acessível.',
    },
  },
  companySize: {
    label: 'Tamanho da Empresa',
    placeholder: 'ex., 1-10, 11-50, 51-200, 201-500, 500+',
    tooltip: {
      content: 'O tamanho aproximado da empresa em termos de funcionários.',
      importance:
        'Ajuda recrutadores a entender a escala das organizações com as quais você trabalhou.',
      tips: "Use faixas padrão como '1-10', '11-50', '51-200', '201-500', '500+'",
    },
  },
  industry: {
    label: 'Setor',
    tooltip: {
      content: 'O principal setor ou indústria da empresa.',
      importance:
        'Mostra sua experiência em diferentes setores e ajuda na correspondência com vagas específicas da indústria.',
      tips: 'Use termos padrão do setor que são reconhecidos em sua área.',
    },
  },
  description: {
    label: 'Descrição da Empresa',
    tooltip: {
      content: 'Uma breve descrição do que a empresa faz.',
      importance:
        'Fornece contexto sobre seu ambiente de trabalho e ajuda recrutadores a entender o foco da empresa.',
      tips: 'Mantenha conciso mas informativo. Foque no negócio principal e conquistas da empresa.',
    },
  },
  contractType: {
    label: 'Tipo de Contrato',
    options: {
      fullTime: 'Tempo Integral',
      partTime: 'Meio Período',
      freelance: 'Freelancer',
    },
    tooltip: {
      content: 'O tipo de contrato de trabalho que você tinha.',
      importance:
        'Esclarece seu status de emprego e ajuda a corresponder com oportunidades similares.',
      tips: 'Seja honesto sobre seu tipo de emprego. Cada um tem suas próprias vantagens.',
    },
  },
  workSchema: {
    label: 'Regime de Trabalho',
    options: {
      onSite: 'Presencial',
      remote: 'Remoto',
      hybrid: 'Híbrido',
    },
    tooltip: {
      content: 'Como você realizava seu trabalho (presencial, remoto ou híbrido).',
      importance:
        'A flexibilidade do local de trabalho é cada vez mais importante para empregadores e funcionários.',
      tips: 'Isso pode ser especialmente relevante para busca de trabalhos remotos.',
    },
  },
  dates: {
    startDate: {
      label: 'Data de Início',
      tooltip: {
        content: 'Quando você começou a trabalhar nesta empresa.',
        importance: 'Mostra sua progressão na carreira e ajuda a verificar a duração do emprego.',
        tips: 'Use a data real de início, mesmo para promoções internas ou mudanças de cargo.',
      },
    },
    endDate: {
      label: 'Data de Término',
      tooltip: {
        content: 'Quando você terminou de trabalhar nesta empresa.',
        importance: 'Completa sua linha do tempo de emprego e mostra estabilidade profissional.',
        tips: "Use a caixa de seleção 'Atual' para sua posição presente.",
      },
    },
    current: 'Atual',
  },
  role: {
    title: {
      label: 'Cargo',
      tooltip: {
        content: 'Seu cargo ou posição nesta função.',
        importance:
          'Os títulos dos cargos são fundamentais para correspondência ATS e mostrar progressão na carreira.',
        tips: 'Use títulos padrão da indústria. Evite títulos específicos da empresa ou criativos.',
      },
    },
    description: {
      label: 'Descrição do Cargo',
      tooltip: {
        content: 'Um resumo de suas responsabilidades e escopo nesta função.',
        importance: 'Aqui é onde você pode detalhar seu trabalho diário e impacto.',
        tips: 'Use verbos de ação e quantifique resultados quando possível. Foque nas responsabilidades mais significativas.',
      },
    },
    achievements: {
      label: 'Principais Conquistas',
      addButton: 'Adicionar Conquista',
      placeholder: 'Conquista',
      tooltip: {
        content: 'Realizações e sucessos específicos nesta função.',
        importance: 'Conquistas demonstram seu impacto e valor para potenciais empregadores.',
        tips: 'Use métricas e números quando possível. Foque em resultados e impacto em vez de apenas responsabilidades.',
      },
    },
  },
};
