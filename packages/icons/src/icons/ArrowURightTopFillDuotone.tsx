import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowURightTopFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowURightTopFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowURightTopFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.13 8.88H10.5a4.63 4.63 0 0 0 0 9.24H15a.88.88 0 0 1 0 1.75h-4.5a6.38 6.38 0 0 1 0-12.74h4.63z" opacity={.4} />
        <path d="M15.67 3.2c.32-.14.7-.07.95.18l4 4 .06.07a.9.9 0 0 1-.06 1.17l-4 4a.88.88 0 0 1-1.5-.62V4c0-.35.22-.67.54-.8" />
    </IconBase>
  ))
);

ArrowURightTopFillDuotone.displayName = 'ArrowURightTopFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowURightTopFillDuotone, ArrowURightTopFillDuotone as ArrowURightTopFillDuotoneIcon, ArrowURightTopFillDuotone as SiArrowURightTopFillDuotone };
export default ArrowURightTopFillDuotone;
export type { ArrowURightTopFillDuotoneProps };
