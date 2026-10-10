import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BrightnessLowBoldProps = Omit<IconBaseProps, 'children'>;

const BrightnessLowBold = memo(
  forwardRef<SVGSVGElement, BrightnessLowBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 18.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M5.99 16.6c.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41M16.6 16.6c.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41" />
        <path fillRule="evenodd" d="M12 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" clipRule="evenodd" />
        <path d="M4.5 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M19.5 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M5.99 5.99c.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41M16.6 5.99c.39-.4 1.02-.4 1.41 0 .4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0-.4-.39-.4-1.02 0-1.41M12 3.5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1" />
    </IconBase>
  ))
);

BrightnessLowBold.displayName = 'BrightnessLowBold';

// Triple export pattern
export { BrightnessLowBold, BrightnessLowBold as BrightnessLowBoldIcon, BrightnessLowBold as SiBrightnessLowBold };
export default BrightnessLowBold;
export type { BrightnessLowBoldProps };
