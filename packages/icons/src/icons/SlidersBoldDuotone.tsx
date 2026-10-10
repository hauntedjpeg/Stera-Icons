import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlidersBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SlidersBoldDuotone = memo(
  forwardRef<SVGSVGElement, SlidersBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.13 16q-.13.48-.13 1t.13 1H2c-.55 0-1-.45-1-1s.45-1 1-1zM22 16c.55 0 1 .45 1 1s-.45 1-1 1h-3.13q.13-.48.13-1t-.13-1zM5.13 6Q5 6.48 5 7t.13 1H2c-.55 0-1-.45-1-1s.45-1 1-1zM22 6c.55 0 1 .45 1 1s-.45 1-1 1h-9.13q.13-.48.13-1t-.13-1z" opacity={0.4} />
        <path fillRule="evenodd" d="M15 13c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2M9 3c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

SlidersBoldDuotone.displayName = 'SlidersBoldDuotone';

// Triple export pattern
export { SlidersBoldDuotone, SlidersBoldDuotone as SlidersBoldDuotoneIcon, SlidersBoldDuotone as SiSlidersBoldDuotone };
export default SlidersBoldDuotone;
export type { SlidersBoldDuotoneProps };
