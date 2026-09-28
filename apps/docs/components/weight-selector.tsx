'use client';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

type Weight = 'regular' | 'bold' | 'fill';

interface WeightSelectorProps {
  selectedWeight: Weight;
  onWeightChange: (weight: Weight) => void;
}

const weights: { key: Weight; label: string }[] = [
  { key: 'regular', label: 'Regular' },
  { key: 'bold', label: 'Bold' },
  { key: 'fill', label: 'Fill' },
];

export function WeightSelector({
  selectedWeight,
  onWeightChange,
}: WeightSelectorProps) {
  return (
    <ToggleGroup
      variant="outline"
      aria-label="Icon weight"
      className="flex-1 min-w-0"
      value={[selectedWeight]}
      onValueChange={(value) => {
        // Pressing the active item sends an empty array; keep one weight selected
        const next = value[0] as Weight | undefined;
        if (next) onWeightChange(next);
      }}
    >
      {weights.map((weight) => (
        <ToggleGroupItem key={weight.key} value={weight.key} className="flex-1">
          {weight.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
