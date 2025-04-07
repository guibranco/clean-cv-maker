import { useState } from 'react';

export function useFormValidation() {
  const [tooltipMessage, setTooltipMessage] = useState('');
  const [showAutoSaveTooltip, setShowAutoSaveTooltip] = useState(false);

  const showTooltip = (message: string) => {
    setTooltipMessage(message);
    setShowAutoSaveTooltip(true);
    setTimeout(() => setShowAutoSaveTooltip(false), 5000);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formatValidationErrors = (errors: Record<string, any>): string => {
    const messages: string[] = [];
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const processErrors = (obj: Record<string, any>, path: string = '') => {
      for (const [key, value] of Object.entries(obj)) {
        if (value?.message) {
          const fieldName = path ? `${path}.${key}` : key;
          messages.push(`${fieldName}: ${value.message}`);
        } else if (value && typeof value === 'object') {
          processErrors(value, path ? `${path}.${key}` : key);
        }
      }
    };
    
    processErrors(errors);
    return messages.length > 0 
      ? `Please fix the following errors:\n${messages.join('\n')}`
      : 'Please fill in all required fields';
  };

  return {
    showTooltip,
    formatValidationErrors,
    tooltipMessage,
    showAutoSaveTooltip,
  };
}