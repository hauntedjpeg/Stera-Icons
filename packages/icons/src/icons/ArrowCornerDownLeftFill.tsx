import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownLeftFillProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownLeftFill = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="arrow-corner-down-left-fill" {...props}>
      <path d="M19 4.13c.48 0 .88.39.88.87v8A3.9 3.9 0 0 1 16 16.88H8.88V20a.88.88 0 0 1-1.5.62l-4-4-.06-.07a.9.9 0 0 1 .06-1.17l4-4a.88.88 0 0 1 1.5.62v3.13H16c1.17 0 2.13-.96 2.13-2.13V5c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

ArrowCornerDownLeftFill.displayName = 'ArrowCornerDownLeftFill';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownLeftFill, ArrowCornerDownLeftFill as ArrowCornerDownLeftFillIcon, ArrowCornerDownLeftFill as SiArrowCornerDownLeftFill };
export default ArrowCornerDownLeftFill;
export type { ArrowCornerDownLeftFillProps };
