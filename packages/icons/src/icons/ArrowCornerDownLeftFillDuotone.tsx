import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 5.13c.48 0 .88.39.88.87 0 1.8 0 2.9-.3 3.82a5.9 5.9 0 0 1-3.76 3.77c-.92.3-2.03.29-3.82.29H9.88v-1.76H13c1.93 0 2.69 0 3.27-.2a4.1 4.1 0 0 0 2.65-2.65c.2-.58.2-1.34.2-3.27 0-.48.4-.87.88-.87" opacity={.4} />
        <path d="M8.38 7.38a.88.88 0 0 1 1.5.62v10a.88.88 0 0 1-1.5.62l-5-5-.06-.07a.9.9 0 0 1 .06-1.17z" />
    </IconBase>
  ))
);

ArrowCornerDownLeftFillDuotone.displayName = 'ArrowCornerDownLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownLeftFillDuotone, ArrowCornerDownLeftFillDuotone as ArrowCornerDownLeftFillDuotoneIcon, ArrowCornerDownLeftFillDuotone as SiArrowCornerDownLeftFillDuotone };
export default ArrowCornerDownLeftFillDuotone;
export type { ArrowCornerDownLeftFillDuotoneProps };
