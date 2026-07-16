export const certifications = {
  title: 'Zertifizierungen',
  addButton: 'Zertifikat hinzufügen',
  name: {
    label: 'Zertifikatsname',
    placeholder: 'Zertifikatsnamen eingeben',
    tooltip: {
      content: 'Der Name Ihres Zertifikats oder Ihrer Zertifizierung.',
      importance:
        'Dies erscheint auf Ihrem Lebenslauf und hilft Recruitern, Ihre Qualifikationen zu verstehen.',
      tips: 'Verwenden Sie den offiziellen Namen der Zertifizierung, wie er auf Ihrem Nachweis erscheint.',
    },
  },
  issuer: {
    label: 'Ausstellende Organisation',
    placeholder: 'Ausstellende Organisation eingeben',
    tooltip: {
      content: 'Die Organisation, die das Zertifikat ausgestellt hat.',
      importance:
        'Die Glaubwürdigkeit der ausstellenden Organisation verleiht Ihrer Zertifizierung zusätzliches Gewicht.',
      tips: 'Verwenden Sie den offiziellen Namen der ausstellenden Organisation.',
    },
  },
  issuerLogo: {
    label: 'Logo-URL der ausstellenden Organisation',
    tooltip: {
      content: 'URL zum Logo der ausstellenden Organisation.',
      importance: 'Eine visuelle Darstellung erleichtert die schnelle Wiedererkennung.',
      tips: 'Verwenden Sie ein hochwertiges, offizielles Logo. Stellen Sie sicher, dass die URL dauerhaft erreichbar ist.',
    },
  },
  dates: {
    issueDate: {
      label: 'Ausstellungsdatum',
      tooltip: {
        content: 'Wann Sie dieses Zertifikat erhalten haben.',
        importance: 'Zeigt die Aktualität Ihrer Zertifizierungen.',
        tips: 'Verwenden Sie das auf Ihrem Zertifikat angegebene Datum.',
      },
    },
    expiryDate: {
      label: 'Ablaufdatum',
      tooltip: {
        content: 'Wann dieses Zertifikat abläuft, falls zutreffend.',
        importance:
          'Manche Zertifizierungen erfordern eine Erneuerung, was zeigt, dass Sie Ihr Wissen aktuell halten.',
        tips: 'Prüfen Sie, ob Ihre Zertifizierung erneuert werden muss, und behalten Sie das Ablaufdatum im Blick.',
      },
    },
    neverExpires: 'Läuft nie ab',
  },
  credential: {
    id: {
      label: 'Zertifikats-ID',
      placeholder: 'Zertifikats-ID eingeben',
      tooltip: {
        content: 'Die eindeutige Kennung Ihres Zertifikats.',
        importance: 'Hilft, die Echtheit Ihrer Zertifizierung zu überprüfen.',
        tips: 'Übernehmen Sie diese exakt so, wie sie auf Ihrem Zertifikat oder der Nachweisseite steht.',
      },
    },
    url: {
      label: 'Zertifikats-URL',
      placeholder: 'Zertifikats-URL eingeben',
      tooltip: {
        content: 'Link zur Online-Verifizierung Ihres Zertifikats.',
        importance: 'Ermöglicht eine schnelle Überprüfung Ihrer Nachweise.',
        tips: 'Verwenden Sie die dauerhafte Verifizierungs-URL, falls der Aussteller eine bereitstellt.',
      },
    },
  },
  isPaid: {
    label: 'Dies ist eine kostenpflichtige Zertifizierung',
    tooltip: {
      content: 'Geben Sie an, ob dies eine kostenpflichtige Zertifizierung war.',
      importance: 'Kostenpflichtige Zertifizierungen haben bei Arbeitgebern oft mehr Gewicht.',
      tips: 'Kostenlose Zertifizierungen können dennoch wertvoll sein, wählen Sie aber gezielt aus, welche Sie angeben.',
    },
    warning:
      'Kostenlose Zertifizierungen werden von manchen Arbeitgebern möglicherweise weniger positiv bewertet. Geben Sie nach Möglichkeit nur die relevantesten an.',
  },
  topics: {
    label: 'Behandelte Themen & Kompetenzen',
    addButton: 'Thema hinzufügen',
    placeholder: 'Ein behandeltes Thema oder eine Kompetenz eingeben',
    tooltip: {
      content: 'Wichtige Themen und Kompetenzen, die in der Zertifizierung behandelt werden.',
      importance:
        'Zeigt das spezifische Wissen und die Fähigkeiten, die durch diese Zertifizierung bestätigt werden.',
      tips: 'Geben Sie die relevantesten und wertvollsten Fähigkeiten für Ihre Zielpositionen an.',
    },
  },
};
