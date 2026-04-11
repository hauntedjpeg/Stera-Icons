import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.02 5.02a9.88 9.88 0 1 0 13.96 13.96A9.88 9.88 0 0 0 5.02 5.02m3.53 3.53a.9.9 0 0 1 1.24 0l4.16 4.17V9.17a.88.88 0 0 1 1.75 0v5.66a.9.9 0 0 1-.87.87H9.17a.88.88 0 0 1 0-1.75h3.55L8.55 9.8a.9.9 0 0 1 0-1.24" clipRule="evenodd" opacity={.4} />
        <path d="M8.55 8.55a.9.9 0 0 0 0 1.24l4.17 4.16H9.17a.88.88 0 0 0 0 1.75h5.66a.9.9 0 0 0 .87-.87V9.17a.88.88 0 0 0-1.75 0v3.55L9.8 8.55a.9.9 0 0 0-1.24 0" />
    </IconBase>
  ))
);

ArrowCircleDownRightFillDuotone.displayName = 'ArrowCircleDownRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownRightFillDuotone, ArrowCircleDownRightFillDuotone as ArrowCircleDownRightFillDuotoneIcon, ArrowCircleDownRightFillDuotone as SiArrowCircleDownRightFillDuotone };
export default ArrowCircleDownRightFillDuotone;
export type { ArrowCircleDownRightFillDuotoneProps };
