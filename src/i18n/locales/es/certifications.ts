export const certifications = {
  title: 'Certificaciones',
  addButton: 'Añadir Certificado',
  name: {
    label: 'Nombre del Certificado',
    placeholder: 'Ingrese el nombre del certificado',
    tooltip: {
      content: 'El nombre de su certificado o certificación.',
      importance:
        'Esto es lo que aparece en su CV y ayuda a los reclutadores a entender sus calificaciones.',
      tips: 'Use el nombre oficial de la certificación tal como aparece en su credencial.',
    },
  },
  issuer: {
    label: 'Organización Emisora',
    placeholder: 'Ingrese la organización emisora',
    tooltip: {
      content: 'La organización que emitió el certificado.',
      importance: 'La credibilidad del emisor le da más peso a su certificación.',
      tips: 'Use el nombre oficial de la organización emisora.',
    },
  },
  issuerLogo: {
    label: 'URL del Logo del Emisor',
    tooltip: {
      content: 'URL del logo de la organización emisora.',
      importance: 'La representación visual ayuda al reconocimiento rápido.',
      tips: 'Use un logo oficial de alta calidad. Asegúrese de que la URL sea permanente y accesible.',
    },
  },
  dates: {
    issueDate: {
      label: 'Fecha de Emisión',
      tooltip: {
        content: 'Cuándo recibió este certificado.',
        importance: 'Muestra la vigencia de sus certificaciones.',
        tips: 'Use la fecha que aparece en su certificado.',
      },
    },
    expiryDate: {
      label: 'Fecha de Caducidad',
      tooltip: {
        content: 'Cuándo caduca este certificado, si corresponde.',
        importance:
          'Algunas certificaciones requieren renovación, lo que demuestra que mantiene sus conocimientos actualizados.',
        tips: 'Verifique si su certificación necesita renovación y controle la fecha de caducidad.',
      },
    },
    neverExpires: 'Nunca caduca',
  },
  credential: {
    id: {
      label: 'ID de Credencial',
      placeholder: 'Ingrese el ID de la credencial',
      tooltip: {
        content: 'El identificador único de su certificado.',
        importance: 'Ayuda a verificar la autenticidad de su certificación.',
        tips: 'Cópielo exactamente como aparece en su certificado o página de credencial.',
      },
    },
    url: {
      label: 'URL de la Credencial',
      placeholder: 'Ingrese la URL de la credencial',
      tooltip: {
        content: 'Enlace para verificar su certificado en línea.',
        importance: 'Permite la verificación rápida de sus credenciales.',
        tips: 'Use la URL de verificación permanente si el emisor la proporciona.',
      },
    },
  },
  isPaid: {
    label: 'Esta es una certificación paga',
    tooltip: {
      content: 'Indique si esta fue una certificación paga.',
      importance: 'Las certificaciones pagas suelen tener más peso ante los empleadores.',
      tips: 'Las certificaciones gratuitas también pueden ser valiosas, pero sea selectivo respecto a cuáles incluir.',
    },
    warning:
      'Algunas empresas pueden ver con menos buenos ojos las certificaciones gratuitas. Considere incluir solo las más relevantes.',
  },
  topics: {
    label: 'Temas y Habilidades Cubiertos',
    addButton: 'Añadir Tema',
    placeholder: 'Ingrese un tema o habilidad cubierta',
    tooltip: {
      content: 'Temas y habilidades clave cubiertos en la certificación.',
      importance: 'Muestra los conocimientos y competencias específicos validados por esta certificación.',
      tips: 'Incluya las habilidades más relevantes y valiosas para los puestos a los que aspira.',
    },
  },
};
