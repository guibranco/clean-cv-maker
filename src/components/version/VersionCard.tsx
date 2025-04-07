import { useState } from 'react';
import { type CVVersion } from '@/lib/versioning';
import { Button } from '../ui/Button';
import { Download, Trash2, Edit } from 'lucide-react';
import { RenameDialog } from './RenameDialog';
import { useTranslation } from 'react-i18next';

interface VersionCardProps {
  version: CVVersion;
  onSelect: (version: CVVersion) => void;
  onDelete: (id: string) => void;
  onExport: (version: CVVersion) => void;
  onRename: (id: string, newName: string) => void;
}

export function VersionCard({ version, onSelect, onDelete, onExport, onRename }: VersionCardProps) {
  const [showRenameDialog, setShowRenameDialog] = useState(false);
  const { t } = useTranslation(['common']);

  const getStatusColor = (status: CVVersion['status']) => {
    return status === 'completed' 
      ? 'bg-green-100 dark:bg-green-900/30' 
      : 'bg-yellow-100 dark:bg-yellow-900/30';
  };

  const displayName = version.displayName || version.name;
  const timestamp = new Date(version.timestamp).toLocaleString(undefined, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <>
      <div className={`border dark:border-gray-700 rounded-lg p-3 hover:bg-opacity-80 transition-colors ${getStatusColor(version.status)}`}>
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">{displayName}</h3>
            <span className="text-xs text-gray-500 dark:text-gray-400">{timestamp}</span>
            <div className="text-sm text-gray-600 dark:text-gray-300 capitalize">
              {t(`common:versionPanel.status.${version.status}`)}
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowRenameDialog(true)}
              className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onExport(version)}
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <Download className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDelete(version.id)}
              className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={() => onSelect(version)}
        >
          {t('common:versionPanel.loadVersion')}
        </Button>
      </div>

      {showRenameDialog && (
        <RenameDialog
          currentName={version.displayName || version.name}
          onRename={(newName) => onRename(version.id, newName)}
          onClose={() => setShowRenameDialog(false)}
        />
      )}
    </>
  );
}