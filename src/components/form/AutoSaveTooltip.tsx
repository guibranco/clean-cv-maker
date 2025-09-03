interface AutoSaveTooltipProps {
  show: boolean;
  message: string;
}

export function AutoSaveTooltip({ show, message }: AutoSaveTooltipProps) {
  return (
    <div
      className={`fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-300 ${
        show ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {message}
    </div>
  );
}
