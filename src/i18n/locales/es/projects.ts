export const projects = {
  title: 'Proyectos',
  addButton: 'Añadir Proyecto',
  name: {
    label: 'Nombre del Proyecto',
    placeholder: 'Ingrese el nombre del proyecto',
    tooltip: {
      content: 'El nombre de su proyecto.',
      importance: 'Hace que su proyecto sea fácilmente identificable y memorable.',
      tips: 'Use un nombre claro y descriptivo que refleje el propósito del proyecto.',
    },
  },
  icon: {
    label: 'URL del Ícono del Proyecto',
    tooltip: {
      content: 'URL del ícono o logo del proyecto.',
      importance: 'La representación visual ayuda a que su proyecto destaque.',
      tips: 'Use una imagen cuadrada con un fondo claro. Los formatos SVG o PNG funcionan mejor.',
    },
  },
  description: {
    label: 'Descripción del Proyecto',
    placeholder: 'Describa su proyecto...',
    tooltip: {
      content: 'Una breve descripción de lo que hace su proyecto.',
      importance: 'Ayuda a los lectores a entender rápidamente el propósito y el valor de su proyecto.',
      tips: 'Concéntrese en el problema que resuelve y sus características clave. Sea conciso pero informativo.',
    },
  },
  sourceCode: {
    label: 'El código fuente es abierto',
    url: {
      label: 'URL del Código Fuente',
      tooltip: {
        content: 'Enlace al repositorio del código fuente de su proyecto.',
        importance: 'Permite que otros revisen su código e implementación.',
        tips: 'Generalmente una URL de repositorio de GitHub, GitLab o Bitbucket.',
      },
    },
  },
  demo: {
    label: 'Demo disponible',
    url: {
      label: 'URL de la Demo',
      tooltip: {
        content: 'Enlace a una demo en vivo de su proyecto.',
        importance: 'Permite que otros prueben su proyecto de inmediato.',
        tips: 'Asegúrese de que la demo sea estable y represente bien su proyecto.',
      },
    },
  },
  documentation: {
    label: 'Documentación disponible',
    url: {
      label: 'URL de la Documentación',
      tooltip: {
        content: 'Enlace a la documentación de su proyecto.',
        importance: 'Ayuda a otros a entender cómo usar su proyecto.',
        tips: 'Considere usar plataformas como ReadTheDocs o GitHub Pages.',
      },
    },
  },
  startDate: {
    label: 'Fecha de Inicio',
    tooltip: {
      content: 'Cuándo comenzó a trabajar en este proyecto.',
      importance: 'Muestra la línea de tiempo del proyecto y la progresión de su experiencia.',
      tips: 'Use el mes en que hizo su primera contribución significativa.',
    },
  },
  techStack: {
    label: 'Stack Tecnológico',
    addCustom: {
      placeholder: 'Añadir tecnología personalizada',
      button: 'Añadir',
    },
    tooltip: {
      content: 'Las tecnologías utilizadas en este proyecto.',
      importance: 'Muestra su experiencia técnica y la complejidad del proyecto.',
      tips: 'Seleccione hasta 10 tecnologías. Añada otras personalizadas si es necesario.',
    },
    limit: {
      text: 'tecnologías seleccionadas',
      max: 'Máximo 10 tecnologías permitidas',
    },
    suggested: 'Tecnologías sugeridas:',
  },
};
