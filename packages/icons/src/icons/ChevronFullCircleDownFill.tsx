import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleDownFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleDownFill = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleDownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m-2.99 7.5c-.94 0-1.46 1.07-.89 1.81l3 3.84c.44.58 1.32.58 1.77 0l2.99-3.84c.57-.74.04-1.81-.9-1.81z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleDownFill.displayName = 'ChevronFullCircleDownFill';

// Triple export pattern
export { ChevronFullCircleDownFill, ChevronFullCircleDownFill as ChevronFullCircleDownFillIcon, ChevronFullCircleDownFill as SiChevronFullCircleDownFill };
export default ChevronFullCircleDownFill;
export type { ChevronFullCircleDownFillProps };
