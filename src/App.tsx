import React, { useState, useEffect } from 'react';
import { PersonalInfoForm } from './components/PersonalInfoForm';
import { VersionPanel } from './components/VersionPanel';
import { GraduationCap, History } from 'lucide-react';
import { Button } from './components/ui/Button';
import { ThemeToggle } from './components/ui/ThemeToggle';
import { LanguageSelector } from './components/ui/LanguageSelector';
import { Footer } from './components/ui/Footer';
import { getVersion, getCurrentVersion } from './lib/versioning';
import type { CVVersion } from './lib/versioning';
import { useTranslation } from 'react-i18next';

function App() {
  const [showVersions, setShowVersions] = useState(false);
  const [initialData, setInitialData] = useState<CVVersion['data'] | undefined>();
  const { t } = useTranslation(['common']);

  useEffect(() => {
    // Set initial theme
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const params = new URLSearchParams(window.location.search);
    const versionId = params.get('version');

    if (versionId) {
      const version = getVersion(versionId);
      if (version) {
        setInitialData(version.data);
        return;
      }
    }

    // Load the current/latest version if no specific version is requested
    const currentVersion = getCurrentVersion();
    if (currentVersion) {
      setInitialData(currentVersion.data);
    }
  }, []);

  const handleVersionSelect = (version: CVVersion) => {
    const url = new URL(window.location.href);
    url.searchParams.set('version', version.id);
    window.history.pushState({}, '', url.toString());
    setInitialData(version.data);
    setShowVersions(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <header className="bg-white shadow-sm dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                {t('common:title')}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <LanguageSelector />
              <Button
                variant="outline"
                onClick={() => setShowVersions(!showVersions)}
                className="gap-2"
              >
                <History className="h-4 w-4" />
                {t('common:actions.history')}
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="px-4 py-5 sm:p-6">
              <PersonalInfoForm initialData={initialData} />
            </div>
          </div>
        </div>
      </main>
      {showVersions && (
        <VersionPanel
          onVersionSelect={handleVersionSelect}
          onClose={() => setShowVersions(false)}
        />
      )}
      <ThemeToggle />
      <Footer />
    </div>
  );
}

export default App;
