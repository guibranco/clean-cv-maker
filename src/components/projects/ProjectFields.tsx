import { useFormContext } from 'react-hook-form';
import { Button } from '../ui/Button';
import { Trash2 } from 'lucide-react';
import { FormField } from '../form/FormField';
import { FormCheckbox } from '../form/FormCheckbox';
import { TechStackSelect } from './TechStackSelect';

interface ProjectFieldsProps {
  index: number;
  onRemove?: () => void;
}

export function ProjectFields({ index, onRemove }: ProjectFieldsProps) {
  const { watch } = useFormContext();
  const isSourceOpen = watch(`projects.${index}.isSourceOpen`);
  const hasDemoAvailable = watch(`projects.${index}.hasDemoAvailable`);
  const hasDocumentation = watch(`projects.${index}.hasDocumentation`);

  return (
    <div className="border dark:border-gray-700 rounded-lg p-6 space-y-6 bg-white dark:bg-gray-800">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Project {index + 1}</h3>
        {onRemove && (
          <Button
            type="button"
            variant="outline"
            onClick={onRemove}
            className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <FormField
            name={`projects.${index}.name`}
            label="Project Name"
            required
            tooltip={{
              content: "The name of your project.",
              importance: "Makes your project easily identifiable and memorable.",
              tips: "Use a clear, descriptive name that reflects the project's purpose."
            }}
          />
        </div>

        <div className="sm:col-span-2">
          <FormField
            name={`projects.${index}.icon`}
            label="Project Icon URL"
            type="url"
            tooltip={{
              content: "URL to the project's icon or logo.",
              importance: "Visual representation helps make your project stand out.",
              tips: "Use a square image with a clear background. SVG or PNG formats work best."
            }}
          />
        </div>

        <div className="sm:col-span-2">
          <FormField
            name={`projects.${index}.description`}
            label="Project Description"
            textarea
            required
            tooltip={{
              content: "A brief description of what your project does.",
              importance: "Helps readers quickly understand your project's purpose and value.",
              tips: "Focus on the problem it solves and key features. Keep it concise but informative."
            }}
          />
        </div>

        <div className="sm:col-span-2">
          <FormCheckbox
            name={`projects.${index}.isSourceOpen`}
            label="Source code is open"
            tooltip={{
              content: "Indicate if the source code is publicly available.",
              importance: "Open source projects demonstrate transparency and collaboration skills.",
              tips: "If open source, ensure the repository is well-documented and maintained."
            }}
          />
        </div>

        {isSourceOpen && (
          <div className="sm:col-span-2">
            <FormField
              name={`projects.${index}.sourceCodeUrl`}
              label="Source Code URL"
              type="url"
              required
              tooltip={{
                content: "Link to your project's source code repository.",
                importance: "Allows others to review your code and implementation.",
                tips: "Usually a GitHub, GitLab, or Bitbucket repository URL."
              }}
            />
          </div>
        )}

        <div className="sm:col-span-2">
          <FormCheckbox
            name={`projects.${index}.hasDemoAvailable`}
            label="Demo available"
            tooltip={{
              content: "Indicate if there's a live demo of your project.",
              importance: "Live demos help showcase your project in action.",
              tips: "Consider setting up a demo if possible, it greatly enhances project presentation."
            }}
          />
        </div>

        {hasDemoAvailable && (
          <div className="sm:col-span-2">
            <FormField
              name={`projects.${index}.demoUrl`}
              label="Demo URL"
              type="url"
              required
              tooltip={{
                content: "Link to a live demo of your project.",
                importance: "Allows others to try your project immediately.",
                tips: "Ensure the demo is stable and represents your project well."
              }}
            />
          </div>
        )}

        <div className="sm:col-span-2">
          <FormCheckbox
            name={`projects.${index}.hasDocumentation`}
            label="Documentation available"
            tooltip={{
              content: "Indicate if there's documentation for your project.",
              importance: "Good documentation shows attention to detail and project maturity.",
              tips: "Even basic documentation is better than none."
            }}
          />
        </div>

        {hasDocumentation && (
          <div className="sm:col-span-2">
            <FormField
              name={`projects.${index}.documentationUrl`}
              label="Documentation URL"
              type="url"
              required
              tooltip={{
                content: "Link to your project's documentation.",
                importance: "Helps others understand how to use your project.",
                tips: "Consider using platforms like ReadTheDocs or GitHub Pages."
              }}
            />
          </div>
        )}

        <div className="sm:col-span-2">
          <FormField
            name={`projects.${index}.startDate`}
            label="Start Date"
            type="month"
            required
            tooltip={{
              content: "When you started working on this project.",
              importance: "Shows project timeline and your experience progression.",
              tips: "Use the month when you made your first significant contribution."
            }}
          />
        </div>

        <div className="sm:col-span-2">
          <TechStackSelect index={index} />
        </div>
      </div>
    </div>
  );
}