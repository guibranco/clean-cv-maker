import * as React from 'react';
import { cn } from '@/lib/utils';

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onCheckedChange?: (checked: boolean) => void;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, onCheckedChange, checked = false, ...props }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onCheckedChange?.(event.target.checked);
      props.onChange?.(event);
    };

    return (
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          ref={ref}
          checked={checked}
          onChange={handleChange}
          {...props}
        />
        <div
          className={cn(
            'relative w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors',
            'after:content-[""] after:absolute after:top-[2px] after:left-[2px]',
            'after:bg-white after:border after:border-gray-300 dark:after:border-gray-600 after:rounded-full',
            'after:h-5 after:w-5 after:transition-all',
            checked && 'bg-blue-600 dark:bg-blue-500 after:translate-x-full after:border-white',
            className
          )}
        />
      </label>
    );
  }
);

Switch.displayName = 'Switch';