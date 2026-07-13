export const projects = {
  title: 'Projekte',
  addButton: 'Projekt hinzufügen',
  name: {
    label: 'Projektname',
    placeholder: 'Projektnamen eingeben',
    tooltip: {
      content: 'Der Name Ihres Projekts.',
      importance: 'Macht Ihr Projekt leicht identifizierbar und einprägsam.',
      tips: 'Verwenden Sie einen klaren, aussagekräftigen Namen, der den Zweck des Projekts widerspiegelt.',
    },
  },
  icon: {
    label: 'Projektsymbol-URL',
    tooltip: {
      content: 'URL zum Symbol oder Logo des Projekts.',
      importance: 'Eine visuelle Darstellung hilft, Ihr Projekt hervorzuheben.',
      tips: 'Verwenden Sie ein quadratisches Bild mit klarem Hintergrund. SVG- oder PNG-Formate eignen sich am besten.',
    },
  },
  description: {
    label: 'Projektbeschreibung',
    placeholder: 'Beschreiben Sie Ihr Projekt...',
    tooltip: {
      content: 'Eine kurze Beschreibung dessen, was Ihr Projekt macht.',
      importance: 'Hilft Lesern, den Zweck und Wert Ihres Projekts schnell zu verstehen.',
      tips: 'Konzentrieren Sie sich auf das gelöste Problem und die wichtigsten Funktionen. Halten Sie es kurz, aber informativ.',
    },
  },
  sourceCode: {
    label: 'Quellcode ist öffentlich',
    url: {
      label: 'Quellcode-URL',
      tooltip: {
        content: 'Link zum Quellcode-Repository Ihres Projekts.',
        importance: 'Ermöglicht anderen, Ihren Code und Ihre Umsetzung zu überprüfen.',
        tips: 'Meist eine GitHub-, GitLab- oder Bitbucket-Repository-URL.',
      },
    },
  },
  demo: {
    label: 'Demo verfügbar',
    url: {
      label: 'Demo-URL',
      tooltip: {
        content: 'Link zu einer Live-Demo Ihres Projekts.',
        importance: 'Ermöglicht anderen, Ihr Projekt sofort auszuprobieren.',
        tips: 'Stellen Sie sicher, dass die Demo stabil ist und Ihr Projekt gut repräsentiert.',
      },
    },
  },
  documentation: {
    label: 'Dokumentation verfügbar',
    url: {
      label: 'Dokumentations-URL',
      tooltip: {
        content: 'Link zur Dokumentation Ihres Projekts.',
        importance: 'Hilft anderen zu verstehen, wie Ihr Projekt verwendet wird.',
        tips: 'Erwägen Sie Plattformen wie ReadTheDocs oder GitHub Pages.',
      },
    },
  },
  startDate: {
    label: 'Startdatum',
    tooltip: {
      content: 'Wann Sie mit der Arbeit an diesem Projekt begonnen haben.',
      importance: 'Zeigt den Projektzeitrahmen und Ihre Erfahrungsentwicklung.',
      tips: 'Verwenden Sie den Monat, in dem Sie Ihren ersten wesentlichen Beitrag geleistet haben.',
    },
  },
  techStack: {
    label: 'Technologie-Stack',
    addCustom: {
      placeholder: 'Eigene Technologie hinzufügen',
      button: 'Hinzufügen',
    },
    tooltip: {
      content: 'Die in diesem Projekt verwendeten Technologien.',
      importance: 'Zeigt Ihre technische Expertise und die Komplexität des Projekts.',
      tips: 'Wählen Sie bis zu 10 Technologien aus. Fügen Sie bei Bedarf eigene hinzu.',
    },
    limit: {
      text: 'Technologien ausgewählt',
      max: 'Maximal 10 Technologien erlaubt',
    },
    suggested: 'Vorgeschlagene Technologien:',
  },
};
