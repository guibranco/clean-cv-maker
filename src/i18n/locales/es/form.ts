export const form = {
  sections: {
    personalInfo: {
      sectionTitle: 'Información Personal',
      fullName: {
        label: 'Nombre Completo',
        placeholder: 'Ingrese su nombre completo',
        tooltip: {
          content: 'Su nombre profesional completo como desea que aparezca en su CV.',
          importance:
            'Por qué importa: Es lo primero que ven los reclutadores y se usa para el sistema ATS.',
          tips: 'Consejos: Use su nombre legal o nombre profesional consistente.',
        },
      },
      professionalTitle: {
        label: 'Título Profesional',
        placeholder: 'ej., Ingeniero de Software Senior',
        tooltip: {
          content: 'Su cargo actual o deseado.',
          importance:
            'Por qué importa: Ayuda a los reclutadores a entender rápidamente su nivel profesional.',
          tips: 'Consejos: Use títulos estándar de la industria en lugar de títulos creativos.',
        },
      },
      location: {
        label: 'Ubicación',
        placeholder: 'ej., Madrid, España',
        tooltip: {
          content: 'Su ciudad y país/región actual.',
          importance:
            'Por qué importa: La ubicación es crucial para determinar la elegibilidad laboral y ayuda a los reclutadores a evaluar si usted está en su mercado objetivo.',
          tips: "Consejos: Use el formato 'Ciudad, País' o 'Ciudad, Provincia, País'. Sea específico pero no incluya la dirección completa.",
        },
      },
      email: {
        label: 'Correo Electrónico',
        placeholder: 'su.nombre@ejemplo.com',
        tooltip: {
          content: 'Su dirección de correo electrónico profesional.',
          importance:
            'Por qué importa: Esta es la principal forma en que los reclutadores se pondrán en contacto con usted. Es esencial para los sistemas ATS y las comunicaciones de seguimiento.',
          tips: 'Consejos: Use una dirección de correo profesional, preferiblemente con su nombre. Evite direcciones informales o creativas.',
        },
      },
      phone: {
        label: 'Teléfono',
        placeholder: '+34 555 555 555',
        tooltip: {
          content: 'Su número de teléfono de contacto.',
          importance:
            'Por qué importa: Es un método de contacto secundario pero crucial. Algunos reclutadores prefieren llamar para las entrevistas iniciales.',
          tips: 'Consejos: Incluya el código de país para solicitudes internacionales. Use un formato consistente (ej., +34-555-555-555).',
        },
      },
      githubUrl: {
        label: 'URL de GitHub',
        placeholder: 'https://github.com/usuario',
        tooltip: {
          content: 'Enlace a su perfil de GitHub.',
          importance:
            'Por qué importa: Muestra sus contribuciones de código abierto y su actividad de programación. Muchas empresas tecnológicas buscan específicamente esto.',
          tips: 'Consejos: Asegúrese de que su perfil esté actualizado y muestre su mejor trabajo. Fije los repositorios más relevantes.',
        },
      },
      linkedinUrl: {
        label: 'URL de LinkedIn',
        placeholder: 'https://linkedin.com/in/usuario',
        tooltip: {
          content: 'La URL de su perfil de LinkedIn.',
          importance:
            'Por qué importa: LinkedIn es un punto de referencia estándar para que los reclutadores verifiquen su experiencia y su red de contactos.',
          tips: 'Consejos: Use una URL personalizada de LinkedIn con su nombre. Mantenga su perfil sincronizado con su CV.',
        },
      },
      portfolioUrl: {
        label: 'URL del Portafolio',
        placeholder: 'https://su-portafolio.com',
        tooltip: {
          content: 'Enlace a su sitio web personal o portafolio.',
          importance:
            'Por qué importa: Ofrece una visión más profunda de su trabajo y personalidad. Ideal para mostrar proyectos que no están en GitHub.',
          tips: 'Consejos: Asegúrese de que sea compatible con dispositivos móviles y cargue rápidamente. Destaque su trabajo más relevante y de mejor calidad.',
        },
      },
      willRelocate: {
        label: 'Disponible para Reubicación',
        tooltip: {
          content: 'Indica si usted está dispuesto a mudarse por una oportunidad laboral.',
          importance:
            'Por qué importa: Ayuda a los reclutadores a relacionarlo con oportunidades en diferentes ubicaciones. Puede abrir más posibilidades laborales.',
          tips: 'Consejos: Considere los requisitos de visa y los costos de reubicación al seleccionar esta opción.',
        },
      },
      bio: {
        label: 'Biografía Profesional',
        placeholder:
          'Escriba un breve resumen profesional destacando su experiencia y objetivos profesionales...',
        tooltip: {
          content: 'Un breve resumen profesional que destaca su experiencia y objetivos profesionales.',
          importance:
            'Por qué importa: Este es su discurso de presentación. A menudo es el primer párrafo que leen los reclutadores y les ayuda a entender rápidamente su propuesta de valor.',
          tips: 'Consejos: Manténgalo entre 3 y 5 oraciones. Concéntrese en su propuesta de valor única, logros clave y dirección profesional. Use palabras clave de la industria de forma natural.',
        },
      },
    },
    experience: {
      sectionTitle: 'Experiencia Laboral',
      addButton: 'Añadir Experiencia',
    },
    education: {
      sectionTitle: 'Educación',
      addButton: 'Añadir Educación',
    },
  },
};
