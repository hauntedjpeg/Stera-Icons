import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowLeftRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowLeftRightFill = memo(
  forwardRef<SVGSVGElement, ArrowLeftRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.17 6.7c.32-.14.7-.07.95.18l4.5 4.5a.9.9 0 0 1 .06 1.17l-.06.07-4.5 4.5a.88.88 0 0 1-1.5-.62v-3.63H7.37v3.63a.88.88 0 0 1-1.49.62l-4.5-4.5-.06-.07a.9.9 0 0 1 .06-1.17l4.5-4.5a.88.88 0 0 1 1.5.62v3.62h9.24V7.5c0-.35.22-.67.54-.8" />
    </IconBase>
  ))
);

ArrowLeftRightFill.displayName = 'ArrowLeftRightFill';

// Triple export pattern (lucide-react style)
export { ArrowLeftRightFill, ArrowLeftRightFill as ArrowLeftRightFillIcon, ArrowLeftRightFill as SiArrowLeftRightFill };
export default ArrowLeftRightFill;
export type { ArrowLeftRightFillProps };
