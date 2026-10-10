import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrightnessLowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrightnessLowBoldDuotone = memo(
  forwardRef<SVGSVGElement, BrightnessLowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 4.5c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1M13 19.5c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1M18.01 7.4c-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41M7.4 18.01c-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41M19.5 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M4.5 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1M16.6 18.01c-.4-.39-.4-1.02 0-1.41.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0M5.99 7.4c-.4-.39-.4-1.02 0-1.41.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0" opacity={0.4} />
        <path fillRule="evenodd" d="M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" clipRule="evenodd" />
    </IconBase>
  ))
);

BrightnessLowBoldDuotone.displayName = 'BrightnessLowBoldDuotone';

// Triple export pattern
export { BrightnessLowBoldDuotone, BrightnessLowBoldDuotone as BrightnessLowBoldDuotoneIcon, BrightnessLowBoldDuotone as SiBrightnessLowBoldDuotone };
export default BrightnessLowBoldDuotone;
export type { BrightnessLowBoldDuotoneProps };
