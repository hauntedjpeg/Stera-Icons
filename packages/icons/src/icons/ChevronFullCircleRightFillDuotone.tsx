import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-circle-right-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m-.56 6A1.12 1.12 0 0 0 9.63 9V15c0 .93 1.07 1.46 1.81.89l3.84-3c.58-.44.58-1.32 0-1.77z" clipRule="evenodd" opacity={.4} />
        <path d="M9.63 9.01c0-.93 1.07-1.46 1.81-.89l3.84 3c.58.44.58 1.32 0 1.77l-3.84 2.99c-.74.57-1.81.04-1.81-.9z" />
    </IconBase>
  ))
);

ChevronFullCircleRightFillDuotone.displayName = 'ChevronFullCircleRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullCircleRightFillDuotone, ChevronFullCircleRightFillDuotone as ChevronFullCircleRightFillDuotoneIcon, ChevronFullCircleRightFillDuotone as SiChevronFullCircleRightFillDuotone };
export default ChevronFullCircleRightFillDuotone;
export type { ChevronFullCircleRightFillDuotoneProps };
