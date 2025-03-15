/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm, FormProvider } from 'react-hook-form';
import { pdf } from '@react-pdf/renderer';
import { CVDocument } from './CVDocument';
import { useState, useEffect } from 'react';
import { ExperienceForm } from './ExperienceForm';
import { ProjectsForm } from './ProjectsForm';
import { EducationForm } from './EducationForm';
import { CertificatesForm } from './CertificatesForm';
import { saveVersion } from '@/lib/versioning';
import { generateHTML } from '@/lib/html-generator';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { PersonalInfoSection } from './form/PersonalInfoSection';
import { FormActions } from './form/FormActions';
import { PreviewSection } from './form/PreviewSection';
import { AutoSaveTooltip } from './form/AutoSaveTooltip';
import { Switch } from './ui/Switch';

const personalInfoSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  title: z.string().min(1, 'Professional title is required'),
  location: z.string().min(1, 'Location is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  phone: z.string().min(1, 'Phone number is required'),
  githubUrl: z.string().url('Invalid GitHub URL').optional().or(z.literal('')),
  linkedinUrl: z.string().url('Invalid LinkedIn URL').optional().or(z.literal('')),
  portfolioUrl: z.string().url('Invalid portfolio URL').optional().or(z.literal('')),
  willRelocate: z.boolean(),
  bio: z.string().min(1, 'Professional bio is required'),
  hasExperience: z.boolean().optional(),
  hasProjects: z.boolean().optional(),
  hasEducation: z.boolean().optional(),
  hasCertificates: z.boolean().optional(),
  experiences: z.array(z.object({
    companyName: z.string().min(1, 'Company name is required'),
    companyLogoUrl: z.string().optional(),
    companySize: z.string().optional(),
    companyIndustry: z.string().optional(),
    companyDescription: z.string().optional(),
    contractType: z.enum(['', 'full-time', 'part-time', 'freelance']),
    workSchema: z.enum(['', 'on-site', 'remote', 'hybrid']),
    startDate: z.string().min(1, 'Start date is required'),
    endDate: z.string().optional(),
    current: z.boolean(),
    roles: z.array(z.object({
      title: z.string().min(1, 'Role title is required'),
      startDate: z.string().min(1, 'Role start date is required'),
      endDate: z.string().optional(),
      current: z.boolean(),
      description: z.string().min(1, 'Role description is required'),
      achievements: z.array(z.string()),
    })).min(1, 'At least one role is required'),
  })).optional(),
  education: z.array(z.object({
    institution: z.string().min(1, 'Institution name is required'),
    institutionLogo: z.string().url('Invalid logo URL').optional().or(z.literal('')),
    degree: z.string().min(1, 'Degree is required'),
    startDate: z.string().min(1, 'Start date is required'),
    endDate: z.string().optional(),
    current: z.boolean(),
    description: z.string().optional(),
  })).optional(),
  projects: z.array(z.object({
    name: z.string().min(1, 'Project name is required'),
    icon: z.string().url('Invalid icon URL').optional(),
    description: z.string().min(1, 'Project description is required'),
    sourceCodeUrl: z.string().url('Invalid source code URL').optional(),
    isSourceOpen: z.boolean(),
    demoUrl: z.string().url('Invalid demo URL').optional(),
    hasDemoAvailable: z.boolean(),
    documentationUrl: z.string().url('Invalid documentation URL').optional(),
    hasDocumentation: z.boolean(),
    startDate: z.string().min(1, 'Start date is required'),
    techStack: z.array(z.string()).max(10, 'Maximum 10 technologies allowed'),
  })).optional(),
  certificates: z.array(z.object({
    name: z.string().min(1, 'Certificate name is required'),
    issuer: z.string().min(1, 'Issuer is required'),
    issuerLogo: z.string().url('Invalid logo URL').optional().or(z.literal('')),
    issueDate: z.string().min(1, 'Issue date is required'),
    expiryDate: z.string().optional(),
    neverExpires: z.boolean(),
    credentialId: z.string().optional(),
    credentialUrl: z.string().url('Invalid credential URL').optional().or(z.literal('')),
    description: z.string().optional(),
    isPaid: z.boolean(),
  })).optional(),
});

export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;

interface PersonalInfoFormProps {
  initialData?: PersonalInfoFormData;
}

/**
 * A functional component that renders a personal information form for users to input their CV details.
 * It utilizes React Hook Form for form management and Zod for schema validation.
 *
 * @param {Object} props - The component props.
 * @param {PersonalInfoFormProps} props.initialData - Initial data to populate the form fields.
 *
 * @returns {JSX.Element} The rendered form component.
 *
 * @throws {Error} Throws an error if PDF generation fails during form submission.
 */
export function PersonalInfoForm({ initialData }: PersonalInfoFormProps) {
  const methods = useForm<PersonalInfoFormData>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      hasExperience: true,
      hasProjects: true,
      hasEducation: true,
      hasCertificates: false,
      experiences: [
        {
          companyName: '',
          contractType: '',
          workSchema: '',
          startDate: '',
          endDate: '',
          current: false,
          roles: [{ title: '', startDate: '', endDate: '', current: false, description: '', achievements: ['', '', ''] }],
        },
      ],
      education: [
        {
          institution: '',
          institutionLogo: '',
          degree: '',
          startDate: '',
          endDate: '',
          current: false,
          description: '',
        },
      ],
      projects: [
        {
          name: '',
          description: '',
          isSourceOpen: true,
          hasDemoAvailable: true,
          hasDocumentation: false,
          startDate: '',
          techStack: [],
        },
      ],
      certificates: [
        {
          name: '',
          issuer: '',
          issueDate: '',
          neverExpires: false,
          isPaid: true,
        },
      ],
      ...initialData,
    },
    mode: 'onChange',
  });

  const { handleSubmit, watch, reset, setValue, formState: { errors, isValid } } = methods;
  const [lastSaveTime, setLastSaveTime] = useState<number>(0);
  const [showAutoSaveTooltip, setShowAutoSaveTooltip] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState('');
  const formData = watch();
  const hasExperience = watch('hasExperience');
  const hasProjects = watch('hasProjects');
  const hasEducation = watch('hasEducation');
  const hasCertificates = watch('hasCertificates');

  const hasData = formData.fullName || formData.title || formData.bio ||
    (formData.experiences?.some(exp => exp.companyName)) ||
    (formData.education?.some(edu => edu.institution)) ||
    (formData.projects?.some(proj => proj.name));

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  const showTooltip = (message: string) => {
    setTooltipMessage(message);
    setShowAutoSaveTooltip(true);
    setTimeout(() => setShowAutoSaveTooltip(false), 3000);
  };

  const handleFieldBlur = () => {
    const now = Date.now();
    if (now - lastSaveTime >= 1000) {
      const versionId = saveVersion(formData, 'draft');
      if (versionId) {
        setLastSaveTime(now);
        showTooltip('CV auto-saved as draft');
      }
    }
  };

  /**
   * Handles the submission of personal information form data and generates a CV in PDF format.
   *
   * This asynchronous function takes the form data, creates a CV document, converts it to a Blob,
   * and triggers a download of the generated PDF file. It also manages the creation and cleanup of
   * the object URL used for the download link.
   *
   * @param {PersonalInfoFormData} data - The personal information form data used to generate the CV.
   * @throws {Error} Throws an error if the PDF generation fails, which is caught and logged.
   * @returns {Promise<void>} A promise that resolves when the PDF has been successfully generated and downloaded.
   *
   * @example
   * // Example usage:
   * const formData = { fullName: 'John Doe', ... };
   * onSubmit(formData);
   */
  const onSubmit = async (data: PersonalInfoFormData) => {
    try {
      const doc = <CVDocument data={data} />;
      const blob = await pdf(doc).toBlob();

      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${data.fullName.replace(/\s+/g, '-').toLowerCase()}-cv.pdf`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate CV. Please try again.');
    }
  };

  /**
   * Handles the completion of a save operation.
   * This asynchronous function triggers a validation check and processes the form data.
   * If validation fails, it displays an error message and logs the validation errors to the console.
   * If validation succeeds, it saves the version of the form data and updates the last save time.
   *
   * @async
   * @function handleSaveCompleted
   * @returns {Promise<void>} A promise that resolves when the save operation is complete.
   *
   * @throws {Error} Throws an error if the save operation fails due to unexpected reasons.
   *
   * @example
   * // To use this function, simply call it when you want to handle the save completion.
   * await handleSaveCompleted();
   */
  const handleSaveCompleted = async () => {
    const result = await methods.trigger();
    if (!result) {
      const errorMessages = Object.entries(errors)
        .map(([key, value]) => `${key}: ${value?.message}`)
        .join('\n');
      showTooltip('Please fill in all required fields');
      console.error('Validation errors:', errorMessages);
      return;
    }

    const versionId = saveVersion(formData, 'completed');
    if (versionId) {
      setLastSaveTime(Date.now());
      showTooltip('CV saved as completed version');
    }
  };

  const handleGenerateHTML = () => {
    generateHTML(formData);
  };

  const handleExperienceToggle = (checked: boolean) => {
    setValue('hasExperience', checked);
    if (!checked) {
      setValue('experiences', undefined);
    } else {
      setValue('experiences', [
        {
          companyName: '',
          contractType: '',
          workSchema: '',
          startDate: '',
          endDate: '',
          current: false,
          roles: [{ title: '', startDate: '', endDate: '', current: false, description: '', achievements: [''] }],
        },
      ]);
    }
  };

  const handleEducationToggle = (checked: boolean) => {
    setValue('hasEducation', checked);
    if (!checked) {
      setValue('education', undefined);
    } else {
      setValue('education', [
        {
          institution: '',
          institutionLogo: '',
          degree: '',
          startDate: '',
          endDate: '',
          current: false,
          description: '',
        },
      ]);
    }
  };

  const handleProjectsToggle = (checked: boolean) => {
    setValue('hasProjects', checked);
    if (!checked) {
      setValue('projects', undefined);
    } else {
      setValue('projects', [
        {
          name: '',
          description: '',
          isSourceOpen: true,
          hasDemoAvailable: true,
          hasDocumentation: false,
          startDate: '',
          techStack: [],
        },
      ]);
    }
  };

  const handleCertificatesToggle = (checked: boolean) => {
    setValue('hasCertificates', checked);
    if (!checked) {
      setValue('certificates', undefined);
    } else {
      setValue('certificates', [
        {
          name: '',
          issuer: '',
          issueDate: '',
          neverExpires: false,
          isPaid: true,
        },
      ]);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="space-y-8" onBlur={handleFieldBlur}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-8">
            <PersonalInfoSection />

            <div className="flex items-center space-x-4">
              <Switch
                id="hasExperience"
                checked={hasExperience}
                onCheckedChange={handleExperienceToggle}
              />
              <label
                htmlFor="hasExperience"
                className="text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer select-none"
              >
                I have work experience
              </label>
            </div>

            {hasExperience && <ExperienceForm />}

            <div className="flex items-center space-x-4">
              <Switch
                id="hasEducation"
                checked={hasEducation}
                onCheckedChange={handleEducationToggle}
              />
              <label
                htmlFor="hasEducation"
                className="text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer select-none"
              >
                I want to add education
              </label>
            </div>

            {hasEducation && <EducationForm />}

            <div className="flex items-center space-x-4">
              <Switch
                id="hasProjects"
                checked={hasProjects}
                onCheckedChange={handleProjectsToggle}
              />
              <label
                htmlFor="hasProjects"
                className="text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer select-none"
              >
                I have projects to showcase
              </label>
            </div>

            {hasProjects && <ProjectsForm />}

            <div className="flex items-center space-x-4">
              <Switch
                id="hasCertificates"
                checked={hasCertificates}
                onCheckedChange={handleCertificatesToggle}
              />
              <label
                htmlFor="hasCertificates"
                className="text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer select-none"
              >
                I have certifications to add
              </label>
            </div>

            {hasCertificates && <CertificatesForm />}
          </div>

          <FormActions
            onSaveCompleted={handleSaveCompleted}
            onGenerateHTML={handleGenerateHTML}
          />
        </form>

        {hasData && <PreviewSection data={formData} />}

        <AutoSaveTooltip
          show={showAutoSaveTooltip}
          message={tooltipMessage}
        />
      </div>
    </FormProvider>
  );
}