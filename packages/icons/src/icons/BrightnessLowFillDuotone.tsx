import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrightnessLowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrightnessLowFillDuotone = memo(
  forwardRef<SVGSVGElement, BrightnessLowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 4.5c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1M13 19.5c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1M18.01 7.4c-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41M7.4 18.01c-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41M19.5 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M4.5 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M16.6 18.01c-.4-.39-.4-1.02 0-1.41.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0M5.99 7.4c-.4-.39-.4-1.02 0-1.41.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0" opacity={0.4} />
        <path fillRule="evenodd" d="M12 7.13c2.7 0 4.88 2.18 4.88 4.87 0 2.7-2.19 4.88-4.88 4.88-2.7 0-4.87-2.19-4.87-4.88 0-2.7 2.18-4.87 4.87-4.87m0 1.75c-1.73 0-3.12 1.4-3.12 3.12s1.4 3.13 3.12 3.13 3.13-1.4 3.13-3.13-1.4-3.12-3.13-3.12" clipRule="evenodd" />
    </IconBase>
  ))
);

BrightnessLowFillDuotone.displayName = 'BrightnessLowFillDuotone';

// Triple export pattern
export { BrightnessLowFillDuotone, BrightnessLowFillDuotone as BrightnessLowFillDuotoneIcon, BrightnessLowFillDuotone as SiBrightnessLowFillDuotone };
export default BrightnessLowFillDuotone;
export type { BrightnessLowFillDuotoneProps };
