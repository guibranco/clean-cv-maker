export const workExperience = {
  title: 'Esperienza Lavorativa',
  addButton: 'Aggiungi Esperienza',
  companyName: {
    label: "Nome dell'Azienda",
    placeholder: "Inserisci il nome dell'azienda",
    tooltip: {
      content: "Il nome dell'azienda presso cui hai lavorato.",
      importance:
        'Questo è un campo chiave per i sistemi ATS e aiuta i recruiter a verificare la tua storia lavorativa.',
      tips: "Usa il nome ufficiale dell'azienda, non abbreviazioni o nomi informali.",
    },
  },
  companyLogo: {
    label: "URL Logo dell'Azienda",
    tooltip: {
      content: "Un URL all'immagine del logo dell'azienda.",
      importance: 'Aggiungere elementi visivi può rendere il tuo CV più coinvolgente e memorabile.',
      tips:
        "Usa un'immagine del logo professionale di alta qualità. Assicurati che l'URL sia permanente e accessibile.",
    },
  },
  companySize: {
    label: "Dimensione dell'Azienda",
    placeholder: 'es., 1-10, 11-50, 51-200, 201-500, 500+',
    tooltip: {
      content: "La dimensione approssimativa dell'azienda in termini di dipendenti.",
      importance: 'Aiuta i recruiter a capire la scala delle organizzazioni con cui hai lavorato.',
      tips: "Usa intervalli standard come '1-10', '11-50', '51-200', '201-500', '500+'",
    },
  },
  industry: {
    label: 'Settore',
    tooltip: {
      content: "Il settore o l'ambito principale dell'azienda.",
      importance:
        "Mostra la tua esperienza in settori diversi e aiuta con l'abbinamento a posizioni specifiche del settore.",
      tips: 'Usa termini di settore standard e riconosciuti nel tuo campo.',
    },
  },
  description: {
    label: "Descrizione dell'Azienda",
    tooltip: {
      content: "Una breve descrizione di ciò che fa l'azienda.",
      importance:
        "Fornisce contesto sul tuo ambiente di lavoro e aiuta i recruiter a capire il focus dell'azienda.",
      tips:
        "Mantienila concisa ma informativa. Concentrati sull'attività principale e sui risultati dell'azienda.",
    },
  },
  contractType: {
    label: 'Tipo di Contratto',
    options: {
      fullTime: 'Tempo Pieno',
      partTime: 'Part Time',
      freelance: 'Freelance',
    },
    tooltip: {
      content: 'Il tipo di contratto di lavoro che avevi.',
      importance: 'Chiarisce il tuo stato lavorativo e aiuta ad abbinarti a opportunità simili.',
      tips: 'Sii onesto riguardo al tuo tipo di impiego. Ognuno ha i propri vantaggi.',
    },
  },
  workSchema: {
    label: 'Modalità di Lavoro',
    options: {
      onSite: 'In Sede',
      remote: 'Remoto',
      hybrid: 'Ibrido',
    },
    tooltip: {
      content: 'Come hai svolto il tuo lavoro (in sede, remoto o ibrido).',
      importance:
        'La flessibilità del luogo di lavoro è sempre più importante sia per i datori di lavoro che per i dipendenti.',
      tips: 'Questo può essere particolarmente rilevante per le ricerche di lavoro da remoto.',
    },
  },
  dates: {
    startDate: {
      label: 'Data di Inizio',
      tooltip: {
        content: 'Quando hai iniziato a lavorare in questa azienda.',
        importance:
          'Mostra la tua progressione di carriera e aiuta a verificare la durata del rapporto di lavoro.',
        tips: 'Usa la data di inizio effettiva, anche per promozioni interne o cambi di ruolo.',
      },
    },
    endDate: {
      label: 'Data di Fine',
      tooltip: {
        content: 'Quando hai terminato di lavorare in questa azienda.',
        importance: 'Completa la tua cronologia lavorativa e mostra la tua stabilità professionale.',
        tips: "Usa la casella 'In corso' per la tua posizione attuale.",
      },
    },
    current: 'In corso',
  },
  role: {
    title: {
      label: 'Titolo del Ruolo',
      tooltip: {
        content: 'Il tuo titolo professionale o posizione in questo ruolo.',
        importance:
          "I titoli professionali sono fondamentali per l'abbinamento ATS e per mostrare la progressione di carriera.",
        tips: "Usa titoli standard del settore. Evita titoli specifici dell'azienda o creativi.",
      },
    },
    description: {
      label: 'Descrizione del Ruolo',
      tooltip: {
        content: 'Un riepilogo delle tue responsabilità e del tuo ambito in questo ruolo.',
        importance: 'Qui puoi descrivere il tuo lavoro quotidiano e il tuo impatto.',
        tips:
          "Usa verbi d'azione e quantifica i risultati quando possibile. Concentrati sulle responsabilità più significative.",
      },
    },
    achievements: {
      label: 'Risultati Chiave',
      addButton: 'Aggiungi Risultato',
      placeholder: 'Risultato',
      tooltip: {
        content: 'Risultati e successi specifici in questo ruolo.',
        importance: 'I risultati dimostrano il tuo impatto e valore per i potenziali datori di lavoro.',
        tips:
          "Usa metriche e numeri quando possibile. Concentrati sui risultati e sull'impatto piuttosto che solo sulle responsabilità.",
      },
    },
  },
};
