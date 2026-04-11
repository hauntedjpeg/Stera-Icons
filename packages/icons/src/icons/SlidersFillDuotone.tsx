import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlidersFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SlidersFillDuotone = memo(
  forwardRef<SVGSVGElement, SlidersFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.26 16a4 4 0 0 0 0 2H2a1 1 0 1 1 0-2zM22 16a1 1 0 1 1 0 2h-3.26a4 4 0 0 0 0-2zM5.26 6a4 4 0 0 0 0 2H2a1 1 0 0 1 0-2zM22 6a1 1 0 1 1 0 2h-9.26a4 4 0 0 0 0-2z" opacity={0.4} />
        <path d="M15 13.13a3.88 3.88 0 1 1 0 7.75 3.88 3.88 0 0 1 0-7.75M9 3.13a3.88 3.88 0 1 1 0 7.75 3.88 3.88 0 0 1 0-7.76" />
    </IconBase>
  ))
);

SlidersFillDuotone.displayName = 'SlidersFillDuotone';

// Triple export pattern (lucide-react style)
export { SlidersFillDuotone, SlidersFillDuotone as SlidersFillDuotoneIcon, SlidersFillDuotone as SiSlidersFillDuotone };
export default SlidersFillDuotone;
export type { SlidersFillDuotoneProps };
