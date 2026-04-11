import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlagFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlagFillDuotone = memo(
  forwardRef<SVGSVGElement, FlagFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.92 2.26a14 14 0 0 1 4.44.02c1.1.22 1.86.62 2.54.98s1.28.67 2.2.88c.94.21 2.25.32 4.27.16h.15c.72 0 1.36.59 1.36 1.37v8.92c0 .72-.56 1.3-1.25 1.36-2.17.2-3.69.12-4.86-.14a10 10 0 0 1-2.68-1.04c-.68-.37-1.24-.67-2.08-.85a11 11 0 0 0-3.13-.08V3.14a.87.87 0 0 0-.96-.88M4.88 2.27h.01z" opacity={0.4} />
        <path d="M5 2.26c.48 0 .88.39.88.87V21a.88.88 0 0 1-1.75 0V3.13c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

FlagFillDuotone.displayName = 'FlagFillDuotone';

// Triple export pattern (lucide-react style)
export { FlagFillDuotone, FlagFillDuotone as FlagFillDuotoneIcon, FlagFillDuotone as SiFlagFillDuotone };
export default FlagFillDuotone;
export type { FlagFillDuotoneProps };
