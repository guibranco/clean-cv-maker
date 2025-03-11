import { type PersonalInfoFormData } from './PersonalInfoForm';
import { type Experience, type Role } from './ExperienceForm';
import { type Education } from './EducationForm';
import { Github, Linkedin, Globe, MapPin, Mail, Phone } from 'lucide-react';

interface CVPreviewProps {
  data: PersonalInfoFormData;
}

function formatDate(date: string, current: boolean) {
  if (!date) return '';
  if (current) return 'Present';
  const [year, month] = date.split('-');
  return `${new Date(parseInt(year), parseInt(month) - 1).toLocaleString('default', { month: 'short' })} ${year}`;
}

function isExperienceEmpty(experience: Experience): boolean {
  return !experience.companyName && !experience.roles.some(role => role.title || role.description);
}

function isEducationEmpty(education: Education): boolean {
  return !education.institution && !education.degree;
}

function RoleItem({ role }: { role: Role }) {
  if (!role.title && !role.description) return null;

  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-baseline">
        <h4 className="text-lg font-medium text-gray-900">{role.title}</h4>
        <span className="text-sm text-gray-600">
          {formatDate(role.startDate, false)} - {formatDate(role.endDate, role.current)}
        </span>
      </div>
      <p className="mt-2 text-gray-700">{role.description}</p>
      {role.achievements.filter(Boolean).length > 0 && (
        <ul className="mt-2 list-disc list-inside space-y-1">
          {role.achievements.filter(Boolean).map((achievement, index) => (
            <li key={index} className="text-gray-700">{achievement}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function CVPreview({ data }: CVPreviewProps) {
  const nonEmptyExperiences = data.experiences?.filter(exp => !isExperienceEmpty(exp)) || [];
  const nonEmptyEducation = data.education?.filter(edu => !isEducationEmpty(edu)) || [];

  return (
    <div className="max-w-[21cm] mx-auto bg-white shadow-lg p-8 print:shadow-none">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{data.fullName}</h1>
        <h2 className="text-xl text-gray-600 mb-4">{data.title}</h2>
        <div className="text-sm text-gray-600 space-y-2">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>
              {data.location}
              {data.willRelocate && (
                <span className="ml-2 text-blue-600 italic">
                  • Available for relocation
                </span>
              )}
            </span>
          </div>
          <p className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            {data.email}
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            {data.phone}
          </p>
          <div className="space-y-1">
            {data.githubUrl && (
              <p className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                {data.githubUrl}
              </p>
            )}
            {data.linkedinUrl && (
              <p className="flex items-center gap-2">
                <Linkedin className="h-4 w-4" />
                {data.linkedinUrl}
              </p>
            )}
            {data.portfolioUrl && (
              <p className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                {data.portfolioUrl}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-2">Summary</h3>
        <p className="text-gray-700 whitespace-pre-wrap">{data.bio}</p>
      </div>

      {data.hasExperience && nonEmptyExperiences.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">Work Experience</h3>
          {nonEmptyExperiences.map((experience, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{experience.companyName}</h3>
                  <div className="mt-1 text-sm text-gray-600">
                    {[
                      experience.contractType && experience.contractType.replace('-', ' '),
                      experience.workSchema && experience.workSchema.replace('-', ' '),
                      experience.companySize,
                      experience.companyIndustry
                    ].filter(Boolean).join(' • ')}
                  </div>
                </div>
                <span className="text-sm text-gray-600">
                  {formatDate(experience.startDate, false)} - {formatDate(experience.endDate, experience.current)}
                </span>
              </div>
              
              {experience.companyDescription && (
                <p className="text-gray-700 mb-4">{experience.companyDescription}</p>
              )}

              {experience.roles.map((role, roleIndex) => (
                <RoleItem key={roleIndex} role={role} />
              ))}
            </div>
          ))}
        </div>
      )}

      {data.hasEducation && nonEmptyEducation.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">Education</h3>
          {nonEmptyEducation.map((education, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-4">
                  {education.institutionLogo && (
                    <img
                      src={education.institutionLogo}
                      alt={`${education.institution} logo`}
                      className="h-12 w-12 object-contain"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{education.institution}</h3>
                    <div className="text-lg text-gray-700">{education.degree}</div>
                  </div>
                </div>
                <span className="text-sm text-gray-600">
                  {formatDate(education.startDate, false)} - {formatDate(education.endDate, education.current)}
                </span>
              </div>
              {education.description && (
                <p className="text-gray-700 mt-2">{education.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}