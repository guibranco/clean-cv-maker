import { useFormContext } from 'react-hook-form';
import { useState } from 'react';
import { Tooltip } from '../ui/Tooltip';
import { Plus } from 'lucide-react';

interface TechStackSelectProps {
  index: number;
}

const TECH_STACK_OPTIONS = [
  // Languages
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'C#',
  'PHP',
  'Ruby',
  'Go',
  'Rust',
  'Swift',
  // Frontend
  'React',
  'Vue',
  'Angular',
  'Svelte',
  'Next.js',
  'Nuxt.js',
  'HTML',
  'CSS',
  'Sass',
  'Tailwind CSS',
  // Backend
  'Node.js',
  'Express',
  'Django',
  'Flask',
  'Spring Boot',
  'Laravel',
  'Ruby on Rails',
  '.NET',
  // Databases
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Redis',
  'SQLite',
  'Supabase',
  // Cloud & DevOps
  'AWS',
  'Azure',
  'Google Cloud',
  'Docker',
  'Kubernetes',
  'CI/CD',
  // Testing
  'Jest',
  'Cypress',
  'Playwright',
  'Vitest',
  // Mobile
  'React Native',
  'Flutter',
  'iOS',
  'Android',
  // Other
  'GraphQL',
  'REST API',
  'WebSocket',
  'WebRTC',
  'OAuth',
  'JWT',
];

export function TechStackSelect({ index }: TechStackSelectProps) {
  const { register, watch, setValue } = useFormContext();
  const [customTech, setCustomTech] = useState('');
  const selectedTech = watch(`projects.${index}.techStack`) || [];

  const toggleTech = (tech: string) => {
    if (selectedTech.includes(tech)) {
      setValue(
        `projects.${index}.techStack`,
        selectedTech.filter((t) => t !== tech)
      );
    } else if (selectedTech.length < 10) {
      setValue(`projects.${index}.techStack`, [...selectedTech, tech]);
    }
  };

  const handleAddCustom = () => {
    if (customTech && !selectedTech.includes(customTech) && selectedTech.length < 10) {
      setValue(`projects.${index}.techStack`, [...selectedTech, customTech]);
      setCustomTech('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddCustom();
    }
  };

  return (
    <div>
      <div className="flex items-center mb-2">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Tech Stack
        </label>
        <Tooltip
          content="The technologies used in this project."
          importance="Shows your technical expertise and project complexity."
          tips="Select up to 10 technologies. Add custom ones if needed."
        />
      </div>
      <input type="hidden" {...register(`projects.${index}.techStack`)} />

      <div className="mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={customTech}
            onChange={(e) => setCustomTech(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add custom technology"
            className="flex-1 rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-xs focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          />
          <button
            type="button"
            onClick={handleAddCustom}
            disabled={!customTech || selectedTech.length >= 10}
            className="inline-flex items-center gap-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-xs text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-hidden focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            <Plus className="h-4 w-4" />
            Add
          </button>
        </div>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {selectedTech.length}/10 technologies selected
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {selectedTech.map((tech) => (
          <button
            key={tech}
            type="button"
            onClick={() => toggleTech(tech)}
            className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/30"
          >
            {tech} ×
          </button>
        ))}
      </div>

      <div className="mt-4">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
          Suggested technologies:
        </p>
        <div className="flex flex-wrap gap-2">
          {TECH_STACK_OPTIONS.filter((tech) => !selectedTech.includes(tech)).map((tech) => (
            <button
              key={tech}
              type="button"
              onClick={() => toggleTech(tech)}
              disabled={selectedTech.length >= 10}
              className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 disabled:opacity-50"
            >
              {tech}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
