import { useFormContext, useFieldArray } from 'react-hook-form';
import { Button } from './ui/Button';
import { Plus } from 'lucide-react';
import { EducationFields } from './education/EducationFields';

export interface Education {
  institution: string;
  institutionLogo?: string;
  degree: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description?: string;
}

export interface EducationFormData {
  education: Education[];
}

export function EducationForm() {
  const { control } = useFormContext();

  const {
    fields: education,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: 'education',
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
        <Button
          type="button"
          onClick={() =>
            appendEducation({
              institution: '',
              institutionLogo: '',
              degree: '',
              startDate: '',
              endDate: '',
              current: false,
              description: '',
            })
          }
          className="gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Education
        </Button>
      </div>

      {education.map((field, index) => (
        <div key={field.id} className="space-y-6">
          <EducationFields
            index={index}
            onRemove={index > 0 ? () => removeEducation(index) : undefined}
          />
        </div>
      ))}
    </div>
  );
}
