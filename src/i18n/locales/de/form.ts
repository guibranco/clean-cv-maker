export const form = {
  sections: {
    personalInfo: {
      sectionTitle: 'Persönliche Informationen',
      fullName: {
        label: 'Vollständiger Name',
        placeholder: 'Geben Sie Ihren vollständigen Namen ein',
        tooltip: {
          content: 'Ihr vollständiger professioneller Name, wie er im Lebenslauf erscheinen soll.',
          importance:
            'Warum es wichtig ist: Dies ist oft das Erste, was Recruiter sehen und wird für ATS-Systeme verwendet.',
          tips: 'Tipps: Verwenden Sie Ihren rechtlichen Namen oder einen konsistenten professionellen Namen.',
        },
      },
      professionalTitle: {
        label: 'Berufsbezeichnung',
        placeholder: 'z.B., Senior Software Entwickler',
        tooltip: {
          content: 'Ihre aktuelle oder angestrebte Position.',
          importance:
            'Warum es wichtig ist: Hilft Recruitern, Ihr berufliches Level schnell zu verstehen.',
          tips: 'Tipps: Verwenden Sie Standardbezeichnungen der Branche statt kreativer Titel.',
        },
      },
      location: {
        label: 'Standort',
        placeholder: 'z.B., Berlin',
        tooltip: {
          content: 'Ihre aktuelle Stadt und Ihr Land/Region.',
          importance:
            'Warum es wichtig ist: Der Standort ist entscheidend, um die Eignung für eine Stelle zu prüfen, und hilft Recruitern einzuschätzen, ob Sie sich in ihrem Zielmarkt befinden.',
          tips: 'Tipps: Formatieren Sie als „Stadt, Land“ oder „Stadt, Bundesland, Land“. Seien Sie präzise, aber geben Sie keine vollständige Adresse an.',
        },
      },
      email: {
        label: 'E-Mail',
        placeholder: 'ihr.name@beispiel.de',
        tooltip: {
          content: 'Ihre professionelle E-Mail-Adresse.',
          importance:
            'Warum es wichtig ist: Dies ist der wichtigste Weg, auf dem Recruiter Sie kontaktieren. Sie ist essenziell für ATS-Systeme und die weitere Kommunikation.',
          tips: 'Tipps: Verwenden Sie eine professionelle E-Mail-Adresse, vorzugsweise mit Ihrem Namen. Vermeiden Sie lässige oder ausgefallene Adressen.',
        },
      },
      phone: {
        label: 'Telefon',
        placeholder: '+49 151 23456789',
        tooltip: {
          content: 'Ihre Kontakttelefonnummer.',
          importance:
            'Warum es wichtig ist: Ein zweiter, aber wichtiger Kontaktweg. Manche Recruiter bevorzugen Anrufe für ein erstes Gespräch.',
          tips: 'Tipps: Geben Sie bei internationalen Bewerbungen die Ländervorwahl an. Verwenden Sie ein einheitliches Format (z.B. +49 151 23456789).',
        },
      },
      githubUrl: {
        label: 'GitHub-URL',
        placeholder: 'https://github.com/benutzername',
        tooltip: {
          content: 'Link zu Ihrem GitHub-Profil.',
          importance:
            'Warum es wichtig ist: Zeigt Ihre Open-Source-Beiträge und Programmieraktivität. Viele Technologieunternehmen achten gezielt darauf.',
          tips: 'Tipps: Halten Sie Ihr Profil aktuell und präsentieren Sie Ihre besten Arbeiten. Heften Sie relevante Repositories an.',
        },
      },
      linkedinUrl: {
        label: 'LinkedIn-URL',
        placeholder: 'https://linkedin.com/in/benutzername',
        tooltip: {
          content: 'Die URL Ihres LinkedIn-Profils.',
          importance:
            'Warum es wichtig ist: LinkedIn ist eine Standardreferenz für Recruiter, um Ihre Erfahrung und Ihr Netzwerk zu überprüfen.',
          tips: 'Tipps: Verwenden Sie eine individuelle LinkedIn-URL mit Ihrem Namen. Halten Sie Ihr Profil synchron mit Ihrem Lebenslauf.',
        },
      },
      portfolioUrl: {
        label: 'Portfolio-URL',
        placeholder: 'https://ihr-portfolio.de',
        tooltip: {
          content: 'Link zu Ihrer persönlichen Website oder Ihrem Portfolio.',
          importance:
            'Warum es wichtig ist: Bietet einen tieferen Einblick in Ihre Arbeit und Persönlichkeit. Ideal, um Projekte zu präsentieren, die nicht auf GitHub sind.',
          tips: 'Tipps: Achten Sie darauf, dass die Seite mobilfreundlich ist und schnell lädt. Heben Sie Ihre besten und relevantesten Arbeiten hervor.',
        },
      },
      willRelocate: {
        label: 'Umzugsbereit',
        tooltip: {
          content: 'Gibt an, ob Sie für eine Arbeitsmöglichkeit umziehen würden.',
          importance:
            'Warum es wichtig ist: Hilft Recruitern, Sie mit Möglichkeiten an anderen Standorten abzugleichen. Kann Ihnen weitere Stellenmöglichkeiten eröffnen.',
          tips: 'Tipps: Berücksichtigen Sie Visa-Anforderungen und Umzugskosten bei dieser Angabe.',
        },
      },
      bio: {
        label: 'Berufliches Profil',
        placeholder:
          'Schreiben Sie eine kurze berufliche Zusammenfassung, die Ihre Expertise und Karriereziele hervorhebt...',
        tooltip: {
          content:
            'Eine kurze berufliche Zusammenfassung, die Ihre Expertise und Karriereziele hervorhebt.',
          importance:
            'Warum es wichtig ist: Dies ist Ihr Elevator-Pitch. Es ist oft der erste Absatz, den Recruiter lesen, und hilft ihnen, Ihr Wertversprechen schnell zu verstehen.',
          tips: 'Tipps: Beschränken Sie sich auf 3-5 Sätze. Konzentrieren Sie sich auf Ihr Alleinstellungsmerkmal, wichtige Erfolge und Ihre Karriererichtung. Verwenden Sie branchenübliche Schlüsselwörter auf natürliche Weise.',
        },
      },
    },
    experience: {
      sectionTitle: 'Berufserfahrung',
      addButton: 'Erfahrung hinzufügen',
    },
    education: {
      sectionTitle: 'Ausbildung',
      addButton: 'Ausbildung hinzufügen',
    },
  },
};
