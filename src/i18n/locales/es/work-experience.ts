export const workExperience = {
  title: 'Experiencia Laboral',
  addButton: 'Añadir Experiencia',
  companyName: {
    label: 'Nombre de la Empresa',
    placeholder: 'Ingrese el nombre de la empresa',
    tooltip: {
      content: 'El nombre de la empresa donde trabajó.',
      importance:
        'Este es un campo clave para los sistemas ATS y ayuda a los reclutadores a verificar su historial laboral.',
      tips: 'Use el nombre oficial de la empresa, no abreviaturas ni nombres informales.',
    },
  },
  companyLogo: {
    label: 'URL del Logo de la Empresa',
    tooltip: {
      content: 'Una URL a la imagen del logo de la empresa.',
      importance: 'Añadir elementos visuales puede hacer que su CV sea más atractivo y memorable.',
      tips: 'Use una imagen de logo profesional de alta calidad. Asegúrese de que la URL sea permanente y accesible.',
    },
  },
  companySize: {
    label: 'Tamaño de la Empresa',
    placeholder: 'ej., 1-10, 11-50, 51-200, 201-500, 500+',
    tooltip: {
      content: 'El tamaño aproximado de la empresa en cantidad de empleados.',
      importance: 'Ayuda a los reclutadores a entender la escala de las organizaciones con las que ha trabajado.',
      tips: "Use rangos estándar como '1-10', '11-50', '51-200', '201-500', '500+'",
    },
  },
  industry: {
    label: 'Industria',
    tooltip: {
      content: 'La industria o sector principal de la empresa.',
      importance:
        'Muestra su experiencia en diferentes industrias y ayuda a encontrar empleos específicos del sector.',
      tips: 'Use términos estándar de la industria reconocidos en su campo.',
    },
  },
  description: {
    label: 'Descripción de la Empresa',
    tooltip: {
      content: 'Una breve descripción de lo que hace la empresa.',
      importance:
        'Brinda contexto sobre su entorno laboral y ayuda a los reclutadores a entender el enfoque de la empresa.',
      tips: 'Sea conciso pero informativo. Concéntrese en el negocio principal y los logros de la empresa.',
    },
  },
  contractType: {
    label: 'Tipo de Contrato',
    options: {
      fullTime: 'Tiempo Completo',
      partTime: 'Medio Tiempo',
      freelance: 'Freelance',
    },
    tooltip: {
      content: 'El tipo de contrato laboral que tenía.',
      importance: 'Aclara su situación laboral y ayuda a relacionarlo con oportunidades similares.',
      tips: 'Sea honesto sobre su tipo de empleo. Cada uno tiene sus propias ventajas.',
    },
  },
  workSchema: {
    label: 'Modalidad de Trabajo',
    options: {
      onSite: 'Presencial',
      remote: 'Remoto',
      hybrid: 'Híbrido',
    },
    tooltip: {
      content: 'Cómo realizaba su trabajo (presencial, remoto o híbrido).',
      importance:
        'La flexibilidad en la ubicación laboral es cada vez más importante tanto para empleadores como para empleados.',
      tips: 'Esto puede ser especialmente relevante para búsquedas de empleo remoto.',
    },
  },
  dates: {
    startDate: {
      label: 'Fecha de Inicio',
      tooltip: {
        content: 'Cuándo comenzó a trabajar en esta empresa.',
        importance: 'Muestra su progresión profesional y ayuda a verificar la duración del empleo.',
        tips: 'Use la fecha real de inicio, incluso para promociones internas o cambios de puesto.',
      },
    },
    endDate: {
      label: 'Fecha de Finalización',
      tooltip: {
        content: 'Cuándo terminó de trabajar en esta empresa.',
        importance: 'Completa su línea de tiempo laboral y muestra estabilidad en el empleo.',
        tips: "Use la casilla 'Actual' para su puesto actual.",
      },
    },
    current: 'Actual',
  },
  role: {
    title: {
      label: 'Título del Puesto',
      tooltip: {
        content: 'Su cargo o puesto en este rol.',
        importance: 'Los cargos son clave para la coincidencia con sistemas ATS y para mostrar la progresión profesional.',
        tips: 'Use títulos estándar de la industria. Evite títulos específicos de la empresa o creativos.',
      },
    },
    description: {
      label: 'Descripción del Puesto',
      tooltip: {
        content: 'Un resumen de sus responsabilidades y alcance en este puesto.',
        importance: 'Aquí es donde puede detallar su trabajo diario y su impacto.',
        tips: 'Use verbos de acción y cuantifique los resultados cuando sea posible. Concéntrese en sus responsabilidades más importantes.',
      },
    },
    achievements: {
      label: 'Logros Clave',
      addButton: 'Añadir Logro',
      placeholder: 'Logro',
      tooltip: {
        content: 'Logros y éxitos específicos en este puesto.',
        importance: 'Los logros demuestran su impacto y valor ante posibles empleadores.',
        tips: 'Use métricas y números cuando sea posible. Concéntrese en resultados e impacto, no solo en responsabilidades.',
      },
    },
  },
};
