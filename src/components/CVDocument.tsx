import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import type { PersonalInfoFormData } from './PersonalInfoForm';
import type { Experience, Role } from './ExperienceForm';
import type { Education } from './EducationForm';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
  },
  header: {
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  contact: {
    fontSize: 10,
    color: '#444',
    marginBottom: 4,
  },
  link: {
    color: '#2563eb',
    textDecoration: 'none',
  },
  section: {
    marginTop: 12,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  companyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  companyName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  companyDates: {
    fontSize: 10,
    color: '#666',
  },
  companyDetails: {
    fontSize: 10,
    color: '#666',
    marginBottom: 4,
  },
  companyDescription: {
    fontSize: 10,
    color: '#444',
    marginBottom: 8,
  },
  roleTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 2,
  },
  roleDates: {
    fontSize: 10,
    color: '#666',
    marginBottom: 4,
  },
  roleDescription: {
    fontSize: 10,
    color: '#444',
    marginBottom: 4,
  },
  achievementsList: {
    marginLeft: 15,
    marginBottom: 8,
  },
  achievement: {
    fontSize: 10,
    color: '#444',
    marginBottom: 2,
  },
  bio: {
    fontSize: 11,
    lineHeight: 1.4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  relocationText: {
    fontSize: 10,
    color: '#444',
    fontStyle: 'italic',
    marginLeft: 4,
  },
  educationSection: {
    marginBottom: 8,
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  institution: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333',
  },
  degree: {
    fontSize: 11,
    color: '#444',
    marginBottom: 4,
  },
  educationDescription: {
    fontSize: 10,
    color: '#444',
    marginTop: 4,
  },
});

interface CVDocumentProps {
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
    <View style={{ marginBottom: 8 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={styles.roleTitle}>{role.title}</Text>
        <Text style={styles.roleDates}>
          {formatDate(role.startDate, false)} - {formatDate(role.endDate, role.current)}
        </Text>
      </View>
      <Text style={styles.roleDescription}>{role.description}</Text>
      {role.achievements.filter(Boolean).length > 0 && (
        <View style={styles.achievementsList}>
          {role.achievements.filter(Boolean).map((achievement, index) => (
            <Text key={index} style={styles.achievement}>• {achievement}</Text>
          ))}
        </View>
      )}
    </View>
  );
}

export function CVDocument({ data }: CVDocumentProps) {
  const nonEmptyExperiences = data.experiences?.filter(exp => !isExperienceEmpty(exp)) || [];
  const nonEmptyEducation = data.education?.filter(edu => !isEducationEmpty(edu)) || [];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{data.fullName}</Text>
          <Text style={ styles.title}>{data.title}</Text>
          <View style={styles.locationContainer}>
            <Text style={styles.contact}>{data.location}</Text>
            {data.willRelocate && (
              <Text style={styles.relocationText}>• Available for relocation</Text>
            )}
          </View>
          <View style={styles.contact}>
            <Link src={`mailto:${data.email}`} style={styles.link}>{data.email}</Link>
            <Text> • {data.phone}</Text>
          </View>
          <View style={styles.contact}>
            {data.githubUrl && (
              <>
                <Link src={data.githubUrl} style={styles.link}>{data.githubUrl}</Link>
                {(data.linkedinUrl || data.portfolioUrl) && <Text> • </Text>}
              </>
            )}
            {data.linkedinUrl && (
              <>
                <Link src={data.linkedinUrl} style={styles.link}>{data.linkedinUrl}</Link>
                {data.portfolioUrl && <Text> • </Text>}
              </>
            )}
            {data.portfolioUrl && (
              <Link src={data.portfolioUrl} style={styles.link}>{data.portfolioUrl}</Link>
            )}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.bio}>{data.bio}</Text>
        </View>

        {data.hasExperience && nonEmptyExperiences.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Work Experience</Text>
            {nonEmptyExperiences.map((experience, index) => (
              <View key={index} style={{ marginBottom: 12 }}>
                <View style={styles.companyHeader}>
                  <Text style={styles.companyName}>{experience.companyName}</Text>
                  <Text style={styles.companyDates}>
                    {formatDate(experience.startDate, false)} - {formatDate(experience.endDate, experience.current)}
                  </Text>
                </View>
                
                <Text style={styles.companyDetails}>
                  {[
                    experience.contractType && experience.contractType.replace('-', ' '),
                    experience.workSchema && experience.workSchema.replace('-', ' '),
                    experience.companySize,
                    experience.companyIndustry
                  ].filter(Boolean).join(' • ')}
                </Text>

                {experience.companyDescription && (
                  <Text style={styles.companyDescription}>{experience.companyDescription}</Text>
                )}

                {experience.roles.map((role, roleIndex) => (
                  <RoleItem key={roleIndex} role={role} />
                ))}
              </View>
            ))}
          </View>
        )}

        {data.hasEducation && nonEmptyEducation.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {nonEmptyEducation.map((education, index) => (
              <View key={index} style={styles.educationSection}>
                <View style={styles.educationHeader}>
                  <Text style={styles.institution}>{education.institution}</Text>
                  <Text style={styles.companyDates}>
                    {formatDate(education.startDate, false)} - {formatDate(education.endDate, education.current)}
                  </Text>
                </View>
                <Text style={styles.degree}>{education.degree}</Text>
                {education.description && (
                  <Text style={styles.educationDescription}>{education.description}</Text>
                )}
              </View>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}