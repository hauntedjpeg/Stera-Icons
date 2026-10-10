import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleUpFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleUpFill = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 21.88c5.45 0 9.88-4.43 9.88-9.88S17.45 2.13 12 2.13 2.13 6.55 2.13 12s4.42 9.88 9.87 9.88m-2.99-7.5c-.94 0-1.46-1.08-.89-1.82l3-3.84c.44-.58 1.32-.58 1.77 0l2.99 3.84c.57.74.04 1.81-.9 1.81z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleUpFill.displayName = 'ChevronFullCircleUpFill';

// Triple export pattern
export { ChevronFullCircleUpFill, ChevronFullCircleUpFill as ChevronFullCircleUpFillIcon, ChevronFullCircleUpFill as SiChevronFullCircleUpFill };
export default ChevronFullCircleUpFill;
export type { ChevronFullCircleUpFillProps };
