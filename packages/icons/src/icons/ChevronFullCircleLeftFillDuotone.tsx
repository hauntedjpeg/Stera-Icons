import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75M14.38 9c0-.93-1.08-1.46-1.82-.89l-3.84 3a1.12 1.12 0 0 0 0 1.77l3.84 2.99c.74.57 1.81.04 1.81-.9z" clipRule="evenodd" opacity={.4} />
        <path d="M12.56 8.12a1.12 1.12 0 0 1 1.82.9v5.97c0 .93-1.08 1.46-1.82.89l-3.84-3a1.12 1.12 0 0 1 0-1.77z" />
    </IconBase>
  ))
);

ChevronFullCircleLeftFillDuotone.displayName = 'ChevronFullCircleLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleLeftFillDuotone, ChevronFullCircleLeftFillDuotone as ChevronFullCircleLeftFillDuotoneIcon, ChevronFullCircleLeftFillDuotone as SiChevronFullCircleLeftFillDuotone };
export default ChevronFullCircleLeftFillDuotone;
export type { ChevronFullCircleLeftFillDuotoneProps };
