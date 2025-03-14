export const form = {
  sections: {
    personalInfo: {
export const form = {
  sections: {
    personalInfo: {
      sectionTitle: 'Informazioni Personali',
      fullName: {
        label: 'Nome Completo',
        placeholder: 'Inserisci il tuo nome completo',
        tooltip: {
          content: "Il tuo nome professionale completo come vorresti che apparisse sul CV.",
          importance: "È la prima cosa che i recruiter vedono ed è usata per il sistema ATS.",
          tips: "Usa il tuo nome legale o un nome professionale consistente.",
        },
      },
      title: {
        label: 'Titolo Professionale',
        placeholder: 'es., Ingegnere Software Senior',
        tooltip: {
          content: "Il tuo ruolo attuale o desiderato.",
          importance: "Aiuta i recruiter a capire rapidamente il tuo livello professionale.",
          tips: "Usa titoli standard del settore invece di titoli creativi.",
        },
      },
    },
  },
};
    },
    experience: {
      title: 'Esperienza Lavorativa',
      addButton: 'Aggiungi Esperienza',
    },
    education: {
      title: 'Istruzione',
      addButton: 'Aggiungi Istruzione',
    },
  },
};