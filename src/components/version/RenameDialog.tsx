import { useState } from 'react';
import { Button } from '../ui/Button';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface RenameDialogProps {
  currentName: string;
  onRename: (newName: string) => void;
  onClose: () => void;
}

export function RenameDialog({ currentName, onRename, onClose }: RenameDialogProps) {
  const [newName, setNewName] = useState(currentName);
  const { t } = useTranslation(['common']);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRename(newName);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-96 relative">
        <Button
          variant="outline"
          size="sm"
          onClick={onClose}
          className="absolute right-4 top-4"
        >
          <X className="h-4 w-4" />
        </Button>
        
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          {t('common:versionPanel.rename.title')}
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
              {t('common:versionPanel.rename.label')}
            </label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-xs focus:border-blue-500 focus:outline-hidden focus:ring-1 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder={t('common:versionPanel.rename.placeholder')}
              autoFocus
            />
          </div>
          
          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={onClose}>
              {t('common:actions.cancel')}
            </Button>
            <Button type="submit" disabled={!newName.trim()}>
              {t('common:actions.save')}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}