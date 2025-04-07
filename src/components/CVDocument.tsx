import React from 'react';
import { Page, Text, View, Document, StyleSheet, Link, Image } from '@react-pdf/renderer';
import type { PersonalInfoFormData } from './PersonalInfoForm';
import { getProficiencyLabel } from '@/lib/utils';

function calculateYearsOfExperience(startDate: string): number {
  const start = new Date(startDate);
  const now = new Date();
  const diffInMonths = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  return Math.floor(diffInMonths / 12);
}

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  contact: {
    marginBottom: 4,
    color: '#444',
  },
  links: {
    flexDirection: 'column',
    gap: 4,
    marginTop: 8,
  },
  link: {
    color: '#2563eb',
    textDecoration: 'none',
  },
  section: {
    marginTop: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
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
    fontWeight: 'bold',
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
    fontWeight: 'medium',
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
    fontWeight: 'medium',
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
});

interface CVDocumentProps {
  data: PersonalInfoFormData;
}

export function CVDocument({ data }: CVDocumentProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.fullName}</Text>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.contact}>{data.location} {data.willRelocate ? '• Available for relocation' : ''}</Text>
          <Link src={`mailto:${data.email}`} style={styles.contact}>{data.email}</Link>
          <Text style={styles.contact}>{data.phone}</Text>
          <View style={styles.links}>
            {data.githubUrl && <Link src={data.githubUrl} style={styles.link}>{data.githubUrl}</Link>}
            {data.linkedinUrl && <Link src={data.linkedinUrl} style={styles.link}>{data.linkedinUrl}</Link>}
            {data.portfolioUrl && <Link src={data.portfolioUrl} style={styles.link}>{data.portfolioUrl}</Link>}
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
                    {exp.companyLogoUrl && (
                      <Image
                        src={exp.companyLogoUrl}
                        style={styles.logo}
                      />
                    )}
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
                    exp.companyIndustry
                  ].filter(Boolean).join(' • ')}
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
                    {edu.institutionLogo && (
                      <Image
                        src={edu.institutionLogo}
                        style={styles.logo}
                      />
                    )}
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

        {/* Certificates */}
        {data.hasCertificates && data.certificates && data.certificates.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Certifications</Text>
            {data.certificates.map((cert, index) => (
              <View key={index} style={styles.experienceItem}>
                <View style={styles.companyHeader}>
                  <View style={styles.headerWithLogo}>
                    {cert.issuerLogo && (
                      <Image
                        src={cert.issuerLogo}
                        style={styles.logo}
                      />
                    )}
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

        {/* Languages section moved to bottom */}
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