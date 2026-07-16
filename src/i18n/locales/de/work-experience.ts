export const workExperience = {
  title: 'Berufserfahrung',
  addButton: 'Erfahrung hinzufügen',
  companyName: {
    label: 'Firmenname',
    placeholder: 'Firmenname eingeben',
    tooltip: {
      content: 'Der Name des Unternehmens, bei dem Sie gearbeitet haben.',
      importance:
        'Dies ist ein wichtiges Feld für ATS-Systeme und hilft Recruitern, Ihre Beschäftigungshistorie zu überprüfen.',
      tips: 'Verwenden Sie den offiziellen Firmennamen, keine Abkürzungen oder informelle Bezeichnungen.',
    },
  },
  companyLogo: {
    label: 'Firmenlogo-URL',
    tooltip: {
      content: 'Eine URL zum Logo des Unternehmens.',
      importance:
        'Visuelle Elemente können Ihren Lebenslauf ansprechender und einprägsamer machen.',
      tips: 'Verwenden Sie ein hochwertiges, professionelles Logo. Stellen Sie sicher, dass die URL dauerhaft erreichbar ist.',
    },
  },
  companySize: {
    label: 'Unternehmensgröße',
    placeholder: 'z.B., 1-10, 11-50, 51-200, 201-500, 500+',
    tooltip: {
      content: 'Die ungefähre Größe des Unternehmens nach Mitarbeiterzahl.',
      importance:
        'Hilft Recruitern zu verstehen, in welcher Größenordnung von Organisationen Sie gearbeitet haben.',
      tips: 'Verwenden Sie Standardbereiche wie „1-10“, „11-50“, „51-200“, „201-500“, „500+“',
    },
  },
  industry: {
    label: 'Branche',
    tooltip: {
      content: 'Die Hauptbranche oder der Sektor des Unternehmens.',
      importance:
        'Zeigt Ihre Erfahrung über verschiedene Branchen hinweg und hilft bei der branchenspezifischen Stellenvermittlung.',
      tips: 'Verwenden Sie in Ihrer Branche anerkannte Standardbegriffe.',
    },
  },
  description: {
    label: 'Unternehmensbeschreibung',
    tooltip: {
      content: 'Eine kurze Beschreibung dessen, was das Unternehmen macht.',
      importance:
        'Bietet Kontext zu Ihrem Arbeitsumfeld und hilft Recruitern, den Fokus des Unternehmens zu verstehen.',
      tips: 'Halten Sie es kurz, aber informativ. Konzentrieren Sie sich auf das Kerngeschäft und die Erfolge des Unternehmens.',
    },
  },
  contractType: {
    label: 'Vertragsart',
    options: {
      fullTime: 'Vollzeit',
      partTime: 'Teilzeit',
      freelance: 'Freiberuflich',
    },
    tooltip: {
      content: 'Die Art Ihres Arbeitsvertrags.',
      importance:
        'Verdeutlicht Ihren Beschäftigungsstatus und hilft, Sie mit ähnlichen Möglichkeiten abzugleichen.',
      tips: 'Seien Sie ehrlich bezüglich Ihrer Beschäftigungsart. Jede hat ihre eigenen Vorteile.',
    },
  },
  workSchema: {
    label: 'Arbeitsmodell',
    options: {
      onSite: 'Vor Ort',
      remote: 'Remote',
      hybrid: 'Hybrid',
    },
    tooltip: {
      content: 'Wie Sie Ihre Arbeit ausgeführt haben (vor Ort, remote oder hybrid).',
      importance:
        'Flexibilität beim Arbeitsort wird für Arbeitgeber und Arbeitnehmer zunehmend wichtiger.',
      tips: 'Dies kann besonders für die Suche nach Remote-Stellen relevant sein.',
    },
  },
  dates: {
    startDate: {
      label: 'Startdatum',
      tooltip: {
        content: 'Wann Sie bei diesem Unternehmen angefangen haben.',
        importance:
          'Zeigt Ihre berufliche Entwicklung und hilft, die Beschäftigungsdauer zu überprüfen.',
        tips: 'Verwenden Sie das tatsächliche Startdatum, auch bei internen Beförderungen oder Rollenwechseln.',
      },
    },
    endDate: {
      label: 'Enddatum',
      tooltip: {
        content: 'Wann Sie bei diesem Unternehmen aufgehört haben.',
        importance: 'Vervollständigt Ihre Beschäftigungshistorie und zeigt Arbeitsplatzstabilität.',
        tips: 'Verwenden Sie das Kontrollkästchen „Laufend“ für Ihre aktuelle Position.',
      },
    },
    current: 'Laufend',
  },
  role: {
    title: {
      label: 'Rollenbezeichnung',
      tooltip: {
        content: 'Ihre Berufsbezeichnung oder Position in dieser Rolle.',
        importance:
          'Berufsbezeichnungen sind entscheidend für den ATS-Abgleich und zeigen Ihre berufliche Entwicklung.',
        tips: 'Verwenden Sie branchenübliche Bezeichnungen. Vermeiden Sie firmeninterne oder kreative Titel.',
      },
    },
    description: {
      label: 'Rollenbeschreibung',
      tooltip: {
        content: 'Eine Zusammenfassung Ihrer Verantwortlichkeiten und Aufgaben in dieser Rolle.',
        importance:
          'Hier können Sie Ihre tägliche Arbeit und Ihren Einfluss näher beschreiben.',
        tips: 'Verwenden Sie Aktionsverben und quantifizieren Sie Ergebnisse, wo möglich. Konzentrieren Sie sich auf Ihre wichtigsten Verantwortlichkeiten.',
      },
    },
    achievements: {
      label: 'Wichtigste Erfolge',
      addButton: 'Erfolg hinzufügen',
      placeholder: 'Erfolg',
      tooltip: {
        content: 'Konkrete Erfolge und Errungenschaften in dieser Rolle.',
        importance: 'Erfolge zeigen Ihren Einfluss und Wert für potenzielle Arbeitgeber.',
        tips: 'Verwenden Sie Kennzahlen und Zahlen, wo möglich. Konzentrieren Sie sich auf Ergebnisse und Wirkung statt nur auf Zuständigkeiten.',
      },
    },
  },
};
