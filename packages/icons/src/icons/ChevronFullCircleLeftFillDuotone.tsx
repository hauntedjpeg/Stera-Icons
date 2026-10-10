import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13M14.38 9c0-.93-1.08-1.46-1.82-.89l-3.84 3c-.58.44-.58 1.32 0 1.77l3.84 2.99c.74.57 1.81.04 1.81-.9z" clipRule="evenodd" opacity={.4} />
        <path d="M12.56 8.12c.74-.57 1.82-.04 1.82.9v5.97c0 .93-1.08 1.46-1.82.89l-3.84-3c-.58-.44-.58-1.32 0-1.77z" />
    </IconBase>
  ))
);

ChevronFullCircleLeftFillDuotone.displayName = 'ChevronFullCircleLeftFillDuotone';

// Triple export pattern
export { ChevronFullCircleLeftFillDuotone, ChevronFullCircleLeftFillDuotone as ChevronFullCircleLeftFillDuotoneIcon, ChevronFullCircleLeftFillDuotone as SiChevronFullCircleLeftFillDuotone };
export default ChevronFullCircleLeftFillDuotone;
export type { ChevronFullCircleLeftFillDuotoneProps };
