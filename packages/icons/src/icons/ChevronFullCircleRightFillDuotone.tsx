import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m-.56 6c-.74-.58-1.81-.06-1.81.88V15c0 .93 1.07 1.46 1.81.89l3.84-3c.58-.44.58-1.32 0-1.77z" clipRule="evenodd" opacity={.4} />
        <path d="M9.63 9.01c0-.93 1.07-1.46 1.81-.89l3.84 3c.58.44.58 1.32 0 1.77l-3.84 2.99c-.74.57-1.81.04-1.81-.9z" />
    </IconBase>
  ))
);

ChevronFullCircleRightFillDuotone.displayName = 'ChevronFullCircleRightFillDuotone';

// Triple export pattern
export { ChevronFullCircleRightFillDuotone, ChevronFullCircleRightFillDuotone as ChevronFullCircleRightFillDuotoneIcon, ChevronFullCircleRightFillDuotone as SiChevronFullCircleRightFillDuotone };
export default ChevronFullCircleRightFillDuotone;
export type { ChevronFullCircleRightFillDuotoneProps };
