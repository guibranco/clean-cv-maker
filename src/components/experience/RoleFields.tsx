import { useFormContext, useFieldArray } from 'react-hook-form';
import { Button } from '../ui/Button';
import { Trash2, Plus } from 'lucide-react';
import { Tooltip } from '../ui/Tooltip';

interface RoleFieldsProps {
  experienceIndex: number;
  roleIndex: number;
  onRemove?: () => void;
}

export function RoleFields({ experienceIndex, roleIndex, onRemove }: RoleFieldsProps) {
  const { control, register, watch } = useFormContext();
  
  const { fields: achievements, append: appendAchievement, remove: removeAchievement } = useFieldArray({
    control,
    name: `experiences.${experienceIndex}.roles.${roleIndex}.achievements` as const,
  });

  return (
    <div className="border dark:border-gray-700 rounded-lg p-4 space-y-4 bg-white dark:bg-gray-800">
      <div className="flex justify-between items-start">
        <h5 className="text-sm font-medium text-gray-900 dark:text-white">Role {roleIndex + 1}</h5>
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

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <div className="flex items-center">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Role Title</label>
            <Tooltip
              content="Your job title or position in this role."
              importance="Job titles are key for ATS matching and showing career progression."
              tips="Use standard industry titles. Avoid company-specific or creative titles."
            />
          </div>
          <input
            type="text"
            {...register(`experiences.${experienceIndex}.roles.${roleIndex}.title` as const)}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-xs focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <div className="flex items-center">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Start Date</label>
            <Tooltip
              content="When you started this specific role."
              importance="Shows your progression within the company and duration in each role."
              tips="For internal promotions, use the date you started the new role."
            />
          </div>
          <input
            type="month"
            {...register(`experiences.${experienceIndex}.roles.${roleIndex}.startDate` as const)}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-xs focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <div className="flex items-center">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">End Date</label>
            <Tooltip
              content="When you finished this specific role."
              importance="Shows the duration of each role and your career progression."
              tips="Use the 'Current' checkbox if this is your current role."
            />
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="month"
              {...register(`experiences.${experienceIndex}.roles.${roleIndex}.endDate` as const)}
              disabled={watch(`experiences.${experienceIndex}.roles.${roleIndex}.current`)}
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-xs focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white disabled:bg-gray-100 dark:disabled:bg-gray-800"
            />
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                {...register(`experiences.${experienceIndex}.roles.${roleIndex}.current` as const)}
                className="h-4 w-4 rounded-sm border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:checked:bg-blue-500"
              />
              <span className="text-sm text-gray-700 dark:text-gray-200">Current</span>
            </label>
          </div>
        </div>

        <div className="sm:col-span-2">
          <div className="flex items-center">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Role Description</label>
            <Tooltip
              content="A summary of your responsibilities and scope in this role."
              importance="This is where you can detail your day-to-day work and impact."
              tips="Use action verbs and quantify results where possible. Focus on your most significant responsibilities."
            />
          </div>
          <textarea
            {...register(`experiences.${experienceIndex}.roles.${roleIndex}.description` as const)}
            rows={2}
            className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-xs focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        <div className="sm:col-span-2 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Key Achievements</label>
              <Tooltip
                content="Specific accomplishments and successes in this role."
                importance="Achievements demonstrate your impact and value to potential employers."
                tips="Use metrics and numbers when possible. Focus on results and impact rather than just responsibilities."
              />
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => appendAchievement('')}
              disabled={achievements.length >= 10}
              className="gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Achievement
            </Button>
          </div>
          {achievements.map((achievement, achievementIndex) => (
            <div key={achievement.id} className="flex gap-2">
              <input
                type="text"
                {...register(`experiences.${experienceIndex}.roles.${roleIndex}.achievements.${achievementIndex}` as const)}
                placeholder={`Achievement ${achievementIndex + 1}`}
                className="flex-1 rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-xs focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
              />
              <Button
                type="button"
                variant="outline"
                onClick={() => removeAchievement(achievementIndex)}
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