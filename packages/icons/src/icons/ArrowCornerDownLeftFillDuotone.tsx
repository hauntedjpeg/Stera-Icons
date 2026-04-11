import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 4.13c.48 0 .88.39.88.87v8A3.9 3.9 0 0 1 16 16.88H8.88v-1.75H16c1.17 0 2.13-.96 2.13-2.13V5c0-.48.39-.87.87-.87" opacity={.4} />
        <path d="M7.38 11.38a.88.88 0 0 1 1.5.62v8a.88.88 0 0 1-1.5.62l-4-4-.06-.07a.9.9 0 0 1 .06-1.17z" />
    </IconBase>
  ))
);

ArrowCornerDownLeftFillDuotone.displayName = 'ArrowCornerDownLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownLeftFillDuotone, ArrowCornerDownLeftFillDuotone as ArrowCornerDownLeftFillDuotoneIcon, ArrowCornerDownLeftFillDuotone as SiArrowCornerDownLeftFillDuotone };
export default ArrowCornerDownLeftFillDuotone;
export type { ArrowCornerDownLeftFillDuotoneProps };
