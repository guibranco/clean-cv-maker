import { Button } from '../ui/Button';
import { Check, FileText, Download } from 'lucide-react';

interface FormActionsProps {
  onSaveCompleted: () => void;
  onGenerateHTML: () => void;
}

export function FormActions({ onSaveCompleted, onGenerateHTML }: FormActionsProps) {
  return (
    <div className="flex justify-end space-x-4">
      <Button
        type="button"
        onClick={onSaveCompleted}
        variant="outline"
        className="gap-2"
      >
        <Check className="h-4 w-4" />
        Save Completed Version
      </Button>
      <Button
        type="button"
        onClick={onGenerateHTML}
        variant="outline"
        className="gap-2"
      >
        <FileText className="h-4 w-4" />
        Download HTML
      </Button>
      <Button type="submit" className="gap-2">
        <Download className="h-4 w-4" />
        Download PDF
      </Button>
    </div>
  );
}