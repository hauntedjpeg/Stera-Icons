import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.98 5.02A9.88 9.88 0 1 1 5.02 18.98 9.88 9.88 0 0 1 18.98 5.02m-3.53 3.53a.87.87 0 0 0-1.24 0l-4.16 4.17V9.17a.88.88 0 0 0-1.75 0v5.66a.9.9 0 0 0 .87.87h5.66a.88.88 0 0 0 0-1.75h-3.55l4.17-4.16a.87.87 0 0 0 0-1.24" clipRule="evenodd" opacity={.4} />
        <path d="M15.45 8.55c.34.34.34.9 0 1.24l-4.17 4.16h3.55a.88.88 0 0 1 0 1.75H9.17a.9.9 0 0 1-.87-.87V9.17a.88.88 0 0 1 1.75 0v3.55l4.16-4.17a.9.9 0 0 1 1.24 0" />
    </IconBase>
  ))
);

ArrowCircleDownLeftFillDuotone.displayName = 'ArrowCircleDownLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownLeftFillDuotone, ArrowCircleDownLeftFillDuotone as ArrowCircleDownLeftFillDuotoneIcon, ArrowCircleDownLeftFillDuotone as SiArrowCircleDownLeftFillDuotone };
export default ArrowCircleDownLeftFillDuotone;
export type { ArrowCircleDownLeftFillDuotoneProps };
