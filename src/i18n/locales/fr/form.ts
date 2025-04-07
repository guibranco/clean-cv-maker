export const form = {
  sections: {
    personalInfo: {
      sectionTitle: 'Informations Personnelles',
      fullName: {
        label: 'Nom Complet',
        placeholder: 'Entrez votre nom complet',
        tooltip: {
          content: "Votre nom professionnel complet tel que vous souhaitez qu'il apparaisse sur votre CV.",
          importance: "Pourquoi c'est important : C'est souvent la première chose que les recruteurs voient et est utilisée pour le système ATS.",
          tips: "Conseils : Utilisez votre nom légal ou un nom professionnel cohérent.",
        },
      },
      professionalTitle: {
        label: 'Titre Professionnel',
        placeholder: 'ex., Ingénieur Logiciel Senior',
        tooltip: {
          content: "Votre poste actuel ou souhaité.",
          importance: "Pourquoi c'est important : Aide les recruteurs à comprendre rapidement votre niveau professionnel.",
          tips: "Conseils : Utilisez des titres standards du secteur plutôt que des titres créatifs.",
        },
      },
    },
    experience: {
      title: 'Expérience Professionnelle',
      addButton: 'Ajouter une Expérience',
    },
    education: {
      title: 'Formation',
      addButton: 'Ajouter une Formation',
    },
  },
};