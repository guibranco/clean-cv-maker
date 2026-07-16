export const workExperience = {
  title: 'Expérience Professionnelle',
  addButton: 'Ajouter une Expérience',
  companyName: {
    label: "Nom de l'Entreprise",
    placeholder: "Entrez le nom de l'entreprise",
    tooltip: {
      content: "Le nom de l'entreprise où vous avez travaillé.",
      importance:
        "C'est un champ clé pour les systèmes ATS et aide les recruteurs à vérifier votre historique professionnel.",
      tips: "Utilisez le nom officiel de l'entreprise, pas d'abréviations ou de noms informels.",
    },
  },
  companyLogo: {
    label: "URL du Logo de l'Entreprise",
    tooltip: {
      content: "Une URL vers l'image du logo de l'entreprise.",
      importance: "L'ajout d'éléments visuels peut rendre votre CV plus engageant et mémorable.",
      tips: "Utilisez une image de logo professionnelle et de haute qualité. Assurez-vous que l'URL est permanente et accessible.",
    },
  },
  companySize: {
    label: "Taille de l'Entreprise",
    placeholder: 'ex., 1-10, 11-50, 51-200, 201-500, 500+',
    tooltip: {
      content: "La taille approximative de l'entreprise en nombre d'employés.",
      importance:
        "Aide les recruteurs à comprendre l'échelle des organisations avec lesquelles vous avez travaillé.",
      tips: "Utilisez des tranches standards comme '1-10', '11-50', '51-200', '201-500', '500+'",
    },
  },
  industry: {
    label: "Secteur d'Activité",
    tooltip: {
      content: "Le secteur ou l'industrie principale de l'entreprise.",
      importance:
        "Montre votre expérience à travers différents secteurs et aide à l'adéquation avec des postes spécifiques à un secteur.",
      tips: 'Utilisez des termes de secteur standards reconnus dans votre domaine.',
    },
  },
  description: {
    label: "Description de l'Entreprise",
    tooltip: {
      content: "Une brève description de ce que fait l'entreprise.",
      importance:
        "Fournit un contexte sur votre environnement de travail et aide les recruteurs à comprendre l'orientation de l'entreprise.",
      tips: "Restez concis mais informatif. Concentrez-vous sur l'activité principale et les réalisations de l'entreprise.",
    },
  },
  contractType: {
    label: 'Type de Contrat',
    options: {
      fullTime: 'Temps Plein',
      partTime: 'Temps Partiel',
      freelance: 'Freelance',
    },
    tooltip: {
      content: 'Le type de contrat de travail que vous aviez.',
      importance:
        'Clarifie votre statut professionnel et aide à vous associer à des opportunités similaires.',
      tips: "Soyez honnête sur votre type d'emploi. Chacun a ses propres avantages.",
    },
  },
  workSchema: {
    label: 'Mode de Travail',
    options: {
      onSite: 'Sur Site',
      remote: 'À Distance',
      hybrid: 'Hybride',
    },
    tooltip: {
      content: 'Comment vous avez effectué votre travail (sur site, à distance ou hybride).',
      importance:
        'La flexibilité du lieu de travail est de plus en plus importante tant pour les employeurs que pour les employés.',
      tips: "Cela peut être particulièrement pertinent pour les recherches d'emploi à distance.",
    },
  },
  dates: {
    startDate: {
      label: 'Date de Début',
      tooltip: {
        content: 'La date à laquelle vous avez commencé à travailler dans cette entreprise.',
        importance: "Montre votre progression de carrière et aide à vérifier la durée d'emploi.",
        tips: 'Utilisez la date de début réelle, même pour des promotions internes ou des changements de poste.',
      },
    },
    endDate: {
      label: 'Date de Fin',
      tooltip: {
        content: 'La date à laquelle vous avez terminé de travailler dans cette entreprise.',
        importance:
          "Complète votre chronologie professionnelle et montre votre stabilité d'emploi.",
        tips: "Utilisez la case à cocher 'En cours' pour votre poste actuel.",
      },
    },
    current: 'En cours',
  },
  role: {
    title: {
      label: 'Intitulé du Poste',
      tooltip: {
        content: 'Votre titre de poste ou fonction dans ce rôle.',
        importance:
          'Les intitulés de poste sont essentiels pour la correspondance ATS et pour montrer votre progression de carrière.',
        tips: "Utilisez des intitulés standards du secteur. Évitez les titres spécifiques à l'entreprise ou créatifs.",
      },
    },
    description: {
      label: 'Description du Poste',
      tooltip: {
        content: 'Un résumé de vos responsabilités et de la portée de ce rôle.',
        importance: "C'est ici que vous pouvez détailler votre travail quotidien et votre impact.",
        tips: "Utilisez des verbes d'action et quantifiez les résultats si possible. Concentrez-vous sur vos responsabilités les plus importantes.",
      },
    },
    achievements: {
      label: 'Réalisations Clés',
      addButton: 'Ajouter une Réalisation',
      placeholder: 'Réalisation',
      tooltip: {
        content: 'Accomplissements et succès spécifiques dans ce rôle.',
        importance:
          'Les réalisations démontrent votre impact et votre valeur auprès des employeurs potentiels.',
        tips: "Utilisez des indicateurs et des chiffres si possible. Concentrez-vous sur les résultats et l'impact plutôt que sur les simples responsabilités.",
      },
    },
  },
};
