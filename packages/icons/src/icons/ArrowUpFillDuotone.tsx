import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.87 11.88V19a.88.88 0 0 1-1.74 0v-7.12z" opacity={.4} />
        <path d="M12 4.13q.36 0 .62.25l6 6a.88.88 0 0 1-.62 1.5H6a.88.88 0 0 1-.62-1.5l6-6a1 1 0 0 1 .62-.25" />
    </IconBase>
  ))
);

ArrowUpFillDuotone.displayName = 'ArrowUpFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowUpFillDuotone, ArrowUpFillDuotone as ArrowUpFillDuotoneIcon, ArrowUpFillDuotone as SiArrowUpFillDuotone };
export default ArrowUpFillDuotone;
export type { ArrowUpFillDuotoneProps };
