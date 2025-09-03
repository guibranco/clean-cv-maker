import { useFormContext } from 'react-hook-form';
import { Tooltip } from '../ui/Tooltip';

interface FormCheckboxProps {
  name: string;
  label: string;
  tooltip?: {
    content: string;
    importance?: string;
    tips?: string;
  };
}

export function FormCheckbox({ name, label, tooltip }: FormCheckboxProps) {
  const { register } = useFormContext();

  return (
    <div className="flex items-center">
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          {...register(name)}
          className="h-4 w-4 rounded-sm border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:checked:bg-blue-500"
        />
        <span className="text-sm text-gray-700 dark:text-gray-200">{label}</span>
      </label>
      {tooltip && <Tooltip {...tooltip} />}
    </div>
  );
}
