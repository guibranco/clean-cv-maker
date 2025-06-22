import { useState } from 'react';

export function useFormValidation() {
  const [tooltipMessage, setTooltipMessage] = useState('');
  const [showAutoSaveTooltip, setShowAutoSaveTooltip] = useState(false);

  const showTooltip = (message: string) => {
    setTooltipMessage(message);
    setShowAutoSaveTooltip(true);
    setTimeout(() => setShowAutoSaveTooltip(false), 5000);
  };

  const focusFirstInvalidField = (errors: Record<string, any>) => {
    // Helper function to find the first invalid field path
    const findFirstErrorPath = (obj: Record<string, any>, path: string = ''): string | null => {
      for (const [key, value] of Object.entries(obj)) {
        const currentPath = path ? `${path}.${key}` : key;
        
        if (value?.message) {
          return currentPath;
        } else if (value && typeof value === 'object' && !Array.isArray(value)) {
          const nestedPath = findFirstErrorPath(value, currentPath);
          if (nestedPath) return nestedPath;
        } else if (Array.isArray(value)) {
          for (let i = 0; i < value.length; i++) {
            if (value[i] && typeof value[i] === 'object') {
              const arrayPath = findFirstErrorPath(value[i], `${currentPath}.${i}`);
              if (arrayPath) return arrayPath;
            }
          }
        }
      }
      return null;
    };

    const firstErrorPath = findFirstErrorPath(errors);
    if (firstErrorPath) {
      // Try to find and focus the field
      const fieldElement = document.querySelector(`[name="${firstErrorPath}"]`) as HTMLElement;
      if (fieldElement) {
        fieldElement.focus();
        fieldElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      // If direct field not found, try to find by id
      const fieldById = document.getElementById(firstErrorPath) as HTMLElement;
      if (fieldById) {
        fieldById.focus();
        fieldById.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      // If still not found, try to find the first input in the section
      const pathParts = firstErrorPath.split('.');
      if (pathParts.length > 1) {
        const sectionName = pathParts[0];
        const sectionElement = document.querySelector(`[data-section="${sectionName}"]`);
        if (sectionElement) {
          const firstInput = sectionElement.querySelector('input, textarea, select') as HTMLElement;
          if (firstInput) {
            firstInput.focus();
            firstInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      }
    }
  };

  return {
    showTooltip,
    focusFirstInvalidField,
    tooltipMessage,
    showAutoSaveTooltip,
  };
}