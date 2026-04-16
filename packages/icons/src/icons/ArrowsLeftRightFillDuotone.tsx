import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowsLeftRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowsLeftRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowsLeftRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.5 16.63a.88.88 0 0 1 0 1.75H7.38v-1.75zM16.63 8.38H3.5a.88.88 0 0 1 0-1.76h13.13z" opacity={0.4} />
        <path d="M5.88 12.88a.88.88 0 0 1 1.5.62v8a.88.88 0 0 1-1.5.62l-4-4a.9.9 0 0 1-.06-1.17l.06-.07zM17.16 2.7c.33-.14.7-.07.96.18l4 4 .06.07a.9.9 0 0 1-.06 1.17l-4 4a.88.88 0 0 1-1.5-.62v-8c0-.35.22-.67.54-.8" />
    </IconBase>
  ))
);

ArrowsLeftRightFillDuotone.displayName = 'ArrowsLeftRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowsLeftRightFillDuotone, ArrowsLeftRightFillDuotone as ArrowsLeftRightFillDuotoneIcon, ArrowsLeftRightFillDuotone as SiArrowsLeftRightFillDuotone };
export default ArrowsLeftRightFillDuotone;
export type { ArrowsLeftRightFillDuotoneProps };
