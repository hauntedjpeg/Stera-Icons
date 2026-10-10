import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M2.13 12c0 5.45 4.42 9.88 9.87 9.88s9.88-4.43 9.88-9.88S17.45 2.13 12 2.13 2.13 6.55 2.13 12m5 0c0-.48.39-.87.87-.87h5.89l-2.5-2.51c-.35-.34-.35-.9 0-1.24.33-.34.89-.34 1.23 0l4 4q.24.26.25.62 0 .36-.25.62l-4 4c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l2.5-2.5H8c-.48 0-.87-.4-.87-.88" clipRule="evenodd" opacity={.4} />
        <path d="M7.13 12c0 .48.39.87.87.87h5.89l-2.5 2.51c-.35.34-.35.9 0 1.24.33.34.89.34 1.23 0l4-4q.24-.27.25-.62 0-.36-.25-.62l-4-4c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24l2.5 2.5H8c-.48 0-.87.4-.87.88" />
    </IconBase>
  ))
);

ArrowCircleRightFillDuotone.displayName = 'ArrowCircleRightFillDuotone';

// Triple export pattern
export { ArrowCircleRightFillDuotone, ArrowCircleRightFillDuotone as ArrowCircleRightFillDuotoneIcon, ArrowCircleRightFillDuotone as SiArrowCircleRightFillDuotone };
export default ArrowCircleRightFillDuotone;
export type { ArrowCircleRightFillDuotoneProps };
