import { useTranslation } from 'react-i18next';
import { FormField } from './FormField';
import { FormCheckbox } from './FormCheckbox';
import { LanguagesSection } from './LanguagesSection';
import { ExperienceYearsSection } from './ExperienceYearsSection';
import { ProjectsWorkedSection } from './ProjectsWorkedSection';

export function PersonalInfoSection() {
  const { t } = useTranslation(['form']);

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        {t('form:sections.personalInfo.sectionTitle')}
      </h2>
      
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          name="fullName"
          label={t('form:sections.personalInfo.fullName.label')}
          placeholder={t('form:sections.personalInfo.fullName.placeholder')}
          required
          tooltip={{
            content: t('form:sections.personalInfo.fullName.tooltip.content'),
            importance: t('form:sections.personalInfo.fullName.tooltip.importance'),
            tips: t('form:sections.personalInfo.fullName.tooltip.tips'),
          }}
        />
        <FormField
          name="title"
          label={t('form:sections.personalInfo.professionalTitle.label')}
          placeholder={t('form:sections.personalInfo.professionalTitle.placeholder')}
          required
          tooltip={{
            content: t('form:sections.personalInfo.professionalTitle.tooltip.content'),
            importance: t('form:sections.personalInfo.professionalTitle.tooltip.importance'),
            tips: t('form:sections.personalInfo.professionalTitle.tooltip.tips'),
          }}
        />
        <FormField
          name="location"
          label={t('form:sections.personalInfo.location.label')}
          placeholder={t('form:sections.personalInfo.location.placeholder')}
          required
          tooltip={{
            content: t('form:sections.personalInfo.location.tooltip.content'),
            importance: t('form:sections.personalInfo.location.tooltip.importance'),
            tips: t('form:sections.personalInfo.location.tooltip.tips'),
          }}
        />
        <FormField
          name="email"
          label={t('form:sections.personalInfo.email.label')}
          type="email"
          placeholder={t('form:sections.personalInfo.email.placeholder')}
          required
          tooltip={{
            content: t('form:sections.personalInfo.email.tooltip.content'),
            importance: t('form:sections.personalInfo.email.tooltip.importance'),
            tips: t('form:sections.personalInfo.email.tooltip.tips'),
          }}
        />
        <FormField
          name="phone"
          label={t('form:sections.personalInfo.phone.label')}
          type="tel"
          placeholder={t('form:sections.personalInfo.phone.placeholder')}
          required
          tooltip={{
            content: t('form:sections.personalInfo.phone.tooltip.content'),
            importance: t('form:sections.personalInfo.phone.tooltip.importance'),
            tips: t('form:sections.personalInfo.phone.tooltip.tips'),
          }}
        />
        <FormField
          name="githubUrl"
          label={t('form:sections.personalInfo.githubUrl.label')}
          type="url"
          placeholder={t('form:sections.personalInfo.githubUrl.placeholder')}
          tooltip={{
            content: t('form:sections.personalInfo.githubUrl.tooltip.content'),
            importance: t('form:sections.personalInfo.githubUrl.tooltip.importance'),
            tips: t('form:sections.personalInfo.githubUrl.tooltip.tips'),
          }}
        />
        <FormField
          name="linkedinUrl"
          label={t('form:sections.personalInfo.linkedinUrl.label')}
          type="url"
          placeholder={t('form:sections.personalInfo.linkedinUrl.placeholder')}
          tooltip={{
            content: t('form:sections.personalInfo.linkedinUrl.tooltip.content'),
            importance: t('form:sections.personalInfo.linkedinUrl.tooltip.importance'),
            tips: t('form:sections.personalInfo.linkedinUrl.tooltip.tips'),
          }}
        />
        <FormField
          name="portfolioUrl"
          label={t('form:sections.personalInfo.portfolioUrl.label')}
          type="url"
          placeholder={t('form:sections.personalInfo.portfolioUrl.placeholder')}
          tooltip={{
            content: t('form:sections.personalInfo.portfolioUrl.tooltip.content'),
            importance: t('form:sections.personalInfo.portfolioUrl.tooltip.importance'),
            tips: t('form:sections.personalInfo.portfolioUrl.tooltip.tips'),
          }}
        />
      </div>

      <FormCheckbox
        name="willRelocate"
        label={t('form:sections.personalInfo.willRelocate.label')}
        tooltip={{
          content: t('form:sections.personalInfo.willRelocate.tooltip.content'),
          importance: t('form:sections.personalInfo.willRelocate.tooltip.importance'),
          tips: t('form:sections.personalInfo.willRelocate.tooltip.tips'),
        }}
      />

      <FormField
        name="bio"
        label={t('form:sections.personalInfo.bio.label')}
        placeholder={t('form:sections.personalInfo.bio.placeholder')}
        textarea
        required
        tooltip={{
          content: t('form:sections.personalInfo.bio.tooltip.content'),
          importance: t('form:sections.personalInfo.bio.tooltip.importance'),
          tips: t('form:sections.personalInfo.bio.tooltip.tips'),
        }}
      />

      <ExperienceYearsSection />
      <ProjectsWorkedSection />
      <LanguagesSection />
    </div>
  );
}