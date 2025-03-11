import { useRef, useState } from 'react';
import { Button } from '../ui/Button';
import { Upload } from 'lucide-react';
import { z } from 'zod';
import { saveVersion } from '@/lib/versioning';

// Schema for validating imported JSON
const importSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  timestamp: z.number(),
  status: z.enum(['draft', 'completed']),
  data: z.object({
    fullName: z.string(),
    title: z.string(),
    location: z.string(),
    email: z.string(),
    phone: z.string(),
    githubUrl: z.string(),
    linkedinUrl: z.string(),
    portfolioUrl: z.string().optional(),
    willRelocate: z.boolean(),
    bio: z.string(),
    experiences: z.array(z.object({
      companyName: z.string(),
      companyLogoUrl: z.string().optional(),
      companySize: z.string().optional(),
      companyIndustry: z.string().optional(),
      companyDescription: z.string().optional(),
      contractType: z.enum(['', 'full-time', 'part-time', 'freelance']),
      workSchema: z.enum(['', 'on-site', 'remote', 'hybrid']),
      startDate: z.string(),
      endDate: z.string().optional(),
      current: z.boolean(),
      roles: z.array(z.object({
        title: z.string(),
        startDate: z.string(),
        endDate: z.string().optional(),
        current: z.boolean(),
        description: z.string(),
        achievements: z.array(z.string()),
      })),
    })).optional(),
  }),
});

interface ImportSectionProps {
  onImportSuccess: () => void;
}

export function ImportSection({ onImportSuccess }: ImportSectionProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importError, setImportError] = useState<string | null>(null);

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        setImportError(null);
        const content = e.target?.result as string;
        const importedVersion = JSON.parse(content);
        
        // Validate the imported data structure
        const validationResult = importSchema.safeParse(importedVersion);
        
        if (!validationResult.success) {
          throw new Error('Invalid CV format: ' + validationResult.error.message);
        }

        // Create a new version with the imported data
        const versionId = saveVersion(importedVersion.data, importedVersion.status);
        if (versionId) {
          onImportSuccess();
        } else {
          throw new Error('Failed to save imported version');
        }
      } catch (error) {
        console.error('Failed to import CV version:', error);
        setImportError(error instanceof Error ? error.message : 'Failed to import CV version');
      }
    };
    reader.readAsText(file);
    // Reset the input to allow importing the same file again
    event.target.value = '';
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="mb-4">
      <Button
        variant="outline"
        className="w-full gap-2"
        onClick={handleImportClick}
      >
        <Upload className="h-4 w-4" />
        Import CV Version
      </Button>
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleImport}
        className="hidden"
        aria-label="Import CV Version"
      />
      {importError && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{importError}</p>
      )}
    </div>
  );
}