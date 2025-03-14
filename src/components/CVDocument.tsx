import { Document, Page, Text, View, StyleSheet, Link, Svg, Path, Circle, Line, Polyline, Rect } from '@react-pdf/renderer';
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 10,
    height: 10,
    marginRight: 4,
  },
  socialIcon: {
    width: 12,
    height: 12,
    marginRight: 4,
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
  bullet: {
    marginRight: 4,
  },
  socialLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
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
            <View key={index} style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.achievement}>{achievement}</Text>
            </View>
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
          <Text style={styles.title}>{data.title}</Text>
          
          <View style={styles.contact}>
            <View style={styles.icon}>
              <Svg viewBox="0 0 24 24">
                <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#444" strokeWidth={2} fill="none" />
                <Circle cx="12" cy="10" r="3" stroke="#444" strokeWidth={2} fill="none" />
              </Svg>
            </View>
            <Text>{data.location}</Text>
            {data.willRelocate && (
              <Text style={styles.relocationText}>• Available for relocation</Text>
            )}
          </View>

          <View style={styles.contact}>
            <View style={styles.icon}>
              <Svg viewBox="0 0 24 24">
                <Path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#444" strokeWidth={2} fill="none" />
                <Polyline points="22,6 12,13 2,6" stroke="#444" strokeWidth={2} fill="none" />
              </Svg>
            </View>
            <Link src={`mailto:${data.email}`} style={styles.link}>{data.email}</Link>
          </View>

          <View style={styles.contact}>
            <View style={styles.icon}>
              <Svg viewBox="0 0 24 24">
                <Path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#444" strokeWidth={2} fill="none" />
              </Svg>
            </View>
            <Text>{data.phone}</Text>
          </View>

          <View style={styles.socialLinks}>
            {data.githubUrl && (
              <View style={[styles.contact, { marginRight: 8 }]}>
                <View style={styles.socialIcon}>
                  <Svg viewBox="0 0 24 24">
                    <Path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="#444" strokeWidth={2} fill="none" />
                  </Svg>
                </View>
                <Link src={data.githubUrl} style={styles.link}>{data.githubUrl}</Link>
              </View>
            )}

            {data.linkedinUrl && (
              <View style={[styles.contact, { marginRight: 8 }]}>
                <View style={styles.socialIcon}>
                  <Svg viewBox="0 0 24 24">
                    <Path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="#444" strokeWidth={2} fill="none" />
                    <Rect x="2" y="9" width="4" height="12" stroke="#444" strokeWidth={2} fill="none" />
                    <Circle cx="4" cy="4" r="2" stroke="#444" strokeWidth={2} fill="none" />
                  </Svg>
                </View>
                <Link src={data.linkedinUrl} style={styles.link}>{data.linkedinUrl}</Link>
              </View>
            )}

            {data.portfolioUrl && (
              <View style={styles.contact}>
                <View style={styles.socialIcon}>
                  <Svg viewBox="0 0 24 24">
                    <Circle cx="12" cy="12" r="10" stroke="#444" strokeWidth={2} fill="none" />
                    <Line x1="2" y1="12" x2="22" y2="12" stroke="#444" strokeWidth={2} />
                    <Path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#444" strokeWidth={2} fill="none" />
                  </Svg>
                </View>
                <Link src={data.portfolioUrl} style={styles.link}>{data.portfolioUrl}</Link>
              </View>
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