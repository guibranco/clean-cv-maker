import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Switch } from '../ui/Switch';
import { cn } from '@/lib/utils';

interface CollapsibleSectionProps {
  title: string;
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
  children: React.ReactNode;
}

export function CollapsibleSection({ title, enabled, onToggle, children }: CollapsibleSectionProps) {
  const [isExpanded, setIsExpanded] = useState(enabled);

  useEffect(() => {
    if (!enabled) {
      setIsExpanded(false);
    }
  }, [enabled]);

  return (
    <div className="border dark:border-gray-700 rounded-lg overflow-hidden">
      <div className="bg-gray-50 dark:bg-gray-800 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Switch
              id={`enable-${title.toLowerCase()}`}
              checked={enabled}
              onCheckedChange={onToggle}
            />
            <label
              htmlFor={`enable-${title.toLowerCase()}`}
              className="text-sm font-medium text-gray-900 dark:text-gray-100 cursor-pointer select-none"
            >
              {title}
            </label>
          </div>
          {enabled && (
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <ChevronDown className={cn(
                "h-5 w-5 transition-transform duration-200",
                isExpanded ? "transform rotate-180" : ""
              )} />
            </button>
          )}
        </div>
      </div>
      {enabled && isExpanded && (
        <div className="p-4 bg-white dark:bg-gray-900">
          {children}
        </div>
      )}
    </div>
  );
}