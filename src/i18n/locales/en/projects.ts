export const projects = {
  title: 'Projects',
  addButton: 'Add Project',
  name: {
    label: 'Project Name',
    placeholder: 'Enter project name',
    tooltip: {
      content: 'The name of your project.',
      importance: 'Makes your project easily identifiable and memorable.',
      tips: "Use a clear, descriptive name that reflects the project's purpose.",
    },
  },
  icon: {
    label: 'Project Icon URL',
    tooltip: {
      content: "URL to the project's icon or logo.",
      importance: 'Visual representation helps make your project stand out.',
      tips: 'Use a square image with a clear background. SVG or PNG formats work best.',
    },
  },
  description: {
    label: 'Project Description',
    placeholder: 'Describe your project...',
    tooltip: {
      content: 'A brief description of what your project does.',
      importance: "Helps readers quickly understand your project's purpose and value.",
      tips: 'Focus on the problem it solves and key features. Keep it concise but informative.',
    },
  },
  sourceCode: {
    label: 'Source code is open',
    url: {
      label: 'Source Code URL',
      tooltip: {
        content: "Link to your project's source code repository.",
        importance: 'Allows others to review your code and implementation.',
        tips: 'Usually a GitHub, GitLab, or Bitbucket repository URL.',
      },
    },
  },
  demo: {
    label: 'Demo available',
    url: {
      label: 'Demo URL',
      tooltip: {
        content: 'Link to a live demo of your project.',
        importance: 'Allows others to try your project immediately.',
        tips: 'Ensure the demo is stable and represents your project well.',
      },
    },
  },
  documentation: {
    label: 'Documentation available',
    url: {
      label: 'Documentation URL',
      tooltip: {
        content: "Link to your project's documentation.",
        importance: 'Helps others understand how to use your project.',
        tips: 'Consider using platforms like ReadTheDocs or GitHub Pages.',
      },
    },
  },
  startDate: {
    label: 'Start Date',
    tooltip: {
      content: 'When you started working on this project.',
      importance: 'Shows project timeline and your experience progression.',
      tips: 'Use the month when you made your first significant contribution.',
    },
  },
  techStack: {
    label: 'Tech Stack',
    addCustom: {
      placeholder: 'Add custom technology',
      button: 'Add',
    },
    tooltip: {
      content: 'The technologies used in this project.',
      importance: 'Shows your technical expertise and project complexity.',
      tips: 'Select up to 10 technologies. Add custom ones if needed.',
    },
    limit: {
      text: 'technologies selected',
      max: 'Maximum 10 technologies allowed',
    },
    suggested: 'Suggested technologies:',
  },
};
