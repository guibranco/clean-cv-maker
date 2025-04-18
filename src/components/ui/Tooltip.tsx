import { useState } from 'react';
import { Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TooltipProps {
  content: string;
  importance?: string;
  tips?: string;
}

export function Tooltip({ content, importance, tips }: TooltipProps) {
  const [show, setShow] = useState(false);
  const { t } = useTranslation(['common']);

  const handleMouseEvents = {
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onClick: () => setShow(!show),
  };

  return (
    <div className="relative inline-block">
      <div
        role="button"
        tabIndex={0}
        className="ml-1.5 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 focus:outline-none cursor-pointer"
        {...handleMouseEvents}
      >
        <Info className="h-4 w-4" />
      </div>
      {show && (
        <div className="absolute left-6 top-0 z-10 w-72 rounded-lg bg-gray-900 dark:bg-gray-800 px-4 py-3 text-sm text-white shadow-lg">
          <p className="mb-2">{content}</p>
          {importance && (
            <p className="mb-2 text-blue-300">
              <strong>{t('common:tooltip.importance')}</strong> {importance}
            </p>
          )}
          {tips && (
            <p className="text-green-300">
              <strong>{t('common:tooltip.tips')}</strong> {tips}
            </p>
          )}
        </div>
      )}
    </div>
  );
}