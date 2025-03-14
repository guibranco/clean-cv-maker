export const form = {
  sections: {
    personalInfo: {
      sectionTitle: 'Personal Information',
      fullName: {
        label: 'Full Name',
        placeholder: 'Enter your full name',
        tooltip: {
          content: "Your complete professional name as you'd like it to appear on your CV.",
          importance: "This is often the first thing recruiters see and is used for ATS matching.",
          tips: "Use your full legal name or consistent professional name.",
        },
      },
      professionalTitle: {
        label: 'Professional Title',
        placeholder: 'e.g., Senior Software Engineer',
        tooltip: {
          content: "Your current or target job title/role.",
          importance: "Helps recruiters quickly understand your career level and expertise.",
          tips: "Use industry-standard titles rather than creative ones.",
        },
      },
      location: {
        label: 'Location',
        placeholder: 'e.g., New York, NY',
        tooltip: {
          content: "Your current city and country/region.",
          importance: "Location is crucial for determining job eligibility and helps recruiters assess if you're in their target market.",
          tips: "Format as 'City, Country' or 'City, State, Country'. Be specific but don't include full address.",
        },
      },
      email: {
        label: 'Email',
        placeholder: 'your.name@example.com',
        tooltip: {
          content: "Your professional email address.",
          importance: "This is the primary way recruiters will contact you. It's essential for ATS systems and follow-up communications.",
          tips: "Use a professional email address, preferably with your name. Avoid casual or creative addresses.",
        },
      },
      phone: {
        label: 'Phone',
        placeholder: '+1 (555) 555-5555',
        tooltip: {
          content: "Your contact phone number.",
          importance: "A secondary but crucial contact method. Some recruiters prefer calling for initial screenings.",
          tips: "Include country code for international applications. Format consistently (e.g., +1-555-555-5555).",
        },
      },
      githubUrl: {
        label: 'GitHub URL',
        placeholder: 'https://github.com/username',
        tooltip: {
          content: "Link to your GitHub profile.",
          importance: "Shows your open-source contributions and coding activity. Many tech companies specifically look for this.",
          tips: "Ensure your profile is up-to-date and showcases your best work. Pin relevant repositories.",
        },
      },
      linkedinUrl: {
        label: 'LinkedIn URL',
        placeholder: 'https://linkedin.com/in/username',
        tooltip: {
          content: "Your LinkedIn profile URL.",
          importance: "LinkedIn is a standard reference point for recruiters to verify your experience and network.",
          tips: "Use a custom LinkedIn URL with your name. Keep your profile synchronized with your CV.",
        },
      },
      portfolioUrl: {
        label: 'Portfolio URL',
        placeholder: 'https://your-portfolio.com',
        tooltip: {
          content: "Link to your personal website or portfolio.",
          importance: "Provides a deeper look at your work and personality. Great for showcasing projects not on GitHub.",
          tips: "Ensure it's mobile-friendly and loads quickly. Highlight your best and most relevant work.",
        },
      },
      willRelocate: {
        label: 'Available for Relocation',
        tooltip: {
          content: "Indicates if you're willing to move for a job opportunity.",
          importance: "Helps recruiters match you with opportunities in different locations. Can open up more job possibilities.",
          tips: "Consider visa requirements and relocation costs when selecting this option.",
        },
      },
      bio: {
        label: 'Professional Bio',
        placeholder: 'Write a brief professional summary highlighting your expertise and career goals...',
        tooltip: {
          content: "A brief professional summary highlighting your expertise and career goals.",
          importance: "This is your elevator pitch. It's often the first paragraph recruiters read and helps them quickly understand your value proposition.",
          tips: "Keep it to 3-5 sentences. Focus on your unique value proposition, key achievements, and career direction. Use industry keywords naturally.",
        },
      },
    },
    experience: {
      sectionTitle: 'Work Experience',
      addButton: 'Add Experience',
    },
    education: {
      sectionTitle: 'Education',
      addButton: 'Add Education',
    },
  },
};