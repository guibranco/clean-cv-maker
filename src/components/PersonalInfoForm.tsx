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

  const { handleSubmit, watch, reset, setValue, formState: { errors }, trigger } = methods;
  const [lastSaveTime, setLastSaveTime] = useState<number>(0);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [isGeneratingHTML, setIsGeneratingHTML] = useState(false);
  const formData = watch();
  const hasExperience = watch('hasExperience');
  const hasProjects = watch('hasProjects');
  const hasEducation = watch('hasEducation');
  const hasCertificates = watch('hasCertificates');

  const { showTooltip, focusFirstInvalidField, tooltipMessage, showAutoSaveTooltip } = useFormValidation();

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

  const downloadPDF = (pdfBlob: Blob, fileName: string) => {
    if (typeof window === 'undefined') return;
    
    const downloadUrl = window.URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(downloadUrl);
  };

  const onSubmit = async (data: PersonalInfoFormData) => {
    try {
      setIsGeneratingPDF(true);
      
      // Clean up data based on switches
      const cleanData = {
        ...data,
        experiences: data.hasExperience ? data.experiences : undefined,
        education: data.hasEducation ? data.education : undefined,
        projects: data.hasProjects ? data.projects : undefined,
        certificates: data.hasCertificates ? data.certificates : undefined,
      };

      // Create PDF document
      const document = <CVDocument data={cleanData} />;
      
      // Generate PDF blob
      const pdfBlob = await pdf(document).toBlob();
      if (!pdfBlob) {
        throw new Error('Failed to generate PDF blob');
      }

      const fileName = `${cleanData.fullName.replace(/\s+/g, '-').toLowerCase()}-cv.pdf`;
      downloadPDF(pdfBlob, fileName);
      showTooltip('PDF CV generated successfully');
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      showTooltip('Failed to generate CV. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handleSaveCompleted = async () => {
    const result = await trigger();
    if (!result) {
      showTooltip('Please fill in all required fields before saving');
      focusFirstInvalidField(errors);
      return;
    }
    
    const versionId = saveVersion(formData, 'completed');
    if (versionId) {
      setLastSaveTime(Date.now());
      showTooltip('CV saved as completed version');
    }
  };

  const handleGenerateHTML = async () => {
    try {
      setIsGeneratingHTML(true);
      
      const result = await trigger();
      if (!result) {
        showTooltip('Please fill in all required fields before generating HTML');
        focusFirstInvalidField(errors);
        return;
      }
      
      // Clean up data based on switches
      const cleanData = {
        ...formData,
        experiences: formData.hasExperience ? formData.experiences : undefined,
        education: formData.hasEducation ? formData.education : undefined,
        projects: formData.hasProjects ? formData.projects : undefined,
        certificates: formData.hasCertificates ? formData.certificates : undefined,
      };
      
      generateHTML(cleanData);
      showTooltip('HTML CV generated successfully');
    } catch (error) {
      console.error('Error generating HTML:', error);
      showTooltip('Failed to generate HTML CV. Please try again.');
    } finally {
      setIsGeneratingHTML(false);
    }
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
            <div data-section="personalInfo">
              <PersonalInfoSection />
            </div>

            <div data-section="experiences">
              <CollapsibleSection
                title={t('common:switches.experience')}
                enabled={hasExperience}
                onToggle={handleExperienceToggle}
              >
                <ExperienceForm />
              </CollapsibleSection>
            </div>

            <div data-section="education">
              <CollapsibleSection
                title={t('common:switches.education')}
                enabled={hasEducation}
                onToggle={handleEducationToggle}
              >
                <EducationForm />
              </CollapsibleSection>
            </div>

            <div data-section="projects">
              <CollapsibleSection
                title={t('common:switches.projects')}
                enabled={hasProjects}
                onToggle={handleProjectsToggle}
              >
                <ProjectsForm />
              </CollapsibleSection>
            </div>

            <div data-section="certificates">
              <CollapsibleSection
                title={t('common:switches.certificates')}
                enabled={hasCertificates}
                onToggle={handleCertificatesToggle}
              >
                <CertificatesForm />
              </CollapsibleSection>
            </div>
          </div>

          <FormActions
            onSaveCompleted={handleSaveCompleted}
            onGenerateHTML={handleGenerateHTML}
            isGeneratingPDF={isGeneratingPDF}
            isGeneratingHTML={isGeneratingHTML}
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