import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m.89 6.59c-.45-.58-1.33-.58-1.78 0l-2.99 3.84c-.57.74-.04 1.81.9 1.81h5.97c.93 0 1.46-1.07.89-1.81z" clipRule="evenodd" opacity={.4} />
        <path d="M11.11 8.72c.45-.58 1.33-.58 1.78 0l2.99 3.84c.57.74.04 1.81-.9 1.82H9.02c-.93 0-1.46-1.08-.89-1.82z" />
    </IconBase>
  ))
);

ChevronFullCircleUpFillDuotone.displayName = 'ChevronFullCircleUpFillDuotone';

// Triple export pattern
export { ChevronFullCircleUpFillDuotone, ChevronFullCircleUpFillDuotone as ChevronFullCircleUpFillDuotoneIcon, ChevronFullCircleUpFillDuotone as SiChevronFullCircleUpFillDuotone };
export default ChevronFullCircleUpFillDuotone;
export type { ChevronFullCircleUpFillDuotoneProps };
