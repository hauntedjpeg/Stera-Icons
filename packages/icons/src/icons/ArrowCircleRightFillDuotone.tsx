import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M2.13 12a9.88 9.88 0 1 0 19.75 0 9.88 9.88 0 0 0-19.75 0m5 0c0-.48.39-.87.87-.87h5.89l-2.5-2.51a.88.88 0 0 1 1.23-1.24l4 4a.9.9 0 0 1 0 1.24l-4 4a.88.88 0 0 1-1.24-1.24l2.5-2.5H8a.9.9 0 0 1-.87-.88" clipRule="evenodd" opacity={.4} />
        <path d="M7.13 12c0 .48.39.87.87.87h5.89l-2.5 2.51a.88.88 0 0 0 1.23 1.24l4-4a.9.9 0 0 0 0-1.24l-4-4a.88.88 0 0 0-1.24 1.24l2.5 2.5H8c-.48 0-.87.4-.87.88" />
    </IconBase>
  ))
);

ArrowCircleRightFillDuotone.displayName = 'ArrowCircleRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCircleRightFillDuotone, ArrowCircleRightFillDuotone as ArrowCircleRightFillDuotoneIcon, ArrowCircleRightFillDuotone as SiArrowCircleRightFillDuotone };
export default ArrowCircleRightFillDuotone;
export type { ArrowCircleRightFillDuotoneProps };
