export const workExperience = {
  title: 'Work Experience',
  addButton: 'Add Experience',
  companyName: {
    label: 'Company Name',
    placeholder: 'Enter company name',
    tooltip: {
      content: 'The name of the company where you worked.',
      importance:
        'This is a key field for ATS systems and helps recruiters verify your employment history.',
      tips: 'Use the official company name, not abbreviations or informal names.',
    },
  },
  companyLogo: {
    label: 'Company Logo URL',
    tooltip: {
      content: "A URL to the company's logo image.",
      importance: 'Adding visual elements can make your CV more engaging and memorable.',
      tips: 'Use a high-quality, professional logo image. Ensure the URL is permanent and accessible.',
    },
  },
  companySize: {
    label: 'Company Size',
    placeholder: 'e.g., 1-10, 11-50, 51-200, 201-500, 500+',
    tooltip: {
      content: 'The approximate size of the company in terms of employees.',
      importance: "Helps recruiters understand the scale of organizations you've worked with.",
      tips: "Use standard ranges like '1-10', '11-50', '51-200', '201-500', '500+'",
    },
  },
  industry: {
    label: 'Industry',
    tooltip: {
      content: 'The primary industry or sector of the company.',
      importance:
        'Shows your experience across different industries and helps with industry-specific job matching.',
      tips: 'Use standard industry terms that are recognized in your field.',
    },
  },
  description: {
    label: 'Company Description',
    tooltip: {
      content: 'A brief description of what the company does.',
      importance:
        "Provides context about your work environment and helps recruiters understand the company's focus.",
      tips: "Keep it concise but informative. Focus on the company's main business and achievements.",
    },
  },
  contractType: {
    label: 'Contract Type',
    options: {
      fullTime: 'Full Time',
      partTime: 'Part Time',
      freelance: 'Freelance',
    },
    tooltip: {
      content: 'The type of employment contract you had.',
      importance:
        'Clarifies your employment status and helps match you with similar opportunities.',
      tips: 'Be honest about your employment type. Each has its own advantages.',
    },
  },
  workSchema: {
    label: 'Work Schema',
    options: {
      onSite: 'On Site',
      remote: 'Remote',
      hybrid: 'Hybrid',
    },
    tooltip: {
      content: 'How you performed your work (on-site, remote, or hybrid).',
      importance:
        'Work location flexibility is increasingly important to both employers and employees.',
      tips: 'This can be especially relevant for remote job searches.',
    },
  },
  dates: {
    startDate: {
      label: 'Start Date',
      tooltip: {
        content: 'When you started working at this company.',
        importance: 'Shows your career progression and helps verify employment duration.',
        tips: 'Use the actual start date, even for internal promotions or role changes.',
      },
    },
    endDate: {
      label: 'End Date',
      tooltip: {
        content: 'When you finished working at this company.',
        importance: 'Completes your employment timeline and shows job stability.',
        tips: "Use the 'Current' checkbox for your present position.",
      },
    },
    current: 'Current',
  },
  role: {
    title: {
      label: 'Role Title',
      tooltip: {
        content: 'Your job title or position in this role.',
        importance: 'Job titles are key for ATS matching and showing career progression.',
        tips: 'Use standard industry titles. Avoid company-specific or creative titles.',
      },
    },
    description: {
      label: 'Role Description',
      tooltip: {
        content: 'A summary of your responsibilities and scope in this role.',
        importance: 'This is where you can detail your day-to-day work and impact.',
        tips: 'Use action verbs and quantify results where possible. Focus on your most significant responsibilities.',
      },
    },
    achievements: {
      label: 'Key Achievements',
      addButton: 'Add Achievement',
      placeholder: 'Achievement',
      tooltip: {
        content: 'Specific accomplishments and successes in this role.',
        importance: 'Achievements demonstrate your impact and value to potential employers.',
        tips: 'Use metrics and numbers when possible. Focus on results and impact rather than just responsibilities.',
      },
    },
  },
};
