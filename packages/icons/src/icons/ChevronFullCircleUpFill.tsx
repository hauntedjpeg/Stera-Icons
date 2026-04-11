import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleUpFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleUpFill = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 21.88a9.88 9.88 0 1 0 0-19.76 9.88 9.88 0 0 0 0 19.76m-2.99-7.5a1.12 1.12 0 0 1-.89-1.82l3-3.84a1.12 1.12 0 0 1 1.77 0l2.99 3.84c.57.74.04 1.81-.9 1.81z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleUpFill.displayName = 'ChevronFullCircleUpFill';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleUpFill, ChevronFullCircleUpFill as ChevronFullCircleUpFillIcon, ChevronFullCircleUpFill as SiChevronFullCircleUpFill };
export default ChevronFullCircleUpFill;
export type { ChevronFullCircleUpFillProps };
