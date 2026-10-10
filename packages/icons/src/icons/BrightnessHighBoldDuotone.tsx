import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrightnessHighBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BrightnessHighBoldDuotone = memo(
  forwardRef<SVGSVGElement, BrightnessHighBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 18.5c.55 0 1 .45 1 1V22c0 .55-.45 1-1 1-.56 0-1-.45-1-1v-2.5c0-.55.44-1 1-1M5.99 16.6c.39-.4 1.02-.4 1.41 0 .4.38.4 1.02 0 1.4l-1.77 1.77c-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41zM16.6 16.6c.39-.4 1.02-.4 1.41 0l1.77 1.76c.4.4.4 1.02 0 1.41-.39.4-1.02.4-1.41 0l-1.77-1.76c-.4-.4-.4-1.03 0-1.42M4.5 11c.55 0 1 .44 1 1 0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1 0-.56.45-1 1-1zM22 11c.55 0 1 .44 1 1 0 .55-.45 1-1 1h-2.5c-.55 0-1-.45-1-1 0-.56.45-1 1-1zM4.23 4.22c.39-.4 1.02-.4 1.41 0l1.77 1.77c.39.39.39 1.02 0 1.41-.4.4-1.03.4-1.42 0L4.23 5.63c-.4-.39-.4-1.02 0-1.41M18.36 4.22c.4-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41L18.01 7.4c-.4.4-1.03.4-1.42 0-.39-.39-.39-1.02 0-1.41zM12 1c.55 0 1 .45 1 1v2.5c0 .55-.45 1-1 1-.56 0-1-.45-1-1V2c0-.55.44-1 1-1" opacity={0.4} />
        <path fillRule="evenodd" d="M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" clipRule="evenodd" />
    </IconBase>
  ))
);

BrightnessHighBoldDuotone.displayName = 'BrightnessHighBoldDuotone';

// Triple export pattern
export { BrightnessHighBoldDuotone, BrightnessHighBoldDuotone as BrightnessHighBoldDuotoneIcon, BrightnessHighBoldDuotone as SiBrightnessHighBoldDuotone };
export default BrightnessHighBoldDuotone;
export type { BrightnessHighBoldDuotoneProps };
