import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrightnessLowRegularProps = Omit<IconBaseProps, 'children'>;

const BrightnessLowRegular = memo(
  forwardRef<SVGSVGElement, BrightnessLowRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 18.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M5.99 16.6c.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41M16.6 16.6c.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41" />
        <path fillRule="evenodd" d="M12 7.25c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75S7.25 14.62 7.25 12 9.38 7.25 12 7.25m0 1.5c-1.8 0-3.25 1.46-3.25 3.25 0 1.8 1.46 3.25 3.25 3.25 1.8 0 3.25-1.46 3.25-3.25 0-1.8-1.46-3.25-3.25-3.25" clipRule="evenodd" />
        <path d="M4.5 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M19.5 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M5.99 5.99c.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41M16.6 5.99c.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41M12 3.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1" />
    </IconBase>
  ))
);

BrightnessLowRegular.displayName = 'BrightnessLowRegular';

// Triple export pattern
export { BrightnessLowRegular, BrightnessLowRegular as BrightnessLowRegularIcon, BrightnessLowRegular as SiBrightnessLowRegular };
export default BrightnessLowRegular;
export type { BrightnessLowRegularProps };
