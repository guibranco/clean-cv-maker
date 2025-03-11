import type { PersonalInfoFormData } from '@/components/PersonalInfoForm';
import type { Experience } from '@/components/ExperienceForm';

function isExperienceEmpty(experience: Experience): boolean {
  return !experience.companyName && !experience.roles.some(role => role.title || role.description);
}

function formatLink(url: string, text?: string): string {
  return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800">${text || url}</a>`;
}

export function generateHTML(data: PersonalInfoFormData) {
  try {
    const nonEmptyExperiences = data.experiences?.filter(exp => !isExperienceEmpty(exp)) || [];

    // Create a new document
    const doc = document.implementation.createHTMLDocument('CV');
    
    // Add styles
    const style = doc.createElement('style');
    style.textContent = `
      body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.5; max-width: 21cm; margin: 0 auto; padding: 2rem; }
      h1 { font-size: 2rem; font-weight: bold; margin-bottom: 0.5rem; }
      h2 { font-size: 1.5rem; color: #4B5563; margin-bottom: 1rem; }
      .contact { color: #4B5563; margin-bottom: 0.5rem; }
      .section { margin-top: 2rem; }
      .section-title { font-size: 1.25rem; font-weight: bold; border-bottom: 1px solid #E5E7EB; padding-bottom: 0.5rem; margin-bottom: 1rem; }
      .company { margin-bottom: 1.5rem; }
      .company-header { display: flex; justify-content: space-between; margin-bottom: 0.5rem; }
      .company-name { font-weight: bold; }
      .company-dates { color: #6B7280; }
      .role { margin-left: 1rem; margin-bottom: 1rem; }
      .role-title { font-weight: 600; }
      .achievements { margin-left: 1.5rem; list-style-type: disc; }
      a { color: #2563EB; text-decoration: none; }
      a:hover { text-decoration: underline; }
    `;
    doc.head.appendChild(style);

    // Create content
    const content = `
      <h1>${data.fullName}</h1>
      <h2>${data.title}</h2>
      <div class="contact">📍 ${data.location}${data.willRelocate ? ' • Available for relocation' : ''}</div>
      <div class="contact">📧 ${formatLink(data.email)} • 📱 ${data.phone}</div>
      <div class="contact">
        🔗 ${formatLink(data.githubUrl)} •
        ${formatLink(data.linkedinUrl)}
        ${data.portfolioUrl ? ` • ${formatLink(data.portfolioUrl)}` : ''}
      </div>

      <div class="section">
        <h3 class="section-title">Professional Summary</h3>
        <p>${data.bio}</p>
      </div>

      ${data.hasExperience && nonEmptyExperiences.length > 0 ? `
        <div class="section">
          <h3 class="section-title">Work Experience</h3>
          ${nonEmptyExperiences.map(exp => `
            <div class="company">
              <div class="company-header">
                <span class="company-name">${exp.companyName}</span>
                <span class="company-dates">${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}</span>
              </div>
              <div style="color: #6B7280; margin-bottom: 0.5rem;">
                ${[
                  exp.contractType && exp.contractType.replace('-', ' '),
                  exp.workSchema && exp.workSchema.replace('-', ' '),
                  exp.companySize,
                  exp.companyIndustry
                ].filter(Boolean).join(' • ')}
              </div>
              ${exp.companyDescription ? `<p>${exp.companyDescription}</p>` : ''}
              ${exp.roles.filter(role => role.title || role.description).map(role => `
                <div class="role">
                  <div class="role-title">${role.title}</div>
                  <div style="color: #6B7280; font-size: 0.875rem;">
                    ${role.startDate} - ${role.current ? 'Present' : role.endDate}
                  </div>
                  <p>${role.description}</p>
                  ${role.achievements.filter(Boolean).length > 0 ? `
                    <ul class="achievements">
                      ${role.achievements.filter(Boolean).map(achievement => `
                        <li>${achievement}</li>
                      `).join('')}
                    </ul>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          `).join('')}
        </div>
      ` : ''}
    `;
    doc.body.innerHTML = content;

    // Convert to blob and download
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