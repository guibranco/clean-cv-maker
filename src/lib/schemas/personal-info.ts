import { z } from 'zod';

const experienceSchema = z.object({
  companyName: z.string().min(1, 'Company name is required'),
  companyLogoUrl: z.string().optional(),
  companySize: z.string().optional(),
  companyIndustry: z.string().optional(),
  companyDescription: z.string().optional(),
  contractType: z.enum(['', 'full-time', 'part-time', 'freelance']),
  workSchema: z.enum(['', 'on-site', 'remote', 'hybrid']),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().optional(),
  current: z.boolean(),
  roles: z
    .array(
      z.object({
        title: z.string().min(1, 'Role title is required'),
        startDate: z.string().min(1, 'Role start date is required'),
        endDate: z.string().optional(),
        current: z.boolean(),
        description: z.string().min(1, 'Role description is required'),
        achievements: z.array(z.string()),
      })
    )
    .min(1, 'At least one role is required'),
});

const educationSchema = z.object({
  institution: z.string().min(1, 'Institution name is required'),
  institutionLogo: z.string().url('Invalid logo URL').optional().or(z.literal('')),
  degree: z.string().min(1, 'Degree is required'),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().optional(),
  current: z.boolean(),
  topics: z.array(z.string()),
});

const projectSchema = z.object({
  name: z.string().min(1, 'Project name is required'),
  icon: z.string().url('Invalid icon URL').optional().or(z.literal('')),
  description: z.string().min(1, 'Project description is required'),
  sourceCodeUrl: z.string().url('Invalid source code URL').optional().or(z.literal('')),
  isSourceOpen: z.boolean(),
  demoUrl: z.string().url('Invalid demo URL').optional().or(z.literal('')),
  hasDemoAvailable: z.boolean(),
  documentationUrl: z.string().url('Invalid documentation URL').optional().or(z.literal('')),
  hasDocumentation: z.boolean(),
  startDate: z.string().min(1, 'Start date is required'),
  techStack: z.array(z.string()).max(10, 'Maximum 10 technologies allowed'),
});

const certificateSchema = z.object({
  name: z.string().min(1, 'Certificate name is required'),
  issuer: z.string().min(1, 'Issuer is required'),
  issuerLogo: z.string().url('Invalid logo URL').optional().or(z.literal('')),
  issueDate: z.string().min(1, 'Issue date is required'),
  expiryDate: z.string().optional(),
  neverExpires: z.boolean(),
  credentialId: z.string().optional(),
  credentialUrl: z.string().url('Invalid credential URL').optional().or(z.literal('')),
  topics: z.array(z.string()),
  isPaid: z.boolean(),
});

export const personalInfoSchema = z
  .object({
    fullName: z.string().min(1, 'Full name is required'),
    title: z.string().min(1, 'Professional title is required'),
    location: z.string().min(1, 'Location is required'),
    email: z.string().email('Invalid email address').min(1, 'Email is required'),
    phone: z.string().min(1, 'Phone number is required'),
    githubUrl: z.string().url('Invalid GitHub URL').optional().or(z.literal('')),
    linkedinUrl: z.string().url('Invalid LinkedIn URL').optional().or(z.literal('')),
    portfolioUrl: z.string().url('Invalid portfolio URL').optional().or(z.literal('')),
    willRelocate: z.boolean(),
    bio: z.string().min(1, 'Professional bio is required'),
    experienceYears: z
      .array(
        z.object({
          technology: z.string().min(1, 'Technology name is required'),
          startDate: z.string().min(1, 'Start date is required'),
        })
      )
      .optional(),
    projectsWorked: z.array(z.string()).optional(),
    languages: z
      .array(
        z.object({
          language: z.string().min(1, 'Language name is required'),
          proficiency: z.number().min(0).max(5),
        })
      )
      .optional(),
    hasExperience: z.boolean(),
    hasProjects: z.boolean(),
    hasEducation: z.boolean(),
    hasCertificates: z.boolean(),
    experiences: z.union([z.undefined(), z.array(experienceSchema)]).optional(),
    education: z.union([z.undefined(), z.array(educationSchema)]).optional(),
    projects: z.union([z.undefined(), z.array(projectSchema)]).optional(),
    certificates: z.union([z.undefined(), z.array(certificateSchema)]).optional(),
  })
  .superRefine((data, ctx) => {
    // Validate work experience only if enabled
    if (data.hasExperience) {
      if (!data.experiences || data.experiences.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "At least one work experience is required when 'I have work experience' is enabled",
          path: ['experiences'],
        });
      } else {
        data.experiences.forEach((exp, index) => {
          try {
            experienceSchema.parse(exp);
          } catch (error) {
            if (error instanceof z.ZodError) {
              error.errors.forEach((err) => {
                ctx.addIssue({
                  ...err,
                  path: ['experiences', index, ...(err.path || [])],
                });
              });
            }
          }
        });
      }
    }

    // Validate education only if enabled
    if (data.hasEducation) {
      if (!data.education || data.education.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "At least one education entry is required when 'I want to add education' is enabled",
          path: ['education'],
        });
      } else {
        data.education.forEach((edu, index) => {
          try {
            educationSchema.parse(edu);
          } catch (error) {
            if (error instanceof z.ZodError) {
              error.errors.forEach((err) => {
                ctx.addIssue({
                  ...err,
                  path: ['education', index, ...(err.path || [])],
                });
              });
            }
          }
        });
      }
    }

    // Validate projects only if enabled
    if (data.hasProjects) {
      if (!data.projects || data.projects.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "At least one project is required when 'I have projects to showcase' is enabled",
          path: ['projects'],
        });
      } else {
        data.projects.forEach((proj, index) => {
          try {
            projectSchema.parse(proj);
          } catch (error) {
            if (error instanceof z.ZodError) {
              error.errors.forEach((err) => {
                ctx.addIssue({
                  ...err,
                  path: ['projects', index, ...(err.path || [])],
                });
              });
            }
          }
        });
      }
    }

    // Validate certificates only if enabled
    if (data.hasCertificates) {
      if (!data.certificates || data.certificates.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "At least one certificate is required when 'I have certifications to add' is enabled",
          path: ['certificates'],
        });
      } else {
        data.certificates.forEach((cert, index) => {
          try {
            certificateSchema.parse(cert);
          } catch (error) {
            if (error instanceof z.ZodError) {
              error.errors.forEach((err) => {
                ctx.addIssue({
                  ...err,
                  path: ['certificates', index, ...(err.path || [])],
                });
              });
            }
          }
        });
      }
    }
  });

export type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;
