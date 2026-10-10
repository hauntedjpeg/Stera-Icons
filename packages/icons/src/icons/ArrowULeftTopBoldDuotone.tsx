import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftTopBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftTopBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowULeftTopBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.5 7c3.59 0 6.5 2.91 6.5 6.5S17.09 20 13.5 20H9c-.55 0-1-.45-1-1s.45-1 1-1h4.5c2.49 0 4.5-2.01 4.5-4.5S15.99 9 13.5 9H6.41l-1-1 1-1z" opacity={.4} />
        <path d="M7.3 3.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L5.42 8l3.3 3.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-4-4Q3.01 8.43 3 8q0-.36.23-.63l.06-.08z" />
    </IconBase>
  ))
);

ArrowULeftTopBoldDuotone.displayName = 'ArrowULeftTopBoldDuotone';

// Triple export pattern
export { ArrowULeftTopBoldDuotone, ArrowULeftTopBoldDuotone as ArrowULeftTopBoldDuotoneIcon, ArrowULeftTopBoldDuotone as SiArrowULeftTopBoldDuotone };
export default ArrowULeftTopBoldDuotone;
export type { ArrowULeftTopBoldDuotoneProps };
