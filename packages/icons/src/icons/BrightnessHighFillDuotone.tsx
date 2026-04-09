import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrightnessHighFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrightnessHighFillDuotone = memo(
  forwardRef<SVGSVGElement, BrightnessHighFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brightness-high-fill-duotone" {...props}>
      <path d="M12 18.63c.48 0 .88.39.88.87V22a.88.88 0 0 1-1.76 0v-2.5c0-.48.4-.87.88-.87M6.08 16.68a.88.88 0 0 1 1.24 1.24l-1.77 1.77a.88.88 0 0 1-1.24-1.24zM16.7 16.68a.9.9 0 0 1 1.23 0l1.77 1.77a.88.88 0 0 1-1.24 1.24l-1.77-1.77a.87.87 0 0 1 0-1.24M4.5 11.12a.88.88 0 0 1 0 1.75H2a.88.88 0 0 1 0-1.75zM22 11.12a.88.88 0 0 1 0 1.75h-2.5a.88.88 0 0 1 0-1.75zM4.32 4.3a.9.9 0 0 1 1.24 0l1.76 1.77A.88.88 0 0 1 6.1 7.31L4.32 5.54a.9.9 0 0 1 0-1.23M18.45 4.3a.88.88 0 0 1 1.24 1.24l-1.77 1.77a.88.88 0 0 1-1.23-1.24zM12 1.13c.48 0 .88.39.88.87v2.5a.88.88 0 0 1-1.76 0V2c0-.48.4-.87.88-.87" opacity={0.4} />
        <path d="M12 7.13a4.87 4.87 0 1 1 0 9.74 4.87 4.87 0 0 1 0-9.75" />
    </IconBase>
  ))
);

BrightnessHighFillDuotone.displayName = 'BrightnessHighFillDuotone';

// Triple export pattern (lucide-react style)
export { BrightnessHighFillDuotone, BrightnessHighFillDuotone as BrightnessHighFillDuotoneIcon, BrightnessHighFillDuotone as SiBrightnessHighFillDuotone };
export default BrightnessHighFillDuotone;
export type { BrightnessHighFillDuotoneProps };
