export const form = {
  sections: {
    personalInfo: {
      sectionTitle: 'Información Personal',
      fullName: {
        label: 'Nombre Completo',
        placeholder: 'Ingrese su nombre completo',
        tooltip: {
          content: "Su nombre profesional completo como desea que aparezca en su CV.",
          importance: "Por qué importa: Es lo primero que ven los reclutadores y se usa para el sistema ATS.",
          tips: "Consejos: Use su nombre legal o nombre profesional consistente.",
        },
      },
      professionalTitle: {
        label: 'Título Profesional',
        placeholder: 'ej., Ingeniero de Software Senior',
        tooltip: {
          content: "Su cargo actual o deseado.",
          importance: "Por qué importa: Ayuda a los reclutadores a entender rápidamente su nivel profesional.",
          tips: "Consejos: Use títulos estándar de la industria en lugar de títulos creativos.",
        },
      },
    },
    experience: {
      title: 'Experiencia Laboral',
      addButton: 'Añadir Experiencia',
    },
    education: {
      title: 'Educación',
      addButton: 'Añadir Educación',
    },
  },
};