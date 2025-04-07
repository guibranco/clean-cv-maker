import { type PersonalInfoFormData } from './PersonalInfoForm';
import { Mail, Phone, MapPin, Globe, Github, Linkedin } from 'lucide-react';
import { getProficiencyLabel, calculateYearsOfExperience } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

interface CVPreviewProps {
  data: PersonalInfoFormData;
}

export function CVPreview({ data }: CVPreviewProps) {
  const { t } = useTranslation(['common']);

  return (
    <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{data.fullName}</h1>
        <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-4">{data.title}</h2>
        
        <div className="space-y-2 text-gray-600 dark:text-gray-300">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>
              {data.location} {data.willRelocate && t('common:cv.availableForRelocation')}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <a href={`mailto:${data.email}`} className="hover:text-blue-600 dark:hover:text-blue-400">{data.email}</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>{data.phone}</span>
          </div>
          
          <div className="flex gap-4 mt-2">
            {data.githubUrl && (
              <a href={data.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            )}
            {data.linkedinUrl && (
              <a href={data.linkedinUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            )}
            {data.portfolioUrl && (
              <a href={data.portfolioUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400">
                <Globe className="w-4 h-4" />
                Portfolio
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
          {t('common:cv.sections.summary')}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{data.bio}</p>
      </div>

      {data.experienceYears && data.experienceYears.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('common:cv.sections.experienceYears')}
          </h3>
          <ul className="list-none space-y-2">
            {data.experienceYears.map((exp, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">
                {exp.technology}: {calculateYearsOfExperience(exp.startDate)}+ {t('common:cv.years')}
              </li>
            ))}
          </ul>
        </div>
      )}

      {data.projectsWorked && data.projectsWorked.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('common:cv.sections.projectsWorked')}
          </h3>
          <ul className="list-disc list-inside space-y-2">
            {data.projectsWorked.map((project, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">{project}</li>
            ))}
          </ul>
        </div>
      )}

      {data.hasExperience && data.experiences && data.experiences.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('common:cv.sections.workExperience')}
          </h3>
          {data.experiences.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-gray-900 dark:text-white font-medium">{exp.companyName}</h4>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {[
                      exp.contractType && exp.contractType.replace('-', ' '),
                      exp.workSchema && exp.workSchema.replace('-', ' '),
                      exp.companySize,
                      exp.companyIndustry
                    ].filter(Boolean).join(' • ')}
                  </div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              {exp.companyDescription && (
                <p className="text-gray-700 dark:text-gray-300 mb-2">{exp.companyDescription}</p>
              )}
              {exp.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="ml-4 mb-4">
                  <div className="flex justify-between items-start">
                    <h5 className="text-gray-800 dark:text-gray-200 font-medium">{role.title}</h5>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {role.startDate} - {role.current ? 'Present' : role.endDate}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">{role.description}</p>
                  {role.achievements.filter(Boolean).length > 0 && (
                    <ul className="list-disc list-inside space-y-1">
                      {role.achievements.filter(Boolean).map((achievement, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300">{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {data.hasEducation && data.education && data.education.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('common:cv.sections.education')}
          </h3>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-gray-900 dark:text-white font-medium">{edu.institution}</h4>
                  <div className="text-gray-700 dark:text-gray-300">{edu.degree}</div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                </span>
              </div>
              {edu.topics.filter(Boolean).length > 0 && (
                <ul className="list-disc list-inside space-y-1">
                  {edu.topics.filter(Boolean).map((topic, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300">{topic}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {data.hasCertificates && data.certificates && data.certificates.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('common:cv.sections.certifications')}
          </h3>
          {data.certificates.map((cert, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="text-gray-900 dark:text-white font-medium">{cert.name}</h4>
                  <div className="text-gray-700 dark:text-gray-300">{cert.issuer}</div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {cert.issueDate}{cert.neverExpires ? '' : ` - ${cert.expiryDate || 'No expiry date'}`}
                </span>
              </div>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener norefer
rer"
                  className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  View Credential
                </a>
              )}
              {cert.topics.filter(Boolean).length > 0 && (
                <ul className="list-disc list-inside space-y-1 mt-2">
                  {cert.topics.filter(Boolean).map((topic, i) => (
                    <li key={i} className="text-gray-700 dark:text-gray-300">{topic}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {data.languages && data.languages.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
            {t('common:cv.sections.languages')}
          </h3>
          <ul className="list-none space-y-2">
            {data.languages.map((lang, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{lang.language}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {getProficiencyLabel(lang.proficiency)}
                  </span>
                </div>
                <div className="mt-1 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 w-6 rounded-full ${
                        i < lang.proficiency
                          ? 'bg-blue-600 dark:bg-blue-500'
                          : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}