import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrightnessLowFillProps = Omit<IconBaseProps, 'children'>;

const BrightnessLowFill = memo(
  forwardRef<SVGSVGElement, BrightnessLowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 18.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M5.99 16.6c.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41M16.6 16.6c.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41M12 7.13c2.7 0 4.88 2.18 4.88 4.87 0 2.7-2.19 4.88-4.88 4.88-2.7 0-4.87-2.19-4.87-4.88 0-2.7 2.18-4.87 4.87-4.87M4.5 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M19.5 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M5.99 5.99c.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41M16.6 5.99c.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41M12 3.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1" />
    </IconBase>
  ))
);

BrightnessLowFill.displayName = 'BrightnessLowFill';

// Triple export pattern
export { BrightnessLowFill, BrightnessLowFill as BrightnessLowFillIcon, BrightnessLowFill as SiBrightnessLowFill };
export default BrightnessLowFill;
export type { BrightnessLowFillProps };
