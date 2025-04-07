export const certifications = {
  title: 'Certificações',
  addButton: 'Adicionar Certificado',
  name: {
    label: 'Nome do Certificado',
    placeholder: 'Digite o nome do certificado',
    tooltip: {
      content: "O nome do seu certificado ou certificação.",
      importance: "Isso é o que aparece no seu currículo e ajuda recrutadores a entender suas qualificações.",
      tips: "Use o nome oficial da certificação como aparece em sua credencial.",
    },
  },
  issuer: {
    label: 'Organização Emissora',
    placeholder: 'Digite a organização emissora',
    tooltip: {
      content: "A organização que emitiu o certificado.",
      importance: "A credibilidade do emissor adiciona peso à sua certificação.",
      tips: "Use o nome oficial da organização emissora.",
    },
  },
  issuerLogo: {
    label: 'URL do Logo do Emissor',
    tooltip: {
      content: "URL para o logo da organização emissora.",
      importance: "A representação visual ajuda no reconhecimento rápido.",
      tips: "Use um logo oficial de alta qualidade. Certifique-se de que a URL seja permanente e acessível.",
    },
  },
  dates: {
    issueDate: {
      label: 'Data de Emissão',
      tooltip: {
        content: "Quando você recebeu este certificado.",
        importance: "Mostra a atualidade das suas certificações.",
        tips: "Use a data mostrada no seu certificado.",
      },
    },
    expiryDate: {
      label: 'Data de Expiração',
      tooltip: {
        content: "Quando este certificado expira, se aplicável.",
        importance: "Algumas certificações requerem renovação, mostrando que você mantém conhecimento atualizado.",
        tips: "Verifique se sua certificação precisa de renovação e acompanhe a data de expiração.",
      },
    },
    neverExpires: 'Nunca expira',
  },
  credential: {
    id: {
      label: 'ID da Credencial',
      placeholder: 'Digite o ID da credencial',
      tooltip: {
        content: "O identificador único do seu certificado.",
        importance: "Ajuda a verificar a autenticidade da sua certificação.",
        tips: "Copie exatamente como aparece no seu certificado ou página da credencial.",
      },
    },
    url: {
      label: 'URL da Credencial',
      placeholder: 'Digite a URL da credencial',
      tooltip: {
        content: "Link para verificar seu certificado online.",
        importance: "Permite verificação rápida das suas credenciais.",
        tips: "Use a URL de verificação permanente se fornecida pelo emissor.",
      },
    },
  },
  isPaid: {
    label: 'Esta é uma certificação paga',
    tooltip: {
      content: "Indique se esta foi uma certificação paga.",
      importance: "Certificações pagas geralmente têm mais peso para empregadores.",
      tips: "Certificações gratuitas ainda podem ser valiosas, mas seja seletivo sobre quais incluir.",
    },
    warning: "Certificações gratuitas podem ser vistas com menos favorecimento por alguns empregadores. Considere incluir apenas as mais relevantes.",
  },
  topics: {
    label: 'Tópicos e Habilidades Abordados',
    addButton: 'Adicionar Tópico',
    placeholder: 'Digite um tópico ou habilidade abordada',
    tooltip: {
      content: "Principais tópicos e habilidades abordados na certificação.",
      importance: "Mostra o conhecimento específico e competências validadas por esta certificação.",
      tips: "Inclua as habilidades mais relevantes e valiosas para as funções que você almeja.",
    },
  },
};