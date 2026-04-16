'use client';

import clsx from 'clsx';

interface WeightSelectorProps {
  selectedWeight: 'regular' | 'bold' | 'fill';
  onWeightChange: (weight: 'regular' | 'bold' | 'fill') => void;
}

export function WeightSelector({
  selectedWeight,
  onWeightChange,
}: WeightSelectorProps) {
  const weights = [
    { key: 'regular' as const, label: 'Regular' },
    { key: 'bold' as const, label: 'Bold' },
    { key: 'fill' as const, label: 'Fill' },
  ];

  return (
    <div className="relative flex flex-1 min-w-0 items-center bg-zinc-900 dark:bg-zinc-950 rounded-full p-1">
      {weights.map((weight) => (
        <button
          key={weight.key}
          onClick={() => onWeightChange(weight.key)}
          className={clsx(
            'relative flex-1 p-2 text-xs/4 font-medium rounded-full transition-all',
            'focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-zinc-900',
            selectedWeight === weight.key
              ? 'bg-zinc-50 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-300'
              : 'text-zinc-50 dark:text-zinc-500 dark:hover:text-zinc-400'
          )}
          role="radio"
          aria-checked={selectedWeight === weight.key}
        >
          {weight.label}
        </button>
      ))}
    </div>
  );
}
