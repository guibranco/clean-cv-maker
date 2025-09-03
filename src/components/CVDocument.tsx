import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
  Image,
  Svg,
  Path,
  Circle,
  Line,
  Polyline,
  Rect,
} from '@react-pdf/renderer';
import type { PersonalInfoFormData } from './PersonalInfoForm';
import { getProficiencyLabel, calculateYearsOfExperience } from '@/lib/utils';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    marginBottom: 4,
    fontFamily: 'Helvetica-Bold',
  },
  title: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  contact: {
    marginBottom: 4,
    color: '#444',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactIcon: {
    width: 12,
    height: 12,
    marginRight: 6,
    stroke: '#666',
  },
  links: {
    flexDirection: 'column',
    gap: 4,
    marginTop: 8,
  },
  link: {
    color: '#2563eb',
    textDecoration: 'none',
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkIcon: {
    width: 12,
    height: 12,
    marginRight: 6,
    stroke: '#2563eb',
  },
  section: {
    marginTop: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 8,
    paddingBottom: 4,
    borderBottom: 1,
    borderBottomColor: '#e5e7eb',
  },
  experienceItem: {
    marginBottom: 12,
  },
  companyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  companyName: {
    fontFamily: 'Helvetica-Bold',
  },
  companyDetails: {
    color: '#666',
    fontSize: 10,
    marginBottom: 4,
  },
  role: {
    marginLeft: 12,
    marginBottom: 8,
  },
  roleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  roleTitle: {
    fontFamily: 'Helvetica-Bold',
  },
  dates: {
    color: '#666',
    fontSize: 10,
  },
  description: {
    marginBottom: 4,
  },
  achievement: {
    marginLeft: 16,
    marginBottom: 2,
  },
  bullet: {
    width: 8,
  },
  languageItem: {
    marginBottom: 8,
  },
  languageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  languageName: {
    fontFamily: 'Helvetica-Bold',
  },
  proficiencyText: {
    fontSize: 10,
    color: '#666',
  },
  proficiencyBar: {
    flexDirection: 'row',
    gap: 2,
    marginTop: 2,
  },
  proficiencyLevel: {
    width: 20,
    height: 2,
    marginRight: 2,
  },
  logo: {
    width: 20,
    height: 20,
    marginRight: 8,
    objectFit: 'contain',
  },
  headerWithLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  projectIcon: {
    width: 16,
    height: 16,
    marginRight: 6,
    objectFit: 'contain',
  },
});

interface CVDocumentProps {
  data: PersonalInfoFormData;
}

const MapPinIcon = () => (
  <Svg style={styles.contactIcon} viewBox="0 0 24 24">
    <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <Circle cx="12" cy="10" r="3" />
  </Svg>
);

const MailIcon = () => (
  <Svg style={styles.contactIcon} viewBox="0 0 24 24">
    <Path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <Polyline points="22,6 12,13 2,6" />
  </Svg>
);

const PhoneIcon = () => (
  <Svg style={styles.contactIcon} viewBox="0 0 24 24">
    <Path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </Svg>
);

const GithubIcon = () => (
  <Svg style={styles.linkIcon} viewBox="0 0 24 24">
    <Path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </Svg>
);

const LinkedinIcon = () => (
  <Svg style={styles.linkIcon} viewBox="0 0 24 24">
    <Path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <Rect x="2" y="9" width="4" height="12" />
    <Circle cx="4" cy="4" r="2" />
  </Svg>
);

const GlobeIcon = () => (
  <Svg style={styles.linkIcon} viewBox="0 0 24 24">
    <Circle cx="12" cy="12" r="10" />
    <Line x1="2" y1="12" x2="22" y2="12" />
    <Path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </Svg>
);

export function CVDocument({ data }: CVDocumentProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.fullName}</Text>
          <Text style={styles.title}>{data.title}</Text>

          <View style={styles.contact}>
            <MapPinIcon />
            <Text>
              {data.location} {data.willRelocate ? '• Available for relocation' : ''}
            </Text>
          </View>

          <View style={styles.contact}>
            <MailIcon />
            <Link src={`mailto:${data.email}`}>{data.email}</Link>
          </View>

          <View style={styles.contact}>
            <PhoneIcon />
            <Text>{data.phone}</Text>
          </View>

          <View style={styles.links}>
            {data.githubUrl && (
              <Link src={data.githubUrl} style={styles.link}>
                <GithubIcon />
                <Text>{data.githubUrl}</Text>
              </Link>
            )}
            {data.linkedinUrl && (
              <Link src={data.linkedinUrl} style={styles.link}>
                <LinkedinIcon />
                <Text>{data.linkedinUrl}</Text>
              </Link>
            )}
            {data.portfolioUrl && (
              <Link src={data.portfolioUrl} style={styles.link}>
                <GlobeIcon />
                <Text>{data.portfolioUrl}</Text>
              </Link>
            )}
          </View>
        </View>

        {/* Professional Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text>{data.bio}</Text>
        </View>

        {/* Experience Years */}
        {data.experienceYears && data.experienceYears.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience (in years)</Text>
            {data.experienceYears.map((exp, index) => (
              <Text key={index} style={styles.description}>
                {exp.technology}: {calculateYearsOfExperience(exp.startDate)}+ years
              </Text>
            ))}
          </View>
        )}

        {/* Projects Worked */}
        {data.projectsWorked && data.projectsWorked.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects I Worked On</Text>
            {data.projectsWorked.map((project, index) => (
              <View key={index} style={{ flexDirection: 'row' }}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.description}>{project}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Work Experience */}
        {data.hasExperience && data.experiences && data.experiences.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Work Experience</Text>
            {data.experiences.map((exp, index) => (
              <View key={index} style={styles.experienceItem}>
                <View style={styles.companyHeader}>
                  <View style={styles.headerWithLogo}>
                    {exp.companyLogoUrl && <Image src={exp.companyLogoUrl} style={styles.logo} />}
                    <Text style={styles.companyName}>{exp.companyName}</Text>
                  </View>
                  <Text style={styles.dates}>
                    {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                  </Text>
                </View>
                <Text style={styles.companyDetails}>
                  {[
                    exp.contractType && exp.contractType.replace('-', ' '),
                    exp.workSchema && exp.workSchema.replace('-', ' '),
                    exp.companySize,
                    exp.companyIndustry,
                  ]
                    .filter(Boolean)
                    .join(' • ')}
                </Text>
                {exp.companyDescription && (
                  <Text style={styles.description}>{exp.companyDescription}</Text>
                )}
                {exp.roles.map((role, roleIndex) => (
                  <View key={roleIndex} style={styles.role}>
                    <View style={styles.roleHeader}>
                      <Text style={styles.roleTitle}>{role.title}</Text>
                      <Text style={styles.dates}>
                        {role.startDate} - {role.current ? 'Present' : role.endDate}
                      </Text>
                    </View>
                    <Text style={styles.description}>{role.description}</Text>
                    {role.achievements.filter(Boolean).map((achievement, i) => (
                      <View key={i} style={{ flexDirection: 'row' }}>
                        <Text style={styles.bullet}>•</Text>
                        <Text style={styles.achievement}>{achievement}</Text>
                      </View>
                    ))}
                  </View>
                ))}
              </View>
            ))}
          </View>
        )}

        {/* Education */}
        {data.hasEducation && data.education && data.education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {data.education.map((edu, index) => (
              <View key={index} style={styles.experienceItem}>
                <View style={styles.companyHeader}>
                  <View style={styles.headerWithLogo}>
                    {edu.institutionLogo && <Image src={edu.institutionLogo} style={styles.logo} />}
                    <Text style={styles.companyName}>{edu.institution}</Text>
                  </View>
                  <Text style={styles.dates}>
                    {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                  </Text>
                </View>
                <Text style={styles.description}>{edu.degree}</Text>
                {edu.topics.filter(Boolean).map((topic, i) => (
                  <View key={i} style={{ flexDirection: 'row' }}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.achievement}>{topic}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        )}

        {/* Projects */}
        {data.hasProjects && data.projects && data.projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Projects</Text>
            {data.projects.map((project, index) => (
              <View key={index} style={styles.experienceItem}>
                <View style={styles.companyHeader}>
                  <View style={styles.headerWithLogo}>
                    {project.icon && <Image src={project.icon} style={styles.projectIcon} />}
                    <Text style={styles.companyName}>{project.name}</Text>
                  </View>
                  <Text style={styles.dates}>{project.startDate}</Text>
                </View>
                <Text style={styles.description}>{project.description}</Text>
                {project.techStack.length > 0 && (
                  <Text style={styles.description}>
                    Technologies: {project.techStack.join(', ')}
                  </Text>
                )}
                {project.sourceCodeUrl && project.isSourceOpen && (
                  <Link src={project.sourceCodeUrl} style={styles.link}>
                    Source Code
                  </Link>
                )}
                {project.demoUrl && project.hasDemoAvailable && (
                  <Link src={project.demoUrl} style={styles.link}>
                    Live Demo
                  </Link>
                )}
                {project.documentationUrl && project.hasDocumentation && (
                  <Link src={project.documentationUrl} style={styles.link}>
                    Documentation
                  </Link>
                )}
              </View>
            ))}
          </View>
        )}

        {/* Certificates */}
        {data.hasCertificates && data.certificates && data.certificates.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            {data.certificates.map((cert, index) => (
              <View key={index} style={styles.experienceItem}>
                <View style={styles.companyHeader}>
                  <View style={styles.headerWithLogo}>
                    {cert.issuerLogo && <Image src={cert.issuerLogo} style={styles.logo} />}
                    <Text style={styles.companyName}>{cert.name}</Text>
                  </View>
                  <Text style={styles.dates}>
                    {cert.issueDate}
                    {cert.neverExpires ? '' : ` - ${cert.expiryDate || 'No expiry date'}`}
                  </Text>
                </View>
                <Text style={styles.description}>{cert.issuer}</Text>
                {cert.credentialUrl && (
                  <Link src={cert.credentialUrl} style={styles.link}>
                    {cert.credentialUrl}
                  </Link>
                )}
                {cert.topics.filter(Boolean).map((topic, i) => (
                  <View key={i} style={{ flexDirection: 'row' }}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.achievement}>{topic}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        )}

        {/* Languages */}
        {data.languages && data.languages.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Languages</Text>
            {data.languages.map((lang, index) => (
              <View key={index} style={styles.languageItem}>
                <View style={styles.languageHeader}>
                  <Text style={styles.languageName}>{lang.language}</Text>
                  <Text style={styles.proficiencyText}>
                    {getProficiencyLabel(lang.proficiency)}
                  </Text>
                </View>
                <View style={styles.proficiencyBar}>
                  {[...Array(5)].map((_, i) => (
                    <View
                      key={i}
                      style={[
                        styles.proficiencyLevel,
                        { backgroundColor: i < lang.proficiency ? '#2563eb' : '#e5e7eb' },
                      ]}
                    />
                  ))}
                </View>
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}
