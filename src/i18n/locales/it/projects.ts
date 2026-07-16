export const projects = {
  title: 'Progetti',
  addButton: 'Aggiungi Progetto',
  name: {
    label: 'Nome del Progetto',
    placeholder: 'Inserisci il nome del progetto',
    tooltip: {
      content: 'Il nome del tuo progetto.',
      importance: 'Rende il tuo progetto facilmente identificabile e memorabile.',
      tips: 'Usa un nome chiaro e descrittivo che rifletta lo scopo del progetto.',
    },
  },
  icon: {
    label: 'URL Icona del Progetto',
    tooltip: {
      content: "L'URL dell'icona o del logo del progetto.",
      importance: 'La rappresentazione visiva aiuta il tuo progetto a distinguersi.',
      tips: "Usa un'immagine quadrata con uno sfondo chiaro. I formati SVG o PNG funzionano meglio.",
    },
  },
  description: {
    label: 'Descrizione del Progetto',
    placeholder: 'Descrivi il tuo progetto...',
    tooltip: {
      content: 'Una breve descrizione di cosa fa il tuo progetto.',
      importance: 'Aiuta i lettori a capire rapidamente lo scopo e il valore del progetto.',
      tips: 'Concentrati sul problema che risolve e sulle funzionalità principali. Mantienila concisa ma informativa.',
    },
  },
  sourceCode: {
    label: 'Il codice sorgente è pubblico',
    url: {
      label: 'URL Codice Sorgente',
      tooltip: {
        content: 'Il link al repository del codice sorgente del progetto.',
        importance: 'Consente ad altri di rivedere il tuo codice e la tua implementazione.',
        tips: 'Solitamente un URL di repository GitHub, GitLab o Bitbucket.',
      },
    },
  },
  demo: {
    label: 'Demo disponibile',
    url: {
      label: 'URL Demo',
      tooltip: {
        content: 'Link a una demo live del tuo progetto.',
        importance: 'Consente ad altri di provare subito il tuo progetto.',
        tips: 'Assicurati che la demo sia stabile e rappresenti bene il tuo progetto.',
      },
    },
  },
  documentation: {
    label: 'Documentazione disponibile',
    url: {
      label: 'URL Documentazione',
      tooltip: {
        content: 'Il link alla documentazione del progetto.',
        importance: 'Aiuta gli altri a capire come utilizzare il tuo progetto.',
        tips: 'Valuta di usare piattaforme come ReadTheDocs o GitHub Pages.',
      },
    },
  },
  startDate: {
    label: 'Data di Inizio',
    tooltip: {
      content: 'Quando hai iniziato a lavorare su questo progetto.',
      importance: 'Mostra la cronologia del progetto e la tua progressione di esperienza.',
      tips: 'Usa il mese in cui hai dato il tuo primo contributo significativo.',
    },
  },
  techStack: {
    label: 'Stack Tecnologico',
    addCustom: {
      placeholder: 'Aggiungi tecnologia personalizzata',
      button: 'Aggiungi',
    },
    tooltip: {
      content: 'Le tecnologie utilizzate in questo progetto.',
      importance: 'Mostra la tua competenza tecnica e la complessità del progetto.',
      tips: 'Seleziona fino a 10 tecnologie. Aggiungine di personalizzate se necessario.',
    },
    limit: {
      text: 'tecnologie selezionate',
      max: 'Massimo 10 tecnologie consentite',
    },
    suggested: 'Tecnologie suggerite:',
  },
};
