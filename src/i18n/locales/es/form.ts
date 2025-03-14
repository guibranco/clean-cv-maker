export const form = {
  sections: {
    personalInfo: {
      title: 'Información Personal',
      fullName: {
        label: 'Nombre Completo',
        placeholder: 'Ingrese su nombre completo',
        tooltip: {
          content: "Su nombre profesional completo como desea que aparezca en su CV.",
          importance: "Es lo primero que ven los reclutadores y se usa para el sistema ATS.",
          tips: "Use su nombre legal o nombre profesional consistente.",
        },
      },
      title: {
        label: 'Título Profesional',
        placeholder: 'ej., Ingeniero de Software Senior',
        tooltip: {
          content: "Su cargo actual o deseado.",
          importance: "Ayuda a los reclutadores a entender rápidamente su nivel profesional.",
          tips: "Use títulos estándar de la industria en lugar de títulos creativos.",
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