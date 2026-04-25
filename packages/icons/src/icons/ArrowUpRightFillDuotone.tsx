import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m13.5 11.74-6.88 6.88a.88.88 0 0 1-1.24-1.24l6.88-6.88z" opacity={.4} />
        <path d="M18 5.13c.48 0 .87.39.87.87v9a.88.88 0 0 1-1.49.62l-9-9A.88.88 0 0 1 9 5.12z" />
    </IconBase>
  ))
);

ArrowUpRightFillDuotone.displayName = 'ArrowUpRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowUpRightFillDuotone, ArrowUpRightFillDuotone as ArrowUpRightFillDuotoneIcon, ArrowUpRightFillDuotone as SiArrowUpRightFillDuotone };
export default ArrowUpRightFillDuotone;
export type { ArrowUpRightFillDuotoneProps };
