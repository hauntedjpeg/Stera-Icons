import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleDownFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleDownFill = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleDownFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-down-fill" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m-2.99 7.5a1.12 1.12 0 0 0-.89 1.81l3 3.84c.44.58 1.32.58 1.77 0l2.99-3.84c.57-.74.04-1.81-.9-1.81z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleDownFill.displayName = 'ChevronFullCircleDownFill';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleDownFill, ChevronFullCircleDownFill as ChevronFullCircleDownFillIcon, ChevronFullCircleDownFill as SiChevronFullCircleDownFill };
export default ChevronFullCircleDownFill;
export type { ChevronFullCircleDownFillProps };
