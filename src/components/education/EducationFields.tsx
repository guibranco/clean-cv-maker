import { useFormContext, useFieldArray } from 'react-hook-form';
import { Button } from '../ui/Button';
import { Trash2, Plus } from 'lucide-react';
import { Tooltip } from '../ui/Tooltip';
import { FormField } from '../form/FormField';

interface EducationFieldsProps {
  index: number;
  onRemove?: () => void;
}

export function EducationFields({ index, onRemove }: EducationFieldsProps) {
  const { register, watch, control } = useFormContext();
  const current = watch(`education.${index}.current`);

  const {
    fields: topics,
    append: appendTopic,
    remove: removeTopic,
  } = useFieldArray({
    control,
    name: `education.${index}.topics`,
  });

  return (
    <div className="border dark:border-gray-700 rounded-lg p-6 space-y-6 bg-white dark:bg-gray-800">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Education {index + 1}
        </h3>
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
            name={`education.${index}.institution`}
            label="Institution"
            required
            tooltip={{
              content: 'Name of the educational institution.',
              importance: 'Helps establish your academic background.',
              tips: 'Use the full, official name of the institution.',
            }}
          />
        </div>

        <div className="sm:col-span-2">
          <FormField
            name={`education.${index}.institutionLogo`}
            label="Institution Logo URL"
            type="url"
            tooltip={{
              content: "URL to the institution's logo.",
              importance: 'Adds visual recognition and professionalism to your education section.',
              tips: 'Use a high-quality, official logo. Ensure the URL is permanent and accessible.',
            }}
          />
        </div>

        <div className="sm:col-span-2">
          <FormField
            name={`education.${index}.degree`}
            label="Degree"
            required
            tooltip={{
              content: 'Your degree or certification.',
              importance: 'Specifies your level of education and field of study.',
              tips: 'Include both the type (e.g., Bachelor of Science) and field (e.g., Computer Science).',
            }}
          />
        </div>

        <FormField
          name={`education.${index}.startDate`}
          label="Start Date"
          type="month"
          required
          tooltip={{
            content: 'When you started your studies.',
            importance: 'Shows the timeline of your education.',
            tips: 'Use the actual start date of your program.',
          }}
        />

        <div className="space-y-2">
          <div className="flex items-center">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              End Date
            </label>
            <Tooltip
              content="When you completed or expect to complete your studies."
              importance="Shows your education timeline and current status."
              tips="Use the 'Current' checkbox if you're still studying."
            />
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="month"
              {...register(`education.${index}.endDate` as const)}
              disabled={current}
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-xs focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-800"
            />
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register(`education.${index}.current` as const)}
                className="h-4 w-4 rounded-sm border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:checked:bg-blue-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-200">Current</span>
            </label>
          </div>
        </div>

        <div className="sm:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-200">
                Topics & Skills Learned
              </h4>
              <Tooltip
                content="Key topics, courses, and skills learned during your education."
                importance="Helps recruiters understand the specific knowledge and skills you gained."
                tips="Include relevant coursework, major projects, and key skills acquired."
              />
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => appendTopic('')}
              className="gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Topic
            </Button>
          </div>
          {topics.map((topic, topicIndex) => (
            <div key={topic.id} className="flex items-center gap-2">
              <span className="text-gray-500 dark:text-gray-400">•</span>
              <input
                type="text"
                {...register(`education.${index}.topics.${topicIndex}`)}
                placeholder="Enter a topic or skill learned"
                className="flex-1 rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-xs focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => removeTopic(topicIndex)}
                className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
