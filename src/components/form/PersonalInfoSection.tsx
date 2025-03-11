import { FormField } from './FormField';
import { FormCheckbox } from './FormCheckbox';

export function PersonalInfoSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Personal Information</h2>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          name="fullName"
          label="Full Name"
          required
          tooltip={{
            content: "Your complete professional name as you'd like it to appear on your CV.",
            importance: "This is often the first thing recruiters see and is used for ATS (Applicant Tracking System) matching.",
            tips: "Use your full legal name or consistent professional name. Avoid nicknames unless they're your established professional identity."
          }}
        />
        <FormField
          name="title"
          label="Professional Title"
          required
          tooltip={{
            content: "Your current or target job title/role.",
            importance: "This helps recruiters quickly understand your career level and expertise. It's a key field for job matching in ATS systems.",
            tips: "Be specific but concise. Use industry-standard titles rather than creative ones (e.g., 'Senior Software Engineer' instead of 'Code Ninja')."
          }}
        />
        <FormField
          name="location"
          label="Location"
          required
          tooltip={{
            content: "Your current city and country/region.",
            importance: "Location is crucial for determining job eligibility and helps recruiters assess if you're in their target market.",
            tips: "Format as 'City, Country' or 'City, State, Country'. Be specific but don't include full address."
          }}
        />
        <FormField
          name="email"
          label="Email"
          type="email"
          required
          tooltip={{
            content: "Your professional email address.",
            importance: "This is the primary way recruiters will contact you. It's essential for ATS systems and follow-up communications.",
            tips: "Use a professional email address, preferably with your name. Avoid casual or creative addresses."
          }}
        />
        <FormField
          name="phone"
          label="Phone"
          type="tel"
          required
          tooltip={{
            content: "Your contact phone number.",
            importance: "A secondary but crucial contact method. Some recruiters prefer calling for initial screenings.",
            tips: "Include country code for international applications. Format consistently (e.g., +1-555-555-5555)."
          }}
        />
        <FormField
          name="githubUrl"
          label="GitHub URL"
          type="url"
          tooltip={{
            content: "Link to your GitHub profile.",
            importance: "Shows your open-source contributions and coding activity. Many tech companies specifically look for this.",
            tips: "Ensure your profile is up-to-date and showcases your best work. Pin relevant repositories."
          }}
        />
        <FormField
          name="linkedinUrl"
          label="LinkedIn URL"
          type="url"
          tooltip={{
            content: "Your LinkedIn profile URL.",
            importance: "LinkedIn is a standard reference point for recruiters to verify your experience and network.",
            tips: "Use a custom LinkedIn URL with your name. Keep your profile synchronized with your CV."
          }}
        />
        <FormField
          name="portfolioUrl"
          label="Portfolio URL"
          type="url"
          tooltip={{
            content: "Link to your personal website or portfolio.",
            importance: "Provides a deeper look at your work and personality. Great for showcasing projects not on GitHub.",
            tips: "Ensure it's mobile-friendly and loads quickly. Highlight your best and most relevant work."
          }}
        />
      </div>

      <FormCheckbox
        name="willRelocate"
        label="Available for Relocation"
        tooltip={{
          content: "Indicates if you're willing to move for a job opportunity.",
          importance: "Helps recruiters match you with opportunities in different locations. Can open up more job possibilities.",
          tips: "Consider visa requirements and relocation costs when selecting this option."
        }}
      />

      <FormField
        name="bio"
        label="Professional Bio"
        textarea
        required
        tooltip={{
          content: "A brief professional summary highlighting your expertise and career goals.",
          importance: "This is your elevator pitch. It's often the first paragraph recruiters read and helps them quickly understand your value proposition.",
          tips: "Keep it to 3-5 sentences. Focus on your unique value proposition, key achievements, and career direction. Use industry keywords naturally."
        }}
      />
    </div>
  );
}