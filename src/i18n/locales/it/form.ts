export const form = {
  sections: {
    personalInfo: {
      sectionTitle: 'Informazioni Personali',
      fullName: {
        label: 'Nome Completo',
        placeholder: 'Inserisci il tuo nome completo',
        tooltip: {
          content: 'Il tuo nome professionale completo come vorresti che apparisse sul CV.',
          importance: 'È la prima cosa che i recruiter vedono ed è usata per il sistema ATS.',
          tips: 'Usa il tuo nome legale o un nome professionale consistente.',
        },
      },
      professionalTitle: {
        label: 'Titolo Professionale',
        placeholder: 'es., Ingegnere Software Senior',
        tooltip: {
          content: 'Il tuo ruolo attuale o desiderato.',
          importance: 'Aiuta i recruiter a capire rapidamente il tuo livello professionale.',
          tips: 'Usa titoli standard del settore invece di titoli creativi.',
        },
      },
      location: {
        label: 'Località',
        placeholder: 'es., Milano, MI',
        tooltip: {
          content: 'La tua città e paese/regione attuale.',
          importance:
            "Perché è importante: la località è fondamentale per determinare l'idoneità al lavoro e aiuta i recruiter a capire se sei nel loro mercato di riferimento.",
          tips:
            "Formatta come 'Città, Paese' o 'Città, Provincia, Paese'. Sii specifico ma non includere l'indirizzo completo.",
        },
      },
      email: {
        label: 'Email',
        placeholder: 'tuo.nome@esempio.com',
        tooltip: {
          content: 'Il tuo indirizzo email professionale.',
          importance:
            "Perché è importante: è il modo principale con cui i recruiter ti contatteranno. È essenziale per i sistemi ATS e per le comunicazioni di follow-up.",
          tips:
            'Usa un indirizzo email professionale, preferibilmente con il tuo nome. Evita indirizzi informali o creativi.',
        },
      },
      phone: {
        label: 'Telefono',
        placeholder: '+39 333 123 4567',
        tooltip: {
          content: 'Il tuo numero di telefono di contatto.',
          importance:
            'Perché è importante: un metodo di contatto secondario ma importante. Alcuni recruiter preferiscono chiamare per i primi colloqui.',
          tips:
            'Includi il prefisso internazionale per le candidature estere. Formatta in modo coerente (es., +39 333 123 4567).',
        },
      },
      githubUrl: {
        label: 'URL GitHub',
        placeholder: 'https://github.com/nomeutente',
        tooltip: {
          content: 'Il link al tuo profilo GitHub.',
          importance:
            'Perché è importante: mostra i tuoi contributi open-source e la tua attività di programmazione. Molte aziende tech lo cercano specificamente.',
          tips:
            'Assicurati che il tuo profilo sia aggiornato e mostri i tuoi lavori migliori. Fissa i repository più rilevanti.',
        },
      },
      linkedinUrl: {
        label: 'URL LinkedIn',
        placeholder: 'https://linkedin.com/in/nomeutente',
        tooltip: {
          content: 'Il link al tuo profilo LinkedIn.',
          importance:
            'Perché è importante: LinkedIn è un punto di riferimento standard per i recruiter per verificare la tua esperienza e la tua rete di contatti.',
          tips: 'Usa un URL LinkedIn personalizzato con il tuo nome. Mantieni il profilo sincronizzato con il tuo CV.',
        },
      },
      portfolioUrl: {
        label: 'URL Portfolio',
        placeholder: 'https://tuo-portfolio.com',
        tooltip: {
          content: 'Il link al tuo sito web personale o portfolio.',
          importance:
            'Perché è importante: offre uno sguardo più approfondito sul tuo lavoro e sulla tua personalità. Ottimo per mostrare progetti non presenti su GitHub.',
          tips:
            'Assicurati che sia ottimizzato per dispositivi mobili e si carichi velocemente. Metti in evidenza i lavori migliori e più pertinenti.',
        },
      },
      willRelocate: {
        label: 'Disponibile al Trasferimento',
        tooltip: {
          content: "Indica se sei disposto a trasferirti per un'opportunità di lavoro.",
          importance:
            'Perché è importante: aiuta i recruiter ad abbinarti a opportunità in altre località. Può aprire più possibilità lavorative.',
          tips: 'Considera i requisiti del visto e i costi di trasferimento quando selezioni questa opzione.',
        },
      },
      bio: {
        label: 'Biografia Professionale',
        placeholder:
          'Scrivi un breve riepilogo professionale che metta in evidenza le tue competenze e i tuoi obiettivi di carriera...',
        tooltip: {
          content:
            'Un breve riepilogo professionale che mette in evidenza le tue competenze e i tuoi obiettivi di carriera.',
          importance:
            'Perché è importante: è il tuo elevator pitch. Spesso è il primo paragrafo che i recruiter leggono e li aiuta a capire rapidamente la tua proposta di valore.',
          tips:
            'Mantienilo tra le 3 e le 5 frasi. Concentrati sulla tua proposta di valore unica, sui risultati chiave e sulla direzione della tua carriera. Usa parole chiave del settore in modo naturale.',
        },
      },
    },
    experience: {
      sectionTitle: 'Esperienza Lavorativa',
      addButton: 'Aggiungi Esperienza',
    },
    education: {
      sectionTitle: 'Istruzione',
      addButton: 'Aggiungi Istruzione',
    },
  },
};
