export const form = {
  sections: {
    personalInfo: {
      title: 'Persönliche Informationen',
      fullName: {
        label: 'Vollständiger Name',
        placeholder: 'Geben Sie Ihren vollständigen Namen ein',
        tooltip: {
          content: "Ihr vollständiger professioneller Name, wie er im Lebenslauf erscheinen soll.",
          importance: "Warum es wichtig ist: Dies ist oft das Erste, was Recruiter sehen und wird für ATS-Systeme verwendet.",
          tips: "Tipps: Verwenden Sie Ihren rechtlichen Namen oder einen konsistenten professionellen Namen.",
        },
      },
      title: {
        label: 'Berufsbezeichnung',
        placeholder: 'z.B., Senior Software Entwickler',
        tooltip: {
          content: "Ihre aktuelle oder angestrebte Position.",
          importance: "Warum es wichtig ist: Hilft Recruitern, Ihr berufliches Level schnell zu verstehen.",
          tips: "Tipps: Verwenden Sie Standardbezeichnungen der Branche statt kreativer Titel.",
        },
      },
    },
    experience: {
      title: 'Berufserfahrung',
      addButton: 'Erfahrung hinzufügen',
    },
    education: {
      title: 'Ausbildung',
      addButton: 'Ausbildung hinzufügen',
    },
  },
};