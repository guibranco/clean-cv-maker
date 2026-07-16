export const projects = {
  title: 'Projets',
  addButton: 'Ajouter un Projet',
  name: {
    label: 'Nom du Projet',
    placeholder: 'Entrez le nom du projet',
    tooltip: {
      content: 'Le nom de votre projet.',
      importance: 'Rend votre projet facilement identifiable et mémorable.',
      tips: "Utilisez un nom clair et descriptif qui reflète l'objectif du projet.",
    },
  },
  icon: {
    label: "URL de l'Icône du Projet",
    tooltip: {
      content: "URL de l'icône ou du logo du projet.",
      importance: 'La représentation visuelle aide votre projet à se démarquer.',
      tips: 'Utilisez une image carrée avec un arrière-plan clair. Les formats SVG ou PNG fonctionnent le mieux.',
    },
  },
  description: {
    label: 'Description du Projet',
    placeholder: 'Décrivez votre projet...',
    tooltip: {
      content: 'Une brève description de ce que fait votre projet.',
      importance: "Aide les lecteurs à comprendre rapidement l'objectif et la valeur de votre projet.",
      tips: 'Concentrez-vous sur le problème résolu et les fonctionnalités clés. Restez concis mais informatif.',
    },
  },
  sourceCode: {
    label: 'Le code source est ouvert',
    url: {
      label: 'URL du Code Source',
      tooltip: {
        content: 'Lien vers le dépôt du code source de votre projet.',
        importance: 'Permet aux autres de consulter votre code et son implémentation.',
        tips: 'Généralement une URL de dépôt GitHub, GitLab ou Bitbucket.',
      },
    },
  },
  demo: {
    label: 'Démo disponible',
    url: {
      label: 'URL de la Démo',
      tooltip: {
        content: 'Lien vers une démo en direct de votre projet.',
        importance: "Permet aux autres d'essayer votre projet immédiatement.",
        tips: 'Assurez-vous que la démo est stable et représente bien votre projet.',
      },
    },
  },
  documentation: {
    label: 'Documentation disponible',
    url: {
      label: 'URL de la Documentation',
      tooltip: {
        content: 'Lien vers la documentation de votre projet.',
        importance: 'Aide les autres à comprendre comment utiliser votre projet.',
        tips: "Envisagez d'utiliser des plateformes comme ReadTheDocs ou GitHub Pages.",
      },
    },
  },
  startDate: {
    label: 'Date de Début',
    tooltip: {
      content: 'La date à laquelle vous avez commencé à travailler sur ce projet.',
      importance: 'Montre la chronologie du projet et votre progression professionnelle.',
      tips: 'Utilisez le mois de votre première contribution significative.',
    },
  },
  techStack: {
    label: 'Pile Technologique',
    addCustom: {
      placeholder: 'Ajouter une technologie personnalisée',
      button: 'Ajouter',
    },
    tooltip: {
      content: 'Les technologies utilisées dans ce projet.',
      importance: 'Montre votre expertise technique et la complexité du projet.',
      tips: "Sélectionnez jusqu'à 10 technologies. Ajoutez-en des personnalisées si nécessaire.",
    },
    limit: {
      text: 'technologies sélectionnées',
      max: 'Maximum 10 technologies autorisées',
    },
    suggested: 'Technologies suggérées :',
  },
};
