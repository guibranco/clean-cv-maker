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
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  experienceYears: z.array(z.object({
    technology: z.string().min(1, 'Technology name is required'),
    startDate: z.string().min(1, 'Start date is required'),
  })).optional(),
  projectsWorked: z.array(z.string()).optional(),
  languages: z.array(z.object({
    language: z.string().min(1, 'Language name is required'),
    proficiency: z.number().min(0).max(5),
  })).optional(),
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
    topics: z.array(z.string()),
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
    topics: z.array(z.string()),
    isPaid: z.boolean(),
  })).optional(),
});

export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;

interface PersonalInfoFormProps {
  initialData?: PersonalInfoFormData;
}

interface CollapsibleSectionProps {
  title: string;
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
  children: React.ReactNode;
}

function CollapsibleSection({ title, enabled, onToggle, children }: CollapsibleSectionProps) {
  const [isExpanded, setIsExpanded] = useState(enabled);

  useEffect(() => {
    if (!enabled) {
      setIsExpanded(false);
    }
  }, [enabled]);

  return (
    <div className="border dark:border-gray-700 rounded-lg overflow-hidden">
      <div className="bg-gray-50 dark:bg-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Switch
              id={`enable-${title.toLowerCase()}`}
              checked={enabled}
              onCheckedChange={onToggle}
            />
            <label
              htmlFor={`enable-${title.toLowerCase()}`}
              className="text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer select-none"
            >
              {title}
            </label>
          </div>
          {enabled && (
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <ChevronDown className={cn(
                "h-5 w-5 transition-transform duration-200",
                isExpanded ? "transform rotate-180" : ""
              )} />
            </button>
          )}
        </div>
      </div>
      {enabled && isExpanded && (
        <div className="p-4 bg-white dark:bg-gray-900">
          {children}
        </div>
      )}
    </div>
  );
}

export function PersonalInfoForm({ initialData }: PersonalInfoFormProps) {
  const { t } = useTranslation(['common']);
  const methods = useForm<PersonalInfoFormData>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      hasExperience: true,
      hasProjects: true,
      hasEducation: true,
      hasCertificates: false,
      experienceYears: [{ technology: '', startDate: '' }],
      projectsWorked: [''],
      languages: [{ language: '', proficiency: 0 }],
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
          topics: [''],
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
          topics: [''],
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
          topics: [''],
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
          topics: [''],
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

            <CollapsibleSection
              title={t('common:switches.experience')}
              enabled={hasExperience}
              onToggle={handleExperienceToggle}
            >
              <ExperienceForm />
            </CollapsibleSection>

            <CollapsibleSection
              title={t('common:switches.education')}
              enabled={hasEducation}
              onToggle={handleEducationToggle}
            >
              <EducationForm />
            </CollapsibleSection>

            <CollapsibleSection
              title={t('common:switches.projects')}
              enabled={hasProjects}
              onToggle={handleProjectsToggle}
            >
              <ProjectsForm />
            </CollapsibleSection>

            <CollapsibleSection
              title={t('common:switches.certificates')}
              enabled={hasCertificates}
              onToggle={handleCertificatesToggle}
            >
              <CertificatesForm />
            </CollapsibleSection>
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