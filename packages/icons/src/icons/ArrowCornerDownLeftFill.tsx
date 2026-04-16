import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 5.13c.48 0 .88.39.88.87 0 1.8 0 2.9-.3 3.82a5.9 5.9 0 0 1-3.76 3.77c-.92.3-2.03.29-3.82.29H9.88V18a.88.88 0 0 1-1.5.62l-5-5-.06-.07a.9.9 0 0 1 .06-1.17l5-5a.88.88 0 0 1 1.5.62v4.13H13c1.93 0 2.69-.02 3.27-.2a4.1 4.1 0 0 0 2.65-2.66c.2-.58.2-1.34.2-3.27 0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

ArrowCornerDownLeftFill.displayName = 'ArrowCornerDownLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownLeftFill, ArrowCornerDownLeftFill as ArrowCornerDownLeftFillIcon, ArrowCornerDownLeftFill as SiArrowCornerDownLeftFill };
export default ArrowCornerDownLeftFill;
export type { ArrowCornerDownLeftFillProps };
