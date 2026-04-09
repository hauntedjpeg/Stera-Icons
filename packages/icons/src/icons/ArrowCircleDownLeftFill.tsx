import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-down-left-fill" {...props}>
      <path fillRule="evenodd" d="M18.98 5.02A9.88 9.88 0 1 1 5.02 18.98 9.88 9.88 0 0 1 18.98 5.02m-3.53 3.53a.87.87 0 0 0-1.24 0l-4.16 4.17V9.17a.88.88 0 0 0-1.75 0v5.66a.9.9 0 0 0 .87.87h5.66a.88.88 0 0 0 0-1.75h-3.55l4.17-4.16a.87.87 0 0 0 0-1.24" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleDownLeftFill.displayName = 'ArrowCircleDownLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownLeftFill, ArrowCircleDownLeftFill as ArrowCircleDownLeftFillIcon, ArrowCircleDownLeftFill as SiArrowCircleDownLeftFill };
export default ArrowCircleDownLeftFill;
export type { ArrowCircleDownLeftFillProps };
