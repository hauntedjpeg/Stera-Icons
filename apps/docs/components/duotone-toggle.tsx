'use client';

import { SiSquareBold, SiCheckSquareFill } from 'stera-icons';
import { Toggle } from '@/components/ui/toggle';

interface DuotoneToggleProps {
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
}

export function DuotoneToggle({ enabled, onToggle }: DuotoneToggleProps) {
  return (
    <Toggle variant="outline" pressed={enabled} onPressedChange={onToggle}>
      {enabled ? (
        <SiCheckSquareFill data-icon="inline-start" />
      ) : (
        <SiSquareBold data-icon="inline-start" />
      )}
      Duotone
    </Toggle>
  );
}
