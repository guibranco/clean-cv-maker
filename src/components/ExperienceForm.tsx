import { useFieldArray, useFormContext } from 'react-hook-form';
import { Button } from './ui/Button';
import { Plus } from 'lucide-react';
import { ExperienceFields } from './experience/ExperienceFields';
import { RolesSection } from './experience/RolesSection';

export interface Role {
  title: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
}

export interface Experience {
  companyName: string;
  companyLogoUrl?: string;
  companySize?: string;
  companyIndustry?: string;
  companyDescription?: string;
  contractType: '' | 'full-time' | 'part-time' | 'freelance';
  workSchema: '' | 'on-site' | 'remote' | 'hybrid';
  startDate: string;
  endDate: string;
  current: boolean;
  roles: Role[];
}

export interface ExperienceFormData {
  experiences: Experience[];
}

export function ExperienceForm() {
  const { control } = useFormContext();

  const {
    fields: experiences,
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray({
    control,
    name: 'experiences',
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Work Experience</h2>
        <Button
          type="button"
          onClick={() =>
            appendExperience({
              companyName: '',
              contractType: '',
              workSchema: '',
              startDate: '',
              endDate: '',
              current: false,
              roles: [
                {
                  title: '',
                  startDate: '',
                  endDate: '',
                  current: false,
                  description: '',
                  achievements: [''],
                },
              ],
            })
          }
          className="gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Experience
        </Button>
      </div>

      {experiences.map((field, index) => (
        <div key={field.id} className="space-y-6">
          <ExperienceFields
            index={index}
            onRemove={index > 0 ? () => removeExperience(index) : undefined}
          />
          <RolesSection experienceIndex={index} />
        </div>
      ))}
    </div>
  );
}
