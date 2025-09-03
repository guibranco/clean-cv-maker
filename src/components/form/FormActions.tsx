import { Button } from '../ui/Button';
import { Check, FileText, Download } from 'lucide-react';

interface FormActionsProps {
  onSaveCompleted: () => void;
  onGenerateHTML: () => void;
  isGeneratingPDF?: boolean;
  isGeneratingHTML?: boolean;
}

export function FormActions({
  onSaveCompleted,
  onGenerateHTML,
  isGeneratingPDF,
  isGeneratingHTML,
}: FormActionsProps) {
  return (
    <div className="flex justify-end space-x-4">
      <Button type="button" onClick={onSaveCompleted} variant="outline" className="gap-2">
        <Check className="h-4 w-4" />
        Save Completed Version
      </Button>
      <Button
        type="button"
        onClick={onGenerateHTML}
        variant="outline"
        className="gap-2"
        disabled={isGeneratingHTML}
      >
        <FileText className="h-4 w-4" />
        {isGeneratingHTML ? 'Generating HTML...' : 'Download HTML'}
      </Button>
      <Button type="submit" className="gap-2" disabled={isGeneratingPDF}>
        <Download className="h-4 w-4" />
        {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}
      </Button>
    </div>
  );
}
