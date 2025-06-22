import { useState } from 'react';

export function useFormValidation() {
  const [tooltipMessage, setTooltipMessage] = useState('');
  const [showAutoSaveTooltip, setShowAutoSaveTooltip] = useState(false);

  const showTooltip = (message: string) => {
    setTooltipMessage(message);
    setShowAutoSaveTooltip(true);
    setTimeout(() => setShowAutoSaveTooltip(false), 5000);
  };

  return {
    showTooltip,
    tooltipMessage,
    showAutoSaveTooltip,
  };
}