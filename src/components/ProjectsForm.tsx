import { useFormContext, useFieldArray } from 'react-hook-form';
import { Button } from './ui/Button';
import { Plus } from 'lucide-react';
import { ProjectFields } from './projects/ProjectFields';

export interface Project {
  name: string;
  icon?: string;
  description: string;
  sourceCodeUrl?: string;
  isSourceOpen: boolean;
  demoUrl?: string;
  hasDemoAvailable: boolean;
  documentationUrl?: string;
  hasDocumentation: boolean;
  startDate: string;
  techStack: string[];
}

export interface ProjectsFormData {
  projects: Project[];
}

export function ProjectsForm() {
  const { control } = useFormContext();

  const { fields: projects, append: appendProject, remove: removeProject } = useFieldArray({
    control,
    name: 'projects',
  });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Projects</h2>
        <Button
          type="button"
          onClick={() =>
            appendProject({
              name: '',
              description: '',
              isSourceOpen: true,
              hasDemoAvailable: true,
              hasDocumentation: false,
              startDate: '',
              techStack: [],
            })
          }
          className="gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Project
        </Button>
      </div>

      {projects.map((field, index) => (
        <div key={field.id} className="space-y-6">
          <ProjectFields
            index={index}
            onRemove={index > 0 ? () => removeProject(index) : undefined}
          />
        </div>
      ))}
    </div>
  );
}