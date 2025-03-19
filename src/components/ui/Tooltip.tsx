import { useState } from 'react';
import { Info } from 'lucide-react';
import { useRef } from 'react';

interface TooltipProps {
  content: string;
  importance?: string;
  tips?: string;
}

export function Tooltip({ content, importance, tips }: TooltipProps) {
  const [show, setShow] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="relative inline-block">
      <button
        type="button"
        ref={buttonRef}
        className="ml-1.5 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 focus:outline-hidden"
        aria-label="More information"
        aria-expanded={show}
        aria-describedby="tooltip-content"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow(!show)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setShow(!show);
          } else if (e.key === 'Escape' && show) {
            setShow(false);
          }
        }}
      >
        <Info className="h-4 w-4" />
      </button>
      {show && (
        <div 
          id="tooltip-content"
          role="tooltip" 
          className="absolute left-6 top-0 z-50 w-72 rounded-lg bg-gray-900 dark:bg-gray-800 px-4 py-3 text-sm text-white shadow-lg max-h-80 overflow-y-auto"
        >
          <p className="mb-2">{content}</p>
          {importance && (
            <p className="mb-2 text-blue-300">
              <strong>Why it matters:</strong> {importance}
            </p>
          )}
          {tips && (
            <p className="text-green-300">
              <strong>Tips:</strong> {tips}
            </p>
          )}
        </div>
      )}
    </div>
  );
}