export const form = {
  sections: {
    personalInfo: {
      sectionTitle: 'Informations Personnelles',
      fullName: {
        label: 'Nom Complet',
        placeholder: 'Entrez votre nom complet',
        tooltip: {
          content:
            "Votre nom professionnel complet tel que vous souhaitez qu'il apparaisse sur votre CV.",
          importance:
            "Pourquoi c'est important : C'est souvent la première chose que les recruteurs voient et est utilisée pour le système ATS.",
          tips: 'Conseils : Utilisez votre nom légal ou un nom professionnel cohérent.',
        },
      },
      professionalTitle: {
        label: 'Titre Professionnel',
        placeholder: 'ex., Ingénieur Logiciel Senior',
        tooltip: {
          content: 'Votre poste actuel ou souhaité.',
          importance:
            "Pourquoi c'est important : Aide les recruteurs à comprendre rapidement votre niveau professionnel.",
          tips: 'Conseils : Utilisez des titres standards du secteur plutôt que des titres créatifs.',
        },
      },
      location: {
        label: 'Localisation',
        placeholder: 'ex., Paris, France',
        tooltip: {
          content: 'Votre ville et pays/région actuels.',
          importance:
            "Pourquoi c'est important : La localisation est cruciale pour déterminer l'éligibilité à un poste et aide les recruteurs à évaluer si vous êtes dans leur marché cible.",
          tips: "Conseils : Formatez comme 'Ville, Pays' ou 'Ville, Région, Pays'. Soyez précis mais n'incluez pas l'adresse complète.",
        },
      },
      email: {
        label: 'E-mail',
        placeholder: 'votre.nom@exemple.com',
        tooltip: {
          content: 'Votre adresse e-mail professionnelle.',
          importance:
            "Pourquoi c'est important : C'est le principal moyen par lequel les recruteurs vous contacteront. C'est essentiel pour les systèmes ATS et les communications de suivi.",
          tips: 'Conseils : Utilisez une adresse e-mail professionnelle, de préférence avec votre nom. Évitez les adresses informelles ou fantaisistes.',
        },
      },
      phone: {
        label: 'Téléphone',
        placeholder: '+33 6 12 34 56 78',
        tooltip: {
          content: 'Votre numéro de téléphone de contact.',
          importance:
            "Pourquoi c'est important : Un moyen de contact secondaire mais crucial. Certains recruteurs préfèrent appeler pour les premiers entretiens.",
          tips: "Conseils : Incluez l'indicatif du pays pour les candidatures internationales. Formatez de manière cohérente (ex., +33 6 12 34 56 78).",
        },
      },
      githubUrl: {
        label: 'URL GitHub',
        placeholder: 'https://github.com/username',
        tooltip: {
          content: 'Lien vers votre profil GitHub.',
          importance:
            "Pourquoi c'est important : Montre vos contributions open-source et votre activité de codage. De nombreuses entreprises technologiques recherchent spécifiquement cela.",
          tips: 'Conseils : Assurez-vous que votre profil est à jour et présente vos meilleurs travaux. Épinglez les dépôts pertinents.',
        },
      },
      linkedinUrl: {
        label: 'URL LinkedIn',
        placeholder: 'https://linkedin.com/in/username',
        tooltip: {
          content: "L'URL de votre profil LinkedIn.",
          importance:
            "Pourquoi c'est important : LinkedIn est une référence standard pour les recruteurs afin de vérifier votre expérience et votre réseau.",
          tips: 'Conseils : Utilisez une URL LinkedIn personnalisée avec votre nom. Gardez votre profil synchronisé avec votre CV.',
        },
      },
      portfolioUrl: {
        label: 'URL du Portfolio',
        placeholder: 'https://votre-portfolio.com',
        tooltip: {
          content: 'Lien vers votre site web personnel ou portfolio.',
          importance:
            "Pourquoi c'est important : Offre un aperçu plus approfondi de votre travail et de votre personnalité. Idéal pour présenter des projets absents de GitHub.",
          tips: "Conseils : Assurez-vous qu'il est adapté aux mobiles et se charge rapidement. Mettez en avant vos meilleurs travaux les plus pertinents.",
        },
      },
      willRelocate: {
        label: 'Disponible pour une Relocalisation',
        tooltip: {
          content: "Indique si vous êtes prêt à déménager pour une opportunité d'emploi.",
          importance:
            "Pourquoi c'est important : Aide les recruteurs à vous associer à des opportunités dans différents lieux. Peut ouvrir davantage de possibilités d'emploi.",
          tips: 'Conseils : Tenez compte des exigences de visa et des coûts de relocalisation lors de la sélection de cette option.',
        },
      },
      bio: {
        label: 'Biographie Professionnelle',
        placeholder:
          'Rédigez un bref résumé professionnel mettant en avant votre expertise et vos objectifs de carrière...',
        tooltip: {
          content:
            'Un bref résumé professionnel mettant en avant votre expertise et vos objectifs de carrière.',
          importance:
            "Pourquoi c'est important : C'est votre argumentaire éclair. C'est souvent le premier paragraphe que lisent les recruteurs et cela les aide à comprendre rapidement votre proposition de valeur.",
          tips: "Conseils : Limitez-vous à 3-5 phrases. Concentrez-vous sur votre proposition de valeur unique, vos réalisations clés et votre orientation de carrière. Utilisez naturellement des mots-clés du secteur.",
        },
      },
    },
    experience: {
      sectionTitle: 'Expérience Professionnelle',
      addButton: 'Ajouter une Expérience',
    },
    education: {
      sectionTitle: 'Formation',
      addButton: 'Ajouter une Formation',
    },
  },
};
