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
import { zodResolver } from '@hookform/resolvers/zod';
import { PersonalInfoSection } from './form/PersonalInfoSection';
import { FormActions } from './form/FormActions';
import { PreviewSection } from './form/PreviewSection';
import { AutoSaveTooltip } from './form/AutoSaveTooltip';
import { useTranslation } from 'react-i18next';
import { CollapsibleSection } from './form/CollapsibleSection';
import { useFormValidation } from '@/lib/hooks/useFormValidation';
import { personalInfoSchema, type PersonalInfoFormData } from '@/lib/schemas/personal-info';

interface PersonalInfoFormProps {
  initialData?: PersonalInfoFormData;
}

export function PersonalInfoForm({ initialData }: PersonalInfoFormProps) {
  const { t } = useTranslation(['common']);
  const methods = useForm<PersonalInfoFormData>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      hasExperience: false,
      hasProjects: false,
      hasEducation: false,
      hasCertificates: false,
      experienceYears: [],
      projectsWorked: [],
      languages: [],
      experiences: [
        {
          companyName: '',
          contractType: '',
          workSchema: '',
          startDate: '',
          endDate: '',
          current: false,
          roles: [{ title: '', startDate: '', endDate: '', current: false, description: '', achievements: [''] }],
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

  const { handleSubmit, watch, reset, setValue, formState: { errors } } = methods;
  const [lastSaveTime, setLastSaveTime] = useState<number>(0);
  const formData = watch();
  const hasExperience = watch('hasExperience');
  const hasProjects = watch('hasProjects');
  const hasEducation = watch('hasEducation');
  const hasCertificates = watch('hasCertificates');

  const { showTooltip, formatValidationErrors, tooltipMessage, showAutoSaveTooltip } = useFormValidation();

  const hasData = formData.fullName || formData.title || formData.bio || 
    (formData.experiences?.some(exp => exp.companyName)) ||
    (formData.education?.some(edu => edu.institution)) ||
    (formData.projects?.some(proj => proj.name));

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

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
      const errorMessage = formatValidationErrors(errors);
      showTooltip(errorMessage);
      return;
    }
    
    const versionId = saveVersion(formData, 'completed');
    if (versionId) {
      setLastSaveTime(Date.now());
      showTooltip('CV saved as completed version');
    }
  };

  const handleGenerateHTML = async () => {
    const result = await methods.trigger();
    if (!result) {
      const errorMessage = formatValidationErrors(errors);
      showTooltip(errorMessage);
      return;
    }
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