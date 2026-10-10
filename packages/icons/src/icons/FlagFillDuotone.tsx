import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlagFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlagFillDuotone = memo(
  forwardRef<SVGSVGElement, FlagFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.92 2.26c1.97-.24 3.35-.2 4.44.02s1.86.62 2.54.98 1.28.67 2.2.88c.94.21 2.25.32 4.27.16h.15c.72 0 1.36.59 1.36 1.37v8.92c0 .72-.56 1.3-1.25 1.36-2.17.2-3.69.12-4.86-.14-1.19-.25-1.98-.67-2.68-1.04-.68-.37-1.24-.67-2.08-.85-.72-.15-1.7-.22-3.13-.08V3.14c0-.49-.4-.88-.88-.88zM4.88 2.27h.01z" opacity={0.4} />
        <path d="M5 2.26c.48 0 .88.39.88.87V21c0 .48-.4.88-.88.88s-.87-.4-.87-.88V3.13c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

FlagFillDuotone.displayName = 'FlagFillDuotone';

// Triple export pattern
export { FlagFillDuotone, FlagFillDuotone as FlagFillDuotoneIcon, FlagFillDuotone as SiFlagFillDuotone };
export default FlagFillDuotone;
export type { FlagFillDuotoneProps };
