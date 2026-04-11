import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlidersFillProps = Omit<IconBaseProps, 'children'>;

const SlidersFill = memo(
  forwardRef<SVGSVGElement, SlidersFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 13.13c1.8 0 3.3 1.21 3.74 2.87H22a1 1 0 1 1 0 2h-3.26a3.88 3.88 0 0 1-7.51-.12H2a.88.88 0 0 1 0-1.75h9.23c.4-1.72 1.93-3 3.77-3M9 3.13a3.9 3.9 0 0 1 3.77 3H22a.88.88 0 0 1 0 1.75h-9.23a3.88 3.88 0 0 1-7.54 0H2a.87.87 0 1 1 0-1.75h3.23c.4-1.72 1.93-3 3.77-3" />
    </IconBase>
  ))
);

SlidersFill.displayName = 'SlidersFill';

// Triple export pattern (lucide-react style)
export { SlidersFill, SlidersFill as SlidersFillIcon, SlidersFill as SiSlidersFill };
export default SlidersFill;
export type { SlidersFillProps };
