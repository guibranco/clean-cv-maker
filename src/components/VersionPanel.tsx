import React, { useState, useCallback } from 'react';
import { type CVVersion, getVersions, deleteVersion, renameVersion } from '@/lib/versioning';
import { Button } from './ui/Button';
import { X } from 'lucide-react';
import { VersionCard } from './version/VersionCard';
import { ImportSection } from './version/ImportSection';
import { useTranslation } from 'react-i18next';

interface VersionPanelProps {
  onVersionSelect: (version: CVVersion) => void;
  onClose: () => void;
}

export function VersionPanel({ onVersionSelect, onClose }: VersionPanelProps) {
  const [versions, setVersions] = useState<CVVersion[]>(getVersions());
  const { t } = useTranslation(['common']);

  const refreshVersions = useCallback(() => {
    setVersions(getVersions());
  }, []);

  const handleDelete = useCallback(
    (id: string) => {
      deleteVersion(id);
      refreshVersions();
    },
    [refreshVersions]
  );

  const handleRename = useCallback(
    (id: string, newName: string) => {
      renameVersion(id, newName);
      refreshVersions();
    },
    [refreshVersions]
  );

  const handleExport = (version: CVVersion) => {
    const blob = new Blob([JSON.stringify(version, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `cv-${version.data.fullName.toLowerCase().replace(/\s+/g, '-')}-${version.status}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-lg p-4 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {t('common:versionPanel.title')}
        </h2>
        <Button variant="outline" size="sm" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <ImportSection onImportSuccess={refreshVersions} />

      {versions.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          {t('common:versionPanel.noVersions')}
        </p>
      ) : (
        <div className="space-y-4">
          {versions
            .sort((a, b) => b.timestamp - a.timestamp)
            .map((version) => (
              <VersionCard
                key={version.id}
                version={version}
                onSelect={onVersionSelect}
                onDelete={handleDelete}
                onExport={handleExport}
                onRename={handleRename}
              />
            ))}
        </div>
      )}
    </div>
  );
}
