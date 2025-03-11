import { Eye } from 'lucide-react';
import { CVPreview } from '../CVPreview';
import type { PersonalInfoFormData } from '../PersonalInfoForm';

interface PreviewSectionProps {
  data: PersonalInfoFormData;
}

export function PreviewSection({ data }: PreviewSectionProps) {
  return (
    <div className="border-t dark:border-gray-700 pt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">CV Preview</h2>
        <div className="text-sm text-green-600 dark:text-green-400 flex items-center gap-2">
          <Eye className="h-4 w-4" />
          Live Preview
        </div>
      </div>
      <CVPreview data={data} />
    </div>
  );
}