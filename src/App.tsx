import React, { useState, useEffect } from 'react';
import { PersonalInfoForm } from './components/PersonalInfoForm';
import { VersionPanel } from './components/VersionPanel';
import { GraduationCap, History } from 'lucide-react';
import { Button } from './components/ui/Button';
import { ThemeToggle } from './components/ui/ThemeToggle';
import { getVersion, getCurrentVersion } from './lib/versioning';
import type { CVVersion } from './lib/versioning';

/**
 * The main application component that manages the display of the Clean CV Maker.
 * It handles theme settings, version selection, and initial data loading.
 *
 * @function App
 * @returns {JSX.Element} The rendered application component.
 *
 * @throws {Error} Throws an error if there is an issue with loading the version data.
 */
function App() {
  const [showVersions, setShowVersions] = useState(false);
  const [initialData, setInitialData] = useState<CVVersion['data'] | undefined>();

  useEffect(() => {
    // Set initial theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
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

  /**
   * Updates the current URL to reflect the selected version and sets the initial data.
   *
   * This function modifies the browser's history state by adding a new entry with the selected version's ID as a query parameter.
   * It also updates the application state with the corresponding data for the selected version and hides the version selection UI.
   *
   * @param {CVVersion} version - The version object containing the ID and associated data to be set.
   * @throws {Error} Throws an error if the version parameter is invalid or if there is an issue updating the URL.
   */
  const handleVersionSelect = (version: CVVersion) => {
    const url = new URL(window.location.href);
    url.searchParams.set('version', version.id);
    window.history.pushState({}, '', url.toString());
    setInitialData(version.data);
    setShowVersions(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white shadow dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Clean CV Maker</h1>
            </div>
            <Button
              variant="outline"
              onClick={() => setShowVersions(!showVersions)}
              className="gap-2"
            >
              <History className="h-4 w-4" />
              Version History
            </Button>
          </div>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="bg-white shadow sm:rounded-lg dark:bg-gray-800">
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
    </div>
  );
}

export default App;