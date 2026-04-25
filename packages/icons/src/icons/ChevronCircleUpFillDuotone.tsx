import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m0 6.5q-.36 0-.62.25l-4 4a.88.88 0 0 0 1.24 1.24L12 10.74l3.38 3.38a.88.88 0 0 0 1.24-1.24l-4-4a1 1 0 0 0-.62-.26" clipRule="evenodd" opacity={.4} />
        <path d="M12 8.63q.36 0 .62.25l4 4a.88.88 0 0 1-1.24 1.24L12 10.74l-3.38 3.38a.88.88 0 0 1-1.24-1.24l4-4a1 1 0 0 1 .62-.26" />
    </IconBase>
  ))
);

ChevronCircleUpFillDuotone.displayName = 'ChevronCircleUpFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronCircleUpFillDuotone, ChevronCircleUpFillDuotone as ChevronCircleUpFillDuotoneIcon, ChevronCircleUpFillDuotone as SiChevronCircleUpFillDuotone };
export default ChevronCircleUpFillDuotone;
export type { ChevronCircleUpFillDuotoneProps };
