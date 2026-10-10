import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SlidersBoldProps = Omit<IconBaseProps, 'children'>;

const SlidersBold = memo(
  forwardRef<SVGSVGElement, SlidersBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15 13c1.86 0 3.43 1.27 3.87 3H22c.55 0 1 .45 1 1s-.45 1-1 1h-3.13c-.44 1.73-2 3-3.87 3-1.86 0-3.43-1.27-3.87-3H2c-.55 0-1-.45-1-1s.45-1 1-1h9.13c.44-1.73 2-3 3.87-3m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2M9 3c1.86 0 3.43 1.27 3.87 3H22c.55 0 1 .45 1 1s-.45 1-1 1h-9.13c-.44 1.73-2 3-3.87 3-1.86 0-3.43-1.27-3.87-3H2c-.55 0-1-.45-1-1s.45-1 1-1h3.13c.44-1.73 2-3 3.87-3m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

SlidersBold.displayName = 'SlidersBold';

// Triple export pattern
export { SlidersBold, SlidersBold as SlidersBoldIcon, SlidersBold as SiSlidersBold };
export default SlidersBold;
export type { SlidersBoldProps };
