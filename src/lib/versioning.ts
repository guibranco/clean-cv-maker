import { type PersonalInfoFormData } from '@/components/PersonalInfoForm';

export interface CVVersion {
  id: string;
  name: string;
  displayName?: string;
  timestamp: number;
  data: PersonalInfoFormData;
  status: 'draft' | 'completed';
}

const STORAGE_KEY = 'cv-versions';
const CURRENT_VERSION_KEY = 'cv-current-version';

export function generateVersionName(data: PersonalInfoFormData): string {
  const date = new Date().toLocaleString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
  const name = data.fullName || 'Untitled';
  return `${date} - ${name}`;
}

export function saveVersion(data: PersonalInfoFormData, status: 'draft' | 'completed'): string | null {
  // Prevent saving if full name is empty
  if (!data.fullName?.trim()) {
    return null;
  }

  const versions = getVersions();
  const currentId = localStorage.getItem(CURRENT_VERSION_KEY);
  
  if (status === 'completed') {
    // Remove all drafts when saving a completed version
    const filteredVersions = versions.filter(v => v.status === 'completed');
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredVersions));
  } else if (status === 'draft' && currentId) {
    // Update existing draft
    const versionIndex = versions.findIndex(v => v.id === currentId && v.status === 'draft');
    if (versionIndex !== -1) {
      versions[versionIndex] = {
        ...versions[versionIndex],
        name: generateVersionName(data),
        timestamp: Date.now(),
        data,
        status: 'draft'
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(versions));
      return currentId;
    }
  }
  
  // Create new version
  const id = crypto.randomUUID();
  const version: CVVersion = {
    id,
    name: generateVersionName(data),
    timestamp: Date.now(),
    data,
    status
  };
  
  versions.push(version);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(versions));
  localStorage.setItem(CURRENT_VERSION_KEY, id);
  return id;
}

export function getVersions(): CVVersion[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  return JSON.parse(stored);
}

export function getVersion(id: string): CVVersion | undefined {
  return getVersions().find(v => v.id === id);
}

export function getCurrentVersion(): CVVersion | undefined {
  const currentId = localStorage.getItem(CURRENT_VERSION_KEY);
  if (!currentId) {
    const versions = getVersions();
    if (versions.length === 0) return undefined;
    const latestVersion = versions.sort((a, b) => b.timestamp - a.timestamp)[0];
    localStorage.setItem(CURRENT_VERSION_KEY, latestVersion.id);
    return latestVersion;
  }
  return getVersion(currentId);
}

export function deleteVersion(id: string): void {
  const versions = getVersions().filter(v => v.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(versions));
  
  const currentId = localStorage.getItem(CURRENT_VERSION_KEY);
  if (currentId === id) {
    localStorage.removeItem(CURRENT_VERSION_KEY);
  }
}

export function renameVersion(id: string, displayName: string): void {
  const versions = getVersions();
  const versionIndex = versions.findIndex(v => v.id === id);
  if (versionIndex !== -1) {
    versions[versionIndex] = {
      ...versions[versionIndex],
      displayName: displayName.trim() || undefined,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(versions));
  }
}