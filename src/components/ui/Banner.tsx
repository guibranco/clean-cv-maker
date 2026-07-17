import { Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Banner() {
  const { t } = useTranslation(['common']);

  return (
    <div className="bg-green-50 dark:bg-green-900/30 border-b border-green-200 dark:border-green-800">
      <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 text-center text-sm text-green-800 dark:text-green-300">
          <Info className="h-4 w-4 shrink-0" />
          <span>{t('common:banner')}</span>
        </div>
      </div>
    </div>
  );
}
