import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrightnessLowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrightnessLowFillDuotone = memo(
  forwardRef<SVGSVGElement, BrightnessLowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brightness-low-fill-duotone" {...props}>
      <path d="M13 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13 19.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M18.01 7.4A1 1 0 1 1 16.6 6 1 1 0 0 1 18 7.4M7.4 18.01A1 1 0 1 1 6 16.6 1 1 0 0 1 7.4 18M19.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2M4.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2M16.6 18.01A1 1 0 1 1 18 16.6 1 1 0 0 1 16.6 18M5.99 7.4A1 1 0 1 1 7.4 6 1 1 0 0 1 6 7.4" opacity={0.4} />
        <path fillRule="evenodd" d="M12 7.13a4.87 4.87 0 1 1 0 9.74 4.87 4.87 0 0 1 0-9.75m0 1.75a3.12 3.12 0 1 0 0 6.24 3.12 3.12 0 0 0 0-6.24" clipRule="evenodd" />
    </IconBase>
  ))
);

BrightnessLowFillDuotone.displayName = 'BrightnessLowFillDuotone';

// Triple export pattern (lucide-react style)
export { BrightnessLowFillDuotone, BrightnessLowFillDuotone as BrightnessLowFillDuotoneIcon, BrightnessLowFillDuotone as SiBrightnessLowFillDuotone };
export default BrightnessLowFillDuotone;
export type { BrightnessLowFillDuotoneProps };
