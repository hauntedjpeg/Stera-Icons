import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlidersFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SlidersFillDuotone = memo(
  forwardRef<SVGSVGElement, SlidersFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.26 16q-.13.48-.13 1t.13 1H2c-.55 0-1-.45-1-1s.45-1 1-1zM22 16c.55 0 1 .45 1 1s-.45 1-1 1h-3.26q.14-.48.14-1t-.14-1zM5.26 6q-.13.48-.13 1t.13 1H2c-.55 0-1-.45-1-1s.45-1 1-1zM22 6c.55 0 1 .45 1 1s-.45 1-1 1h-9.26q.13-.48.13-1t-.13-1z" opacity={0.4} />
        <path d="M15 13.13c2.14 0 3.88 1.73 3.88 3.87s-1.74 3.88-3.88 3.88-3.87-1.74-3.87-3.88 1.73-3.87 3.87-3.87M9 3.13c2.14 0 3.88 1.73 3.88 3.87S11.14 10.88 9 10.88 5.13 9.14 5.13 7 6.86 3.13 9 3.13" />
    </IconBase>
  ))
);

SlidersFillDuotone.displayName = 'SlidersFillDuotone';

// Triple export pattern
export { SlidersFillDuotone, SlidersFillDuotone as SlidersFillDuotoneIcon, SlidersFillDuotone as SiSlidersFillDuotone };
export default SlidersFillDuotone;
export type { SlidersFillDuotoneProps };
