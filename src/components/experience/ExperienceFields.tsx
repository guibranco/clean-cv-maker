import { useFormContext } from 'react-hook-form';
import { Button } from '../ui/Button';
import { Trash2 } from 'lucide-react';
import { Tooltip } from '../ui/Tooltip';

interface ExperienceFieldsProps {
  index: number;
  onRemove?: () => void;
}

export function ExperienceFields({ index, onRemove }: ExperienceFieldsProps) {
  const { register, watch } = useFormContext();

  return (
    <div className="border dark:border-gray-700 rounded-lg p-6 space-y-6 bg-white dark:bg-gray-800">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Experience {index + 1}</h3>
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
        <div>
          <div className="flex items-center">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Company Name *</label>
            <Tooltip
              content="The name of the company where you worked."
              importance="This is a key field for ATS systems and helps recruiters verify your employment history."
              tips="Use the official company name, not abbreviations or informal names."
            />
          </div>
          <input
            type="text"
            {...register(`experiences.${index}.companyName` as const)}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-xs focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            required
          />
        </div>

        <div>
          <div className="flex items-center">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Company Logo URL</label>
            <Tooltip
              content="A URL to the company's logo image."
              importance="Adding visual elements can make your CV more engaging and memorable."
              tips="Use a high-quality, professional logo image. Ensure the URL is permanent and accessible."
            />
          </div>
          <input
            type="url"
            {...register(`experiences.${index}.companyLogoUrl` as const)}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-xs focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <div className="flex items-center">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Company Size</label>
            <Tooltip
              content="The approximate size of the company in terms of employees."
              importance="Helps recruiters understand the scale of organizations you've worked with."
              tips="Use standard ranges like '1-10', '11-50', '51-200', '201-500', '500+'"
            />
          </div>
          <input
            type="text"
            {...register(`experiences.${index}.companySize` as const)}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-xs focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="e.g., 1-10, 11-50, 51-200, 201-500, 500+"
          />
        </div>

        <div>
          <div className="flex items-center">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Industry</label>
            <Tooltip
              content="The primary industry or sector of the company."
              importance="Shows your experience across different industries and helps with industry-specific job matching."
              tips="Use standard industry terms that are recognized in your field."
            />
          </div>
          <input
            type="text"
            {...register(`experiences.${index}.companyIndustry` as const)}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-xs focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div className="sm:col-span-2">
          <div className="flex items-center">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Company Description</label>
            <Tooltip
              content="A brief description of what the company does."
              importance="Provides context about your work environment and helps recruiters understand the company's focus."
              tips="Keep it concise but informative. Focus on the company's main business and achievements."
            />
          </div>
          <textarea
            {...register(`experiences.${index}.companyDescription` as const)}
            rows={3}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-xs focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <div className="flex items-center">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Contract Type</label>
            <Tooltip
              content="The type of employment contract you had."
              importance="Clarifies your employment status and helps match you with similar opportunities."
              tips="Be honest about your employment type. Each has its own advantages."
            />
          </div>
          <select
            {...register(`experiences.${index}.contractType` as const)}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-xs focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="">Select contract type</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="freelance">Freelance</option>
          </select>
        </div>

        <div>
          <div className="flex items-center">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Work Schema</label>
            <Tooltip
              content="How you performed your work (on-site, remote, or hybrid)."
              importance="Work location flexibility is increasingly important to both employers and employees."
              tips="This can be especially relevant for remote job searches."
            />
          </div>
          <select
            {...register(`experiences.${index}.workSchema` as const)}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-xs focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
            <option value="">Select work schema</option>
            <option value="on-site">On Site</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
          </select>
        </div>

        <div>
          <div className="flex items-center">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Start Date</label>
            <Tooltip
              content="When you started working at this company."
              importance="Shows your career progression and helps verify employment duration."
              tips="Use the actual start date, even for internal promotions or role changes."
            />
          </div>
          <input
            type="month"
            {...register(`experiences.${index}.startDate` as const)}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-xs focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">End Date</label>
            <Tooltip
              content="When you finished working at this company."
              importance="Completes your employment timeline and shows job stability."
              tips="Use the 'Current' checkbox for your present position."
            />
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="month"
              {...register(`experiences.${index}.endDate` as const)}
              disabled={watch(`experiences.${index}.current`)}
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-xs focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-800"
            />
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register(`experiences.${index}.current` as const)}
                className="h-4 w-4 rounded-sm border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:checked:bg-blue-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-200">Current</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}