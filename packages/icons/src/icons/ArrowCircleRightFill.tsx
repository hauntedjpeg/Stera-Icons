import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleRightFill = memo(
  forwardRef<SVGSVGElement, ArrowCircleRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-circle-right-fill" {...props}>
      <path fillRule="evenodd" d="M2.13 12a9.88 9.88 0 1 0 19.75 0 9.88 9.88 0 0 0-19.75 0m5 0c0-.48.39-.87.87-.87h5.89l-2.5-2.51a.88.88 0 0 1 1.23-1.24l4 4a.9.9 0 0 1 0 1.24l-4 4a.88.88 0 0 1-1.24-1.24l2.5-2.5H8a.9.9 0 0 1-.87-.88" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleRightFill.displayName = 'ArrowCircleRightFill';

// Triple export pattern (lucide-react style)
export { ArrowCircleRightFill, ArrowCircleRightFill as ArrowCircleRightFillIcon, ArrowCircleRightFill as SiArrowCircleRightFill };
export default ArrowCircleRightFill;
export type { ArrowCircleRightFillProps };
