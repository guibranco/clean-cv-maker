export const certifications = {
  title: 'Certifications',
  addButton: 'Ajouter un Certificat',
  name: {
    label: 'Nom du Certificat',
    placeholder: 'Entrez le nom du certificat',
    tooltip: {
      content: 'Le nom de votre certificat ou certification.',
      importance:
        "C'est ce qui apparaît sur votre CV et aide les recruteurs à comprendre vos qualifications.",
      tips: "Utilisez le nom officiel de la certification tel qu'il apparaît sur votre justificatif.",
    },
  },
  issuer: {
    label: 'Organisme Émetteur',
    placeholder: "Entrez l'organisme émetteur",
    tooltip: {
      content: "L'organisme qui a délivré le certificat.",
      importance: "La crédibilité de l'émetteur renforce la valeur de votre certification.",
      tips: "Utilisez le nom officiel de l'organisme émetteur.",
    },
  },
  issuerLogo: {
    label: "URL du Logo de l'Émetteur",
    tooltip: {
      content: "URL du logo de l'organisme émetteur.",
      importance: 'La représentation visuelle aide à une reconnaissance rapide.',
      tips: "Utilisez un logo officiel de haute qualité. Assurez-vous que l'URL est permanente et accessible.",
    },
  },
  dates: {
    issueDate: {
      label: "Date d'Émission",
      tooltip: {
        content: 'La date à laquelle vous avez reçu ce certificat.',
        importance: "Montre l'actualité de vos certifications.",
        tips: 'Utilisez la date indiquée sur votre certificat.',
      },
    },
    expiryDate: {
      label: "Date d'Expiration",
      tooltip: {
        content: "La date d'expiration de ce certificat, le cas échéant.",
        importance:
          'Certaines certifications nécessitent un renouvellement, montrant que vous maintenez vos connaissances à jour.',
        tips: "Vérifiez si votre certification nécessite un renouvellement et suivez la date d'expiration.",
      },
    },
    neverExpires: "N'expire jamais",
  },
  credential: {
    id: {
      label: 'ID du Justificatif',
      placeholder: "Entrez l'ID du justificatif",
      tooltip: {
        content: "L'identifiant unique de votre certificat.",
        importance: "Aide à vérifier l'authenticité de votre certification.",
        tips: "Copiez-le exactement tel qu'il apparaît sur votre certificat ou votre page de justificatif.",
      },
    },
    url: {
      label: 'URL du Justificatif',
      placeholder: "Entrez l'URL du justificatif",
      tooltip: {
        content: 'Lien pour vérifier votre certificat en ligne.',
        importance: 'Permet une vérification rapide de vos justificatifs.',
        tips: "Utilisez l'URL de vérification permanente si elle est fournie par l'émetteur.",
      },
    },
  },
  isPaid: {
    label: "Il s'agit d'une certification payante",
    tooltip: {
      content: "Indiquez s'il s'agissait d'une certification payante.",
      importance: 'Les certifications payantes ont souvent plus de poids auprès des employeurs.',
      tips: 'Les certifications gratuites peuvent tout de même avoir de la valeur, mais soyez sélectif quant à celles à inclure.',
    },
    warning:
      "Les certifications gratuites peuvent être perçues moins favorablement par certains employeurs. Envisagez de n'inclure que les plus pertinentes.",
  },
  topics: {
    label: 'Sujets et Compétences Couverts',
    addButton: 'Ajouter un Sujet',
    placeholder: 'Entrez un sujet ou une compétence couverte',
    tooltip: {
      content: 'Principaux sujets et compétences couverts par la certification.',
      importance:
        'Montre les connaissances et compétences spécifiques validées par cette certification.',
      tips: 'Incluez les compétences les plus pertinentes et précieuses pour vos postes cibles.',
    },
  },
};
