export const certifications = {
  title: 'Certificazioni',
  addButton: 'Aggiungi Certificato',
  name: {
    label: 'Nome del Certificato',
    placeholder: 'Inserisci il nome del certificato',
    tooltip: {
      content: 'Il nome del tuo certificato o certificazione.',
      importance:
        'Questo è ciò che appare sul tuo CV e aiuta i recruiter a capire le tue qualifiche.',
      tips: 'Usa il nome ufficiale della certificazione come appare sulla tua credenziale.',
    },
  },
  issuer: {
    label: 'Ente Emittente',
    placeholder: "Inserisci l'ente emittente",
    tooltip: {
      content: "L'organizzazione che ha rilasciato il certificato.",
      importance: "La credibilità dell'ente conferisce valore alla tua certificazione.",
      tips: "Usa il nome ufficiale dell'organizzazione emittente.",
    },
  },
  issuerLogo: {
    label: "URL Logo dell'Ente Emittente",
    tooltip: {
      content: "L'URL del logo dell'ente emittente.",
      importance: 'La rappresentazione visiva aiuta un riconoscimento rapido.',
      tips: "Usa un logo ufficiale di alta qualità. Assicurati che l'URL sia permanente e accessibile.",
    },
  },
  dates: {
    issueDate: {
      label: 'Data di Rilascio',
      tooltip: {
        content: 'Quando hai ricevuto questo certificato.',
        importance: "Mostra l'attualità delle tue certificazioni.",
        tips: 'Usa la data indicata sul tuo certificato.',
      },
    },
    expiryDate: {
      label: 'Data di Scadenza',
      tooltip: {
        content: 'Quando questo certificato scade, se applicabile.',
        importance:
          'Alcune certificazioni richiedono il rinnovo, dimostrando che mantieni le tue conoscenze aggiornate.',
        tips: 'Verifica se la tua certificazione necessita di rinnovo e tieni traccia della data di scadenza.',
      },
    },
    neverExpires: 'Non scade mai',
  },
  credential: {
    id: {
      label: 'ID Credenziale',
      placeholder: "Inserisci l'ID della credenziale",
      tooltip: {
        content: "L'identificatore univoco del tuo certificato.",
        importance: "Aiuta a verificare l'autenticità della tua certificazione.",
        tips: 'Copia esattamente come appare sul tuo certificato o sulla pagina della credenziale.',
      },
    },
    url: {
      label: 'URL Credenziale',
      placeholder: "Inserisci l'URL della credenziale",
      tooltip: {
        content: 'Link per verificare online il tuo certificato.',
        importance: 'Consente una rapida verifica delle tue credenziali.',
        tips: "Usa l'URL di verifica permanente, se fornito dall'ente emittente.",
      },
    },
  },
  isPaid: {
    label: 'Questa è una certificazione a pagamento',
    tooltip: {
      content: 'Indica se questa era una certificazione a pagamento.',
      importance: 'Le certificazioni a pagamento spesso hanno più peso presso i datori di lavoro.',
      tips: 'Le certificazioni gratuite possono comunque essere preziose, ma sii selettivo su quali includere.',
    },
    warning:
      'Le certificazioni gratuite potrebbero essere considerate meno favorevolmente da alcuni datori di lavoro. Valuta di includere solo quelle più rilevanti.',
  },
  topics: {
    label: 'Argomenti e Competenze Trattate',
    addButton: 'Aggiungi Argomento',
    placeholder: 'Inserisci un argomento o una competenza trattata',
    tooltip: {
      content: 'Argomenti chiave e competenze trattate nella certificazione.',
      importance: 'Mostra le conoscenze e le competenze specifiche convalidate da questa certificazione.',
      tips: 'Includi le competenze più rilevanti e preziose per i ruoli a cui aspiri.',
    },
  },
};
