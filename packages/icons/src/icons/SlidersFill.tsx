import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlidersFillProps = Omit<IconBaseProps, 'children'>;

const SlidersFill = memo(
  forwardRef<SVGSVGElement, SlidersFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 13.13c1.8 0 3.3 1.21 3.74 2.87H22c.55 0 1 .45 1 1s-.45 1-1 1h-3.26c-.44 1.66-1.95 2.88-3.74 2.88-1.84 0-3.38-1.29-3.77-3H2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h9.23c.4-1.72 1.93-3 3.77-3M9 3.13c1.84 0 3.38 1.28 3.77 3H22c.48 0 .88.39.88.87s-.4.88-.88.88h-9.23c-.4 1.71-1.93 3-3.77 3s-3.38-1.29-3.77-3H2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h3.23c.4-1.72 1.93-3 3.77-3" />
    </IconBase>
  ))
);

SlidersFill.displayName = 'SlidersFill';

// Triple export pattern
export { SlidersFill, SlidersFill as SlidersFillIcon, SlidersFill as SiSlidersFill };
export default SlidersFill;
export type { SlidersFillProps };
