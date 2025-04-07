import type { PersonalInfoFormData } from '@/components/PersonalInfoForm';
import type { Experience } from '@/components/ExperienceForm';
import { getProficiencyLabel, calculateYearsOfExperience } from '@/lib/utils';

function isExperienceEmpty(experience: Experience): boolean {
  return (
    !experience.companyName && !experience.roles.some((role) => role.title || role.description)
  );
}

function formatLink(url: string, text?: string, icon?: string): string {
  const iconHtml = icon ? `<span class="icon">${icon}</span>` : '';
  return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2">${iconHtml}${text || url}</a>`;
}

function formatText(text: string): string {
  return text.replace(/\n/g, '<br>');
}

function formatList(items: string[]): string {
  return items
    .filter(Boolean)
    .map((item) => `<li>${item}</li>`)
    .join('');
}

function formatImage(url: string, alt: string, className: string = ''): string {
  if (!url) {
    return '';
  }
  return `<img src="${escapeHtml(url)}" alt="${escapeHtml(alt)}" class="${className}" loading="lazy" onerror="this.style.display='none'" />`;
}

const icons = {
  github:
    '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
  linkedin:
    '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
  globe:
    '<svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
  mail: '<svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
  phone:
    '<svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
  mapPin:
    '<svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
};

export function generateHTML(data: PersonalInfoFormData) {
  try {
    const nonEmptyExperiences = data.experiences?.filter((exp) => !isExperienceEmpty(exp)) || [];

    const doc = document.implementation.createHTMLDocument('CV');

    const style = doc.createElement('style');
    style.textContent = `
      body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.5; max-width: 21cm; margin: 0 auto; padding: 2rem; }
      h1 { font-size: 2rem; font-weight: bold; margin-bottom: 0.5rem; }
      h2 { font-size: 1.5rem; color: #4B5563; margin-bottom: 1rem; }
      .contact { color: #4B5563; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem; }
      .section { margin-top: 2rem; }
      .section-title { font-size: 1.25rem; font-weight: bold; border-bottom: 1px solid #E5E7EB; padding-bottom: 0.5rem; margin-bottom: 1rem; }
      .company { margin-bottom: 1.5rem; }
      .company-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
      .company-name { font-weight: bold; }
      .company-dates { color: #6B7280; }
      .role { margin-left: 1rem; margin-bottom: 1rem; }
      .role-title { font-weight: 600; }
      .achievements { margin-left: 1.5rem; list-style-type: disc; }
      a { color: #2563EB; text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; }
      a:hover { text-decoration: underline; }
      .icon { display: inline-flex; align-items: center; }
      .icon svg { width: 1rem; height: 1rem; }
      .contact .icon svg { width: 0.75rem; height: 0.75rem; }
      .social-links { display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem; }
      .education { margin-bottom: 1.5rem; }
      .education-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
      .institution { font-weight: bold; }
      .degree { font-size: 0.9rem; color: #4B5563; margin-bottom: 0.5rem; }
      .description { color: #4B5563; }
      .certificate { margin-bottom: 1.5rem; }
      .certificate-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
      .certificate-name { font-weight: bold; }
      .certificate-details { font-size: 0.9rem; color: #6B7280; }
      .language-section { margin-bottom: 1rem; }
      .language-name { font-weight: bold; margin-bottom: 0.25rem; }
      .proficiency-bar { display: flex; gap: 0.25rem; }
      .proficiency-level { width: 1.25rem; height: 0.25rem; }
      ul { margin: 0.5rem 0; padding-left: 1.5rem; }
      li { margin-bottom: 0.25rem; }
      .logo { width: 20px; height: 20px; object-fit: contain; margin-right: 0.5rem; }
      .project-icon { width: 16px; height: 16px; object-fit: contain; margin-right: 0.5rem; }
      .header-with-logo { display: flex; align-items: center; }
    `;
    doc.head.appendChild(style);

    const content = `
      <h1>${data.fullName}</h1>
      <h2>${data.title}</h2>
      <div class="contact">
        <span class="icon">${icons.mapPin}</span> ${data.location}${data.willRelocate ? ' • Available for relocation' : ''}
      </div>
      <div class="contact">
        <span class="icon">${icons.mail}</span> ${formatLink(`mailto:${data.email}`, data.email)}
      </div>
      <div class="contact">
        <span class="icon">${icons.phone}</span> ${data.phone}
      </div>
      <div class="social-links">
        ${data.githubUrl ? formatLink(data.githubUrl, 'GitHub', icons.github) : ''}
        ${data.linkedinUrl ? formatLink(data.linkedinUrl, 'LinkedIn', icons.linkedin) : ''}
        ${data.portfolioUrl ? formatLink(data.portfolioUrl, 'Portfolio', icons.globe) : ''}
      </div>

      <div class="section">
        <h3 class="section-title">Professional Summary</h3>
        <p>${formatText(data.bio)}</p>
      </div>

      ${
        data.experienceYears && data.experienceYears.length > 0
          ? `
        <div class="section">
          <h3 class="section-title">Experience (in years)</h3>
          ${data.experienceYears
            .map(
              (exp) => `
            <div class="description">
              ${exp.technology}: ${calculateYearsOfExperience(exp.startDate)}+ years
            </div>
          `
            )
            .join('')}
        </div>
      `
          : ''
      }

      ${
        data.projectsWorked && data.projectsWorked.length > 0
          ? `
        <div class="section">
          <h3 class="section-title">Projects I Worked On</h3>
          <ul>
            ${formatList(data.projectsWorked.map(project => formatText(escapeHtml(project))))}
          </ul>
        </div>
      `
          : ''
      }

      ${
        data.hasExperience && nonEmptyExperiences.length > 0
          ? `
        <div class="section">
          <h3 class="section-title">Work Experience</h3>
          ${nonEmptyExperiences
            .map(
              (exp) => `
            <div class="company">
              <div class="company-header">
                <div class="header-with-logo">
                  ${formatImage(exp.companyLogoUrl, `${exp.companyName} logo`, 'logo')}
                  <span class="company-name">${escapeHtml(exp.companyName)}</span>
                </div>
                <span class="company-dates">${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}</span>
              </div>
              <div style="color: #6B7280; margin-bottom: 0.5rem;">
                ${[
                  exp.contractType && exp.contractType.replace('-', ' '),
                  exp.workSchema && exp.workSchema.replace('-', ' '),
                  exp.companySize,
                  exp.companyIndustry,
                ]
                  .filter(Boolean)
                  .join(' • ')}
              </div>
              ${exp.companyDescription ? `<p>${formatText(escapeHtml(exp.companyDescription))}</p>` : ''}
              ${exp.roles
                .filter((role) => role.title || role.description)
                .map(
                  (role) => `
                <div class="role">
                  <div class="role-title">${role.title}</div>
                  <div style="color: #6B7280; font-size: 0.875rem;">
                    ${role.startDate} - ${role.current ? 'Present' : role.endDate}
                  </div>
                  <p>${formatText(role.description)}</p>
                  ${
                    role.achievements.filter(Boolean).length > 0
                      ? `
                    <ul class="achievements">
                      ${formatList(role.achievements)}
                    </ul>
                  `
                      : ''
                  }
                </div>
              `
                )
                .join('')}
            </div>
          `
            )
            .join('')}
        </div>
      `
          : ''
      }

      ${
        data.hasEducation && data.education && data.education.length > 0
          ? `
        <div class="section">
          <h3 class="section-title">Education</h3>
          ${data.education
            .map(
              (edu) => `
            <div class="education">
              <div class="education-header">
                <div class="header-with-logo">
                  ${formatImage(edu.institutionLogo, `${edu.institution} logo`, 'logo')}
                  <span class="institution">${escapeHtml(edu.institution)}</span>
                </div>
                <span class="dates">${edu.startDate} - ${edu.current ? 'Present' : edu.endDate}</span>
              </div>
              <div class="degree">${escapeHtml(edu.degree)}</div>
              ${
                edu.topics.filter(Boolean).length > 0
                  ? `
                <ul class="description">
                  ${formatList(edu.topics)}
                </ul>
              `
                  : ''
              }
            </div>
          `
            )
            .join('')}
        </div>
      `
          : ''
      }

      ${
        data.hasProjects && data.projects && data.projects.length > 0
          ? `
        <div class="section">
          <h3 class="section-title">Projects</h3>
          ${data.projects
            .map(
              (project) => `
            <div class="company">
              <div class="company-header">
                <div class="header-with-logo">
                  ${formatImage(project.icon, `${project.name} icon`, 'project-icon')}
                  <span class="company-name">${escapeHtml(project.name)}</span>
                </div>
                <span class="company-dates">${project.startDate}</span>
              </div>
              <p>${formatText(escapeHtml(project.description))}</p>
              ${
                project.techStack.length > 0
                  ? `
                <p class="description">Technologies: ${project.techStack.map(tech => escapeHtml(tech)).join(', ')}</p>
              `
                  : ''
              }
              <div class="social-links">
                ${project.sourceCodeUrl && project.isSourceOpen ? formatLink(project.sourceCodeUrl, 'Source Code', icons.github) : ''}
                ${project.demoUrl && project.hasDemoAvailable ? formatLink(project.demoUrl, 'Live Demo', icons.globe) : ''}
                ${project.documentationUrl && project.hasDocumentation ? formatLink(project.documentationUrl, 'Documentation', icons.globe) : ''}
              </div>
            </div>
          `
            )
            .join('')}
        </div>
      `
          : ''
      }

      ${
        data.hasCertificates && data.certificates && data.certificates.length > 0
          ? `
        <div class="section">
          <h3 class="section-title">Certifications</h3>
          ${data.certificates
            .map(
              (cert) => `
            <div class="certificate">
              <div class="certificate-header">
                <div class="header-with-logo">
                  ${formatImage(cert.issuerLogo, `${cert.issuer} logo`, 'logo')}
                  <span class="certificate-name">${cert.name}</span>
                </div>
                <span class="certificate-details">
                  ${escapeHtml(cert.issueDate)}${!cert.neverExpires && cert.expiryDate ? ` - ${escapeHtml(cert.expiryDate)}` : ''}
                </span>
              </div>
              <div class="certificate-details">
                ${cert.issuer}
                ${cert.credentialId ? ` • ID: ${cert.credentialId}` : ''}
                ${cert.credentialUrl ? ` • ${formatLink(cert.credentialUrl, 'View Credential')}` : ''}
              </div>
              ${
                cert.topics.filter(Boolean).length > 0
                  ? `
                <ul class="description">
<ul class="description">
  ${formatList(cert.topics.map(topic => escapeHtml(topic)))}
</ul>
                </ul>
              `
                  : ''
              }
            </div>
          `
            )
            .join('')}
        </div>
      `
          : ''
      }

      ${
        data.languages && data.languages.length > 0
          ? `
        <div class="section">
          <h3 class="section-title">Languages</h3>
          ${data.languages
            .map(
              (lang) => `
            <div class="language-section">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div class="language-name">${lang.language}</div>
                <div style="color: #666; font-size: 0.875rem;">${getProficiencyLabel(lang.proficiency)}</div>
              </div>
              <div class="proficiency-bar">
                ${[...Array(5)]
                  .map(
                    (_, i) => `
                  <div class="proficiency-level" style="background-color: ${i < lang.proficiency ? '#2563eb' : '#e5e7eb'}"></div>
                `
                  )
                  .join('')}
              </div>
            </div>
          `
            )
            .join('')}
        </div>
      `
          : ''
      }
    `;
    doc.body.innerHTML = content;

    const blob = new Blob([doc.documentElement.outerHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${data.fullName.replace(/\s+/g, '-').toLowerCase()}-cv.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error generating HTML:', error);
    alert('Failed to generate HTML CV. Please try again.');
  }
}
