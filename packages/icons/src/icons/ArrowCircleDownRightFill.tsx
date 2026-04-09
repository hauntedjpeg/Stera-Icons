import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleDownRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleDownRightFill = memo(
  forwardRef<SVGSVGElement, ArrowCircleDownRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-down-right-fill" {...props}>
      <path fillRule="evenodd" d="M5.02 5.02a9.88 9.88 0 1 0 13.96 13.96A9.88 9.88 0 0 0 5.02 5.02m3.53 3.53a.9.9 0 0 1 1.24 0l4.16 4.17V9.17a.88.88 0 0 1 1.75 0v5.66a.9.9 0 0 1-.87.87H9.17a.88.88 0 0 1 0-1.75h3.55L8.55 9.8a.9.9 0 0 1 0-1.24" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleDownRightFill.displayName = 'ArrowCircleDownRightFill';

// Triple export pattern (lucide-react style)
export { ArrowCircleDownRightFill, ArrowCircleDownRightFill as ArrowCircleDownRightFillIcon, ArrowCircleDownRightFill as SiArrowCircleDownRightFill };
export default ArrowCircleDownRightFill;
export type { ArrowCircleDownRightFillProps };
