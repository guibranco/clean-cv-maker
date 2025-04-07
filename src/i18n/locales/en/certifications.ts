export const certifications = {
  title: 'Certifications',
  addButton: 'Add Certificate',
  name: {
    label: 'Certificate Name',
    placeholder: 'Enter certificate name',
    tooltip: {
      content: "The name of your certificate or certification.",
      importance: "This is what appears on your CV and helps recruiters understand your qualifications.",
      tips: "Use the official name of the certification as it appears on your credential.",
    },
  },
  issuer: {
    label: 'Issuing Organization',
    placeholder: 'Enter issuing organization',
    tooltip: {
      content: "The organization that issued the certificate.",
      importance: "The credibility of the issuer adds weight to your certification.",
      tips: "Use the official name of the issuing organization.",
    },
  },
  issuerLogo: {
    label: 'Issuer Logo URL',
    tooltip: {
      content: "URL to the issuing organization's logo.",
      importance: "Visual representation helps with quick recognition.",
      tips: "Use a high-quality, official logo. Ensure the URL is permanent and accessible.",
    },
  },
  dates: {
    issueDate: {
      label: 'Issue Date',
      tooltip: {
        content: "When you received this certificate.",
        importance: "Shows the currency of your certifications.",
        tips: "Use the date shown on your certificate.",
      },
    },
    expiryDate: {
      label: 'Expiry Date',
      tooltip: {
        content: "When this certificate expires, if applicable.",
        importance: "Some certifications require renewal, showing you maintain current knowledge.",
        tips: "Check if your certification needs renewal and track the expiry date.",
      },
    },
    neverExpires: 'Never expires',
  },
  credential: {
    id: {
      label: 'Credential ID',
      placeholder: 'Enter credential ID',
      tooltip: {
        content: "The unique identifier for your certificate.",
        importance: "Helps verify the authenticity of your certification.",
        tips: "Copy this exactly as it appears on your certificate or credential page.",
      },
    },
    url: {
      label: 'Credential URL',
      placeholder: 'Enter credential URL',
      tooltip: {
        content: "Link to verify your certificate online.",
        importance: "Allows quick verification of your credentials.",
        tips: "Use the permanent verification URL if provided by the issuer.",
      },
    },
  },
  isPaid: {
    label: 'This is a paid certification',
    tooltip: {
      content: "Indicate if this was a paid certification.",
      importance: "Paid certifications often carry more weight with employers.",
      tips: "Free certifications can still be valuable, but be selective about which ones to include.",
    },
    warning: "Free certifications may be viewed less favorably by some employers. Consider including only the most relevant ones.",
  },
  topics: {
    label: 'Topics & Skills Covered',
    addButton: 'Add Topic',
    placeholder: 'Enter a topic or skill covered',
    tooltip: {
      content: "Key topics and skills covered in the certification.",
      importance: "Shows the specific knowledge and competencies validated by this certification.",
      tips: "Include the most relevant and valuable skills for your target roles.",
    },
  },
};