import { useFormContext } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { Tooltip } from '../ui/Tooltip';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  name: string;
  label: string;
  required?: boolean;
  type?: string;
  textarea?: boolean;
  rows?: number;
  tooltip?: {
    content: string;
    importance?: string;
    tips?: string;
  };
}

export function FormField({
  name,
  label,
  required = false,
  type = 'text',
  textarea = false,
  rows = 4,
  className,
  tooltip,
  ...props
}: FormFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name];

  const inputClassName = cn(
    'mt-1 block w-full rounded-md border px-3 py-2 shadow-xs focus:outline-hidden focus:ring-1',
    'bg-white dark:bg-gray-700 dark:text-white',
    error
      ? 'border-red-300 focus:border-red-500 focus:ring-red-500 dark:border-red-500'
      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:focus:border-blue-400 dark:focus:ring-blue-400',
    'disabled:bg-gray-100 dark:disabled:bg-gray-800',
    'placeholder-gray-400 dark:placeholder-gray-500',
    className
  );

  return (
    <div>
      <div className="flex items-center">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          {label} {required && '*'}
        </label>
        {tooltip && <Tooltip {...tooltip} />}
      </div>
      {textarea ? (
        <textarea id={name} {...register(name)} rows={rows} className={inputClassName} {...props} />
      ) : (
        <input type={type} id={name} {...register(name)} className={inputClassName} {...props} />
      )}
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{error.message as string}</p>
      )}
    </div>
  );
}
