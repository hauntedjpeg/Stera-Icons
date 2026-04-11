import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m-2.99 7.5a1.13 1.13 0 0 0-.89 1.81l3 3.84c.44.58 1.32.58 1.77 0l2.99-3.84c.57-.74.04-1.81-.9-1.81z" clipRule="evenodd" opacity={.4} />
        <path d="M14.99 9.63c.93 0 1.46 1.07.89 1.81l-3 3.84c-.44.58-1.32.58-1.77 0l-2.99-3.84a1.12 1.12 0 0 1 .9-1.81z" />
    </IconBase>
  ))
);

ChevronFullCircleDownFillDuotone.displayName = 'ChevronFullCircleDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleDownFillDuotone, ChevronFullCircleDownFillDuotone as ChevronFullCircleDownFillDuotoneIcon, ChevronFullCircleDownFillDuotone as SiChevronFullCircleDownFillDuotone };
export default ChevronFullCircleDownFillDuotone;
export type { ChevronFullCircleDownFillDuotoneProps };
