import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 7.41V19c0 .55-.45 1-1 1s-1-.45-1-1V7.41l1-1z" opacity={.4} />
        <path d="M4.3 12.7c-.4-.38-.4-1.02 0-1.4l7-7c.38-.4 1.02-.4 1.4 0l7 7c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L12 6.42l-6.3 6.3c-.38.39-1.02.39-1.4 0" />
    </IconBase>
  ))
);

ArrowUpBoldDuotone.displayName = 'ArrowUpBoldDuotone';

// Triple export pattern
export { ArrowUpBoldDuotone, ArrowUpBoldDuotone as ArrowUpBoldDuotoneIcon, ArrowUpBoldDuotone as SiArrowUpBoldDuotone };
export default ArrowUpBoldDuotone;
export type { ArrowUpBoldDuotoneProps };
