import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m.89 6.59a1.12 1.12 0 0 0-1.78 0l-2.99 3.84c-.57.74-.04 1.81.9 1.81h5.97c.93 0 1.46-1.07.89-1.81z" clipRule="evenodd" opacity={.4} />
        <path d="M11.11 8.72a1.12 1.12 0 0 1 1.78 0l2.99 3.84c.57.74.04 1.81-.9 1.82H9.02a1.12 1.12 0 0 1-.89-1.82z" />
    </IconBase>
  ))
);

ChevronFullCircleUpFillDuotone.displayName = 'ChevronFullCircleUpFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleUpFillDuotone, ChevronFullCircleUpFillDuotone as ChevronFullCircleUpFillDuotoneIcon, ChevronFullCircleUpFillDuotone as SiChevronFullCircleUpFillDuotone };
export default ChevronFullCircleUpFillDuotone;
export type { ChevronFullCircleUpFillDuotoneProps };
