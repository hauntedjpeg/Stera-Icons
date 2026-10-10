import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleRightFillProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleRightFill = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M2.13 12c0 5.45 4.42 9.88 9.87 9.88s9.88-4.43 9.88-9.88S17.45 2.13 12 2.13 2.13 6.55 2.13 12m7.5-2.99c0-.94 1.07-1.46 1.81-.89l3.84 3c.58.44.58 1.32 0 1.77l-3.84 2.99c-.74.57-1.81.04-1.81-.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleRightFill.displayName = 'ChevronFullCircleRightFill';

// Triple export pattern
export { ChevronFullCircleRightFill, ChevronFullCircleRightFill as ChevronFullCircleRightFillIcon, ChevronFullCircleRightFill as SiChevronFullCircleRightFill };
export default ChevronFullCircleRightFill;
export type { ChevronFullCircleRightFillProps };
